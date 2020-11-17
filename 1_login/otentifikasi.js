const account = {
    username: 'rafif',
    password: 'rafif'
}

let btnLogin = document.getElementById('btnLogin')
let username = document.getElementById('username')
let password = document.getElementById('password')

btnLogin.addEventListener('click', function (e) {
    login.activate(username.value, password.value)
})

let login = {
    activate: function (username, password) {
        if (username != account.username) {
            alert('Username Tidak Ditemukan')
            return false
        }

        if (password != account.password) {
            alert('Password Salah')
            return false
        }

        window.location.href = 'home.html'
    }
}