import { useState } from "react";


const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
]


export default function App() {
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
                    <p className="message">Step {step}: {messages[step - 1]}

                        {/* BAD PRACTICE  {test.name} */}
                    </p>
                    <div className="buttons">
                        {/* In React, we add the events directly on the event handlers */}
                        <button style={{ backgroundColor: '#7950f2', color: "#fff" }}
                            onClick={handlePrevious}
                        // onMouseEnter={() => alert('TEST')}
                        >Previous
                        </button>
                        <button style={{ backgroundColor: '#7950f2', color: "#fff" }} onClick={handleNext} >
                            Next
                        </button>
                    </div >
                </div >)
            }
        </>
    );
}