import React, { Component } from 'react';
import '../index.css';
import apiKey from '../config.js'
import axios from 'axios'
import { withRouter } from 'react-router';

import Pic from './Pic'
import NoPics from './NoPics'

class Display extends Component {

    // define state, pics array is empty to start and query has default value of space
    state = {
        pics: [],
        query: 'space'
    }

    // when component first mounts, get space pics
    componentDidMount() {
        this.performSearch('space')
    }
    
    // when component updates, check if previous search value matches current, if not then run new search
    componentDidUpdate(prevProps) {
        if (this.props.match.params.searchVal !== prevProps.match.params.searchVal) {
            this.performSearch();
        }
    };

    // gets data via axios using API key in config.js and search value in url route
    performSearch = () => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.match.params.searchVal}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
                pics: response.data.photos.photo,
                query: this.props.match.params.searchVal
            })
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error)
        })
    }

    render() {
        // create new variable pics to hold all Pic components
        let pics

        // if the state of pics data return from search is not empty, then map each pic to the pics array
        // else, render the NoPics component
        if (this.state.pics.length > 0) {
            pics = this.state.pics.map(pic => <Pic url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} />)
        } else {
            pics = <NoPics />
        }
        return(
            <div className="photo-container">
                <h2>{this.state.query}</h2>
                <ul>{pics}</ul>
            </div>
        )
    }

}

export default withRouter(Display)