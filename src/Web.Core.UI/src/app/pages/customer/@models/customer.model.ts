export class CustomerModel {
    public Id: number;
    public Name: string;
    public Gender: boolean;
    public Phone: string;
    public ImgName: string;
    public Email: string;
    public Address: string;

    serialize(input): CustomerModel {
        if (!input) { return };
        this.Id = input.id || 0;
        this.Name = input.name;
        this.Gender = input.gender;
        this.Phone = input.phone;
        this.ImgName = input.imgName;
        this.Email = input.email;
        this.Address= input.address;

        return this;
    }
}
