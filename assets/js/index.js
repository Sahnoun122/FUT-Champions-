const modal = document.querySelector("#crud-modal");
let isclick = true;
let btn = function() {
    if (isclick == 1) {
        modal.style.display = "block";
        isclick = 0;
    } else {
        modal.style.display = "none";
        isclick = 1;
    }
}

let submit= document.getElementById('submit');
let addPlayerForm = document.getElementById("add-form");

//les inputs
let name = document.getElementById('name');
let pos = document.getElementById('pos');
let rating = document.getElementById('rating');
let nationality = document.getElementById('nationality');
let club = document.getElementById('club');
let photo = document.getElementById('photo');
let pace = document.getElementById('pace');
let shooting = document.getElementById('shooting');
let passing = document.getElementById('passing');
let dribbling = document.getElementById('dribbling');
let defending = document.getElementById('defending');
let physical = document.getElementById('physical');


//localstorage
let players = JSON.parse(localStorage.getItem('player')) || [];

// let player = JSON.parse(localStorage.getItem('player')) || [];

//change
let change = document.getElementById('change');

let cont =document.getElementById('cont');

//position
let lw = document.getElementById('LW');
let st = document.getElementById('ST');
let rw = document.getElementById('RW');
let cm_g = document.getElementById('CM-G');
let cm_c = document.getElementById('CM-C');
let cm_d = document.getElementById('CM-D');
let lb = document.getElementById('LB');
let cb_g = document.getElementById('CB-G');
let cb_d = document.getElementById('CB-D');
let rb = document.getElementById('RB');
let gk = document.getElementById('GK');



addPlayerForm.addEventListener("submit", function(event) {
    event.preventDefault();
        
    affichage()
});

function clearData() {
    name.value = '';
    pos.value = 'Choose a position';
    rating.value = '';
    nationality.value = '';
    club.value = '';
    photo.value = '';
    pace.value = '';
    shooting.value = '';
    passing.value = '';
    dribbling.value = '';
    defending.value = '';
    physical.value = '';
    change.value = '';
}
function addPlayer() {
    const player = {
        name: name.value,
        position: pos.value,
        rating: rating.value,
        nationality: nationality.value,
        club: club.value,
        photo: photo.value,
        pace: pace.value,
        shooting: shooting.value,
        passing: passing.value,
        dribbling: dribbling.value,
        defending: defending.value,
        physical: physical.value,
        change:change.value,
    };
    players.push(player);
    localStorage.setItem('player', JSON.stringify(players));

    clearData();

}

function update() {
    console.log("up")
    if (pos.value === "GK") {
      pace.setAttribute("placeholder", "dividing" );
      dribbling.setAttribute("placeholder", "handling" );
      shooting .setAttribute("placeholder", "kicking");
      defending.setAttribute("placeholder", "reflexes");
      passing.setAttribute("placeholder", "speed");
      physical.setAttribute("placeholder", "positioning");
    } else {
      pace.setAttribute("placeholder", "pace");
      dribbling.setAttribute("placeholder", "dribbling");
      shooting.setAttribute("placeholder", "shooting");
      defending.setAttribute("placeholder", "defencing");
      passing.setAttribute("placeholder", "passing");
      physical.setAttribute("placeholder", "physical");
    }
  }



function getPlayerContainer(position) {
    switch (position) {
        case 'LW':
            return lw;
        case 'ST':
            return st;
        case 'RW':
            return rw;
        case 'CMG':
            return cm_g;
        case 'CMC':
            return cm_c;
        case 'CMD':
            return cm_d;
        case 'LB':
            return lb;
        case 'CBG':
            return cb_g;
        case 'CBD':
            return cb_d;
        case 'RB':
            return rb;
        case 'GK':
            return gk;
        default:
            return null;
    }
}




