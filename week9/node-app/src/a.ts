function identity<t>(arg:t):t{
    return arg;
}


const iden1=identity<string>("heelo baby");
const iden2=identity<number>(123);

console.log(iden1.toUpperCase());