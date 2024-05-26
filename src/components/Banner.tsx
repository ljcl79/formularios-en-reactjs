import { useContext } from 'react'
import { Button, Carousel, Hero } from 'react-daisyui'
import { AppContext } from '../context/GlobalState'
import IRecord from '../interfaces/IRecord';

const Banner = () => {

    const { state } = useContext(AppContext);
    const lstShimmer = [
        <Carousel.Item><div>Aqui va un react-shimmer</div></Carousel.Item>,
        <Carousel.Item><div>Aqui va un react-shimmer</div></Carousel.Item>
    ];

    return (
        <Carousel display="sequential" width="full" className="rounded-box">
            {state && state.lstHero ?
                state.lstHero.map((hero: IRecord, i: number) => (
                    <Carousel.Item>
                        <Hero key={i}>
                            <Hero.Content>
                                <img src={hero.urlImage} className="w-full md:max-w-sm rounded-lg shadow-2xl object-cover" />
                                <div className="hidden md:block">
                                    <h1 className="text-5xl font-bold">{hero.title}</h1>
                                    <p className="py-6 pe-5">
                                        {hero.description}
                                    </p>
                                    <Button color="primary">Consultar</Button>
                                </div>
                            </Hero.Content>
                        </Hero>
                    </Carousel.Item>
                )) :
                lstShimmer
            }
        </Carousel>
    )
}

export default Banner