const  adFilter = (el) => {
  if(el.nodeType!==1)return;
  if(el.classList.contains('adLinks'))el.parentNode.remove();
  if(el.classList.contains('ad-link'))el.parentNode.remove();
  if(el.getAttribute('id')==='pb_template')el.remove();
  if(el.getAttribute('id')==='age-verification-container')el.remove();
  if(el.getAttribute('id')==='age-verification-wrapper')el.remove();
  if(el.classList.contains('underplayerAd'))el.remove();
  if(el.classList.contains('abovePlayer'))el.remove();
}
const observer = new MutationObserver(function(recordList) {
  recordList.forEach((record)=>{
    if(!record.addedNodes)return;
    adFilter(record.target)
    Array.from(record.addedNodes).forEach(adFilter)

  })
});
observer.observe(document, {subtree:true, childList:true});