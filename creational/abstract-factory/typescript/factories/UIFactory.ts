import { Button } from "../products/Button";
import { Checkbox } from "../products/Checkbox";
import { Input } from "../products/Input";

export interface UIFactory {
    createButton(): Button;
    createInput(): Input;
    createCheckbox(): Checkbox;
}