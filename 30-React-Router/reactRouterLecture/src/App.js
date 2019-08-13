import React from 'react';
import HealerContainer from './HealerContainer'; 
import SearchBar from './SearchBar';
import NewHealerForm from './NewHealerForm'
import { Switch, Route } from 'react-router-dom';
import HealerCard from './HealerCard'
import Home from './Home'


class App extends React.Component {

  constructor(){
    super()
    this.state = {
        healers : [],
        searchTerm: ""
      }
  }

  componentDidMount(){
    //this is where I do my initial fetch
    console.log("App component did mount ran!")

    fetch('http://localhost:3000/healers')
    .then(res => res.json())
    .then(data => this.setState({healers:data}))

  }

  handleSearch = (e) => {
    //get the search term
    //set state to new search term
    this.setState({searchTerm: e.target.value})
  }

  addNewHealer = (newHealerObject) => {
    //be able to create a new healers array out of the previous one

    let newHealers = [...this.state.healers, newHealerObject]
    
    this.setState({healers: newHealers}, this.persistHealer(newHealerObject))

  }
  
  persistHealer(newObject){
    //fetch for POST 
    //try completing this part on your own!

  }

  filteredHealers(){
    //based of search term 
    //filter state to reflect search
    //return filtered array 
    return this.state.healers.filter(healer => healer.description.toLowerCase().includes(this.state.searchTerm))
  }

  componentDidUpdate(){
    console.log("App component did update ran!")
  }

  showHealer = (id) => {
    console.log('inside of showHealer:', id)
    let h = this.state.healers.filter(healer => (healer.id === Number(id)))
    console.log(h)
    return h
    }

  render(){
    return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch} />
        <Switch >
          <Route exact path='/newHealer' render={() => (<NewHealerForm addNewHealer={this.addNewHealer} />)} />
          <Route exact path='/healers' render={() => (<HealerContainer healers={this.filteredHealers()} />)} />
          <Route exact path='/healer/:id' render={({ match }) => {
           return <HealerCard healer={this.showHealer(match.params.id)}/>
          }} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }


}


export default App;
