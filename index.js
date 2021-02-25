// declare function with 1 param
// The test has an arg called record 
// passing find with a callback func which iterates thru the array to find
// what we are looking for.

const superbowlWin = (potato) => {
    const check = potato.find(element => element.result === "W");
    if (check) {
        return check["year"]
    }
    // return check["year"]   
}



// var foundValue = array.filter(obj=>obj.name==='string 1');

// let obj = arr.find(o => o.name === 'string 1');
