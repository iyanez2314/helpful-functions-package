/**
 * This file will hold ALL the functions that will help you save time in your development
 */
const helpful = {
  /**
   *
   * @param {*} object Is an array of objects
   * @param {*} id id we are looking for
   * @returns an array with with the object containing the id we are looking for
   */
  findIdIWant(object, id) {
    return object.filter((user) => user.id === id);
  },
  /**
   *
   * @param {*} min the minimum value we will start the randomization
   * @param {*} max the maximum value where we will end the randomization
   * @returns a random number between the minimul and maximum provided values
   */
  generateMinMaxRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  /**
   *
   * @param {*} api api we will fetch
   * @param {*} apiKey if the api has a bearer token
   * @returns json data
   */
  async GetRequestFromApiWithKey(api, apiKey) {
    try {
      const response = await fetch(api, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (!response.ok) {
        throw new Error(
          `Error making API call, status: ${response.status}, message: ${response.statusText}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`An error occured while fetching data: ${error}`);
    }
  },
  /**
   *
   * @param {*} api fetches from provided api
   * @returns json data
   */
  async GetRequestFromApi(api) {
    return fetch(api, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `HTTP error! status Error making API call, status: ${response.status}, message: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then(async (data) => {
        return data;
      })
      .catch((err) => {
        throw new Error(`An error occured while fetching data: ${err}`);
      });
  },
  /**
   *
   * @param {*} api API you need to fetch from
   * @param {*} apiKey API key you may need when fetching from the api
   * @param {*} bodyInput The data you want to send to the api
   * @returns return the data in JSON format
   */

  async PostDataToApiWithKey(api, apiKey, bodyInput) {
    return fetch(api, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ bodyInput }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error making API call, status: Error making API call, status: ${response.status}, message: ${response.statusText}`
        );
      }
      return response.json();
    }).then;
  },

  /**
   *
   * @param {*} api API you are fetching from
   * @param {*} bodyInput the data you are sending the API
   * @returns returns the data in JSON format
   */
  async PostDataToApi(api, bodyInput) {
    try {
      const response = fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bodyInput }),
      });
      if (response.ok) {
        throw new Error(
          `Error making API call, status: Error making API call, status: ${response.status}, message: ${response.statusText}`
        );
      }
      return await response.json();
    } catch (error) {
      throw new Error(`
    An error occured while making a post request: ${error}
    `);
    }
  },

  async fetchApi(api) {
    const data = await this.GetRequestFromApi(api);
    return data;
  },

  async fetchApiWithKey(api, apiKey) {
    const data = await this.GetRequestFromApiWithKey(api, apiKey);
    return data;
  },
};

module.exports = helpful;
