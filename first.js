console.log('hello script')

var element=document.querySelectorAll('a');
var element1=document.getElementById('sources');
var element2=document.getElementById('categories');

element.forEach(e=>e.onclick=(event)=>{
    var target=event.target;
    console.log(target.innerText);
    onload1(target.innerText);
})
//element2.onclick=()=>onload1();

/*function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let c=this.responseText.json()
        document.getElementById("content").innerHTML =data.articles[0].description;
      }
      else{
        document.getElementById("content").innerHTML = "Sorry for incovenience";
      }
    };
    var url='https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    xhttp.open("GET",url, true);
    xhttp.send();
  }*/
  //https://maps.googleapis.com/maps/api/geocode/json?address=lpu

  function processData1(url){
    $.ajax({
      url,
      method: "GET",
      error: function() {
        console.log("sorry");
      },
      success: function(data) {
        processData(data);
      }
    });
  }

  function onload1(response){


    if(response==='Headlines'){
      url="https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=8ab152ef58164a81ba8c667f2d8cc1de";
      processData1(url);
  }

  if(response==='Sports'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=sports&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url);
  }

  if(response==='Technology'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=technology&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';;
    processData1(url);
  }

  if(response==='Business'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=business&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';;
    processData1(url);
  }

  if(response==='Lifestyle'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=lifestyle&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';;
    processData1(url);
  }
  if(response==='Health'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=health&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';;
    processData1(url);
  }
<<<<<<< HEAD

=======

>>>>>>> ca0ffccfa84e1d8b34a175d7cc52babd410f7fb2
  if(response==='Entertainment'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=entertainment&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';;
    processData1(url);
  }

  if(response==='ABC NEWS'){
    url=  'https://newsapi.org/v2/top-headlines?' +
    'sources=abc-news&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url);
  }

  if(response==='BBC NEWS'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url);
  }

  if(response==='BBC SPORTS'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=bbc-sport&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url);
  }

  if(response==='BUZZFEED'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=buzzfeed&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url);
  }

  if(response==='ESPN'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=espn&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url);
  }

  if(response==='BUSINESS INSIDER'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=business-insider&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url);
  }

  if(response==='CNBC'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=cnbc&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url);
  }

  if(response==='CNN'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=cnn&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url);
<<<<<<< HEAD
  }
}
 /* $.ajax({
    url:
      "https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=8ab152ef58164a81ba8c667f2d8cc1de",
    method: "GET",
    error: function() {
      console.log("sorry");
    },
    success: function(data) {
      processData(data);
    }
  });*/

  function processData(data) {

    var articleItems = [];

    for (var i = 0; i < data.articles.length; i++) {
      var author = data.articles[i].author;
      var title = data.articles[i].title;
      var description = data.articles[i].description;
      var artUrl = data.articles[i].url;

    /*  var $author = $('<div class="column.middle">Author: ' + author + "</div >");
      var $title = $(
        "<a href=" + artUrl + '><div class="column.middle">' + title + "</div ></a>"
      );
      var $description = $(
        "<a href=" +
          artUrl +
          '><div class="column.middle">' +
          description +
          "</div ></a>"
      );
  //$(".column.middle").append("");

  $(".column.middle").append($author, $title, $description);*/

  document.querySelector('.column.middle').innerHTML=`<div class="column.middle">Author: ${author}  </div > <a href=${artUrl}><div class="column.middle">${title} </div ></a><a href=${artUrl} ><div class="column.middle">
  ${description}</div ></a>`;
      console.log(artUrl);
    }
  }
=======
  }
}
 /* $.ajax({
    url:
      "https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=8ab152ef58164a81ba8c667f2d8cc1de",
    method: "GET",
    error: function() {
      console.log("sorry");
    },
    success: function(data) {
      processData(data);
    }
  });*/

  function processData(data) {

    var articleItems = [];

    for (var i = 0; i < data.articles.length; i++) {
      var author = data.articles[i].author;
      var title = data.articles[i].title;
      var description = data.articles[i].description;
      var artUrl = data.articles[i].url;

    /*  var $author = $('<div class="column.middle">Author: ' + author + "</div >");
      var $title = $(
        "<a href=" + artUrl + '><div class="column.middle">' + title + "</div ></a>"
      );
      var $description = $(
        "<a href=" +
          artUrl +
          '><div class="column.middle">' +
          description +
          "</div ></a>"
      );
  //$(".column.middle").append("");

  $(".column.middle").append($author, $title, $description);*/

  document.querySelector('.column.middle').innerHTML=`<div class="column.middle">Author: ${author}  </div > <a href=${artUrl}><div class="column.middle">${title} </div ></a><a href=${artUrl} ><div class="column.middle">
  ${description}</div ></a>`;
      console.log(artUrl);
    }
  }
>>>>>>> ca0ffccfa84e1d8b34a175d7cc52babd410f7fb2
