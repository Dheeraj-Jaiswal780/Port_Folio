import React, { useRef, useState } from "react";
import BottomNavbar from "./components/BottomNavbar";
import FooterDetails from "./components/Footer";

const Contact = () => {
    const [isAnswerActive, setAnswerActive] = useState(false)

    const questionIconRotate = useRef()
    const handleQuestionIcon = () => {


        questionIconRotate.current.classList.toggle("question-icon-active")
        isAnswerActive == false ? setAnswerActive(true) : setAnswerActive(false)

    }
    return (
        <>
            <div className="contact-container" data-aos='fade-right'>
                <div className="first-container">
                    <div className="dictoration-line">

                        <div className="line"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="title">
                        <h1>Get In Touch</h1>

                    </div>
                    <div className="desc">
                        <h3>Feel free to contact me through the following channels...</h3>
                    </div>
                    <div className="send-email">
                        <h2>Send me an email</h2>
                        <h3>You can send mail to me at dheerajjaiswal780@gmail.com</h3>
                    </div>
                    <div className="send-email">
                        <h2>Whatsapp me</h2>
                        <h3>You can send message to me at 9670730420</h3>
                    </div>

                </div>



                <div className="second-container" data-aos='fade-right'>
                    <div className="input-field">
                        <input type="text" name="name" id="name" placeholder="name" />
                    </div>
                    <div className="input-field">
                        <input type="email" name="email" id="email" placeholder="email" />
                    </div>
                    <div className="input-field">
                        <input type="phone" name="phone" id="phone" placeholder="phone number" />
                    </div>
                    <div className="input-area">
                        <textarea name="message" id="" cols="30" rows="10" placeholder="message"></textarea>
                    </div>
                    <div className="button-field">
                        <button>send</button>
                    </div>

                </div>
            </div>
            <FooterDetails />
            <BottomNavbar />
        </>
    )
}
export default Contact;