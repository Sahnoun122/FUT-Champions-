let attaquant= document.getElementsByClassName('attaquant');
let item1= document.getElementsByClassName('item1');
let item2 = document.getElementsByClassName('item2');
let centre = document.getElementsByClassName('centre');
let item3 = document.getElementsByClassName('item3');
let item4 = document.getElementsByClassName('item4');
let gk = document.getElementsByClassName('gk');
let defanse = document.getElementsByClassName('defanse');

 let addPlayerForm = document.getElementById("add-form");

 

let name= document.getElementById('name');
let photo = document.getElementById('photo');
let nationality = document.getElementById('nationality');
let pos= document.getElementById('pos');
let rating= document.getElementById('rating');
let club= document.getElementById('club');
let logo = document.getElementById('logo');
let pace= document.getElementById('pace');
let shooting = document.getElementById('shooting');
let passing= document.getElementById('passing');
let dribbling= document.getElementById('dribbling');
let defending= document.getElementById('defending');
let physical= document.getElementById('physical');
let submit = document.getElementById('submit');
let position = document.getElementById('position');

//player variables

const pName = document.querySelector(".player-name");
const prating= document.querySelector('.player-rating');
const pposition=document.querySelector('.player-position');
const pnation = document.querySelector('.player-nation');
const pclub = document.querySelector('.player-club');
const pac = document.querySelector('.pac');
const sho = document.querySelector('.sho');
const pas= document.querySelector('.pas');
const dri =document.querySelector('.dri');
const def = document.querySelector('.def');
const phy = document.querySelector('.phy');


addPlayerForm.addEventListener("submit",function(event){
    event.preventDefault();
    addPlayer();
  })

  function addPlayer(){
    pName.innerHTML = name.value;
    prating.innerHTML=rating.value;
    pposition.innerHTML= pos.value;
    pnation.innerHTML= nationality.value;
    

    console.log("name",name.value)
  }
//create data



let datapro;
if(localStorage.joueur != null){
    datapro=JSON.parse(localStorage.joueur)
}else{
    let datapro= [];
}




//  submit.onclick = function(){
//     let newpro = {
//         name:name.value,
//         nationality:nationality.value,
//         pos:pos.value,
//         flag:flag.value,
//         club:club.value,
//         logo:logo.value,
//         pace:pace.value,
//         shooting:shooting.value,
//         passing:passing.value,
//         dribbling:dribbling.value,
//         defending:defending.value,
//         physical:physical.value,
    
//     }

    // const card = readdata(newpro);
    // document.getElementById('BB').appendChild(card);


    datapro.push(newpro);
    //save localstorage
    localStorage.setItem('joueur' , JSON.stringify(datapro));
    // console.logo(datapro)
    cleardata()
    readdata();

//clear data
 function cleardata(){
     nam.value='';
    nationality.value='';
    pos.value ='';
    flag.value='';
    club.value='';
    logo.value='';
    pace.value='';
    shooting.value='';
    passing.value='';
    dribbling.value='';
    defending.value='';
    physical.value='';
 }


 function showdata(){

 }

 
function readdata(newpro) {
    const card = document.createElement('div');
    card.innerHTML = `
     <div class="fut-player-card">
            <div class="">
                <div class="player-card-top">
                <div class="player-master-info">
                    <div class="player-rating">
                        <span>${newpro.rating}</span>
                    </div>
                    <div class="player-position">
                        <span>${data.pos}</span>
                    </div>
                    <div class="player-nation">
                        <img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Argentina" draggable="false"/>
                    </div>
                    <div class="player-club">
                        <img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false"/>
                    </div>
                </div>
                <div class="player-picture">
                    <img src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png" alt="Messi" draggable="false"/>
                   
                </div>
            </div>
            <div class="player-card-bottom">
                <div class="player-info">
                    <div class="player-name">
                        <span>${data.nam}</span>
                    </div>
                    <div class="player-features">
                        <div class="player-features-col">
                            <span>
                                <div class="player-feature-value">${data.pace}</div>
                                <div class="player-feature-title">PAC</div>
                            </span>
                            <span>
                                <div class="player-feature-value"> ${data.shooting}</div>
                                <div class="player-feature-title">SHO</div>
                            </span>
                            <span>
                                <div class="player-feature-value">${data.passing}</div>
                                <div class="player-feature-title">PAS</div>
                            </span>
                        </div>
                        <div class="player-features-col">
                            <span>
                                <div class="player-feature-value">${data.dribbling}</div>
                                <div class="player-feature-title">DRI</div>
                            </span>
                            <span>
                                <div class="player-feature-value">${data.defending}</div>
                                <div class="player-feature-title">DEF</div>
                            </span>
                            <span>
                                <div class="player-feature-value">${data.physical}</div>
                                <div class="player-feature-title">PHY</div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
 
    `;
    return card;
}


 //read data
