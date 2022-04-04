const form = document.getElementById('form')
form.addEventListener('submit', handlesubmit)

let status = document.getElementById('status')
let attempt = document.getElementById('attempt')
let result = document.getElementById('result')

const guess = {
    max: 10,
    attemptsnumber: 0,
    numberdrawm: function ramdomvalue(){
        return Math.round(Math.random() * this.max);
    }
}

let numberdrawm = guess.numberdrawm();

function updateattempt(attempt, value){
    attempt.innerHTML = 'tentativa: ' + value
}

function handlesubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite algum valor!')
        return;
    }
    
    updateattempt(attempt, ++guess.attemptsnumber);

    if(numberdrawm == kick) {
        playagain();
        status.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff'
        status.style.color = '#fff'
        clear();
    } else if(numberdrawm > kick) {
        status.innerHTML = 'O número é maior!'
        status.style.color = '#de4251'
        clear();
    } else if(numberdrawm < kick) {
        status.innerHTML = 'O número é menor!'
        status.style.color = '#de4251'
        clear();

    }
}


function playagain(){
    document.getElementById('btnrestart').style.display = 'flex';
};

function restart(){
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = ''
}
