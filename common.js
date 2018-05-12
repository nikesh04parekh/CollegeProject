function initMap() {
var uluru = {lat: 23.1889, lng: 72.6284};
var map = new google.maps.Map(document.getElementById('map'), {
zoom: 13,
center: uluru
});
var marker = new google.maps.Marker({
position: uluru,
map: map
});
}
var r = document.getElementById('result');
function startConverting () {
  if('webkitSpeechRecognition' in window){
    var speechRecognizer = new webkitSpeechRecognition();
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = true;
    speechRecognizer.lang = 'en-IN';
    speechRecognizer.start();

    var finalTranscripts = '';

    speechRecognizer.onresult = function(event){
      var interimTranscripts = '';
      for(var i = event.resultIndex; i < event.results.length; i++){
        var transcript = event.results[i][0].transcript;
        transcript.replace("\n", "<br>");
        if(event.results[i].isFinal){
          finalTranscripts += transcript;
        }else{
          interimTranscripts += transcript;
        }
      }
      var s = finalTranscripts +  interimTranscripts;
          document.getElementById("speech").value=s;
    };
    speechRecognizer.onerror = function (event) {
    };
  }else{
    r.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
  }
}

function check()
{
  var flag=0;
  var str=document.getElementById("speech").value;
  if(str=="lab")
  {
    document.location="page_building.html#Lab_1";
    document.getElementById("speech").value="";
    flag=1;
  }
  else if(str=="continuing education program")
  {
    document.location="page_building.html#CEP_1";
    document.getElementById("speech").value="";
    flag=1;
  }
  else if(str=="hostel")
  {
    document.location="page_building.html#Hostel_1";
    document.getElementById("speech").value="";
    flag=1;
  }
  else if(str=="resource centre")
  {
    document.location="page_building.html#RC_1";
    document.getElementById("speech").value="";
    flag=1;
  }
  else if(str=="student activity centre")
  {
    document.location="page_building.html#SAC_1";
    document.getElementById("speech").value="";
    flag=1;
  }
  else if(str=="technical event")
  {
    document.location="page_events.html#ifest_1";
    document.getElementById("speech").value="";
    flag=1;
  }
  else if(str=="building")
  {
    document.location="page_building.html";
    document.getElementById("speech").value="";
    flag=1;
  }
  else if(str=="event")
  {
    document.location="page_events.html";
    document.getElementById("speech").value="";
    flag=1;
  }
  else if(str=="home")
  {
    document.location="homepage.html";
    document.getElementById("speech").value="";
    flag=1;
  }
  else if(str=="annual event")
  {
    document.location="page_events.html#Synapse_1";
    document.getElementById("speech").value="";
    flag=1;
  }
  if (flag == 0 && str!="")
  {
    alert("No such information exist!");
    document.getElementById("speech").value="";
  }
}
