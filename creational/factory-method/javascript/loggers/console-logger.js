import {Logger} from "../logger.js";

export class ConsoleLogger extends Logger {
    log(message) {
        console.log("🟢 Console:", message);
    }
}
