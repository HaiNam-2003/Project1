const numberItems = document.querySelectorAll('.number__item')
// console.log(numberItems)

numberItems.forEach((item,index) => {
    item.onclick = function () {
        this.classList.toggle('active')
        // console.log(this.classList)
    }
})

//////////////////////////////////////
const btnSubmit = document.querySelector('.submit')
// console.log(btnSubmit)
const cartSuccess = document.querySelector('.cart__success')
const cart = document.querySelector('.cart')
const numberSeleted = document.getElementById('number_seleted')

function openCartSuccess() {
    cart.classList.add('close')
    cartSuccess.classList.add('open')
    var count = 0;
    for(item of numberItems) {
        if(item.classList.contains('active')) {
            count++;
            // console.log(count)
        }
    }
    numberSeleted.innerText = count;
}

btnSubmit.addEventListener('click', openCartSuccess);