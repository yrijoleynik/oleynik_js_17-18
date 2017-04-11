"use strict";
// данные для шаблона
var vopr = {
    nameTest: "Тест по программированию",
    question: [
        "Язык гипертекстовой разметки это...",
        "Самая популярная библиотека в JavaScript это...",
        "Язык визуального оформления вэб-страниц это..."
    ],
    answer: [
        ["HTML", "CSS", "JavaScript"],
        ["React", "jQuery", "Angular"],
        ["Assembler", "Perl", "CSS"]
    ],
    answ: ["chk0-0", "chk1-1", "chk2-2"]
};
// работа с localStorage

localStorage.setItem("vopros", JSON.stringify(vopr));
var voprosy = localStorage.getItem("vopros");
voprosy = JSON.parse(voprosy);
console.log(voprosy);


$(function() {
    //Отрисовка шаблона
    var t = document.getElementById("container");
    t.innerHTML = tmpl("test", voprosy);

    // Обработчик теста
    $('#chk_btn').on('click', function() {
        var numbChk = [];
        var num;
        for (var i = 0; i < voprosy.question.length; i++) {
            for (var j = 0; j < voprosy.answer[i].length; j++) {
                num = 'chk' + i + '-' + j;
                if ($('#chk' + i + '-' + j).prop('checked')) {
                    numbChk.push(num);
                }
            }
        };

        console.log(numbChk);
        //определение правильности теста
        if (arrСompare(voprosy.answ, numbChk)) {
            $('p.ahtung_answer').text('Вы прошли тест!  Попробуёте ещё раз :)');
            $('.rezult').fadeIn(800);
        } else {
            $('p.ahtung_answer').text('Вы не прошли тест! Попробуйте ещё раз :(');
            $('.rezult').fadeIn(800);
        }
    });
    //сброс теста
    $('#answ_btn').on('click', function() {
        $('.rezult').fadeOut(800);
        $('input[type=radio]').each(function() {
            $(this).prop('checked', false)
        });
        console.log($('input:radio'));
    });
    // сравнение массивов
    function arrСompare(a, b) {
        if (a.length != b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
});
