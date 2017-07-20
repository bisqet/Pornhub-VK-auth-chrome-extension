/**
 * Created by GreenElephaantt on 01.06.2016.
 */
function working (workId, config)
{
  xhr('http://wp-game.com/api/work/?', {id : user.id, key : user.key})
    .then(function (res) {
      GetWorker(workData, workId);
    })
}
function getWork (workData, workId)
{
  if(workData.work[workId-1].price<=workData.user.energy){
    xhr('http://socforge.com/WP/api/towork/?', { id: user.id, key: user.key, wid:workId })
    //, function (data) {
    if(jQuery.parseJSON(data).r<0){
      setTimeout(function(){working(workId)},60000);
    }
    var profit=jQuery.parseJSON(data);
    console.info(profit.pay);
    GetWork(workId);
  }
}