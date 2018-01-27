console.log('hello script')

var element=document.querySelectorAll('a');
var element1=document.getElementById('sources');
var element2=document.getElementById('categories');

element.forEach(e=>e.onclick=(event)=>{
    var target=event.target;
    console.log(target.innerText);
    loadDoc();
})
element2.onclick=()=>loadDoc();

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML =this.responseText.json()
        //+this.responseText.articles[0].description);
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
  }
  //https://maps.googleapis.com/maps/api/geocode/json?address=lpu