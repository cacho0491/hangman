{
    var playerName = "";
    var currentAnswerIndex = null;
    var counter = 0;
    var questions = [
        {
            question: "Donde nacio Simon Bolivar?",
            answers: {
                a: "Ecuador",
                b: "Colimbia",
                c: "Venezuela"
            },
            correctAnswer: "Venezuela"
        },
        {
            question: "En donde se encuentra el Lago Tiki Taka?",
            answers: {
                a: "Peru",
                b: "Bolvia",
                c: "Chile"
            },
            correctAnswer: "Peru"
        },
        {
            question: "Quien fue el primer presidente de Ecuador?",
            answers: {
                a: "Eloy Alfaro",
                b: "Antonio Sucre",
                c: "Lenin Moreno"
            },
            correctAnswer: "Antonio Sucre"
        },
        {
            question: "Donde queda el Rio de la Plata?",
            answers: {
                a: "Paraguay",
                b: "Uruguay",
                c: "Argentina"
            },
            correctAnswer: "Argentina"
        },
        {
            question: "8 numeros iguales y pares que den 1000?",
            answers: {
                a: "10",
                b: "20",
                c: "8"
            },
            correctAnswer: "8"
        },
        {
            question: "Cuanto es 4 * 6?",
            answers: {
                a: "10",
                b: "24",
                c: "40"
            },
            correctAnswer: "24"
        },
        {
            question: "Cuales son los colores de la bandera de Argentina?",
            answers: {
                a: "Celeste y Blanco",
                b: "Rojo y Amarillo",
                c: "Verde y Rojo"
            },
            correctAnswer: "Celeste y Blanco"
        },
        
    ]

    function start() {
        const name = document.getElementById("player_name").value;
        if (name !== ""){
            playerName = name;
            startGame();
        } else {
            alert("Enter a name")
        };
    };

    function startGame(){
        hideStartPage();
        //document.getElementById("main").style.animationName = "show";
        document.getElementById("main").style.display = "flex";
        document.getElementById("pl_name").innerHTML = playerName;
        displayAnswers();
    }

    function hideStartPage() {
        document.getElementById("entrance").style.display = "none";
        //document.getElementById("entrance").style.animationName = "hide";

    }

    function displayAnswers() {
        const randomQ = Math.floor(Math.random()* questions.length);
        currentAnswerIndex = randomQ;
        console.log(randomQ);
        document.getElementById("question").innerHTML = questions[randomQ].question;
        document.getElementById("a").innerHTML = questions[randomQ].answers.a;
        document.getElementById("b").innerHTML = questions[randomQ].answers.b;
        document.getElementById("c").innerHTML = questions[randomQ].answers.c;
        // for(let i of questions){
        //     console.log(i.question)
        //     quest.innerHTML = i.question;
        //     questionA.innerHTML = i.answers.a;
        //     questionB.innerHTML = i.answers.b;
        //     questionC.innerHTML = i.answers.c;
        // }
    }
    function submitAnswer() {
        
        if(document.getElementById("qa").checked){
            checkAnswer(document.getElementById("a").textContent);
        } else if( document.getElementById("qb").checked){
            checkAnswer(document.getElementById("b").textContent);
        } else if (document.getElementById("qc").checked){
            checkAnswer(document.getElementById("c").textContent);
        }
      
    }

    function checkAnswer(a) {
        if(questions[currentAnswerIndex].correctAnswer === a){
            displayAnswers();
        } else {
            counter++;
            if(counter == 1){
                document.querySelector(".floor").style.display = "block";
            };
            if(counter == 2){
                document.querySelector(".pole").style.display = "block";
            };
            if(counter == 3) {
                document.querySelector(".pole1").style.display = "block";
            };
            if(counter == 4) {
                document.querySelector(".pole2").style.display = "block";
            };
            if(counter == 5){
                document.querySelector(".head").style.display = "block";
            };
            if(counter == 6){
                document.querySelector(".body").style.display = "block";
            };
            if(counter == 7) {
                document.querySelector(".l-arm").style.display = "block";
            };
            if(counter == 8) {
                document.querySelector(".r-arm").style.display = "block";
            };
            if(counter == 9 ){
                document.querySelector(".l-leg").style.display = "block";
            };
            if(counter == 10) {
                document.querySelector(".r-leg").style.display = "block";
                document.getElementById("dead").innerHTML = "YOu ArE DeAd!"
            };
            
            
            displayAnswers
            ();
        }
    }

}