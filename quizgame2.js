Contestent1_name = localStorage.getItem("Contestent1_name");
Contestent2_name = localStorage.getItem("Contestent2_name");

document.getElementById("player_question").innerHTML = "Question Turn - " + Contestent1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + Contestent2_name;

Contestent1_score = 0;
Contestent2_score = 0;

document.getElementById("Contestent1_name").innerHTML = Contestent1_name + "-";
document.getElementById("Contestent2_name").innerHTML = Contestent2_name + "-";

document.getElementById("Contestent1_score").innerHTML = Contestent1_score;
document.getElementById("Contestent2_name").innerHTML = Contestent2_score;

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);


question_number = "<h4>" + number1 + "X"+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}

question_turn ="Contestent1";
answer_turn ="Contestent2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(answer_turn == "Contestent1")
    {
        update_Contestent1_score = Contestent1_score +1;
        document.getElementById("Contestent_score").innerHTML = update_Contestent1_score;
    }
    else
    {
        update_Contestent2_score = Contestent2_score +1;
        document.getElementById("Contestent2_score").innerHTML = update_Contestent2_score;
    }
}

if(question_turn == "Contestent1")
{
    question_turn = "Contestent2"
    document.getElementById("Contestent_question").innerHTML = "Question Turn - " + Contestent2_name;
}
else
{
    question_turn = "Contestent1"
    document.getElementById("Contestent_question").innerHTML = "Question Turn - " + Contestent1_name;
}

if(answer_turn == "Contestent1")
{
    answer_turn = "Contestent2"
    document.getElementById("Contestent_answer").innerHTML = "Answer Turn - " + Contestent2_name;
}
else
{
    answer_turn = "Contestent1"
    document.getElementById("Contestent_answer").innerHTML = "Question Turn - " + Contestent1_name;
}