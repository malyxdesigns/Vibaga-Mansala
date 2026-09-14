// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("active");

}


// ===============================
// PAPER BUTTONS
// ===============================

function openPaper(type) {

    if (type === "past") {

        alert("📄 පසුගිය ICT ප්‍රශ්න පත්‍ර ඉක්මනින් එකතු කරනු ලැබේ!");

    }

    else if (type === "model") {

        alert("📝 ආදර්ශ ICT ප්‍රශ්න පත්‍ර ඉක්මනින් එකතු කරනු ලැබේ!");

    }

    else if (type === "practice") {

        alert("💡 ICT පුහුණු ප්‍රශ්න ඉක්මනින් එකතු කරනු ලැබේ!");

    }

}


// ===============================
// CLOSE MOBILE MENU
// ===============================

document.querySelectorAll(".navbar a").forEach(function (link) {

    link.addEventListener("click", function () {

        document.querySelector(".navbar").classList.remove("active");

    });

});