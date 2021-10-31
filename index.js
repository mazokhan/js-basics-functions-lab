function distanceFromHqInBlocks(){
//returns the number of blocks in a given value
    if (n > 42) {
        return (n-42);
}
        else {
        (42 - n);
    }
}

function distanceFromHqInFeet(n){
    return distanceFromHqInFeet(n) = n*264;
}

function distanceTravelledInFeet(a,b){
    if (a > b) return (a-b) *264;
    else return (b - a) *264;
}

function calculatesFarePrice(a, b){
    const distance = distanceTravelledInFeet(a, b)
    if (distance > 400 && distance <= 2000) return (distance - 400) * 0.02
    else if (distance < 400) return 0
    else if (distance > 2000 && distance < 2500) return 25
    else if (distance > 2500) return `cannot travel that far`
}
