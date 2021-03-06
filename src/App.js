import React, {Component} from 'react'
import SearchBar from "./Components/SearchBar";
import youtube from './apis/youtube'
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onTermSubmit('c# game')
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = video => this.setState({selectedVideo: video});

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui column">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
