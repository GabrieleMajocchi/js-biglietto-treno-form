
const Sendit = document.querySelector('button')
let TicketPrice;
let Discount;

Sendit.addEventListener('click', 
    function(){
        let km = document.querySelector('#km')
        km = parseInt(km.value)
        let age = document.querySelector('#age')
        age = parseInt(age.value)

        if (age.value < 18){
            TicketPrice = [(1000-194)/1000]*(km * 0.233)
            Discount = 'grazie allo sconto del 19.4%' 
        } else if (age.value > 65){
            TicketPrice = [(1000-377)/1000]*(km * 0.233)
            Discount = 'grazie allo sconto del 37.7%'
        } else {
            TicketPrice = km * 0.21
            Discount = ''
        }
        TicketPrice = TicketPrice.toFixed(2);
        document.getElementById("result").innerText ="Il costo del tuo biglietto per percorrere "+ km +"km è di "+ TicketPrice + "€ " + Discount;
    }
)