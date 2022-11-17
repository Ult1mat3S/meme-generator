import memesData from "../memesData.jsx";
import { useState } from "react";

export default function Meme() {
  const [image, setImage] = useState("");

  function getRandomMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setImage(memesArray[randomNumber].url);
  }

  return (
    <>
      <main>
        <form className="form">
          <input
            type="text"
            name="form-input"
            id="form-input"
            placeholder="Text"
          />
          <input
            type="text"
            name="form-input"
            id="form-input"
            placeholder="Text"
          />
          <button type="button" onClick={getRandomMeme} className="form-button">
            Get a new meme image 🖼️
          </button>
        </form>
        <img src={image} alt="" className="meme-image" />
      </main>
    </>
  );
}
