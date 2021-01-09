// const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const output = document.querySelector("#output")
// const radio = document.querySelectorAll("input[type='radio'")

// console.log({input, submit, output, radio})

{/* <input type="radio" name="effect" id="stars" value="stars">
    <label for="stars">~*~**~*~</label>
    <input type="radio" name="effect" id="dots" value="dots">
    <label for="dots">•°**°•</label>
    <input type="radio" name="effect" id="exes" value="exes">
    <label for="exes">xXXx</label> */}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

});

// radio.forEach(button => {
//     button.addEventListener('change', (event) => {
//         console.log(event)
//     })
// });

submit.addEventListener('click', (event) => {
    let input = document.querySelector("#input").value
    let style = document.querySelector("input[type='radio']:checked").value

    switch (style) {
        case "cases":
            print(cases(input))
            break;
        case "stars":
            print(stars(input))
            break;
        case "dots":
            print(dots(input))
            break;
        case "exes":
            print(exes(input))
            break;
        default:
            break;
    }

})

stars = input => {
    return `~*~* ${input} *~*~`
}

dots = input => {
    return `•°* ${input} *°•`
}

exes = input => {
    return `xX ${input} Xx`
}

cases = input => {
    let letters = input.split("")
    let vowels = ["a","e","i","o","u"]
    let x = []

    letters.forEach(letter => {
        if (vowels.includes(letter)) {
            x.push(letter.toUpperCase())
        } else {
            x.push(letter.toLowerCase())
        }
    })

    return (x.join(""))
}

print = (input) => {
    output.innerHTML = input
}