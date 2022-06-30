
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




// dimond pyramid
n = 5
string = ""
for (i = 1;i <= n;i++) {
    for (j = n;j > i;j--) {
        string += " "
    }
    for (k = 0;k < i * 2 - 1;k++) {
        string += "*"
    }
    string += "\n"
}
for (i = 1;i <= n - 1;i++) {

    for (j = 0;j < i;j++) {
        string += " "
    }
    for (k = (n - i) * 2 - 1;k > 0;k--) {
        string += "*"
    }
    string += "\n"
}
console.log(string)



// dimond pyramid
n = 5
string = ""
for (i = 1;i <= n * 2;i++) {

    if (i < n) {
        for (j = n;j > i;j--) {
            string += " "
        }
        for (k = 0;k < i * 2 - 1;k++) {
            string += "*"
        }
    } else {
        e = i - n
        for (j = 0;j < e;j++) {
            string += " "
        }
        for (k = (n - e) * 2 - 1;k > 0;k--) {
            string += "*"
        }
    }
    string += "\n"
}

console.log(string)
