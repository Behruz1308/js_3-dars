/*let soz="matn"
let rost= 45==45?true:false
document.write(rost)
let areobject=[45 ,12 ,"text" ,"matn" ,true ,false]
let object={ismi:"Natasha",familiyasi:"Qoldosheva", yoshi:17}
console.log(object);*/



/*
function savatchanitekshir(uzatilganmalumot){

    if (savatcha.length == 0){
        document.write("savatchaning ichida " + uzatilganmalumot+ " ta malumot bor")
    }
    else{
        document.write("Savatchaning ichida" + uzatilganmalumot + "dona malumot bor")
    }
    alert("Savatchani tekshirish funksiyasi ishga tushdi")
}
let container=[1,2]
savatchanitekshir(container)*/

let sana= new Date();
sana.setFullYear(2010)
let yil= sana.getFullYear();
let oy= sana.getUTCMonth();
let kun= sana.getDate();
let haftakuni= sana.getDay()
let oylar= ["yanvar", "fevral", "mart", "aprel", "may", "iyul", "iyun", "avgust", "sentabr",
    "oktabr", "noyabr", "dekabr"]
let kunlar= ["dushanba", "seshanba", "chorshanba" , "payshanba" , "juma" , "shanba" , "yakshanba"]
document.write("Bugun" + yil + "-yil" + "/"  + kun + oylar[oy] + "/" + "haftaning" +  kunlar[haftakuni] + " kuni");