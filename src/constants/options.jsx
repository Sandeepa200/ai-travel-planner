export const SelectTravelsList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A Sole Travels in Exploration",
    icon: "✈️",
    people: "1 people",
  },
  {
    id: 2,
    title: "Couple",
    desc: "A Couple Trip",
    icon: "🥂",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    desc: "A Family Trip",
    icon: "🏡",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A Friends Trip",
    icon: "⛵",
    people: "6 to 10 people",
  },
];

export const SelectBudgetList = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay Conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep Cost On The Average Side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget ,Give me a Hotels options list with\nHotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place\nDetails, Place Image Uri, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with\nbest time to visit in JSON format";
