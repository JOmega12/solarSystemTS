// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets

import { Planet } from "../data/dataTypes";

// Return example: 42
export const allPlanetsMoonsCount = (data: { planets: Planet[] }) => {
  const totalMoons = data.planets.reduce((total, planet) => {
    return planet.moonsCount !== undefined ? total + planet.moonsCount : total;
  }, 0);

  return totalMoons;
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
