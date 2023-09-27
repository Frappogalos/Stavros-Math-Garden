var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random()* 5);
    document.getElementById('n1').innerHTML = n1;
    const n2 = Math.floor(Math.random()* 5);
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer() {
    const prediction = predictImage();
    console.log(`answer: ${answer}, prediction: ${prediction}`);

    if (prediction == answer) {
        score++;
        if (score < 7) {backgroundImages.push(`url('images/background${score}.svg')`);}
        else {
            window.alert('You won!!!');
            resetGame();
        }
        console.log(`Correct. Score ${score}`);
    } else {
        if (score > 0) {
            score--;
            backgroundImages.pop();
        }
        console.log(`Wrong. Score ${score}`);
    }
    document.body.style.backgroundImage = backgroundImages;
}

function resetGame() {
    score = 0;
    backgroundImages = [];
}