const buttonTheme = document.getElementById('sun-moon')
const rootStyle = document.documentElement.style
const nextRegistre = document.getElementById('next')
const backRegistre = document.getElementById('back')
const firstRegistre = document.getElementById('firstRegistre')
const secondRegistre = document.getElementById('secondRegistre')
const progressBar = document.getElementById('progressbar').children
const darkTheme = {
    "--bg-color": "#192229",
    "--bg-color-form": "#212e36",
    "--bg-color-input-submit": "rgba(109, 99, 255,1)",
    "--bg-color-input": "#e9e9e9",
    "--font-color": "rgb(239, 243, 245)",
    "--box-shadow-color": "rgba(255, 255, 255, 0.1)",
    "--border-color": "#DDD",
    "--font-color-label": "rgb(160, 167, 172)",
    "--bg-progges": "#f5f5f5",
    "--font-color-progges": "#3f3f4b",
    "--bg-progges-line": "#fcfcfc",
    "--bg-color-progges-active": "#ddffdd",
    "--color-primary": "#A5ABB0",
    "--color-secundary": "#f5f8f8",
    "--color-third": "#3f3f4c",
    "--font-color-submit": "#dddddd",
    "--font-color-input-error": "#deeff9",
    "--formulario-correcto": "#0075A2",
    "--formulario-incorrecto": "#ef233c",
    "--bg-message--error": "#ff5a5f"
}
const lightTheme = {
    "--bg-color": "#eee",
    "--bg-color-form": "#ffff",
    "--bg-color-input-submit": "rgb(102, 209, 255)",
    "--bg-color-input": "#e9e9e9",
    "--font-color": "rgb(0, 0, 0)",
    "--box-shadow-color": "rgba(255, 255, 255, 0.1)",
    "--border-color": "#DDD",
    "--font-color-label": "rgba(20, 20, 20, .8)",
    "--bg-progges": "#777",
    "--font-color-progges": "rgba(255,255,255,1)",
    "--bg-progges-line": "rgba(0,0,0,0.2)",
    "--bg-color-progges-active": "#3f3f4b",
    "--color-primary": "#A5ABB0",
    "--color-secundary": "#f5f8f8",
    "--color-third": "#3f3f4c",
    "--font-color-submit": "#2b2727",
    "--font-color-input-error": "#000",
    "--formulario-correcto": "#00ABE7",
    "--formulario-incorrecto": "#d90429",
    "--bg-message--error": "#ffa69e"

}
buttonTheme.addEventListener('click', e => {
    const id = document.body.classList.value
    const theme = document.body.classList.toggle('night')
    if (theme) {
        changeTheme(darkTheme)
    } else {
        changeTheme(lightTheme)
    }

})
const changeTheme = theme => {
        let cssVars = Object.keys(theme)
        for (cssVar of cssVars) {
            rootStyle.setProperty(cssVar, theme[cssVar])
        }
    }
    // Botón next
nextRegistre.addEventListener('click', e => {
    buttonRegistre(firstRegistre, secondRegistre)

})
backRegistre.addEventListener('click', e => {
    buttonRegistre(firstRegistre, secondRegistre)
})
const buttonRegistre = (buttonFisrt, buttonTwo) => {
    if (buttonFisrt) {
        buttonFisrt.classList.toggle('next')
        buttonTwo.classList.toggle('nextactive')

        for (active of progressBar) {
            active.classList.toggle('active')
        }
    }
}
const iconPassword = document.getElementById('password-icon'),
    iconConfirPassword = document.getElementById('confirpassword-icon')
iconPassword.addEventListener('click', () => {
    activeIcon('.password')

})
iconConfirPassword.addEventListener('click', () => {
    activeIcon('.password')
})
const activeIcon = (inputPasword => {
    const password = document.querySelectorAll(inputPasword)
    const icons = document.querySelectorAll('.fa-lock')
    icons.forEach(ele => {
        ele.classList.toggle('fa-lock-open')
    })
    password.forEach(ele => {
        if (ele.type === "password") {
            ele.type = "text"
        } else {
            ele.type = "password"
        }
    })



})