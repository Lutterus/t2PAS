const global = require('../util/util.js');;
const BASE_URL = global.BASE_URL;

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

  postTime = async (currentUrl, arrayData) => {
    try{
      let url = BASE_URL + currentUrl
      let response = fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          time: arrayData
        }),
      })
      return response


      
    }catch{
      return false
    }
    
  }

}
export default FetchService;
