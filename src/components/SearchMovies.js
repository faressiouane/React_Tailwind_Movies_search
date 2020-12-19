import { useState } from "react";

export default function SearchMovies({handleSubmit}) {

    const [query, setQuery] = useState("") // user input

    // update query state
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    
    //emit event to handleSubmit prop with query value
    const search = (e)=>{ 
        e.preventDefault();
        handleSubmit(query)
    }
    
    return (
        <>
       <form
        onSubmit={search} 
        className="grid"
       >
           <label 
            htmlFor="query"
            className="mb-1 uppercase text-sm"
           >
            find a movie :
           </label>

           <input
            onChange={handleChange} 
            className="text-lg py-2 px-8 leading-10 rounded-full border border-gray-50 border-solid mb-4"
            type="text" 
            name="query" 
            placeholder="title, author, actor ...!"
            value={query}
            />

           <button
            className="bg-gray-600 py-2 border border-solid border-gray-900 rounded-full text-lg font-semibold cursor-pointer hover:bg-gray-700 transition duration-500" 
            type="submit"
           >
            Search
           </button>
       </form>
       </>
    )
}
