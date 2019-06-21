import fs from 'fs';
import path from 'path';
const saveFilePath = path.resolve(__dirname, '../../dist/data.json');
const nowDate = new Date();
const today =`${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`;
interface ObjKey {
   [key:string]: string;
}
export function writeToFile(value: Object) {
     let saveContent = fs.readFileSync(saveFilePath);
     let saveObj:ObjKey = {};
     if (saveContent.toString()) {
        saveObj = JSON.parse(saveContent.toString());
     } else {
        saveObj = {};
     }
     saveObj[today] = JSON.stringify(value);
     fs.writeFileSync(saveFilePath, JSON.stringify((saveObj))); 
}