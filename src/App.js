import './App.css';
import Provider from './Context/Provider';
import LineChart from './Grafico/Grafico';
import Calculadora from './calculadora/Calculadora';

function App() {
  return (
    <Provider>
      <Calculadora />
      <LineChart />
    </Provider>
  );
}

export default App;
