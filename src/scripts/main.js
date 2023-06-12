const contP1Button = document.querySelector('#sure');
const contP2Button = document.querySelector('#continue-button-page2');
const contP3Button = document.querySelector('#continue-button-page3');
const contP4Button = document.querySelector('#continue-button-page4');
const contP5Button = document.querySelector('#continue-button-page5');
const contP6Button = document.querySelector('#continue-button-page6');
const contP7Button = document.querySelector('#continue-button-page7');
const contP8Button = document.querySelector('#continue-button-page8');
const endButton = document.querySelector('#btn-end');

const body = document.querySelector('body');
const containerMain = document.querySelector('.container-main');

const titleMain = document.querySelector('#title-main');
const titlePage2 = document.querySelector('#title-page2');
const phrase1 = document.querySelector('#phrase1');
const phrase2 = document.querySelector('#phrase2');
const phrase1Page2 = document.querySelector('#phrase1-page2');
const phrase2Page2 = document.querySelector('#phrase2-page2');
const phrase3Page2 = document.querySelector('#phrase3-page2');
const phrase4Page2 = document.querySelector('#phrase4-page2');
const phrase1Page4 = document.querySelector('#phrase1-page4');
const phrase3Page4 = document.querySelector('#phrase3-page4');
const phrase1Page5 = document.querySelector('#phrase1-page5');
const phrase2Page5 = document.querySelector('#phrase2-page5');
const phrase3Page5 = document.querySelector('#phrase3-page5');
const phrase1Page6 = document.querySelector('#phrase1-page6');
const phrase1Page7 = document.querySelector('#phrase1-page7');
const phrase1Page9 = document.querySelector('#phrase1-page9');
const phrase2Page9 = document.querySelector('#phrase2-page9');
const phrasesP8 = document.querySelector('#phrases-p8');

const sectionMain = document.querySelector('#main');
const sectionPage2 = document.querySelector('#page2');
const sectionPage3 = document.querySelector('#page3');
const sectionPage4 = document.querySelector('#page4');
const sectionPage5 = document.querySelector('#page5');
const sectionPage6 = document.querySelector('#page6');
const sectionPage7 = document.querySelector('#page7');
const sectionPage8 = document.querySelector('#page8');
const sectionPage9 = document.querySelector('#page9');

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
const footerRed = document.querySelector('#footer-red');

let vh = document.documentElement.clientHeight;
canvasHeart.width = window.innerWidth;
canvasHeart.height = window.innerHeight;
body.style.height = vh + 'px';

window.addEventListener('resize', () => {
     let vh = document.documentElement.clientHeight;
     canvasHeart.width = window.innerWidth;
     canvasHeart.height = window.innerHeight;
     body.style.height = vh + 'px';
});

let countClicks = 0;

const phrasesLoveP8 = [
     'I love the way you are easygoing',
     'I love your beautiful smile',
     'I love the way you make me laugh',
     'I love how caring you are',
     'I love your humor',
     'I love your warm heart',
     'I love how supportive you are',
     'I love your adventurous way',
     'I love the way you light up a room',
     'I love your independence',
     'I love your thoughtfulness',
     'I love your cooking skills',
     'I love your confidence',
     'I love your determination',
     'I love your honesty',
     'I love your patience',
     'I love how you listen to anybody',
     'I love your laugh',
     'I love your natural beauty',
     'I love your loyalty',
     'I love your sense of empathy',
     'I love your ability to make me feel special',
     'I love your love for animals',
     'I love your willingness to try new things',
     'I love your confidence in yourself',
     'I love your passion for the things you love',
     'I love your gestures that show you care',
     'I love your butt',
     'I love how you support me',
     'I love the way you make me feel loved',
     'I love your dedication to our relationship',
     'I love your playfulness that brings out my inner child',
     'I love your belief in me',
     'I love your ability to make me feel like the luckiest person alive',
     'I love your honesty that builds trust between us',
     'I love your kindness that extends to everyone you meet',
     'I love your ability to make the simplest moments feel special',
     'I love how hot you are',
     'I love your ability to make me feel understood',
     'I love your support that gives me the courage to persue my dreams',
     'I love your ability to find beauty in the smallest of things',
     'I love your ability to make me feel at home wherever we are',
     'I love your hugs that make everything better',
     'I love you for simply being you'
];

