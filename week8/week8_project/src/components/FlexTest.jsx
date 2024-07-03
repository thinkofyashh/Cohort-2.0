export default function Test(){
    return(
        <div className="grid grid-cols-12">
            <div className="col-span-12 md: col-span-5 ">
                hey there from the first div
            </div>
            <div className="col-span-12 md: col-span-5">
                Hi there from the second div
            </div>
            <div className="col-span-12 md: col-span-2">
                Hi there from the third div
            </div>
        </div>
    )
}