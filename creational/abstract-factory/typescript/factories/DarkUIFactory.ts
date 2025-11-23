import { DarkButton } from "../products/Button";
import { DarkInput } from "../products/Input";
import { DarkCheckbox } from "../products/Checkbox";
import { UIFactory } from "./UIFactory";

export class DarkUIFactory implements UIFactory {
    createButton() {
        return new DarkButton()
    };
    createInput() {
        return new DarkInput()
    };
    createCheckbox() {
        return new DarkCheckbox()
    };
}