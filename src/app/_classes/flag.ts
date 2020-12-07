export class Flag {
    icon: string;
    name: string;
    description: string;

    constructor(icon: string, name: string, description: string) {
        this.icon = icon;
        this.name = name;
        this.description = description;
    }

    static BETA = new Flag("danger", "Beta testing", "Work in progress, it will be potentially unbalanced");
    static HOMEBREW = new Flag("homebrew", "Homebrew release", "Homebrewed and tested by the comunity.");
}