//  function readdata(){

//     for (let i = 0; i < datapro.length; i++) {
//         let player = datapro[i];

//         if (player.position === 'Attaque') {
//             attaquant.innerHTML += `
        //        <div class="fut-player-card">
        //     <div class="">
        //         <div class="player-card-top">
        //         <div class="player-master-info">
        //             <div class="player-rating">
        //                 <span>${player.rating}</span>
        //             </div>
        //             <div class="player-position">
        //                 <span>${player.pos}</span>
        //             </div>
        //             <div class="player-nation">
        //                 <img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Argentina" draggable="false"/>
        //             </div>
        //             <div class="player-club">
        //                 <img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false"/>
        //             </div>
        //         </div>
        //         <div class="player-picture">
        //             <img src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png" alt="Messi" draggable="false"/>
                   
        //         </div>
        //     </div>
        //     <div class="player-card-bottom">
        //         <div class="player-info">
        //             <div class="player-name">
        //                 <span>${player.nam}</span>
        //             </div>
        //             <div class="player-features">
        //                 <div class="player-features-col">
        //                     <span>
        //                         <div class="player-feature-value">${player.pace}</div>
        //                         <div class="player-feature-title">PAC</div>
        //                     </span>
        //                     <span>
        //                         <div class="player-feature-value"> ${player.shooting}</div>
        //                         <div class="player-feature-title">SHO</div>
        //                     </span>
        //                     <span>
        //                         <div class="player-feature-value">${player.passing}</div>
        //                         <div class="player-feature-title">PAS</div>
        //                     </span>
        //                 </div>
        //                 <div class="player-features-col">
        //                     <span>
        //                         <div class="player-feature-value">${player.dribbling}</div>
        //                         <div class="player-feature-title">DRI</div>
        //                     </span>
        //                     <span>
        //                         <div class="player-feature-value">${player.defending}</div>
        //                         <div class="player-feature-title">DEF</div>
        //                     </span>
        //                     <span>
        //                         <div class="player-feature-value">${player.physical}</div>
        //                         <div class="player-feature-title">PHY</div>
        //                     </span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     </div>
        // </div>


              
//             `;
//         } else if (player.position === 'Defanse') {
//             card.innerHTML += `
//             <div class="fut-player-card">
//             <div class="">
//                 <div class="player-card-top">
//                 <div class="player-master-info">
//                     <div class="player-rating">
//                         <span>${player.rating}</span>
//                     </div>
//                     <div class="player-position">
//                         <span>${player.pos}</span>
//                     </div>
//                     <div class="player-nation">
//                         <img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Argentina" draggable="false"/>
//                     </div>
//                     <div class="player-club">
//                         <img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false"/>
//                     </div>
//                 </div>
//                 <div class="player-picture">
//                     <img src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png" alt="Messi" draggable="false"/>
                   
//                 </div>
//             </div>
//             <div class="player-card-bottom">
//                 <div class="player-info">
//                     <div class="player-name">
//                         <span>${player.nam}</span>
//                     </div>
//                     <div class="player-features">
//                         <div class="player-features-col">
//                             <span>
//                                 <div class="player-feature-value">${player.pace}</div>
//                                 <div class="player-feature-title">PAC</div>
//                             </span>
//                             <span>
//                                 <div class="player-feature-value"> ${player.shooting}</div>
//                                 <div class="player-feature-title">SHO</div>
//                             </span>
//                             <span>
//                                 <div class="player-feature-value">${player.passing}</div>
//                                 <div class="player-feature-title">PAS</div>
//                             </span>
//                         </div>
//                         <div class="player-features-col">
//                             <span>
//                                 <div class="player-feature-value">${player.dribbling}</div>
//                                 <div class="player-feature-title">DRI</div>
//                             </span>
//                             <span>
//                                 <div class="player-feature-value">${player.defending}</div>
//                                 <div class="player-feature-title">DEF</div>
//                             </span>
//                             <span>
//                                 <div class="player-feature-value">${player.physical}</div>
//                                 <div class="player-feature-title">PHY</div>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>

