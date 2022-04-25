export class Institute {
    name: string;
    thumbnail: string;

    setName(name: string) {
        this.name = name;
        return this;
    }

    setThumbnail(thumbnail: string) {
        this.thumbnail = thumbnail;
        return this;
    }
}
