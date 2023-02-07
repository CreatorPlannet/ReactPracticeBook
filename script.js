//     //ПЕРЕМЕННЫЕ
// const name = "Tari", age = 18, school = "70";
// let first;
// first = 1;
// var giga = bool;


    //ТИПЫ ДАННЫХ 
// let str = 'qwerty';
// let int = '12345';
// let bigint = 10n;
// let bool = true;
// let Null = null;
// let underfind;

// //Оператор typeof возващает нам возвращает какой тип данных;
// console.log(typeof(int));


    //МАССИВЫ 
// let arr = new Array();   //Первый метод созданий массива
// let arr = [];    //Второй метод созданий массива

// let fruits = ['apple', 'banana', 'potatoes'];
// console.log(fruits[0]);

// fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]
// fruits[3] = 'Лимон'; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]

// fruits.shift(); // удаляем первый элемент с начала
// fruits.pop(); // удаляем один элемент с конца
// fruits.push("Ананас"); // добавляем один элемент с конца
// fruits.unshift("Ананас", "Лимон"); // добавляем сразу несколько элементов с конца

// console.log(fruits.length);

// for (let i = 0; i <= fruits.length; i++){
//     console.log( fruits[i] );
// }
// for (let fruit of fruits) {
//     console.log( fruit );
// }
// for (let key in fruits) {
//   console.log( fruits[key] ); 
// }
    
// let arry = [ 'Яблоко', { name: 'Джон', age: 18 }, true, function() { console.log('привет'); } ]; // разные типы значений
// console.log( arry[1].age ); // Джон // получить элемент с индексом 1 (объект) и затем показать его свойство
// arry[3](); // привет // получить элемент с индексом 3 (функция) и выполнить её

    //Методы массивов
    //Мы создали массив people и 5 объектов
// const people = [
//     {name:'Влад', age: 29, budget:4000},
//     {name:'Елена', age: 17, budget:3400},
//     {name:'Игорь', age: 15, budget:50000},
//     {name:'Василиса', age: 24, budget:25000},
//     {name:'Виктория', age: 38, budget:2300},
// ]
//     //Итерация for of
// for (let person of people){
//     console.log(person)
// }
//     //Foreach
// people.forEach(function(person){
//     console.log(person) //Каждый объект    
// })
//     //Упрощение
// people.forEach(person => console.log(person))

//     //Map
// const newpeople = people.map(person => {
//     return `${person.name} ${person.age}`
// })
// console.log(newpeople)

    //Filter
// const adults = people.filter(person => person.age >= 18)
// console.log(adults)




    // //ОБЪЕКТЫ
// let user = new Object(); // синтаксис "конструктор объекта"
// let user = {};  // синтаксис "литерал объекта"

// let user = {     // объект
//     name: "John",  // под ключом "name" хранится значение "John"
//     age: 30,        // под ключом "age" хранится значение 30
//     "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
// };
// // получаем свойства объекта:
// console.log( user.name ); // John
// console.log( user.age ); // 30
// // Значение может быть любого типа. Давайте добавим свойство с логическим значением:
// user.isAdmin = true;
// // Для удаления свойства мы можем использовать оператор delete:
// delete user.age;
// console.log( user ); 


// let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };
// alert( bag.apple ); // 5, если fruit="apple"


// //Для перебора всех свойств объекта используется цикл for..in. Этот цикл отличается от изученного ранее цикла for(;;).
// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };
// for (let key in user) {
//   // ключи
//   console.log( `ключ - ${key}` );  // name, age, isAdmin
//   // значения ключей
//   console.log( `Значение ключя - ${user[key]}` ); // John, 30, true
// }



//     //УСЛОВНЫЕ ВЕТВЛЕНИЕ
// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year < 2015) {
//   alert( 'Это слишком рано...' );
// } else if (year > 2015) {
//   alert( 'Это поздновато' );
// } else {
//   alert( 'Верно!' );
// }

         //Второй метод условий  //Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2.
     //let result = условие ? значение1 : значение2; 
// let age = 230;
// let accessAllowed = (age > 18) ? true : false;
// console.log(accessAllowed)

// let age = prompt('Возраст?', 18);
// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' : 'Какой необычный возраст!';
// console.log( message );


        // //ЦИКЛЫ
    //     //While
// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }

    //     //do...while
// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);

    //     // for
// for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
//   alert(i);
// }

// //Любая часть for может быть пропущена.
// let i = 0; // мы уже имеем объявленную i с присвоенным значением
// for (; i < 3; i++) { // нет необходимости в "начале"
//   alert( i ); // 0, 1, 2
// }

// //Можно убрать и 2 шаг:
// let i = 0;
// for (; i < 3;) {
//   alert( i++ );
// }

