import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import {Logger} from "../logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class FileLogger extends Logger {
    log(message) {
        const filePath = path.join(__dirname, "app.log");

        fs.appendFileSync(filePath, `[LOG] ${message}\n`);
        console.log("📄 (written to app.log)");
    }
}
