/**
 * Created by GreenElephaantt on 01.06.2016.
 */
function addOnMessageListener()
{
  chrome.runtime.onMessage.addListener((req, sender, res) => {
    res({
      'collect': true
    });
    for (let i in Object.keys(req)){
      config[Object.keys(req)[i]] = req[Object.keys(req)[i]]
    }
    log(config);
    return router(req)
  });
}
addOnMessageListener();