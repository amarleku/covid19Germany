var request = new XMLHttpRequest()
request.open('GET', 'https://coronavirus-19-api.herokuapp.com/countries/Germany', true)
request.onload = function() {
  var data = JSON.parse(this.response)
  document.getElementById("cases").innerHTML = data.cases;
  document.getElementById("recovered").innerHTML = data.recovered;
  document.getElementById("deaths").innerHTML = data.deaths;
  document.getElementById("todayCases").innerHTML = data.todayCases;
  document.getElementById("critical").innerHTML = data.critical;
}
request.send()
