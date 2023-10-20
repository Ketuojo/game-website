const bar = document.getElemntById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('nav-links')

if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}
