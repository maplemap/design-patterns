import {ConsoleLogger} from "./loggers/console-logger.js";
import {FileLogger} from "./loggers/file-logger.js";
import {SilentLogger} from "./loggers/silent-logger.js";


class LoggerFactory {
    static create(env) {
        switch (env) {
            case 'production':
                return new FileLogger()
            case 'development':
                return new ConsoleLogger()
            case 'test':
                return new SilentLogger()
            default:
                throw new Error("Unknown environment: " + env);
        }
    }
}

const env = 'production'; // production | development | test
const logger = LoggerFactory.create(env)

logger.log("System started");
logger.log("User logged in");
logger.log("Some important event...");