setTimeout(function(){
     typeWriter(titleMain, 80, function(){
          typeWriter(yesButton, 80, function(){})
     });
}, 2500);

yesButton.addEventListener('click', function() { //yesbutton
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

     if(countClicks >= 8){
          yesButton.style.display = 'none';
          typeWriter(phrase1, 40, function(){
               typeWriter(phrase2, 40, function(){
                    typeWriter(contP1Button, 40, function(){})
               })
          });
     }
});



contP1Button.addEventListener('click', function(){
     sectionMain.style.display = 'none';
     sectionPage2.style.display = 'block';
     setTimeout(function(){
          typeWriter(titlePage2, 70, function(){
               typeWriter(phrase1Page2, 40, function(){
                    typeWriter(phrase2Page2, 40, function(){
                         typeWriter(phrase3Page2, 40, function(){
                              typeWriter(phrase4Page2, 40, function(){
                                   typeWriter(contP2Button, 40, function(){})
                              })
                         })
                    })
               });
          });
     }, 2000);
})

contP2Button.addEventListener('click', function(){
     sectionPage2.style.display = 'none';
     sectionPage3.style.display = 'flex';
})

contP3Button.addEventListener('click', function(){
     setTimeout(function(){
          sectionPage4.style.display = 'block';
     }, 1050);
     setTimeout(function(){
          typeWriter(phrase1Page4, 40, function(){
               typeWriter(tapButtonP4, 60, function(){});
          });
     }, 2500);
})

contP4Button.addEventListener('click', function(){
     setTimeout(function(){
          typeWriter(phrase1Page5, 40, function(){
               typeWriter(tapButtonP5, 80, function(){})
          })
     }, 2000);
});

contP5Button.addEventListener('click', function(){
     setTimeout(function(){
          typeWriter(phrase1Page6, 40, function(){
               $(document).ready(function(){
                    $('#img-monkey').fadeIn(2000);
               });
               setTimeout(function(){
                    typeWriter(contP6Button, 40, function(){})
               }, 2010);
          });
     }, 2200);
});

contP6Button.addEventListener('click', function(){
     setTimeout(function(){
          typeWriter(phrase1Page7, 40, function(){
               $(document).ready(function(){
                    $('#img-couple').fadeIn(2000);
               });
               setTimeout(function(){
                    typeWriter(contP7Button, 40, function(){})
               }, 2010);
          });
     }, 2200);
});

contP7Button.addEventListener('click', function(){
     setTimeout(function(){
          typeWriter(phrasesP8, 40, function(){});
     }, 1020);
});

contP8Button.addEventListener('click', function(){
     setTimeout(function(){
          typeWriter(phrase1Page9, 60, function(){
               typeWriter(phrase2Page9, 60, function(){
                    typeWriter(endButton, 500, function(){});
               });
          });
     }, 1500);
});

endButton.addEventListener('click', function(){
     location.reload(true);
});

