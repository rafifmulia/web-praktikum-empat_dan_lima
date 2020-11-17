const mataUang = {
    US: {
        text: 'Dollar US',
        value: 1,
        rupiah: 9915,
        type: 1
    },
    Singapore: {
        text: 'Dollar Singapore',
        value: 1,
        rupiah: 13472,
        type: 2
    },
    Ringgit: {
        text: 'Ringgit Malaysia',
        value: 1,
        rupiah: 874,
        type: 3
    },
    Jepan: {
        text: 'Yen Jepan',
        value: 1,
        rupiah: 120,
        type: 4
    },
    Euro: {
        text: 'Euro',
        value: 1,
        rupiah: 15888,
        type: 5
    },
    Riyal: {
        text: 'Riyal Arab Saudi',
        value: 1,
        rupiah: 3952,
        type: 6
    },
    Rupiah: {
        text: 'Indonesia Rupiah',
        value: 1,
        rupiah: 1000,
        type: 7
    }
}

let uangAsing = document.getElementById('uangAsing')
let uangType = document.getElementById('uangType')
let uangRupiah = document.getElementById('uangRupiah')

let converter = {
    activate: function (nilai, type, isAlert) {
        let hasil = 0
        nilai = parseFloat(nilai)

        switch (parseInt(type)) {
            case mataUang.US.type:
                hasil = (nilai/mataUang.US.value)*mataUang.US.rupiah
                break;
            case mataUang.Singapore.type:
                hasil = (nilai/mataUang.Singapore.value)*mataUang.Singapore.rupiah
                break;
            case mataUang.Ringgit.type:
                hasil = (nilai/mataUang.Ringgit.value)*mataUang.Ringgit.rupiah
                break;
            case mataUang.Jepan.type:
                hasil = (nilai/mataUang.Jepan.value)*mataUang.Jepan.rupiah
                break;
            case mataUang.Euro.type:
                hasil = (nilai/mataUang.Euro.value)*mataUang.Euro.rupiah
                break;
            case mataUang.Riyal.type:
                hasil = (nilai/mataUang.Riyal.value)*mataUang.Riyal.rupiah
                break;                
            default:
                (isAlert) ? alert('Silahkan Pilih Mata Uang Yang Akan Diconvert Ke Rupiah') : ''
                break;
        }

        uangRupiah.value = 'Rp. '+(new Intl.NumberFormat('de-DE').format(hasil))
    }
}

uangType.addEventListener('change', function (e) {
    converter.activate(uangAsing.value, uangType.value, true)
})

let inputTimeout = null
let delayInput = 1200
uangAsing.addEventListener('keyup', function (e) {
    clearTimeout(inputTimeout)

    inputTimeout = setTimeout(function () {
        converter.activate(uangAsing.value, uangType.value, false)
    }, delayInput);
})