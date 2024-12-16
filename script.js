function task1() {
    let a = parseFloat(document.getElementById('task1Input').value);
    document.getElementById('task1Result').textContent = `Сохраненное число: ${a}`;
    console.log("Значение переменной a:", a);
  }
  
  function task2(op) {
    let num1 = parseFloat(document.getElementById('task2Num1').value);
    let num2 = parseFloat(document.getElementById('task2Num2').value);
    let result;
  
    if (isNaN(num1) || isNaN(num2)) {
      result = "Пожалуйста, введите числа";
    } else {
      switch (op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 === 0 ? "Деление на ноль невозможно" : num1 / num2; break;
      }
    }
    document.getElementById('task2Result').textContent = `Результат: ${result}`;
  }
  
  function task3() {
    let num = parseFloat(prompt("Введите результат (число * 2 + 7):"));
    let guessedNum = (num - 7) / 2;
    document.getElementById('task3Result').textContent = `Вы задумали число: ${guessedNum}`;
  }
  
  function task4() {
    let name = prompt("Введите имя:");
    let birthYear = parseInt(prompt("Введите год рождения:"));
    let age = new Date().getFullYear() - birthYear;
    document.getElementById('task4Result').innerHTML = `${name}: ${age}`;
  }