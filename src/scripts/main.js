const contP1Button = document.querySelector('#sure');
const contP2Button = document.querySelector('#continue-button-page2');
const contP3Button = document.querySelector('#continue-button-page3');
const contP4Button = document.querySelector('#continue-button-page4');
const contP5Button = document.querySelector('#continue-button-page5');
const contP6Button = document.querySelector('#continue-button-page6');
const contP7Button = document.querySelector('#continue-button-page7');

const body = document.querySelector('body');
const containerMain = document.querySelector('.container-main');

const phrase1Page4 = document.querySelector('#phrase1-page4');
const phrase3Page4 = document.querySelector('#phrase3-page4');
const phrase1Page5 = document.querySelector('#phrase1-page5');
const phrase2Page5 = document.querySelector('#phrase2-page5');
const phrase3Page5 = document.querySelector('#phrase3-page5');

const sectionMain = document.querySelector('#main');
const sectionPage2 = document.querySelector('#page2');
const sectionPage3 = document.querySelector('#page3');
const sectionPage4 = document.querySelector('#page4');
const sectionPage5 = document.querySelector('#page5');
const sectionPage6 = document.querySelector('#page6');
const sectionPage7 = document.querySelector('#page7');
const sectionPage8 = document.querySelector('#page8');

const counter = document.querySelector('#counter');

const imgDress = document.querySelector('#img-dress');
const imgModel = document.querySelector('#img-model');

const yesButton = document.querySelector('#yes');

const coloredButtons = document.querySelector('.colors-btn');
const divP3Button = document.querySelector('.continue-colored-btn');
const divRed = document.querySelector('.color1');
const divBlue = document.querySelector('.color2');
const divGreen = document.querySelector('.color3');
const divYellow = document.querySelector('.color4');
const divColors = document.querySelectorAll('.colors');
const btnRed = document.querySelector('#btn-red');
const btnBlue = document.querySelector('#btn-blue');
const btnGreen = document.querySelector('#btn-green');
const btnYellow = document.querySelector('#btn-yellow');

const tapButtonP4 = document.querySelector('#tap-button-p4');
const tapButtonP5 = document.querySelector('#tap-button-p5');

const footer = document.querySelector('footer');
const footerPurple = document.querySelector('#footer-purple');
const footerModel = document.querySelector('#footer-model');
const footerGreen = document.querySelector('#footer-green');
const footerYellow = document.querySelector('#footer-yellow');

let countClicks = 0;

containerMain.addEventListener('click', function() { //yesbutton
     // Obter as dimensões do elemento sectionMain
     let containerWidth = containerMain.clientWidth;
     let containerHeight = containerMain.clientHeight - 131;

     // Gerar uma posição aleatória para o botão
     let randomLeft = Math.floor(Math.random() * containerWidth);
     let randomBottom = Math.floor(Math.random() * containerHeight);

     if (randomLeft > containerWidth - yesButton.offsetWidth){
          randomLeft = randomLeft - yesButton.offsetWidth;
     };

     if (randomBottom > containerHeight - yesButton.offsetHeight){
          randomBottom = randomBottom - yesButton.offsetHeight;
     };

     countClicks++;
     counter.innerHTML = countClicks;
     counter.style.display = 'block';


     // Aplicar a nova posição ao botão
     yesButton.style.transform = 'none';
     yesButton.style.left = randomLeft + 'px';
     yesButton.style.bottom = randomBottom + 'px';

     if(countClicks == 1){
          phrasesMain = document.querySelectorAll('p');

          phrasesMain.forEach(function(phrasesMain){
               phrasesMain.style.display = 'block';
          });

          yesButton.style.display = 'none';
          contP1Button.style.display = 'inline';
     }
});

contP1Button.addEventListener('click', function(){
     sectionMain.style.display = 'none';
     sectionPage2.style.display = 'block';
     footer.style.display = 'none';
     footerPurple.style.display = 'flex';
});

contP2Button.addEventListener('click', function(){
     sectionPage2.style.display = 'none';
     sectionPage3.style.display = 'flex';
     coloredButtons.style.display = 'flex';
     footerPurple.style.display = 'none';
})

