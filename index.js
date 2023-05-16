const proteinsBtn = document.querySelector("#proteins-btn");
const proteinsSection = document.querySelector('#proteins');

proteinsBtn.addEventListener('click', () => {
  if (proteinsSection.style.display === 'none') {
    proteinsSection.style.display = 'block';
  } else {
    proteinsSection.style.display = 'none';
  }
});

const greensBtn = document.querySelector("#greens-btn");
const greensSection = document.querySelector('#greens');

greensBtn.addEventListener('click', () => {
  if (greensSection.style.display === 'none') {
    greensSection.style.display = 'block';
  } else {
    greensSection.style.display = 'none';
  }
});

const fruitsBtn = document.querySelector("#fruits-btn");
const fruitsSection = document.querySelector('#fruits');

fruitsBtn.addEventListener('click', () => {
  if (fruitsSection.style.display === 'none') {
    fruitsSection.style.display = 'block';
  } else {
    fruitsSection.style.display = 'none';
  }
});

const nutsBtn = document.querySelector("#nuts-btn");
const nutsSection = document.querySelector("#nuts-legumes");

nutsBtn.addEventListener('click', () => {
  if (nutsSection.style.display === 'none') {
    nutsSection.style.display = 'block';
  } else {
    nutsSection.style.display = 'none';
  }
});

// const proteinItems = document.querySelectorAll(".protein-item");
// const greensItems = document.querySelectorAll(".greens-item");
// const fruitsItems = document.querySelectorAll(".greens-item");
// const nutsItems = document.querySelectorAll(".greens-item");
// (proteinItems, greensItems, fruitsItems, nutsItems) = foodItems;
// foodItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle('selected');
//     calculateCalories();
//   });
// });


const foodItems = document.querySelectorAll(".protein-item, .greens-item, .fruits-item, .nuts-item");
foodItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle('selected');
    calculateCalories();
  });
});

function calculateCalories() {
  const selectedFoods = document.querySelectorAll('.selected');
  let totalCalories = 0;
  let foodNames = '';
  
  // Loop through all the selected protein items and sum up their calories
  selectedFoods.forEach((food) => {
    const calories = parseInt(food.dataset.calories);
    totalCalories += calories;
    foodNames += food.dataset.name + ' + ';
  });
  
  // Remove the last ' + ' from the proteinNames string
  // proteinNames = proteinNames.substring(0, proteinNames.length - 3);
  
  // Display the message on the calories display div
  const message = `Your food is ${foodNames} and your total calories are: ${totalCalories}.`;
  const caloriesDisplay = document.getElementById('calories-display');
  caloriesDisplay.textContent = message;
}
