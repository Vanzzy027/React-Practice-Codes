export type TaskStage = 'todo' | 'in_progress' | 'awaiting_review' | 'done';

export interface ProjectTask {
    task_id: number;
    title: string;
    description: string;
    stage: TaskStage;
    due_date: string;
    created_at: string;
}
