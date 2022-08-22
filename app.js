const perCostField = document.getElementById('per-cost-field');
const totalCostId = document.getElementById('players-cost');
const managerId = document.getElementById('per-manager');
const coachId = document.getElementById('per-coach');
const totalExpenses = document.getElementById('total-expenses');

// create function for convert number from input
function inputNum(id){
    const inputNum = parseFloat(id.value);
    return inputNum;
}

// create function for convert number from element
function elementNum(id){
    const elementNum = parseFloat(id.innerText);
    return elementNum;
}


//  create a function for calculation
document.getElementById('players-btn').addEventListener('click', function (){
    
    const perPlayer = inputNum(perCostField);
    const totalPlayerCost = perPlayer * 5;

    totalCostId.innerText = totalPlayerCost

   console.log(perPlayer);
})

// create function for total calculation
document.getElementById('total-btn').addEventListener('click', function(){
    const perManager = inputNum(managerId);
    const perCoach = inputNum(coachId);
    const totalPlayerCost =  elementNum(totalCostId);
    const totalCost = perManager + perCoach + totalPlayerCost;
    totalExpenses.innerText = totalCost;

})