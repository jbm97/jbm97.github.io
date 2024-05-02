const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br/> 
                        Email: ${email.value}<br/> 
                        Phone Number: ${phoneNumber.value}<br/> 
                        Message: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: EMAIL_USERNAME,
        Password: EMAIL_PASSWORD,
        To: EMAIL_USERNAME,
        From: EMAIL_USERNAME,
        Subject: subject.value,
        Body: bodyMessage,
    }).then((message) => {
        if (message === "OK") {
            Swal.fire({
                title: "Message Sent!",
                text: "You will be contacted ASAP.",
                icon: "success",
                allowEscapeKey: true,
                width: "35rem",
                heightAuto: true,
                confirmButtonText: "Continue",
            });
        }
    });
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value !== "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value !== "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-text.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value !== "") {
            errorTxtEmail.textContent = "Enter a valid email address.";
        } else {
            errorTxtEmail.textContent = "Email address cannot be blank.";
        }
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); // always use for forms w buttons or events, look up

    checkInputs();

    if (
        !fullName.classList.contains("error") &&
        !email.classList.contains("error") &&
        !phoneNumber.classList.contains("error") &&
        !subject.classList.contains("error") &&
        !message.classList.contains("error")
    ) {
        sendEmail();
        form.reset();

        return false;
    }
});
