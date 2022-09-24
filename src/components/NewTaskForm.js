import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Food");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((phillip) => (
            <option key={phillip}>{phillip}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;