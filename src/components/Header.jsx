import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="images/troll-face.png" alt="Troll face" className="image" />
        <p className="name">Meme Generator</p>
      </div>
    </header>
  );
}
