import { ClassEvent } from "../utils/ClassEvent";

export class User extends ClassEvent {
    constructor(name, email, photo){
        super();
        this.name = name;
        this.email = email;
        this.photo = photo;
    }
}