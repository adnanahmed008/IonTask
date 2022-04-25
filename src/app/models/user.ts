import { Institute } from "./institute";

export class User {
    private name: string;
    private institue: Institute;
    private profilePicture: string;

    setName(name: string) {
        this.name = name;
        return this;
    }

    setInstitute(institue: Institute) {
        this.institue = institue;
        return this;
    }

    setProfilePicture(profilePicture: string) {
        this.profilePicture = profilePicture;
        return this;
    }

    getName() {
        return this.name;
    }

    getInstitute() {
        return this.institue;
    }

    getProfilePicture() {
        return this.profilePicture;
    }
}
