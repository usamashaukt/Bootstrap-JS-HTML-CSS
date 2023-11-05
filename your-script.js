const txt1 = document.getElementById('inputt1');
const txt2 = document.getElementById('inputt2');
const btn1 = document.getElementById('fetchValueButton');
const out1 = document.getElementById('booking-time-text');
const out2 = document.getElementById('booking-date-text');
const mapout3 = document.getElementById('moving-from-text');
const mapout4 = document.getElementById('moving-to-text');
const maptxt3 = document.getElementById('map');
const maptxt4 = document.getElementById('map2');
const txt3 = document.getElementById('booking-text');
const roomtxt = document.getElementById('booking-text2');


// function updatetotal() {
//     // var room1;
//     // var room2;
//     // var room3;
//     // var room4;

//     checkRoom();
//     var totalprice = roomchk1;
//     document.getElementById('booking-text').innerHTML = "$" + roomchk1
// }


function checkRoom() {

    if (document.getElementById('room1').checked) {
        var roomchk = "1 Room/studio";
        txt3.innerHTML = "$" + roomchk;
    }
    if (document.getElementById('room2').checked) {
        var roomchk = "775 bedroom home";
        txt3.innerHTML = "$" + roomchk;

    }
    if (document.getElementById('room3').checked) {
        var roomchk = "1275 1-2 bedroom home";
        txt3.innerHTML = "$" + roomchk;

    }
    if (document.getElementById('room4').checked) {
        var roomchk = "1675 2-3 bedroom home";
        txt3.innerHTML = "$" + roomchk;

    }
}




let data = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
    if (data > 0) {
        // data = 0
        data = data - 1;
    }
    document.getElementById("counting").innerText = data;
}
document.getElementById("counting2").innerText = data;

//creation of increment function
function increment2() {
    data = data + 1;
    document.getElementById("counting2").innerText = data;
}
//creation of decrement function
function decrement2() {
    // data = data - 1;
    if (data > 0) {
        // data = 0
        data = data - 1;
    }
    document.getElementById("counting2").innerText = data;
}



function fun1() {
    out1.innerHTML = txt1.value;

}

function fun2() {
    out2.innerHTML = txt2.value;
}

function mapfun3() {
    mapout3.innerHTML = maptxt3.value;
}

function mapfun4() {
    mapout4.innerHTML = maptxt4.value;
}



btn1.addEventListener('click', fun1);
btn1.addEventListener('click', fun2);
btn1.addEventListener('click', mapfun3);
btn1.addEventListener('click', mapfun4);
btn1.addEventListener('click', checkRoom());