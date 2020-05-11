import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends React.Component {
	constructor(){
		super();
		this.state = {
			robots : [],
			searchfield: ''
		};
	}

//fetching robots robots from API
componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
	.then (users =>this.setState({ robots: users}) );
}

onSearchChange = (event) =>{
	this.setState({searchfield: event.target.value }) //use setSetate to change prop of state.
}
	render(){
		const { robots, searchfield } = this.state;
		const filteredRobots = robots
						.filter(robots => {
							return robots.name.toLowerCase()
									.includes(searchfield.toLowerCase())	
							} );
		if (robots.length === 0) return (<h1> Loading </h1>);
		else return (
			<div className='tc'>
			<h1> RoboFriends </h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>
			</div>
		);
	}
}

export default App;