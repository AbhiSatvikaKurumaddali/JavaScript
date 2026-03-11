import {addTask,getAllTasks,completeTask}from './task.js'
                  // Test your module system
                  // 1. Add some tasks
                  addTask("sleep","medium","12-03-2026")
                  addTask("eat","high","12-03-2026")
                  addTask("buy groceries","low","12-03-2026")
                  // 2. Display all tasks
                  getAllTasks()
                  // 3. Complete a task
                  completeTask(1)
                  // 4. Display all tasks again
                  getAllTasks()