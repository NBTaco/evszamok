//tomb ami alapjan generalodik
const tomb = [ //letrehozzuk a tombot
    {
        ido: "XVI. század", //a tomb 1. objektumának ido tulajdonsága XVI. század
        evszam: "1514", //a tomb 1. objektumának evszam tulajdonsága 1514
        esemeny: "Dózsa-féle parasztháború", //a tomb 1. objektumának esemeny tulajdonsága Dózsa-féle parasztháború
        tananyag: "magyar", //a tomb 1. objektumának tananyag tulajdonsága magyar
        evszam2:"1519-1522", //a tomb 1. objektumának evszam2 tulajdonsága 1519-1522
        esemeny2:"Magellán körülhajózza a földet", //a tomb 1. objektumának esemeny2 tulajdonsága Magellán körülhajózza a földet
        tananyag2:"egyetemes" //a tomb 1. objektumának tananyag2 tulajdonsága egyetemes
    },
    {
        ido: "XVII. század", //a tomb 2. objektumának ido tulajdonsága XVII. század
        evszam: "1664", //a tomb 2. objektumának evszam tulajdonsága 1664
        esemeny: "vasvári béke", //a tomb 2. objektumának esemeny tulajdonsága vasvári béke
        tananyag: "magyar" //a tomb 2. objektumának tananyag tulajdonsága magyar
    },
    {
        ido: "XVIII. század", //a tomb 3. objektumának ido tulajdonsága XVIII. század
        evszam: "1701-1714", //a tomb 3. objektumának evszam tulajdonsága 1701-1714
        esemeny: "spanyol örökösödési háború", //a tomb 3. objektumának esemeny tulajdonsága spanyol örökösödési háború
        tananyag: "egyetemes", //a tomb 3. objektumának tananyag tulajdonsága egyetemes
        evszam2: "1703-1711", //a tomb 3. objektumának evszam2 tulajdonsága 1703-1711
        esemeny2: "Rákóczi szabadságharc", //a tomb 3. objektumának esemeny2 tulajdonsága Rákóczi szabadságharc
        tananyag2: "magyar" //a tomb 3. objektumának tananyag2 tulajdonsága magyar
    },
    {
        ido: "XIX. század", //a tomb 4. objektumának ido tulajdonsága XIX. század
        evszam: "1812", //a tomb 4. objektumának evszam tulajdonsága 1812
        esemeny: "Napóleon oroszországi hadjárata", //a tomb 4. objektumának esemeny tulajdonsága Napóleon oroszországi hadjárata
        tananyag: "egyetemes", //a tomb 4. objektumának tananyag tulajdonsága egyetemes
        evszam2: "1809", //a tomb 4. objektumának evszam2 tulajdonsága 1809
        esemeny2: "győri csata", //a tomb 4. objektumának esemeny2 tulajdonsága győri csata
        tananyag2: "magyar" //a tomb 4. objektumának tananyag2 tulajdonsága magyar
    },
]

generateForm() //meghvjuk a generateForm fuggvenyt

const table = document.createElement('table') //letrehozzuk a table-t
document.body.appendChild(table) //a tablet hozzaadjuk a bodyhoz

RenderTable(tomb) //meghibjuk a RenderTable-t a tomb paraméterrel

const form = document.getElementById('form') //a formot lekérjuk egy from valtozoba

