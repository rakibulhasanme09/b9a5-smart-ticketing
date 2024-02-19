const selectedSeats = [];

function selectSeat(seatNo) {


    let isSelected = false;
    for (const selectedSeat of selectedSeats) {
        if (selectedSeat == seatNo) {
            isSelected = true;
        }
    }
    if (!isSelected) {
        if (selectedSeats.length < 4) {
            // get the seat
            const seat = document.getElementById(seatNo);

            // apply bg on seat
            seat.classList.add('bg-[#1DD100]');
            selectedSeats.push(seatNo);

            // update total seat availbale 
            const totalSeatAv = document.getElementById('totalSeatAv');
            let totalSeat = parseInt(totalSeatAv.innerText);
            totalSeat--;
            totalSeatAv.innerText = totalSeat;

            // update total selected seats
            let totalSelectedSeats = document.getElementById('totalSelected');
            let totalSelectedSeat = parseInt(totalSelectedSeats.innerText);
            totalSelectedSeat++;
            totalSelectedSeats.innerText = totalSelectedSeat;

            // update the price section

            // create div and adding classes
            const createDiv = document.createElement("div");
            const createdDiv = document.getElementById("selectedSeatDetails").appendChild(createDiv);
            createdDiv.classList.add('flex');
            createdDiv.classList.add('justify-between');
            createdDiv.classList.add('gap-[150px]');

            // adding details to right bar

            // adding seat no
            const seatNumP = document.createElement("p");
            const seatNum = document.createTextNode(seatNo);
            seatNumP.appendChild(seatNum);
            createdDiv.appendChild(seatNumP);

            // adding class
            const seatClassP = document.createElement("p");
            const seatClass = document.createTextNode('Economy');
            seatClassP.appendChild(seatClass);
            createdDiv.appendChild(seatClassP);

            // adding seat price
            const seatPriceP = document.createElement("p");
            const seatPrice = document.createTextNode('550');
            seatPriceP.appendChild(seatPrice);
            createdDiv.appendChild(seatPriceP);

            // update total price
            let totPrice = document.getElementById('totalPrice');
            totPrice.innerText = 550 * selectedSeats.length;

            // update grand total price
            let grandTotPrice = document.getElementById('grandTotalPrice');
            grandTotPrice.innerText = 550 * selectedSeats.length;

            // checking coupon is valid or not
            let couponCode = document.getElementById('couponApply')
            if (selectedSeats.length===4) {
                couponCode.removeAttribute('disabled');
            }
            else {
                couponCode.setAttribute('disabled', true);
            }

        }
    }
}


// apply coupon discount
function couponDiscount() {
    let couponCode = document.getElementById('couponInput')
    let hideBtn = document.getElementById('coupon');
    console.log(couponCode);
    if (couponCode.value === 'NEW15') {
        let grandTotalPrice = document.getElementById('grandTotalPrice');
        let discountedPrice = parseInt(grandTotalPrice.innerText)
        let discount = discountedPrice * (15 / 100);
        discountedPrice = discountedPrice - (discountedPrice * (15 / 100));
        grandTotalPrice.innerText = discountedPrice;
        hideBtn.classList.add('hidden');

        let dicPrice = document.getElementById('dicPrice');
        dicPrice.classList.remove('hidden');

        let disPer = document.getElementById('disPer');
        disPer.innerText = 'You Got 15% Discount:';

        let disAmount = document.getElementById('disAmount');
        disAmount.innerText = discount;


    }
    else if (couponCode.value === 'Couple 20') {
        let grandTotalPrice = document.getElementById('grandTotalPrice');
        let discountedPrice = parseInt(grandTotalPrice.innerText)
        let discount = discountedPrice * (20 / 100);
        discountedPrice = discountedPrice - (discountedPrice * (20 / 100));
        grandTotalPrice.innerText = discountedPrice;
        hideBtn.classList.add('hidden');

        let dicPrice = document.getElementById('dicPrice');
        dicPrice.classList.remove('hidden');

        let disPer = document.getElementById('disPer');
        disPer.innerText = 'You Got 20% Discount:';

        let disAmount = document.getElementById('disAmount');
        disAmount.innerText = discount;
    }


}


document.getElementById('phoneNum').addEventListener('keyup', function(event){
    let num = event.target.value;
    let nextBtn = document.getElementById('nextBtn');
    if(num.length>0 && selectedSeats.length>0){
        nextBtn.removeAttribute('disabled');
    }
    else{
        nextBtn.setAttribute('disabled',true);
    }

});

