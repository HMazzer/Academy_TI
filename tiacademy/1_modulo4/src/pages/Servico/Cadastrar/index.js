import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import{Alert, Button, Container, Form, FormGroup, Input, Label, Spinner} from 'reactstrap';
import { api } from '../../../config';

export const Cadastrar = ()=>{

    const[servico, setServico]= useState({
        nome: '',
        descricao: ''
    });

    const[status, setStatus] = useState({
        formSave:false,
        type:'',
        message:''
    });

    const valorInput = e => setServico({
        ...servico, [e.target.name]:e.target.value
    });

    const cadServico = async e =>{
       e.preventDefault();

        setStatus({
            formSave:true
        });

        const headers ={
            'Content-Type':'application/json'
        };
    
        await axios.post(api + "/servicos", servico,{headers})
            .then((response) => {
                if(response.data.error){
                    setStatus({
                        formSave:false,
                        type: 'error',
                        message: response.data.message
                    });
                }else{
                    setStatus({
                        formSave:false,
                        type: 'sucess',
                        message: response.data.message
                    });
                }

                console.log(response.data.message);
            })
            .catch(() => {
                setStatus({
                    formSave:false,
                    type: 'error',
                    message: "Erro: Não foi possível se conectar a API"
                });
            });
         };


    return(
        <div>
            <Container>
            <div className="d-flex">
                <div className="mr-auto p-2">
                     <h1>Cadastrar Serviço</h1>
                 </div>
                      <div className="p-2">
                          <Link to="/visualizarservico"
                             className= "btn btn-outline-primary btn-sm">
                              Listar
                 </Link>
                 </div>
            </div>
        
         <hr className="m-1"/>   

        {status.type === 'error' ? <Alert color="danger">
            {status.message}</Alert>:" "}

        {status.tye === 'sucess' ? <Alert color="sucess">
            {status.message}</Alert>:" "}

            <Form className="p-2" onSubmit={cadServico}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder="Nome do Serviço"
                        placeholder="Nome do Serviço" onChange={valorInput}/>
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Descrição</Label>
                    <Input type="text" name="descricao" placeholder="Descrição do Serviço"
                        placeholder="Descrição do Serviço" onChange={valorInput}/>
                </FormGroup>

        {status.formSave ?     
            <Button type="submit" outline color="info" disabled>Salvando...
                <Spinner size="sm" color="primary" /></Button>:
            <Button type="submit" outline color="info">Cadastrar</Button>}
            <Button type="reset" outline color="info">Reset</Button>

         </Form>

               </Container>
           
        </div>
    )
}