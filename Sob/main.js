// Добавления класса стиля
const checked1 = document.getElementsByName("Sobitie-1");
const checked2 = document.getElementsByName("Sobitie-2");
const checked3 = document.getElementsByName("Sobitie-3");
const checked4 = document.getElementsByName("Sobitie-4");
const checked5 = document.getElementsByName("Sobitie-5");
const checked6 = document.getElementsByName("Sobitie-6");
const checked7 = document.getElementsByName("Sobitie-7");
const checked8 = document.getElementsByName("Sobitie-8");
const c1 = document.getElementById("Sobitie1");
const c2 = document.getElementById("Sobitie2");
const c3 = document.getElementById("Sobitie3");
const c4 = document.getElementById("Sobitie4");
const c5 = document.getElementById("Sobitie5");
const c6 = document.getElementById("Sobitie6");
const c7 = document.getElementById("Sobitie7");
const c8 = document.getElementById("Sobitie8");
function chek1(){
if(rules1.checked){
    c1.style.background = "rgba(92, 98, 107, 0.3)";
    console.log("Выделен");
}
else{
    c1.style.background = "#fff";
    console.log("Не Выделен");
}
}
function chek2(){
    if(rules2.checked){
        c2.style.background = "rgba(92, 98, 107, 0.3)";
        console.log("Выделен");
    }
    else{
        c2.style.background = "#fff";
        console.log("Не Выделен");
    }
}
function chek3(){
    if(rules3.checked){
        c3.style.background = "rgba(92, 98, 107, 0.3)";
        console.log("Выделен");
    }
    else{
        c3.style.background = "#fff";
        console.log("Не Выделен");
    }
}
function chek4(){
    if(rules4.checked){
        c4.style.background = "rgba(92, 98, 107, 0.3)";
        console.log("Выделен");
    }
    else{
        c4.style.background = "#fff";
        console.log("Не Выделен");
    }
}
function chek5(){
    if(rules5.checked){
        c5.style.background = "rgba(92, 98, 107, 0.3)";
        console.log("Выделен");
    }
    else{
        c5.style.background = "#fff";
        console.log("Не Выделен");
    }
}
function chek6(){
    if(rules6.checked){
        c6.style.background = "rgba(92, 98, 107, 0.3)";
        console.log("Выделен");
    }
    else{
        c6.style.background = "#fff";
        console.log("Не Выделен");
    }
}
function chek7(){
    if(rules7.checked){
        c7.style.background = "rgba(92, 98, 107, 0.3)";
        console.log("Выделен");
    }
    else{
        c7.style.background = "#fff";
        console.log("Не Выделен");
    }
}
function chek8(){
    if(rules8.checked){
        c8.style.background = "rgba(92, 98, 107, 0.3)";
        console.log("Выделен");
    }
    else{
        c8.style.background = "#fff";
        console.log("Не Выделен");
    }
}





// Загрузить еще
window.onload = function () {
    var box=document.getElementsByClassName('card__sobitie');
    var btn=document.getElementById('one');
    let ch = document.getElementsByClassName('checkbox');
    for (let i=6;i<box.length;i++) {
        box[i].style.display = "none";
    }

    var countD = 6;
    btn.addEventListener("click", function() {
        var box=document.getElementsByClassName('card__sobitie');
        countD += 6;
        if (countD >= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "block";
            }
        }

    })
    // Начать календарь
    var c = new Cal("divCal");			
    c.showcurr();
  
    // Привязываем кнопки «Следующий» и «Предыдущий»
    getId('btnNext').onclick = function() {
      c.nextMonth();
    };
    getId('btnPrev').onclick = function() {
      c.previousMonth();
    };

}

// Выбрать все
function check()
{
 var check=document.getElementsByClassName('checkbox');
 let cer = document.getElementsByClassName('card__sobitie');
 for(var i=0;i<check.length;i++)
 {
    console.log(i);
  if(check[i].type=='checkbox')
  {
   check[i].checked=true;
  }
 }
 for(var q=0;q<cer.length;q++){
    console.log(q);
    if(check.type=='checkbox'.checked){
        console.log("Привет")
        cer[q].style.background = "rgba(92, 98, 107, 0.3)";
    }
}
 
}

