import './App.css';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
//as-utilizado para mudar o nome do BrowserRouter
import {Home} from './pages/Home/';
//para cada página criada um import novo
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';
import { Menu } from './componentes/Menu';
import { VisualizarServico } from './pages/Servico/VisualizarServico';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
