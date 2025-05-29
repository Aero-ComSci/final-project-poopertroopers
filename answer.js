document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const vacation = document.getElementById("vacation").value;
        const poop = document.getElementById("poop").value;

        const userData = {
            name: name,
            vacation: vacation,
            poop_per_day: poop
        };

        localStorage.setItem("userResponses", JSON.stringify(userData));

        alert("Your answers have been saved!");
    });
});


function redirectToResults() {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const vacation = document.getElementById("vacation").value;
    const poop = document.getElementById("poop").value;

    const userData = { name, vacation, poop_per_day: poop };
    localStorage.setItem("userResponses", JSON.stringify(userData));

    let vacationData = JSON.parse(localStorage.getItem("vacationData")) || [];
    vacationData.push(vacation);
    localStorage.setItem("vacationData", JSON.stringify(vacationData));

    window.location.href = "end.html";
}
