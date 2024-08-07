const output = document.querySelector('#output')
const buttons = document.querySelectorAll('.too-btn')
const btnBold = document.querySelector('.btn-bold')
const btnItalic = document.querySelector('.btn-italic')
const btnUnderline = document.querySelector('.btn-underline')


btnBold.addEventListener('click', () => {
    output.classList.toggle('bold')
})
btnItalic.addEventListener('click', () => {
    output.classList.toggle('italic')
})
btnUnderline.addEventListener('click', () => {
    output.classList.toggle('underline')
})


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let cmd = btn.dataset['command']
        if (cmd === 'createLink') {
            let url = prompt('Enter the link here: https:\/\/')
            document.execCommand(cmd, false, url)
        }

        else {
            document.execCommand(cmd, false, null)
        }
    })
})