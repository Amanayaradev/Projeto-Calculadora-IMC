import './App.css';
import Provider from './Context/Provider';
import Chart from './Grafico/Grafico';
import Tabela from './Tabela/Tabela';
import Calculadora from './calculadora/Calculadora';

function App() {
  return (
    <Provider>
      <div className='flex flex-wrap m-auto'>
        <div className="m-auto p-32">
          <Calculadora />
        </div>
        <div className='m-auto p-32'>
          <Tabela />
        </div>
        <div className="m-auto">
          <Chart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
