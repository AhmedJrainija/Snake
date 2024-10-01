//this is for the start pause restart button.
bt_restart.addEventListener('click', ()=>{
  if (bt_restart.innerHTML === 'PAUSE') {
    clearInterval(right);
    clearInterval(left);
    clearInterval(up);
    clearInterval(down);
    bt_restart.innerHTML = 'START';
    if (arrow_r === 0) {
      r = 0;
      l = 1;
      d = 0;
      u = 0;
    } else if (arrow_l === 0) {
      r = 1;
      l = 0;
      d = 0;
      u = 0;
    } else if (arrow_d === 0) {
      r = 0;
      l = 0;
      d = 0;
      u = 1;
    } else if (arrow_u === 0) {
      r = 0;
      l = 0;
      d = 1;
      u = 0;
    }
  } else if (bt_restart.innerHTML === 'START') {
    bt_restart.innerHTML = 'PAUSE';
    if (arrow_r === 0) {
      r = 0;
      l = 1;
      d = 0;
      u = 0;
      move_sound();
      arrow_r = 0;
      arrow_u = 1;
      arrow_d = 1;
      arrow_l = 1;
      right = setInterval(() => {
        moveR();
      }, speed)
      clearInterval(left);
      clearInterval(down);
      clearInterval(up);
      r++;
      l++;
      d = 0;
      u = 0;
    } else if (arrow_l === 0) {
      r = 1;
      l = 0;
      d = 0;
      u = 0;
      move_sound();
      arrow_r = 1;
      arrow_u = 1;
      arrow_d = 1;
      arrow_l = 0;
      left = setInterval(() => {
        moveL();
      }, speed)
      clearInterval(right);
      clearInterval(down);
      clearInterval(up);
      l++;
      r++;
      d = 0;
      u = 0;
    } else if (arrow_d === 0) {
      r = 0;
      l = 0;
      d = 0;
      u = 1;
      move_sound();
      arrow_r = 1;
      arrow_u = 1;
      arrow_d = 0;
      arrow_l = 1;
      down = setInterval(() => {
        moveD();
      }, speed)
      clearInterval(left);
      clearInterval(right);
      clearInterval(up);
      d++;
      r = 0;
      l = 0;
      u++;
    } else if (arrow_u === 0) {
      r = 0;
      l = 0;
      d = 1;
      u = 0;
      move_sound();
      arrow_r = 1;
      arrow_u = 0;
      arrow_d = 1;
      arrow_l = 1;
      up = setInterval(() => {
        moveU();
      }, speed)
      clearInterval(right);
      clearInterval(down);
      clearInterval(left);
      u++;
      r = 0;
      l = 0;
      d++;
    }
  } else if (bt_restart.innerHTML === 'RESTART') {
      //window.location.reload();
    clear();
    go.classList.remove('go2');
    go.classList.add('go1');
  
    x = 191;
    a = [190];
    j = 1;
    body = 1;
    s = 0;
    speed = 200;
  
    r = 0;
    d = 0;
    l = 1;
    u = 0;

    arrow_d = 1;
    arrow_l = 1;
    arrow_r = 0;
    arrow_u = 1;
  
    hs = JSON.parse(localStorage.getItem('highest score'));
    highest_score();
    food();
  
    score.innerHTML = 'SCORE : 0';
  
    document.querySelector('.b191').classList.add('s191');
    document.querySelector('.b190').classList.add('s190');

    bt_restart.innerHTML = 'START';
  }
})
//this to turn the sound on and off.
bt_sound.addEventListener('click', ()=>{
  if (bt_sound.innerText === 'SOUND : ON') {
    g_o_s++;
    move_s++;
    food_s++;
    bt_sound.innerText = 'SOUND : OFF';
  } else if (bt_sound.innerText === 'SOUND : OFF') {
    g_o_s = 0;
    move_s = 0;
    food_s = 0;
    bt_sound.innerText = 'SOUND : ON';
  }
})
//this to turn the sound on and off with m.
document.body.addEventListener('keydown', (event)=> {
  if (event.key === 'm') {
    if (bt_sound.innerText === 'SOUND : ON') {
      g_o_s++;
      move_s++;
      food_s++;
      bt_sound.innerText = 'SOUND : OFF';
    } else if (bt_sound.innerText === 'SOUND : OFF') {
      g_o_s = 0;
      move_s = 0;
      food_s = 0;
      bt_sound.innerText = 'SOUND : ON';
    }
  }
})
//this to pause start restart using spacebar.
document.body.addEventListener('keydown', (event)=>{
  if (event.key === ' ') {
    event.preventDefault();
    if (bt_restart.innerHTML === 'PAUSE') {
      clearInterval(right);
      clearInterval(left);
      clearInterval(up);
      clearInterval(down);
      bt_restart.innerHTML = 'START';
      if (arrow_r === 0) {
        r = 0;
        l = 1;
        d = 0;
        u = 0;
      } else if (arrow_l === 0) {
        r = 1;
        l = 0;
        d = 0;
        u = 0;
      } else if (arrow_d === 0) {
        r = 0;
        l = 0;
        d = 0;
        u = 1;
      } else if (arrow_u === 0) {
        r = 0;
        l = 0;
        d = 1;
        u = 0;
      }
    } else if (bt_restart.innerHTML === 'START') {
      bt_restart.innerHTML = 'PAUSE';
      if (arrow_r === 0) {
        r = 0;
        l = 1;
        d = 0;
        u = 0;
        move_sound();
        arrow_r = 0;
        arrow_u = 1;
        arrow_d = 1;
        arrow_l = 1;
        right = setInterval(() => {
          moveR();
        }, speed)
        clearInterval(left);
        clearInterval(down);
        clearInterval(up);
        r++;
        l++;
        d = 0;
        u = 0;
      } else if (arrow_l === 0) {
        r = 1;
        l = 0;
        d = 0;
        u = 0;
        move_sound();
        arrow_r = 1;
        arrow_u = 1;
        arrow_d = 1;
        arrow_l = 0;
        left = setInterval(() => {
          moveL();
        }, speed)
        clearInterval(right);
        clearInterval(down);
        clearInterval(up);
        l++;
        r++;
        d = 0;
        u = 0;
      } else if (arrow_d === 0) {
        r = 0;
        l = 0;
        d = 0;
        u = 1;
        move_sound();
        arrow_r = 1;
        arrow_u = 1;
        arrow_d = 0;
        arrow_l = 1;
        down = setInterval(() => {
          moveD();
        }, speed)
        clearInterval(left);
        clearInterval(right);
        clearInterval(up);
        d++;
        r = 0;
        l = 0;
        u++;
      } else if (arrow_u === 0) {
        r = 0;
        l = 0;
        d = 1;
        u = 0;
        move_sound();
        arrow_r = 1;
        arrow_u = 0;
        arrow_d = 1;
        arrow_l = 1;
        up = setInterval(() => {
          moveU();
        }, speed)
        clearInterval(right);
        clearInterval(down);
        clearInterval(left);
        u++;
        r = 0;
        l = 0;
        d++;
      }
    } else if (bt_restart.innerHTML === 'RESTART') {
        //window.location.reload();
      clear();
      go.classList.remove('go2');
      go.classList.add('go1');
    
      x = 191;
      a = [190];
      j = 1;
      body = 1;
      s = 0;
      speed = 200;
    
      r = 0;
      d = 0;
      l = 1;
      u = 0;
  
      arrow_d = 1;
      arrow_l = 1;
      arrow_r = 0;
      arrow_u = 1;
      
      hs = JSON.parse(localStorage.getItem('highest score'));
      highest_score();
      food();
    
      score.innerHTML = 'SCORE : 0';
    
      document.querySelector('.b191').classList.add('s191');
      document.querySelector('.b190').classList.add('s190');
  
      bt_restart.innerHTML = 'START';
    }
  }
})

