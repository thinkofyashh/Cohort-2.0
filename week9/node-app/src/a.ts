function identity<t>(arg:t[]):t{
    return arg[0];
}


const iden1=identity<string>(["hello","right","lefy"]);
const iden2=identity<number>([1,23,43,22,4,4]);

console.log(iden1.toUpperCase());