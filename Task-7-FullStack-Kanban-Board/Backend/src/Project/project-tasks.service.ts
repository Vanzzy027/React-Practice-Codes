
import { getDbPool } from "../db/config.js";
import type { ProjectTask, TaskStage } from "../project-tasks.interface.js";
//  GET ALL TASKS SERVICE 
export const getAllTasksService = async (): Promise<ProjectTask[]> => {
    const db = getDbPool();
    // 💡 Query the new ProjectTasks table
    const results = await db.request().query('SELECT * FROM ProjectTasks');
    return results.recordset.length > 0 ? results.recordset : [];
};


//  GET TASK BY ID SERVICE 
// Retrieve a single task by its ID
export const getTaskByIdService = async (task_id: number): Promise<ProjectTask | null> => {
    const db = getDbPool();
    const result = await db.request()
        .input('task_id', task_id)
        // 💡 Query the new ProjectTasks table
        .query('SELECT * FROM ProjectTasks WHERE task_id = @task_id');

    return result.recordset[0] || null;
};


//  CREATE NEW TASK SERVICE 
// Creates a new task, defaulting to the 'todo' stage (as set in the controller)
export const createTaskService = async (
    title: string, 
    description: string, 
    stage: TaskStage, 
    due_date: string
): Promise<ProjectTask | string> => {
    const db = getDbPool();
    
    // We expect the controller to pass the initial stage ('todo')
    try {
        const result = await db.request()
            .input('title', title)
            .input('description', description)
            .input('stage', stage)
            .input('due_date', due_date)
            // 💡 INSERT into the ProjectTasks table with all new fields
            .query(`
                INSERT INTO ProjectTasks (title, description, stage, due_date) 
                VALUES (@title, @description, @stage, @due_date);
                SELECT * FROM ProjectTasks WHERE task_id = SCOPE_IDENTITY(); -- Retrieve the full created record
            `);
            
        // Return the newly created task object
        if (result.recordset.length > 0) {
            return result.recordset[0] as ProjectTask;
        }

        return "Failed to create task try again";
    } catch (error) {
        console.error("SQL Error during task creation:", error);
        return "Failed to create task try again";
    }
};


//  UPDATE TASK SERVICE 
// Updates an existing task with all parameters provided by the controller
export const updateTaskService = async (
    task_id: number, 
    title: string, 
    description: string, 
    stage: TaskStage,
    due_date: string
): Promise<string> => {
    const db = getDbPool();
    
    try {
        const result = await db.request()
            .input('task_id', task_id)
            .input('title', title)
            .input('description', description)
            .input('stage', stage) // The stage field handles status changes
            .input('due_date', due_date)
            // 💡 UPDATE the ProjectTasks table with all fields
            .query(`
                UPDATE ProjectTasks 
                SET 
                    title = @title, 
                    description = @description, 
                    stage = @stage, 
                    due_date = @due_date 
                WHERE task_id = @task_id
            `);
            
        return result.rowsAffected[0] === 1 ? "Task Updated Successfully" : "Failed to update task try again";
    } catch (error) {
        console.error("SQL Error during task update:", error);
        // Throw an error to be caught by the controller's try/catch block
        throw new Error("Database update failed"); 
    }
};


//  DELETE TASK SERVICE 
// Deletes a task by its ID
export const deleteTaskByIdService = async (task_id: number): Promise<string> => {
    const db = getDbPool();
    const result = await db.request()
        .input("task_id", task_id)
        // 💡 DELETE from the ProjectTasks table
        .query('DELETE FROM ProjectTasks WHERE task_id = @task_id');
        
    return result.rowsAffected[0] === 1 ? "Task deleted successfully" : "Failed to delete";
};