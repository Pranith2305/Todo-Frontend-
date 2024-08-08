import { useState } from "react";

export default function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '8px',
    width: '300px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <input
        id="title"
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <input
        id="desc"
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
      />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description
            }),
            headers: {
              "content-type": "application/json"
            }
          }).then(async function(res) {
            const json = await res.json();
            alert("Todo added!");
          });
        }}
        style={buttonStyle}
      >
        Add a Todo
      </button>
    </div>
  );
}
