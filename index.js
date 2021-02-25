// declare function with 1 param
// The test has an arg called record 
// passing find with a callback func which iterates thru the array to find
// what we are looking for.

const superbowlWin = (potato) => {
    const check = potato.find(element => element.result === "W"); // returns true or false
    if (check) {
        return check["year"]
    }

    // return check["year"] -- alone returns year via [] notation
}

