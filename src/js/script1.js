"use strict";

$(function() {
    //поиск
    $('.btn').on('click', function() {
        var inputValue = $('.text').val();
        searchImage(inputValue);
    });

    $(".text").keypress(function(e) {
        if (e.keyCode == 13) {
            var inputValue = $('.text').val();
            searchImage(inputValue);
        }
    });

    // обработка JSON
    function searchImage(inputVal) {
        var link = 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=' + inputVal + '&limit=3';
        $.getJSON(link,
            function(data) {
                var ul = document.createElement("ul");
                $.each(data.results, function(i, val) {
                    var li = document.createElement("li");
                    li.innerHTML = '<img src="' + val.url + '" alt="' + val.title + '">';
                    ul.appendChild(li);

                });
                $('.images').html(ul);
            });
    };


});
