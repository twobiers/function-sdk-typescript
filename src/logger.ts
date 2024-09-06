import pino, { LoggerOptions } from "pino";

function getLogger(opts: Pick<LoggerOptions, "level">) {
    return pino(opts);
}