const zod=require("zod");


// create a scheme and validate it .wheather the user has created a valid schema or not .

// email --> string @gmail.com
// password --> string atleast 5 character
//country --> exactly India 
function validateInput(obj){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(5),
        country:zod.literal("India")
    })
    const response=schema.safeParse(obj)
    console.log(response)
}
validateInput({
    email:"yashrawat682@gmail.com",password:"12345",country:"India"
})