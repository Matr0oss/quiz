const quizData = [ 
{
    question: "Hoe oud ben ik",
    a: "24",
    b: "11",
    c: "19",
    d: "23",
    correct: "a"
}, {
    question: "wat is mijn naam?",
    a: "Jaap",
    b: "Kim",
    c: "Matr0os",
    d: "Mattias",
    correct: "d"
}, {
    question: "Waar kom ik van daan?",
    a: "Den Haag",
    b: "Rotterdam",
    c: "Berlijn",
    d: "Madrid",
    correct: "a"
}, {
    question: "Wat zijn mijn hobbys?",
    a: "Coderen",
    b: "Gamen",
    c: "Fitnes",
    d: "alles hierboven",
    correct: "d"
}, {
    question: "Wordt deze quiz ooit een keer gebruikt?",
    a: "jaa",
    b: "nee",
    c: "misschien",
    d: "uhh okay ",
    correct: "a"
},

];
const questionEl = document.getElementById
('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitbtn.addEventListener("click", () => {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        alert("klaar");
    }

    loadQuiz();
})