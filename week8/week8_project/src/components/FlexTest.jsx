export default function Test(){
    return(
        <div >
            <div style={{background:"green", color:"black"}}>
                hey there from the first div
            </div>
            <div className="bg-green-500 text-red-500" >
                Hi there from the second div
            </div>
            <div >
                Hi there from the third div
            </div>
        </div>
    )
}