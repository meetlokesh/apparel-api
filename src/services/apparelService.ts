import { Apparel } from '../models/Apparel';
import { Order } from '../models/Order';
import { readData, writeData } from '../utils/fileHelper';

export const updateSingleApparel = (apparel: Apparel): void => {
  const data = readData();
  const index = data.findIndex((item: Apparel) => item.code === apparel.code && item.size === apparel.size);
  console.log('apparel', apparel, index);
  if (index !== -1) {
    data[index] = apparel;
  } else {
    data.push(apparel);
  }
  
  writeData(data);
};

export const updateMultipleApparels = (apparels: Apparel[]): void => {
  apparels.forEach(updateSingleApparel);
};

export const canFulfillOrder = (order: Order[]): boolean => {
  const data = readData();
  return order.every(o => {
    const item = data.find((app: Apparel) => app.code === o.code && app.size === o.size);
    return item && item.stock >= o.quantity;
  });
};

export const calculateLowestCost = (order: Order[]): number => {
  const data = readData();
  let totalCost = 0;
  
  for (const o of order) {
    const item = data.find((app: Apparel) => app.code === o.code && app.size === o.size);
    if (item && item.stock >= o.quantity) {
      totalCost += item.price * o.quantity;
    } else {
      throw new Error(`Cannot fulfill order for ${o.code} size ${o.size}`);
    }
  }
  
  return totalCost;
};