// //А можно и вообще убрать всё, получив бесконечный цикл:
// for (;;) {
//     // будет выполняться вечно
//     console.log('Madi sret')
// }




    // //ФУНКЦИЙ
// function doSomething(foo) {
//   //сделать что-нибудь
// }
// const doSomething = function(foo) {
//     //сделать что-нибудь
// }
// const doSomething = function doSomFn(foo) {
//     //сделать что-нибудь
// }
// const doSomething = foo => {
//     //сделать что-нибудь
// }




        //DOM
    //Первый метод событий
// function countRabbits () {
//     for(let i = 0; i <= 5; i++) {
//         alert("Кролик номер: " + i);
//     }
// }

    //Второй метод событий
// const btnF = document.getElementById('elemButtonFirst');
// btnF.addEventListener('click', function  () {
//     console.log('click');
// });
// btnF.removeEventListener('click', super());

// var elemB = document.getElementById("elemButton");
// const timer = setTimeout (function change_color () {
//     console.log('1');
//     elemB.style.color = "red";
// },5000);

    //setTimeout
// var BBJ = document.getElementById('bidJPG');
// var JPG = document.getElementById('imgBBG');
// function BBP () {
//     alert("Warning!!! ERROR!!!")
// }
// setTimeout("BBP ()", 2000);
// BBJ.addEventListener('click', BBP);

    //setTimeout
// const timer = setTimeout(function () {
//     alert('WU-TANG!');
// }, 2000);



        //Размеры и прокрутка элементов 
    // clientWidth и clientHeight получить доступную ширигу и высоту
// const mainElement = document.documentElement;
// const mainElementWidth = mainElement.clientWidth;
// const mainElementHeight = mainElement.clientHeight;
// console.log(mainElementHeight);
// console.log(mainElementWidth); 


        //Получение колл-во прокрученных пикселей
    //Только для чтения 
// const windowScrollTop = window.pageXOffset;
// const windowScrollLeft = window.pageYOffset;
// console.log(windowScrollLeft);
// console.log(windowScrollTop);


        //Управление прокруткой 
    //Метод ScrollBy(x, y) прокручивает страницу относительно ее текущего положения
    // const bmn = document.getElementById('bidJPG');
// function setScrollBy() {
//     window.scrollBy(0, 100);
//     const windowScrollTop = window.pageYOffset;
//     console.log(windowScrollTop);
// }
// bmn.addEventListener('click', setScrollBy);

    //Метод ScrollTo( pageX, pageY) прокручивает страницы на абсолютные кординаты 
// function setScrollTo () {
//     window.scrollTo(0, 50);
//     const windowScrollTop = window.pageYOffset;
//     console.log(windowScrollTop);
// }bmn.addEventListener('click', setScrollTo);

    //Метод ScrollTo( pageX, pageY) + опций 
// function setScrollTo () {
//     window.scrollTo({
//         top: 500,
//         left: 0,
//         behavior: "smooth"  // "auto"
//     });
// }bmn.addEventListener('click', setScrollTo);

    //Метод scrollIntoView(top) прокуричвает страницу, чтобы elem оказался в верхней части окна(true)/ нижней части окна (false)
// function setScrollIntoView (top) {
//     const lessonSelected = document.querySelector('.mouse-parallax');
//     lessonSelected.scrollIntoView(top); //false
// }bmn.addEventListener('click', setScrollIntoView);

    // Метод scrollIntoView(top) + допюпараметры, прокуричвает страницу, чтобы elem оказался в верхней части окна(true)/ нижней части окна (false)
// function setScrollIntoView (top) {
//     const lessonSelected = document.querySelector('.h5');   //скролл до этого объекта
//     lessonSelected.scrollIntoView({
//         //за вертикальное позицианирование "start", "center", "end", "nearest"
//         block: "center",
//         //за горизонтальное положения v "start", "center", "end", "nearest"
//         inline: "nearest", 
//         //"auto"-по умолчание, "smooth"
//         behavior: "smooth",
//     });
// }bmn.addEventListener('click', setScrollIntoView);
// console.log('Hello World!');
// console.log('Rocket!');
// console.log('Secret');

    //Запрет прокрутки
// function closeScroll() {
//     document.body.classList.add('scroll-lock');
//     // document.body.style.overflow = 'hidden';
// } bmn.addEventListener('click', closeScroll);

    //Прокрутка (scroll)
