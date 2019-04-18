// api ('7281cf70115d4883b2168624646518dd')


// http://api.openweathermap.org/data/2.5/group?id=4440906&appid=7281cf70115d4883b2168624646518dd&units=metric

$("#submitButton").click(function (e) {

$.ajax({
type: "POST",
url: "http://api.openweathermap.org/data/2.5/group?id=4440906,3120501,3128760,5128581,4930956&appid=7281cf70115d4883b2168624646518dd&units=metric",
dataType: "json",

success: function (result, status, xhr) {
res = CreateWeatherJson(result);
$("#weatherTable").append("<thead><tr><th>City Name</th><th>Temperature</th><th>Min Temp</th><th>Max Temp</th></thead></table>");
$('#weatherTable').DataTable({
data: JSON.parse(res),
columns: [
{ data: 'cityName' },
{ data: 'temp' },
{ data: 'tempMin' },
{ data: 'tempMax' },
],
});
},
error: function (xhr, status, error) {
console.log("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
}
});
});
function CreateWeatherJson(json) {
var newJson = "";
for (i = 0; i < json.list.length; i++) {
cityName = json.list[i].name;
temp = json.list[i].main.temp
tempmin = json.list[i].main.temp_min
tempmax = json.list[i].main.temp_max
newJson = newJson + "{";
newJson = newJson + "\"cityName\"" + ": " + "\"" + cityName + "\"" + ","
newJson = newJson + "\"temp\"" + ": " + temp + ","

newJson = newJson + "\"tempMin\"" + ": " + tempmin + ","
newJson = newJson + "\"tempMax\"" + ": " + tempmax
newJson = newJson + "},";
}
return "[" + newJson.slice(0, newJson.length - 1) + "]"
}

