//CODE BY: PIXELGEN aka Vitones_Pixel

let bgs = [];
let layer1 = [];
let layer2 = [];
let layer3 = [];
let rbackground;
let rl1;
let rl2;
let rl3;


function preload(){
    
    for (var i=0; i<7; i++){
      bgs[i] = loadImage('background/bg'+i+'.gif');
    }
    
    for (var i=0; i<6; i++){
      layer1[i] = loadImage('layer1/layer1_'+i+'.gif');
      layer2[i] = loadImage('layer2/layer2_'+i+'.gif');
      layer3[i] = loadImage('layer3/layer3_'+i+'.gif');
    }
  
    
}

function setup() {
  
    
  createCanvas(windowWidth, windowHeight);
  function rnd_btw(min, max) {return fxrand() * (max - min) + min;}   
  function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}   
  function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return         Math.floor(fxrand() * (max - min + 1)) + min;}
  rbackground = rnd_int(0,6);
  rl1 = rnd_int(0,5);
  rl2 = rnd_int(0,5);
  rl3 = rnd_int(0,5);
  
}

function draw() {
  
  background(bgs[rbackground], windowWidth, windowHeight);
  image(layer1[rl1], 0, 0, windowWidth, windowHeight);
  image(layer2[rl2], 0, 0, windowWidth, windowHeight);
  image(layer3[rl3], 0, 0, windowWidth, windowHeight);
}