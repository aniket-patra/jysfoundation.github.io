function myFunc(tag) {
    
    $.getJSON(
        "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true",
        function (data) {
            //console.log(tag.text);
            $.each(data.regionData, function (index) {
                if (`${data.regionData[index].region}` === tag.text)
                {//console.log("Found "+data.regionData[index].region+" at "+index)
                var activeCasesState = `${data.regionData[index].totalInfected}`;
                var activeCasesNewState = `${data.regionData[index].newInfected}`;
                var recoveredState = `${data.regionData[index].recovered}`;
                var recoveredNewState = `${data.regionData[index].newRecovered}`;
                var deathsState = `${data.regionData[index].deceased}`;
                var deathsNewState = `${data.regionData[index].newDeceased}`;
                var stateButton= `${data.regionData[index].region}`;
                 
                $(".activeCasesState").html(activeCasesState);
                $(".activeCasesNewState").html(activeCasesNewState);
                $(".recoveredState").html(recoveredState);
                $(".recoveredNewState").html(recoveredNewState);
                $(".deathsState").html(deathsState);
                $(".deathsNewState").html(deathsNewState);     
                $(".stateButton").html(stateButton)      
            }
              });
        });
  };