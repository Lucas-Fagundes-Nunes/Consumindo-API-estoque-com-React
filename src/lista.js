import React, { useEffect, useState } from "react"
import { AiTwotoneDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsChevronDoubleLeft } from 'react-icons/bs';

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
      <span><BsChevronDoubleLeft 
      size={40} 
      color='#7BCFF9'
      cursor={'pointer'}/></span>
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
                <AiOutlineEdit className="icon"/>
                <AiTwotoneDelete size={30} color='red'cursor={'pointer'}/>
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