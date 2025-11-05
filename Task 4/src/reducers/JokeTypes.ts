import React from "react";

export interface Joke {
    id: number;
    joke: string;
    rating: number;
}


export interface JokesState {
    jokes: Joke[];
    currentJokeIndex: number;
}


export type JokesAction =
    | { type: 'ADD_JOKE', payload: Omit<Joke, 'id'> }
    | { type: 'DELETE_JOKE', payload: { id: number } }
    | { type: 'NEXT_JOKE' }
    | { type: 'PREVIOUS_JOKE' };
