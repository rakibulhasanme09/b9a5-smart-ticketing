function unhideTicketSection() {
    const ticketSection = document.getElementById('ticketSection');
    ticketSection.classList.remove('hidden');
}

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

            console.log(selectedSeats);
            console.log("not selected");
            console.log(selectedSeats.length);

        }
    }
}