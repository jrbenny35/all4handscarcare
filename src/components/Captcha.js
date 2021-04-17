import React from 'react';
import ReCAPTCHA from "react-google-recaptcha"



export default function Captcha({updateCaptchaVerified}) {
    function onChange(value) {
        updateCaptchaVerified(value)
    }
    return (
        <div id={'captchaHolder'}>
            <ReCAPTCHA sitekey="6Le7OK4aAAAAAHhteV8Nvz0PY6FEzR4kaBR9fA5-" onChange={onChange}/>
        </div>
    )
}