function affichage() {
    const playersList= document.getElementById('players-list');
    playersList.innerHTML = '';
    players.forEach((player, index) => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('fut-player-card');
        playerCard.innerHTML = `
            <div class="player-card-top">
                <div class="player-master-info">
                    <div class="player-rating"><span>${player.rating}</span></div>
                    <div class="player-position"><span>${player.position}</span></div>
                    <div class="player-change"><span>${player.change}</span></div>
                    <div class="player-nation"><img src="${player.nationality}" alt="Nationalité" draggable="false"/></div>
                    <div class="player-club"><img src="${player.club}" alt="Club" draggable="false"/></div>
                </div>
                <div class="player-picture"><img src="${player.photo}" alt="${player.name}" draggable="false"/>
                    <div class="player-extra"><span>${player.position}</span></div>
                </div>
            </div>
            <div class="player-card-bottom">
                <div class="player-info">
                    <div class="player-name"><span>${player.name}</span></div>
                    <div class="player-features">
                        <div class="player-features-col">
                            <span>
                                <div class="player-feature-value">${player.pace}</div>
                                <div class="player-feature-title">PAC</div>
                            </span>
                            <span>
                                <div class="player-feature-value">${player.shooting}</div>
                                <div class="player-feature-title">SHO</div>
                            </span>
                            <span>
                                <div class="player-feature-value">${player.passing}</div>
                                <div class="player-feature-title">PAS</div>
                            </span>
                        </div>
                        <div class="player-features-col">
                            <span>
                                <div class="player-feature-value">${player.dribbling}</div>
                                <div class="player-feature-title">DRI</div>
                            </span>
                            <span>
                                <div class="player-feature-value">${player.defending}</div>
                                <div class="player-feature-title">DEF</div>
                            </span>
                            <span>
                                <div class="player-feature-value">${player.physical}</div>
                                <div class="player-feature-title">PHY</div>
                            </span>
                        </div>
                    </div>
                </div>
                <button  onclick="modificatio(${index})" style="color: blue;"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="supprime(this,${index})" style="color: red;"><i class="fa-solid fa-trash"></i></button>


            </div>
        `;
        console.log(player.change)
 if(player.change === "terain"){
   
    switch (player.position) {
        case 'LW':
            lw.innerHTML= playerCard.innerHTML;
              break;
        case 'ST':
            st.innerHTML= playerCard.innerHTML;

            break;
        case 'RW':
            rw.innerHTML = playerCard.innerHTML;
            break;
        case 'CM-G':
            cm_g.innerHTML = playerCard.innerHTML;

            break;
        case 'CM':
            cm_c.innerHTML = playerCard.innerHTML;

            break;
        case 'CM-D':
            cm_d.innerHTML = playerCard.innerHTML;

            break;
        case 'LB':
            lb.innerHTML = playerCard.innerHTML;

            break;
        case 'CB-G':
            cb_g.innerHTML = playerCard.innerHTML;

            break;
        case 'CB':
            cb_d.innerHTML = playerCard.innerHTML;

            break;
        case 'RB':
            rb.innerHTML = playerCard.innerHTML;

            break;
        case 'GK':
            gk.innerHTML = playerCard.innerHTML;
            break;
        default:
            playersList.appendChild(playerCard);
            break;
    }

 }else if(player.change === "change"){
    cont.appendChild(playerCard)
 }
    });
}

affichage();

function modificatio(index){
    modal.classList.remove("hidden")
    modal.style.display='block';
    const player = players[index];
    name.value = player.name;
    pos.value = player.position;
    rating.value = player.rating;
    nationality.value = player.nationality;
    club.value = player.club;
    photo.value = player.photo;
    pace.value = player.pace;
    shooting.value = player.shooting;
    passing.value = player.passing;
    dribbling.value = player.dribbling;
    defending.value = player.defending;
    physical.value = player.physical;
    
    console.log(name.value)
    
    };

function save(){
    modal.style.display='none';

}

// affichage() 

function supprime(element,index) { 

    players.splice(index, 1);
    localStorage.setItem('player', JSON.stringify(players));
    element.parentElement.parentElement.innerHTML = "";
    affichage();
}

