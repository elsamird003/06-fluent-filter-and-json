import type { Business } from "../include/data.js";

export class FluentBusinesses {
  private data: Business[];

  constructor(data: Business[]) {
    this.data = data;
  }

  getData(): Business[] {
    return this.data;
  }

  // This func is all set :))))))).
  fromCityInState(city: string, state: string): FluentBusinesses {
    const filteredBusinesses = this.data.filter(
      (Business) => Business.city === city && Business.state === state
    );
    return new FluentBusinesses(filteredBusinesses);
  }

  helper(stars:number){
    const hj = stars;
    return hj;
  }
 
  hasStarsGeq(stars: number): FluentBusinesses {
    const filteredBusinesses = this.data.filter(
      (Business) =>  Business.stars! >= stars
    );
    return new FluentBusinesses(filteredBusinesses);
  }
    //const filteredBusinesses = this.data.filter((Business) => Business.stars! >= stars);
    //return new FluentBusinesses(filteredBusinesses);
  
  filterbyCategory <Business,key extends keyof Business>(data:Business[],field:key,value:Business[key]):Business[]{
  return data.filter(data => data[field]  === value);

  }
  inCategory(category: string): FluentBusinesses {

    //const ctg = this.data.filter( (Business) => Business.categories!.includes(category)  ); 


      const  ff   =  this.data(FluentBusinesses).filter(Business) => business.categories
  return new FluentBusinesses(filteredBusinesses);
}


  hasHoursOnDays(days: string[]): FluentBusinesses {
    // TODO
    return this;
  }

  hasAmbience(ambience: string): FluentBusinesses {
    // TODO
    return this;
  }
   
  // use the starts and review_count fields.
  
  hd(){
    const ff =this.getData();

    return ff;
  }

  bestPlace(): Business | undefined {

    // TODO
   return undefined;

    }
  mostReviews(): Business | undefined {
    // TODO
    return undefined;
  }

}

