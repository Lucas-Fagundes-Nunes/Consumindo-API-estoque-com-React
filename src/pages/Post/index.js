import React, { useState } from 'react';
import axios from 'axios';
const Page = () => {
  const [formData, setFormData] = useState({
    codigo: '',
    nome: '',
    detalhe: '',
    quantidade: '',
    serie: '',
    valor: '',
    fornecedor: '',
    status: '',
  });

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
    axios.post('http://192.168.201.216/estoqueapi/post.php', 
    {
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
    alert('Produto Cadastrado com Sucesso !');


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
              <h3 >Cadastro de Produtos</h3>
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

      <button type="submit">Enviar Formulário</button>
    </form>
    </div>
  );
};

export default Page;