import { type CSSProperties } from 'react';
import type { ProjectTask, TaskStage } from '../App'; 

interface TaskCardProps {
    task: ProjectTask;
    stages: { stage: TaskStage, title: string, color: string }[];
    updateTaskStage: (id: number, newStage: TaskStage) => void;
    deleteTask: (id: number) => void;
}

const TaskCard = ({ task, stages, updateTaskStage, deleteTask }: TaskCardProps) => {
    
    // color 
    const currentStageColor = stages.find(s => s.stage === task.stage)?.color || '#ccc';

    const cardStyle: CSSProperties = {
        background: '#fff',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        borderLeft: `5px solid ${currentStageColor}`,
        transition: 'all 0.3s ease',
    };

    const handleStageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStage = e.target.value as TaskStage;
        if (newStage !== task.stage) {
            updateTaskStage(task.task_id, newStage);
        }
    };

    return (
        <div style={cardStyle}>
            <h4 style={{ margin: '0 0 10px 0', color: '#2d3748', fontSize: '1.1rem' }}>
                {task.title}
            </h4>
            
            <p style={{ margin: '0 0 15px 0', color: '#4a5568', fontSize: '0.9rem' }}>
                {task.description}
            </p>

            {/* Metadata */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                fontSize: '0.85rem',
                color: '#718096',
                marginBottom: '15px'
            }}>
                <span style={{ 
                    fontWeight: 'bold',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: '#e2e8f0'
                }}>
                    🗓️ Due: {new Date(task.due_date).toLocaleDateString()}
                </span>
                <span>
                    ➕ Added: {new Date(task.created_at).toLocaleDateString()}
                </span>
            </div>

            {/* Stage Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <label style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Status:</label>
                <select 
                    value={task.stage} 
                    onChange={handleStageChange}
                    style={{
                        padding: '6px 10px',
                        borderRadius: '6px',
                        border: `1px solid ${currentStageColor}`,
                        outline: 'none',
                        cursor: 'pointer',
                        flexGrow: 1
                    }}
                >
                    {stages.map(s => (
                        <option key={s.stage} value={s.stage}>
                            {s.title}
                        </option>
                    ))}
                </select>
            </div>

            {/* Delete Button */}
            <button
                onClick={() => deleteTask(task.task_id)}
                style={{
                    width: '100%',
                    background: '#e53e3e',
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'background 0.3s',
                }}
            >
                🗑️ Delete Task
            </button>
        </div>
    );
};

export default TaskCard;