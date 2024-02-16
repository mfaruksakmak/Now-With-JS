let user = prompt("Hoşgeldiniz ! Lütfen Adınızı Giriniz") //Ekrana yazdırmak için kullanıcıdan aldığımız bilgi
let userName = document.querySelector("#myName")
userName.innerHTML = user  // verilen bilgi yazıldı



function zaman() {

        let now = new Date() // Date() metodu JS'nin hazır olarak tarih verdiği bir uygulama 

        let day = now.toLocaleDateString('tr-TR', { weekday: 'long' }) // tr-TR ile day ogemize gun isimlerini turkce olarak almasini sagladik.

        let time = now.toLocaleTimeString('tr-TR')  //anlik zamanı yine turkiyeye göre ayarladık ve atamasini gerceklestirdik.

        let myClock = document.querySelector("#myClock") // DOM ile saati yazdıracağımız div' e ulaştık

        myClock.innerHTML = time + ' ' + day // dom ile ulastigimiz div'e innerHTML ile ekrana cikti vermemiz saglandi

        
}

setInterval(zaman, 1000) //burda delay veriliyor, burdaki 1000 , 1saniyeye esittir