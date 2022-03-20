const data = [
  {
    _id: 1,
    name: "Mary",
    price: 5,
    nationality: "Indian",
    languages: ["Arabic"],
    skills: ["Child Care", "Light cleaning", "Companion care", "Laundry"],
    availability: [
      {
        day: "SAT",
        timeStart: "2022-04-23T18:25:43.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "SUN",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "MON",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "TUS",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "WED",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "THU",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "FRI",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
    ],
    experience: 6,
    slug: "mary",
  },
  {
    _id: 2,
    name: "Sarah",
    price: 7,
    nationality: "Philpino",
    languages: ["Arabic"],
    skills: ["Child Care", "Light cleaning", "Laundry", "Meal Perepation"],
    availability: [
      {
        day: "SUN",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "MON",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "TUS",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "WED",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "THU",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
    ],
    experience: 6,
    slug: "sarah",
  },
  {
    _id: 3,
    name: "Nora",
    price: 10,
    nationality: "Philpino",
    languages: ["Arabic", "English"],
    skills: ["Child Care", "Light cleaning", "Companion care", "Laundry"],
    availability: [
      {
        day: "SAT",
        timeStart: "2022-04-23T18:25:43.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },

      {
        day: "FRI",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
    ],
    experience: 6,
    slug: "nora",
  },
  {
    _id: 4,
    name: "Yaya",
    price: 5,
    nationality: "Philpino",
    languages: ["Arabic", "English"],
    skills: ["Light cleaning", "Companion care", "Laundry", "Meal Perepation"],
    availability: [
      {
        day: "SUN",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "MON",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "TUS",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
    ],
    experience: 6,
    slug: "yaya",
  },
  {
    _id: 5,
    name: "Salma",
    price: 7,
    nationality: "Indian",
    languages: ["Arabic", "English"],
    skills: ["Child Care", "Light cleaning", "Meal Perepation"],
    availability: [
      {
        day: "SAT",
        timeStart: "2022-04-23T18:25:43.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "SUN",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "MON",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "TUS",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "WED",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "THU",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "FRI",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
    ],
    experience: 6,
    slug: "salma",
  },
  {
    _id: 6,
    name: "Salma",
    price: 7,
    nationality: "Indian",
    languages: ["Arabic", "English"],
    skills: ["Child Care"],
    availability: [
      {
        day: "SAT",
        timeStart: "2022-04-23T18:25:43.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "SUN",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "THU",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "FRI",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
    ],
    experience: 6,
    slug: "salma-1",
  },
  {
    _id: 7,
    name: "Salma",
    price: 7,
    nationality: "Indian",
    languages: ["Arabic", "English"],
    skills: [
      "Child Care",
      "Light cleaning",
      "Companion care",
      "Laundry",
      "Meal Perepation",
    ],
    availability: [
      {
        day: "SAT",
        timeStart: "2022-04-23T18:25:43.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "SUN",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "MON",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "TUS",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "FRI",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
    ],
    experience: 6,
    slug: "salma-2",
  },
  {
    _id: 8,
    name: "Salma",
    price: 7,
    nationality: "Indian",
    languages: ["Arabic", "English"],
    skills: [
      "Child Care",
      "Light cleaning",
      "Companion care",
      "Laundry",
      "Meal Perepation",
    ],
    availability: [
      {
        day: "SAT",
        timeStart: "2022-04-23T18:25:43.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "SUN",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "TUS",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "WED",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "THU",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "FRI",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
    ],
    experience: 6,
    slug: "salma-3",
  },
  {
    _id: 9,
    name: "Thorya",
    price: 7,
    nationality: "Indian",
    languages: ["Arabic", "English"],
    skills: [
      "Child Care",
      "Light cleaning",
      "Companion care",
      "Laundry",
      "Meal Perepation",
    ],
    availability: [
      {
        day: "SAT",
        timeStart: "2022-04-23T18:25:43.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "SUN",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "MON",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "TUS",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "WED",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
      {
        day: "FRI",
        timeStart: "2022-03-10T18:25:44.511Z",
        timeEnd: "2022-04-10T18:25:44.511Z",
      },
    ],
    experience: 6,
    slug: "thorya",
  },
];

export default data;
