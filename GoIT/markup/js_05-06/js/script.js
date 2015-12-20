var body = document.querySelector('body');
var ms = 0;
var sec = 0;
var min = 0;
var h = 0;

var TimerHTML = {
    createWrapper () {
        var wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        wrapper.style.margin = '0 auto';
        wrapper.style.width = '200px';
        document.body.appendChild(wrapper);
    },

    createBoard () {
        wrapper = body.querySelector('.wrapper');
        var board = document.createElement('div');
        board.style.marginBottom = '10px';
        board.innerHTML = '00 : 00 : 00 : 000';
        board.id = 'board';
        board.classList.add('center-block', 'bg-info', 'text-center');
        wrapper.appendChild(board);
    },

     createStartBtn () {
        wrapper = body.querySelector('.wrapper');
        var StartBtn = document.createElement('a');
        StartBtn.innerHTML = 'Start';
        StartBtn.id = 'StartBtn';
        StartBtn.classList.add('col-md-5', 'btn', 'btn-success');
        wrapper.appendChild(StartBtn);
        StartBtn.addEventListener("click", timerStart);

    },

     createClearBtn () {
        wrapper = body.querySelector('.wrapper');
        var ClearBtn = document.createElement('a');
        ClearBtn.innerHTML = 'Clear';
        ClearBtn.id = 'ClearBtn';
        ClearBtn.classList.add('col-md-5', 'btn', 'btn-danger', 'pull-right');
        wrapper.appendChild(ClearBtn);
        ClearBtn.addEventListener("click", timerClear);
    },
};

TimerHTML.createWrapper();
TimerHTML.createBoard();
TimerHTML.createStartBtn();
TimerHTML.createClearBtn();

function addZeros(n, needLength) {
  needLength = needLength || 2;
  n = String(n);
  while (n.length < needLength) {
    n = "0" + n;
  }
  return n;
}

function timerStart() {
    this.classList.remove('btn-success');
    this.classList.add('btn-primary');
    this.innerHTML = 'Pause';
    StartBtn.removeEventListener("click", timerStart);
    StartBtn.addEventListener("click", timerPause);
    var board = document.getElementById('board');

    timerId = setInterval(function() {
        board.innerHTML = addZeros(h) + ' : ' + addZeros(min) + ' : ' + addZeros(sec) + ' : ' + addZeros(ms, 3);

        ms++;

        if (ms === 1000) {
            sec++;
            ms = 0;
        }

        if (sec === 60) {
            min++;
            sec = 0;
        }

        if (min === 60) {
            h++;
            min = 0;
        }

    }, 1);
}

function timerPause() {
    var StartBtn = document.getElementById('StartBtn');
    StartBtn.classList.remove('btn-primary');
    StartBtn.classList.add('btn-success');
    StartBtn.innerHTML = 'Continue';

    StartBtn.removeEventListener("click", timerPause);
    StartBtn.addEventListener("click", timerStart);

    clearInterval(timerId);
}

function timerClear() {
    var StartBtn = document.getElementById('StartBtn');
    StartBtn.classList.remove('btn-primary');
    StartBtn.classList.add('btn-success');
    StartBtn.innerHTML = 'Start';

    var board = document.getElementById('board');
    board.innerHTML = '00 : 00 : 00 : 000';
    ms = 0;
    sec = 0;
    min = 0;
    h = 0;

    StartBtn.removeEventListener("click", timerPause);
    StartBtn.addEventListener("click", timerStart);

    clearInterval(timerId);
}
