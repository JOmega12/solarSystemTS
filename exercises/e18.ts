// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/dataTypes";
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  // const discoveryYear:number[] = asteroids.map((item) => item.discoveryYear);

  // if(Array.isArray(discoveryYear) && discoveryYear.length > 0 ) {
  //    const mostAsteroidsPerYear = maxBy(discoveryYear, (year) => asteroids.filter(item => item.discoveryYear === year).length)
  //    return mostAsteroidsPerYear;
  // }
  // return undefined;

  const yearMap = new Map<number, number>();

  for (let asteroid of asteroids) {
    yearMap.set(
      asteroid.discoveryYear,
      (yearMap.get(asteroid.discoveryYear) ?? 0) + 1
    );
  }

  return maxBy([...yearMap.entries()], (entry) => entry[1])?.[0];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
