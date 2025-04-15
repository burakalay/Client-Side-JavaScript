document.addEventListener("DOMContentLoaded", () => {
    const factBox = document.getElementById("factBox");
    const button = document.getElementById("getFact");

    //student infos
    document.getElementById("studentInfo").textContent = "Name: Burak Alay | Student ID: 200597837";

    button.addEventListener("click", () => {
        fetch("https://catfact.ninja/fact")
            .then(response => response.json())
            .then(data => {
                factBox.textContent = data.fact;
            })
            .catch(error => {
                factBox.textContent = "ops! something went wrong..";
                console.error("API Error:", error);
            });
    });

    // show me one as soon as web page opens.
    button.click();
});
