var element=document.querySelectorAll('a');
var search,channel,global,counter=0,total=0,flag=0,c=0;
var articleItems1=new Array();

element.forEach(e=>e.onclick=(event)=>{
    var target=event.target;
    global=target.innerText;
    onload1(global);
})

function processData1(url,response,channel,length){
    fetch(url)
    .then(response=>response.json())
    .then(data=>processData(data,response,channel,length))
    .catch(error=>console.log(error))
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
  else if(response==='Economy'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=economy&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';;
    processData1(url,response);
  }
  else if(response==='Health'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=health&'+
   'apiKey=bcd65385124749be9ab8d8df974b8ba1';;
    processData1(url,response);
  }
  else if(response==='Politics'){
    url='https://newsapi.org/v2/top-headlines?' +
    'q=politics&'+
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
  var articleItems = [];
  
  if(data.totalResults!=undefined){
  total=total+data.totalResults;
  }
  
  if(data.totalResults==0&&flag==0&&length==1||data.totalResults==0&&flag==0&&!length)
  {
    alert('Requested Data Couldnot Be Found\nClick See More for more results')
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
    c=0;
    onload1('Headlines');
    flag=0

  }
  else{

    if(c==0){
        articleItems.push(`<div><b>${response}</b></div><br>`)
        c++
      }

    for (var i = 0; i < data.articles.length; i++) {
      var author = data.articles[i].author;
      var title = data.articles[i].title;
      var description = data.articles[i].description;
      var artUrl = data.articles[i].url;
      var $title =`<a href=${artUrl}>${title}</a><br>`;
      articleItems.push($title);
      console.log(artUrl);
     }
     if(length>1){
        if(counter!=length){
          articleItems=articleItems.join(' ');
             articleItems1.push(articleItems);
             counter++
            }
        if(counter==length&&total==0){
          alert('Requested Data Couldnot Be Found\nClick See More for more results')
          document.querySelector('.column.middle').innerHTML=`<button onclick="myfun1()">SEE MORE</button>`;
          flag++;
          counter=0;
          articleItems1=[];
        } 
        if(counter==length){
          articleItems1=articleItems1.join(' ');
          document.querySelector('.column.middle').innerHTML=articleItems1;
          c=0
          total=0;
          articleItems1=[];
          counter=0
          search=""
        }
      }
      else{
       articleItems=articleItems.join(' ');
        document.querySelector('.column.middle').innerHTML=articleItems;
        total=0;
        flag=0;
        c=0;
        search=""
      }
     // search=""
  }
  }
  
  function myfun()
  {
    var channelArray=new Array();
    search=document.getElementById('find').value;
    var label=document.getElementById('one');
    var label1=document.getElementById('two');
    var label2=document.getElementById('three');
    var label3=document.getElementById('four');
    var label4=document.getElementById('five');
    var label5=document.getElementById('six');
    var label6=document.getElementById('seven');
    var label7=document.getElementById('eight');
    if(label.checked){
       channel="abc-news"
       channelArray.push(channel)
       label.checked=false;
    }
    if(label1.checked){
      channel="bbc-news"
      channelArray.push(channel)
      label1.checked=false;
    }
    if(label2.checked){
      channel="bbc-sport"
      channelArray.push(channel)
      label2.checked=false;
    }
    if(label3.checked){
      channel="espn"
      channelArray.push(channel)
      label3.checked=false;
    }
    if(label4.checked){
      channel="business-insider"
      channelArray.push(channel)
      label4.checked=false;
    }
    if(label5.checked){
      channel="buzzfeed"
      channelArray.push(channel)
      label5.checked=false;
    }
    if(label6.checked){
      channel="cnbc"
      channelArray.push(channel)
      label6.checked=false;
    }
    if(label7.checked){
      channel="cnn"
      channelArray.push(channel)
      label7.checked=false;
    }

    if(!search){
      alert("Please Enter Data")
    }
    else if(!channel){
      alert("Please Select A Channel");
    }
    else{
      document.getElementById('find').value="";
      channelArray.forEach(e=>{
      url=`https://newsapi.org/v2/everything?sources=${e}&q=${search}&apiKey=bcd65385124749be9ab8d8df974b8ba1`;
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
    channel=""
    c=0
    url=`https://newsapi.org/v2/everything?q=${search}&apiKey=bcd65385124749be9ab8d8df974b8ba1`;
    processData1(url,search);
  }
