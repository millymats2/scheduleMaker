const users = [
  {
    email: "milly@gmail.com",
    password: "milk123",
    username: "milk123",
    firstname: "milly",
    lastname: "mats",
    phoneNumber: "111-111-1111",
  },
];

const categories = [
  {
    name: "School",
  },
  {
    name: "Work",
  },
  {
    name: "Gym",
  },
  {
    name: "Family",
  },
  {
    name: "Social",
  },
  {
    name: "Personal",
  },
  {
    name: "Appointment",
  },
];

const events = [
  {
    eventName: "Leg Day",
    description: "Workout legs",
    dayId: 02,
    categoryId: 03,
    userId: 01,
  },
];

const days = [
  {
    name: "Monday",
  },
  {
    name: "Tuesday",
  },
  {
    name: "Wednesday",
  },
  {
    name: "Thursday",
  },
  {
    name: "Friday",
  },
  {
    name: "Saturday",
  },
  {
    name: "Sunday",
  },
];

module.exports = { users, categories, events, days };
