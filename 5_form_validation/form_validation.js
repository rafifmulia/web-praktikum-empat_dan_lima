const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const containNumber = /\d/

let arrivals = [
    {
        name: 'Istanbul',
        type: 1
    },
    {
        name: 'Jakarta',
        type: 2
    },
    {
        name: 'Bali',
        type: 3
    },
    {
        name: 'France',
        type: 4
    },
]

// form pelanggan
let name = document.getElementById('name')
let email = document.getElementById('email')
let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let timeDeparture = document.getElementById('timeDeparture')
let arrival = document.getElementById('arrival')
let ticket = document.getElementById('ticket')
let btnSubmit = document.getElementById('btnSubmit')
let feedbackName = document.getElementById('feedbackName')
let feedbackEmail = document.getElementById('feedbackEmail')
let feedbackHour = document.getElementById('feedbackHour')
let feedbackMinute = document.getElementById('feedbackMinute')
let feedbackArrival = document.getElementById('feedbackArrival')
let feedbackTicket = document.getElementById('feedbackTicket')
let feedbackTimeDeparture = document.getElementById('feedbackTimeDeparture')

// data pelanggan
let elDataPelanggan = document.getElementById('dataPelanggan')
let dataName = document.getElementById('dataName')
let dataEmail = document.getElementById('dataEmail')
let dataTimeDeparture = document.getElementById('dataTimeDeparture')
let dataArrival = document.getElementById('dataArrival')
let dataTicket = document.getElementById('dataTicket')

