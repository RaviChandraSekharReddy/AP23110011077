"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeLogger = initializeLogger;
exports.Log = Log;
const axios_1 = __importDefault(require("axios"));
let globalConfig = null;
function initializeLogger(config) {
    globalConfig = config;
}
async function Log(stack, level, pkg, message) {
    if (!globalConfig) {
        throw new Error("Logger not initialized");
    }
    try {
        await axios_1.default.post(`${globalConfig.baseUrl}/evaluation-service/logs`, {
            stack,
            level,
            package: pkg,
            message,
        }, {
            headers: {
                Authorization: `Bearer ${globalConfig.accessToken}`,
                "Content-Type": "application/json",
            },
        });
    }
    catch (error) {
        console.error("Logging failed:", error);
    }
}
//# sourceMappingURL=index.js.map