/**
 * Created by IliyanGogov on 9/14/2016.
 */

let container = document.getElementById('container');
var url = "http://telerikacademy.com";

var obj = new XMLHttpRequest();
obj.open("GET", url, true);
obj.setRequestHeader("Content-Type",application/json)
obj.onreadystatechange = function () {
    if (obj.readyState !== XMLHttpRequest.DONE) {
        return;
    }

    console.log(obj.responseText);
    var body=JSON.parse(obj.responseText).data;
}
obj.send();

