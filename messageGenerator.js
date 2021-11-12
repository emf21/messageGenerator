// this project seeks to genenerate random tips for users about drinking water

// Creating function
let motivationalFeed = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let tips = [
    "Carry a water bottle with you and refill it throughout the day.",
    "Freeze some freezer safe water bottles.",
    "Choose water over sugary drinks.",
    "Opt for water when eating out.",
    "Serve water during meals.",
    "Add a wedge of lime or lemon to your water.",
    "Make sure your kids are getting enough water too.",
  ];
  // Creating randomization of numbers and tips
  let randomNumber = Math.floor(Math.random() * numbers.length);
  let randomTips = Math.floor(Math.random() * tips.length);

  let results = [];
  results.push(
    `Daily Water Tip Number: ${randomNumber}. ${randomTips}. Always remember water is life.`
  );
  return results;
};
console.log(motivationalFeed());
