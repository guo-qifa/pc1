/* 搜素框 */
    ;(function(){
        var search=document.getElementById('search');
        var oUl=search.getElementsByTagName('ul')[0];
        var lis=oUl.getElementsByTagName('li');
        var is=oUl.getElementsByTagName('i');
        oUl.onclick=function(e){
                e=e || window.event;
                e.target= e.target || e.srcElement;
                if(e.target.tagName.toLowerCase()=='a'){
                    for( var i=0; i<is.length;i++){
                        is[i].setAttribute('class','');
                    }
                   e.target.previousElementSibling.setAttribute('class','bc');
                }
                if( e.target.tagName.toLowerCase()=='i' ){
                    console.log(0);
                    for( var i=0; i<is.length;i++){
                        is[i].setAttribute('class','');
                    }
                    e.target.setAttribute('class','bc');
                }
            }
    })();
/* 数据绑定  */
    ;(function(){
       var scroll=document.getElementById('scroll');
       var oUl=scroll.getElementsByTagName('ul')[0];
       var Lis=oUl.getElementsByTagName('li');

        getData();
        function getData(){
            var xhr = new XMLHttpRequest();
            xhr.open('get', './data1.txt?_=' + Math.random(), false);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                    console.log(xhr.responseText);
                    window.data = utils.jsonParse(xhr.responseText);
                }
            };
            xhr.send(null);
        }
           (function bindData() {
        if (window.data) {
            var str = "";
             for (var i = 0; i < data.length; i++) {
             var curData = data[i];
             //根据数据类型的不同可以渲染不同的模板
             str += '<li>';
             str += '<i><img src="' + curData.src + '" /></i>';
             str += '<div><a href="">' + curData.title1 + '</a><span class="w">' + curData.title2 + '</span></div>';
             str += '</li>';
             }
            oUl.innerHTML = str;
        }
    })();


    })();
/* pages选项卡 */
    ;(function(){
    var pagesDiv=document.getElementById('pagesDiv');
    var oUl=pagesDiv.getElementsByTagName('ul');

    var navTop=document.getElementById('navTop');
    var lis=navTop.getElementsByTagName('li');

    for (var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
         for (var j=0;j<oUl.length;j++){
           oUl[j].className='';
           lis[j].className='';
         }
            oUl[this.index].className='show';
            lis[this.index].className='click';
      }
    }
})();
/*  遮罩层滚动   */
    ;(function(){
    var content=document.getElementById('content2');
    var imgDiv=document.getElementById('picture');
    var wrap=content.getElementsByClassName('wrap')[0];
    console.dir(wrap);
    var moveUl=wrap.getElementsByClassName('uls')[0];
    imgDiv.onmouseenter=function(e){
     e=e ||window.event;
     e.target= e.target || e.srcElement;
     //e.stopPropagation? e.stopPropagation(): e.cancelBubble=true;

     console.log(e);
     if (e.target.className=='img6'){
     wrap.style.left=-2+'px';
     wrap.style.top=0+'px';
     }
        e.preventDefault()
     };

     imgDiv.onmouseleave=function(e){
     if (e.target.className=='img6'){

     wrap.style.left=-2+'px';
     wrap.style.top=140+'px';
     // e.stopPropagation? e.stopPropagation(): e.cancelBubble=true;
     }
         e.preventDefault()
     }









})();