import { Button } from "react-daisyui";
import { Link, useNavigate } from "react-router-dom"

const Categorias = () => {

    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/categorias/busqueda');
    }

    return (
        <>
            <h1>Explora por las categorías:</h1>
            <ul>
                <li><Link to={"/categorias/1"}>1</Link></li>
                <li><Link to={"/categorias/2"}>2</Link></li>
            </ul>
            <Button onClick={handleButton}>Búsqueda de categorías</Button>
        </>
    )
}

export default Categorias