import { useEffect, useReducer, type CSSProperties } from 'react';
import TaskCard from './components/TaskCard';
import './App.css';
import axios from 'axios';
import { useForm, type SubmitHandler } from 'react-hook-form';

// Config
// Use the single, correct API URL for all requests
const API_BASE_URL = 'http://localhost:8081/api/tasks';

// NEW TASK INTERFACES
export type TaskStage = 'todo' | 'in_progress' | 'awaiting_review' | 'done';

export interface ProjectTask {
  task_id: number;
  title: string;
  description: string;
  stage: TaskStage; 
  due_date: string;
  created_at: string;
}

type FormValues = {
  title: string;
  description: string;
  due_date: string;
};

// REDUCER SETUP
type State = {
  tasks: ProjectTask[];
  loading: boolean;
  adding: boolean;
};

type Action = 
  | { type: 'SET_TASKS'; payload: ProjectTask[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ADDING'; payload: boolean }
  | { type: 'MOVE_TASK'; payload: { task_id: number; newStage: TaskStage } }
  | { type: 'DELETE_TASK'; payload: number }
  | { type: 'ADD_TASK'; payload: ProjectTask };

const initialState: State = {
  tasks: [],
  loading: false,
  adding: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_TASKS':
      return { ...state, tasks: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ADDING':
      return { ...state, adding: action.payload };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(t => t.task_id !== action.payload)
      };
    case 'MOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.task_id === action.payload.task_id
            ? { ...task, stage: action.payload.newStage }
            : task
        ),
      };
    case 'ADD_TASK':
      // Ensure new task is added to the beginning or end of the list
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
}

