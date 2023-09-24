$(function () {
    console.log("ready!");
  
    const classEcho = [
    "https://ellarohling.github.io/legendary-winner-delta/",
    "https://ellarohling.github.io/bookish-umbrella-charlie-fall2023/"
  
    ];
  
    
    $.each(classEcho, function (index, value) {
      index+=1
      $("#cardOutput").append(
        '  <div class="col-sm-4 col-lg-3 game-card-col" > <div class="card game-card"> <div class="card-header">Game No. ' +
          index +
          '</div> <div class="card-body">    <a href="' +
          value +
          '">' +
          value +
          "</a>  </div></div> </div>"
      );
    });
    
  
  });