// window.addEventListener('scroll',function (event) {
//     console.log(`${scrollY}px`)
// });



        //СОБЫТИЙ

    /*//Способ 1
const button = document.querySelector('.button');
button.onclick = function () {
    console.log('Hello');
}
*/
    /*//Способ 2
function showConsole () {
    console.log("Hi");
}
button.onclick = showConsole;
*/

    /*//Способ 3  Используем обработчик событий
    //elem.addEventListener(event(событие), handler[,options](функций) );
const button3 = document.querySelector('.button');
button3.addEventListener("click", function (){
    console.log('Клик');
});
button3.addEventListener("click", function () {
    console.log('Клак');
});

//второй способ
const button3 = document.querySelector('.button');
function showConsole () {
    console.log("Клик!");
}button3.addEventListener("click", showConsole);
*/

    /*//removeEventListener удаление событий

const button3 = document.querySelector('.button');
function showConsole () {
    console.log("Клик!");
    button3.removeEventListener("click", showConsole);
}button3.addEventListener("click", showConsole);
*/

    /*//Способ 4 Используем обработчик событий + доп.параметры
    //elem.addEventListener(event(событие), handler[,options](функций), Опций );
const options = {
    "capture": false,
    "once": false,  //если true тогда обработчик будет удален как removeEventListener
    "passive": false    //
}

const button3 = document.querySelector('.button');
function showConsole () {
    console.log("Клик!");
}button3.addEventListener("click", showConsole, options );
*/

    /*//Объект события
const button4 = document.querySelector('.button');
function showConsole (event) {
    console.log(event.type);    //тип событий нажатия\наведение
    console.log(event.target);  //Объект на котором конкретено сработал событие
    console.log(event.currentTarget);   //Объект на котором сработал событие
    console.log(event.clientX);    //Получение кординаты мыши при событий, event.clientY
    console.log(event);     //Все детали объекты
}button4.addEventListener("click", showConsole);
*/



    /*//Всплытие и погружение
const block = document.querySelector('.block')
const blockInner = document.querySelector('.block_inner')
const blockInnerInner = document.querySelector('.block_inner-inner')

block.addEventListener("click", function (event) {
    console.log("1");
});
blockInner.addEventListener("click", function (event) {
    console.log("2");
});
blockInnerInner.addEventListener("click", function (event) {
    console.log("3");
    event.stopPropagation();    //остановка всплытие
});
*/


    /*//Делегирование событий
const lesson = document.querySelector('.lesson');

function showConsole() {
    console.log("Yeah!");
}

lesson.addEventListener("click", function(event) {
    if (event.target.closest(".buttonF")) {
        showConsole();
    }
});
*/




/*   //ClassList
const but = document.querySelector('.but');

but.addEventListener("mouseover", () =>{
    but.classList.add("active");
    console.log("Hello");
});
but.addEventListener("click", () =>{
    but.classList.remove("active");
});
*/

// const p = document.querySelector('.p');
// const img = document.querySelector(".imgPants");

// p.addEventListener("mouseover", () =>{
//     p.classList.add("active");
// });
// p.addEventListener("mouseout", () =>{
//     p.classList.remove("active");
// });
// img.addEventListener("mouseover", () =>{
//     p.classList.add("active");
// });
// img.addEventListener("mouseout", () =>{
//     p.classList.remove("active");
// });























//     //jQuery  фреймворк для JavaScript для написание Js кода быстрее.
// $(document).ready(function(){
//     $('button').on('click', function() {
//         alert('Hello wrld');
//     });
// });




    //JQuery
