let states= [{d:1},{d:2}]

let newStates= states.reduce(function(pv,cv,i){
    pv.push(cv)
    return pv
},[{d:0}])

console.log(newStates)