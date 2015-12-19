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
        StartBtn.classList.add('btn', 'btn-success');
        wrapper.appendChild(StartBtn);
    },

     createClearBtn () {
        wrapper = body.querySelector('.wrapper');
        var ClearBtn = document.createElement('a');
        ClearBtn.innerHTML = 'Clear';
        ClearBtn.id = 'ClearBtn';
        ClearBtn.classList.add('btn', 'btn-danger', 'pull-right');
        wrapper.appendChild(ClearBtn);
    },
};

TimerHTML.createWrapper();
TimerHTML.createBoard();
TimerHTML.createStartBtn();
TimerHTML.createClearBtn();

function Start() {
    var StartBtn = document.getElementById('StartBtn');
    StartBtn.addEventListener("click", timerStart);
}

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

    var board = document.getElementById('board');

    timerId = setInterval(function() {
        board.innerHTML = addZeros(h) + ' : ' + addZeros(min) + ' : ' + addZeros(sec) + ' : ' + addZeros(ms, 3);

        ms++;

        if (ms === 10) {
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

    }, 1000);
}

Start();

function Clear() {
    var ClearBtn = document.getElementById('ClearBtn');
    ClearBtn.addEventListener("click", timerClear);
}

function timerClear() {
    var StartBtn = document.getElementById('StartBtn');
    StartBtn.classList.remove('btn-primary');
    StartBtn.classList.add('btn-success');
    StartBtn.innerHTML = 'Start';

    clearInterval(timerId);
}

Clear();
