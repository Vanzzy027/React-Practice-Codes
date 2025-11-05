
//import { JokesState, JokesAction, Joke } from './JokeTypes';
import jokesData from '../data/jokesData.json';
import type { Joke } from './JokeTypes';
import type {JokesState} from '../types/JokeTypes';
import type { JokesAction } from '../types/JokeTypes';

// Utility function to sort jokes ascending
const sortJokes = (jokesList: Joke[]) => {
    return [...jokesList].sort((a, b) => a.rating - b.rating);
};

// Initial state
export const initialState: JokesState = {
    jokes: sortJokes(jokesData),
    currentJokeIndex: 0,
};

export function jokesReducer(state: JokesState, action: JokesAction): JokesState {
    switch (action.type) {
        case 'ADD_JOKE': {
            const newJoke: Joke = {
                id: Date.now(),
                ...action.payload,
            };
            // Add and re list
            const updatedJokes = sortJokes([...state.jokes, newJoke]);

            return {
                ...state,
                jokes: updatedJokes,
            };
        }
        case 'DELETE_JOKE': {
            const updatedJokes = state.jokes.filter(joke => joke.id !== action.payload.id);
            if (updatedJokes.length === 0) {
                return { jokes: [], currentJokeIndex: 0 };
            }

            const newIndex = Math.min(state.currentJokeIndex, updatedJokes.length - 1);
            return {
                ...state,
                jokes: updatedJokes,
                currentJokeIndex: newIndex,
            };
        }
        case 'NEXT_JOKE': {
            const nextIndex = (state.currentJokeIndex + 1) % state.jokes.length;
            return { ...state, currentJokeIndex: nextIndex };
        }
        case 'PREVIOUS_JOKE': {
            const prevIndex = (state.currentJokeIndex - 1 + state.jokes.length) % state.jokes.length;
            return { ...state, currentJokeIndex: prevIndex };
        }
        default:
            return state;
    }
}
