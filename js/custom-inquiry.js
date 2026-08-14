let name = "lydia";
let tel = 4056676668;
let buying = ["buying coffee", "seeking employmen"];
let favoritecoffee = ["vanila", "moca", "hotchoc"]
let comment = "it was soo funy";
let email = "lydia@gmail.com";
let number = 123456789;

const form = document.getElementById("form");
const div = document.querySelector("div");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const data = new FormData(form);
    const dataObj = Object.fromEntries(data.entries());

    console.log("our data:", dataObj);
    form.reset();


    let story = ` Thank you ${name}! We appreciate your interest in ${buying}. Your favorite coffee flavor is ${favoritecoffee} and your comments are ${comment}. We will soon contact you at ${email} or ${tel}`;

    let messageCoffee = document.createElement("p");
    messageCoffee.textContent = story;
    div.appendChild(messageCoffee);

    console.log("my Coffee", story);
}