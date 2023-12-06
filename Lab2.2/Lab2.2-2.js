const Questions = [{
    q: "What was the second item on the list?",
    a: [{ text: "Burger", isCorrect: true },
    { text: "Sushi", isCorrect: false },
    { text: "My sanity", isCorrect: false },
    { text: "Ramen", isCorrect: false }
    ]
 
},
{
    q: "True or false: I hate ramen",
    a: [{ text: "Yes", isCorrect: false, isSelected: false},
    { text: "No", isCorrect: true }
    ]
 
},
{
    q: "How many meals does the average human eat in a day?",
    a: [{ text: "0 (trust)", isCorrect: true },
    { text: "1 (lame)", isCorrect: false },
    { text: "2", isCorrect: false },
    { text: "3", isCorrect: false }
    ]
 
}
 
]
 

let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}