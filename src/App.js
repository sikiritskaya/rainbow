import './App.css';
import Rainbow from './components/Rainbow';

function App() {
  let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple']
  return (
    <Rainbow colors={colors}> Hello </Rainbow>
  )
}

export default App;
