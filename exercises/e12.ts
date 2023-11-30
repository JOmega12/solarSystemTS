// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets

import { Planet } from "../data/dataTypes";

// Return example: 42
export const allPlanetsMoonsCount = (data: {planets: Planet[]}) => {
   const planetArrayWithMoons = data.planets.filter((item) => {
      if(item.moonsCount !== undefined) {
        return item.moonsCount
      } 
    }).map((item) => item.moonsCount);
    const totalMoons = planetArrayWithMoons.reduce((total , current) => {
      return (total || 0) + (current || 0);
    }, 0)

    return totalMoons;
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
