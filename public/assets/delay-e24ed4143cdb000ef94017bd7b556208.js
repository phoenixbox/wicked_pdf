setTimeout(function () {
//  debugger
  var canvas = document.getElementById("canvas");
  var img = canvas.toDataURL("image/png");
  var oReq = new XMLHttpRequest();
  oReq.open("POST", "/arrays");
  oReq.send(data);
  oReq.onload = function(oEvent) {
    if (oReq.status == 200) {
      console.log("Uploaded");
      window.location.href = 'http://localhost:3000/articles.pdf';
    } else {
      console.log("Error " + oReq.status + " occurred uploading your file.");
    }
  };
//  $.ajax({
//    type: 'POST',
//    url: '',
//    dataType: 'text',
//    success: function(data){
//      window.location.href = 'http://localhost:3000/articles.pdf';
//    }
//  });
}, 600);
