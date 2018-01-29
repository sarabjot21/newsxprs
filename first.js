
console.log('hello script')

var element=document.querySelectorAll('a');
var element1=document.getElementById('sources');
var element2=document.getElementById('categories');
var search;
var channel;
var counter=0;
var total=0;
var articleItems1=new Array();
var flag=0;
var global;

element.forEach(e=>e.onclick=(event)=>{
    var target=event.target;
    console.log(target.innerText);
    global=target.innerText;
    onload1(target.innerText);
})

function processData1(url,response,channel,length){
  console.log("reaching ajax")
  $.ajax({
      url,
      method: "GET",
      error: function() {
        console.log("sorry");
      },
      success: function(data) {
        console.log("success")
        processData(data,response,channel,length);
      }
    });
    console.log("exiting ajax")
  }
 
function onload1(response){
  if(response==='Headlines'){
      url="https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=8ab152ef58164a81ba8c667f2d8cc1de";
      processData1(url,response);
  }

  else if(response==='Sports'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=sports&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url,response);
  }

  else if(response==='Technology'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=technology&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';;
    processData1(url,response);
  }

  else if(response==='Business'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=business&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';;
    processData1(url,response);
  }

  else if(response==='Lifestyle'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=lifestyle&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';;
    processData1(url,response);
  }
 
  else if(response==='Health'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=health&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';;
    processData1(url,response);
  }
  
  else if(response==='Entertainment'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=entertainment&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';;
    processData1(url,response);
  }

  else if(response==='ABC NEWS'){
    url=  'https://newsapi.org/v2/top-headlines?' +
    'sources=abc-news&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url,response);
  }

  else if(response==='BBC NEWS'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url,response);
  }

  else if(response==='BBC SPORTS'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=bbc-sport&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url,response);
  }

  else if(response==='BUZZFEED'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=buzzfeed&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url,response);
  }

  else if(response==='ESPN'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=espn&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url,response);
  }

  else if(response==='BUSINESS INSIDER'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=business-insider&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url,response);
  }

  else if(response==='CNBC'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=cnbc&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url,response);
  }

  else if(response==='CNN'){
    url='https://newsapi.org/v2/top-headlines?' +
    'sources=cnn&' +
    'apiKey=bcd65385124749be9ab8d8df974b8ba1';
    processData1(url,response);
  }
}
  
function processData(data,response,channel,length) {
  console.log("total"+total)
  console.log("reaching process")
  var articleItems = [];
  console.log("TotalResults"+data.totalResults)
  if(data.totalResults!=undefined){
  total=total+data.totalResults;
  }
  articleItems.push(`<div><b>${response}</b></div><br>`)
  
  if(data.totalResults==0&&flag==0&&length==1||data.totalResults==0&&flag==0&&!length)
  {
    document.querySelector('.column.middle').innerHTML=`<button onclick="myfun1()">SEE MORE</button>`;
    flag++;
  }
  else if(data.totalResults==0&&flag>0&&channel&&length==1)
  {
    document.querySelector('.column.middle').innerHTML=`<button onclick="myfun1()">SEE MORE</button>`;
  }
  else if(data.totalResults==0&&flag>0&&!channel&&length==1||data.totalResults==0&&flag>0&&!channel&&!length)
  {
    alert('Search Keyword Not Found')
    onload1('Headlines');
    flag=0
  }
  else{
    console.log(length)
    for (var i = 0; i < data.articles.length; i++) {
      var author = data.articles[i].author;
      var title = data.articles[i].title;
      var description = data.articles[i].description;
      var artUrl = data.articles[i].url;
      var $title =`<a href=${artUrl}>${title}</a><br>`;
  
      console.log(title)
      articleItems.push($title);
      console.log(artUrl);
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
    //document.querySelector('.column.middle').innerHTML=`<h1><div class="column.middle">Author: ${author}  </div ></h1> <a href=${artUrl}><h3><div class="column.middle">${title} </div ></h3></a><div class="column.middle">${description}</div >`;
      }

      if(length>1){

        console.log(counter)
        if(counter!=length){
          console.log($title)
          articleItems1.push($title);
          counter++
        }
console.log(counter)
console.log(length)
console.log('total='+total);
var total1=total;
        if(counter==length&&total==0){
          console.log("hello")
          document.querySelector('.column.middle').innerHTML=`<button onclick="myfun1()">SEE MORE</button>`;
          counter++
        } 
        if(counter==length){
          console.log(articleItems1)
          console.log(total)
          document.querySelector('.column.middle').innerHTML=articleItems1;
          counter=0;
          total=0;
          articleItems1=[];
        }

      }
      else{
        document.querySelector('.column.middle').innerHTML=articleItems;
      }
      search=""
      flag=0;
  }
  }
  
  function myfun()
  {
    console.log('inside search')
    channel="";
    var channelArray=new Array();
    search=document.getElementById('find').value;
    console.log(search)
    var label=document.getElementById('one');
    var label1=document.getElementById('two');
    var label2=document.getElementById('three');
    var label3=document.getElementById('four');
    var label4=document.getElementById('five');
    var label5=document.getElementById('six');
    var label6=document.getElementById('seven');
    var label7=document.getElementById('eight');
    if(label.checked){
      console.log(label.value)
       channel="abc-news"
       channelArray.push(channel)
       label.checked=false;
    }
    if(label1.checked){
      console.log(label1.value)
      channel="bbc-news"
      channelArray.push(channel)
      label1.checked=false;
    }
    if(label2.checked){
      console.log(label2.value)
      channel="bbc-sport"
      channelArray.push(channel)
      label2.checked=false;
    }
    if(label3.checked){
      console.log(label3.value)
      channel="espn"
      channelArray.push(channel)
      label3.checked=false;
    }
    if(label4.checked){
      console.log(label4.value)
      channel="business-insider"
      channelArray.push(channel)
      label4.checked=false;
    }
    if(label5.checked){
      console.log(label5.value)
      channel="buzzfeed"
      channelArray.push(channel)
      label5.checked=false;
    }
    if(label6.checked){
      console.log(label6.value)
      channel="cnbc"
      channelArray.push(channel)
      label6.checked=false;
    }
    if(label7.checked){
      console.log(label7.value)
      channel="cnn"
      channelArray.push(channel)
      label7.checked=false;
    }
    //console.log(label)
    console.log(channel)
    if(search==""){
      alert("Please Enter Data")
    }
    else if(channel==""){
      alert("Please Select A Channel");
    }
    else{
      search= search.split(" ");
      search=search.join('-')
      console.log(search)
      document.getElementById('find').value="";
      channelArray.forEach(e=>{
        url=`https://newsapi.org/v2/everything?sources=${e}&q=${search}&apiKey=bcd65385124749be9ab8d8df974b8ba1`;
        console.log(channelArray.length)
      processData1(url,search,e,channelArray.length);
      })
    }
  }

  var expanded = false;
  
  function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } 
  else {
    checkboxes.style.display = "none";
    expanded = false;}
  }

  function myfun1(){
    if(!search){
      search=global;
    }
    total=0;
    url=`https://newsapi.org/v2/everything?q=${search}&apiKey=bcd65385124749be9ab8d8df974b8ba1`;
    processData1(url,search);
  }