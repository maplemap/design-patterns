import { DarkUIFactory } from "./factories/DarkUIFactory";
import { UIFactory } from "./factories/UIFactory";

function renderUI(factory: UIFactory) {
    const button = factory.createButton()
    const input = factory.createInput()
    const checkbox = factory.createCheckbox()

    console.log("UI Elements")
    console.log(" -", button.render())
    console.log(" -", input.render())
    console.log(" -", checkbox.render())
}

const factory = new DarkUIFactory()
renderUI(factory)