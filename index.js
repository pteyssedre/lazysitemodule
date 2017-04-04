"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lazy_format_logger_1 = require("lazy-format-logger");
class LazyModule {
    constructor(options) {
        this.options = options;
        this.Log = new lazy_format_logger_1.Logger(options.LogLevel);
    }
}
exports.LazyModule = LazyModule;
//# sourceMappingURL=index.js.map