// Импорт
function multi(){
    let chkd = document.querySelectorAll('[type="checkbox"]:checked');
    alert(chkd.length ? [...chkd].map((e => e.name)).join`, ` : `События не выбраны`);
}

//ебаный календарь
var Cal = function(divId) {

    //Сохраняем идентификатор div
    this.divId = divId;
  
    // Дни недели с понедельника
    this.DaysOfWeek = [
      'Пн',
      'Вт',
      'Ср',
      'Чтв',
      'Птн',
      'Суб',
      'Вск'
    ];
  
    // Месяцы начиная с января
    this.Months =['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  
    //Устанавливаем текущий месяц, год
    var d = new Date();
  
    this.currMonth = d.getMonth('9');
    this.currYear = d.getFullYear('22');
    this.currDay = d.getDate('3');
  };
  
  // Переход к следующему месяцу
  Cal.prototype.nextMonth = function() {
    if ( this.currMonth == 11 ) {
      this.currMonth = 0;
      this.currYear = this.currYear + 1;
    }
    else {
      this.currMonth = this.currMonth + 1;
    }
    this.showcurr();
  };
  
  // Переход к предыдущему месяцу
  Cal.prototype.previousMonth = function() {
    if ( this.currMonth == 0 ) {
      this.currMonth = 11;
      this.currYear = this.currYear - 1;
    }
    else {
      this.currMonth = this.currMonth - 1;
    }
    this.showcurr();
  };
  
  // Показать текущий месяц
  Cal.prototype.showcurr = function() {
    this.showMonth(this.currYear, this.currMonth);
  };
  
  
  
  // Показать месяц (год, месяц)
  Cal.prototype.showMonth = function(y, m) {
  
    var d = new Date()
    // Первый день недели в выбранном месяце 
    , firstDayOfMonth = new Date(y, m, 7).getDay()
    // Последний день выбранного месяца
    , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
    // Последний день предыдущего месяца
    , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
  
  
    var html = '<table>';
  
    // Запись выбранного месяца и года
    html += '<thead><tr>';
    html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
    html += '</tr></thead>';
  
  
    // заголовок дней недели
    html += '<tr class="days">';
    for(var i=0; i < this.DaysOfWeek.length;i++) {
      html += '<td>' + this.DaysOfWeek[i] + '</td>';
    }
    html += '</tr>';
  
    // Записываем дни
    var i=1;
    do {
  
      var dow = new Date(y, m, i).getDay();
  
      // Начать новую строку в понедельник
      if ( dow == 1 ) {
        html += '<tr>';
      }
      
      // Если первый день недели не понедельник показать последние дни предидущего месяца
      else if ( i == 1 ) {
        html += '<tr>';
        var k = lastDayOfLastMonth - firstDayOfMonth+1;
        for(var j=0; j < firstDayOfMonth; j++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }
  
      // Записываем текущий день в цикл
      var chk = new Date();
      var chkY = chk.getFullYear();
      var chkM = chk.getMonth();
      if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
        html += '<td class="today">' + i + '</td>';
      } else {
        html += '<td class="normal">' + i + '</td>';
      }
      // закрыть строку в воскресенье
      if ( dow == 0 ) {
        html += '</tr>';
      }
      // Если последний день месяца не воскресенье, показать первые дни следующего месяца
      else if ( i == lastDateOfMonth ) {
        var k=1;
        for(dow; dow < 7; dow++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }
  
      i++;
    }while(i <= lastDateOfMonth);
  
    // Конец таблицы
    html += '</table>';
  
    // Записываем HTML в div
    document.getElementById(this.divId).innerHTML = html;
  };
  
   
  // Получить элемент по id
  function getId(id) {
    return document.getElementById(id);
  }

  function cellClicked() {
    var td = document.querySelectorAll('table td');  
    td.forEach(function(el){
      console.log(el)
      el.addEventListener('click', function(){
        console.log(this.innerHTML)

      })
    })
}
  