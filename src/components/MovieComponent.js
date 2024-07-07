import styled from "styled-components";

// const MovieContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   width: 250px;
//   box-shadow: 0 3px 10px 0 #aaa;
//   cursor: pointer;
// `;
// const CoverImage = styled.img`
//   object-fit: cover;
//   height: 362px;
// `;
// const MovieName = styled.span`
//   font-size: 18px;
//   font-weight: 600;
//   color: black;
//   margin: 15px 0;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;
// const InfoColumn = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;
// const MovieInfo = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   color: black;
//   white-space: nowrap;
//   overflow: hidden;
//   text-transform: capitalize;
//   text-overflow: ellipsis;
// `;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 230px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 300px; /* Adjust height as needed */
  border-radius: 5px;
  /* Add a slight border for contrast */
  border: 1px solid #ddd;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333; /* Darker gray for better contrast */
  margin: 10px 0;
  text-align: center;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px; /* Add space between title and info */
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: normal; /* Lighter weight for readability */
  color: #777;
  text-transform: capitalize;
`;

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;
  return (
    <MovieContainer
      onClick={() => {
        props.onMovieSelect(imdbID);
      }}
    >
      <CoverImage src={Poster}></CoverImage>
      <MovieName>{Title}</MovieName>
      <InfoColumn>
        <MovieInfo>Year:{Year}</MovieInfo>
        <MovieInfo>Type:{Type}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};

export default MovieComponent;
