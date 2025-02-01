import {z} from 'zod' ;



const userSchema=z.object(
    {
        name:z.string(),
        email:z.string().email(),
    }
)


type userSchematype=z.infer<typeof userSchema>;













