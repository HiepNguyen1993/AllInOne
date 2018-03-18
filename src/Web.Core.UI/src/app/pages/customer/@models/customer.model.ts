export class CustomerModel {
    public Id: number;
    public Fullname: string;
    public Occupation: string;
    public Companyname: string;
    public Phonenumer: string;
    public ImgName: string;
    public Email: string;
    public Address: string;
    public Linkedin: string;
    public Facebook: string;
    public Twitter: string;
    public Instagram: string;

    serialize(input): CustomerModel {
        if (!input) { return };
        this.Id = input.Id || 0;
        this.Fullname = input.Name;
        this.Occupation = input.Occupation;
        this.Companyname = input.Companyname;
        this.Phonenumer = input.Phonenumer;
        this.ImgName = input.ImgName;
        this.Email = input.Email;
        this.Address= input.Address;
        this.Linkedin = input.Linkedin;
        this.Facebook = input.Facebook;
        this.Twitter = input.Twitter;
        this.Instagram = input.Instagram;

        return this;
    }
}
