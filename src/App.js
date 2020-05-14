import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchField } from "./components/search-field/search-field.component";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
      <h1>Monsters</h1>  
      <SearchField
          placeholder="Search Monster"
          handleChange={(e) => this.setState({searchField: e.target.value})}
        ></SearchField>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
