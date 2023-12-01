export const minBy = <T>(array: (T[] | undefined), cb:(item: T) => number): T | undefined => {
   
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

export function maxBy <T> (array: (T[] | undefined)[], cb:(item: T) => number): T | undefined {
   if(!array || array.length === 0) {
      return undefined
   } else {
      let firstArray: T | undefined = array[0] && array[0][0];
      for (let i = 0; i < array.length; i++) {
         if(firstArray !== undefined && cb(firstArray as T) < cb(array[i] as T)) {
            firstArray = array[i] && array[i] as T
         }
      }
      return firstArray;
   }

   
}
