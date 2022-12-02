var height = 0;
var width = 0;
var life = 1;
var time = 60;
var speed = 0; 

var level = window.location.search;
level = level.replace('?', '');

if(level == 'easy')
{
    //1500
    speed = 1500;
}
else if(level == 'hard')
{
    //1000
    speed = 1000;
}
else if(level == 'chuckNorries')
{
    //750
    speed = 850;
}

function fixWindowSize()
{
    height = window.innerHeight;
    width = window.innerWidth;
}

fixWindowSize();

var gameStopwatch = setInterval(decrementStopwatch, 1000);

function decrementStopwatch()
{
    time-=1;
    if(time < 0)
    {
        clearInterval(gameStopwatch);
        clearInterval(createBug);
        window.location.href = 'game-won.html';
    }
    else
    {
        document.getElementById('myStopwatch').innerHTML = time;
    }
}

function randomPos()
{
    //remover o elemento mosquito (caso existir)

    if(document.getElementById('bugTime'))
    {
        document.getElementById('bugTime').remove();

        if(life > 3)
        {
            window.location.href = 'game-lose.html';
        }
        else
        {
            document.getElementById('l' + life).src = './img/coracao_vazio.png';
            life++;
        }
    }

    var posx = Math.floor(Math.random()*width)-90;
    var posy = Math.floor(Math.random()*height)-90;

    posx = posx < 0 ? 0:posx;
    posy = posy < 0 ? 0:posy;

    var bug = document.createElement('img');
    bug.src = 'img/mosca.png'
    document.body.appendChild(bug);

    bug.className = bugSize() + ' ' + randomSide();
    bug.style.left = posx + 'px';
    bug.style.top = posy + 'px';
    bug.style.position = 'absolute';
    bug.id = 'bugTime';

    bug.onclick = function()
    {
        this.remove();
    }
}

function bugSize()
{
    var bugClass = Math.floor(Math.random() * 3);

    switch(bugClass)
    {
        case 0: return 'bug01';
        case 1: return 'bug02';
        case 2: return 'bug03';
    }
}

function randomSide()
{
    var bugClass = Math.floor(Math.random() * 2);

    switch(bugClass)
    {
        case 0: return 'sideA';
        case 1: return 'sideB';
    }  
}

