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
    public IsActive: boolean;

    serialize(input): AccountModel {
        if (!input) { return };
        this.Id = input.id || 0;
        this.Name = input.name;
        this.Gender = input.gender;
        this.Phone = input.phone;
        this.Email = input.email;
        this.ImgName = input.imgName;
        this.Address = input.address;
        this.Login = input.login;
        this.Password = input.password;
        this.CreateDate = input.createDate;
        this.IsActive = input.isActive;
        
        return this;
    }
}
