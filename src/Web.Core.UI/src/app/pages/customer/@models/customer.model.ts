export class CustomerModel {
    public Id: number;
    public Fullname: string;
    public Gender: string;
    public Phone: string;
    public ImgName: string;
    public Email: string;
    public Address: string;

    serialize(input): CustomerModel {
        if (!input) { return };
        this.Id = input.Id || 0;
        this.Fullname = input.Name;
        this.Gender = input.Gender;
        this.Phone = input.Phone;
        this.ImgName = input.ImgName;
        this.Email = input.Email;
        this.Address= input.Address;

        return this;
    }
}
