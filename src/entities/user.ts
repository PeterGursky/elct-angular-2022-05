export class User {
    constructor(
        public name: string,
        public email: string,
        public id?: number,
        public lastLogin?: Date,
        public password: string = ''
    ){}

    toString(): string {
        return this.name + ' ' + this.email;
    }
}