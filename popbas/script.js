window.onload = function(){
    var img = document.getElementById("popcat1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("pop.mp3");

    //mouse
    img.addEventListener('mousedown', function(){
        increaseScore();
        img.src = 'popcat2.png';
        audio.play();
    });

    img.addEventListener('mouseup', function(){
        img.src = 'popcat1.png';
        audio.play();
    });

    //touch screen
    img.addEventListener('touchstart', function(){
        increaseScore();
        img.src = 'popcat2.png';
        audio.play();
    });

    img.addEventListener('touchmove', function(){
        img.src = 'popcat1.png';
        audio.play();
    });

document.body.onkeydown = function(e){
    if(e.keyCode ==32){
        increaseScore();
        img.src = 'popcat2.png';
        audio.play();
    }
}

document.body.onkeyup = function(e){
    if(e.keyCode ==32){
        img.src = 'popcat1.png';
        audio.play();
    }
}
    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}
