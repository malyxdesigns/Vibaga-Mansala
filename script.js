/* =========================================
   SMOOTH SCROLL TO PAPERS
========================================= */

function scrollToPapers() {

    const papers =
        document.getElementById("papers");

    papers.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   START PAPER
========================================= */

function startPaper(paperType) {

    const paperNames = {

        Scholarship:
            "පස්වන ශ්‍රේණිය ශිෂ්‍යත්වය",

        "OL-ICT":
            "O/L තොරතුරු තාක්ෂණය",

        "OL-Maths":
            "O/L ගණිතය"

    };


    const selectedPaper =
        paperNames[paperType];


    alert(
        "📚 " +
        selectedPaper +
        "\n\n" +
        "ප්‍රශ්න පත්‍රය ඉක්මනින්ම ආරම්භ වේ!"
    );

}


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const navbar =
        document.querySelector(".navbar");

    navbar.classList.toggle("active");

}


/* =========================================
   ABOUT INFO
========================================= */

function showInfo() {

    alert(
        "🎓 විභාග මංසල\n\n" +
        "පාසල් සිසුන්ට තම විභාග සඳහා " +
        "හොඳින් සූදානම් වීමට උපකාර කරන " +
        "අධ්‍යාපනික වෙබ් අඩවියකි.\n\n" +
        "📚 ඉගෙනගන්න\n" +
        "📝 පුහුණු වෙන්න\n" +
        "🏆 ජයගන්න!"
    );

}


/* =========================================
   CLOSE MOBILE MENU WHEN LINK CLICKED
========================================= */

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".navbar")
            .classList.remove("active");

    });

});

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});