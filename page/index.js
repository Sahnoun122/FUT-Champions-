let attaquant= document.getElementsByClassName('attaquant');
let item1= document.getElementsByClassName('item1');
let item2 = document.getElementsByClassName('item2');
let centre = document.getElementsByClassName('centre');
let item3 = document.getElementsByClassName('item3');
let item4 = document.getElementsByClassName('item4');
let gk = document.getElementsByClassName('gk');
let defanse = document.getElementsByClassName('defanse');



let nam= document.getElementById('name');
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


//create data



let datapro;
if(localStorage.joueur != null){
    datapro=JSON.parse(localStorage.joueur)
}else{
    let datapro= [];
}



 submit.onclick = function(){
    let newpro = {
        nam:nam.value,
        nationality:nationality.value,
        pos:pos.value,
        flag:flag.value,
        club:club.value,
        logo:logo.value,
        pace:pace.value,
        shooting:shooting.value,
        passing:passing.value,
        dribbling:dribbling.value,
        defending:defending.value,
        physical:physical.value,
    }
    datapro.push(newpro);
    //save localstorage
    localStorage.setItem('joueur' , JSON.stringify(datapro));
    // console.logo(datapro)
    cleardata()
 }
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

