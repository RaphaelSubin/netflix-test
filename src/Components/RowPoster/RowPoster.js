import React, { useEffect, useState } from 'react'
import './RowPoster.css'
import axios from '../../axios'
import {imageUrl} from '../../Constants/Constants'
function RowPoster(props) {
    const [movies,setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then((Response)=>{
            console.log(Response.data);
            setMovies(Response.data.results)
        })

    }, [])
    return (
        <div 
        className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                <img className={props.isSmall ?'smallPoster': 'poster'} alt='poster'  src= {`${imageUrl+obj.backdrop_path}`} />
                )}
                </div>
        </div>
    )
}

export default RowPoster
