import React, { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleDeleteTasks(deleteTasksText) {
    setTasks(tasks.filter((task)=> task.text !== deleteTasksText));
  }

  const visibleTasks = tasks.filter (
    (task) => category === "All" || task.category === category 
  );



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectedCategory={setCategory}
      />
    <div className="taks">
      <h5>Tasks</h5>
      <NewTaskForm
        categories ={CATEGORIES.filter((phillip) => phillip !== "All")}
        onTaskFormSubmit={handleAddTask}
      />
    </div>
      <TaskList onDeleteTask={handleDeleteTasks} tasks={visibleTasks}/>
    </div>
  );
}

export default App;
