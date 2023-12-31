// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

import { Planet } from "../data/dataTypes";

export function getAveragePlanetsTemperature(data: {planets: Planet[]}) {
   const totalPlanets = data.planets.length;
   const avgTempPlanets= data.planets.filter((item) => {
      if(item.avgTemp){
         return true;
      }
   }).map((item) => item.avgTemp);

   const totalAvgTemp = avgTempPlanets.reduce((total, current) => {
      return total + current;
   }, 0)

   return totalAvgTemp/ totalPlanets;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
