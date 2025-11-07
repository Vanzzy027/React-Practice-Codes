import type { Context } from "hono";
import * as projectTaskService from "./project-tasks.service.js"; 
import type { ProjectTask, TaskStage } from "../project-tasks.interface.js";

// GET /api/tasks
export const getAllTasks = async (c: Context) => {
  try {
    const tasks = await projectTaskService.getAllTasksService();
    
    if (tasks.length === 0) {
      return c.json([]); // Return  if no tasks are found
    }
    return c.json(tasks);

  } catch (error) {
    console.log("Failed to fetch tasks:", error);
    return c.json({ error: 'Failed to fetch tasks' }, 500);
  }
};

//  GET TASK BY ID 
// GET /api/tasks/:task_id
export const getTaskById = async (c: Context) => {
  const task_id = parseInt(c.req.param("task_id"));

  try {
    const task = await projectTaskService.getTaskByIdService(task_id);
    if (task === null) {
      return c.json({ error: "No Task found" }, 404);
    }
    return c.json(task);

  } catch (error) {
    console.log('Error fetching task:', error);
    return c.json({ error: "Error fetching task" }, 500);
  }
};

//  CREATE NEW TASK 
// POST /api/tasks
export const createTask = async (c: Context) => {
  // Extract fields needed for creation (title, description, due_date)
  const { title, description, due_date } = await c.req.json();
  
  // New tasks are created in the 'todo' stage 
  const initialStage: TaskStage = 'todo'; 

  try {
    const newTask = await projectTaskService.createTaskService(title, description, initialStage, due_date);
    
    if (typeof newTask === "string" && newTask.includes("Failed")) {
      return c.json({ error: 'Task not created, try again later' }, 400);
    }
    
    // Assuming the service returns the complete created task object
    return c.json(newTask, 201); 

  } catch (error) {
    console.log("Error creating task:", error);
    return c.json({ error: "Failed to create task" }, 500);
  }
};

//  UPDATE TASK 
// PUT /api/tasks/:task_id
export const updateTask = async (c: Context) => {
  const task_id = parseInt(c.req.param("task_id"));
  
  // Extract ALL possible update fields
  const { title, description, stage, due_date } = await c.req.json(); 

  try {
    // Get the existing task data
    const existingTask = await projectTaskService.getTaskByIdService(task_id);
    
    if (existingTask === null) {
      return c.json({ error: "Task not found" }, 404);
    }

    //final values 
    
    const finalTitle: string = title !== undefined ? title : existingTask.title;
    const finalDescription: string = description !== undefined ? description : existingTask.description;
    const finalStage: TaskStage = stage !== undefined ? stage : existingTask.stage;
    
    const existingDateString = (existingTask.due_date || '').toString().split('T')[0];
    const finalDueDate: string = due_date !== undefined ? due_date : existingDateString;
    
    
    // Call the service with all required parameters
    const updatedTask = await projectTaskService.updateTaskService(
        task_id, 
        finalTitle, 
        finalDescription, 
        finalStage,
        finalDueDate
    );
    
    if (updatedTask === "Failed to update task try again") {
      return c.json({ error: "Failed to update task" }, 500); 
    }

    // Return the successful message
    return c.json({ message: updatedTask }, 200);

  } catch (error) {
    console.error('Error updating task:', error);
    return c.json({ error: 'Failed to update task due to server error' }, 500); 
  }
};

//  DELETE TASK 
// DELETE /api/tasks/:task_id
export const deleteTask = async(c: Context) => {
  const task_id = parseInt(c.req.param("task_id"));

  try {
    // 1. Check if task exists
    const existingTask = await projectTaskService.getTaskByIdService(task_id);
    if (existingTask === null) {
      return c.json({ error: "Task not found" }, 404);
    }

    // 2. Delete task
    const deletedMessage = await projectTaskService.deleteTaskByIdService(task_id);

    if (deletedMessage === "Failed to delete" ){
      return c.json({ error: deletedMessage }, 404);
    }

    return c.json({ message: "Task Deleted successfully 🗑️" }, 200);

  } catch (error) {
    console.error('Error deleting task:', error);
    return c.json({ error: 'Failed to delete task' }, 500);
  }  
};