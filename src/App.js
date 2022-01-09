import "./App.css";
import Clock from "./components/icons/clock";
import Ethereum from "./components/icons/ethereum";

function App() {
  return (
    <main className="App">
      <div className="card-container">
        <div className="card-image">
          <img src="image-equilibrium.jpg" alt="equilibrium" />
        </div>
        <div className="card-content">
          <h2>Equilibrium #3429</h2>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div>
            <strong>
              <Ethereum fill="currentColor" />
              0.041 ETH
            </strong>
            <strong>
              <Clock fill="currentColor" width="100" />3 days left
            </strong>
          </div>
        </div>

        <div className="card-footer">
          <p>Creation of Jules Wyvern</p>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Héctor Manuel Perdomo</a>.
      </div>
    </main>
  );
}

export default App;
