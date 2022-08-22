const perCostField = document.getElementById('per-cost-field');
const totalCostId = document.getElementById('players-cost');
const managerId = document.getElementById('per-manager');
const coachId = document.getElementById('per-coach');
const totalExpenses = document.getElementById('total-expenses');


const players = [];
// function for display players
function displayPlayers(array){
    const table = document.getElementById('table');
    table.innerHTML = '';
    for(let i = 0; i < array.length; i++){
        const name = array[i];
        const num = i+1;
        const tr = document.createElement("tr")
        tr.classList.add("text-base");
        tr.innerHTML = `
                <td class="w-2/5">${num+'.'}</td>
                <td class="w-3/5">${name}</td>
            `;
            table.appendChild(tr);
       }
}



function display(event){
    const playerName = event.parentNode.children[1].innerText;

    if(players.length < 5){
    event.setAttribute('disabled', true);
    event.style.backgroundColor = 'gray';

    players.push(playerName);
    displayPlayers(players);
    }
    else{
        alert('You can not choose more than five players.')
    }
   
}

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
    const player = players.length;
    
    const perPlayer = inputNum(perCostField);
    const totalPlayerCost = perPlayer * player;

    totalCostId.innerText = totalPlayerCost;
})

// create function for total calculation
document.getElementById('total-btn').addEventListener('click', function(){
    const perManager = inputNum(managerId);
    const perCoach = inputNum(coachId);
    const totalPlayerCost =  elementNum(totalCostId);
    const totalCost = perManager + perCoach + totalPlayerCost;
    totalExpenses.innerText = totalCost;

})