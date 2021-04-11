function nameCopy()
{
    var name=document.getElementById("form_name").value;
    document.getElementById("nameFiller").value=name;
    document.getElementById("subjectSetter").value="Message from Github profile.";
    localStorage.setItem('userName',name);    
}