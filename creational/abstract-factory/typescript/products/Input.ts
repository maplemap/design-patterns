export interface Input {
    render(): string;
}

export class LightInput implements Input {
    render() {
        return "Light Input";
    }
}

export class DarkInput implements Input {
    render() {
        return "Dark Input";
    }
}