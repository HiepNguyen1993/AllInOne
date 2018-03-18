export class AccountModel {
    public Id: number;
    public Name: string;
    public Gender: boolean;
    public Phone: string;
    public Email: string;
    public ImgName: string;
    public Address: string;
    public Login: string;
    public Password: string;
    public CreateDate: string;
    public isActive: string;

    serialize(input): AccountModel {
        if (!input) { return };
        this.Id = input.Id || 0;
        this.Name = input.Name;
        this.Gender = input.Gender;
        this.Phone = input.Phone;
        this.Email = input.Email;
        this.ImgName = input.ImgName;
        this.Address = input.Address;
        this.Login = input.Login;
        this.Password = input.Password;
        this.CreateDate = input.CreateDate;
        
        return this;
    }
}
