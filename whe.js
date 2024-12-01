let weather=[]








async function fetchData(){
    let place=document.getElementById("input").value
    document.getElementById("input").value=``
      console.log(place);
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=3fea617f5595e1f07694c29f83a62680`)
        const data=await res.json();
        console.log(data);
        let mtemp=(data.main.temp-273.15).toFixed(2);;
        let ftemp=(data.main.feels_like-273.15).toFixed(2);
        let mxtemp=(data.main.temp_max-273.15).toFixed(2);
        let mntemp=(data.main.temp_min-273.15).toFixed(2)
        
        
        
        weather=[...data.weather]
        str=``
        weather.map((data)=>{
            
            str+=`
                <div class="card-body p-4">
      
                  <h4 class="mb-1 sfw-normal">${place}</h4>
                  <p class="mb-2">Current temperature: <strong>${mtemp}°C</strong></p>
                  <p>Feels like: <strong>${ftemp}°C</strong></p>
                  <p>Max: <strong>${mxtemp}°C</strong>, Min: <strong>${mntemp}°C</strong></p>
      
                  <div class="d-flex flex-row align-items-center">
                    <p class="mb-0 me-4">${data.main}</p>
                    <i class="fas fa-cloud fa-3x" style="color: #eee;"></i>
                  </div>
      
                </div>
            `
        })
        document.getElementById("div2").innerHTML=str;
        

    } catch (error) {
        
    }
}