/* highlight.js | https://unpkg.com/highlightjs-badge@0.1.8/highlightjs-badge.min.js */
"use strict";!function(e,o){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?o(e,!0):function(e){if(!e.document)throw new Error("A window with a document is required");return o(e)}:o(e)}("undefined"!=typeof window?window:this,function(y,e){if("boolean"!=typeof o)var o=!1;function t(e){var o,m={templateSelector:"#CodeBadgeTemplate",contentSelector:"body",loadDelay:0,copyIconClass:"fa fa-copy",copyIconContent:"",checkIconClass:"fa fa-check text-success",checkIconContent:"",onBeforeCodeCopied:null};function t(){m.loadDelay?setTimeout(n,loadDelay):n()}function n(){if(!document.querySelector(m.templateSelector)){var e=document.createElement("div");e.innerHTML=function(){for(var e=["<style>","@media print {","   .code-badge { display: none; }","}","    .code-badge-pre {","        position: relative;","    }","    .code-badge {","        display: flex;","        flex-direction: row;","        white-space: normal;","        background: transparent;","        background: #333;","        color: white;","        font-size: 0.875em;","        opacity: 0.5;","        transition: opacity linear 0.5s;","        border-radius: 0 0 0 7px;","        padding: 5px 8px 5px 8px;","        position: absolute;","        right: 0;","        top: 0;","    }","    .code-badge.active {","        opacity: 0.8;","    }","","    .code-badge:hover {","        opacity: .95;","    }","","    .code-badge a,","    .code-badge a:hover {","        text-decoration: none;","    }","","    .code-badge-language {","        margin-right: 10px;","        font-weight: 600;","        color: goldenrod;","    }","    .code-badge-copy-icon {","        font-size: 1.2em;","        cursor: pointer;","        padding: 0 7px;","        margin-top:2;","    }","    .fa.text-success:{ color: limegreen !important }","</style>",'<div id="CodeBadgeTemplate" style="display:none">','    <div class="code-badge">','        <div class="code-badge-language" >{{language}}</div>','        <div  title="Copy to clipboard">','            <i class="{{copyIconClass}} code-badge-copy-icon"></i></i></a>',"        </div>","     </div>","</div>"],o="",t=0;t<e.length;t++)o+=e[t]+"\n";return o}();var o=e.querySelector("style"),t=e.querySelector(m.templateSelector);document.body.appendChild(o),document.body.appendChild(t)}for(var n=document.querySelector(m.templateSelector).innerHTML,c=document.querySelectorAll("pre>code.hljs"),a=0;a<c.length;a++){var r=c[a];if(!r.querySelector(".code-badge")){for(var d="",l=0;l<r.classList.length;l++){var i=r.classList[l];if("language-"===i.substr(0,9)){d=r.classList[l].replace("language-","");break}if("lang-"===i.substr(0,5)){d=r.classList[l].replace("lang-","");break}if(!d)for(var s=0;s<r.classList.length;s++)if("hljs"!=r.classList[s]){d=r.classList[s];break}}"ps"==(d=d?d.toLowerCase():"text")?d="powershell":"cs"==d?d="csharp":"js"==d?d="javascript":"ts"==d?d="typescript":"fox"==d&&(d="foxpro");var p=n.replace("{{language}}",d).replace("{{copyIconClass}}",m.copyIconClass).trim(),u=document.createElement("div");u.innerHTML=p,u=u.querySelector(".code-badge");var g=r.parentElement;g.classList.add("code-badge-pre"),m.copyIconContent&&(u.querySelector(".code-badge-copy-icon").innerText=m.copyIconContent),g.insertBefore(u,r)}}document.querySelector(m.contentSelector).addEventListener("click",function(e){return e.srcElement.classList.contains("code-badge-copy-icon")&&(e.preventDefault(),e.cancelBubble=!0,function(e){var o=e.srcElement.parentElement.parentElement.parentElement,t=o.querySelector("pre>code"),n=t.textContent||t.innerText;m.onBeforeCodeCopied&&(n=m.onBeforeCodeCopied(n,t));var c=document.createElement("textarea");c.value=n.trim(),document.body.appendChild(c),c.style.display="block",y.document.documentMode?c.setSelectionRange(0,c.value.length):c.select();document.execCommand("copy"),document.body.removeChild(c),function(e){var o=m.copyIconClass.split(" "),t=m.checkIconClass.split(" "),n=e.querySelector(".code-badge-copy-icon");n.innerText=m.checkIconContent;for(var c=0;c<o.length;c++)n.classList.remove(o[c]);for(c=0;c<t.length;c++)n.classList.add(t[c]);setTimeout(function(){n.innerText=m.copyIconContent;for(var e=0;e<t.length;e++)n.classList.remove(t[e]);for(e=0;e<o.length;e++)n.classList.add(o[e])},2e3)}(o)}(e)),!1})}o=e,Object.assign(m,o),"loading"==document.readyState?document.addEventListener("DOMContentLoaded",t):t()}y.highlightJsBadge=t,y.module&&y.module.exports&&(y.module.exports.highlightJsBadge=t),o&&t()});

/**
* Highlight.js
*/
document.addEventListener("DOMContentLoaded", (event) => {
    var pres = document.querySelectorAll("pre>code");
    for (var i = 0; i < pres.length; i++) {
        hljs.highlightBlock(pres[i]);
    }
    var options = {
        contentSelector: ".blog-posts",
        loadDelay:0,
        copyIconClass: "fa fa-copy",
        checkIconClass: "fa fa-check u-color-success",
        onBeforeTextCopied: function(text, codeElement) {
            return text;   
        }
    };
    window.highlightJsBadge(options);
});   

/**
* Sticky
*/
$(window).on("load resize", function() {
    if($(window).outerWidth() >= 993){      
        $("#sidebar-left,#PopularPosts1").stick_in_parent({
            parent: "#main-wrapper",
            offset_top: 71
        })
    }
});

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
                            alert('load');
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
* Share Button
*/
$(".button-share").click(function() {

    let url = $(this).data('url');
    let btn_Twitter = $(".link-share-Twitter");
    let btn_Facebook = $(".link-share-Facebook");
    let btn_Whatsapp = $(".link-share-Whatsapp");
    let btn_Telegram = $(".link-share-Telegram");

    btn_Twitter.click(function() {
        window.open('https://twitter.com/intent/tweet?url='+encodeURIComponent(url),'sharer','toolbar=0,status=0,width=626,height=436');
        return false;
    });
    btn_Facebook.click(function() {
        window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(url),'sharer','toolbar=0,status=0,width=626,height=436');
        return false;
    });
    btn_Whatsapp.click(function() {
        window.open('whatsapp://send?text='+encodeURIComponent(url),'sharer','toolbar=0,status=0,width=626,height=436');
        return false;
    });
    btn_Telegram.click(function() {
        window.open('https://t.me/share/url?url='+encodeURIComponent(url),'sharer','toolbar=0,status=0,width=626,height=436');
        return false;
    });

});

/**
* to top
*/
$(window).scroll(function() {
    $(this).scrollTop() > 100 ? $("#toTop").fadeIn() : $("#toTop").fadeOut()
}), $("#toTop").click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 500)
});


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
if (adsense_status == 'true') {
    if(adsense_lazyload_status == 'true') {                            
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