function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth).padStart(2, "0");
    const day = String(date.getDate).padStart(2, "0");

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    var url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + 'Vd9WAkYUqieoe7823m9baFDddi3miXBM9Q0p05/a8sPogz5vJgAXyj+4kMlaGx1nupb+xWNpbs0ItTU9/bfQFA=='; /*Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
    queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
    queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(`${year}${month}${day}`); /**/
    queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(`${hours}00`); /**/
    queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent(`${lat}`); /**/
    queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent(`${lng}`); /**/
    
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        data.
    });

    url + queryParams
        if (this.readyState == 4) {
            alert('Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText);
        }
    

    

}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
