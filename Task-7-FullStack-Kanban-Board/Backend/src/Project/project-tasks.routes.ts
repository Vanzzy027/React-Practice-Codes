import { Hono } from 'hono';
import * as projectTasksController from './project-tasks.controller.js';


const taskRoutes = new Hono();


// Kanban Board Endpoints (/tasks)

// Get all Tasks
taskRoutes.get('/tasks', projectTasksController.getAllTasks); 

// Get a task

taskRoutes.get('/tasks/:task_id', projectTasksController.getTaskById);

    //  Create a new Task
taskRoutes.post('/tasks', projectTasksController.createTask);




// Update a Task 

taskRoutes.put('/tasks/:task_id', projectTasksController.updateTask);

// Delete a Task

taskRoutes.delete('/tasks/:task_id', projectTasksController.deleteTask);

//  Export the new task routes
export default taskRoutes;