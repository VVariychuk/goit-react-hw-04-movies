import { React, Component,Suspense, lazy } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios'

import Reviews from './Reviews';
import s from './MovieDetails.module.css';

const  Cast = lazy(()=>import('./Casts')) ;
class MovieDetails extends Component {
    state = {
        movie: false
    }


    componentDidMount() {    
     let option = ''
      let id = this.props.match.params.movieId 
     axios.defaults.baseURL = "https://api.themoviedb.org/3/";
        axios.get(            
         `movie/${id}${option}?api_key=1a7532c831c19ca759402dbd11644ca2`   
        ).then(r => this.setState(
            { movie: r.data}
        ))   
    }

    goBackClickHandler = () => {
        const { location, history } = this.props;
     
        history.push(location?.state?.from||'/')
    }
    

    render() {
        const {title, poster_path, overview, vote_average, vote_count, genres, release_date, id} = this.state.movie
        const releaseDate = release_date && release_date.split('-')[0]
        const { match } = this.props
        const {from} = this?.props?.location?.state || {
      from: { pathname: '/' },
    };
        return (
            <div>
                {this.state.movie &&
                    <>
                    <button style={{ display: "block" }}
                        onClick={this.goBackClickHandler}
                    >
                        Go back
                    </button>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                     alt={title}
                />
                <h2>{title}({ releaseDate})</h2>
                <p>{overview}</p>
                <ul>
                        {genres?.map(({id, name}) =>
                        (<li key={ id}>
                        {name}
                    </li>)
                    )}
                </ul>
                <p>{vote_count}/{vote_average}</p>
                    
                <ul>
                <li className={s.ListItem}>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { from: from },
              }}
              className={s.NavLink}
              activeClassName={s.active}
            >
              Cast
            </NavLink>
          </li>
          <li className={s.ListItem}>
            <NavLink
              to={{
                pathname: `${match.url}/review`,
                state: { from: from },
              }}
              className={s.NavLink}
              activeClassName={s.active}
            >
              Review
            </NavLink>
          </li>
                </ul>
<Suspense>
                    {id && (
                       
          <Route path={`${match.path}/cast`} render={() => <Cast id={id} />} />
        )}
        {id && (
          <Route
            path={`${match.path}/review`}
            render={() => <Reviews id={id} />}
          />
        )}
        </Suspense>
                 </>
                    
                }
                
            </div>
        )
    }
}

export default MovieDetails;