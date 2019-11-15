const global = require('../util/util.js');;
const BASE_URL = global.BASE_URL;

class FetchService {

  get = async (currentUrl) => {
    let url = BASE_URL + currentUrl
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.data
      })
      .catch((error) =>{
        return false;
      });
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

  postAvaliacao = async (currentUrl, arrayData) => {
    try{
      let url = BASE_URL + currentUrl
      let response = fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          softwareFuncionando: arrayData.softwareFuncionando,
          processo:  arrayData.processo,
          pitch:  arrayData.pitch,
          inovacao:  arrayData.inovacao,
          formacaoDoTime:  arrayData.formacaoDoTime
        }),
      })
      return true
    }catch{
      return false
    }
  }

}
export default FetchService;
