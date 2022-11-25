import memesData from "../memesData.jsx";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getRandomMeme() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
        <img src={meme.randomImage} alt="" className="meme-image" />
      </main>
    </>
  );
}
