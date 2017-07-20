/**
 * Created by GreenElephaantt on 28.05.2016.
 */
'use strict';
function  xhr(url, body) {
  var formattedBody = '';
  for (var i in Object.keys(body)){
    formattedBody += `${Object.keys(body)[i]}=${body[Object.keys(body)[i]]}&`
  }
  formattedBody = formattedBody.slice(0, -1);
  return  fetch(
    url + RandomGet(),
    {method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
      body: formattedBody}
  )
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    if(res.r < 0) throw new Error(`Код Ошибки: ${res.r}`);
  })
  .catch(function (err) {
    //log(err)
    chrome.notifications.create('', {type:'basic',title:'В МП произошла ошибка', message: `В МП произошла критическая ошибка ${err}`, iconUrl: '../img/Icon128.png'})
  })
}