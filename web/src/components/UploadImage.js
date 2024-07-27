import {useState,useEffect} from 'react';
import '../w3.css'

export default function UploadImage(){
    const [file,setFile] = useState(null);
  
    function gerenciarUpload(){
        if(!file){
            console.log("Nenhum arquivo selecionado");
            return;
        }

        const fd = new FormData();
        fd.append('arquivo',file);
        fetch('http://localhost:5000/api/foto',{
            method:"POST",
            body:fd
        })
        .then(res => {
            return res.json();
        })
        .then(data =>{
            console.log(data)
        })
    }


    return(
        <div className='w3-card  w3-padding w3-margin'>
            <h1>Upload de imagens</h1>
            <input onChange={(e) =>{setFile(e.target.files[0])}} type="file" className='w3-padding-top w3-margin-top'></input>
            <div className='w3-container w3-margin-top w3-padding-left'>
            <button onClick={gerenciarUpload} className='w3-button w3-padding  w3-margin w3-border'>Upload</button>
            </div>
        </div>

    )
}