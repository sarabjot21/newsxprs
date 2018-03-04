var element=document.querySelectorAll('a');
var search,channel,global,counter=0,total=0,flag=0,c=0,searchFlag=0;
var articleItems1=new Array();
var globalArrayt=new Array();
var globalArray=new Array();

element.forEach(e=>e.onclick=(event)=>{
    var target=event.target;
    global=target.innerText;
    categories(global);
})
 
function categories(response){
   var response1=response.toLowerCase();
    if(response1.search(' ')!=-1){
        response1=response1.split(' ');
        response1=response1.join('-')
        url=`https://newsapi.org/v2/top-headlines?sources=${response1}&apiKey=bcd65385124749be9ab8d8df974b8ba1`;
        fetchData(url,response);
    }
    else{
        url=`https://newsapi.org/v2/top-headlines?q=${response1}&apiKey=bcd65385124749be9ab8d8df974b8ba1`;
        fetchData(url,response);
    }
}

function fetchData(url,response1,channel,length){
  fetch(url)
  .then(response=>response.json())
  .then(data=>processData(data,response1,channel,length))
  .catch(error=>alert(error))
}
  
function processData(data,response,channel,length) {
    var articleItems = [];
    if(data.totalResults!=undefined){
    total=total+data.totalResults;
    }
    
    if(data.totalResults==0&&flag==0&&length==1||data.totalResults==0&&flag==0&&!length)
    {
      alert('Requested Data Couldnot Be Found\nClick See More for more results')
      document.querySelector('.column.middle').innerHTML=`<button onclick="seeMoreButton()">SEE MORE</button>`;
      flag++;
    }
    else if(data.totalResults==0&&flag>0&&channel&&length==1)
    {
      document.querySelector('.column.middle').innerHTML=`<button onclick="seeMoreButton()">SEE MORE</button>`;
    }
    else if(data.totalResults==0&&flag>0&&!channel&&length==1||data.totalResults==0&&flag>0&&!channel&&!length)
    {
      alert('Search Keyword Not Found')
      c=0;
      categories('Headlines');
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
        var image=data.articles[i].urlToImage;
        var $title =`<a href=${artUrl}>${title}</a><br>`;
        var $image=`<img src=${image}></img>`
        globalArrayt.push($title);
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
            document.querySelector('.column.middle').innerHTML=`<button onclick="seeMoreButton()">SEE MORE</button>`;
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
            document.getElementById('find').value="";
            globalArray=[]
          }
        }
        else{
         articleItems=articleItems.join(' ');
          document.querySelector('.column.middle').innerHTML=articleItems;
          total=0;
          flag=0;
          c=0;
          document.getElementById('find').value="";
          globalArray=[]
        }
    }
  }
  
  function findButton()
  {
    search=document.getElementById('find').value;

      var channelArray=new Array();
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
                else{
                    if(channelArray!=0){
                        document.getElementById('find').value="";
                        channelArray.forEach(e=>{
                        url=`https://newsapi.org/v2/everything?sources=${e}&q=${search}&apiKey=bcd65385124749be9ab8d8df974b8ba1`;
                        fetchData(url,search,e,channelArray.length);
                        })
                    }
                    else{
                        globalArrayt.forEach(e=>{
                        if(e.search(search)!=-1){
                          globalArray.push(e);
                        }})
                        if(globalArray.length>0){
                        globalArray=globalArray.join(' ')
                        document.querySelector('.column.middle').innerHTML=globalArray;
                        document.getElementById('find').value="";
                        globalArray=[];
                        }
                        else{
                          if(searchFlag==0){
                          alert('Requested Data couldnot be found on the main page\nPlease select a channel to see more results');        
                          globalArray=[];
                          globalArrayt=[];
                          searchFlag=1;
                          }
                        }
                      }
                }  
  }

  function seeMoreButton(){
    if(!search){
      search=global;
    }
    total=0;
    channel=""
    c=0
    url=`https://newsapi.org/v2/everything?q=${search}&apiKey=bcd65385124749be9ab8d8df974b8ba1`;
    fetchData(url,search);
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
