const form = document.getElementById('form');

form.onsubmit = submit;

function submit(event) {
    postSubmit();
  }

  function nameCopy()
{  
    var name=document.getElementById("form_name").value;
    document.getElementById("nameFiller").value=name;
    document.getElementById("subjectSetter").value="Message from J.Y.S. Foundation website";
    localStorage.setItem('userName',name);    
}

function postSubmit()
{
    document.getElementById("submit").disabled=true
    document.getElementById('spinnerSubmit').style.visibility="visible";
}
