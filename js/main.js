// Text formatter
/*
const inputField = document.getElementById('input-field');
const outputField = document.getElementById('output-field');
const uppercaseBtn = document.querySelector('.uppercase');
const lowercaseBtn = document.querySelector('.lowercase');
const capitalizeBtn = document.querySelector('.capitalize');
const boldBtn = document.querySelector('.bold');
const italicBtn = document.querySelector('.italic');
const underlineBtn = document.querySelector('.underline');

inputField.addEventListener('keyup', getValue);
uppercaseBtn.addEventListener('click', () => outputField.innerHTML = outputField.innerHTML.toUpperCase());
lowercaseBtn.addEventListener('click', () => outputField.innerHTML = outputField.innerHTML.toLowerCase());
capitalizeBtn.addEventListener('click', () => outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() + outputField.innerHTML.slice(1).toLowerCase());
boldBtn.addEventListener('click', () => {
    if (boldBtn.classList.contains('active')) {
        boldBtn.classList.remove('active');
        outputField.style.fontWeight = '400';
    } else {
        boldBtn.classList.add('active');
        outputField.style.fontWeight = '900';
    }
});
italicBtn.addEventListener('click', () => {
    if (italicBtn.classList.contains('active')) {
        italicBtn.classList.remove('active');
        outputField.style.fontStyle = 'normal';
    } else {
        italicBtn.classList.add('active');
        outputField.style.fontStyle = 'italic';
    }
});
underlineBtn.addEventListener('click', () => {
    if (underlineBtn.classList.contains('active')) {
        underlineBtn.classList.remove('active');
        outputField.style.textDecoration = 'none';
    } else {
        underlineBtn.classList.add('active');
        outputField.style.textDecoration = 'underline';
    }
});

function getValue() {
    outputField.innerHTML = inputField.value;
}
*/



// Text formatter
(function () {
    let textFormatter = {
        inputField: document.getElementById('input-field'),
        outputField: document.getElementById('output-field'),
        uppercaseBtn: document.querySelector('.uppercase'),
        lowercaseBtn: document.querySelector('.lowercase'),
        capitalizeBtn: document.querySelector('.capitalize'),
        boldBtn: document.querySelector('.bold'),
        italicBtn: document.querySelector('.italic'),
        underlineBtn: document.querySelector('.underline'),
        init: () => {
            textFormatter.inputField.addEventListener('keyup', textFormatter.getValue);
            textFormatter.uppercaseBtn.addEventListener('click', () => textFormatter.outputField.innerHTML = textFormatter.outputField.innerHTML.toUpperCase());
            textFormatter.lowercaseBtn.addEventListener('click', () => textFormatter.outputField.innerHTML = textFormatter.outputField.innerHTML.toLowerCase());
            textFormatter.capitalizeBtn.addEventListener('click', () => textFormatter.outputField.innerHTML = textFormatter.outputField.innerHTML.charAt(0).toUpperCase() + textFormatter.outputField.innerHTML.slice(1).toLowerCase());
            textFormatter.boldBtn.addEventListener('click', textFormatter.getBold);
            textFormatter.italicBtn.addEventListener('click', textFormatter.getItalic);
            textFormatter.underlineBtn.addEventListener('click', textFormatter.getUnderline);
        },
        getValue: () => textFormatter.outputField.innerHTML = textFormatter.inputField.value,
        getBold: () => {
            if (textFormatter.boldBtn.classList.contains('active')) {
                textFormatter.boldBtn.classList.remove('active');
                textFormatter.outputField.style.fontWeight = '400';
            } else {
                textFormatter.boldBtn.classList.add('active');
                textFormatter.outputField.style.fontWeight = '900';
            }
        },
        getItalic: () => {
            if (textFormatter.italicBtn.classList.contains('active')) {
                textFormatter.italicBtn.classList.remove('active');
                textFormatter.outputField.style.fontStyle = 'normal';
            } else {
                textFormatter.italicBtn.classList.add('active');
                textFormatter.outputField.style.fontStyle = 'italic';
            }
        },
        getUnderline: () => {
            if (textFormatter.underlineBtn.classList.contains('active')) {
                textFormatter.underlineBtn.classList.remove('active');
                textFormatter.outputField.style.textDecoration = 'none';
            } else {
                textFormatter.underlineBtn.classList.add('active');
                textFormatter.outputField.style.textDecoration = 'underline';
            }
        }
    };
    textFormatter.init();
})()