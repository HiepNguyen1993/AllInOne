export class PackageModel {
    public Name: string;
    public Price: string;
    public ThemeId: string;
    public Description: string;

    serialize(input): PackageModel {
        if (!input) { return };
        this.Name = input.name;
        this.Price = input.price;
        this.ThemeId = input.themeId;
        this.Description = input.description;

        return this;
    }
}
