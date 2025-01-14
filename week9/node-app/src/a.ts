function identity<t>(arg:t[]):t{
    return arg[0];
}

interface User{
    firstname: string;
}

const iden1=identity<string>(["hello","right","lefy"]);
const iden2=identity<number>([1,23,43,22,4,4]);
const iden3=identity<User>([{firstname:"yash"}])

console.log(iden3)

console.log(iden1.toUpperCase());