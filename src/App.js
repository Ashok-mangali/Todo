import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="todo-wrap">
        <div className="todo-tittle">
          <div className="todo-item">
            <label>Tittle</label>
            <input type="text" placeholder="Enter the Tittle" />
          </div>
          <div className="todo-item">
            <label>Description</label>
            <input type="text" placeholder="Enter the Tittle" />
          </div>
          <div className="todo-item">
            <button type="button">Add</button>
          </div>
        </div>
        <div className="todo-item">
          <button type="button">Todo</button>
          <button type="button">Completed</button>
        </div>
        <div className="todo-list">
          <div className="todo-list-item"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
