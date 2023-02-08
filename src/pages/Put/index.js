import React, { useEffect, useState } from "react"
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Page = () => {
    const { id } = useParams(); // Pega o id
    
 // GET
    const [formData, setFormData] = useState({
        id:id,    
        codigo: '',
        nome: '',
        detalhe: '',
        quantidade: '',
        serie: '',
        valor: '',
        fornecedor: '',
        status: '',})
        
    
        useEffect(() => {
        fetch(`http://192.168.201.216/estoqueapi/get.php?id=${id}`)
            .then(res => res.json())
            .then(responseData => {
            setFormData({
                id:id,    
                codigo: responseData.produto.codigo,
                nome: responseData.produto.nome,
                detalhe: responseData.produto.detalhe,
                quantidade: responseData.produto.quantidade,
                serie: responseData.produto.serie,
                valor: responseData.produto.valor,
                fornecedor: responseData.produto.fornecedor,
                status: responseData.produto.status,});
            });
        }, [id]);
 
  



        


  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };


  // POST
  const handleSubmit = event => {
    event.preventDefault();

    // POST request using axios with set headers

   const headers = { 
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
    };
    axios.post('http://192.168.201.216/estoqueapi/put.php', 
    {
    id: formData.id,
    codigo: formData.codigo,
    nome: formData.nome,
    detalhe: formData.detalhe,
    quantidade: formData.quantidade,
    serie: formData.serie,
    valor: formData.valor,
    fornecedor: formData.fornecedor,
    status: formData.status
    } , { headers })
    .then(response => this.setState({ articleId: response.data.id }));
    alert('Produto Atualizado com Sucesso !');

// Limpa o formulário
    setFormData({    
    codigo: '',
    nome: '',
    detalhe: '',
    quantidade: '',
    serie: '',
    valor: '',
    fornecedor: '',
    status: '',})
  };

  return (
    <div className="tableDiv">
              <h3 >Editar Produto</h3>
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="codigo"
            placeholder="Digite o Código"
            value={formData.codigo}
            onChange={handleInputChange}
        />

        <input
            type="text"
            name="nome"
            placeholder="Nome do Produto"
            value={formData.nome}
            onChange={handleInputChange}
        />
        <input
            type="text"
            name="detalhe"
            placeholder="Detalhe do Produto"
            value={formData.detalhe}
            onChange={handleInputChange}
        />

        <input
            type="number"
            name="quantidade"
            placeholder="Quantidade"
            value={formData.quantidade}
            onChange={handleInputChange}
        />

<input
            type="number"
            name="valor"
            placeholder="Valor do Produto"
            value={formData.valor}
            onChange={handleInputChange}
        />

<input
            type="text"
            name="fornecedor"
            placeholder="Fornecedor"
            value={formData.fornecedor}
            onChange={handleInputChange}
        />

<input
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleInputChange}
        />

      <button type="submit">Atualizar Formulário</button>
    </form>
    </div>
  );
};

export default Page;