import React,{useState,useEffect} from 'react';
import CardObjetos from './CardObjetos';

export default function ListaObjetos(){
    const [objetos,setObjetos] = useState([{}]);
    const [repetidos,setRepetidos] = useState([{}]);

    useEffect(() =>{
        fetch('http://localhost:5000/api/arquivo').then(
            response => response.json()
        ).then(
            data => {
                setObjetos(data)
            }
        )
    

    },[])

    return(
      
       objetos.map((objeto) =>
            <CardObjetos key = {objeto.id}  objeto = {objeto} ></CardObjetos>,
        
    )
    
)
}