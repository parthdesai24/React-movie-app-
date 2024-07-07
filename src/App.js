import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";
import { useState } from "react";
import axios from "axios";

export const API_KEY = "3df560d";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const AppName = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;
// const Header = styled.div`
//   background-color: black;
//   color: white;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: row;
//   align-items: center;
//   padding: 10px;
//   font-size: 25px;
//   font-weight: bold;
//   box-shadow: 0 3px 6px 0 #555;
// `;
// const SearchBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 10px 10px;
//   border-radius: 6px;
//   margin-left: 20px;
//   width: 50%;
//   background-color: white;
// `;
// const SearchIcon = styled.img`
//   width: 32px;
//   height: 32px;
// `;
// const SearchInput = styled.input`
//   color: black;
//   font-size: 16px;
//   font-weight: bold;
//   border: none;
//   outline: none;
//   margin-left: 15px;
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: #154e60; /* Changed background color */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px; /* Increased padding */
  font-size: 1.8rem; /* Increased font size */
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Increased box shadow */
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 25px; /* Increased border-radius */
  background-color: #f5f5f5; /* Lighter background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const SearchIcon = styled.img`
  width: 30px; /* Increased size */
  height: 30px; /* Increased size */
  margin-right: 10px; /* Adjusted spacing */
`;
const SearchInput = styled.input`
  color: #333;
  font-size: 1.2rem; /* Increased font size */
  font-weight: bold;
  border: none;
  outline: none;
  background: transparent;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 24px;
  justify-content: space-evenly;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;

function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [selectedMovie, onMovieSelect] = useState();
  const [movieList, updateMovieList] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    console.log(response);
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src="/movie-icon.svg"></MovieImage>
          React Movie App
        </AppName>
        <SearchBox>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      {selectedMovie && (
        <MovieInfoComponent
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <Placeholder src="/movie-icon.svg"></Placeholder>
        )}
      </MovieListContainer>
    </Container>
  );
}

export default App;
