let secondsToShowPopup = 2;
let addressToRedirect = 'https://api.jquery.com';

let popup = (() => {
    let container = document.createElement('div');
    container.className += 'popup';
    container.innerHTML = 'You will be redirect in ' + secondsToShowPopup + ' seconds';
    container.style.border = '3px solid grey';
    container.style.borderRadius = '15px';
    container.style.backgroundColor = 'skyblue';
    container.style.fontSize = '30px';
    container.style.width = '450px';
    container.style.margin = '300px';

    document.body.appendChild(container);

    return container
})();

let hidePopupInCustomTime = ((popup) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(popup.style.display = 'none');
        }, secondsToShowPopup * 1000);
    })
});

let redirect = (()=> {
    window.location = addressToRedirect;
});

hidePopupInCustomTime(popup).then(redirect);
