function checkAnswers() {
    var answers = ["Dokdo", "Zalophus Japonicus", "1905", "Liancourt Rocks", "Methane Hydrate"];
    var correctCount = 0;

    for (var i = 0; i < answers.length; i++) {
        if (document.getElementById("print" + (i + 1)).value === answers[i]) {
            correctCount++;
        } else {
            alert("Starting with the " + (i + 1) + "th question, there is an incorrect answer.");
            return;
        }
    }

    if (correctCount === 5) {
        alert("Wow! Perfect! You've studied a lot about Dokdo.");
        window.open('../wow/index.html');
    }
}