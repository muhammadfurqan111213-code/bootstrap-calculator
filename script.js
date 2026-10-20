
    
        let firstNumber = "";
        let operator = "";
        let waitingForSecond = false;

        const display = document.getElementById("display");

        // Add numbers to the display
        function addNumber(number) {
            if (display.value === "Error") {
                clearDisplay();
            }

            if (waitingForSecond) {
                display.value = "";
                waitingForSecond = false;
            }

            if (number === "." && display.value.includes(".")) {
                return;
            }

            if (display.value === "" && number === ".") {
                display.value = "0";
            }

            display.value += number;
        }

        // Select a mathematical operator
        function chooseOperator(selectedOperator) {
            if (display.value === "" || display.value === ".") {
                display.value = "Error";
                return;
            }

            firstNumber = display.value;
            operator = selectedOperator;
            waitingForSecond = true;
        }

        // Perform the calculation
        function calculate() {
            if (
                firstNumber === "" ||
                operator === "" ||
                display.value === "" ||
                display.value === "."
            ) {
                display.value = "Error";
                return;
            }

            const num1 = Number(firstNumber);
            const num2 = Number(display.value);
            let result;

            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;

                case "-":
                    result = num1 - num2;
                    break;

                case "*":
                    result = num1 * num2;
                    break;

                case "/":
                    if (num2 === 0) {
                        display.value = "Error";
                        resetCalculation();
                        return;
                    }
                    result = num1 / num2;
                    break;
            }

            if (!Number.isFinite(result)) {
                display.value = "Error";
            } else {
                display.value = String(Number(result.toPrecision(10)));
            }

            resetCalculation();
            waitingForSecond = true;
        }

        // Reset calculation variables
        function resetCalculation() {
            firstNumber = "";
            operator = "";
        }

        // Clear the calculator
        function clearDisplay() {
            display.value = "";
            firstNumber = "";
            operator = "";
            waitingForSecond = false;
        }
    