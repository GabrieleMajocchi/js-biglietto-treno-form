
const Sendit = document.querySelector('button')
let TicketPrice;

Sendit.addEventListener('click', 
    function(){
        let km = document.querySelector('#km')
        let age = document.querySelector('#age')

        if (age.value < 18){
            TicketPrice = [(1000-194)/1000]*(km.value * 0.233)
        } else if (age.value > 65){
            TicketPrice = [(1000-377)/1000]*(km.value * 0.233)
        } else {
            TicketPrice = km.value * 0.21
        }
        console.log(TicketPrice+"€")
    }
)