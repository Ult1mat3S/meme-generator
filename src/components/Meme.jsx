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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <>
      <main>
        <form className="form">
          <input
            type="text"
            name="topText"
            id="topText"
            placeholder="Enter top text"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bottomText"
            id="bottomText"
            placeholder="Enter bottom text"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button type="button" onClick={getRandomMeme} className="form-button">
            Get a new meme image 🖼️
          </button>
        </form>
        <div className="meme">
          <img src={meme.randomImage} alt="" className="meme-image" />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </>
  );
}