$(document).ready(function(){
     $('footer').hide();
     $('#footer-purple').hide();
     $('#footer-model').hide();
     $('#footer-green').hide();
     $('#footer-yellow').hide();
     $('#footer-red').hide();
     $('.colors').hide();
     $('footer').delay(1500).slideDown(1000);
     $('.colors-btn').css('display', 'flex');
     $('.colors-btn').hide();

     $('#sure').click(function(){
          $('footer').slideUp(800);
          $('#footer-purple').delay(900).slideDown(1000);
     });

     //monster high
     $('#continue-button-page2').click(function(){
          $('#page2').slideUp(800);
          $('#footer-purple').slideUp(800);
          $('.colors-btn').delay(900).slideDown(1000);
     });

     //cores
     $('#continue-button-page3').click(function(){
          $('body').css('backgroundColor', '#eee');
          $('#page3').slideUp(1000);
          $('#page4').css('backgroundColor', '#eee');
          $('.continue-colored-btn').slideUp(1000);
          $('footer').delay(1350).slideDown(1000);
     });

     //pag branca
     $('#continue-button-page4').click(function(){
          $('body').css('backgroundColor', '#151515');
          $('#page4').slideUp(1000);
          $('#page5').delay(1010).show();
          $('footer').slideUp(800);
          $('#footer-model').delay(1000).slideDown(1000);
     });

     $('#continue-button-page5').click(function(){
          $('#page5').slideUp(800);
          $('#page6').delay(4010).show();
          $('#footer-model').slideUp(800);
          $('#footer-green').delay(1000).slideDown(1000);
     });

     $('#continue-button-page6').click(function(){
          $('#page6').slideUp(800);
          $('#page7').delay(1010).show();
          $('#footer-green').slideUp(800);
          $('#footer-yellow').delay(1000).slideDown(1000);
     });

     $('#continue-button-page7').click(function(){
          $('#page7').slideUp(800);
          $('#page8').delay(1010).show();
          $('#footer-yellow').slideUp(1000);
     });

     $('#continue-button-page8').click(function(){
          $('#continue-button-page8').hide();
          $('body').css('backgroundColor', '#Fa8a8a');
          $('#page9').show();
          $('#footer-red').slideDown(1000);
     });

     $('#tap-button-p5').click(function(){
          $('#phrase1-page5').hide();
          $('#tap-button-p5').hide();
     });
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
          $(document).ready(function(){
               $('.color1').slideDown(1000);
          });
          btnRed.style.backgroundColor = '#ee5253';
          break;
          case false:
          $(document).ready(function(){
               $('.color1').slideUp(1000);
          });
          btnRed.style.backgroundColor = '#ff6b6b';
          break;
     }

     verifyColoredButtons();
});

btnBlue.addEventListener('click', function(){
     switchBlue = !switchBlue;
     switch (switchBlue) {
          case true: 
          $(document).ready(function(){
               $('.color2').slideDown(1000);
          });
          btnBlue.style.backgroundColor = '#0abde3';
          break;
          case false:
               $(document).ready(function(){
                    $('.color2').slideUp(1000);
               });
               btnBlue.style.backgroundColor = '#48dbfb';
          break;
     }

     verifyColoredButtons();
});

btnGreen.addEventListener('click', function(){
     switchGreen = !switchGreen;
     switch (switchGreen) {
          case true: 
          $(document).ready(function(){
               $('.color3').slideDown(1000);
          });
          btnGreen.style.backgroundColor = '#10ac84';
          break;
          case false:
               $(document).ready(function(){
                    $('.color3').slideUp(1000);
               });
               btnGreen.style.backgroundColor = '#1dd1a1';
          break;
     }

     verifyColoredButtons();
});

btnYellow.addEventListener('click', function(){
     switchYellow = !switchYellow;
     switch (switchYellow) {
          case true: 
          $(document).ready(function(){
               $('.color4').slideDown(1000);
          });
          btnYellow.style.backgroundColor = '#ff9f43';
          break;
          case false:
               $(document).ready(function(){
                    $('.color4').slideUp(1000);
               });
               btnYellow.style.backgroundColor = '#feca57';
          break;
     }

     verifyColoredButtons();
});

tapButtonP4.addEventListener('click', function(){
     tapButtonP4.style.display = 'none';
     $(document).ready(function(){
          $('#img-dress').fadeIn(2000);
     });
     setTimeout(function(){
          typeWriter(phrase3Page4, 40, function(){
               typeWriter(contP4Button, 40, function(){})
          });
     }, 2000);

});

tapButtonP5.addEventListener('click', function(){
     typeWriter(phrase2Page5, 40, function(){
          $(document).ready(function(){
               $('#img-model').fadeIn(2000);
          });
          setTimeout(function(){
               typeWriter(phrase3Page5, 40, function(){
                    typeWriter(contP5Button, 60, function(){});
               });
          }, 2010);
     });
});

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
// var drumEffect = document.getElementById('drumEffect');

// Define as dimensões do canvas para preencher toda a janela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array para armazenar os círculos desenhados na tela
var circles = [];
var particles = [];
var index = 0;

