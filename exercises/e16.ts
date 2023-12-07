// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler

export function find<T> (array: (T)[], callback: (input: T) => boolean ): T | undefined {
   
   for (let el of array) {
      if(callback(el)) {
         return el;
      }
   }
}