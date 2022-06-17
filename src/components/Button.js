import React from "react";

export default function Button({option,selectedAns,colorAns,check,correct}){
   

    const [highlight,setHighlight] = React.useState("")
    const [opacity,setOpacity] = React.useState("")

    React.useLayoutEffect(()=>{
        setHighlight(()=>{
            if(!colorAns){
                if(selectedAns===option){
                    return "#D6DBF5"
            } else {return "white"}
            } 
            if((colorAns && check && selectedAns===option) || (colorAns && option === correct)){
                return "green"
            } else if(selectedAns===option && !check){
                return "red"
            }else {return "white"}
    })

    setOpacity(()=>{
        if(colorAns && selectedAns===option && !check){
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