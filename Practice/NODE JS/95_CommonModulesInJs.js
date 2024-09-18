// two types of Modules
// 1.Common JS Modules
// 2. ES6 Modules 


const hello=() =>{
   console.log("Hello Harry")
}

const ahello = (name)=>{
    console.log("HELLO" + name)
}

module.exports = {hello, ahello};

