/**
 * Created by Root on 07.11.2015.
 */
function inject () {
    var injection=document.createElement('script');
    injection.src=chrome.extension.getURL('content/injection.js');
    document.body.appendChild(injection);
}
inject();