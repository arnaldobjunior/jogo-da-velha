let img;
var tela=1;
var largura =200;
var altura = 50;
var xMenu=350;
var yMenu1=85;
var yMenu2=145;
var yMenu3=205;
let w;
let h;
let resultado = 1;   
let matriz = [
    ['.','.','.'],
    ['.','.','.'],
    ['.','.','.'],
    ['pc','pc','pc']
];

function preload(){
  arnaldo = loadImage("img/arnaldo.jpg");
}

function setup(){
  canvas = createCanvas(900,700);
  canvas.position(10,10);
}

function acrescenta(j,i) {
        
       
  if (matriz[j][i] == '.') {
    matriz[j][i] = 0;
  }else if(matriz[j][i] == 0){
    matriz[j][i] = 1;
  }else if(matriz[j][i] == 1){
    matriz[j][i] =2;
  }else if(matriz[j][i] == 2){
    matriz[j][i] =3;
  }else if(matriz[j][i] == 3){
    matriz[j][i] =4;
  }else if(matriz[j][i] == 4){
    matriz[j][i] =5;
  }else if(matriz[j][i] == 5){
    matriz[j][i] =6;
  }else if(matriz[j][i] == 6){
    matriz[j][i] =7;
  }else if(matriz[j][i] == 7){
    matriz[j][i] =8;
  }else if(matriz[j][i] == 8){
    matriz[j][i] =9;
  }else if(matriz[j][i] == 9){
    matriz[j][i] = '.';
  }  
}

function vazia(){
  let o = 1
  while(o==1){
    j = floor(round(random(0,320))/h);
    i = floor(round(random(0,430))/w);
    if (matriz[j][i]=='.'){
      o=0;
      matriz[j][i]=round(random(0,9));
    }
  }
}

function result(){
  if(matriz[0][0]+matriz[0][1]+matriz[0][2]==resultado){
    alert("parabens");
  }else if(matriz[1][0]+matriz[1][1]+matriz[1][2]==resultado){
    alert("parabens");
  }else if(matriz[2][0]+matriz[2][1]+matriz[2][2]==resultado){
    alert("parabens");
  }else if(matriz[0][0]+matriz[1][0]+matriz[2][0]==resultado){
    alert("parabens");
  }else if(matriz[0][1]+matriz[1][1]+matriz[2][1]==resultado){
    alert("parabens");
  }else if(matriz[0][2]+matriz[1][2]+matriz[2][2]==resultado){
    alert("parabens");
  }else if(matriz[0][0]+matriz[1][1]+matriz[2][2]==resultado){
    alert("parabens");
  }else if(matriz[0][2]+matriz[1][1]+matriz[2][0]==resultado){
    alert("parabens");
  }else{
    alert("empate");
  }
}

