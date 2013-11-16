// get time til next 5 min: photos always taken on the 5min mark
function timeTilNextPhoto() {
    var d = new Date();
    var seconds = d.getMinutes() * 60 + d.getSeconds();
    var fiveMin = 60 * 5;
    var timeLeft = fiveMin - seconds % fiveMin;
    return parseInt(timeLeft / 60, 10) + ':' + ('0' + timeLeft % 60).slice(-2);
}

$(document).ready(function() {
    $('.lazy').lazyload();

    setInterval(function() {
        $('.time').text(timeTilNextPhoto());
        if(timeTilNextPhoto() === '4:55') {
            location.reload();
        }
    }, 500);

});

