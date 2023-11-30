// SPACE DATA EXERCISE 15
// Return an array of Planets' without moons

import { Planet } from "../data/dataTypes";

export function getPlanetsWithNoMoons(planets: Planet[]) {
   return planets
      .filter((item) => {
         if(!item.moons){
            return item.name
         }
      })
      .map((item) => item)
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
