let a = document.getElementById("a");
let b = document.getElementById("b");
let ans = document.getElementById("ans");
let btn = document.getElementById("btn");
let sel = document.getElementById("op");


const op = {
    "-": "+",
    "+": "*",
    "/": "-",
    "**": "/"
}

op["-"];

const handleCal = () => {
    const random = Math.floor((Math.random() * 10) + 1);
    let sol;

    if (random === 1) {
        sol = eval(`${a.value} ${sel.value} ${b.value}`);
    }
    else {
        sol = eval(`${a.value} ${op[sel.value]} ${b.value}`);
    }

    ans.innerHTML = sol;

}

// console.log(btn)

btn.addEventListener('click', (event) => {
    handleCal();
})
