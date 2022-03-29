let a = +prompt('a')
let b = +prompt('b')
let method = prompt('+ - * / % **')

function count() {
    if (method === "+") {
        console.log(a + b);
    } else if (method === "-") {
        console.log(a - b);
    } else if (method === "*") {
        console.log(a * b);
    } else if (method === "/") {
        console.log(a / b);
    } else if (method === "**") {
        console.log(a ** b);
    } else if (method === "%"){
        console.log(a % b);
    } else {console.log('неправильно');}
}
count()

let max =(a,b,c) =>{
    let arr=[a,b,c]
    let max_name=arr.reduce((d,g)=>{
        if(
    d.length>g.length
    )return d
    return g
})
console.log(max_name)
}

max('alex','george','michael')


