import './App.css';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
//as-utilizado para mudar o nome do BrowserRouter
import {Home} from './pages/Home/';
//para cada página criada um import novo
import {VisualizarCliente} from './pages/VisualizarCliente/';
import {Cliente} from './pages/Cliente/';
import {Pedido} from './pages/Pedido/';
import {Servico} from './pages/Servico/';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/cliente" component={Cliente}/>
          <Route path="/pedido" component={Pedido}/>
          <Route path="/servico" component={Servico}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
