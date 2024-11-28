const btn1 = document.querySelector("#crud-modal");
let isclick = true;
let btn = function() {
    if (isclick == 1) {
        btn1.style.display = "block";
        isclick = 0;
    } else {
        btn1.style.display = "none";
        isclick = 1;
    }
}
let addPlayerForm = document.getElementById("add-form");

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
let players = JSON.parse(localStorage.getItem('player')) || [];
let player = JSON.parse(localStorage.getItem('player')) || [];

let lw = document.getElementById('player-lw');
let st = document.getElementById('player-st');
let rw = document.getElementById('player-rw');
let cm_g = document.getElementById('player-cm-g');
let cm_c = document.getElementById('player-cm-c');
let cm_d = document.getElementById('player-cm-d');
let lb = document.getElementById('player-lb');
let cb_g = document.getElementById('player-cb-g');
let cb_d = document.getElementById('player-cb-d');
let rb = document.getElementById('player-rb');
let gk = document.getElementById('player-gk');

addPlayerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addPlayer();
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
        physical: physical.value
    };

    players.push(player);
    localStorage.setItem('player', JSON.stringify(players));

    clearData();
    displayPlayers();
}

async function fetchPlayers() {
    try {
        const response = await fetch('./players.json');
        const data = await response.json();
        localStorage.setItem('players', JSON.stringify(data));
        displayPlayers();
    } catch (error) {
        console.error('Failed to fetch players', error);
    }
}

//players array
let localPlayers = JSON.parse(localStorage.getItem('players'));
console.log(localPlayers.players[0]);
console.log("lp", localPlayers);

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

function displayPlayers() {
    let playersList = document.getElementById('players-list');
    playersList.innerHTML = '';

    players.forEach((player, index) => {
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
                <button onclick="editPlayer(${index})" style="color: white;">Edit</button>
                <button onclick="deletePlayer(${index})" style="color: white;">Delete</button>
            </div>
        `;

        const playerContainer = getPlayerContainer(player.position);
        if (playerContainer) {
            playerContainer.appendChild(playerCard);
        } else {
            playersList.appendChild(playerCard);
        }
    });
}

function editPlayer(index) {
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

    submit.value = 'Update Player';
    submit.onclick = function(event) {
        event.preventDefault();
        updatePlayer(index);
    };
}

function updatePlayer(index) {
    players[index] = {
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
        physical: physical.value
    };

    localStorage.setItem('player', JSON.stringify(players));
    displayPlayers();
    submit.value = 'Add Player';
    submit.onclick = function(event) {
        event.preventDefault();
        addPlayer();
    };

    clearData();
}

function deletePlayer(index) {
    players.splice(index, 1);
    localStorage.setItem('player', JSON.stringify(players));
    displayPlayers();
}

// Load and display players from localStorage on page load
document.addEventListener('DOMContentLoaded', fetchPlayers);
