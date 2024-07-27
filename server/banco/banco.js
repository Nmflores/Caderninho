let mysql = require('mysql');

 let conexao = {
  host: "localhost",
  user: "root",
  password: "",
  database: "projeto"
};

//--Musicas
function selectObjetos(callback){
    let con = mysql.createConnection(conexao);
    con.connect();

        con.query("SELECT * FROM objetos", function (err, result, fields) {
                if (err) callback(err,undefined)
                else{
                    callback(undefined,result)
                }

            })

            con.end()  
}

function insertObjetos(objeto,dia,callback){
    let con = mysql.createConnection(conexao);
    con.connect();

    let sql = `INSERT INTO objetos(objetos,dia) VALUES("${objeto}","${dia}")`
        
    con.query(sql, function (err, result, fields) {
                if (err)  callback(err,undefined)
                else{
                    callback(undefined,result)
                }

            })
        
            con.end()
}



module.exports = 
{
    selectObjetos,
    insertObjetos
}