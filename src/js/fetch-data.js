class FetchData {
    static async get(url) {
        let data = await fetch(url);
        return await data.json();
    }
}

export {FetchData};