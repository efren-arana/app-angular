import { ReqUser } from './i-reponse';


export class UserModel {

    public static userFromJson(obj: ReqUser) {
        return new UserModel(
            obj['id'],
            obj['email'],
            obj['first_name'],
            obj['last_name'],
            obj['avatar']
        );
    }

    constructor(
        public id:         number,
        public email:      string,
        public first_name: string,
        public last_name:  string,
        public avatar:     string
    ) {
        
    }


    
    public get fullName(): string {
        return `${this.first_name} ${this.last_name}`;
    }
    
}