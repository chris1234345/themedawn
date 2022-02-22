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