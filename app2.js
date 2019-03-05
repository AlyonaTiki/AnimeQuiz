//images
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

//questions and answers
//A and B are choices, answer is the correct answer
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
        answer: "false"
	},
    {
        problem: "3) Tide Kubo was the Creator of Bleach?",
        option: {
            A: "true",
            B: "false"
        },
        answer: "true"
	},
    {
        problem: "4) Did Hayao Miyazaki Created Spirited away?",
        option: {
            A: "true",
            B: "false"
        },
        answer: "true"
	},
    {
        problem: "5) Sailor Mars from from the Show Terraformars?",
        option: {
            A: "true",
            B: "false"
        },
        answer: "false"
	},
    {
        problem: "6) In the show Naruto Shippuden, Tobi is secretly Madara?",
        option: {
            A: "true",
            B: "false"
        },
        answer: "false"
	},
    {
        problem: "7) Was the The character Totoro in the Movie kiki Deliverys service?",
        option: {
            A: "true",
            B: "false"
        },
        answer: "false"
	},
    {
        problem: "8) In the movie My Neighbor Totoro a Dog shaped bus stopped at the bus stop?",
        option: {
            A: "true",
            B: "false"
        },
        answer: "false"
	},
    {
        problem: "9) Gundam wing was the best Gundam?(There's only ONE RIGHT ANSWER!..)?",
        option: {
            A: "true",
            B: "false"
        },
        answer: "true"
	},
    {
        problem: "10) In The show cowboy bebop is the Character Ed a Male?",
        option: {
            A: "true",
            B: "false"
        },
        answer: "false"
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

//html elements
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('results');

// on submit, show results
submitButton.onclick = function () {
    if (counter >= 8) {
        resultsContainer.innerHTML = counter + ' out of 10 / You are anime guru';
    } else if (counter >= 4 && counter <= 7) {
        resultsContainer.innerHTML = counter + ' out of 10 / Not bad!';
        r2.appendChild(result2);
    } else if (counter <= 3) {
        resultsContainer.innerHTML = counter + ' out of 10 / You should learn more!';
    }
}
