let x = 191; //position of the head
let a = [190]; //where we store the position of the head
let j = 1; //the index of the array a.
let body = 1;//the length of the body.
let s = 0; //the score.
let hs = 0; //this is where we save the highest score.
let speed = 200; //the speed of the snake.

let r = 0; //indicator of how many times we pressed right.
let d = 0; //indicator of how many times we pressed down.
let l = 1; //indicator of how many times we pressed left.
let u = 0; //indicator of how many times we pressed up.

let g_o_s = 0; //to make the game over sound play only one time.
let food_s = 0; //to make the food sound off when we click sound : off.
let move_s = 0; //to make the move sound off when we click sound : off.

let right; //the variable where we put the setinterval for right.
let down; //the variable where we put the setinterval for down.
let up; //the variable where we put the setinterval for up.
let left; //the variable where we put the setinterval for left.

let arrow_r = 0; //indicator to which arrow we pressed last.
let arrow_u = 1; //indicator to which arrow we pressed last.
let arrow_d = 1; //indicator to which arrow we pressed last.
let arrow_l = 1; //indicator to which arrow we pressed last.

const score = document.querySelector('.score');
const hscore = document.querySelector('.hscore');
const go = document.querySelector('.go1');
const bt_restart = document.querySelector('.bt-restart');
const bt_sound = document.querySelector('.bt-sound');
const bt_up = document.querySelector('.up');
const bt_left = document.querySelector('.left');
const bt_right = document.querySelector('.right');
const bt_down = document.querySelector('.down');

const m_food = document.querySelector('.m_food');
const m_move = document.querySelector('.m_move');
const m_go = document.querySelector('.m_go');

hs = JSON.parse(localStorage.getItem('highest score snake'));
highest_score();
food(); //this to generate food when we reload.

