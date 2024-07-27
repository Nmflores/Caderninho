import '../w3.css'
export default function CardObjetos({objeto}){
 
    let formatacao= [];
    let repetido = {};
    
    if(objeto.objetos !== undefined){
        formatacao= objeto.objetos.split(",");
        
        formatacao.forEach(val =>
            repetido[val] = (repetido[val]||0)+1 
                    
        );
        
              
        
        
        
     }
    
    
  
    return(
      
        <div className="w3-container">
            <div className='w3-col w3-margin w3-padding'>
                <h2>Objetos:{objeto.dia}</h2>
                
                {Object.keys(repetido).map((key) => (
                    <h4 className='w3-container w3-margin'>{key} Quantidade: {repetido[key]}</h4> 
                    
                ))}
                   
        
            </div>
        
        </div>


    )

}