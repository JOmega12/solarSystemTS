// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']

import { Planet } from "../data/dataTypes";

// Note: This input should be destructured from the function parameter
type PlanetFilterParams = {
  planets: Planet[];
  greaterThanOrEqualTo: number;
}

export function getPlanetNamesWithMassValue({
  planets,
  greaterThanOrEqualTo,
}: PlanetFilterParams) {
  return planets
    .filter((item) => {
      return item.mass.massValue >= greaterThanOrEqualTo
    })
    .map((item) => {
      return item.name
    })
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
