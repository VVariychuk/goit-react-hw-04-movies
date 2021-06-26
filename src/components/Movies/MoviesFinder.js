import { React, Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';

import Searchbar from './Searchbar';
import ImageGallery from '../ImageGallery';

class MoviesFinder extends Component {
    state = {
        query: '',
        movies: [],
        page: 1,
    }

    componentDidMount() {
    const { query } = this.getQueryFromProps(this.props);
    let { page = 1 } = this.getQueryFromProps(this.props);
    page = +page;
    if (query) {
      this.setState({ query, page });
    }
  }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props);
        if (this.state.query !== prevState.query) {
            axios.defaults.baseURL = "https://api.themoviedb.org/3/";
            axios.get(
                `search/movie/?api_key=1a7532c831c19ca759402dbd11644ca2&page=${this.state.page}&query=${this.state.query}`
            ).then(r => {
                this.setState(
                    { movies: r.data.results }
                )
                this.props.history.push({ search: `query=${this.state.query}&page=${this.state.page}` })

            })
        }
    }

    getQueryFromProps = props => {
        console.log(props);
       return queryString.parse(props.location.search)
    };

    onSubmit = (query) => {
        this.setState({
            query
        })
    }

    render () {
        return (
            <>
                <Searchbar onSubmit={this.onSubmit} />
                {this.state.movies[0] && 
                    <ImageGallery
                        movies={this.state.movies}
                    />
                }

            </>
        )
    }
}

export default MoviesFinder