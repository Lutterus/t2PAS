const BASE_URL = "http://192.168.0.11:3000/api/";

class FetchService {

  get = async (currentUrl) => {
    let url = BASE_URL + currentUrl
    try {
      let response = await fetch(url);
      let responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      return false;
    }
  }

  post = async (currentUrl) => {
    let url = BASE_URL + currentUrl
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      }),
    });
  }

}

export default FetchService;
