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
    return new FluentBusinesses(this.data.filter(Business => Business.city === city && Business.state === state));
  }
  // Maybe this func is all set.
  hasStarsGeq(stars: number): FluentBusinesses {
    return new FluentBusinesses(this.data.filter(Business => Business.stars! >= stars));
  }

  //  filterbyField<Business, key extends keyof Business>(data: Business[], field: key, value: Business[key]): Business[] {
  //  return data.filter(data => data[field] === value);

  //}
  //const ctg = this.data.filter( (Business) => Business.categories!.includes(category)  );

  // function done to mee:))
  inCategory(category: string): FluentBusinesses {
    return new FluentBusinesses(this.data.filter(Bussiness => Bussiness.categories!.hasOwnProperty(category)));
  }

  //function done to mee:))
  hasHoursOnDays(days: string[]): FluentBusinesses {
    const filteredBusinesses = this.data.filter(business => {
      //Check if the business has hours on all specified days
      return days.every(day => business.hours!.hasOwnProperty(day));
    });
    // Return a new FluentBusinesses instance with the filtered businesses
    return new FluentBusinesses(filteredBusinesses);
  }

  hasAmbience(ambience: string): FluentBusinesses {
    const filteredBusinesses = this.data.filter(business => {
      const ambienceAttributes = business.attributes?.Ambience;
      return ambienceAttributes && ambienceAttributes[ambience] === true;
    });
    return new FluentBusinesses(filteredBusinesses);
  }

  // use the starts and review_count fields.

  // This func seems done to me
  bestPlace(): Business | undefined {
    if (this.data.length === 0) {
      return undefined;
    }

    let bestBusiness: Business = this.data[0];

    return this.data.reduce((bestBusiness, currentBusiness) => {
      if (currentBusiness.stars! > bestBusiness.stars!) {
        return currentBusiness;
      } else if (currentBusiness.stars === bestBusiness.stars) {
        return currentBusiness.review_count! > bestBusiness.review_count! ? currentBusiness : bestBusiness;
      } else {
        return bestBusiness;
      }
    });
  }

  // TODO
  mostReviews(): Business | undefined {
    if (this.data.length === 0) {
      return undefined;
    }
    return this.data.reduce((mostReviewed, currentBusiness) => {
      if (currentBusiness.review_count! > mostReviewed.review_count!) {
        return currentBusiness;
      } else if (currentBusiness.review_count === mostReviewed.review_count) {
        return currentBusiness.stars! > mostReviewed.stars! ? currentBusiness : mostReviewed;
      } else {
        return mostReviewed;
      }
    });
  }
}

type SortKey = "review_count" | "stars" | "category";

function sortBy(businesses: Business[], keys: SortKey) {
  // Sort `businesses` by the key specified by `key`.
}

sortBy([], "stars"); // OK
// Compiler error

function hasProperty(business: Business, key: keyof Business) {
  return business[key] !== undefined;
}

//function hasProperty(business: Business, key: keyof Business) {
//return business[key] !== undefined;
//}
