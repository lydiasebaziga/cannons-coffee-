
const form = document.getElementById("form");
const div = document.querySelector("div");


form.addEventListener("submit", onSubmit);;

function onSubmit(event) {
    event.preventDefault();

    const data = new FormData(form);
    const dataObj = Object.fromEntries(data.entries());
 let name = dataObj.name;
    console.log("our data:", dataObj);
    form.reset();

    let story = `Welcome, ${name}! You are logged in!`;

    let messageCoffee = document.createElement("p");
    messageCoffee.textContent = story;
    div.appendChild(messageCoffee);

    form.style.display = "none";
    console.log("my Coffee", story);
}

