import { useState } from "react"
import "./App.css"
const game = [
    {
        id:1,
        question:" What are two things you can never eat for breakfast?",
        answer:"Lunch and Dinner"
    },
    {
        id:2,
        question:" What is always coming but never arrives? ",
        answer:"Tomorrow"
    },
    {
        id:3,
        question:"What gets wetter the more it dries?",
        answer:"A towel"
    },
    {
        id:4,
        question:"What can be broken but never held? ",
        answer:"A promise"
    },
    {
        id:5,
        question:"What word is spelled incorrectly in every single dictionary?",
        answer:"ncorrectly"
    },
    {
        id:6,
        question:" What is it that lives if it is fed, and dies if you give it a drink?",
        answer:"Fire"
    },
]

export default function App (){
    return (
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}


function Header(){
    return (
        <div id="headline">
            <h1>Flash Card Game</h1>
        </div>
    )
}
function Body(){

    return(
        <div id="flash-card" >
            {game.map((e)=><BodyElements questionAndanswer = {e} />)}
        </div>
    )
}
function BodyElements({questionAndanswer,}){
    const [initialQuestion,setQuestion]=useState(true)
    const [initialAns,setAnswer] = useState(true)
    function handleEvent(){
        setQuestion(change => !change)
        setAnswer(change => !change)
    }
    return (
        <>
        <div className="flash-card-box" style={{backgroundColor:`${initialQuestion?"white":"#95b0e1"}`}}  onClick={handleEvent} >
            <span className={`${initialQuestion ? "":"Question-true"}`} >{questionAndanswer.question}</span>
            <span className={`${initialAns?"Question-true":""}`}>{questionAndanswer.answer}</span>
        </div>
        </>
    )
}

function Footer (){
    return(
        <div id="foo">
            <span>Matermindy</span>
        </div>
    )
}