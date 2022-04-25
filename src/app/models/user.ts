import { Institute } from "./institute";

export class User {
    name: string;
    institue: Institute;
    profilePicture: string;
    mutualFriends: number;

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

    setMutualFrients(count: number) {
        this.mutualFriends = count;
        return this;
    }
}
