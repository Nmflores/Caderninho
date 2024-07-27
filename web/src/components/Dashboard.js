import { Outlet, Link } from "react-router-dom"
import '../w3.css'

export default function Dashboard(){

    return(
        <>
            <div className="w3-container w3-center w3-sand">
                <h1 className='w3-center-align'>Caderninho</h1>
                <p>Bem vindo</p>

            </div>
            <>
            <nav>
                <ul className="w3-ul w3-padding-32 w3-border w3-green w3-margin-bottom w3-center w3-hoverable w3-small">
                    <li key = {1}>
                    <Link to="/lista">Lista de objetos</Link>
                    </li>
                    <li key = {2}>
                    <Link to="/upload">Upload de imagens</Link>
                    </li>
                </ul>
            </nav>
            
            <Outlet />
      </>
        </>
    )
}