//this generates food.
function food () {
  let k = 0;
  while (k < 1 ) {
  let v = Math.random();
  let f = Math.round(v*400);
  let z = document.querySelector(`.b${f}`);
  let c = z.classList.contains(`s${f}`);
    if (f !== 0) {
      if (c === false) {
        z.classList.add('f');
        k++;
      }
   }
  }
}
//this sets decides the highest score.
function highest_score () {
  if (hs <= s) {
    hs = s;
  }
  hscore.innerHTML = `HIGHEST SCORE : ${hs}`;
  localStorage.setItem('highest score snake', JSON.stringify(hs));
}
//this update the speed of the snake.
function speed_snake () {
  if ((s%5 === 0) && (s!==0) && (s <= 100)) {
    speed = speed - 5;
  }
}
//this to move the snake right.
function moveR () {
  if ((x!==20) && (x!=40) && (x!==60) && (x!==80) && (x!==100) && (x!==120) && (x!==140) && (x!==160) && (x!==180) && (x!==200) && (x!==220) && (x!==240) && (x!==260) && (x!==280) && (x!==300) && (x!==320) && (x!==340) && (x!==360) && (x!==380) && (x!==400)) {
    let rb = document.querySelector(`.b${x+1}`).classList.contains(`s${x+1}`);
    if (rb === false) {
      for (let i = x ; i < x+1; i++ ) {
        if (document.querySelector(`.b${i+1}`).classList.contains('f')) {
        document.querySelector(`.b${i+1}`).classList.remove('f');
        a.push(x);
        document.querySelector(`.b${i+1}`).classList.add(`s${i+1}`);
        food_sound();
        body++;
        food();
        s++;
        score.innerHTML = `SCORE : ${s}`;
        speed_snake ();
        } else {
        a.push(x);
        document.querySelector(`.b${i+1}`).classList.add(`s${i+1}`);
        document.querySelector(`.s${a[j-body]}`).classList.remove(`s${a[j-body]}`);
        }
        j++;
      }
    } else if (rb === true) {
      u = 1;
      r =1;
      l =1;
      d =1;
      go.classList.remove('go1');
      go.classList.add('go2');
      highest_score ();
      go_sound();
      clearInterval(right);
      clearInterval(left);
      clearInterval(up);
      clearInterval(down);
      bt_restart.innerHTML = 'RESTART';
      clear();
    }
    x = x + 1;
    } else {
      u = 1;
      r =1;
      l =1;
      d =1;
      go.classList.remove('go1');
      go.classList.add('go2');
      highest_score ();
      go_sound();
      clearInterval(right);
      clearInterval(left);
      clearInterval(up);
      clearInterval(down);
      bt_restart.innerHTML = 'RESTART';
      clear();
    }
}
//this to move the snake down.
function moveD () {
  if (((x!==381) && (x!==382) && (x!==383) && (x!==384) && (x!==385) && (x!==386) && (x!==387) && (x!==388) && (x!==389) && (x!==390) && (x!==391) && (x!==392) && (x!==393) && (x!==394) && (x!==395) && (x!==396) && (x!==397) && (x!==398) && (x!==399) && (x!==400))) {
    let db = document.querySelector(`.b${x+20}`).classList.contains(`s${x+20}`);
    if (db === false) {
      for (let i = x ; i< x+20; i = i+20) {
        if (document.querySelector(`.b${i+20}`).classList.contains('f')) {
        document.querySelector(`.b${i+20}`).classList.remove('f');
        a.push(x);
        document.querySelector(`.b${i+20}`).classList.add(`s${i+20}`);
        food_sound();
        body++;
        food();
        s++;
        score.innerHTML = `SCORE: ${s}`;
        speed_snake ();
        } else {
        a.push(x);
        document.querySelector(`.b${i+20}`).classList.add(`s${i+20}`);
        document.querySelector(`.s${a[j-body]}`).classList.remove(`s${a[j-body]}`);
       }
       j++;
      }
    } else if (db === true) {
      u = 1;
      r =1;
      l =1;
      d =1;
      go.classList.remove('go1');
      go.classList.add('go2');
      highest_score ();
      go_sound();
      clearInterval(right);
      clearInterval(left);
      clearInterval(up);
      clearInterval(down);
      bt_restart.innerHTML = 'RESTART';
      clear();
    }
    x = x + 20;
} else {
    u = 1;
    r =1;
    l =1;
    d =1;
    go.classList.remove('go1');
    go.classList.add('go2');
    highest_score ();
    go_sound();
    clearInterval(right);
    clearInterval(left);
    clearInterval(up);
    clearInterval(down);
    bt_restart.innerHTML = 'RESTART';
    clear();
 }
}
//this to move the snake left.
function moveL () {
  if (((x!==1) && (x!==21) && (x!==41) && (x!==61) && (x!==81) && (x!==101) && (x!==121) && (x!==141) && (x!==161) && (x!==181) && (x!==201) && (x!==221) && (x!==241) && (x!==261) && (x!==281) && (x!==301) && (x!==321) && (x!==341) && (x!==361) && (x!==381))) 
 {
    let lb = document.querySelector(`.b${x-1}`).classList.contains(`s${x-1}`);
    if (lb === false) {
      for (let i = x ; i > x-1; i = i-1) {
        if (document.querySelector(`.b${i-1}`).classList.contains('f')) {
        document.querySelector(`.b${i-1}`).classList.remove('f');
        a.push(x);
        document.querySelector(`.b${i-1}`).classList.add(`s${i-1}`);
        food_sound();
        body++;
        food();
        s++;
        score.innerHTML = `SCORE : ${s}`;
        speed_snake ();
        } else {
        a.push(x);
        document.querySelector(`.b${i-1}`).classList.add(`s${i-1}`);
        document.querySelector(`.s${a[j-body]}`).classList.remove(`s${a[j-body]}`);
        }
        j++;
      }
    } else if (lb === true) {
      u = 1;
      r =1;
      l =1;
      d =1;
      go.classList.remove('go1');
      go.classList.add('go2');
      highest_score ();
      go_sound();
      clearInterval(right);
      clearInterval(left);
      clearInterval(up);
      clearInterval(down);
      bt_restart.innerHTML = 'RESTART';
      clear();
    }
    x = x - 1;
  } else {
    u = 1;
    r =1;
    l =1;
    d =1;
    go.classList.remove('go1');
    go.classList.add('go2');
    highest_score ();
    go_sound();
    clearInterval(right);
    clearInterval(left);
    clearInterval(up);
    clearInterval(down);
    bt_restart.innerHTML = 'RESTART';
    clear();
  }
}
//this to move the snake up.
function moveU () {
  if (((x!==1) && (x!==2) && (x!==3) && (x!==4) && (x!==5) && (x!==6) && (x!==7) && (x!==8) && (x!==9) && (x!==10) && (x!==11) && (x!==12) && (x!==13) && (x!==14) && (x!==15) && (x!==16) && (x!==17) && (x!==18) && (x!==19) && (x!==20))) {
    let ub = document.querySelector(`.b${x-20}`).classList.contains(`s${x-20}`);
    if (ub === false) {
      for (let i = x ; i > x-20; i = i-20) {
        if (document.querySelector(`.b${i-20}`).classList.contains('f')) {
        document.querySelector(`.b${i-20}`).classList.remove('f');
        a.push(x);
        document.querySelector(`.b${i-20}`).classList.add(`s${i-20}`);
        food_sound();
        body++;
        food();
        s++;
        score.innerHTML = `SCORE : ${s}`;
        speed_snake ();
        } else {
        a.push(x);
        document.querySelector(`.b${i-20}`).classList.add(`s${i-20}`);
        document.querySelector(`.s${a[j-body]}`).classList.remove(`s${a[j-body]}`);
        }
        j++;
      }
    } else if (ub === true) {
      u = 1;
      r =1;
      l =1;
      d =1;
      go.classList.remove('go1');
      go.classList.add('go2');
      highest_score ();
      go_sound();
      clearInterval(right);
      clearInterval(left);
      clearInterval(up);
      clearInterval(down);
      bt_restart.innerHTML = 'RESTART';
      clear();
    }
    x = x - 20;
    } else {
      u = 1;
      r =1;
      l =1;
      d =1;
      go.classList.remove('go1');
      go.classList.add('go2');
      highest_score ();
      go_sound();
      clearInterval(right);
      clearInterval(left);
      clearInterval(up);
      clearInterval(down);
      bt_restart.innerHTML = 'RESTART';
      clear();
    }
}
//this for the game over sound.
function go_sound () {
  if (g_o_s === 0) {
    m_go.play();
  }
}
//this for the sound when the snake changes directions.
function move_sound () {
  if (move_s === 0) {
    m_move.play();
  }
}
//this for the sound when the snake eats the food.
function food_sound () {
  if (food_s === 0) {
    m_food.play();
  }
}
//this clears the grid from the snake and the food.
function clear () {
  for (let i = 1; i<=400; i++) {
    if (document.querySelector(`.b${i}`).classList.contains(`s${i}`)) {
      document.querySelector(`.b${i}`).classList.remove(`s${i}`);
    } else if (document.querySelector(`.b${i}`).classList.contains('f')) {
      document.querySelector(`.b${i}`).classList.remove('f');
    }
  }
}