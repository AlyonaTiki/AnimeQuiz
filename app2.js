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
        option: {
            A: "true",
            B: "false"
        },
        answer: "true"
	},
    {
        problem: "2) Is goku from Howl's moving Castle?",
        option: {
            A: "true",
            B: "false"
        },
        answer: "true"
	},
    {
        problem: "3) Tide Kubo was the Creator of Bleach?",
        option: {
            A: "true",
            B: "false"
        },
        answer: "false"
	},
    {
        problem: "4) Did Hayao Miyazaki Created Spirited away?",
        option: {
            A: "true",
            B: "false"
        },
        answer: ''
	},
    {
        problem: "5) Sailor Mars from from the Show Terraformars?",
        option: {
            A: "true",
            B: "false"
        },
        answer: ''
	},
    {
        problem: "6) In the show Naruto Shippuden, Tobi is secretly Madara?",
        option: {
            A: "true",
            B: "false"
        },
        answer: ''
	},
    {
        problem: "7) Was the The character Totoro in the Movie kiki Deliverys service?",
        option: {
            A: "true",
            B: "false"
        },
        answer: ''
	},
    {
        problem: "8) In the movie My Neighbor Totoro a Dog shaped bus stopped at the bus stop?",
        option: {
            A: "true",
            B: "false"
        },
        answer: ''
	},
    {
        problem: "9) Gundam wing was the best Gundam?(There's only ONE RIGHT ANSWER!..)?",
        option: {
            A: "true",
            B: "false"
        },
        answer: ''
	},
    {
        problem: "10) In The show cowboy bebop is the Character Ed a Male?",
        option: {
            A: "true",
            B: "false"
        },
        answer: ''
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
    img.id = "img" + i;
    img.classList.add("slide");
    imgContainer.appendChild(img);

    for (let key in questions[i].option) {
        let option = questions[i].option[key];
        const options = document.createElement('button');
        options.classList.add("option");
        options.textContent = option;
        var counter = 0;

        options.onclick = function () {
//            console.log(questions[i].answer);
//            console.log(this.textContent);
            
            options.disabled = true;
            if (questions[i].answer == this.textContent) {
                counter++;
            }
            console.log(counter);
        };
        imgContainer.appendChild(options);
    }
    container.appendChild(imgContainer);
}
//if (counter>= 8){
//  const result = createTextNode(counter + "/10 You are professional!"); 
//} else if(counter>= 4 && counter<=7 ){
//  const result2 = createTextNode(counter + "/10 Not bad!");  
//} else if(counter<=3 ){
//  const result3 = createTextNode(counter + "/10 You should learn more!");  
//}