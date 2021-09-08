import './App.css';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
//as-utilizado para mudar o nome do BrowserRouter
import {Home} from './pages/Home/';
//para cada página criada um import novo
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';
import { Menu } from './componentes/Menu';
import { VisualizarServico } from './pages/Servico/VisualizarServico';
import { Servico } from './pages/Servico/Servico';
import { Cliente } from './pages/Cliente/Cliente';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido';
import { Pedido } from './pages/Pedido/Pedido';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>
          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/servico/:id" component={Servico}/>
          <Route path="/cliente/:id" component={Cliente}/>
          <Route path="/pedido/:id" component={Pedido}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
