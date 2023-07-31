// import React, { useState } from "react";
// import "./style.css"
// import { searchMovies } from "../../utils/utilities";
// const Navigation = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const handleInput = (event) => {
//     setSearchValue(event.target.value);
//   };
//   const handleSearch = async () => {
//     const results = await searchMovies(searchValue);
//     setSearchResults(results.results);
//   };

//   return (
//  <div className="Nav">
//      <nav className="navbar">
//     <h1>M<span>oo</span>vie</h1>
//         <div className="Searchbar">
//           <input value={searchValue} onChange={handleInput} type="text" placeholder="Search"/>
//           <button onClick={handleSearch}>Search</button>
//         </div>
//           <li>Home</li>
//           <li>My list</li>
//           <button>Sign in</button>
//       </nav>
//       {searchResults.length > 0 && (
//         <div className="results">
//           {searchResults.map((movie) => (
//             <div key={movie.id} className="result">
//                  <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 />
//             <h3>{movie.title}</h3>
//             <p>{movie.overview}</p>
//             </div>
//              ))}
//         </div>
//      )}
//     </div>
//   );
// };
// export default Navigation;














