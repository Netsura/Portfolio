const logoText = document.getElementById('logo')
const bar = document.getElementsByClassName('bar')[0]

console.log(bar);


logoText.addEventListener('click', function () {
    bar.classList.add('visible')
})