var colorsBackground = [
"#7f8c8d",
"#c0392b",
"#16a085",
"#f39c12",
"#2980b9",
"#8e44ad",
"#2c3e50",
"#e1a40c",
"#27ae60",
"#1B1464"
];

var colorsLight = [
"#576574",
"#ff6b6b",
"#1dd1a1",
"#f39c12",
"#48dbfb",
"#ff9ff3",
"#2c3e50",
"#feca57",
"#2ecc71",
"#5f27cd"
];

// Construtor de objetos Circle
function Circle(x, y, color) {
     this.x = x;
     this.y = y;
     this.radiusCircle = 0;
     this.colorCircle = color;
     this.diameterCircle = 50;
     this.maxDiameterCircle = Math.max(canvas.width, canvas.height) * 2;
     this.speedCircle = 10;
}

function Particle(x, y, size, color, speedX, speedY) {
     this.x = x;
     this.y = y;
     this.sizeParticles = size;
     this.colorParticles = color;
     this.speedXParticles = speedX;
     this.speedYParticles = speedY;
     this.opacityParticles = 1;
}

// Método draw para desenhar o círculo no contexto do canvas
Circle.prototype.draw = function() {
     ctx.beginPath();
     ctx.arc(this.x, this.y, this.radiusCircle, 0, 2 * Math.PI);
     ctx.fillStyle = this.colorCircle;
     ctx.fill();
}

Particle.prototype.draw = function() {
     ctx.beginPath();
     ctx.arc(this.x, this.y, this.sizeParticles, 0, 2 * Math.PI);
     ctx.fillStyle = this.colorParticles;
     ctx.fill();
}

// Método update para atualizar o tamanho do círculo e verificar se ele atingiu o diâmetro máximo
Circle.prototype.update = function() {
     this.radiusCircle += this.speedCircle;
     if (this.radiusCircle >= this.maxDiameterCircle) {
          canvas.style.backgroundColor = this.colorCircle;
     }
}

Particle.prototype.update = function() {
     this.x += this.speedXParticles;
     this.y += this.speedYParticles;
     this.opacityParticles -= 0.01;

     if (this.opacityParticles <= 0) {
          var indexParticles = particles.indexOf(this);
          particles.splice(indexParticles, 1);
     }
}

// Função para animar os círculos no canvas
function animate() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     var i;

     for (i = 0; i < circles.length; i++) {
          circles[i].draw();
          circles[i].update();
     }

     for (i = 0; i < particles.length; i++) {
          particles[i].draw();
          particles[i].update();
     }
     
     // Chama a função novamente para criar uma animação contínua
     requestAnimationFrame(animate);
}

// Função para lidar com o clique do mouse
let counterPhrasesLove = 0;

function handleClick(e) {
     var x = e.clientX;
     var y = e.clientY;

     footer.style.display = 'none';

     phrasesP8.style.display = 'block';
     phrasesP8.innerHTML = phrasesLoveP8[counterPhrasesLove];
     typeWriter(phrasesP8, 15, function(){});

     counterPhrasesLove++;

     if(counterPhrasesLove == 5){
          typeWriter(contP8Button, 40, function(){});
     }

     if(counterPhrasesLove >= 45){
          counterPhrasesLove = 0;
     }

     phrasesP8.style.display = 'block';

     createCircleTambor(x, y, colorsLight[index]);
     createParticles(x, y, colorsLight[index]);

     index++;
     if(index>=10){
          index = 0;
     }

     // Cria um novo objeto Circle com as coordenadas do clique e uma cor aleatória
     var circle = new Circle(x, y, colorsBackground[index]);
     circles.push(circle);

     console.log(circles.length);

     if(circles.length >= 10){
          circles.splice(0, 1);
     }
}

function handleClickHeart(e) {
     var x = e.clientX;
     var y = e.clientY;

     footer.style.display = 'none';
     phrasesP8.style.display = 'none';

     createCircleTambor(x, y, '#ee0000');
     createParticles(x, y, '#ee0000');


     // Cria um novo objeto Circle com as coordenadas do clique e uma cor aleatória
     var circle = new Circle(x, y, '#Fa8a8a');
     circles.push(circle);

     console.log(circles.length);

     if(circles.length >= 10){
          circles.splice(0, 1);
     }
}

