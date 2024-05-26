import { useContext } from 'react'
import { AppContext } from '../context/GlobalState';
import IRecord from '../interfaces/IRecord';

const MainGallery = () => {
    const { state } = useContext(AppContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">

            {state && state.lstGalleryServices ? state.lstGalleryServices.map((service: IRecord) => (
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={service.urlImage} alt="Imagen" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{service.title}</h2>
                        <p>{service.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Detalles</button>
                        </div>
                    </div>
                </div>

            )) : <div>Aqui va un react-shimmer</div>
            }

        </div>
    )
}

export default MainGallery;