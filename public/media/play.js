// document.getElementById('savetheworld').play();
var promise = document.getElementById('savetheworld').play();

if (promise !== undefined) {
    promise.then(_ => {
        // autoplay
    }).catch(err => {
        console.log('err:', err);
    })
}