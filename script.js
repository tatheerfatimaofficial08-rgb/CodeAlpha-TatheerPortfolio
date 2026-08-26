/* ==================== DARK / LIGHT MODE ==================== */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeToggle.textContent = "☾";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }

});


/* ==================== RECOMMENDATION ==================== */

function addRecommendation() {

    const nameInput = document.getElementById("recommendation-name");
    const recommendationInput =
        document.getElementById("new-recommendation");

    const name = nameInput.value.trim();
    const recommendation = recommendationInput.value.trim();

    /* Do nothing if either field is empty */

    if (name === "" || recommendation === "") {
        return;
    }


    /* Create the new recommendation card */

    const recommendationCard = document.createElement("div");

    recommendationCard.className = "recommendation-card";


    /* Create recommendation text */

    const recommendationText = document.createElement("p");

    recommendationText.textContent =
        '"' + recommendation + '"';


    /* Add name below recommendation */

    const recommendationName = document.createElement("strong");

    recommendationName.textContent =
        "- " + name;


    /* Put everything inside the card */

    recommendationCard.appendChild(recommendationText);

    recommendationCard.appendChild(recommendationName);


    /* Add new card to the existing list */

    const recommendationList =
        document.getElementById("recommendation-list");

    recommendationList.appendChild(recommendationCard);


    /* Clear the form */

    nameInput.value = "";

    recommendationInput.value = "";


    /* Show popup ONLY after a new recommendation is submitted */

    showPopup();

}


/* ==================== POPUP ==================== */

function showPopup() {

    const popup = document.getElementById("popup");

    popup.style.display = "flex";

}


function closePopup() {

    const popup = document.getElementById("popup");

    popup.style.display = "none";

}


/* ==================== HOME ICON ==================== */

const homeIcon = document.querySelector(".home-icon");

if (homeIcon) {

    homeIcon.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}