function fact(n) {
    if (n === 0 || n === 1) return 1;
    return n * fact(n - 1);
}

function hcf(a, b) {
    let gcd = 1;
    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0)
            gcd = i;
    }
    return gcd;
}

function operation(op) {
    let a, b, result;

    switch (op) {

        case 'a':
            a = Number(prompt("Enter first number"));
            b = Number(prompt("Enter second number"));
            result = a + b;
            break;

        case 's':
            a = Number(prompt("Enter first number"));
            b = Number(prompt("Enter second number"));
            result = a - b;
            break;

        case 'm':
            a = Number(prompt("Enter first number"));
            b = Number(prompt("Enter second number"));
            result = a * b;
            break;

        case 'd':
            a = Number(prompt("Enter first number"));
            b = Number(prompt("Enter second number"));
            result = (b === 0) ? "Error" : (a / b).toFixed(2);
            break;

        case 'r':
            a = Number(prompt("Enter first number"));
            b = Number(prompt("Enter second number"));
            result = a % b;
            break;

        case 'f':
            a = Number(prompt("Enter number"));
            result = fact(a);
            break;

        case 'n':
            a = Number(prompt("Enter number"));
            result = (a % 2 === 0) ? "Even" : "Odd";
            break;

        case 'h':
            a = Number(prompt("Enter first number"));
            b = Number(prompt("Enter second number"));
            result = hcf(a, b);
            break;

        case 'l':
            a = Number(prompt("Enter first number"));
            b = Number(prompt("Enter second number"));
            result = (a * b) / hcf(a, b);
            break;

        case 'c':
            a = Number(prompt("Enter n"));
            b = Number(prompt("Enter r"));
            result = (b > a) ? "Error" : fact(a) / (fact(b) * fact(a - b));
            break;

        case 'p':
            a = Number(prompt("Enter n"));
            b = Number(prompt("Enter r"));
            result = (b > a) ? "Error" : fact(a) / fact(a - b);
            break;

        default:
            result = "Error";
    }

    document.getElementById("display").value = result;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
