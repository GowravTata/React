
function StartScreen({ numQUestions, dispatch }) {
    return (
        <div className="start">
            <h2>Welcome to the React Quiz!!</h2>
            <p>{numQUestions} Questions to test your React mastery</p>
            <button className="btn btn-ui" onClick={() => dispatch({ type: 'start' })}>Let's Start</button>
        </div>
    )
}

export default StartScreen