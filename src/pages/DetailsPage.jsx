import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layouts from "../components/Layouts";

// Here we handle the delete as buttons.

const DetailsPage = () => {
  const { artObjectId } = useParams();
  const [pieceOfArt, setPieceOfArt] = useState();
  

  const fetchPieceOfArt = async () => {
    try {
      const response = await fetch(
        `http://localhost:5005/details/details/${artObjectId}`
      );
      console.log(response);
      if (response.status === 200) {
        const parsed = await response.json();
        setPieceOfArt(parsed);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPieceOfArt();
  }, []);

  useEffect(() => {
    console.log(pieceOfArt);
  }, [pieceOfArt]);

  return pieceOfArt ? (
    <Layouts>
      <div>
        <h1>{pieceOfArt.title} </h1>
        <h2>Artist: {pieceOfArt.artist} </h2>
        <h2>Technic: {pieceOfArt.technic} </h2>
        <h2>Price: {pieceOfArt.price} </h2>
        <p>Description: {pieceOfArt.description} </p>
        
      </div>
    </Layouts>
  ) : (
    <Layouts>
      <h1>Loading...</h1>
    </Layouts>
  );
};

export default DetailsPage;
