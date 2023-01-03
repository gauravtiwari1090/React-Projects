import React from "react";
import { Component } from "react";
import "./App.css";
import Cardlist from "./component/card-list/card-list.component";
import Searhbox from "./component/searchbox/searchbox.components";
class App extends Component {
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
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
        
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {

     const {monsters,searchField}=this.state;
     const{onSearchChange}=this;
   
      

    const filteredmonsters = monsters.filter((monstering) => {
      return monstering.name
        .toLocaleLowerCase()
        .includes(searchField);
    });

    return (
      <div className="App">
   
      <h1 className="app-title">Gaurav's Monsters</h1>
       <Searhbox onChangeHandler={onSearchChange} placeholder='search monster' className="monstersearch-box"/>
       <Cardlist monsters={filteredmonsters}/>


     
      </div>
    );
  }
}

export default App;
