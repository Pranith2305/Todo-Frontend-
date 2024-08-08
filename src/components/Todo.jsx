import React from 'react';

function Todo({ todos }) {
  // Define inline styles
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Allow items to wrap to the next line
    gap: '10px', // Space between items
    padding: '20px',
  };

  const itemStyle = {
    flex: '1 1 calc(33.333% - 20px)', // 3 items per row with spacing considered
    boxSizing: 'border-box', // Include padding and border in element's total width and height
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    minWidth: '200px', // Optional: minimum width for responsiveness
  };

  const titleStyle = {
    fontSize: '1.5rem',
    margin: '0',
    color: '#333',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    color: '#666',
    margin: '5px 0',
  };

  const buttonStyle = {
    backgroundColor: '#FF0000',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  };

  // Apply styles
  return (
    <div style={containerStyle}>
      {todos.map(todo => (
        <div key={todo.id} style={itemStyle}>
          <h1 style={titleStyle}>{todo.title}</h1>
          <h2 style={descriptionStyle}>{todo.description}</h2>
          <button style={buttonStyle}>
            {todo.completed ? "COMPLETED" : "Mark to be completed"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
