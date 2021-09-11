function insert(num) {
    document.form.textview.value =
    document.form.textview.value + num;//вывод в окно нажатой цифры
}
function clean() {
    document.form.textview.value = '';//очищает строку ввода
}
function back() {
    let exp= document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);/*перезаписывает строку и убирает последний сиьвол.Метод substring() позволяет извлечь символы из строки (подстроку) между двумя заданными индексами, или от определенного индекса до конца строки.*/
}
function equal() {
    let exp= document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);/*eval проводит математические действия с числами в строке*/
    }
    
}