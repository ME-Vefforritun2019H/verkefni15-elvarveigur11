let hotel = {
    name : "Park",
    roomRate : 240,
    discount : 15,
    offerPrice: function () {
        return this.roomRate * ((100-this.discount)/100);
    }
};

let hotelName, roomRate, specialRate;

hotelName   = document.getElementById("hotelName");
roomRate    = document.getElementById("roomRate");
specialRate = document.getElementById("specialRate");

hotelName.textContent   = hotel.name;
roomRate.textContent    = "$" + hotel.roomRate.toFixed(2);
specialRate.textContent = "$" + hotel.offerPrice();

let expiryMsg, today, elEnds;

function offerExpires(input) {
    let weekFromToday, day, date, month, year, dayNames, monthNames;

    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    dayNames = ["Sunnudagur", "Mánudagur",
        "Þriðjudagur", "Miðvikudagur",
        "Fimmtudagur", "Föstudaur",
        "Laugardagur"];

    monthNames = ["Janúar", "Febrúar",
        "Mars", "Apríl", "Maí",
        "Júní", "Júlí", "Ágúst",
        "September", "Október",
        "Nóvember", "Desember"];

    day     = dayNames[weekFromToday.getDay()];
    date    = weekFromToday.getDay();
    month   = monthNames[weekFromToday.getMonth()];
    year    = weekFromToday.getFullYear();

    expiryMsg   = "Offer expires next ";
    expiryMsg  += day + ' <br />(' + date + ' ' + month + ' ' + year + ')'
    return expiryMsg;
}

today              = new Date();
elEnds             = document.getElementById("offerEnds");
elEnds.innerHTML   = offerExpires(today);
