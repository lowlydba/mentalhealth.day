
function personalize() {
    const urlParams = new URL(window.location.toLocaleString()).searchParams;
    if (urlParams.has('for')) {
        const whois = urlParams.get('for').concat(' is');

        var title = document.getElementsByTagName('title')[0];
        title.innerHTML = title.innerHTML.replace('I am', whois);

        var postTitle = document.getElementsByClassName('post-title')[0];
        postTitle.innerHTML = postTitle.innerHTML.replace('I am', whois);
    }
}

window.onload = personalize();
