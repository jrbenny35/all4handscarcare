import emailjs from "emailjs-com";


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_r317n9j', 'template_3vdhg3h', e.target, 'user_bmGQziAe7CejBZhHyXZm6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}