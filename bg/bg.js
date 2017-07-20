/**
 * Created by Root on 07.11.2015.
 */
'use strict';

var user={};
////////////////////////// GetWP //////////////////////////
function getWP ()
{//VK auth
    fetch('https://oauth.vk.com/authorize?client_id=4750286&' +
        'display=page&' +
        'scope=notify,friends,audio,pages,groups,offline&' +
        'redirect_uri=http://wp-game.com/&' +
        'response_type=code&' +
        'v=2.0')
        .then(function(res) {
            return res.text();
        })
        .then(function(res) {//get vk auth src
            var loginVkSrc = res.match(/https?:\/\/login\.vk\.com\/\?act=grant_access.*?https=1/g)[0];
            return fetch(loginVkSrc);
        })
        .then(function (res) {
            return res.text();
        })
        .then(function (res) {
            //get id & key
            var IdAndKey=res.replace(/.*?var id=(.*?); var key='(.*?)'.*/g,'$1+$2').split('+');
            var id=IdAndKey[0];
            var key=IdAndKey[1];
            //save id & key
            user.id=id;
            user.key=key;
            return user;
        })
        .catch( function () {
            console.error('VK AUTH IS FALSE');
        });
}
////////////////////////// GetWork //////////////////////////
