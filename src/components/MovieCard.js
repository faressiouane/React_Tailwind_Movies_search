import React from 'react'

export default function MovieCard({movie}) {
    return (
        <div className=" block bg-white p-5 rounded-2xl mx-auto">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="block mx-auto rounded"/>
            <h1 className="mt-2 font-bold">{movie.title}</h1>
            <small className="block text-xm text-gray-400">release date : {movie.release_date} </small>
            <small className="block text-xm text-gray-400">vote average : {movie.vote_average} </small>
            <p className="block mt-5 text-xs text-gray-500"> {movie.overview} </p>
        </div>
    )
}
