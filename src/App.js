import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Dictionary</h1>
        </div>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <div id="creator_links">
          This app was coded with ♡ by{" "}
          <a
            href="https://www.shecodes.io/graduates/147891-emily-huggins"
            rel="noreferrer noreopener"
          >
            Emily Huggins
          </a>{" "}
          | Open-source coded on{" "}
          <a
            href="https://github.com/emilyrh/react-dictionary-app"
            rel="noreferrer noreopener"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://comfy-kangaroo-2360d1.netlify.app"
            rel="noreferrer noreopener"
          >
            Netlify
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
