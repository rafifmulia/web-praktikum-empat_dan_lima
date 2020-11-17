let contentChat = document.getElementById('contentChat')
let textMsg = document.getElementById('textMsg')
let btnSend = document.getElementById('btnSend')

let sendMessage = {
    activate: function (message) {
        if (message == '') {
            alert('Tidak Bisa Mengirimkan Pesan Kosong')
            return false
        }

        let element = this.createElement(message)
        contentChat.appendChild(element)

        textMsg.value = ''
    },
    createElement: function (text) {
        let p = document.createElement('p')
        p.className = 'p-2 bg-secondary'
        let textNode = document.createTextNode(text)
        p.appendChild(textNode)
        return p
    }
}

btnSend.addEventListener('click', function (e) {
    sendMessage.activate(textMsg.value)
})