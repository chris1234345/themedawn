const bgVideoID = document.querySelector('.js-background-video').getAttribute('data-video');

const playerOptions = {
    autoplay: 1,
    mute: 1,
    autohide: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    controls: 0,
    disablekb: 1,
    enablejsapi: 1,
    iv_load_policy: 3,
    loop: 1,
    playlist: bgVideoID,
}

const videoOverlay = document.querySelector('js-video-overlay');

let ytPlayer;

function onYoutubeIframeAPIReady() {
    ytPlayer = new ytPlayer.Player('yt-player', {
        width: '1280',
        height: '720',
        videoId: bgVideoID,
        playerVars: playerOptions,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    })
}