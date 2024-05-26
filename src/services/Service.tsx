import IRecord from "../interfaces/IRecord";

class Service {
    static async getContent(method: string) {
        try {
            const res = await fetch(`http://localhost:3000${method}`);
            const data = await res.json();

            const lista: IRecord[] = [];

            for (const item of data) {
                const obj: IRecord = Object.assign({}, item);
                obj.urlImage = item.url;
                lista.push(obj);
            }
            return { success: true, lista: lista }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            return { success: false, message: e.message }
        }
    }
}

export default Service;