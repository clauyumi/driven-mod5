
const amountcards = 0;
const position = [];

 
let equal=0;

let contador=0;
let countclicks=0;

let clickCard = [];

const cardsgame = [];
const cardsshow = [];


const cards = [
  {card:"bobrossparrot.gif"},
  {card:"explodyparrot.gif"},
  {card:"fiestaparrot.gif"},
  {card:"metalparrot.gif"},
  {card:"revertitparrot.gif"},
  {card:"tripletsparrot.gif"},
  {card:"unicornparrot.gif"}
]

function question() {
                         
  const amountcards = Number(prompt("Quantas cartas quer jogar?"));

  if (amountcards>=4 && amountcards<=14 && amountcards%2===0)
    {
      let min=0;
      let max=6;
    
      let numbercards = amountcards/2;
    
     for (let i = 0; i < numbercards; i++) {
    
          number = Math.floor(Math.random() * (max - min + 1)) + min;
          
          if (position.includes(number)===false){
            position.push(number);
            cardsgame.push(cards[number]);
          }
          else {
            i--;
          }
          } 
    
  }
   else {
    const amountcards = Number(prompt("Quantas cartas quer jogar?"));
  }

  showcards()
}

question()




function showcards(){
  const cards = document.querySelector(".game_card");

  const cardsshow = cardsgame.concat(cardsgame);
  cardsshow.sort(() => 0.5 - Math.random());

  for (let index=0; index < cardsshow.length; index++) {
            const cardsList = 
                `<div class = "cards"  onclick="selectcard(this)">
                  <div class="side card-close" >
                    <img src="back.png" />
                  </div>
                
                  <div class="side card-open">
                    <img src="${cardsshow[index].card}" />
                  </div>
                </div>`;
             cards.innerHTML+=cardsList;

  }

// console.log(cardsshow);

}





function selectcard(card) {
 
  card.classList.toggle("flipped");
  //image.push(document.querySelectorAll(".flipped img"));
  contador++;
  countclicks++;

const elemimage = card.querySelector('.card-open img').src;
const cardsopen = card.querySelectorAll('.cards flipped');

clickCard.push(elemimage);
if(clickCard.length===2){

                if (clickCard[0]===clickCard[1]) {
                  equal++;
                  cardsopen[0].classList.remove("flipped");
                  cardsopen[0].classList.add("open");
                  cardsopen[1].classList.remove("flipped");
                  cardsopen[1].classList.add("open");
                 // clickCard=[];
                  setTimeout(finalizar,1000);
                  }

                  if (clickCard[0]!==clickCard[1]) {
                    setTimeout(() => {
                      cardsopen[0].classList.remove("flipped");
                      cardsopen[1].classList.remove("flipped");
                      cardsopen[0].classList.add("timer");
                      cardsopen[1].classList.add("timer");
                    },1500)
                   // clickCard=[];


                  }
                }


console.log(card.length);
//console.log(clickCard);
//console.log(elemimage);
//console.log(elemimage.lenght);

}



function comparecards(){

//const elemimage = document.querySelectorAll(".flipped img");
//onst elem = document.querySelectorAll(".cards");

const elemimage = document.querySelector('.card-open');

//if(contador===2){
//if (elemimage.length===4){
  // for (let index=1; index<elemimage.length;index+=2){
    //    clickCard.push(elemimage[index].src);
    
//}}
    if (clickCard[0]!==clickCard[1]) {
            setTimeout(voltar,3000);
            clickCard=[];
            }

          if(clickCard[0]===clickCard[1]) {
             equal++;
             open();

             //contador-=2;
             clickCard=[];}
            
          //  clickCard=[];
             // setTimeout(finalizar,1000);}

console.log(elemimage);
//console.log(equal);
//console.log(clickCard.length);


}
 
function voltar(){
  
  const elem = document.querySelectorAll(".cards");

  for (let index=0; index<elem.length;index++){
    if (elem[index].classList.contains("flipped")===true){

    elem[index].classList.remove("flipped");
    elem[index].classList.add("timer");
  }
 
  }

 // console.log(elem.length);

}

function open(){
  
  const elem = document.querySelectorAll(".cards");

  for (let index=0; index<elem.length;index++){
    if (elem[index].classList.contains("flipped")===true){

    elem[index].classList.remove("flipped");
    elem[index].classList.add("open");
  }
 
  }

  //console.log(elem);

}



function finalizar(){

  if(equal===cardsgame.length){
    alert(`Você ganhou em ${countclicks} jogadas`);
  }}

