import React, { useEffect, useState } from "react"
import { AiTwotoneDelete, AiOutlineEdit } from 'react-icons/ai';
import axios from 'axios'
//import { BsChevronDoubleLeft } from 'react-icons/bs';


const deletar = (valor) => {
  alert('Produto Deletado com Sucesso!')
    // DELETE request using axios with error handling
    axios.delete('http://192.168.201.216/estoqueapi/delete.php?id='+ valor)
    .then(() => this.setState({ status: 'Delete successful' }));
    window.location.reload();
}
const App = () => {
  const [produtos, setProdutos] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://192.168.201.216/estoqueapi/")
    const data = await response.json()
    setProdutos(data.produtos)
  }

  useEffect(() => {
    fetchData()
  }, [])

  

  return (
    <div className="tableDiv">
        
      <h3 >Lista de Produtos</h3>
      <div>
      <table class="striped responsive-table">
        <thead>
          <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Detalhe</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Fornecedor</th>
              <th>Status</th>
              <th>Opções</th>
          </tr>
        </thead>

      
      {produtos.length > 0 && (
      <tbody>
          {produtos.map(produto => (
            <tr>
              <td>{produto.codigo}</td>
              <td>{produto.nome}</td>
              <td>{produto.detalhe}</td>
              <td>{produto.quantidade}</td>
              <td>{produto.valor}</td>
              <td>{produto.fornecedor}</td>
              <td>{produto.status}</td>
              <td>
                <a href={"/editar/"+produto.id}>
                <AiOutlineEdit 
                size={30} 
                color='#0381e8'
                cursor={'pointer'}/>
                </a>
                
                <AiTwotoneDelete onClick={() => deletar(produto.id)} size={30} color='red'cursor={'pointer'}/>
             
              </td>
           </tr>   
            
          ))}
        </tbody>
      )}


          </table>
          </div>
        
    </div>
  )

  
}



export default App