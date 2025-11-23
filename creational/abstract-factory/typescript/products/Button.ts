export interface Button {
    render(): string;
}

export class LightButton implements Button {
    render() {
        return "Light Button";
    }
}

export class DarkButton implements Button {
    render() {
        return "Dark Button";
    }
}