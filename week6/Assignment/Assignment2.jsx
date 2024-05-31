import { useMemo, useState } from "react";

const words=["Hi","my","name","is","yash","rawat"]
let All_words=[]
for(let i=0;i<1000;i++){
    let sentences="";
    for(let j=0;j<words.length;j++){
        sentences+=words[Math.floor(Math.random()*words.length)]
        sentences+=" "
    }
    All_words.push(sentences)

}



export function Practice(){

    const [sentences,setSentences]=useState(All_words)
    const [filter,setFilter]=useState("")

    const filteredSentences=useMemo(()=>{
       return sentences.filter((x)=>{return x.includes(filter)})
    },[sentences,filter])

    return(
        <>
        <input placeholder="Search" onChange={function(e){
            setFilter(e.target.value)
        }}></input>

        {filteredSentences.map((s)=>{return <div >{s}</div>})}
        
        </>
    )

}