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
let i ;
let j ;
let jogador ;
let linha = 0;
let matriz = [
    ['.','.','.'],
    ['.','.','.'],
    ['.','.','.'],
    ['pc','pc','pc']
];

function preload(){
  arnaldo = loadImage("img/arnaldo.jpg");
  domi=loadImage("img/domi.jpg");
  
}

function setup(){
  canvas = createCanvas(900,700);
  canvas.position(10,10);
}

function mousePressed() {
  i = floor(mouseX/h);
  j = floor(mouseY/w);

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
function winner(){
  if(jogador == 1){
    alert("vc ganhou")
  }else{
    alert(" o pc")
  }
}
function cruzar(){
  if(matriz[0][0] && matriz[0][1] && matriz[0][2] != "."){
    result()
  }else if(matriz[1][0] && matriz[1][1] && matriz[1][2] != "."){
    result()
  }else if(matriz[2][0] && matriz[2][1] && matriz[2][2]!= "."){
    result()
  }else if(matriz[0][0] && matriz[1][0] && matriz[2][0]!= "."){
    result()
  }else if(matriz[0][1] && matriz[1][1] && matriz[2][1]!= "."){
    result()
  }else if(matriz[0][2] && matriz[1][2] && matriz[2][2]!= "."){
    result()
  }else if(matriz[0][0] && matriz[1][1] && matriz[2][2]!= "."){
    result()
  }else if(matriz[0][2] && matriz[1][1] && matriz[2][0]!= "."){
    result()
  }else if(matriz[0][0] && matriz[0][1] && matriz[0][2] && matriz[1][0] && matriz[1][1] && matriz[1][2] && matriz[2][0] && matriz[2][1] && matriz[2][2] != "."){
    result()
  }else{
    vazia()
  }
}

function result(){
  if(matriz[0][0]+matriz[0][1]+matriz[0][2]==resultado){
    linha = 1
    tela = 2
  }else if(matriz[1][0]+matriz[1][1]+matriz[1][2]==resultado){
    linha = 2
    tela = 2
  }else if(matriz[2][0]+matriz[2][1]+matriz[2][2]==resultado){
    linha = 3
    tela = 2
  }else if(matriz[0][0]+matriz[1][0]+matriz[2][0]==resultado){
    linha = 4
    tela = 2
  }else if(matriz[0][1]+matriz[1][1]+matriz[2][1]==resultado){
    linha = 5
    tela = 2
  }else if(matriz[0][2]+matriz[1][2]+matriz[2][2]==resultado){
    linha = 6
    tela = 2
  }else if(matriz[0][0]+matriz[1][1]+matriz[2][2]==resultado){
    linha = 7
    tela = 2
  }else if(matriz[0][2]+matriz[1][1]+matriz[2][0]==resultado){
    linha = 8
    tela = 2
  }else{
    vazia()
  }
}

function vazia(){
  if(jogador === 0){
    if(matriz[0][0]=='.'|| matriz[0][1]=='.'|| matriz[0][2]=='.'|| matriz[1][0]=='.'|| matriz[1][1]=='.'|| matriz[1][2]=='.'|| matriz[2][0]=='.'|| matriz[2][1]=='.'|| matriz[2][2]=='.'){
      if (matriz[0][0]=='.'){
        matriz[0][0]=round(random(0,9));
        jogador = 1;
        cruzar()
      }else if(matriz[1][1]=='.'){
        matriz[1][1]=round(random(0,9));
        jogador = 1;
        cruzar()
      }else if(matriz[2][2]=='.'){
        matriz[2][2]=round(random(0,9));
        jogador = 1;
        cruzar()
      }else if(matriz[1][2]=='.'){
        matriz[1][2]=round(random(0,9));
        jogador = 1;
        cruzar()
      }else if(matriz[2][0]=='.'){
        matriz[2][0]=round(random(0,9));
        jogador = 1;
        cruzar()
      }else if(matriz[0][2]=='.'){
        matriz[0][2]=round(random(0,9));
        jogador = 1;
        cruzar()
      }else if(matriz[2][1]=='.'){
        matriz[2][1]=round(random(0,9));
        jogador = 1;
        cruzar()
      }else if(matriz[1][0]=='.'){
        matriz[1][0]=round(random(0,9));
        jogador = 1;
        cruzar()
      }else if(matriz[0][1]=='.'){
        matriz[0][1]=round(random(0,9));
        jogador = 1;
        cruzar()
      }

    }else{
      alert("Empatou!")
      linha = 9
    }
  }else{
    jogador = 1
    if(matriz[0][0]=='.'|| matriz[0][1]=='.'|| matriz[0][2]=='.'|| matriz[1][0]=='.'|| matriz[1][1]=='.'|| matriz[1][2]=='.'|| matriz[2][0]=='.'|| matriz[2][1]=='.'|| matriz[2][2]=='.'){
      alert("É sua vez")
    }
    
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
    fill("#08475d");
    stroke(20)
    text("Começar",450,120);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
      stroke(500);
      fill("#08475d");
      rect(xMenu, yMenu1,largura,altura,100);
      fill("white");
      stroke(20)
      text("Começar",450,120);
      if(mouseIsPressed){
        resultado = round(random(0,27));
        tela=2;
      }
    }
    stroke(200);
    fill("#318aa9");
    rect(xMenu, yMenu2,largura,altura,100);
    fill("#08475d");
    stroke(20)
    text("Instruções",450,180);
    
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
      stroke(500);
      fill("#08475d");
      rect(xMenu, yMenu2,largura,altura,100);
      fill("white");
      stroke(20)
      text("Instruções",450,180);
      if(mouseIsPressed){
        tela=3;
      }
    }
    stroke(200);
    fill("#318aa9");
    rect(xMenu, yMenu3,largura,altura,100);
    fill("#08475d");
    stroke(20)
    text("Créditos",450,240);
    
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
      stroke(500);
      fill("#08475d");
      rect(xMenu, yMenu3,largura,altura,100);
      fill("white");
      stroke(20)
      text("Créditos",450,240);
      if(mouseIsPressed){
        tela=4;
      }
    }
    
    
  }else if(tela==3){
    canvas_jogo = createCanvas(600,450);
    canvas_jogo.position(180,90);
    fill("#318aa9");
    rect(1,1,550,430,10);
    textSize(18);
    fill("white")
    stroke(100)
    text('Olá, tripulante! Vamos iniciar o jogo? Para começar é preciso clicar com seu mouse no botão começar e selecionar o tipo de operação matemática que a sua prof pediu. Depois de selecionar o tipo do jogo, você, tripulante, vai selecionar o número desejado e clicar em "finalizar". Agora é vez do pirata robô jogar, ele vai sortear um número para tentar atrapalhar o seu jogo, mas você não vai desistir, né? Quando o pirata finalizar a jogada, será sua vez novamente, o jogo só termina quando o pirata ou o tripulante completa o cruzarado na diagonal, horizontal ou vertical. Cuidado com o empate, caso contrário, você terá que dividir o tesouro. :)',25,40,500,430);
    fill("#318aa9");
    rect(200,350,150,50,10);
    textSize(40);
    fill("#08475d");
    text("Voltar",275,390);
    if(mouseX > 200 && mouseX < 200 + 150 && mouseY > 330 && mouseY < 330 + 100){
      stroke(200);
      fill("#08475d");
      rect(200,350,150,50,10);
      textSize(40);
      fill("white");
      text("Voltar",275,390);
      if (mouseIsPressed){
        ccanvas = createCanvas(900,700);
        canvas.position(10,10);
        tela =1
      }
    }
   
  }else if(tela==4){
    canvas_jogo = createCanvas(450,440);
    canvas_jogo.position(250,80);
    fill("#318aa9");
    rect(1,1,400,430,10);
    textSize(18);
    fill("white")
    text("O jogo é um projeto da disciplina de Lógica de Programação ofertada pela UFRN, foi desenvolvido por mim, Arnaldo B. Junior,graduando em Ciências e tecnologia, com escopo criado por Dominique Souza, graduada em pedagogia pela Universidade Federal do Rio Grande do Norte.",2,20,400,400)         
    image(domi,80,200,120,120)
    image(arnaldo,220,200,120,120);
    fill("#318aa9");
    rect(125,350,150,50,10);
    textSize(40);
    fill("#08475d");
    text("Voltar",200,390);
    if(mouseX > 2 && mouseX < 2 + 320 && mouseY > 330 && mouseY < 330 + 100){
      stroke(200);
      fill("#08475d");
      rect(125,350,150,50,10);
      textSize(40);
      fill("white");
      text("Voltar",200,390);
      if (mouseIsPressed){
        ccanvas = createCanvas(900,700);
        canvas.position(10,10);
        tela =1
      }
    }
   
  }else if(tela==2){

    canvas_jogo = createCanvas(325,430);
    canvas_jogo.position(300,120);

    w = width/3;
    h = height/4;

    papagaio=createImg("img/papagaio.png",'papagaio');
    papagaio.position(50,230)  
    papagaio.size(200,200)
    

    stroke(200);
    fill("#318aa9");
    rect(0,0,100,100,10);
   
    stroke(200);
    fill("#318aa9");
    rect(110,0,100,100,10);

    stroke(200);
    fill("#318aa9");
    rect(220,0,100,100,10);
   
    stroke(200);
    fill("#318aa9");
    rect(0,110,100,100,10);
   
    stroke(200);
    fill("#318aa9");
    rect(110,110,100,100,10);
  
    stroke(200);
    fill("#318aa9");
    rect(220,110,100,100,10);
    
    stroke(200);
    fill("#318aa9");
    rect(0,220,100,100,10);
   
    stroke(200);
    fill("#318aa9");
    rect(110,220,100,100,10);
    
    stroke(200);
    fill("#318aa9");
    rect(220,220,100,100,10);

    stroke(200);
    fill("#318aa9");
    rect(2,330,320,100,10);
    textSize(60);
    fill("#08475d");
    text(resultado,160,400);
    if(mouseX > 2 && mouseX < 2 + 320 && mouseY > 330 && mouseY < 330 + 100){
      stroke(200);
      fill("#08475d");
      rect(2,330,320,100,10);
      textSize(60);
      fill("white");
      text("Finalizar",160,400);
      if (mouseIsPressed){
        jogador = 0
        cruzar()
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
          fill("#08475d");
          text(0, x, y+15);
        }else if(spot == 1){
          noFill();
          textSize(50);
          fill("#08475d");
          text(1, x, y+15);
        }else if(spot == 2){
          noFill();
          textSize(50);
          fill("#08475d");
          text(2, x, y+15);
        }else if(spot == 3){
          noFill();
          textSize(50);
          fill("#08475d");
          text(3, x, y+15);
        }else if(spot == 4){
          noFill();
          textSize(50);
          fill("#08475d");
          text(4, x, y+15);
        }else if(spot == 5){
          noFill();
          textSize(50);
          fill("#08475d");
          text(5, x, y+15);
        }else if(spot == 6){
          noFill();
          textSize(50);
          fill("#08475d");
          text(6, x, y+15);
        }else if(spot == 5){
          noFill();
          textSize(50);
          fill("#08475d");
          text(5, x, y+15);
        }else if(spot == 7){
          noFill();
          textSize(50);
          fill("#08475d");
          text(7, x, y+15);
        }else if(spot == 8){
          noFill();
          textSize(50);
          fill("#08475d");
          text(8, x, y+15);
        }else if(spot == 9){
          noFill();
          textSize(50);
          fill("#08475d");
          text(9, x, y+15);
        }else if(spot == 10){
          noFill();
          textSize(50);
          fill("#08475d");
          text(0, x, y+15);
        }
      }
    }
    
    if(linha==1){
      alert("teste")
      strokeWeight(12.0);
      line(10,10,10,310);
      winner()
      
    }else if(linha==2){
      strokeWeight(12.0)
      fill("white")
      line(10,160,310,160)
    }else if(linha==3){
      strokeWeight(12.0)
      fill("white")
      line(10,270,310,270)
    }else if(linha==4){
      strokeWeight(12.0)
      fill("white")
      line(50,10,50,310)
    }else if(linha==5){
      strokeWeight(12.0)
      fill("white")
      line(160,10,160,310)
    }else if(linha==6){
      strokeWeight(12.0)
      fill("white")
      line(270,10,270,310)
    }else if(linha==7){
      strokeWeight(12.0)
      fill("white")
      line(10,10,315,310)
    }else if(linha==8){
      strokeWeight(12.0)
      fill("white")
      line(20,300,300,20)
    }else if(linha==9){
      stroke(200);
      fill("#318aa9");
      rect(2,330,320,100,10);
      textSize(50);
      fill("#08475d");
      text("Recomeçar",160,400);
      if(mouseX > 2 && mouseX < 2 + 320 && mouseY > 330 && mouseY < 330 + 100){
      stroke(200);
      fill("#08475d");
      rect(2,330,320,100,10);
      textSize(50);
      fill("white");
      text("Recomeçar",160,400);
      if (mouseIsPressed){
        jogador = 0
        
      }
    }
    }

  }
}


