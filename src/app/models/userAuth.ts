export class UserAuth {
    public token: string = '';
    public user: User = new User;
}
export class User{
    public _id: string = '';
    public name: string = '';
    public email: string = '';
    public dataCriacao: string = '';
}