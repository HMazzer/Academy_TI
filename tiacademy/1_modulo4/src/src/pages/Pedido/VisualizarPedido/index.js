import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap"

import { api } from "../../../config";

export const VisualizarPedido = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''

    });


    const getProdutos = async () => {
        await axios.get(api + "/listapedidos")
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos)
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'error:nao foi possivel conectar a Api'
                })
            });

    }

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <div className="p-3">
            <Container>
                {status.type==='error'? <Alert color="danger">{status.message}</Alert> : ""}
                <Table striped >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ServicoId</th>
                            <th>ClienteId</th>
                            <th>valor</th>
                            <th>data</th>
                            <th>createdAt</th>
                            <th>updatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.ServicoId}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.valor}</td>
                                <td>{item.data}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.updatedAt}</td>
                                <td className="text-center" >  <Link to={"/pedido/"+item.id}
                                className="btn btn-outline-primary btn">consultar</Link> 
                                </td>
                            </tr>


                        ))}

                    </tbody>
                </Table>
            </Container>

        </div>
    )
}