// function fun1() {
//     var chbox = document.getElementById('one')

// if (chbox.checked) {
//     alert('Чекбокс выбран')
// }else {
//     alert('Чекбокс не выбран!')
// }
// }


function fun2() {
    var radi=document.getElementsByName('r1');
    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            alert('Выбран ' + i + ' элемент')
        }
    }
}