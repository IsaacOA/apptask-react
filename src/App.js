import './App.css';
import hyperXlogo from './imagenes/hyper-x-logo.png'
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className="App">
      <div className='hyperX-logo-contenedor'>
        <img
          src={hyperXlogo}
          className='hyperX-logo'
          alt='logo de hyperx' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
