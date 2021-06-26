import { React, Component } from 'react';
import axios from 'axios';

class Cast extends Component {
    state = {
        cast: null
    }

    componentDidMount() {
        let {id} = this.props
        axios.defaults.baseURL = "https://api.themoviedb.org/3/";
        axios.get(            
         `movie/${id}/credits?api_key=1a7532c831c19ca759402dbd11644ca2`   
        ).then(r => this.setState(
            { cast: r.data.cast}
        ))   
    }

    render() {
        const {cast} = this.state
        return (
            <>
            {cast?.length > 0 && 
            <ul>
                {cast.map((
                    { profile_path,
                    original_name,
                        character,
                    id
                    }) => (
                    <li key={id}>
                        <h3>{original_name}</h3>
                        <h4>{character}</h4>
                        <img src={
                         profile_path
                        ?`https://image.tmdb.org/t/p/w500${profile_path}`
                        :'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'}
                            alt={original_name} />
                    </li>
                    ))}
            </ul> }
            </>
             
        )
    }

}

export default Cast