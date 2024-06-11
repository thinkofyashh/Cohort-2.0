import { atom, selector, useRecoilValue } from "recoil";

export const countAtom=atom({
    key:"countAtom",
    default:0
})


export const isEven=selector(
    {
        key:"isEven",
        get:({get})=>{
            const counter=get(countAtom)
            return counter%2===0
        }
    }
)