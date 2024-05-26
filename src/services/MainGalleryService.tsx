import Service from "./Service";

class MainGalleryService extends Service {
    static async getMainGalleryContent() {
        return this.getContent('/services');
    }
}

export default MainGalleryService;