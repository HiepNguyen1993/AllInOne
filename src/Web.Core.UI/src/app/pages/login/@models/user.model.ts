export class UserModel {
    public token: string;
    public info: UserInfo;
};

export class UserInfo {
    public name: string;
    public email: string;
    public id: string;
}
