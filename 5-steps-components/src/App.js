import { useState } from "react";


const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
]
const bgColor = '#7950f2';
const textColor = '#fff';


export default function App() {
    return (
        <div>
            <Steps />
            <StepMessage step={1}>
                <p>Pass in Content</p>
                <p>✌🏻</p>
            </StepMessage>
            <StepMessage step={2}>
                <p>Read children pop</p>
                <p>😎</p>
            </StepMessage>
        </div>
    )
}

function Steps() {
    /*
    Using state in the practice
    */
    // For the state , first value we pass is startValue
    // We can use useState only on the top level of the function
    // It cannot be used in if statemnent for another function
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true)
    // Below is the bad practice, state is immutabe in react, always do in the react gave
    // const [test] = useState({ name: "Gowrav" });

    function handlePrevious() {
        if (step > 1) setStep((s) => s - 1);
    }

    function handleNext() {
        if (step < 3) {
            // Step only have to be passed only once
            // If the state have to be updated twice, callback function have to be used instead of sending the value manually into the function
            setStep((currentStep) => currentStep + 1);
            // setStep((currentStep) => currentStep + 1);
        }
        // Bad Practice
        // test.name = 'Sai'
    }

    return (
        <>
            {/* Here the button to close is made, and changes the state based on the function that is passed */}
            <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>

                    {/* In react, we use HTML event listener, write on the place where they will happen */}
                    {/* <p className="message">
                        <h3>Step {step}</h3> {messages[step - 1]}

                        {/* BAD PRACTICE  {test.name} */}
                    {/* </p> */}
                    <StepMessage step={step}>{messages[step - 1]}
                        <div className="buttons">
                            <Button bgColor='#e7e7e7' textColor='#333' onClick={() => alert(`Learn how to ${messages[step - 1]}`)}>Learn How</Button>
                        </div>
                    </StepMessage>
                    <div className="buttons">
                        {/* In React, we add the events directly on the event handlers */}
                        <Button textColor={textColor} bgColor={bgColor} onClick={handlePrevious}>
                            <span>👈🏻</span> Previous </Button>
                        <Button textColor={textColor} bgColor={bgColor} onClick={handleNext} text='Next' emoji='👉🏻'>
                            Next <span>👉🏻</span></Button>
                    </div >
                </div >)
            }
        </>
    );
}

function StepMessage({ step, children }) {
    return (
        <div className="message">
            <h3>Step {step}</h3>
            {children}
        </div>)
}

function Button({ textColor, bgColor, onClick, children }) {
    return (
        <button style={{ backgroundColor: bgColor, color: textColor }}
            onClick={onClick}>
            {children}
        </button>
    )
}