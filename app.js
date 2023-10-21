const arr = [
    {src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5cB1g_zMu9zw3g2yrkVtZ2r6IoSVdAU-ZVrY_lS6lb_ogsDqu57NmCQ27iJx53nD30vgUTXWscs/130fx97f/image.png', name: 'AWP | История о драконе', type: 'Тайное', price: '1 500 000'},
    {src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszYfi5H5di5mr-GkvP9JrafwDtV7cAl2uiYpoqt3Q3n-kNkZWCmINTHe1I_YgrV-wS8xb-91p_vuoOJlyUlgXdlZw/130fx97f/image.png', name: 'M4A4 | Посейдон', type: 'Засекреченное', price: '144 997'},
    {src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJh4OEhef9PLXummJW4NE_3uzHpo33jQbtrhFqMGulJYDEdQJqMlzQ_li8yLvrgsfovJidy3tk7D5iuyhx4yPIdw/130fx97f/image.png', name: 'SSG 08 | Жало смерти', type: 'Засекреченное', price: '70 000'},
    {src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q4mFg_L4P7LWk2VS7fp8i-7E-5j0t1mxrxopPnfzdtKVJlNqMFzZ-lbryey50MfvtZzOnyFivSF2tHyOmkDjiB8ZaLdum7XAHhblhUwu/130fx97f/image.png', name: 'USP-S | Цель найдена', type: 'Засекреченное', price: '15000'}
]
const container = document.querySelector('.container')

// document.addEventListener('DOMContentLoaded', () => {
    
//     let defoltCase = document.createElement('img')
//     defoltCase.classList.add('previuCase')
//     defoltCase.src = 'https://images.steamcdn.io/easydrop/cases/top-min.png'
//     defoltCase.style.width = `300px`
//     container.appendChild(defoltCase)


//     let openBtn = document.createElement('button')
//     openBtn.classList.add('open')
//     openBtn.innerText = 'Open'


//     container.appendChild(openBtn)

// })
const dropSection = document.querySelector('.view')
const panorama = document.querySelector('.panorama')
arr.forEach(el => {
    panorama.appendChild(view(el))
})

let invArr = []

let defoltCase = document.createElement('img')
defoltCase.classList.add('previuCase')
defoltCase.src = 'https://images.steamcdn.io/easydrop/cases/top-min.png'
defoltCase.style.width = `300px`
container.appendChild(defoltCase)

let openBtn = document.createElement('button')
openBtn.classList.add('open')
openBtn.innerText = 'Open'

let reOpenBtn = document.createElement('button')
reOpenBtn.classList.add('reOpen')
reOpenBtn.innerText = 'Открыть ещё раз'

let saleDropBtn = document.createElement('button')
saleDropBtn.classList.add('sale')

let btn = document.createElement('div')
btn.classList.add('btn')
btn.appendChild(openBtn)
btn.style.display = "flex"
btn.style.minWidth = '100%'
btn.style.justifyContent = 'center'
btn.style.alignItems = 'center'
container.appendChild(btn)

function randomizer(arr) {
    let width = window.screen.width
    let c = []
    for (let i = 0; i < 101; i++) {
        const randomItem = Math.round(Math.random() * 100)
        c.push(arr[randomItem % arr.length])
    }
    if (width < 750) {
        return {items: c, item: c[c.length - 6]}
    }
    return {items: c, item: c[c.length - 4]}
}

function openCase() {
    openBtn.removeEventListener('click', openCase)
    container.removeChild(defoltCase)
    itemContainer = document.createElement('div')
    itemContainer.classList.add('case')
    let itemsArr = {}
    itemsArr = randomizer(arr)
    let items = document.createElement('div')
    items.classList.add('items')
    itemsArr.items.forEach(item => {
        let el = document.createElement('span')
        el.classList.add('item')
        if (item.type === 'Тайное') {
            el.style.background = 'red'
        } else if (item.type === 'Засекреченное') {
            el.style.background = 'pink'
        }
        let img = document.createElement('img')
        img.src = item.src
        img.alt = item.name
        let title = document.createElement('span')
        title.innerText = item.name
        el.appendChild(img)
        el.appendChild(title)
        items.appendChild(el)
    })
    let cases = document.createElement('div')
    cases.classList.add('caseContainer')
    cases.appendChild(itemContainer)
    let line = document.createElement('div')
    line.classList.add('dropLine')
    itemContainer.appendChild(items)
    itemContainer.appendChild(line)
    container.appendChild(cases)
    container.removeChild(btn)
    btn.removeChild(openBtn)
    btn.appendChild(reOpenBtn)
    btn.appendChild(saleDropBtn)
    let count = 0
    let id
    invArr.push(itemsArr.item)
    let makeItSpin = function() {
        items.style.left = `-${count}px`
        if (count < 12150) {
            id = window.requestAnimationFrame(makeItSpin)
            count += 150
        } else if (count > 12000 && count < 13000) {
            id = window.requestAnimationFrame(makeItSpin)
            count += 100
        } else if (count > 13000 && count < 14000) {
            id = window.requestAnimationFrame(makeItSpin)
            count += 15
        } else if (count > 14000 && count < 14178 + (Math.round(Math.random() * 150))) {
            id = window.requestAnimationFrame(makeItSpin)
            count += 1
        } else {
            setTimeout(() => {
                window.cancelAnimationFrame(id)
                if (document.querySelector('.caseContainer')) {
                    container.removeChild(cases)
                    let is = view(itemsArr.item)
                    is.classList.add('drop')
                    container.appendChild(is)
                    saleDropBtn.innerText = `Продать за ${itemsArr.item.price} Р`
                    container.appendChild(btn)
                    saleDropBtn.onclick = () => {reCase(invArr.length - 1)}
                    reOpenBtn.addEventListener('click', reCase)
                }
            }, 1000)
        }
    }
    id = window.requestAnimationFrame(makeItSpin)
}

function view(el) {
    let item = document.createElement('div')
    item.style.width = '150px'
    item.style.minHeight = '214px'
    item.style.display = 'flex'
    item.style.justifyContent = 'center'
    item.style.alignItems = 'center'
    item.style.flexWrap = 'wrap'
    item.style.margin = '10px'
    item.style.border = '2px solid black'
    item.style.textAlign = 'center'
    item.style.overflowWrap = 'break-word'

    if (el.type === 'Тайное') {
        item.style.background = 'red'
    } else if (el.type === 'Засекреченное') {
        item.style.background = 'pink'
    }


    let itemImg = document.createElement('img')
    itemImg.src = el.src
    itemImg.alt = el.name
    item.appendChild(itemImg)


    let itemTitle = document.createElement('span')
    itemTitle.innerText = el.name
    itemTitle.style.margin = '5px'
    item.appendChild(itemTitle)

    let itemPrice = document.createElement('p')
    itemPrice.innerText = `${el.price} Р`
    item.appendChild(itemPrice)
    return item
}

function reCase(index = null) {
    if (index) {
        invArr = invArr.filter((_, i) => i != index)
    }
    openBtn.addEventListener('click', openCase)
    container.removeChild(document.querySelector('.drop'))
    container.appendChild(defoltCase)
    container.removeChild(btn)
    btn.removeChild(reOpenBtn)
    btn.removeChild(saleDropBtn)
    btn.appendChild(openBtn)
    container.appendChild(btn)
    reOpenBtn.removeEventListener('click', reCase)
    saleDropBtn.removeEventListener('click', reCase)
}

openBtn.addEventListener('click', openCase)


let homeBtn = document.querySelector('.home')
homeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    openBtn.removeEventListener('click', openCase)
    container.innerHTML = ''
    container.appendChild(defoltCase)
    openBtn.addEventListener('click', openCase)
    btn.innerHTML = ''
    btn.appendChild(openBtn)
    container.appendChild(btn)
    dropSection.appendChild(panorama)
})


let invBtn = document.querySelector('.inv')
invBtn.addEventListener('click', (e) => {
    e.preventDefault()
    updateInv()
})
function updateInv() {
    container.innerHTML = ''
    dropSection.innerHTML = ''
    invArr.forEach((el, index) => {
        let item = view(el)
        let saleBtn = document.createElement('button')
        saleBtn.classList.add('saleBtn')
        saleBtn.style.width = '100%'
        saleBtn.addEventListener('click', () => sale(index))
        item.appendChild(saleBtn)
        saleBtn.innerText = `Продать`
        container.appendChild(item)
    })
}
function sale(index) {
    invArr = invArr.filter((_, i) => i != index)
    updateInv()
}

