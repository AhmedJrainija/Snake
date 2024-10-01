document.body.addEventListener('keydown', (event) => {
  if ((event.key === 'ArrowRight') && r === 0) {
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
  } else if ((event.key === 'ArrowDown') && (d === 0)) {
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
    } else if ((event.key === 'ArrowLeft') && (l === 0)) {
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
    } else if ((event.key === 'ArrowUp') && (u === 0)) {
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