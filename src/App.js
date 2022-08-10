
import './App.css';
import { Hello } from './components/hello';
import { Logo } from './components/logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <Hello />
      <div className='cow'>cow</div>
      <div className='img'>
        <img src='data:image/png;base64,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'></img>
      </div>
    </div>
  );
}

export default App;
