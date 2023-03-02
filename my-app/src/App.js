import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import HooksCounter from './components/HooksCounter';
import ClassGreeting from './components/ClassGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting name="John" />
      <ClassGreeting name="Anna" />
      <HooksCounter name="Mike" />
    </div>
  );
}

export default App;