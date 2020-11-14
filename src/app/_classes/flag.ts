export class Flag {
    icon: string;
    name: string;
    description: string;

    constructor(icon: string, name: string, description: string) {
        this.icon = icon;
        this.name = name;
        this.description = description;
    }

    static BETA = new Flag("assets/_img/_flags/beta_testing.png", "Beta testing", "Work in progress, it will be potentially unbalanced");
    static OFICIAL = new Flag("assets/_img/_flags/oficial.png", "Oficial release", "Oficially released by GW.");
    static HOMEBREW = new Flag("assets/_img/_flags/home_made.png", "Homebrew release", "Homebrewed and tested by the comunity.");
}
