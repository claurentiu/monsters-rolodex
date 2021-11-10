//https://cognizant.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/14754858#overview

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

//clasele fata de functii au o mai mare utilitate
/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello Catalin'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button onClick={() => this.setState({ string: 'Hello Laur' })}>Change text</button>
        </header>
      </div>
    );
  }
}

export default App;
*/

//[catalin.cristoiu@SVROLP03171 monsters-rolodex % yarn add gh-pages for github deployment


import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component { //React.Component si nu mai importam Component
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    //for other methods that not comes from Component (like render or componentDidMount and so on...) 
    //we need to explicit set the <i>this</i> context; otherwise we will get undefined when we use this
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  //for other methods that not comes from Component (like render or componentDidMount and so on...) 
  //we need to explicit set the <i>this</i> context; otherwise we will get undefined when we use this
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value })
  // }
//OR we can use Arrow functions
//when the component is getting run by js for the first time, is detected the arrow function was defined (inside this App component) and set the this context auttomatically
//Arrow functions = auttomatically bind the context  
handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    //Object destructuring
    const { monsters, searchField } = this.state; // <=> const monsters = this.state.monsters; const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        {/* <input type='search'
          placeholder='search monsters'
          onChange={e => { //synthetic event
            //when setState is called React will call render method
            this.setState({ searchField: e.target.value }, () => //setState este asynchronous so we need to use this callback function
              console.log(this.state)
            );
          }}
        />  */}
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          //handleChange={e => this.setState({ searchField: e.target.value })}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;


