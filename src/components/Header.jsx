import icon from "../assets/TrollFace.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={icon} alt="" className="header-image" />
        <h2 className="header-title">Meme Generator</h2>
        <p className="header-name">React Course - Project 3</p>
      </header>
    </>
  );
}
