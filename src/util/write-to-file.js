"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var saveFilePath = path_1.default.resolve(__dirname, '../../dist/data.json');
var nowDate = new Date();
var today = nowDate.getFullYear() + "-" + (nowDate.getMonth() + 1) + "-" + nowDate.getDate();
function writeToFile(value) {
    var saveContent = fs_1.default.readFileSync(saveFilePath);
    var saveObj = {};
    if (saveContent.toString()) {
        saveObj = JSON.parse(saveContent.toString());
    }
    else {
        saveObj = {};
    }
    saveObj[today] = JSON.stringify(value);
    fs_1.default.writeFileSync(saveFilePath, JSON.stringify((saveObj)));
}
exports.writeToFile = writeToFile;
