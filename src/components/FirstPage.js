export default function FirstPage(props){

    return(
        <div className="first-page">
            <h1 className="title_first-page">
                Quizzical
            </h1>
            <p className="descrip_first-page">Do you know your trivia?</p>
            <button className="start-quiz" onClick={props.func}>Start Quiz</button>
        </div>
    )
}