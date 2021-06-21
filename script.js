function hideSearchBox () {
    document.getElementById('searchbox').classList.toggle('active');
}

function hideAside () {
    document.getElementById('menu').classList.toggle('active');
    document.getElementById('menu').firstChild.nextSibling.classList.toggle('active');
}