const myQuestions = [
  {
    question: "Was Kishimoto the creator of Naruto?",
    img: "img/1.jpg",
    answers: {
      a: "true",
      b: "false"
    },
    correctAnswer: "a"
  },
  {
    question: "Is goku from Howl's moving Castle?",
    img: "img/1.jpg",
    answers: {
      a: "true",
      b: "false"
    },
    correctAnswer: "b"
  },
  {
    question: "Tide Kubo was the Creator of Bleach?",
    img: "img/1.jpg",
    answers: {
      a: "true",
      b: "false"
    },
    correctAnswer: "a"
   },
   {
    question: "Did Hayao Miyazaki Created Spirited away?",
    img: "img/1.jpg",
    answers: {
      a: "true",
      b: "false"
    },
    correctAnswer: "a"
   },
   {
    question: "Sailor Mars from from the Show Terraformars?",
    img: "img/1.jpg",
    answers: {
      a: "true",
      b: "false"
    },
    correctAnswer: "b"
   },
   {
    question: "In the show Naruto Shippuden, Tobi is secretly Madara?",
    img: "img/1.jpg",
    answers: {
      a: "true",
      b: "false"
    },
    correctAnswer: "b"
   },
   {
    question: "Was the The character Totoro in the Movie kiki Deliverys service?",
    img: "img/1.jpg",
    answers: {
      a: "true",
      b: "false"
    },
    correctAnswer: "b"
   },
   {
    question: "In the movie My Neighbor Totoro a Dog shaped bus stopped at the bus stop?",
    img: "img/1.jpg",
    answers: {
      a: "true",
      b: "false"
    },
    correctAnswer: "b"
   },
   {
    question: "Gundam wing was the best Gundam?(There's only ONE RIGHT ANSWER!..)?",
    img: "img/1.jpg",
    answers: {
      a: "true",
      b: "false"
    },
    correctAnswer: "a"
   },
   {
    question: "In The show cowboy bebop is the Character Ed a Male?",
    img: "img/1.jpg",
    answers: {
      a: "true",
      b: "false"
    },
    correctAnswer: "b"
   }
    ]


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];
            CreateTrueBtn();
            function CreateTrueBtn(){
                
            
            const trueBtn = document.createElement("button");
            trueBtn.textContent = "True";
            trueBtn.onclick = function() {
                console.log(this.textContent);
            }
//            document.body.appendChild(trueBtn);
            }
			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
//            output.push(
//                '<button>True</button>'
//            );
            
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}