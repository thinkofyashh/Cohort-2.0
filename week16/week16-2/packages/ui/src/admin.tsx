interface adminInterfaceProps{
    name:string,
    email:string,
    password:string,
    role:string,

}


export function Admin(props:adminInterfaceProps){
    return<>

    <div>
        {props.name}
    </div>
    <div>
        {props.email}
    </div>
    <div>
        {props.password}
    </div>
    <div>
        {props.role}
    </div>
    
    </>
}