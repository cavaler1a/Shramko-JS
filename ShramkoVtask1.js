$(document).ready(function(){

  /* ------------------ TASK 1 ------------------*/

  $("#task1Button").click(function() { 
     $("h4.hello").hide();

    /*
      Создаем переменную, в которую записываем данные,
      введенные пользователем в строку ввода с идентификатором
      #clientsNumber.
      При проверке применяем функцию parseInt().
      В случае, если пользователь вводит число, то она вернет
      целую часть введенного числа. Иначе - NaN.
      Функция isNaN() проверяет является ли ее аргумент NaN. 
      Если да, то пользователь не ввел число или ввел не число, 
      и необходимо запросить ввести число.
    */

    let clientsNumber = $("#clientsNumber").val();

    // Результат проверки будем помещать в тег p с классом "result1"
    let resultCard = document.querySelector('p.result1');

    if (isNaN(parseInt(clientsNumber))) {
      //alert("Вы не ввели число");
      resultCard.innerHTML = "Вы не ввели число.";
    } else 
      // Пользователь ввел число. Переходим к сравнению
      if(clientsNumber < 7)
        resultCard.innerHTML = "Введенное Вами число "+clientsNumber+" меньше 7.";
      else if(clientsNumber == 7)
        resultCard.innerHTML = "Ваше число равно 7";
      else{
        resultCard.innerHTML = "Введенное Вами число "+clientsNumber+" больше 7.";
        //Выведем требуемое "Привет"
        $("h4.hello").slideDown();
      }
  });

  /* ------------------ TASK 2 ------------------*/
  $("#task2Button").click(function() {

    let clientsName = $("#clientsName").val();
    let result2Card = document.querySelector("p.result2");
    if(clientsName.length>0){
      if(clientsName == "Вячеслав" || clientsName == "вячеслав")
        result2Card.innerHTML = "Привет, Вячеслав!";
      else
        result2Card.innerHTML = "Нет такого имени.";
    } else result2Card.innerHTML = "Вы не ввели имя.";
  });

  /* ------------------ TASK 3 ------------------*/
  $("#task3Button").click(function() { 
    //let clientsArray = "10,b, -2, 13, 48, a, -2, 13, 48, a";
    //alert(clientsArray.includes(";"));
    let clientsArray = $("#clientsArray").val();
    let result3Card = document.querySelector("p.result3");
    if(clientsArray.length>0){
      /*
        Определяем как пользователь ввел массив: 
        через ";" / через "," / через " ".
        Разбиваем строку на строки по разделителю
      */
      let array;
      if(clientsArray.includes(";"))
         array = clientsArray.split(";");
      else if(clientsArray.includes(","))
         array = clientsArray.split(",");
      else if(clientsArray.includes(" "))
         array = clientsArray.split(" ");

      // Начинаем оформлять результат
      result3Card.innerHTML = "В Вашем массиве [ " + clientsArray +" ] "+ " числа кратные 3 это: ";

      /*
        Создаем счетчик чисел кратных 3, для более аккуратного оформления
        ответа в дальнейшем
      */
      let quantityOfNumbers = 0; 

      /* 
        Пробегаем по каждому элементу массива, используя isNaN()
        проверяем могут ли быть нечисловые значения. Если да, то
        делаем вывод что массив содержит лишние символы.
        В противном случае, перед нами действительно число. 
        Проверяем условие делимости на 3
      */
      for(let x of array){
        // if(isNaN(parseInt(x))){
        //   result3Card.innerHTML ="В Вашем массиве [ " + clientsArray +" ] "+ "содержатся лишние символы.";
        //   break;
        // }else{
          if(parseInt(x) % 3 == 0){
            quantityOfNumbers++;
            result3Card.innerHTML += x+" ";}
        //}
      }
      if(quantityOfNumbers == 0)
        result3Card.innerHTML ="В Вашем массиве [ " + clientsArray +" ] нет чисел кратных 3";
      else if(quantityOfNumbers == array.length)
        result3Card.innerHTML ="В Вашем массиве [ " + clientsArray +" ] все числа кратны 3";
   }else // Если clientsArray.length = 0
    result3Card.innerHTML = "Вы не ввели массив в поле ввода."
  });
});