//             `;
//         } else if (player.position === 'GK') {
//             card.innerHTML += `
//             <div class="fut-player-card">
//             <div class="">
//                 <div class="player-card-top">
//                 <div class="player-master-info">
//                     <div class="player-rating">
//                         <span>${player.rating}</span>
//                     </div>
//                     <div class="player-position">
//                         <span>${player.pos}</span>
//                     </div>
//                     <div class="player-nation">
//                         <img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Argentina" draggable="false"/>
//                     </div>
//                     <div class="player-club">
//                         <img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false"/>
//                     </div>
//                 </div>
//                 <div class="player-picture">
//                     <img src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png" alt="Messi" draggable="false"/>
                   
//                 </div>
//             </div>
//             <div class="player-card-bottom">
//                 <div class="player-info">
//                     <div class="player-name">
//                         <span>${player.nam}</span>
//                     </div>
//                     <div class="player-features">
//                         <div class="player-features-col">
//                             <span>
//                                 <div class="player-feature-value">${player.pace}</div>
//                                 <div class="player-feature-title">PAC</div>
//                             </span>
//                             <span>
//                                 <div class="player-feature-value"> ${player.shooting}</div>
//                                 <div class="player-feature-title">SHO</div>
//                             </span>
//                             <span>
//                                 <div class="player-feature-value">${player.passing}</div>
//                                 <div class="player-feature-title">PAS</div>
//                             </span>
//                         </div>
//                         <div class="player-features-col">
//                             <span>
//                                 <div class="player-feature-value">${player.dribbling}</div>
//                                 <div class="player-feature-title">DRI</div>
//                             </span>
//                             <span>
//                                 <div class="player-feature-value">${player.defending}</div>
//                                 <div class="player-feature-title">DEF</div>
//                             </span>
//                             <span>
//                                 <div class="player-feature-value">${player.physical}</div>
//                                 <div class="player-feature-title">PHY</div>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>

//             `;
//         } else if (player.position === 'Meileu') {
//             card.innerHTML += `
//                <div class="fut-player-card">
//             <div class="">
//                 <div class="player-card-top">
//                 <div class="player-master-info">
//                     <div class="player-rating">
//                         <span>${player.rating}</span>
//                     </div>
//                     <div class="player-position">
//                         <span>${player.pos}</span>
//                     </div>
//                     <div class="player-nation">
//                         <img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Argentina" draggable="false"/>
//                     </div>
//                     <div class="player-club">
//                         <img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" draggable="false"/>
//                     </div>
//                 </div>
//                 <div class="player-picture">
//                     <img src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png" alt="Messi" draggable="false"/>
                   
//                 </div>
//             </div>
//             <div class="player-card-bottom">
//                 <div class="player-info">
//                     <div class="player-name">
//                         <span>${player.nam}</span>
//                     </div>
//                     <div class="player-features">
//                         <div class="player-features-col">
//                             <span>
//                                 <div class="player-feature-value">${player.pace}</div>
//                                 <div class="player-feature-title">PAC</div>
//                             </span>
//                             <span>
//                                 <div class="player-feature-value"> ${player.shooting}</div>
//                                 <div class="player-feature-title">SHO</div>
//                             </span>
//                             <span>
//                                 <div class="player-feature-value">${player.passing}</div>
//                                 <div class="player-feature-title">PAS</div>
//                             </span>
//                         </div>
//                         <div class="player-features-col">
//                             <span>
//                                 <div class="player-feature-value">${player.dribbling}</div>
//                                 <div class="player-feature-title">DRI</div>
//                             </span>
//                             <span>
//                                 <div class="player-feature-value">${player.defending}</div>
//                                 <div class="player-feature-title">DEF</div>
//                             </span>
//                             <span>
//                                 <div class="player-feature-value">${player.physical}</div>
//                                 <div class="player-feature-title">PHY</div>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>

//             `;
//         }
//     }
// }
// readdata();