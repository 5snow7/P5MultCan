let can,can2;let t,th;
let x1;let x=0;let a=0;
let canvas,ctx;

function setup() {

can=createCanvas(400,300);
can.position(700,100);
can.class("bdd");
t=new logo(200,200,0);
//noLoop();
 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");ctx.lineWidth=.1;
can2=select('#myCanvas');can2.position(50,100);
can2.class("bdd");th=new Hlogo(ctx,300,100,45);
textSize(18);

}

function draw() {
//clear();
background(250,200,0);

t.set1(200,150,0);
for(let j=3;j<12;j++){t.poly(30,j);}

for(let j=3;j<15;j++){
th.poly(50,j);
}

ctx.moveTo(200,0);
ctx.lineTo(x,50);x=x+14;
if(x>200){x=0;}
ctx.stroke();
for(let j=0;j<10;j++){
ctx.moveTo(0,15*j);ctx.lineTo(200,15*j);ctx.stroke();
}

}


