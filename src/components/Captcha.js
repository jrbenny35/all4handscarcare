import React from 'react';
import ReCAPTCHA from "react-google-recaptcha"

function onChange(value) {
    console.log("Captcha value:", value)
}

export default function Captcha() {
    return (
        <div id={'captchaHolder'}>
            <ReCAPTCHA sitekey="6Le7OK4aAAAAAHhteV8Nvz0PY6FEzR4kaBR9fA5-" onChange={onChange}/>
        </div>
    )
}