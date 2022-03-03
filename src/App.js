import './App.css';
import { Content } from './components/content';
import { Navigation } from './components/navigation';
import { Wrapper } from './wrapper/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navigation/>
        <Content/>
      </Wrapper>
    </div>
  );
}

export default App;
