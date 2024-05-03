const programming = ['javascript','java','html']
const frameWork = {'facebook':'react','google':'angular'}

// For of - > Array
for(const proLan of programming){
console.log(proLan)
}

// For in - > Object
for(const frame in frameWork){
console.log(`key ${frame}`)
console.log(`Value ${frameWork[frame]}`)
}
