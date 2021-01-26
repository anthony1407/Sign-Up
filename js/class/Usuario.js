export default class Usuario {
    constructor(name, lastname, email, password, password2, country, direction, numberphone, postal) {
        this.name = name,
            this.lastname = lastname,
            this.email = email,
            this.password = password,
            this.password2 = password2,
            this.country = country,
            this.direction = direction,
            this.numberphone = numberphone,
            this.postal = postal

    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getlastname() {
        return this.lastname;
    }
    setLastName(lastname) {
        this.lastname = lastname;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getPassword2() {
        return this.password2;
    }
    setPassword2(password2) {
        this.password2 = password2;
    }
    getCountry() {
        return this.country;
    }
    setCountry(country) {
        this.country = country;
    }
    getDirection() {
        return this.direction;
    }
    setDirection(direction) {
        this.direction = direction;
    }
    getNumberPhone() {
        return this.numberphone;
    }
    setNumberPhone(numberphone) {
        this.numberphone = numberphone;
    }
    getPostal() {
        return this.postal;
    }
    setPostal(postal) {
        this.postal = postal;
    }
}