//Первый метод
$(document).ready(function () {
            // PROJECTS
     //ЭФФЕКТ ПАРАЛАКСА ЗАДНЕГО ФОНА
    const mp = document.querySelector('.mouse-parallax');
    const bg = document.querySelector('.mouse-parallax__bg');
    function parallax(event) {
        bg.style.transform = `translate(${event.clientX / 20}px,${event.clientY / 50}px)`;
    }
    mp.addEventListener('mousemove', parallax);


        //АНИМАЦИЯ ПРИ СКРОЛЛЕ
    function onEntry(enrty) {
        enrty.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            } else {
                change.target.classList.remove('element-show');
            }
        });
    }
    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
        observer.observe(elm);
    }


        //THIS 
    const h4 = document.querySelector('.h4');
    const h5 = document.querySelector('.h5');
    function qwerty() {
        this.style.transform = 'translate(0,100px)';
    }
    h4.addEventListener('click', qwerty);
    h5.addEventListener('click', qwerty);


        // Рандомный задний фон
    // let b = document.getElementById("changeButton");
    // const body = document.querySelector("body");
    // function random_bgColor() {
    //     let x = Math.floor(Math.random() * 255);
    //     let y = Math.floor(Math.random() * 255);
    //     let z = Math.floor(Math.random() * 255);
    //     const bgColor = "rgb(" + x + "," + y + "," + z + ")";
    //     body.style.backgroundColor = bgColor;
    // };
    // b.addEventListener("click", random_bgColor);

        // Рандомный задний фон на JQuery
    $('#changeButton').on('click', function () {
        let x = Math.floor(Math.random() * 255);
        let y = Math.floor(Math.random() * 255);
        let z = Math.floor(Math.random() * 255);
        const bgColor = "rgb(" + x + "," + y + "," + z + ")";
        $('body').css({ 'background': bgColor })
        console.log(bgColor)
    })


    //Кнопка наверх
    let btn = $('.btn-top');
    $(window).on("scroll", function(){
        if($(window).scrollTop() >= 250){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });
    btn.on('click', function(){ //Дальше мы пишем что клик будет скроллить наверх
        $("html, body").animate({scrollTop:0}, 1000)    //Метод animate делает любую анимацию
    });

        //Скилл-бар
        //Метод each это итерация над объектом то есть цикл
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({ //метод find находит любой тег внутри родительского
            width:$(this).attr('data-precent')  //Изменяем ширину как на атрибуте data-precent
        }, 2000)
    })

        //Аккордион
    let accordion = function(){
        let data = $('.accordion').attr("data-accordion");

        $('.accordion-header').on('click', function(){
            if(data === 'close'){
                $('.accordion-body').slideUp();
                if($(this).hasClass('active')){
                    $(this).toggleClass('active');
                }else{
                    $('.accordion-header').removeClass('active');
                }
            }else{
                $(this).toggleClass('active')
            }

            $(this).next('.accordion-body').not(':animated').slideToggle();
        })
    }
    accordion();

        //Калькулятор
    function plus(){
        let num1, num2, result;
        num1 = prompt()
        num1 = parseInt(num1)
        num2 = prompt()
        num2 = parseInt(num2)
        
        result = num1 + num2
        console.log(result)
    }
    function minus(){
        let num1, num2, result;

        num1 = $('.screenqwerty input').text()
        num1 = parseInt(num1)
        num2 = $('.screenqwerty input').text()
        num2 = parseInt(num2)
        
        result = num1 - num2
      
        $('.screenqwerty input').val(result)
    }
    $('.buttons .plus').on('click', plus)
    $('.buttons .minus').on('click', minus)
    $('.buttons').each(function(){
        $('button').on('click', function(e){
            // console.log(e.target.value)
            $('.screenqwerty input').val($(this).val());
        })
    });

        //ToDo Приложение
    const ul = document.querySelector('.todoList')
    const input = document.querySelector('.todoInput')
    const form = document.querySelector('.todoForm')
    const li = document.querySelectorAll('.todoList li')
    li.forEach((item)=>{
        item.addEventListener('click', function(){
            this.classList.toggle('active')
        })
    })
    form.addEventListener('submit', function(event){
        event.preventDefault()
        const valIntup = input.value

        const createEL = document.createElement('li')
        createEL.innerText = valIntup
        ul.append(createEL)

        const createDel = document.createElement('button')
        createDel.innerText = 'Удалить'
        createDel.style['float'] = 'right'
        createDel.style['background'] = 'inherit'
        createDel.style['border'] = '1px solid black'
        createDel.style['padding'] = '0 15px'
        createDel.style['border-radius'] = '10px'
        createDel.style['display'] = 'flex'
        createDel.style['align-items'] = 'center'
        createEL.append(createDel)

        createDel.addEventListener('click', function(){
            this.closest('li').remove()
        })
        input.value = ''  
        input.focus()
    })

    

});

//второй метод
$(function(){
        // Методы text() изменяет его, hide(время в милсек, функция) скрывает эл, show(время в милсек, функция) показат эл
    // let p = $('.h5 p').text('Новый текст для тега p, прикинь я его изменил через метод text()');
    // $('.h5 p').hide(5000);
    // $('.h5 p').show(5000);

        //Цепные  функций, то есть у одного элемента могут быть бесконечное колл-во методов
    // let p= $('.h5 p').hide(2000).show(2000);
    // p.hide(5000);

        //Автоматичские циклы

        //Изменение высоты и ширины 
    // let btn = $('#changeButton').width(200).height(200);
    // console.log(btn);

        //Метод html(), выводит содержимое, можно заменять содержимое элемента разными тегами
    // console.log($('.h5 p').html());

        //fadeOut() и fadeIn() плавное изчезновение и появление объекта
    // $('.h5 p').fadeOut(2000).fadeIn(3000)

        //Прозрачность fadeTo()
    // $('.h5 p').fadeTo(2000, 0.5).fadeTo(1000, 1);

        //slideUp() и slideDown()
    // $('.h5 p').slideUp(2000).slideDown(2000);

        //Метод который будет добавлять и удалять атрибут attr() и removeAttr()
    
        //Добавлять и удалять классы addClass() и removeClass()
    // $('.h5 p').addClass('border').removeClass('border')


    

});

