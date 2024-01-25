import { useState } from "react";
import "./App.css"


export default function App(){
    const [items,setItems] = useState([])
    function upDATE(item){
        setItems((e)=>[...e,item])
        console.log(items)
   
    }
    function OnDelete(id){
        setItems(items=>items.filter(item =>item.id !== id))
    }
    function OnClear(){
        setItems([])
    }
  


    return (
        <>
        <Header />
        <Form fun = {upDATE} />
        <Body item_d = {items} fun2 = {OnDelete} fun3 = {OnClear} />
        <Footer />
        </>
    )
}
function Header(){
    return (
        <div id="head-container">
            <h1 id="headline">FAR AWAY</h1>
        </div>
    )
}
function Form ({fun}){
    const [description,setDescription]=useState("")
    const[number , setNumber] = useState(1)

    function handleEvent(e){
        e.preventDefault();
        if(!description) return;
        const newItems = {
            description,number,packed:false,id:Date.now()
        }
        // console.log(newItems)
        setDescription("")
        setNumber(1)
        fun(newItems)
  
        
        

    }
    return(
        <form>
            <span>What do you need for your 😍 trip?</span>
            <select onChange={e =>setNumber(e.target.value)} value={number}>
                {Array.from({length:20},(_,i)=>i+1).map(e=><option value={e} key={e}>{e}</option>)}
            </select>
            <input type="text" placeholder="type . . ." value={description} onChange={e =>setDescription(e.target.value)}/>
            <button onClick={handleEvent}>ADD</button>
        </form>
    )
}
function Body({item_d,fun2,fun3}){
    return (
        <div id="Body-container">
            <ul id="my_list">
                {item_d.map((e)=><li>{e.number}.{e.description}
                <button id="x-btn" onClick={()=>fun2(e.id)}>❌</button>
                </li>)}
                
            </ul>
            <button onClick={fun3} id="clear-btn">ClearList</button>
        </div>
    )
}
function Footer(){
    return(
        <footer>
            <span>You have  items on your list, and you already packed X(X%)</span>
        </footer>
    )
}
