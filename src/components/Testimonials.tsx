import { useContext } from 'react'
import { AppContext } from '../context/GlobalState';
import IRecord from '../interfaces/IRecord';

const Testimonials = () => {
    const { state } = useContext(AppContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {state && state.lstTestimonials ? state.lstTestimonials.map((service: IRecord) => (

                <div className="bg-white rounded-lg shadow-lg overflow-hidden p-5">
                    <div className="flex justify-center items-center">
                        <div className="avatar w-16 h-16 bg-cover bg-center rounded-full mx-auto" style={{ backgroundImage: `url(${service.urlImage})` }}></div>
                        <h3 className="text-lg w-fit font-medium text-gray-900 h-100 items-center">{service.title}</h3>
                    </div>
                    <div className="p-4">
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </div>
                </div>

            )) : <div>Aqui va un react-shimmer</div>
            }

        </div >
    )
}

export default Testimonials;