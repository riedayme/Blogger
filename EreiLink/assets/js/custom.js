/**
* Crypto.js Safelink.
*/
if ($.urlParam = function(n) {
    var t = new RegExp("[?&]" + n + "=([^&#]*)").exec(window.location.href);
    return null == t ? null : decodeURI(t[1]) || 0
}, null != $.urlParam("from")) {
    var countdown = $("#countdown"),
    nextbutton = $("#nextbutton"),
    tempcode = $.urlParam("from"),
    time = safelink_time;

// remove params
window.history.pushState("", document.title, "/"+window.location.href.substring(window.location.href.indexOf('/')).split("#?")[0]);

function CountDown() {
    document.getElementById("timer").innerHTML = time, (time -= 1) < 0 ? countdown.fadeOut("slow", function() {
        nextbutton.fadeIn()
    }) : window.setTimeout('CountDown()', 1e3)
}
CountDown(), nextbutton.on("click", function() {
    var n = aesCrypto.decrypt(convertstr(tempcode), convertstr("root"));
    window.location.href = n
})
}else {
    $("#outlink,.adspost").remove();
}

/**
* Loadmore Pagination
*/
var state = false;
$("#linkloadmore").hide();
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
            if (state == false) {
                loadscroll();
            };
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    jQuery("#ads-feed-post-source .adspost").appendTo('.ads-feed-target')
}); 

function loadscroll() {
    if (state == false) {
        state = true;
        $("#linkloadmore").show();
        $('#linkloadmore a span').html('<img src="data:image/gif;base64,R0lGODlhKwALAPAAAKrD2AAAACH5BAEKAAEAIf4VTWFkZSBieSBBamF4TG9hZC5pbmZvACH/C05FVFNDQVBFMi4wAwEAAAAsAAAAACsACwAAAjIMjhjLltnYg/PFChveVvPLheA2hlhZoWYnfd6avqcMZy1J14fKLvrEs/k+uCAgMkwVAAAh+QQBCgACACwAAAAAKwALAIFPg6+qw9gAAAAAAAACPRSOKMsSD2FjsZqEwax885hh3veMZJiYn8qhSkNKcBy4B2vNsa3pJA6yAWUUGm9Y8n2Oyk7T4posYlLHrwAAIfkEAQoAAgAsAAAAACsACwCBT4OvqsPYAAAAAAAAAj1UjijLAg9hY6maalvcb+IPBhO3eeF5jKTUoKi6AqYLwutMYzaJ58nO6flSmpisNcwwjEfK6fKZLGJSqK4AACH5BAEKAAIALAAAAAArAAsAgU+Dr6rD2AAAAAAAAAJAVI4oy5bZGJiUugcbfrH6uWVMqDSfRx5RGnQnxa6p+wKxNpu1nY/9suORZENd7eYrSnbIRVMQvGAizhAV+hIUAAA7"/>');
        var link = $("#Blog1_pagination-old").attr('href');
        if (link !== undefined) {
            $.ajax({
                url: link,
                dataType: 'html',
                success: function(data) {
                    var source = $(data).find('.blog-posts').length ? $(data) : $('<div></div>');
                    var el = $(source.find('.blog-posts').html());
                    if( $('#ads-feed-post-source').length ){                        
                        var ads_feed = $(source.find('#ads-feed-post-source').html());                  
                    }
                    setTimeout(function() {
                        $(".blog-posts").append(el);
                        $("#linkloadmore").html(source.find('#Blog1_pagination-old').clone());
                        $("#linkloadmore").hide();
                        new LazyLoad();
                        if( $('#ads-feed-post-source').length && el.length){  
                            $(".ads-feed-target:last").append(ads_feed);
                        }
                    }, 100);
                    state = false;
                }
            })
        } else {
            $("#linkloadmore").remove();
        }
    }
}

/**
* Ads
*/
function kodein_checkelement(e) {
    return document.getElementById(e) ? 1 : 0
}

function kodein_insertelement(e, n, t) {
    var r = n.parentNode;
    "after" == t && r.insertBefore(e, n.nextSibling), "before" == t && r.insertBefore(e, n)
}

function kodein_moveElement(e, n, t, r, i, o) {
    if (!kodein_checkelement(r)) return !1;
    var m = document.getElementById(i),
    d = m.getElementsByTagName(n),
    l = document.getElementById(r);
    if (0 == t || d.length < 0 || d.length < t) return m.insertAdjacentElement(o, l), !1;
    kodein_insertelement(l, d[t -= 1], e)
}

function kodein_MoveByID(e, n) {
    var t = document.createDocumentFragment();
    t.appendChild(document.getElementById(e)), document.getElementById(n).appendChild(t)
}

/**
* Adsense LazyLoad 
*/
if (adsense_status == 1) {
    if(adsense_lazyload_status == 1) {                            
        var lazyAdsense = false;
        window.addEventListener("scroll", function(){
            if ((document.documentElement.scrollTop != 0 && lazyAdsense === false) || (document.body.scrollTop != 0 && lazyAdsense === false)) {
                (function() { var ad = document.createElement('script'); ad.setAttribute('data-ad-client',adsense_client_code); ad.async = true; ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'; var sc = document.getElementsByTagName('script')[0]; sc.parentNode.insertBefore(ad, sc); })();
                lazyAdsense = true;
            }
        }, true);    
    }else {
        var ad = document.createElement('script'); 
        ad.setAttribute('data-ad-client',adsense_client_code); 
        ad.async = true; 
        ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'; 
        var sc = document.getElementsByTagName('script')[0]; 
        sc.parentNode.insertBefore(ad, sc);
    }    
}

/**
* Cookie Notification
*/
window.cookieconsent.initialise({
    "palette": {
        "popup": {
            "background": "#383b75"
        },
        "button": {
            "background": "#f1d600"
        }
    },
    "content": {
        "message": cookie_message,
        "dismiss": cookie_dismiss,
        "link": cookie_link
    }
}); 