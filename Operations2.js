let myvalue  = function(a,b,c)
{
    d=a+b+c;
    return d;
}
let val = myvalue (5,10,15)

let bool  = function(a)
{
    let jit = Boolean
    if (a > 10)
    {
        jit = true
    }
    else
    {
        jit = false
    }
    return jit
}
let value = bool(15)

console.log("Addition is = "+val)
console.log("num is"+value)

