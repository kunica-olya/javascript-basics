/*function first() {
    // Что - то делаем
    setTimeout(function(){
        console.log(1);
    },500 );
}

function second() {
    console.log(2);
}

first();
second();
*/

//Callback - функция обратного вызова 
// Функция которая вкладывается в качестве параметра и вызывается внутри родительской функции

function learnJS(lang,callback) {
console.log("Я учу " + lang);
callback();
}

learnJS("JavaScript", function(){ // вторая функция которую мы передали как callback выполнилась
                                  // только после выполнения первой функции
console.log("Я прошел 3й урок!");
} 
);


// Сallback функции можно задать и вне вызова функции.Просто передать готовый результат
// Пример:


function done() {
    console.log("Я прошел 3й урок!");
}

function learnEnglish(lang,callback) {
    console.log("Я учу " + lang);
    callback();
}

learnEnglish("Английский", done);




// Объекты


let options = {
    width:1024,
    height:1024,
    name:"test"
}
console.log(options.name); // обратились к свойству объекта  и вывели значение
options.bool = false; // добавили новое свойство(ключ) со значением

options.colors = { // добавили объект
    border:"black",
    bg:"red"
};

delete options.bool; 

console.log(options);


for(let key in options) { // перебрали циклом , но эта запись со строкой неудобная!!
    console.log('Cвойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length); // узнали количество свойств(ключей) в объекте


// Массивы

//let arr = ["first",2,3,"four",5];


 // arr.length - возвращает последний индекс элемента + 1   !!!!

// Методы массива:

/*arr.pop()  удалить последний элемент

arr.push("5")  добавить элемент в конец массива

arr.shift();  удаляет первый элемент массива

arr.unshift("1"); добавляет первый элемент в массив



*/


// Перебор элементов массива циклом for:

/*for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

// методом forEach


/*let arr = ["first",2,3,"four",5];

arr.forEach(function(item,i,mass){
console.log(i + ": " + item + " (массив: " + mass + ')');
});

console.log(arr);


let mass = [1,3,4,6,7];
for(let value of mass){ // получили циклом for of значение
    console.log(value);
}*/


/*let ans = prompt("",""), // когда от пользователя мы получаем какую то строку, например,список товаров
                         // это помещается в переменную ans

arr = []; // массив данных

arr = ans.split(',');
console.log(arr);
*/


//let arr = ['aaww','weee','zzz','ppp'],
// i = arr.join(', '); // этот метод берет каждый элемент массива и соединяет все в одну строку 
    //         через , 
 //   console.log(i);


 let arr = ['aaww','weee','zzz','ppp'],


 i = arr.sort(); // этот метод сортирует все по алфавиту если строки


  //let arr = [1,15,4],
/* i = arr.sort(compareNum) // сортирует цифры
 function compareNum(a,b) {
    return a-b;
 }
  */

  console.log(arr);






  // OOП 

  let soldier = {
      health:400,
      armor:100
  };


  let john = {
      health:100,
  };

  john.__proto__ = soldier;
  console.log(john);
  console.log(john.armor);

