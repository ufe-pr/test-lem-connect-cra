import logo from './logo.svg';
import './App.css';
import { ConnectWalletButton, LaserEyesModalProvider } from 'lasereyes-modal-connect';
import 'lasereyes-modal-connect/dist/style.css';

function App() {
  return (
    <LaserEyesModalProvider>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ConnectWalletButton />
      </header>
    </div>
    </LaserEyesModalProvider>
  );
}

export default App;
