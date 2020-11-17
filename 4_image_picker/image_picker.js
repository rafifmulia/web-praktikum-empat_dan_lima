const listImage = {
    asusRog: {
        text: 'ASUS ROG',
        type: 1,
        url: 'https://images-na.ssl-images-amazon.com/images/I/81mUGg7nS7L._AC_SL1500_.jpg',
    },
    pocoX3: {
        text: 'Poco X3',
        type: 2,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPp9yGdIIoLrkAKIgt58ZcunZ2KF24nqMvcA&usqp=CAU',
    },
    realLambo: {
        text: 'Realme Lamborghini',
        type: 3,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8aAG4_-Xk3Jr0KwT2HImrGzvbctd_Ic68w&usqp=CAU',
    },
    monitCurved: {
        text: 'Monitor Curved',
        type: 4,
        url: 'https://images-na.ssl-images-amazon.com/images/I/71PjhKA%2BllL._AC_SL1500_.jpg',
    },
    pcRgb: {
        text: 'PC RGB',
        type: 5,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrvRaBHR-UrIVeeAZZr6zCyf8V1EQsqKUSmg&usqp=CAU',
    },
    PS5: {
        text: 'PS5',
        type: 6,
        url: 'https://blog.playstation.com/tachyon/2020/09/50349535038_42fa72f759_k.jpg?resize=1088,612&crop_strategy=smart',
    }
}

let pickImage = document.getElementById('pickImage')
let contentImg = document.getElementById('contentImg')

let showImage = {
    activate: function (type) {
        let img = '',
            namaGambar = ''

        switch (parseInt(type)) {
            case listImage.asusRog.type:
                namaGambar = listImage.asusRog.text
                img = this.createElement(listImage.asusRog.url, listImage.asusRog.text)
                break;
            case listImage.pocoX3.type:
                namaGambar = listImage.pocoX3.text
                img = this.createElement(listImage.pocoX3.url, listImage.pocoX3.text)
                break;
            case listImage.realLambo.type:
                namaGambar = listImage.realLambo.text
                img = this.createElement(listImage.realLambo.url, listImage.realLambo.text)
                break;
            case listImage.monitCurved.type:
                namaGambar = listImage.monitCurved.text
                img = this.createElement(listImage.monitCurved.url, listImage.monitCurved.text)
                break;
            case listImage.pcRgb.type:
                namaGambar = listImage.pcRgb.text
                img = this.createElement(listImage.pcRgb.url, listImage.pcRgb.text)
                break;
            case listImage.PS5.type:
                namaGambar = listImage.PS5.text
                img = this.createElement(listImage.PS5.url, listImage.PS5.text)
                break;
            default:
                alert('Silahkan Pilih Gambar Yang Sudah Disediakan')
                return false
        }

        // remove existing element
        while (contentImg.firstChild) {
            contentImg.removeChild(contentImg.firstChild)
        }

        // add new element
        contentImg.appendChild(img)

        alert('Anda Memilih Gambar '+namaGambar)
    },
    createElement: function (src, alt) {
        let img = document.createElement('img')
        img.className = 'img-thumbnail'
        img.setAttribute('src', src)
        img.setAttribute('alt', alt)
        return img
    }
}

pickImage.addEventListener('change', function (e) {
    showImage.activate(pickImage.value)
})