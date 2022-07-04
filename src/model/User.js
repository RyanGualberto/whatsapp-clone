import { ClassEvent } from "../utils/ClassEvent";

export class User extends ClassEvent {
    constructor(id, name, email, photo){
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.photo = photo;
    }
}