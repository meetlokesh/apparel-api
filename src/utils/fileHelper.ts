import fs from 'fs';
import path from 'path';

const dataPath = path.join(__dirname, '../data/apparel.json');

export const readData = (): any => {
  return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
};

export const writeData = (data: any): void => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
};