function validateForm() {
    let name = document.getElementById('name').value;
    let pos = document.getElementById('pos').value;
    let rating = document.getElementById('rating').value;
    let nationality = document.getElementById('nationality').value;
    let club = document.getElementById('club').value;
    let photo = document.getElementById('photo').value;
    let pace = document.getElementById('pace').value;
    let shooting = document.getElementById('shooting').value;
    let passing = document.getElementById('passing').value;
    let dribbling = document.getElementById('dribbling').value;
    let defending = document.getElementById('defending').value;
    let physical = document.getElementById('physical').value;
  
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const posRegex = /^(RW|ST|CM-G|CM|CM-D|CB|CB-G|GK|CDM|LB|RB)$/;
    const ratingRegex = /^(?:[1-9]?[0-9]|100)$/;
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    const numberRegex = /^[0-9]{1,2}$/;
  
    document.querySelectorAll('.text-red-500').forEach(span => span.textContent = '');
    let isValid = true; 
    if (!nameRegex.test(name)) {
      document.getElementById('alert-name').innerHTML = "Le nom doit comporter entre 2 et 50 lettres uniquement.";
      document.getElementById('alert-name').className="text-sm text-red-600 font-light"
      isValid = false;
      return;
    }
    if (!posRegex.test(pos)) {
        document.getElementById('alert-pos').innerHTML = "Veuillez sélectionner une position valide.";
        document.getElementById('alert-pos').className="text-sm text-red-600 font-light"
          isValid = false;
      return;
    }
    if (!ratingRegex.test(rating)) {
         document.getElementById('alert-rating').innerHTML = "La note doit être un nombre entre 0 et 100.";
        document.getElementById('alert-rating').className="text-sm text-red-600 font-light"
      isValid = false;
      return;
    }
  
    if (!urlRegex.test(nationality)) {
        document.getElementById('alert-nationality').innerHTML = "La nationalité doit être une URL valide.";
        document.getElementById('alert-nationality').className="text-sm text-red-600 font-light"
        
      isValid = false;
      return;

    }
  
    if (!urlRegex.test(club)) {
          document.getElementById('alert-club').innerHTML = "La club doit être une URL valide.";
        document.getElementById('alert-club').className="text-sm text-red-600 font-light"
      isValid = false;
      return;

    }
  
    if (!urlRegex.test(photo)) {
        alert( "La photo doit être une URL valide.");
         document.getElementById('alert-photo').innerHTML = "La photo doit être une URL valide.";
        document.getElementById('alert-photo').className="text-sm text-red-600 font-light"
        
      isValid = false;
      return;

    }
  
    if (!numberRegex.test(pace)) {
        alert("La vitesse doit être un nombre compris entre 0 et 999.");
         document.getElementById('alert-pace').innerHTML = "La vitesse doit être un nombre compris entre 1 et 100.";
        document.getElementById('alert-pace').className="text-sm text-red-600 font-light"
      isValid = false;
      return;

    }
  
    if (!numberRegex.test(shooting)) {
        document.getElementById('alert-shooting').innerHTML = "Le tri doit être un nombre compris entre 1 et 100.";
        document.getElementById('alert-shooting').className="text-sm text-red-600 font-light"    
      isValid = false;

      return;

    }
  
    if (!numberRegex.test(passing)) {
        document.getElementById('alert-passing').innerHTML = "Les passes doivent être un nombre compris entre 1 et 100.";
        document.getElementById('alert-passing').className="text-sm text-red-600 font-light"
      isValid = false;
      return;
    }
    if (!numberRegex.test(dribbling)) {
        document.getElementById('alert-dribbling').innerHTML ="Les dribbles doivent être un nombre compris entre 1 et 100.";
        document.getElementById('alert-dribbling').className="text-sm text-red-600 font-light"
      isValid = false;
      return;
    }
    if (!numberRegex.test(defending)) {
         document.getElementById('alert-defending').innerHTML ="La défense doit être un nombre compris entre 1 et 100.";
        document.getElementById('alert-defending').className="text-sm text-red-600 font-light"
      isValid = false;
      return;

    }
    if (!numberRegex.test(physical)) {
        document.getElementById('alert-physical').innerHTML ="Le physique doit être un nombre compris entre 1 et 100.";
        document.getElementById('alert-physical').className="text-sm text-red-600 font-light"
      isValid = false;
      return;
    }
    addPlayer();
    affichage();
    return isValid; 
  }

  document.getElementById('add-form').addEventListener('submit', function (e) {
    if (!validateForm()) {
      e.preventDefault(); 
      affichage();
    }
  });


//   players.forEach((player, index) => {
//     const playerCard = document.createElement('div');
//     playerCard.classList.add('fut-player-card');
//     playerCard.innerHTML = `
//         <div class="player-card-top">
//             <div class="player-master-info">
//                 <div class="player-rating"><span>${player.rating}</span></div>
//                 <div class="player-position"><span>${player.position}</span></div>
//                 <div class="player-change"><span>${player.change}</span></div>
//                 <div class="player-nation"><img src="${player.nationality}" alt="Nationalité" draggable="false"/></div>
//                 <div class="player-club"><img src="${player.club}" alt="Club" draggable="false"/></div>
//             </div>
//             <div class="player-picture"><img src="${player.photo}" alt="${player.name}" draggable="false"/>
//                 <div class="player-extra"><span>${player.position}</span></div>
//             </div>
//         </div>
//         <div class="player-card-bottom">
//             <div class="player-info">
//                 <div class="player-name"><span>${player.name}</span></div>
//                 <div class="player-features">
//                     <div class="player-features-col">
//                         <span>
//                             <div class="player-feature-value">${player.pace}</div>
//                             <div class="player-feature-title">PAC</div>
//                         </span>
//                         <span>
//                             <div class="player-feature-value">${player.shooting}</div>
//                             <div class="player-feature-title">SHO</div>
//                         </span>
//                         <span>
//                             <div class="player-feature-value">${player.passing}</div>
//                             <div class="player-feature-title">PAS</div>
//                         </span>
//                     </div>
//                     <div class="player-features-col">
//                         <span>
//                             <div class="player-feature-value">${player.dribbling}</div>
//                             <div class="player-feature-title">DRI</div>
//                         </span>
//                         <span>
//                             <div class="player-feature-value">${player.defending}</div>
//                             <div class="player-feature-title">DEF</div>
//                         </span>
//                         <span>
//                             <div class="player-feature-value">${player.physical}</div>
//                             <div class="player-feature-title">PHY</div>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//             <button  onclick="modificatio(${index})" style="color: blue;"><i class="fa-solid fa-pen-to-square"></i></button>
//             <button onclick="supprime(this,${index})" style="color: red;"><i class="fa-solid fa-trash"></i></button>


//         </div>
//     `;

// cont.appendChild(playerCard)

// });
affichage()