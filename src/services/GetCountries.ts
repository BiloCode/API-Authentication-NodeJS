import fetch from "node-fetch";

class GetCountries {

  public async __invoke(){
    try {
      const request = await fetch('https://restcountries.eu/rest/v2/all');  
      const data = await request.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
}

export default GetCountries;