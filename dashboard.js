var courses = document.getElementById("courses");
var resources = document.getElementById("resources");
var feeds = document.getElementById("feeds");
var firstlink = document.getElementById("firstlink");
var secondlink = document.getElementById("sec-link");
var thirdlink = document.getElementById("third-link");

    function changeVisibility1(){
        courses.style.display="block";
        resources.style.display="none";
        feeds.style.display="none";
        firstlink.style.borderBottom="4px solid #2196f3";
        secondlink.style.borderBottom = "none";
        thirdlink.style.borderBottom = "none";
    }

    function changeVisibility2(){
        courses.style.display="none";
        resources.style.display="block";
        feeds.style.display="none";
        firstlink.style.borderBottom="none";
        secondlink.style.borderBottom = "4px solid #2196f3";
        thirdlink.style.borderBottom = "none";
    }

    function changeVisibility3(){
        courses.style.display="none";
        resources.style.display="none";
        feeds.style.display="block";
        firstlink.style.borderBottom="none";
        secondlink.style.borderBottom = "none";
        thirdlink.style.borderBottom = "4px solid #2196f3";
    }

firstlink.addEventListener("click",changeVisibility1);
secondlink.addEventListener("click",changeVisibility2);
thirdlink.addEventListener("click",changeVisibility3);
