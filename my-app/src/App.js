import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingProper from './components/StatefulGreetingProper';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting name="Bob" />
      <FunctionalGreetingWithProps greeting="Nice to meet you" name="Bob" age="42" />
      <StatefulGreeting greeting="I'm a Stateful Greeting!" />
      <StatefulGreetingWithPrevState greeting="I'm Stateful!" />
      <StatefulGreetingProper greeting="I'm still Stateful" />
    </div>
  );
}

export default App;