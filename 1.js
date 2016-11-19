;(function(){
    var scroll=document.getElementById('scroll');
    var oUl=scroll.getElementsByTagName('ul')[0];
    var Lis=oUl.getElementsByTagName('li');
    getData();
    function getData(){
        var xhr = new XMLHttpRequest();
        xhr.open('get', './data.txt?_=' + Math.random(), false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                console.log(xhr.responseText);
                window.data = utils.jsonParse(xhr.responseText);
            }
        };
        xhr.send(null);
    }
    console.log(data);

})();
