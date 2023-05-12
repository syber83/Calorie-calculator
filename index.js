const proteinItems = document.querySelectorAll(".protein-item");

proteinItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle('selected');
    calculateCalories();
  });
});

function calculateCalories() {
  const selectedProteins = document.querySelectorAll('.protein-item.selected');
  let totalCalories = 0;
  let proteinNames = '';
  
  // Loop through all the selected protein items and sum up their calories
  selectedProteins.forEach((protein) => {
    const calories = parseInt(protein.dataset.calories);
    totalCalories += calories;
    proteinNames += protein.dataset.name + ' + ';
  });
  
  // Remove the last ' + ' from the proteinNames string
  // proteinNames = proteinNames.substring(0, proteinNames.length - 3);
  
  // Display the message on the calories display div
  const message = `Your food is ${proteinNames} and your total calories are: ${totalCalories}.`;
  const caloriesDisplay = document.getElementById('calories-display');
  caloriesDisplay.textContent = message;
}


