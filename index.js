/**
 * This file will hold ALL the functions that will help you save time in your development
 */

/**
 *
 * @param {*} object Is an array of objects
 * @param {*} id id we are looking for
 * @returns an array with with the object containing the id we are looking for
 */
export function findIdIWant(object, id) {
  return object.filter((user) => user.id === id);
}

/**
 *
 * @param {*} min the minimum value we will start the randomization
 * @param {*} max the maximum value where we will end the randomization
 * @returns a random number between the minimul and maximum provided values
 */
export function generateMinMaxRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 *
 * @param {*} api api we will fetch
 * @param {*} apiKey if the api has a bearer token
 * @returns json data
 */
export async function GetRequestFromApiWithKey(api, apiKey) {
  try {
    const response = await fetch(api, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`An error occured while fetching data: ${error}`);
  }
}

/**
 *
 * @param {*} api fetches from provided api
 * @returns json data
 */
export async function GetRequestFromApi(api) {
  try {
    const response = await fetch(api, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status ${response}`);
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(`An error occured while fetching data: ${error}`);
  }
}
