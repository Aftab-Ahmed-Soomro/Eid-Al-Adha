let heading = document.getElementById('heading');
heading.innerText = `Remaining Days :`;
let currentDate = new Date();
let eidDate = new Date(2024, 5, 16);
let diff = eidDate - currentDate;
let remainingDays = Math.floor(diff/(1000 * 60 * 60 * 24));
let remaining = document.getElementById('remaining');
remaining.innerText = remainingDays + ` Days`;

if (remainingDays <= '0') {
    heading.innerText = `EID AL ADHA\nMUBARAK 💛`;
    remaining.innerText = '';
}