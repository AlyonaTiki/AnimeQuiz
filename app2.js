
//for(var i=0; i<question.length; i++){
//var q = myQuestions[questionIndex];
//q.textContent = q.question;
// trueBtn.textContent = "True";
//            trueBtn.onclick = function() {
//                console.log(this.textContent);
//            }
//}

//array of images
const images = [
	"images/Q1pic.jpg", 
	"images/Q2pic.jpg", 
	"images/Q3pic.png", 
	"images/Q4pic.jpg",
	"images/Q5pic.jpg",
	"images/Q6pic.jpg",
	"images/Q7pic.jpg",
	"images/Q8pic.jpg",
	"images/Q9pic.jpg",
	"images/Q10pic.jpg"
];

//array of questions and answers
const questions = [

	{
	    problem: "1) Was Kishimoto the creator of Naruto?",
	    option:{A:true, B:false},
	    answer:''
	},
	{
	    problem: "2) Is goku from Howl's moving Castle?",
	    option:{A:true, B:false},
	    answer:''
	},
	{
		problem: "3) Tide Kubo was the Creator of Bleach?",
	    option:{A:true, B:false},
	    answer:''
	},
	{
		problem: "4) Did Hayao Miyazaki Created Spirited away?",
	    option:{A:true, B:false},
	    answer:''
	},
	{
		problem: "5) Sailor Mars from from the Show Terraformars?",
	    option:{A:true, B:false},
	    answer:''
	},
	{
		problem: "6) In the show Naruto Shippuden, Tobi is secretly Madara?",
	    option:{A:true, B:false},
	    answer:''
	},
	{
		problem: "7) Was the The character Totoro in the Movie kiki Deliverys service?",
	    option:{A:true, B:false},
	    answer:''
	},
	{
		problem: "8) In the movie My Neighbor Totoro a Dog shaped bus stopped at the bus stop?",
	    option:{A:true, B:false},
	    answer:''
	},
	{
		problem: "9) Gundam wing was the best Gundam?(There's only ONE RIGHT ANSWER!..)?",
	    option:{A:true, B:false},
	    answer:''
	},
	{
		problem: "10) In The show cowboy bebop is the Character Ed a Male?",
	    option:{A:true, B:false},
	    answer:''
	}
];




//display the questions and images

const container = document.getElementById("container");

for (let i = 0; i < images.length; i++) {
	
	const imgContainer = document.createElement('div');
	
	const problems = document.createElement('p');
	problems.classList.add("problem");
	problems.textContent = questions[i].problem;
	imgContainer.appendChild(problems);
		
	const img = new Image();
	img.src = images[i];
	img.id = "img"+i;
	img.classList.add("slide");
	imgContainer.appendChild(img);
    
	console.log(questions[i].option);
    for (let key in questions[i].option) {
       let option = questions[i].option[key];
	   const options = document.createElement('button');
	   options.classList.add("option");
	   options.textContent = option;
       options.onclick = function() {
//            console.log(key);
//            console.log(option);
//            console.log(this);
        };
        imgContainer.appendChild(options);
    }
	
    

	container.appendChild(imgContainer);
	
}