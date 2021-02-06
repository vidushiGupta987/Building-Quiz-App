var questions = [
    {
        question : "All elements are identified by their __________ and are marked up using either start tags and end tags or self-closing tags.",
        options : {
            o1 : "attribute name",
            o2 : "tag name",
            o3 : "class name",
            o4 : "none of the mentioned",
        },
        answer: 2
    },
    {
        question : "The __________ element represents a span of text that is isolated from its surroundings for the purposes of bidirectional text formatting.",
        options : {
            o1 : "b",
            o2 : "bdi",
            o3 : "bdo",
            o4 : "base",
        },
        answer: 2
    },
    {
        question : "The interactive element audio with the attribute controls must not appear as a descendant of which element?",
        options : {
            o1 : "a",
            o2 : "button",
            o3 : "audio",
            o4 : "both a and button",
        },
        answer: 4
    },
    {
        question : "A ____________ element must have a start tag but must not have an end tag.",
        options : {
            o1 : "details",
            o2 : "command",
            o3 : "code",
            o4 : "both details and command",
        },
        answer: 2
    },
    {
        question : "Which type attribute of input element sets the element's value to a string representing a number?",
        options : {
            o1 : "range",
            o2 : "email",
            o3 : "file",
            o4 : "date",
        },
        answer: 1
    },
    {
        question : "Which of the following type attributes of input element defines control for entering a telephone number?",
        options : {
            o1 : "mob",
            o2 : "tel",
            o3 : "mobile",
            o4 : "telephone",
        },
        answer: 2
    },
    {
        question : "Which element represents a control for generating a public-private key pair?",
        options : {
            o1 : "ins",
            o2 : "keygen",
            o3 : "key",
            o4 : "command",
        },
        answer: 2
    },
    {
        question : "Which element represents marked or highlighted text for reference purposes?",
        options : {
            o1 : "highlight",
            o2 : "mark",
            o3 : "strong",
            o4 : "blink",
        },
        answer: 2
    },
    {
        question : "Which element(s) represents a section of a document that links to other documents?",
        options : {
            o1 : "navigation",
            o2 : "anchor tag",
            o3 : "nav",
            o4 : "option",
        },
        answer: 3
    },
    {
        question : "Which of the following element marks the ruby text component of a ruby annotation?",
        options : {
            o1 : "r",
            o2 : "rt",
            o3 : "ruby",
            o4 : "rubytxt",
        },
        answer: 2
    }
]

var questionNumber = 0;
var score = 0;

var questionSpace = document.getElementById("question");
var option1 = document.getElementById("o1");
var option2 = document.getElementById("o2");
var option3 = document.getElementById("o3");
var option4 = document.getElementById("o4");
var correctAlert = document.getElementById("correct");
var incorrectAlert = document.getElementById("incorrect");
var submitButton = document.getElementById("submit");
var nextButton = document.getElementById("next");
var restartButton = document.getElementById("restart");
var quizDiv = document.getElementById("quiz") ;
var resultDiv = document.getElementById("result") ;

clear();
resultDiv.style.display = "none";
questionInitialize();
resultInitialize();

submitButton.addEventListener("click", function() {
    if(document.querySelector('input[name="option"]:checked') == null) {
        alert("Please select an option")
    }
    else {
        var selectedValue = document.querySelector('input[name="option"]:checked').id;
        if(selectedValue == "a" + questions[questionNumber].answer) {
            correctAlert.style.display = "inline-block";
            score++;
        }
        else {
            incorrectAlert.style.display = "inline-block";
        }
        nextButton.style.display = "inline";
        submitButton.style.display = "none";
        toggleOptions();
    }
});

nextButton.addEventListener("click", function() {
    clear()
    questionNumber++;
    if(questionNumber == 10) {
        quizDiv.style.display ="none";
        document.getElementById("navbarTitle").innerHTML = "Score : " + score;
        resultDiv.style.display = "block";
    }
    else {
        document.querySelector('input[name="option"]:checked').checked = false
        toggleOptions();
        questionInitialize();
    }
});

restartButton.addEventListener("click", function() {
    score = 0;
    questionNumber = 0;
    clear;
    document.querySelector('input[name="option"]:checked').checked = false
    toggleOptions();
    questionInitialize();
    quizDiv.style.display ="block";
    document.getElementById("navbarTitle").innerHTML = "Quiz";
    resultDiv.style.display = "none";
});

function clear() {
    correctAlert.style.display = "none";
    incorrectAlert.style.display = "none";
    nextButton.style.display = "none";
    submitButton.style.display = "inline";
}

function toggleOptions() {
    var current = document.getElementById("a1").disabled;
    document.getElementById("a1").disabled = document.getElementById("a2").disabled = document.getElementById("a3").disabled = document.getElementById("a4").disabled = !current;
}

function questionInitialize() {
    questionSpace.innerHTML = questions[questionNumber].question;
    option1.innerHTML = questions[questionNumber].options.o1;
    option2.innerHTML = questions[questionNumber].options.o2;
    option3.innerHTML = questions[questionNumber].options.o3;
    option4.innerHTML = questions[questionNumber].options.o4;
}

function resultInitialize() {
    var resultList = document.getElementById("resultList");
    for(var i=0; i<10; i++) {
        var answerList = document.createElement("li");
        answerList.innerHTML = questions[i].question + " - ";
        var answerBadge = document.createElement("span");
        answerBadge.className = "badge badge-success";
        var correctAnswer = "o" + questions[i].answer;
        answerBadge.innerHTML = questions[i].options[correctAnswer];
        answerList.appendChild(answerBadge);
        resultList.appendChild(answerList);
        resultList.appendChild(document.createElement("br"));
    }
}
