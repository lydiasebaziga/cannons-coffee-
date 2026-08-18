

const form = document.getElementById("form");
const div = document.querySelector("div");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const data = new FormData(form);
    const dataObj = Object.fromEntries(data.entries());

    console.log("our data:", dataObj);

    form.reset();


    let name = dataObj.name;
    let email = dataObj.email;
    let tel = dataObj.phone;
    let buying = dataObj.toppings;
    let seekingemployment = dataObj.toppings
    let favoritecoffee = dataObj.coffee;
    let comment = dataObj.comments;

    let story = ` Thank you ${name}! We appreciate your interest in ${buying}. Your favorite coffee flavor is ${favoritecoffee} and your comments are ${comment}. We will soon contact you at ${email} or ${tel}`;

    let messageCoffee = document.createElement("p");
    messageCoffee.textContent = story;
    div.appendChild(messageCoffee);

    form.style.display = "none";

    console.log("my Coffee", story);
    
}