// APP COMPONENT

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

  const KANBAN_STAGES: { stage: TaskStage, title: string, color: string }[] = [
    { stage: 'todo', title: '💡 To Do', color: '#ff7675' },
    { stage: 'in_progress', title: '🛠️ In Progress', color: '#74b9ff' },
    { stage: 'awaiting_review', title: '👀 Awaiting Review', color: '#ffeaa7' },
    { stage: 'done', title: '✅ Done', color: '#55efc4' },
  ];

  // API CALLS

  const fetchTasks = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      //  Using the constant API_BASE_URL for GET request
      const response = await axios.get<ProjectTask[]>(API_BASE_URL);
      dispatch({ type: 'SET_TASKS', payload: response.data });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      //Add an alert/toast notification here
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const updateTaskStage = async (id: number, newStage: TaskStage) => {
    try {
      const taskToUpdate = state.tasks.find(t => t.task_id === id);
      if (!taskToUpdate) return;
      
      const payload = {
        title: taskToUpdate.title,
        description: taskToUpdate.description,
        // Ensure date is cool
        due_date: taskToUpdate.due_date ? new Date(taskToUpdate.due_date).toISOString().split('T')[0] : '', 
        stage: newStage // The key field being updated
      };
      
      // Using the constant API_BASE_URL for PUT request
      await axios.put(`${API_BASE_URL}/${id}`, payload);
      
      dispatch({ type: 'MOVE_TASK', payload: { task_id: id, newStage } }); 
    } catch (error) {
      console.error('Error updating task stage:', error);
      alert('Failed to update task stage.');
      fetchTasks(); 
    }
  };

  const deleteTask = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      // Using the constant API_BASE_URL for DELETE request
      await axios.delete(`${API_BASE_URL}/${id}`);
      dispatch({ type: 'DELETE_TASK', payload: id });
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task.');
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchTasks();
  }, []);


  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      dispatch({ type: 'SET_ADDING', payload: true });
      const payload = { 
          ...data, 
          // New tasks start in the 'todo' stage 
          stage: 'todo' as TaskStage
      };
      
      // Using the constant API_BASE_URL for POST request
      const response = await axios.post<ProjectTask>(API_BASE_URL, payload);
      
      dispatch({ type: 'ADD_TASK', payload: response.data }); 
      alert('Task added successfully!');
      reset(); 
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to add task.');
    } finally {
      dispatch({ type: 'SET_ADDING', payload: false });
    }
  };

  const { tasks, loading, adding } = state;

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1400px',
      margin: '0 auto',
      fontFamily: 'Roboto, sans-serif',
      background: '#f4f7f6', 
      minHeight: '100vh'
    }}>
      {/* Header */}
      <header style={{
        textAlign: 'center',
        marginBottom: '30px',
        color: '#2d3748',
        borderBottom: '3px solid #e2e8f0',
        paddingBottom: '15px'
      }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}>
          🚀 Kanban Management Board
        </h1>
      </header>
      
      {/* Add Task Form */}
      <div style={{
        background: 'white',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto 40px auto',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
      }}>
        <h3 style={{ color: '#4a5568', margin: '0 0 15px 0', textAlign: 'center' }}>
          ➕ Create New Task
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            {...register("title", { required: "Title is required!" })}
            placeholder="Title (e.g., Implement login feature)"
            style={formInputStyle}
          />
          <textarea
            {...register("description", { required: "Description is required!" })}
            placeholder="Description of the task..."
            rows={3}
            style={{ ...formInputStyle, resize: 'vertical' } as CSSProperties}
          />
          <input
            {...register("due_date", { required: "Due date is required!" })}
            type="date"
            style={formInputStyle}
          />
          
          <button
            type="submit"
            disabled={adding}
            style={formButtonStyle}
          >
            {adding ? 'Adding...' : '➡️ Add Task'}
          </button>
          
          {/* Display validation errors */}
          {Object.keys(errors).length > 0 && 
            <p style={{ color: '#e53e3e', textAlign: 'center', margin: '0' }}>
              Please fill in all required fields correctly.
            </p>}
        </form>
      </div>

      {/* Kanban Board Columns */}
      {loading ? (
        <LoadingMessage />
      ) : (
        <div style={kanbanBoardStyle}>
          {KANBAN_STAGES.map(column => (
            <Column
              key={column.stage}
              title={column.title}
              color={column.color}
              tasks={tasks.filter(t => t.stage === column.stage)}
              stages={KANBAN_STAGES}
              updateTaskStage={updateTaskStage}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

// STYLES AND HELPER COMPONENTS 

const formInputStyle: CSSProperties = {
    padding: '12px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
};

const formButtonStyle: CSSProperties = {
    background: '#4299e1',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s',
    'hover': { background: '#3182ce' } as any, 
};

const kanbanBoardStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '0 10px'
};

interface ColumnProps {
    stage: TaskStage;
    title: string;
    color: string;
    tasks: ProjectTask[];
    stages: { stage: TaskStage, title: string, color: string }[];
    updateTaskStage: (id: number, newStage: TaskStage) => void;
    deleteTask: (id: number) => void;
}

const Column = ({ title, color, tasks, stages, updateTaskStage, deleteTask }: ColumnProps) => {
    const columnStyle: CSSProperties = {
        background: '#ffffff',
        borderRadius: '12px',
        padding: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        borderTop: `5px solid ${color}`,
    };

    return (
        <div style={columnStyle}>
            <h3 style={{ color: '#2d3748', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {title} <span style={{ background: color, color: '#333', fontSize: '0.8rem', padding: '4px 8px', borderRadius: '15px', fontWeight: 'bold' }}>{tasks.length}</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {tasks.map(task => (
                    <TaskCard 
                        key={task.task_id} 
                        task={task} 
                        stages={stages} 
                        updateTaskStage={updateTaskStage} 
                        deleteTask={deleteTask}
                    />
                ))}
                {tasks.length === 0 && (
                    <p style={{ color: '#a0aec0', textAlign: 'center', marginTop: '10px' }}>No tasks in this stage.</p>
                )}
            </div>
        </div>
    );
};

const LoadingMessage = () => (
    <div style={{
        gridColumn: '1 / -1',
        background: 'rgba(255,255,255,0.9)',
        borderRadius: '15px',
        padding: '30px',
        color: '#4299e1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '15px' }}>⏳</div>
        <p style={{ margin: 0, fontSize: '1.0rem', fontWeight: '600' }}>Loading tasks...</p>
    </div>
);