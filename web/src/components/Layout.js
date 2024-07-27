import { Outlet, Link } from "react-router-dom";
import '../w3.css'
export default function Layout(){

    return(
        <>
            <nav>
                <ul className="w3-ul w3-padding-32 w3-border w3-green w3-margin-bottom">
                    <li key = {1}>
                    <Link to="/">Inicio</Link>
                    </li>
                    <li key = {2}>
                    <Link to="/lista">Lista de objetos</Link>
                    </li>
                    <li key = {3}>
                    <Link to="/upload">Upload de imagens</Link>
                    </li>
                </ul>
            </nav>
    
            <Outlet />
      </>
    )

}