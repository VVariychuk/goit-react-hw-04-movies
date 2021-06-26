import { React, Component } from 'react';
import axios from 'axios';
import ImageGallery from '../ImageGallery'

class Home extends Component {
    state = {
        movies:[]
    }

    onMovieClick = () => { }

    componentDidMount() {
        const random = Math.floor(Math.random() * (500 - 1)) + 1
        axios.defaults.baseURL = "https://api.themoviedb.org/3/";
        axios.get(
         `/trending/movie/week?api_key=1a7532c831c19ca759402dbd11644ca2&page=${random}`   
        ).then(r => this.setState(
            { movies: r.data.results}
        ))
        
    }
    render(){
        return (
            <>
                <h1>This is Home page</h1>
                <ImageGallery
                    movies={this.state.movies}
                    movieClickHandler={this.onMovieClick}
                />
            </>
            
        )
     }
    
};

export default Home;