contP3Button.addEventListener('click', function(){
     body.style.backgroundColor = '#eee';
     body.style.color = '#151515';
     // body.style.height = 'calc(100vh - 80px)';
     sectionPage3.style.display = 'none';
     divP3Button.style.display = 'none';
     sectionPage4.style.display = 'block';
     phrase3Page4.style.display = 'none';
     footer.style.display = 'flex';
})

contP4Button.addEventListener('click', function(){
     sectionPage4.style.display = 'none';
     sectionPage5.style.display = 'block';
     phrase2Page5.style.display = 'none';
     phrase3Page5.style.display = 'none';
     body.style.backgroundColor = '#151515';
     body.style.color = '#eee';
     footer.style.display = 'none';
     footerModel.style.display = 'flex';
});

contP5Button.addEventListener('click', function(){
     sectionPage5.style.display = 'none';
     sectionPage6.style.display = 'block';
     footerModel.style.display = 'none';
     footerGreen.style.display = 'flex';
});

contP6Button.addEventListener('click', function(){
     sectionPage6.style.display = 'none';
     sectionPage7.style.display = 'block';
     footerGreen.style.display = 'none';
     footerYellow.style.display = 'flex';
});

contP7Button.addEventListener('click', function(){
     sectionPage7.style.display = 'none';
     sectionPage8.style.display = 'block';
     footerYellow.style.display = 'none';
     footer.style.display = 'flex';
});

let switchRed = false;
let switchBlue = false;
let switchGreen = false;
let switchYellow = false;

function verifyColoredButtons(){
     if(switchRed && switchBlue && switchGreen && switchYellow){
          divP3Button.style.display = 'block';
          coloredButtons.style.display = 'none';
          // divColors.forEach(function(divColors){
          //      divColors.style.backgroundColor = 'transparent';
          // });
          document.querySelector('.divider').style.backgroundColor = '#151515'
          // sectionPage3.style.backgroundImage = 'linear-gradient(to bottom, #ff6b6b 0%, #ff6b6b 23%, #48dbfb 27%, #48dbfb 48%, #1dd1a1 52%, #1dd1a1 73%, #feca57 77%, #feca57 100%)';
     }
}

btnRed.addEventListener('click', function(){
     switchRed = !switchRed;
     switch (switchRed) {
          case true: 
          divRed.style.display = 'flex';
          btnRed.style.backgroundColor = '#ee5253';
          break;
          case false:
               divRed.style.display = 'none';
               btnRed.style.backgroundColor = '#ff6b6b';
          break;
     }

     verifyColoredButtons();
});

btnBlue.addEventListener('click', function(){
     switchBlue = !switchBlue;
     switch (switchBlue) {
          case true: 
          divBlue.style.display = 'flex';
          btnBlue.style.backgroundColor = '#0abde3';
          break;
          case false:
               divBlue.style.display = 'none';
               btnBlue.style.backgroundColor = '#48dbfb';
          break;
     }

     verifyColoredButtons();
});

btnGreen.addEventListener('click', function(){
     switchGreen = !switchGreen;
     switch (switchGreen) {
          case true: 
          divGreen.style.display = 'flex';
          btnGreen.style.backgroundColor = '#10ac84';
          break;
          case false:
               divGreen.style.display = 'none';
               btnGreen.style.backgroundColor = '#1dd1a1';
          break;
     }

     verifyColoredButtons();
});

btnYellow.addEventListener('click', function(){
     switchYellow = !switchYellow;
     switch (switchYellow) {
          case true: 
          divYellow.style.display = 'flex';
          btnYellow.style.backgroundColor = '#ff9f43';
          break;
          case false:
               divYellow.style.display = 'none';
               btnYellow.style.backgroundColor = '#feca57';
          break;
     }

     verifyColoredButtons();
});

tapButtonP4.addEventListener('click', function(){
     tapButtonP4.style.display = 'none';
     phrase3Page4.style.display = 'block';
     imgDress.style.display = 'block';
     contP4Button.style.display = 'block';
});

tapButtonP5.addEventListener('click', function(){
     phrase1Page5.style.display = 'none';
     tapButtonP5.style.display = 'none';
     imgModel.style.display = 'block';
     phrase2Page5.style.display = 'block';
     phrase3Page5.style.display = 'block';
     contP5Button.style.display = 'block';
});