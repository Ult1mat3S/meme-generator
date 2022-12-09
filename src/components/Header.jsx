import TrollFace from "../assets/TrollFace.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={TrollFace} alt="" className="header-image" />
        <h2 className="header-title">Meme Generator</h2>
        <p className="header-name">React Course - Project 3</p>
      </header>
    </>
  );
}
