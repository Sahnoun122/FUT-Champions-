let attaquant = document.getElementsByClassName('attaquant');
let item1 = document.getElementsByClassName('item1');
let item2 = document.getElementsByClassName('item2');
let centre = document.getElementsByClassName('centre');
let item3 = document.getElementsByClassName('item3');
let item4 = document.getElementsByClassName('item4');
let gk = document.getElementsByClassName('gk');
let defanse = document.getElementsByClassName('defanse');

const attaquant1= document.getElementById('attaquant');
const center1=document.getElementById('centre');
const defanse1=document.getElementById('defanse');
const gk1=document.getElementById('gk');

let addPlayerForm = document.getElementById("add-form");

// Form inputs
let name = document.getElementById('name');
let photo = document.getElementById('photo');
let nationality = document.getElementById('nationality');
let position = document.getElementById('pos');
let rating = document.getElementById('rating');
let club = document.getElementById('club');
let logo = document.getElementById('logo');
let pace = document.getElementById('pace');
let shooting = document.getElementById('shooting');
let passing = document.getElementById('passing');
let dribbling = document.getElementById('dribbling');
let defending = document.getElementById('defending');
let physical = document.getElementById('physical');
let submit = document.getElementById('submit');
let positionn = document.getElementById('position');

// Player details display
const pName = document.querySelector(".player-name");
const prating = document.querySelector('.p-rating');
const pposition = document.querySelector('.player-position');
const pnation = document.querySelector('.player-nation');
const pclub = document.querySelector('.player-club');
const pac = document.querySelector('.pac');
const sho = document.querySelector('.sho');
const pas = document.querySelector('.pas');
const dri = document.querySelector('.dri');
const def = document.querySelector('.def');
const phy = document.querySelector('.phy');

// Event listener for form submission
addPlayerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addPlayer();
});

function addPlayer() {
    const player = {
        name: name.value,
        rating: rating.value,
        position: pos.value,
        nationality: nationality.value,
        club: club.value,
        pace: pace.value,
        shooting: shooting.value,
        passing: passing.value,
        dribbling: dribbling.value,
        defending: defending.value,
        physical: physical.value,
        imageSrc: photo.value 
    };

    let players = JSON.parse(localStorage.getItem('players')) || [];
    players.push(player);
    localStorage.setItem('players', JSON.stringify(players));

    cleardata();
    displayPlayers();
}

function cleardata() {
    name.value = '';
    nationality.value = '';
    pos.value = 'Choose a position';
    rating.value = '';
    club.value = '';
    photo.value = ''; 
    pace.value = '';
    shooting.value = '';
    passing.value = '';
    dribbling.value = '';
    defending.value = '';
    physical.value = '';
}

async function fetchPlayers() {
    try {
        const response = await fetch('../page/player.json');
        const data = await response.json();
        let localPlayers = JSON.parse(localStorage.getItem('players')) || [];
        localPlayers = localPlayers.concat(data.players);
        localStorage.setItem('players', JSON.stringify(localPlayers));
        displayPlayers();
        console.log(data)
    } 
    catch (error) {
        console.error('Failed to fetch players', error);
    }
}

function displayPlayers() {
    const players = JSON.parse(localStorage.getItem('players')) || [];
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = ''; 

    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('fut-player-card');
        playerCard.innerHTML = `
            <div class="player-card-top">
                <div class="player-master-info">
                    <div class="player-rating"><span>${player.rating}</span></div>
                    <div class="player-position"><span>${player.position}</span></div>
                    <div class="player-nation"><img src="${player.nationality}" alt="Nationalité" draggable="false"/></div>
                    <div class="player-club"><img src="${player.club}" alt="Club" draggable="false"/></div>
                </div>
                <div class="player-picture"><img src="${player.imageSrc || 'default_image.png'}" alt="${player.name}" draggable="false"/>
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
            </div>
        `;
        playersList.appendChild(playerCard);
    });
}

document.addEventListener('DOMContentLoaded', fetchPlayers);
