// Get elements
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let darkModeButton = document.getElementById('darkModeToggle');

let string = "";
let arr = Array.from(buttons);
const isValidInput = (str) => {
    return !/[\+\-\*\/]{2,}/.test(str);
};

// Dark Mode Toggle
let darkMode = false;
darkModeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode');
});

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        if (e.target.id === "darkModeToggle") return;
        let audio = new Audio('click.mp3'); 
        audio.play();

        if (value == '=') {
            try {
                string = eval(string).toFixed(5);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (value == 'AC') {
            string = "";
            input.value = string;
        }
        else if (value == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            let tempString = string + value;
            if (isValidInput(tempString)) {
                string = tempString;
                input.value = string;
            }
        }
    });
});

document.addEventListener("keydown", (event) => {
    let key = event.key;
    
    if (!isNaN(key) || "+-*/.".includes(key)) {
        string += key;
        input.value = string;
    }
    else if (key === "Enter") {
        try {
            string = eval(string).toFixed(5);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    }
    else if (key === "Backspace") {
        string = string.slice(0, -1);
        input.value = string;
    }
    else if (key === "Escape") {
        string = "";
        input.value = string;
    }
});
