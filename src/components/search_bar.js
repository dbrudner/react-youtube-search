import React, {Component} from 'react'


class SearchBar extends Component {

	constructor(props) {
		super(props)

		this.state= { term: ''};
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<input 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		)
	}

	onInputChange(term) {
		this.setState({term: term});
		this.props.onSearchTermChange(term);
	}

}


export default SearchBar

// <input onChange={event => this.setState({ term: event.target.value })} />