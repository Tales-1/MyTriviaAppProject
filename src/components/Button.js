import React from "react";

export default function Button({option,sel,val,check,correct}){
   

    const [highlight,setHighlight] = React.useState("")
    const [opacity,setOpacity] = React.useState("")

    React.useLayoutEffect(()=>{
        setHighlight(()=>{
            if(!val){
                if(sel===option){
                    return "#D6DBF5"
            } else {return "white"}
            } 
            if((val && check && sel===option) || (val && option === correct)){
                return "green"
            } else if(sel==option && !check){
                return "red"
            }else {return "white"}
    })
    setOpacity(()=>{
        if(val && sel===option && !check){
            return "50%"
        } else {return "100%"}
    }) 
    },
       
    
    [option])
   
    return(
        <>
            <button style={{background:highlight, opacity:opacity} } className="answer">{option}</button>
        </>
    )
}


// function highlightAnswer(e){
//     if(!e.target.closest("button")) return;
//     let nom = e.target.name
//         setIsActive((prev)=>{
//             return {name:nom,active:true}
//         })
//   