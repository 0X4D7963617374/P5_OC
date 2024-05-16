function printNumbers(n)
{
    let numbers = '';
    let i;

    for (i = 1; i <= n; i++)
        numbers += i + ' ';

    return numbers.trim();
}

function ButtonClick()
{
    const numberInput = document.getElementById('numberInput');
    const result = document.getElementById('result');
    let n = parseInt(numberInput.value);

    if (!isNaN(n))
        result.innerText = printNumbers(n);
    else
        result.innerText = 'Veuillez entrer un nombre valide.';
}

document.getElementById('printButton').addEventListener('click', ButtonClick);
