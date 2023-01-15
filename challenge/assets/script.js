// A start button that when clicked a timer starts and the first question appears.
 
// Questions contain buttons for each answer.
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var myQuestions = [
            {
                question: "Inside which HTML element do we put the JavaScript?",
                answers: {
                    a: "<js>",
                    b: "<javascript>",
                    c: "<script>",
                    d: "<scripting>"
                },
                correctAnswer: "c"            
            },
            {
                question: "Where is the correct place to insert a JavaScript?",

                answers: {
                    a: "<head> section",
                    b: "<body> section",
                    c: "<footer> section",
                    d: "Both the <head> section and the <body> section are correct"
                },
                correctAnswer: "d"
            },
            {
                question: "How do you create a function in JavaScript?",

                answers: {
                    a: "function = myFunction ()",
                    b: "function:myFunction()",
                    c: "function myFunction()",
                    d: "functionMeUp"
                },
                correctAnswer: "c"
            },
            {
                question: "How do you write an IF statement?",

                answers: {
                    a: "if i = 5",
                    b: "if (i == 5)",
                    c: "if i = 5 then",
                    d: "if i == 5 then"
                },
                correctAnswer: "b"
            },
            {
                question: "How do you call a function named 'myFunction/'?",

                answers: {
                    a: "call function myFunction",
                    b: "myFunction()",
                    c: "call myFunction()",
                    d: "functionMeUp"
                },
                correctAnswer: "a"
            },

        ];
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

// When answer is clicked, the next question appears

// If the answer clicked was incorrect then subtract time from the clock

// The quiz should end when all questions are answered or the timer reaches 0.

//  When the game ends, it should display their score and give the user the ability to save their initials and their score