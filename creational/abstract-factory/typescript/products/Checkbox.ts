export interface Checkbox {
    render(): string;
}

export class LightCheckbox implements Checkbox {
    render() {
        return "Light Checkbox";
    }
}

export class DarkCheckbox implements Checkbox {
    render() {
        return "Dark Checkbox";
    }
}