let formPelanggan = {
    name: null,
    email: null,
    hour: null,
    minute: null,
    arrival: null,
    arrivalType: null,
    ticket: null,
    activate: function (name, email, hour, minute, arrival, ticket) {
        this.name = name
        this.email = email
        this.hour = hour
        this.minute = minute
        this.arrivalType = arrival
        this.ticket = ticket

        if (this.validateInput()) {
            alert('Data Anda Berhasil Di Input')
            render.showDataPelanggan({
                name: this.name,
                email: this.email,
                hour: this.hour,
                minute: this.minute,
                arrival: this.arrival,
                arrivalType: this.arrivalType,
                ticket: this.ticket,
            })
        }
    },
    validateInput: function () {
        if (!this.isName()) {
            return false
        } else if (!this.isEmail()) {
            return false
        } else if (!this.isHour()) {
            return false
        } else if (!this.isMinute()) {
            return false
        } else if (!this.checkTimeDeparture()) {
            return false
        } else if (!this.isArrival()) {
            return false
        } else if (!this.isTicket()) {
            return false
        } else {
            return true
        }
    },
    isName: function () {
        if (this.name == '') {
            render.invalid(name, feedbackName, 'Nama Pelanggan Tidak Boleh Kosong')
            return false
        }
        if (this.name.match(containNumber)) {
            render.invalid(name, feedbackName, 'Nama Pelanggan Tidak Boleh Mengandung Angka')
            return false
        }
        if (this.name.length > 30) {
            render.invalid(name, feedbackName, 'Nama Pelanggan Tidak Boleh Lebih Dari 30 Karakter')
            return false
        }
        render.valid(name, feedbackName, '')
        return true
    },
    isEmail: function () {
        if (this.email == '') {
            render.invalid(email, feedbackEmail, 'Email Tidak Boleh Kosong')
            return false
        }
        if (!this.email.match(emailFormat)) {
            render.invalid(email, feedbackEmail, 'Format Email Tidak Valid')
            return false
        }
        render.valid(email, feedbackEmail, '')
        return true
    },
    isHour: function () {
        if (this.hour == '') {
            render.invalid(hour, feedbackHour, '')
            render.invalid(timeDeparture, feedbackTimeDeparture, 'Jam Keberangkatan Tidak Boleh Kosong')
            return false
        }
        if (this.hour.length != 2) {
            render.invalid(hour, feedbackHour, '')
            render.invalid(timeDeparture, feedbackTimeDeparture, 'Jam Keberangkatan Tidak Valid')
            return false
        }
        render.valid(hour, feedbackHour, '')
        return true
    },
    isMinute: function () {
        if (this.minute == '') {
            render.invalid(minute, feedbackMinute, 'Menit Dari Jam Keberangkatan Tidak Boleh Kosong')
            return false
        }
        if (this.minute.length != 2) {
            render.invalid(minute, feedbackMinute, 'Menit Dari Jam Keberangkatan Tidak Valid')
            return false
        }
        render.valid(minute, feedbackMinute, '')
        return true
    },
    checkTimeDeparture: function () {
        if (this.hour == '00' && this.minute == '00') {
            render.valid(timeDeparture, feedbackTimeDeparture, 'Anda Akan Berangkat Tepat Jam 12 Malam')
        } else {
            render.valid(timeDeparture, feedbackTimeDeparture, '')
        }
        return true
    },
    isArrival: function () {
        for (let list of arrivals) {
            if (this.arrivalType == list.type) {
                this.arrival = list.name
                render.valid(arrival, feedbackArrival, '')
                return true
            }
        }
        render.invalid(arrival, feedbackArrival, 'Silahkan Pilih Tujuan Keberangkatan')
        return false
    },
    isTicket: function () {
        if (this.ticket == '' || this.ticket == 0) {
            render.invalid(ticket, feedbackTicket, 'Jumlah Tiket Tidak Boleh Kosong')
            return false
        }
        if (isNaN(this.ticket)) { // check number
            render.invalid(ticket, feedbackTicket, 'Jumlah Tiket Haruslah Bilangan Bulat 1 ~ 10')
            return false
        }
        if (this.ticket % 1 !== 0) { // check float
            render.invalid(ticket, feedbackTicket, 'Jumlah Tiket Haruslah Bilangan Bulat 1 ~ 10')
            return false
        }
        if (parseInt(this.ticket) < 1 || parseInt(this.ticket) > 10) { // check range 1 ~ 10
            render.invalid(ticket, feedbackTicket, 'Jumlah Tiket Haruslah Bilangan Bulat 1 ~ 10')
            return false
        }
        render.valid(ticket, feedbackTicket, '')
        return true
    },
    generateViewTimeDeparture: function () {
        // remove existing element hour
        while (hour.firstChild) {
            hour.removeChild(hour.firstChild)
        }

        // add new element hour
        for (let i=0; i<24; i++) {
            if (i > -1 && i < 10) {
                i = '0'+i
            }

            let opt = document.createElement('option')
            opt.setAttribute('value', i)
            let text = document.createTextNode(i)
            opt.appendChild(text)
            hour.appendChild(opt)
        }

        // remove existing element minute
        while (minute.firstChild) {
            minute.removeChild(minute.firstChild)
        }

        // add new element minute
        for (let i=0; i<60; i++) {
            if (i > -1 && i < 10) {
                i = '0'+i
            }
            
            let opt = document.createElement('option')
            opt.setAttribute('value', i)
            let text = document.createTextNode(i)
            opt.appendChild(text)
            minute.appendChild(opt)
        }
    },
    generateViewArrival: function () {
        // remove existing element
        while (arrival.firstChild) {
            arrival.removeChild(arrival.firstChild)
        }

        // init new element
        let opt = document.createElement('option')
        opt.setAttribute('value', 0)
        let text = document.createTextNode('-- Pilih Tujuan Keberangkatan --')
        opt.appendChild(text)
        arrival.appendChild(opt)

        // add new element
        for (let list of arrivals) {
            let opt = document.createElement('option')
            opt.setAttribute('value', list.type)
            let text = document.createTextNode(list.name)
            opt.appendChild(text)
            arrival.appendChild(opt)
        }
    },
}

let dataPelanggan = {
    activate: function (data) {
        dataName.value = data.name
        dataEmail.value = data.email
        dataTimeDeparture.value = data.hour+':'+data.minute+' WIB'
        dataArrival.value = data.arrival
        dataTicket.value = data.ticket
        elDataPelanggan.removeAttribute('hidden')
    }
}

let render = {
    activate: function () {
        this.generateViewFormPelanggan()
    },
    generateViewFormPelanggan: function () {
        formPelanggan.generateViewTimeDeparture()
        formPelanggan.generateViewArrival()
    },
    showDataPelanggan: function (data) {
        dataPelanggan.activate(data)
    },
    invalid: function (elInput, elFeedback, textFeedback) {
        elInput.classList.remove('is-invalid')
        elInput.classList.remove('is-valid')

        elInput.classList.toggle('is-invalid')
        elFeedback.className = 'invalid-feedback'
        elFeedback.innerText = textFeedback
    },
    valid: function (elInput, elFeedback, textFeedback) {
        elInput.classList.remove('is-invalid')
        elInput.classList.remove('is-valid')

        elInput.classList.toggle('is-valid')
        elFeedback.className = 'valid-feedback'
        elFeedback.innerText = textFeedback
    }
}

btnSubmit.addEventListener('click', function (e) {
    formPelanggan.activate(name.value, email.value, hour.value, minute.value, arrival.value, ticket.value)
})

render.activate()