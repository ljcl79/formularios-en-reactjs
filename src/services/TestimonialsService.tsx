import Service from "./Service";

class TestimonialsService extends Service {
    static async getTestimonialContent() {
        return this.getContent('/testimonials');
    }
}

export default TestimonialsService;