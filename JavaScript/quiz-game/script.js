const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language",
    ],
    correct: "Hyper Text Markup Language",
  },

  {
    question: "What is CSS used for?",
    answers: [
      "Creating databases",
      "Styling web pages",
      "Writing server code",
      "Creating operating systems",
    ],
    correct: "Styling web pages",
  },

  {
    question: "Which language is used to make web pages interactive?",
    answers: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
    ],
    correct: "JavaScript",
  },

  {
    question: "Which HTML tag is used to create a paragraph?",
    answers: [
      "<div>",
      "<p>",
      "<h1>",
      "<span>",
    ],
    correct: "<p>",
  },

  {
    question: "Which CSS property is used to change text color?",
    answers: [
      "background-color",
      "font-size",
      "color",
      "text-style",
    ],
    correct: "color",
  },

  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      "var",
      "variable",
      "let",
      "Both var and let",
    ],
    correct: "Both var and let",
  },

  {
    question: "Which method is used to select an element by its ID?",
    answers: [
      "document.querySelectorAll()",
      "document.getElementById()",
      "document.getElement()",
      "document.selectById()",
    ],
    correct: "document.getElementById()",
  },

  {
    question: "Which symbol is used for a single-line comment in JavaScript?",
    answers: [
      "<!-- -->",
      "/* */",
      "//",
      "#",
    ],
    correct: "//",
  },

  {
    question: "Which method adds an item to the end of an array?",
    answers: [
      "pop()",
      "shift()",
      "push()",
      "add()",
    ],
    correct: "push()",
  },

  {
    question: "Which storage option allows data to remain after closing the browser?",
    answers: [
      "sessionStorage",
      "localStorage",
      "temporaryStorage",
      "browserStorage",
    ],
    correct: "localStorage",
  },
];

let currentQuestion = 0;
let score = 0;
let wrongAnswers = 0;

// عناصر الصفحات
const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const startButton = document.getElementById("start-button");

// عناصر السؤال
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-button");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const nextButton = document.getElementById("next-button");
const answersContainer = document.getElementById("answers-container");

// بدء الاختبار
startButton.addEventListener("click", function () {
  startPage.style.display = "none";
  quizPage.style.display = "flex";
  resetQuiz();
  showQuestion();
});

// عرض السؤال
function showQuestion() {
  const question = questions[currentQuestion];
  // تحديث المعلومات
  currentQuestionSpan.textContent = currentQuestion + 1;
  totalQuestionsSpan.textContent = questions.length;
  scoreSpan.textContent = score;

  // إظهار السؤال
  questionElement.style.display = "block";
  questionElement.textContent = question.question;

  // عرض الإجابات
  answerButtons.forEach(function (button, index) {
    button.textContent = question.answers[index];
    button.style.display = "block";
    button.disabled = false;
    button.style.backgroundColor = "";
  });

  // إظهار أزرار الإجابات
  answersContainer.style.display = "block";
  nextButton.style.display = "block";
  
  // إزالة أي رسالة نهاية سابقة
  const finishMessage = document.querySelector(".finish-message");
  if (finishMessage) {
    finishMessage.remove();
  }
}

// اختيار الإجابة
answerButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedAnswer = this.textContent;
    const correctAnswer = questions[currentQuestion].correct;

    // إذا كانت الإجابة صحيحة
    if (selectedAnswer === correctAnswer) {
      this.style.backgroundColor = "lightgreen";
      score++;
      scoreSpan.textContent = score;
    }
    // إذا كانت الإجابة خاطئة
    else {
      this.style.backgroundColor = "lightcoral";
      wrongAnswers++;

      // إظهار الإجابة الصحيحة
      answerButtons.forEach(function (button) {
        if (button.textContent === correctAnswer) {
          button.style.backgroundColor = "lightgreen";
        }
      });
    }
    // منع اختيار أكثر من إجابة
    answerButtons.forEach(function (button) {
      button.disabled = true;
    });
  });
});

// زر التالي
nextButton.addEventListener("click", function () {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    // انتهاء الاختبار
    showFinishScreen();
  }
});

// دالة عرض شاشة النهاية
function showFinishScreen() {
  // إخفاء السؤال
  questionElement.style.display = "none";
  
  // إخفاء أزرار الإجابات
  answersContainer.style.display = "none";
  
  // إخفاء زر التالي
  nextButton.style.display = "none";
  
  // إزالة أي رسالة نهاية سابقة
  const oldFinish = document.querySelector(".finish-message");
  if (oldFinish) {
    oldFinish.remove();
  }
  
  // عرض النتيجة
  const finishHTML = `
    <div class="finish-message">
      <h2> Quiz Finished!</h2>
      <div class="final-score">
        <p>Your Score: <strong>${score}</strong> / ${questions.length}</p>
        <p>Wrong Answers: <strong>${wrongAnswers}</strong></p>
      </div>
      <button id="restart-button">Restart Quiz</button>
    </div>
  `;
  
  // إضافة رسالة النهاية بعد السؤال
  questionElement.insertAdjacentHTML('afterend', finishHTML);
  
  // إضافة مستمع لزر إعادة الاختبار
  const restartButton = document.getElementById("restart-button");
  restartButton.addEventListener("click", function () {
    resetQuiz();
    showQuestion();
  });
}

// دالة إعادة ضبط الاختبار
function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  wrongAnswers = 0;
  scoreSpan.textContent = score;
  
  // إظهار السؤال مرة ثانية
  questionElement.style.display = "block";
  
  // إعادة تمكين الأزرار
  answerButtons.forEach(function (button) {
    button.disabled = false;
    button.style.backgroundColor = "";
  });
  
  // إزالة رسالة النهاية إن وجدت
  const finishMessage = document.querySelector(".finish-message");
  if (finishMessage) {
    finishMessage.remove();
  }
  
  // إظهار أزرار الإجابات
  answersContainer.style.display = "block";
  nextButton.style.display = "block";
}