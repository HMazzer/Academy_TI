import axios from 'axios';
import { useEffect, useState } from 'react';
import{Alert, Container, Table} from 'reactstrap';
import { api } from '../../../config';
import {Link} from 'react-router-dom';

export const VisualizarServico = ()=>{

    const [data, setData] = useState([]); /*para receber os dados*/

    const[status, setStatus] = useState({
        type:'',
        message:''
    });

    const getServicos = async() =>{
        await axios.get(api+"/listaservicos") /*função do + é concatenar*/
          .then((response) =>{
            console.log(response.data.servicos);
            setData(response.data.servicos);
          })
          .catch(()=> {
            setStatus({
              type: 'error',
              message: 'Erro: Não foi posível conectar com API.'
            })
            /*console.log("Erro: Não foi possível conectar a API.")*/
            /*se quiser fazer quebra de linha no texto utiliza: " " +  "" */
          });
        }
          useEffect (()=> {
            getServicos();
          },[]);
    

          
    return(
        <div className="p-3">
            <Container>
              {status.type === 'error' ? <Alert color="warning">{status.message}</Alert> : " "}
              <div>
                <div className="d-flex">
                <div className="mr-auto p-2">
                     <h1>Informações do Serviço</h1>
                 </div>
                <div className="p-2">
                    <Link to="/cadastrarservico"
                    className= "btn btn-outline-primary btn-sm">
                        Cadastrar
                    </Link>
                </div>
                  </div>
                </div> 

               <Table striped>
                    <thead>
                        <tr>
                          <th>ID</th>
                          <th>Serviços</th>
                          <th>Descrição</th>
                          <th>Ação</th>
                          </tr>
                    </thead>
                    <tbody>
                        {data.map(item =>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center">
                                    <Link to={"/servico/"+item.id}
                                    className="btn btn-outline-primarry btn-sm">Consultar</Link>
                                  </td>
                            </tr>
                          ))}
                
                    </tbody>
                   
             
          </Table>
   </Container>
            
        </div>
    );
    }