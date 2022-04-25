import { Institute } from "./institute";

export class Course {
    name: string;
    picture: string;
    institute: Institute;

    setName(name: string) {
        this.name = name;
        return this;
    }

    setPicture(picture: string) {
        this.picture = picture;
        return this;
    }

    setInstitute(institute: Institute) {
        this.institute = institute;
        return this;
    }
}