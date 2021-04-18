 

  function nameCopy()
{  
    var name=document.getElementById("form_name").value;
    document.getElementById("nameFiller").value=name;
    document.getElementById("subjectSetter").value="Message from J.Y.S. Foundation website";
    localStorage.setItem('userName',name);    
}

var i = 0;
      function makeProgress() {
        if (i < 100) {
          i = i + 1;
          $(".progress-bar")
            .css("width", i + "%")
            .text(i + " %");
        }
        // Wait for sometime before running this script again
        setTimeout("makeProgress()", 400);
      }

function postSubmit()
{
    document.getElementById("submit").disabled=true;     
    makeProgress();  
}
