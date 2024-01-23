//#1

async function calcSquare(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * num);
        }, 2000)
    });
};

calcSquare(10)
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})

//#2

function sumValue(a, b) {
    return (a + b);
}

async function changedToAsync() {
    let result = await sumValue(5, 6);
    return result;
}

changedToAsync()
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})