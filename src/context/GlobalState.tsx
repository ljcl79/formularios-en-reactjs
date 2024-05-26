import { ReactNode, createContext, useState } from "react";
import IRecord from "../interfaces/IRecord";

interface IState {
    lstHero: Array<IRecord>,
    lstGalleryServices: Array<IRecord>,
    lstTestimonials: Array<IRecord>
}

interface IContextProps {
    state: IState;
    setState: React.Dispatch<React.SetStateAction<IState>>
}

export const AppContext = createContext({} as IContextProps);

interface IAppProviderProps {
    children: ReactNode;
}

const AppProvider: React.FC<IAppProviderProps> = ({ children }: IAppProviderProps) => {
    const [state, setState] = useState<IState>({
        lstHero: [],
        lstGalleryServices: [
            {
                id: 1,
                urlImage: "http://localhost:3000/images/image1.png",
                title: "Barberías",
                description: "¿Estás buscando las mejores barberías disponibles? ¡No busques más! En SuperTurnos, encontrarás las barberías más destacadas de la ciudad. ¡Te garantizamos que saldrás luciendo como un millón de dólares!",
                link: '',
            }
        ],
        lstTestimonials: [
            {
                id: 1,
                urlImage: "http://localhost:3000/images/image1.png",
                title: "Barberías",
                description: "¿Estás buscando las mejores barberías disponibles? ¡No busques más! En SuperTurnos, encontrarás las barberías más destacadas de la ciudad. ¡Te garantizamos que saldrás luciendo como un millón de dólares!",
                link: '',
            }
        ]
    });
    return (
        < AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider >
    )
}

export default AppProvider;