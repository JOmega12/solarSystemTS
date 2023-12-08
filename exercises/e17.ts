
// the generic types would inherit of the data that i would  pass as the arguments
// example if you have an object
// type Person = {name: "jensen", age: 22}
// and you write a function such as below minBY()
// the first Type would get the type of the object array, so Person would become Person[]
// Then the AnotherType would inherit and infer the specific type in the object array
// in this case name: string, age: number
// Essentially two different types are going at the same time


export const minBy = <Type, AnotherType>(array: Type[], cb:(input: Type) => AnotherType) => {
   
   if(!array || array.length === 0) {
      return undefined;
   } else {
      let firstArray = array[0] as Type;
      for (let el of array) {
         if(firstArray !== undefined && cb(firstArray) > cb(el)) {
            firstArray = el;
         }
      }
      return firstArray;
   }
};

export function maxBy <Type, AnotherType>(array: Type[], cb: (item: Type) => AnotherType) {
   if (!array || array.length === 0) {
      return undefined;
    } else {
      let firstArray= array[0] as Type;
      for(let el of array) {
         if(firstArray !== undefined && cb(firstArray) < cb(el)){
            firstArray = el
         }
      }
      return firstArray;
    }
}