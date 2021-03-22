/**
* Crypto.js Safelink.
*/
if ($.urlParam = function(n) {
    var t = new RegExp("[?&]" + n + "=([^&#]*)").exec(window.location.href);
    return null == t ? null : decodeURI(t[1]) || 0
}, null != $.urlParam("from")) {
    var countdown = $("#countdown"),
    nextbutton = $("#nextbutton"),
    time = safelink_time;
    function CountDown() {
        document.getElementById("timer").innerHTML = time, (time -= 1) < 0 ? countdown.fadeOut("slow", function() {
            nextbutton.fadeIn()
        }) : window.setTimeout('CountDown()', 1e3)
    }
    CountDown(), nextbutton.on("click", function() {
        var n = aesCrypto.decrypt(convertstr($.urlParam("from")), convertstr("root"));
        window.location.href = n
    })
}