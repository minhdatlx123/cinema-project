// SWITCH/HIDE SCREENS
const reservationBtn = document.querySelector('#reservation-btn');
const backScreenBtn = document.querySelector('#back-screen-btn');
const dateTimeScreen = document.querySelector('#date-time-screen');
const seatsScreen = document.querySelector('#seats-screen');
const seatContainer = document.querySelector('.seat-container');

reservationBtn.addEventListener('click', function() {
    dateTimeScreen.classList.add('hide');
    seatsScreen.classList.remove('hide');
})

backScreenBtn.addEventListener('click', function() {
    seatsScreen.classList.add('hide');
    dateTimeScreen.classList.remove('hide');
})
const seatIconHTML =`<svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4.75C0 3.43832 1.06332 2.375 2.375 2.375H4.75C6.06168 2.375 7.125 3.43832 7.125 4.75V16.625C7.125 17.9367 8.18832 19 9.5 19H26.125C27.4367 19 28.5 17.9367 28.5 16.625V4.75C28.5 3.43832 29.5633 2.375 30.875 2.375H33.25C34.5617 2.375 35.625 3.43832 35.625 4.75V20.1875C35.625 23.4667 32.9667 26.125 29.6875 26.125H5.9375C2.65831 26.125 0 23.4667 0 20.1875V4.75Z"/>
<path d="M8.3125 3.5625C8.3125 1.59499 9.90749 0 11.875 0H23.75C25.7175 0 27.3125 1.59499 27.3125 3.5625V16.625C27.3125 17.2808 26.7808 17.8125 26.125 17.8125H9.5C8.84416 17.8125 8.3125 17.2808 8.3125 16.625V3.5625Z"/>
</svg>`
// seatData[0]

const rowLayous = [6, 8, 8, 9, 9, 9];
let seatIndex = 0;

 rowLayous.forEach(function (item) {
    const rowElement = document.createElement('div');
    rowElement.classList.add('seat-row');

    for (let i =0; i < item; i++) {
        const seatElement = document.createElement('div');
        seatElement.classList.add('seat');
        const seatContent = seatIndex;

        const currentSeat = seatData[seatIndex];
        seatElement.textContent = currentSeat.id;

        seatElement.innerHTML = seatIconHTML;

        if (currentSeat.isVip) {
            seatElement.classList.add('isVip');
        }
        if (!currentSeat.available) {
            seatElement.classList.add('booked');
        }
        seatElement.addEventListener('click', function(e) {
            if (currentSeat.available) {
                seatElement.classList.toggle('selected')
            }else {
                seatElement.classList.add('shake');
                setTimeout(function (){
                     seatElement.classList.remove('shake');

                },500)
            }
            
            
        })
        rowElement.appendChild(seatElement)
        seatIndex++;

    }
    seatContainer.appendChild(rowElement)
 });
