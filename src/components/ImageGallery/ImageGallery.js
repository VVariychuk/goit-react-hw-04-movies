import { NavLink, withRouter  } from 'react-router-dom';


import s from './ImageGallery.module.css'

const ImageGallery = ({movies, location}) => {
    return (
        <ul
            className={s.ImageGallery}>
            {movies.map(({ id, poster_path, title, vote_average}) => (
                poster_path &&
           
            <li className={s.ImageGalleryItem}
                        key={id}>
                 <NavLink
            to={{
                pathname: `/movies/${id}`,
                state: { from: location },
            }}
        >            
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={s.ImageGalleryItemImage} />
            <h2>{title}</h2>
                        <p>{vote_average}</p>
            </NavLink>
    </li>
                
            ))}
        </ul>
    )
}

export default withRouter(ImageGallery);