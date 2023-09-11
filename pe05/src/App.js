import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Recipe Finder Application
        </h1>
        <h7>
        Recipe List &emsp; Add Recipe &emsp; Recipe Details
        </h7>
      </header>
      <h1>
        Add Recipe
      </h1>
      <div>
           Recipe Name:&emsp;
            <input type="text" id="right"/>
            <br></br>
            Ingredients:&emsp;
            <input type="large textbox" id="right"/>
            <br></br>
            Steps:&emsp;
            <input type="textbox" id="right"/>
            <br></br><br></br>
            <button type="button">Add Recipe</button>
          </div>
    </div>
    
  );
}

export default App;
