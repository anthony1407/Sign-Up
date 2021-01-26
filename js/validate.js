import Usuario from './class/Usuario.js'
const inputErrorName = document.getElementById('input-error-name'),
    inputErrorLastName = document.getElementById('input-error-lastname'),
    inputErrorEmail = document.getElementById('input-error-email'),
    inputErrorPassword = document.getElementById('input-error-password'),
    inputErrorConfirPassword = document.getElementById('input-error-confirpassword'),
    inputErrorDirection = document.getElementById('input-error-direction'),
    inputErrorCountry = document.getElementById('input-error-country'),
    inputErrorNumberPhone = document.getElementById('input-error-numberphone'),
    inputErrorPostal = document.getElementById('input-error-postal')




// Validaciones de input
const formulario = document.getElementById('form-registre')
const inputs = document.querySelectorAll('#form-registre input[type="text"],#form-registre input[type="password"], #form-registre input[type="email"]')
const select = document.querySelector('#formulario-input select')

const expresiones = {
    nombre: /^(\w+[a-zA-ZÁ-ý\s]+){2,40}$/, // Letras y espacios, pueden llevar acentos
    correo: /^[a-zA-z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contraseña: /^.{4,12}$/, // 4 a 12 dígitos
    direccion: /^[a-zA-Z0-9\s\_\-.#,]{4,50}$/,
    telefono: /^\d{10,13}$/, // 11 a 14 números
    postalVe: /^([1-8]|[1-4])\d{3}$/,
    postal: /^[0-9]\d{0,10}$/

}
const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    contraseña: false,
    direccion: false,
    telefono: false,
    postal: false
}
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nameRegistre":
            validarCampos(expresiones.nombre, e.target, inputErrorName, 'nombre')
            break;
        case "lastnameRegistre":
            validarCampos(expresiones.nombre, e.target, inputErrorLastName, 'apellido')
            break;

        case "emailRegistre":
            validarCampos(expresiones.correo, e.target, inputErrorEmail, 'correo')
            break;

        case "passwordRegistre":
            validarCampos(expresiones.contraseña, e.target, inputErrorPassword, 'contraseña')
            validarContraseña()
            break;

        case "password2":
            validarContraseña()

            break;

        case "directionRegistre":
            validarCampos(expresiones.direccion, e.target, inputErrorDirection, 'direccion')
            break;

        case "numberphoneRegistre":
            validarCampos(expresiones.telefono, e.target, inputErrorNumberPhone, 'telefono')
            break;
        case "postalRegistre":
            validarCampos(expresiones.postal, e.target, inputErrorPostal, 'postal')
            break;
        default:
            break;
    }
}
const validarContraseña = () => {
    const inputPasword1 = document.getElementById('password'),
        inputPassword2 = document.getElementById('password2')
    if (inputPasword1.value === inputPassword2.value) {
        let t = document.getElementById('grupo-c-contraseña')
        t.classList.remove('formulario-incorrecto')
        t.classList.add('formulario-correcto')
        inputErrorConfirPassword.classList.remove('input-error-activo')
        campos['contraseña'] = true;
    } else {
        let t = document.getElementById('grupo-c-contraseña')
        t.classList.add('formulario-incorrecto')
        t.classList.remove('formulario-correcto')
        inputErrorConfirPassword.classList.add('input-error-activo')
        campos['contraseña'] = false
    }


}
const validarCampos = (expresion, input, idinput, campo) => {
    if (expresion.test(input.value)) {
        let t = document.getElementById(`grupo-${campo}`)
        t.classList.remove('formulario-incorrecto')
        t.classList.add('formulario-correcto')
        idinput.classList.remove('input-error-activo')
        campos[campo] = true
    } else {
        let t = document.getElementById(`grupo-${campo}`)
        t.classList.add('formulario-incorrecto')
        t.classList.remove('formulario-correcto')
        idinput.classList.add('input-error-activo')
        campos[campo] = false
    }
}


