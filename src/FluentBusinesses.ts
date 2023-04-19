import type { Business } from "../include/data.js";

export class FluentBusinesses {
  private data: Business[];

  constructor(data: Business[]) {
    this.data = data;
  //  this.getData.arguments(this.data.hours);
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
  
  filterbyField <Business,key extends keyof Business>(data:Business[],field:key,value:Business[key]):Business[]{
  return data.filter(data => data[field]  === value);
  }
   
  //const ctg = this.data.filter( (Business) => Business.categories!.includes(category)  ); 
  inCategory(category: string): FluentBusinesses {
  const filterCategory = this.filterbyField(this.data,"categories",[category]);
    return new FluentBusinesses(filterCategory);
     
      //const  ff   =  this.data(FluentBusinesses).filter(Business) => business.categories
  //return new FluentBusinesses(filteredBusinesses);
}
  hasHoursOnDays(days: string[]): FluentBusinesses {
      const filteredBusinesses = this.data.filter((business) => {
        //Check if the business has hours on all specified days
        return days.every((day) =>business.hours!.hasOwnProperty(day));
      });
  
      // Return a new FluentBusinesses instance with the filtered businesses
      return new FluentBusinesses(filteredBusinesses);
    // TODO
  }

  hasAmbience(ambience: string): FluentBusinesses {
    // TODO
    return this;
  }
   
  // use the starts and review_count fields.


  bestPlace(): Business | undefined {

    if (this.data.length === 0) {
      return undefined;
    }

    let bestBusiness: Business = this.data[0];

    for (const business of this.data) {
      if (
        this.data.stars! > this.data.stars! ||
        (business.stars === bestBusiness.stars &&
          business.review_count > bestBusiness.review_count)
      ) {
        bestBusiness = business;
      }
    }

    return bestBusiness;
  }

}
    // TODO


    
  mostReviews(): Business | undefined {
    // TODO

    //const filteredBusinesses = this.data.filter(
      //(Business) => Business.city === city && Business.state === state
    //);
    //return new FluentBusinesses(filteredBusinesses);
    //  if(this.data.filter((Business) => Business.name === Business.attributes)){
       // return new this.mostReviews;
        
      
    return undefined;
  }


