import { useContext, useEffect } from 'react'
import Banner from '../components/Banner'
import MainGallery from '../components/MainGallery'
import Testimonials from '../components/Testimonials'
import BannerService from '../services/BannerService'
import { AppContext } from '../context/GlobalState'
import MainGalleryService from '../services/MainGalleryService'
import TestimonialsService from '../services/TestimonialsService'

const Home = () => {
    const { setState } = useContext(AppContext);
    useEffect(() => {
        const getDataBanner = async () => {
            const data = await BannerService.getBannerContent();
            if (data.success) {
                setState(prev => ({ ...prev, lstHero: data.lista ?? [] }))
            }
        }

        const getDataGallery = async () => {
            const data = await MainGalleryService.getMainGalleryContent();
            if (data.success) {
                setState(prev => ({ ...prev, lstGalleryServices: data.lista ?? [] }))
            }
        }

        const getDataTestimonials = async () => {
            const data = await TestimonialsService.getTestimonialContent();
            if (data.success) {
                setState(prev => ({ ...prev, lstTestimonials: data.lista ?? [] }))
            }
        }


        getDataBanner();
        getDataGallery();
        getDataTestimonials();

    }, []);


    return (
        <div className='pt-[10vh]'>
            <Banner></Banner>
            <MainGallery></MainGallery>
            <div className='mt-10 px-5'>
                <Testimonials></Testimonials>
            </div>
        </div>
    )
}

export default Home