const selectCountry = document.getElementById('country')
selectCountry.addEventListener('change', e => {
    const target = e.target.value;
    if (target == 0) {
        let t = document.getElementById('grupo-paises')
        t.classList.add('formulario-incorrecto')
        t.classList.remove('formulario-correcto')
        inputErrorCountry.classList.add('input-error-activo')

    } else {
        let t = document.getElementById('grupo-paises')
        t.classList.add('formulario-correcto')
        t.classList.remove('formulario-incorrecto')
        inputErrorCountry.classList.remove('input-error-activo')

    }
})



inputs.forEach(input => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)

})
formulario.addEventListener('submit', e => {
    e.preventDefault()
    if (campos.nombre && campos.apellido && campos.correo && campos.contraseña && campos.direccion && campos.telefono && campos.postal && selectCountry.value != 0) {
        let target = e.target,
            name = target.nameRegistre.value,
            lastname = target.lastnameRegistre.value,
            email = target.emailRegistre.value,
            password = target.passwordRegistre.value,
            password2 = target.password2.value,
            country = target.selectCountryRegistre.value,
            direction = target.directionRegistre.value,
            numberphone = target.numberphoneRegistre.value,
            postal = target.postalRegistre.value

        let registre = new Usuario(
            name,
            lastname,
            email,
            password,
            password2,
            country,
            direction,
            numberphone,
            postal
        )
        console.log(registre)
        const formSucceful = document.querySelector('.form-succeful')
        formSucceful.classList.add('form-succeful-activo')
        setTimeout(() => {

            formSucceful.classList.remove('form-succeful-activo')
        }, 5000)

        formulario.reset()

    } else {
        if (selectCountry.value == 0) {
            let t = document.getElementById('grupo-paises')
            t.classList.add('formulario-incorrecto')
            t.classList.remove('formulario-correcto')
            inputErrorCountry.classList.add('input-error-activo')
        }
        inputs.forEach(input => {
            if (input.value == "" || input.value == " ") {
                switch (input.name) {
                    case "nameRegistre":
                        let t = document.getElementById(`grupo-nombre`)
                        t.classList.add('formulario-incorrecto')
                        t.classList.remove('formulario-correcto')
                        inputErrorName.classList.add('input-error-activo')
                        campos['nombre'] = false

                        break;
                    case "lastnameRegistre":
                        let a = document.getElementById(`grupo-apellido`)
                        a.classList.add('formulario-incorrecto')
                        a.classList.remove('formulario-correcto')
                        inputErrorLastName.classList.add('input-error-activo')
                        campos['apellido'] = false
                        break;

                    case "emailRegistre":
                        validarCampos(expresiones.correo, e.target, inputErrorEmail, 'correo')
                        break;

                    case "passwordRegistre":
                        let p = document.getElementById(`grupo-contraseña`)
                        p.classList.add('formulario-incorrecto')
                        p.classList.remove('formulario-correcto')
                        inputErrorPassword.classList.add('input-error-activo')
                        campos['contraseña'] = false
                        validarContraseña()
                        break;

                    case "password2":
                        let cp = document.getElementById('grupo-c-contraseña')
                        cp.classList.add('formulario-incorrecto')
                        cp.classList.remove('formulario-correcto')
                        inputErrorConfirPassword.classList.add('input-error-activo')
                        campos['contraseña'] = false
                        break;

                    case "directionRegistre":
                        let d = document.getElementById('grupo-direccion')
                        d.classList.add('formulario-incorrecto')
                        d.classList.remove('formulario-correcto')
                        inputErrorDirection.classList.add('input-error-activo')
                        campos['direccion'] = false

                        break;

                    case "numberphoneRegistre":
                        validarCampos(expresiones.telefono, e.target, inputErrorNumberPhone, 'telefono')
                        break;
                    case "postalRegistre":
                        validarCampos(expresiones.postal, e.target, inputErrorPostal, 'postal')
                        break;
                    default:
                        break;
                }
            }
        })
        const formError = document.querySelector('.form-error')
        formError.classList.add('form-error-activo')
    }

})