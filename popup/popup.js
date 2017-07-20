/**
 * Created by Root on 07.11.2015.
 */
function addListeners() {
  document.getElementById('helpPage').addEventListener('click', openHelpPage);
  var savers = document.getElementsByName('save');
  for (let i = 0 , o = savers.length ; i < o ; i++ ){
    savers[i].addEventListener('click', save);//add listeners to saving params
  }
}
addListeners();


function save(){//save params in bg page
  var params = document.getElementsByName(this.id);//this == button element; id button == name elements that button send
  for (let i = 0, o = params.length;i < o; i++){
    chrome.runtime.sendMessage({[params[i].id]:params[i].value}, recipient);
    log(`save: '${params[i].id}' : '${params[i].value}'`);
  }
}


function recipient(res)
{
  if(!res){
    document.getElementById('tab-content').style.background = 'rgba(255, 0, 0, 0.5)';//Надо вынести в функцию с n ветом
    setTimeout(()=>{document.getElementById('tab-content').style.background = 'white'}, 1000);//Надо вынести в функцию с n ветом
    return console.error(chrome.runtime.lastError);
  }
  document.getElementById('tab-content').style.background = 'rgba(20, 210, 52, 0.15)';//Надо вынести в функцию с n ветом
  setTimeout(()=>{document.getElementById('tab-content').style.background = 'white'}, 1000);//Надо вынести в функцию с n ветом
}


function openHelpPage () {
    chrome.tabs.create({url:'https://github.com/Green-Elephant/wpBot/issues'}, function (tab){
        tab.title='Страница поддержки wpBot';
    })
}


$('#work').click(function (e) {
    e.preventDefault();
    $(this).tab('show')
});
$('#log').click(function (e) {
    e.preventDefault();
    $(this).tab('show')
});
// Кароче, для каждой нужной кнопки вводим параметр и присваиваем ему значение, как ща id ,
// затем данные, которые нужно отправлять тоже как-то привязываем к нужной кнопке,
// пробегаемся циклом по всем событиям и для каждого события навешиваем обработчик и то, что делать в случае клика,
// т.е. создать запрос к БГ и отправить данные
