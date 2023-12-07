
// type T = {name: string, age: number};

import { Type } from "typescript";

// import { T } from "vitest/dist/types-71ccd11d";
// type T = [id: string, result: TaskResult | undefined]

// type T = string | number;

type T = {
   name: string;
   age: number;
}

export const minBy = (array: T[], cb:(input: T) => T): T | undefined => {
   
   if(!array || array.length === 0) {
      return undefined;
   } else {
      let firstArray: T | undefined = array[0];
      for (let el of array) {
         if(firstArray !== undefined && cb(firstArray) > cb(el)) {
            firstArray = el
         }
      }
      return firstArray;
   }
};

export function maxBy <T>(array: T[], cb: (item: T) => T): T | undefined {
   if (!array || array.length === 0) {
      return undefined;
    } else {
      let firstArray: T | undefined = array[0];
      for(let el of array) {
         if(firstArray !== undefined && cb(firstArray) < cb(el)){
            firstArray = el
         }
      }
      return firstArray;
    }
}
