import pino, { LoggerOptions } from "pino";

let loggerOptions: LoggerOptions = {};

export function setOpts(opts: Pick<LoggerOptions, "level">) {
    loggerOptions = {
        ...opts
    };
}

export function getLogger() {
    return pino(loggerOptions);
}