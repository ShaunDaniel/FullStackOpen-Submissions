import "./App.css";

function App (props) {
  return (
    <div className="App">
      <div>
        <h1>Notes</h1>
        <ul>
        {props.notes.map((note,i)=> <li key={i}>{note.content}</li>)}

        </ul>
      </div>
    </div>
  );
}

export default App;