function draw(){
  
  textStyle(NORMAL);
  textAlign(CENTER);
  textSize(30);
  if(tela==1){
    stroke(200);
    fill("#318aa9");
    rect(xMenu, yMenu1,largura,altura,100);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
      stroke(500);
      fill(100);
      rect(xMenu, yMenu1,largura,altura,100);
      if(mouseIsPressed){
        resultado = round(random(0,27));
        tela=2;
      }
    }
    stroke(200);
    fill("#318aa9");
    rect(xMenu, yMenu2,largura,altura,100);
    fill("#08475d");
    text("Começar",450,120);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
      stroke(500);
      fill(100);
      rect(xMenu, yMenu2,largura,altura,100);
      if(mouseIsPressed){
        tela=3;
      }
    }
    stroke(200);
    fill("#318aa9");
    rect(xMenu, yMenu3,largura,altura,100);
    fill("#08475d");
    text("Instruções",450,180);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
      stroke(500);
      fill(100);
      rect(xMenu, yMenu3,largura,altura,100);
      if(mouseIsPressed){
        tela=4;
      }
    }
    
    fill("#08475d");
    text("Créditos",450,240);
  }else if(tela==3){
    canvas_jogo = createCanvas(325,430);
    canvas_jogo.position(300,120);

    textSize(18);
    text('Olá, tripulante!Vamos iniciar o jogo? Para começar é preciso clicar com seu mouse no botão começar e selecionar o tipo de operação matemática que a sua prof pediu.Depois de selecionar o tipo do jogo, você, tripulante, vai selecionar o número desejado e clicar em "finalizar".Agora é vez do pirata robô jogar, ele vai sortear um número para tentar atrapalhar o seu jogo, mas você não vai desistir, né? Quando o pirata finalizar a jogada, será sua vez novamente, o jogo só termina quando o pirata ou o tripulante completa o resultado na diagonal, horizontal ou vertical. Cuidado com o empate, caso contrário, você terá que dividir o tesouro. :)',2,2,325,430);
  }else if(tela==4){
    canvas_jogo = createCanvas(450,440);
    canvas_jogo.position(250,120);
    fill("#318aa9");
    rect(1,1,400,430,10);
    textSize(18);
    text("O jogo é um projeto da disciplina de Lógica de Programação ofertada pela UFRN, foi desenvolvido por mim, Arnaldo B. Junior,graduando em Ciências e tecnologia, com escopo criado por Dominique Souza, graduada em pedagogia pela Universidade Federal do Rio Grande do Norte.",250,20,400,400)         
    domi = createImg("img/domi.jpg","domi");
    domi.style("border-radius","300px");
    image(arnaldo,500,250,200,200);
   
  }else if(tela==2){

    canvas_jogo = createCanvas(325,430);
    canvas_jogo.position(300,120);

    w = width/3;
    h = height/4;

    stroke(200);
    fill("#318aa9");
    rect(0,0,100,100,10);
    textSize(60);
    fill("#08475d");
    text("0",350,190);
   
    stroke(200);
    fill("#318aa9");
    rect(110,0,100,100,10);
    textSize(60);
    fill("#08475d");
    text("0",460,190);
   
    stroke(200);
    fill("#318aa9");
    rect(220,0,100,100,10);
    textSize(60);
    fill("#08475d");
    text("0",570,190);
   
    stroke(200);
    fill("#318aa9");
    rect(0,110,100,100,10);
    textSize(60);
    fill("#08475d");
    text("0",350,300);
   
    stroke(200);
    fill("#318aa9");
    rect(110,110,100,100,10);
    textSize(60);
    fill("#08475d");
    text("0",460,300);
  
    stroke(200);
    fill("#318aa9");
    rect(220,110,100,100,10);
    textSize(60);
    fill("#08475d");
    text("0",570,300);
   
    stroke(200);
    fill("#318aa9");
    rect(0,220,100,100,10);
    textSize(60);
    fill("#08475d");
    text("0",350,410);
   
    stroke(200);
    fill("#318aa9");
    rect(110,220,100,100,10);
    textSize(60);
    fill("#08475d");
    text("0",460,410);
    
    stroke(200);
    fill("#318aa9");
    rect(220,220,100,100,10);
    textSize(60);
    fill("#08475d");
    text("0",570,410);

    stroke(200);
    fill("#318aa9");
    rect(2,330,320,100,10);
    textSize(60);
    fill("#08475d");
    text(resultado,330,320);
    if(mouseX > 2 && mouseX < 2 + 320 && mouseY > 330 && mouseY < 330 + 100){
      stroke(200);
      fill("#08475d");
      rect(2,330,320,100,10);
      if (mouseIsPressed){
        vazia();
      }
    }
    if(mouseX>2 && mouseX <2+100 && mouseY >2 && mouseY <2+100){
      if(mouseIsPressed){
        acrescenta(0,0)
      }
    }
    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < 3; i++) {
        let x = w * i + w / 2;
        let y = h * j + h / 2;
        let spot = matriz[j][i];
        if (spot == 0) {
          noFill();
          textSize(50);
          text(0, x, y+15);
        }else if(spot == 1){
          noFill();
          textSize(50);
          text(1, x, y+15);
        }else if(spot == 2){
          noFill();
          textSize(50);
          text(2, x, y+15);
        }else if(spot == 3){
          noFill();
          textSize(50);
          text(3, x, y+15);
        }else if(spot == 4){
          noFill();
          textSize(50);
          text(4, x, y+15);
        }else if(spot == 5){
          noFill();
          textSize(50);
          text(5, x, y+15);
        }else if(spot == 6){
          noFill();
          textSize(50);
          text(6, x, y+15);
        }else if(spot == 5){
          noFill();
          textSize(50);
          text(5, x, y+15);
        }else if(spot == 7){
          noFill();
          textSize(50);
          text(7, x, y+15);
        }else if(spot == 8){
          noFill();
          textSize(50);
          text(8, x, y+15);
        }else if(spot == 9){
          noFill();
          textSize(50);
          text(9, x, y+15);
        }else if(spot == 10){
          noFill();
          textSize(50);
          text(0, x, y+15);
        }
      }
    }
  }
}


