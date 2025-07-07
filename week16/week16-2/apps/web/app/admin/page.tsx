import { Admin } from "@repo/ui";
import {Inputbox} from "@repo/ui/inputbox"


export default function (){
    return (
        <>
        this is admin page 
        <Admin  name="yash" email="yashRwat@gmail.com" password="1232" role="sde"></Admin>
        <Inputbox></Inputbox>
        </>
    )
}