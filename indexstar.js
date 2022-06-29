
// left to right
let n = 5
let string = ""
for (let i = 1;i <= n;i++) {
    for (let j = 0;j < i;j++) {
        string += "*"
    }
    string += "\n"
}
console.log(string)



// right to left
let n = 5
let string = ""
for (let i = 1;i <= n;i++) {
    for (let j = 0;j < n - i;j++) {
        string += " "
    }
    for (let k = 0;k < i;k++) {
        string += "*"
    }
    string += "\n"
}
console.log(string)



// downgrade
let n = 5
let string = ""
for (let i = 0;i <= n;i++) {
    // for (let j = 0;j < n - i;j++) {
    //     string += " "
    // }
    for (let k = 0;k < n - i;k++) {
        string += "*"
    }
    string += "\n"
}
console.log(string)



// downgrade right
let n = 5
let string = ""
for (let i = 0;i <= n;i++) {
    for (let j = 0;j < n + i;j++) {
        string += " "
    }
    for (let k = 0;k < n - i;k++) {
        string += "*"
    }
    string += "\n"
}
console.log(string)



// pyramid
let n = 5
let string = ""
for (let i = 1;i <= n;i++) {
    for (let j = 0;j < n - i;j++) {
        string += " "
    }
    // for (let k = 0;k < i;k++)
    for (let k = 0;k < 2 * i - 1;k++) {
        string += "*"
    }
    string += "\n"
}
console.log(string)


//Reversed pyramid
let n = 5
let string = ""
for (let i = 0;i < n;i++) {
    for (let j = 0;j < i;j++) {
        string += " "
    }
    // for (let k = 0;k < i;k++)
    for (let k = 0;k < 2 * (n - i) - 1;k++) {
        string += "*"
    }
    string += "\n"
}
console.log(string)
