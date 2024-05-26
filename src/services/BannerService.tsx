import Service from "./Service";

class BannerService extends Service {
    static async getBannerContent() {
        return this.getContent('/hero');
    }
}

export default BannerService;