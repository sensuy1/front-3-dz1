// HOMEWORK PART 1

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExpGmail = /^\w+@gmail.com$/

gmailButton.onclick = () => {
    if(regExpGmail.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    }else{
        gmailResult.innerHTML = "NOT OK"
        gmailResult.style.color = "red"
    }
}

// HOMEWORK PART 2

const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')
let position = 0


const runBlock = () => {
    position++

    const childWitch = childBlock.clientWidth
    const parentWitch = parentBlock.clientWidth

    if (childBlock) {

        if (position + childWitch <= parentWitch) {
            childBlock.style.left = position + 'px'
        }

        setTimeout(runBlock, 25)
    }
}
runBlock()


