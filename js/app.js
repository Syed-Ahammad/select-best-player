const playerArray = [{playerName: 'Cristino Ronaldo', goal: '34 Goals', assist: '120 Assist', img: './img/CristianoRonaldo.jpg'}, 
   {playerName: 'Karim Benzema', goal: '25 Goals', assist: '150 Assist', img: './img/karimBenzema.jpg'},
    {playerName: 'Kylian Mbappe', goal: '28 Goals', assist: '110 Assist', img: './img/KylianMbappe.jpg'},
     {playerName: 'Lionel Messi', goal: '31 Goals', assist: '90 Assist', img: './img/lionelMessi.jpg'},
     {playerName: 'Luka Modric', goal: '20 Goals', assist: '100 Assist', img: './img/LukaModrić.png'},
     {playerName: 'Mesut Ozil', goal: '15 Goals', assist: '80 Assist', img: './img/mesutOzil.jpg'},
     {playerName: 'Neymer JR', goal: '30 Goals', assist: '95 Assist', img: './img/neymer.jpg'},
     {playerName: 'Robert Lewandowski', goal: '21 Goals', assist: '105 Assist', img: './img/robert.jpg'},
     {playerName: 'Paul Pogba', goal: '19 Goals', assist: '80 Assist', img: './img/paulPogba.jpg'}];

const playerCard = document.getElementById('player-card');

function displayPlayer(obj){
    const playerName = obj.playerName;
    const goal = obj.goal;
    const assist = obj.assist;
    const img = obj.img;
    // const img =JSON.stringify(obj.img);
    // console.log(img);

    const div = document.createElement('div');
    div.classList.add("text-center", "bg-black", "text-white", "pb-4", "border");
    div.innerHTML = `
    <div>
    <img src='${img}' alt="">
    </div>
    <h2 class="text-2xl mt-4 font-bold">${playerName}</h2>
    <p class="text-base my-5 font-light">${goal} . ${assist}</p>
    <button onclick="display(this)" class="w-3/4 px-5 py-1 bg-cyan-500 font-normal text-xl">SELECT</button>
    `;
    playerCard.appendChild(div);
}

displayPlayer(playerArray[0]);
displayPlayer(playerArray[1]);
displayPlayer(playerArray[2]);
displayPlayer(playerArray[3]);
displayPlayer(playerArray[4]);
displayPlayer(playerArray[5]);
displayPlayer(playerArray[6]);
displayPlayer(playerArray[7]);
displayPlayer(playerArray[8]);