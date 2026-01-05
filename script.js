const p_d20_result = document.getElementById("d20_result");
const d20_input = document.getElementById("d20_input");
const p_d12_result = document.getElementById("d12_result");
const d12_input = document.getElementById("d12_input");
const p_d10_result = document.getElementById("d10_result");
const d10_input = document.getElementById("d10_input");
const p_d8_result = document.getElementById("d8_result");
const d8_input = document.getElementById("d8_input");
const p_d6_result = document.getElementById("d6_result");
const d6_input = document.getElementById("d6_input");
const p_d4_result = document.getElementById("d4_result");
const d4_input = document.getElementById("d4_input");
const btn_generate = document.getElementById("btn_generate");

console.log(d20_input.valueAsNumber);

btn_generate.addEventListener('click', () => {
    p_d20_result.innerText = Math.floor((Math.random() * 20) + 1);
    p_d12_result.innerText = Math.floor((Math.random() * 12) + 1);
    p_d10_result.innerText = Math.floor((Math.random() * 10) + 1);
    p_d8_result.innerText = Math.floor((Math.random() * 8) + 1);
    p_d6_result.innerText = Math.floor((Math.random() * 6) + 1);
    p_d4_result.innerText = Math.floor((Math.random() * 4) + 1);    
});
