function addUser()
{
    Contestent1_name = document.getElementById("Contestent1_name_input").value;
    Contestent2_name = document.getElementById("Contestent2_name_input").value;

    localStorage.setItem("Contestent1_name",Contestent1_name);
    localStorage.setItem("Contestent2_name",Contestent2_name);

    window.location = "quizgame.html";
}