bt_down.addEventListener('click', ()=>{
  if (d === 0) {
    move_sound();
    arrow_r = 1;
    arrow_u = 1;
    arrow_d = 0;
    arrow_l = 1;
    down = setInterval(() => {
      moveD();
    }, speed)
      clearInterval(left);
      clearInterval(right);
      clearInterval(up);
      d++;
      r = 0;
      l = 0;
      u++;
      bt_restart.innerHTML = 'PAUSE';
  }
})

bt_left.addEventListener('click', ()=>{
  if (l === 0) {
    move_sound();
    arrow_r = 1;
    arrow_u = 1;
    arrow_d = 1;
    arrow_l = 0;
    left = setInterval(() => {
      moveL();
    }, speed)
    clearInterval(right);
    clearInterval(down);
    clearInterval(up);
    l++;
    r++;
    d = 0;
    u = 0;
    bt_restart.innerHTML = 'PAUSE';
  }
})

bt_up.addEventListener('click', ()=>{
  if (u === 0) {
    move_sound();
    arrow_r = 1;
    arrow_u = 0;
    arrow_d = 1;
    arrow_l = 1;
    up = setInterval(() => {
      moveU();
    }, speed)
    clearInterval(right);
    clearInterval(down);
    clearInterval(left);
    u++;
    d++;
    r = 0;
    l = 0;
    bt_restart.innerHTML = 'PAUSE';
  }
})

bt_right.addEventListener('click', ()=>{
  if (r === 0) {
    move_sound();
    arrow_r = 0;
    arrow_u = 1;
    arrow_d = 1;
    arrow_l = 1;
    right = setInterval(() => {
      moveR();
    }, speed)
      clearInterval(left);
      clearInterval(down);
      clearInterval(up);
      r++;
      l++;
      d = 0;
      u = 0;
      bt_restart.innerHTML = 'PAUSE';
  }
})