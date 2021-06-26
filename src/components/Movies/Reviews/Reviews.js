import { React, Component } from 'react';
import axios from 'axios';

class Reviews extends Component {
    state = {
        reviews: null
    }

    componentDidMount() {
        let {id} = this.props
        axios.defaults.baseURL = "https://api.themoviedb.org/3/";
        axios.get(            
         `movie/${id}/reviews?api_key=1a7532c831c19ca759402dbd11644ca2`   
        ).then(r => this.setState(
            { reviews: r.data.results}
        ))   
    }

    render() {
        const {reviews} = this.state
        return (
            <>
            {reviews?.length > 0  
            ? <ul>
                {reviews.map((
                    {author,
                    content,                      
                    id
                    }) => (
                    <li key={id}>
                        <h3>Author: {author}</h3>
                        <p>{content}</p>                        
                    </li>
                    ))}
                    </ul> 
                    : <p>We have no reviews</p>
            }    
            </>
        )
    }

}

export default Reviews