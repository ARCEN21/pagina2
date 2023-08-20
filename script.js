var noButtonClickCount = 0;

function randomizeNoButtonPosition() {
    var noButton = document.getElementById("no-button");
    var x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    var y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
    noButton.style.position = "absolute";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}

function handleYesButtonClick() {
    document.getElementById("image-section").style.display = "flex";
    document.getElementById("buttons-container").style.display = "none";
}

function handleNoButtonClick() {
    noButtonClickCount++;
    if (noButtonClickCount > 2) {
        document.getElementById("video-section").style.display = "flex";
        var video = document.getElementById("video-background");
        video.play();
        document.getElementById("buttons-container").style.display = "none"; // Ocultar botones
    } else {
        randomizeNoButtonPosition();
    }
}
