import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
import _ from 'lodash'


const apiKey = "AIzaSyAYUCSw7qSvgN7Jn3oDr2C4-so3hsNPKQw";


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			videos: [],
			selectedVideo: null
		};

		this.videoSearch("soccer")

	}

	videoSearch(term) {
		YTSearch({key: apiKey, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {

		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)
		return (
				<div>
					<SearchBar onSearchTermChange={videoSearch}/>  
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList 
							videos={this.state.videos}
							onVideoSelect={selectedVideo => {this.setState({selectedVideo})}}
					/>
				</div>
		)
	}


}

ReactDOM.render(<App />, document.querySelector(".container"));



