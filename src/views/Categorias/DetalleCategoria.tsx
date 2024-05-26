import { useParams } from "react-router-dom"

const DetalleCategoria = () => {
    const { id } = useParams();

    return (

        <h1>Me solicitaron una categoría: {id}</h1>

    )
}

export default DetalleCategoria