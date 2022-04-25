export class Institute {
    private name: string;
    private thumbnail: string;

    setName(name: string) {
        this.name = name;
        return this;
    }

    setThumbnail(thumbnail: string) {
        this.thumbnail = thumbnail;
        return this;
    }

    getName() {
        return this.name;
    }

    getThumbnail() {
        return this.thumbnail
    }
}