form.addEventListener('submit', function(e){ //hozzáadunk egy eseménykezelőt a form submit eseményéhez
    e.preventDefault()  //meggatoljuk az alapveto mukodest
    const idoHTM = document.getElementById('korszak') //az idoHTM valtozoba kikerjuk a 'korszak' id-s elemet
    const evszamHTM = document.getElementById('evszam1') //az evszamHTM valtozoba kikerjuk a 'evszam1' id-s elemet
    const esemenyHTM = document.getElementById('megnev1') //az esemenyHTM valtozoba kikerjuk a 'megnev1' id-s elemet 
    const tananyagHTM = document.getElementById('tan1') //az tananyagHTM valtozoba kikerjuk a 'tan1' id-s elemet
    const evszam2HTM = document.getElementById('evszam2') //az evszam2HTM valtozoba kikerjuk a 'evszam2' id-s elemet
    const esemeny2HTM = document.getElementById('megnev2') //az esemeny2HTM valtozoba kikerjuk a 'megnev2' id-s elemet
    const tananyag2HTM = document.getElementById('tan2') //az tananyag2HTM valtozoba kikerjuk a 'tan2' id-s elemet

    const idoV = idoHTM.value //az idoV valtozo erteke a idoHTM erteke lesz
    const evszamV = evszamHTM.value //az evszamV valtozo erteke a evszamHTM erteke lesz
    const esemenyV = esemenyHTM.value //az esemenyV valtozo erteke a esemenyHTM erteke lesz
    const tananyagV = tananyagHTM.value //az tananyagV valtozo erteke a tananyagHTM erteke lesz
    const evszam2V = evszam2HTM.value //az evszam2V valtozo erteke a evszam2HTM erteke lesz
    const esemeny2V = esemeny2HTM.value //az esemeny2V valtozo erteke a esemeny2HTM erteke lesz
    const tananyag2V = tananyag2HTM.value //az tananyag2V valtozo erteke a tananyag2HTM erteke lesz

    const aktualis = e.currentTarget //az aktualis az aktualis form
    const errorok = aktualis.querySelectorAll('.error') //az aktualis error classait kivesszuk egy errorok valtozoba
    let errorszoveg = "A mező kitöltés kötelező!" //az 1. errorszoveg "A mező kitöltés kötelező!"
    let errorszoveg2 = "Mind a 3 kötelező!" //a 2. errorszioveg "Mind a 3 kötelező!"
    let valid = true //a valid alap erteke true

    for(const i of errorok) //vevigmegyunk az errorokon
        i.innerHTML = ""  //az i szovege ures
    

    if(!validate(idoHTM, errorszoveg)){ //ha a idoHTM ures akkor megyunnk be
        valid = false //a valid erteke false 
    }

    if(!validate(evszamHTM, errorszoveg)) { //ha a evszamHTM ures akkor megyunnk be
        valid = false //a valid erteke false 
    }

    if(!validate(esemenyHTM, errorszoveg)){ //ha a esemenyHTM ures akkor megyunnk be
        valid = false //a valid erteke false
    }
    
    if(!validate(tananyagHTM, errorszoveg)){ //ha a tananyagHTM ures akkor megyunnk be
        valid = false //a valid erteke false
    }

    if(!validate3(evszam2HTM,esemeny2HTM,tananyag2HTM,errorszoveg2)){ //ha a tananyag2HTM,esemeny2HTM,evszam2HTM kozul valamelyikben val szoveg, de valamelyikben nicns akkor megyunk be
        valid = falsea //a valid erteke false
    }

    if(valid){ //ha valid true akkor megyunkk be
        if(evszam2V != "" &&  esemeny2V != "" && tananyag2HTM != ""){ //ha az evszam2V,esemeny2V,tananyag2HTM nem uresek akkor megyunk be
            const ujob = {  //letrehozunk egy uj objektumot
                ido: idoV, //az ujoObj ido tulajdonsága az idoV
                evszam: evszamV, //az ujoObj evszam tulajdonsága az evszamV
                esemeny: esemenyV, //az ujoObj esemeny tulajdonsága az esemenyV
                tananyag: tananyagV, //az ujoObj tananyag tulajdonsága az tananyagV
                evszam2: evszam2V, //az ujoObj evszam2 tulajdonsága az evszam2V
                esemeny2: esemeny2V, //az ujoObj esemeny2 tulajdonsága az esemeny2V
                tananyag2: tananyag2V //az ujoObj tananyag2 tulajdonsága az tananyag2V
            }
            tomb.push(ujob) //a tombhoz hozzáadjuk az uj objektumot
        } 
        else { //ha uresek
            const ujob = {  //letrehozunk egy uj objektumot
                ido: idoV, //az ujoObj ido tulajdonsága az idoV
                evszam: evszamV, //az ujoObj evszam tulajdonsága az evszamV
                esemeny: esemenyV, //az ujoObj esemeny tulajdonsága az esemenyV
                tananyag: tananyagV, //az ujoObj tananyag tulajdonsága az tananyagV
            }
            tomb.push(ujob) //a tombhoz hozzáadjuk az uj objektumot
        }
    }
    table.innerHTML = "" ///cleareljuk a table-t
    RenderTable(tomb) //meghivjuk RenderTable-t a tomb paraméterrel
})
