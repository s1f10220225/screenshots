window.onload = function () {
    let elements = document.getElementsByClassName("col-4");
    for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].remove();
    }

    let elements2 = document.getElementsByClassName("col-8");
    for (let j = elements2.length - 1; j >= 0; j--) {
        elements2[j].classList.replace('col-8', 'col-12');
    }
}

/*
</title>で検索からの
</title>
<script src="js/col-4remove.js"></script>
で置換(このファイルも置換候補になっちゃうから消すか、毎回直すって言ってもコメントアウト部分だからどっちでもいい)

同様に、
</div></body>
で検索し、
<div class='blank'></div><div class='blank'></div><div class='blank'></div></div></body>
で置換
*/