function createParticles(x, y, color) {
     var particleCount = 50;

     for (var i = 0; i < particleCount; i++) {
          var size = Math.random() * 4 + 2;
          var speedXParticles = (Math.random() - 0.5) * 10;
          var speedYParticles = (Math.random() - 0.5) * 10;

          var particle = new Particle(x, y, size, color, speedXParticles, speedYParticles);
          particles.push(particle);
     }
}

// Inicia a animação
animate();

// Adiciona um ouvinte de evento para capturar o clique do mouse
canvas.addEventListener('mousedown', handleClick);
phrasesP8.addEventListener('mousedown', handleClick);
contP8Button.addEventListener('mousedown', handleClickHeart);

var drumEffect = document.getElementById('drumEffect');

function createCircleTambor(x, y, color) {
     var circleTambor = document.createElement('div');
     circleTambor.className = 'circleTambor';
     circleTambor.style.left = (x - 50) + 'px';
     circleTambor.style.top = (y - 50) + 'px';
     circleTambor.style.backgroundColor = color;
     drumEffect.appendChild(circleTambor);
     
     // Remove o círculo após a animação
     setTimeout(function() {
     circleTambor.parentNode.removeChild(circleTambor);
     }, 500);
}

// Configurações dos corações
var hearts = [];
var numHearts = 20; // Número de corações

for (var i = 0; i < numHearts; i++) {
     var heart = {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 40 + 10, // Tamanho aleatório entre 10 e 40
          speed: Math.random() * .6 + 0.2, // Velocidade aleatória entre 1 e 3
          color: '#ee0000' // Vermelho
     };
     hearts.push(heart);
}

var canvasHeart = document.getElementById('canvasHeart');
var context = canvasHeart.getContext('2d');

// Define o tamanho do canvasHeart


console.log(canvasHeart.width + ' ' + canvasHeart.height);

console.log(window.innerWidth + ' ' + window.innerHeight);

function drawHeart(x, y, size, color) {
    context.fillStyle = color;

    // Desenha um coração utilizando um conjunto de caminhos
    context.beginPath();
    context.moveTo(x, y + size / 4);
    context.quadraticCurveTo(x, y, x + size / 4, y);
    context.quadraticCurveTo(x + size / 2, y, x + size / 2, y + size / 4);
    context.quadraticCurveTo(x + size / 2, y, x + size * 3 / 4, y);
    context.quadraticCurveTo(x + size, y, x + size, y + size / 4);
    context.quadraticCurveTo(x + size, y + size / 2, x + size / 2, y + size * 3 / 4);
    context.quadraticCurveTo(x, y + size / 2, x, y + size / 4);
    context.closePath();
    context.fill();
}

function update() {
     context.clearRect(0, 0, canvasHeart.width, canvasHeart.height);

     for (var i = 0; i < numHearts; i++) {
        var heart = hearts[i];

        // Movimenta o coração
        heart.y -= heart.speed;

        // Verifica se o coração saiu da tela e o reposiciona
        if (heart.y + heart.size < 0) {
            heart.y = canvasHeart.height;
            heart.x = Math.random() * (canvasHeart.width - heart.size);
        }

        // Desenha o coração
        drawHeart(heart.x, heart.y, heart.size, heart.color);
     }

     requestAnimationFrame(update);
}

update();

function typeWriter(element, timeTyping, callback){
     const textArray = element.innerHTML.split('');
     element.innerHTML = '';
     element.style.display = 'block';
     textArray.forEach((letter, indexLetter) => {
          setTimeout(() => {
               element.innerHTML += letter;
               if (indexLetter == textArray.length - 1){
                    callback();
               }
          }, timeTyping * indexLetter);
     });
}





// contP3Button.addEventListener('click', function(){
//      body.style.backgroundColor = '#eee';
//      body.style.color = '#151515';
//      // sectionPage3.style.display = 'none';
//      // divP3Button.style.display = 'none';
//      // sectionPage4.style.display = 'block';
//      phrase3Page4.style.display = 'none';
//      // footer.style.display = 'flex';
// })