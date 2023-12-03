
type T = {name: string, age: number}

export const minBy = (array: (T[] | undefined), cb:(item: T) => number): T | undefined => {
   
   if(!array || array.length === 0) {
      return undefined;
   } else {
      let firstArray: T | undefined = array[0];
      for (let i = 0; i < array.length; i++) {
         if (firstArray !== undefined  && cb(firstArray) > cb(array[i] as T)) {
            firstArray = array[i]
         }
      }
      return firstArray;
   }

};

export function maxBy <T>(array: T[], cb: (item: T) => number): T | undefined {
   if (!array || array.length === 0) {
      return undefined;
    }
  
    let firstArray: T | undefined = array[0];
    for (let i = 1; i < array.length; i++) {
      if (cb(array[i]!) > cb(firstArray as T)) {
        firstArray = array[i];
      }
    }
    return firstArray;
}
