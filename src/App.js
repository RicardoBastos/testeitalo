import React, {useState} from "react";
import "./styles.css";

export default function App() {


  const [idField,setIdField]=useState('');
  const [nomeField,setNomeField]=useState('');

  const [lista,setLista]=useState([]);

  function addLista(){
    const novoObjeto = {id:idField, nome:nomeField};
    setLista([...lista, novoObjeto]);
    setIdField('');
    setNomeField('');
  }


  return (
    <div className="App">
      
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody id="tabela-alunos">
          {lista.map(function(item, i){
            return <tr>
                <td>{item.id}</td>
                <td>{item.nome}</td>
              </tr>
          })}
        </tbody>
      </table>

     <input value={idField} onChange={(e)=>setIdField(e.target.value)} type="text" placeholder="id"/>
     <input  value={nomeField} onChange={(e)=>setNomeField(e.target.value)} type="text" placeholder="nome"/>

      <button onClick={addLista}>add na lista</button>
    </div>  
  );
}
