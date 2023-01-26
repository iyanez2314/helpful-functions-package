/**
 * This file will hold ALL the functions that will help you save time in your development
 */

export function findIdIWant(object, id) {
  return object.filter((user) => user.id === id);
}

export function generateMinMaxRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

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
