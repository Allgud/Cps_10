import '../scss/style.scss'

/*Modal*/

let buttonCall = document.querySelectorAll('.btn--call')
let buttonMessage = document.querySelectorAll('.btn--chat')
let modalCall = document.getElementById('modal--call')
let modalMessage = document.getElementById('modal--message')
let closeBtn = document.querySelectorAll('.btn--close')
let modals = document.querySelectorAll('.modal')

/**/

let menuButton = document.querySelector('.btn--burger')
let menu = document.getElementsByTagName('aside')
let main = document.getElementsByTagName('main')
let currentWidth = window.screen.width;

window.addEventListener('resize', () => {
    currentWidth = window.screen.width
})

buttonCall.forEach( item => {
    item.addEventListener('click', () => {
        modalCall.classList.add('modal--open')
    })
})

buttonMessage.forEach( item => {
    item.addEventListener('click', () => {
        modalMessage.classList.add('modal--open')
    })
})

closeBtn.forEach( item => {
    item.addEventListener('click', () => {
      if(currentWidth < 1120){
        menu[0].classList.remove('menu--open')
        main[0].classList.remove('main--swing')
      }
        modals.forEach(el => {
            el.classList.remove('modal--open')
        })
    })
})

/*Menu */

menuButton.addEventListener('click', () => {
    menu[0].classList.add('menu--open')
    main[0].classList.add('main--swing')
})



/*Dropdown */
let brandsDropdown = document.querySelector('.drop--brands')
let typesDropdown = document.querySelector('.drop--types')
let brands = document.querySelector('.brands')
let invisiblesBrands = brands.querySelectorAll('.invisible')
let types = document.querySelector('.types')
let invisibleTypes = types.querySelectorAll('.invisible')
let dropSection = document.querySelector('.service__content__dropdown')
let textDropdown = dropSection.getElementsByTagName('span')
let invisibleText = document.querySelector('.service__content__text--invisible')

brandsDropdown.addEventListener('click', () => {
    for(let i = 0; i < invisiblesBrands.length; i++){
        invisiblesBrands[i].classList.toggle('invisible')
    }
    let img = brandsDropdown.getElementsByTagName('img')
    img[0].classList.toggle('img--rotate')
})

typesDropdown.addEventListener('click', () => {
    for(let i = 0; i < invisibleTypes.length; i++){
        invisibleTypes[i].classList.toggle('invisible')
    }
    let img = typesDropdown.getElementsByTagName('img')
    img[0].classList.toggle('img--rotate')
})

textDropdown[0].addEventListener('click', () => {
    invisibleText.classList.toggle('service__content__text--invisible')
    let img = dropSection.getElementsByTagName('img')
    img[0].classList.toggle('img--rotate')
})
















