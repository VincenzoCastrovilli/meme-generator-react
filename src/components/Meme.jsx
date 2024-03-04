import './Meme.css';

export default function Meme() {
  return (
    <main>
      <form className="form">
        <input
          type="text"
          name=""
          id=""
          className="form-input"
          placeholder="Top Text"
        />
        <input
          type="text"
          name=""
          id=""
          className="form-input"
          placeholder="Bottom Text"
        />
        <button className="form-button">Get a new meme image</button>
      </form>
    </main>
  );
}
