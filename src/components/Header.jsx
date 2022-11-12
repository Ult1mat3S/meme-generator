import icon from "../assets/trollface.png";

export default function Header() {
  return (
    <>
      <nav>
        <div>
          <img src={icon} alt="" className="header-image" />
          <h1 className="header-header">Meme Generator</h1>
          <p className="header-paragraph">React Course - Project 3</p>
        </div>
      </nav>
    </>
  );
}
