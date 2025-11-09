-- DBName= ProjectTasksDB
-- Drop the old table if you want to start fresh
-- IF OBJECT_ID('ProjectTasks', 'U') IS NOT NULL
--    DROP TABLE ProjectTasks;
--GO

-- Create the new ProjectTasks table
CREATE TABLE ProjectTasks (
    task_id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX),
    -- The status of the task, matching the frontend TaskStage type (enum implementation)
    stage NVARCHAR(50) NOT NULL CHECK (stage IN ('todo', 'in_progress', 'awaiting_review', 'done')),
    due_date DATE NOT NULL,
    created_at DATETIMEOFFSET DEFAULT SYSDATETIMEOFFSET()
);
GO

-- Insert some initial data
INSERT INTO ProjectTasks (title, description, stage, due_date) VALUES 
('Setup Database Schema', 'Create the initial ProjectTasks table and connection.', 'done', '2025-11-15'),
('Design Kanban Frontend', 'Implement the App.tsx and TaskCard.tsx with useReducer.', 'in_progress', '2025-11-20'),
('Implement Backend Endpoints', 'Create services and controllers for /api/tasks CRUD operations.', 'todo', '2025-11-25'),
('Write Unit Tests', 'Create tests for the API controllers.', 'awaiting_review', '2025-11-30');
GO


SELECT * FROM ProjectTasks