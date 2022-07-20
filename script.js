// change size of the image on menu page 
let menuImage = document.querySelectorAll('.image-box')
for(let i = 0; i < menuImage.length; i++) {
    let image = menuImage[i];
    image.addEventListener('mouseover', function () {
        image.style.backgroundColor = 'brown'
        image.style.height = '305px'
        image.style.width='380px'
    });
    image.addEventListener('mouseout', function () {
        image.style.backgroundColor = 'rgb(189, 130, 78)'
        image.style.height = '300px'
        image.style.width='370px'
    });

}

// display a message after form is complete and book btn pressed//
const message = document.querySelector('.message');
const bookBtn= document.querySelector('#submit')
function myFunction() {
    message.classList.remove('hidden')
}
//Hamburger menu//
const toggleButtton = document.getElementsByClassName('toggle-button')[0];
const navbar = document.getElementsByClassName('navlinks')[0]
toggleButtton.addEventListener('click', () => {
    navbar.classList.toggle('active')
    
})