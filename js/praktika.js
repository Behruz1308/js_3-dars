let sana= new Date();
let kun= sana.getDay();
let oy= sana.getUTCMonth();
let yil= sana.getFullYear();
let hafta= sana.getDate();
let soat= sana.getHours();
let daqiqa= sana.getMinutes();
let sekund= sana.getSeconds();
let milli= sana.getMilliseconds();
let oylar= ["yanvar", "fevral", "mart", "aprel", "5", "iyul", "iyun", "avgust", "sentabr",
    "oktabr", "noyabr", "dekabr"]
let kunlar= ["dushanba", "seshanba", "chorshanba" , "payshanba" , "juma" , "shanba" , "yakshanba"]
document.write( kun + "/" + oylar[oy] + "/" + yil + "/" + soat + ":" + daqiqa + ":" + sekund + ":" + milli + "/" + "haftaning " + kunlar[hafta] + " kuni")
