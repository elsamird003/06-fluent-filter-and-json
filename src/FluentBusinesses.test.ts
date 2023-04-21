import assert from "assert";
import { Business } from "../include/data.js";
import { FluentBusinesses } from "./FluentBusinesses";

const testData: Business[] = [
  {
    business_id: "abcd",
    name: "Applebee's",
    city: "Charlotte",
    state: "NC",
    stars: 4,
    review_count: 6,
    categories: ["Meats", "Sauces"], //I added
  },
  {
    business_id: "abcd",
    name: "China Garden",
    state: "NC",
    city: "Charlotte",
    stars: 4,
    review_count: 10,
    categories: ["Eat-in", "Take-out"],
  },
  {
    business_id: "abcd",
    name: "Beach Ventures Roofing",
    state: "AZ",
    city: "Phoenix",
    stars: 3,
    review_count: 30,
    categories: ["Hardware"],
  },
  {
    business_id: "abcd",
    name: "Alpaul Automobile Wash",
    city: "Charlotte",
    state: "NC",
    stars: 3,
    review_count: 30,
  },
];

describe("bestPlace", () => {
  it("filters correctly", () => {
    const list = new FluentBusinesses(testData).fromCityInState("Charlotte", "NC").getData();

    assert(list.length === 3);
    assert(list[0].name === "Applebee's");
    assert(list[1].name === "China Garden");
    assert(list[2].name === "Alpaul Automobile Wash");
  });
});

describe("bestPlace", () => {
  it("break tie with review count", () => {
    const best = new FluentBusinesses(testData).fromCityInState("Charlotte", "NC").bestPlace();

    assert(best);
    assert(best.name === "China Garden");
  });
});

describe("fromCityInState", () => {
  it("filters correctly", () => {
    const list = new FluentBusinesses(testData).fromCityInState("Charlotte", "NC").getData();
    assert(list.length === 3);
    assert(list[0].name === "Applebee's");
    assert(list[1].name === "China Garden");
    assert(list[2].name === "Alpaul Automobile Wash");
  });
});

describe("hasStarsGeq", () => {
  it("filters correctly", () => {
    const list1 = new FluentBusinesses(testData).hasStarsGeq(3).getData();
    assert(list1.length === 4);
    const list2 = new FluentBusinesses(testData).hasStarsGeq(4).getData();
    assert(list2.length === 2);
  });
});

describe("inCategory", () => {
  it("filters correctly", () => {
    const list = new FluentBusinesses(testData).inCategory("Hardware").getData();
    assert(list.length === 1);
    assert(list[0].name === "Beach Ventures Roofing");
  });
});

describe("mostReviews", () => {
  it("returns the correct thing", () => {
    const business = new FluentBusinesses(testData).mostReviews();
    assert(business !== undefined);
    assert(business.name === "Beach Ventures Roofing");
  });
});
