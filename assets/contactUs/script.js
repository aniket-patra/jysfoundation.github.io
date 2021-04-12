function nameCopy()
{
    var name=document.getElementById("form_name").value;
    document.getElementById("nameFiller").value=name;
    document.getElementById("subjectSetter").value="Message from J.Y.S. Foundation website";
    localStorage.setItem('userName',name);    
}

const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
    preferredCountries: ["in","us"],
    initialCountry: "auto",
    geoIpLookup: getIp,
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js",
   });

   function getIp(callback) {
    fetch('https://ipinfo.io/json?token=609afb6aa3dbb5', { headers: { 'Accept': 'application/json' }})
      .then((resp) => resp.json())
      .catch(() => {
        return {
          country: 'us',
        };
      })
      .then((resp) => callback(resp.country));
   }