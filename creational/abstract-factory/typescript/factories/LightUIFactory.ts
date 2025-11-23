import { LightButton } from "../products/Button";
import { LightInput } from "../products/Input";
import { LightCheckbox } from "../products/Checkbox";
import { UIFactory } from "./UIFactory";

export class LightUIFactory implements UIFactory {
    createButton() {
        return new LightButton()
    };
    createInput() {
        return new LightInput()
    };
    createCheckbox() {
        return new LightCheckbox()
    };
}