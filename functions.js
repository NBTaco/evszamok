
/**
 * A függvény végigmegy egy tömbön, ami az array paraméterben adunk meg, és annak objektumai alapján létrehoz egy táblázatot a HTML-en
 * 
 * 
 * @param {Array} array a tömb ami alapján generálunk
 */
function RenderTable(array){ //letrehozom a RenderTable fuggvenyt egy array bementi paraméterrel
    fejlecGeneralas() //Meghivom a fejlecGeneralas fuggvenyt 

    const tbody = document.createElement('tbody') //letrehozom a tbodyt
    table.appendChild(tbody) //a tbodyt hozzáadom a table-hez

    for(let i = 0; i < array.length; i++){  //végigmegyunk az array objektumain

        const aktualis = array[i] //egy aktualis valtozoba kivesszuk az akualis objektumon
        let index = 0 //az index  alap erteke 0

        const tbodyr1 = document.createElement('tr') //letrehozunk egy sort
        tbody.appendChild(tbodyr1) //a sort hozzáadjuk a tbodyhoz
        
        const tbodyr2 = document.createElement('tr') //letrehozunk megegy sort
        tbody.appendChild(tbodyr2) //a sort hozzáadjuk a tbodyhoz

        for (const j in aktualis) {//vegigmegyunk az aktualis objektum tulajdonsagain
            const td = document.createElement('td') //letrehozunk egy td-tt
            td.innerHTML = aktualis[j] //a td szovege az aktualis tulajdonság
        
            if (index === 0){ //ha az index = 0 akkor megyunk be
                td.rowSpan = 2; //beallitjuk a rowspant a cellara
                tbodyr1.appendChild(td) //az elso soroz hozzadjuk a cellat
            } 
            
            else if (index >= 1 && index <= 3){ //ha az index 3,2,1 akkor megyunk be
                tbodyr1.appendChild(td) //az elso soroz hopzzadjuk a cellat
            } 
            
            else if (index >= 4 && index <= 6){ //ha az index 4,5,6 akkor megyunk be
                tbodyr2.appendChild(td) //a masodik soroz hozzadjuk a cellat
            }
        
            index++ //noveljukl az index erteket 1-el
        }
    }
}

/**
 * A függvény egy a függvényen belüli objektum alaopján létrehozza a táblázat fejlécét, a függvényt a RenderTable()-ben használjuk
 */
function fejlecGeneralas(){ //letrehozom a fejlecGeneralas fuggvenyt
    const fejlec = { //letrehozzuk a fejllec objektumát
        ido: "Időszak", //a fejlec objektum ido tulajdonsaga Időszak
        evszam: "Évszám", //a fejlec objektum evszam tulajdonsaga Évszám
        esemeny: "Esemény", //a fejlec objektum esemeny tulajdonsaga Esemény
        tananyag: "Tananyag" //a fejlec objektum tananyag tulajdonsaga Tananyag
    }
    const thead = document.createElement('thead') //letrehozzuk a theaddet
    table.appendChild(thead) //a theadet hozzaaduk a tablehez

    const tr = document.createElement('tr') //letrehozunk egy trt
    thead.appendChild(tr) //a tr t hozzaadjuk a theadhez

    for(const j in fejlec){ //vegigmegyunk a fejelc objektum tulajdonságain
        const th = document.createElement('th') //letrehozunk egy th-t
        th.innerHTML = fejlec[j] //a th szovege az objektum j. tulajdonsága
        tr.appendChild(th) //a trhez hozzaadjuk a th-t
    }
}

/**
 * A függvény 3 elemet mér össze (validelem1,validelem2,validelem3 paraméterek) ha mindegyik üres akkor mindegyiknek 
 * a hozzá tartozó error class-os spanjét üressre állítja, de ha bármelyikbe írva van valami, akkor azokba 
 * amelyekbe nincs semmi kiírja az errorukhoz az errorszoveg paraméternek megadott szöveget
 * 
 * a függvény használja a validate() függvényt
 * 
 * @param {HTMLElement} validelem1 Első HTML elem
 * @param {HTMLElement} validelem2 Második HTML elem
 * @param {HTMLElement} validelem3 Harmadik HTML elem
 * @param {string} errorszoveg Az error szövege
 * 
 * @returns True, ha átmegy, False ha nem
 */
function validate3(validelem1,validelem2,validelem3,errorszoveg){ //letrehozom a validate3 fuggvenyt
    let valid = true //a valid alap erteke true
    const parent1 = validelem1.parentElement //a parent1 a validelem1 parentelementje
    const parent2 = validelem2.parentElement //a parent2 a validelem2 parentelementje
    const parent3 = validelem3.parentElement //a parent3 a validelem3 parentelementje

    const error1 = parent1.querySelector('.error') //az error1 a parent1 error classos spanje
    const error2 = parent2.querySelector('.error') //az error2 a parent2 error classos spanje
    const error3 = parent3.querySelector('.error') //az error3 a parent3 error classos spanje

    if(!validate(validelem1, errorszoveg) && !validate(validelem1, errorszoveg)  && !validate(validelem3, errorszoveg)){ //ha a validelem1,2,3 is ures akkor megyunk be
        error1.innerHTML = "" //az error1 szovege ures string
        error2.innerHTML = "" //az error2 szovege ures string
        error3.innerHTML = "" //az error3 szovege ures string
    }
    else{ //ha valamelyik nem ures
        if(!validate(validelem1, errorszoveg)){ //ha a validelem1 ures akkor megyunk be
            error1.innerHTML = errorszoveg //az error1 szovege errorszoveg
            valid = false //a valid ertek false
        }
        if(!validate(validelem2, errorszoveg)){ //ha a validelem2 ures akkor megyunk be
            error2.innerHTML = errorszoveg //az error2 szovege errorszoveg
            valid = false //a valid ertek false
        }
        if(!validate(validelem3, errorszoveg)){ //ha a validelem3 ures akkor megyunk be
            error3.innerHTML = errorszoveg //az error3 szovege errorszoveg
            valid = false //a valid ertek false
        }
    }
    return valid //a valid ertekevel terunk vissza
}

/**
 * A függvény megnézi, hogy az elem- paraméternek megadott HTML elemnek van e szövege, 
 * ha van akkor nem lesz error szöveg, ha nincs akkor az errorszoveg- paraméternek megadott szöveget irja ki errornak
 * 
 * 
 * @param {HTMLElement} elem A validálni kívánt HTML elem
 * @param {string} errorszoveg Az error szövege
 * 
 * 
 * @returns True, ha átmegy, False ha nem

 */
function validate(elem, errorszoveg){  //letrehozom a validate fuggvenyt
    let valid = true //a valid alap erteke true
    if(elem.value === ""){ //ha az elem ures akkor megyunk be
        const parent = elem.parentElement //az elem parentjét kivesszuk egy parent valtozoba
        const errorhelye = parent.querySelector(".error") //az errorhelye a parnet error classos spanje
        if(errorhelye != ""){ //ha az error nem ures  akkor megyunk be
            errorhelye.innerHTML = errorszoveg //az error szovege errorszoveg parméter
        }
        valid = false //a valid ertek false
    }
    return valid  //a valid ertekevel terunk vissza
}

/**
 * A függvény egy a függvényen belüli tomb alapján generál egy Form-ot a HTML-en
 */
function generateForm(){ // letrehozzuk a generateForm fuggvenyt
    const formtomb = [ //letrehozom a formtombot, ami alapján generalodik a form
        {
            label: "Korszak megnevezése: ", //a formtomb 1. objektumának label tulajdonsága  Korszak megnevezése
            id: "korszak", //a formtomb 1. objektumának id tulajdonsága  korszak
        },
        {
            label: "1. esemény évszám:",   //a formtomb 2. objektumának label tulajdonsága  korszak
            id: "evszam1", //a formtomb 2. objektumának id tulajdonsága  korszak
        },
        {
            label: "1. esemény megnevezés:", //a formtomb 3. objektumának label tulajdonsága  korszak
            id: "megnev1", //a formtomb 3. objektumának id tulajdonsága  korszak
        },
        {
            label: "1. esemény tananyag:", //a formtomb 4. objektumának label tulajdonsága  korszak
            id: "tan1", //a formtomb 4. objektumának id tulajdonsága  korszak
        },
        {
            label: "2. esemény évszám:", //a formtomb 5. objektumának label tulajdonsága  korszak
            id: "evszam2", //a formtomb 5. objektumának id tulajdonsága  korszak
        },
        {
            label: "2. esemény megnevezés:", //a formtomb 6. objektumának label tulajdonsága  korszak
            id: "megnev2", //a formtomb 6. objektumának id tulajdonsága  korszak
        },
        {
            label: "2. esemény tananyag:", //a formtomb 7. objektumának label tulajdonsága  korszak
            id: "tan2", //a formtomb 7. objektumának id tulajdonsága  korszak
        },
        
    ]

    const form = document.createElement('form') //letrehozzuk a formot
    form.id = "form" //a form id-ja form
    form.action = "#" //a form actionje #
    document.body.appendChild(form) //a bodyhoz hozzaadjuk a formot

    for(let i = 0; i < formtomb.length; i++){ //vegigmegyunk a formtomb objektumain
        const aktualis = formtomb[i] //az aktualis  objektumot kivesszuk egy aktuialis valtozoba
        const div = document.createElement('div') //letrehozunk egy divet
        form.appendChild(div) //a dicet hozzaadjuk a formhoz
        const label = document.createElement('label') //letrehozunk egy labelt
        label.innerHTML = aktualis.label //a label szovege az aktualis objektum label tulajdonsága
        div.appendChild(label) //a divhez hozzaadjuk a labelt
        const br1 = document.createElement('br') //letrehozunk egy br-t
        div.appendChild(br1) //a divhez hozzaadjuk a br-t
        if(aktualis.id == 'tan1' || aktualis.id == 'tan2'){ //ha az aktualis id-je tan1 vagy tan2 akkor megyunk be, itt selectet hozunk lete
            const select = document.createElement('select') //letrehozzuk a selectet
            select.id = aktualis.id //a select id ja az aktualis objektum id tulajdonsaga
            select.name = aktualis.id //a select nameje az aktualis objektum id tulajdonsaga
            const option1 = document.createElement('option') //letrehozzuk az elso option-t
            option1.value = ''  //a masodik option erteke ures
            option1.innerHTML = '' //a masodik option szovege ures
            select.appendChild(option1) //az optiont hozzaadjuk a delecthez
            const option2 = document.createElement('option') //letrehozzuk a masodik option-t
            option2.value = 'magyar' //a masodik option erteke magyar
            option2.innerHTML = 'Magyar történelem' //a masodik option szovege Magyar történelem
            select.appendChild(option2) //az optiont hozzaadjuk a delecthez
            const option3 = document.createElement('option') //letrehozzuk a harmadik option-t
            option3.value = 'egyetemes' //a masodik option erteke egyetemes
            option3.innerHTML = 'Egyetemes történelem' //a masodik option szovege Egyetemes történelem
            select.appendChild(option3) //az optiont hozzaadjuk a delecthez
            div.appendChild(select) //a slectet hozzadjuk a divhez
        }
        else{ //ha az id nem tan1 vagy tan2
        const input = document.createElement('input')//letrehozunk egy inpuot 
        input.type = "text" //az input typeja text
        input.id = aktualis.id //az input idja az aktualis objetum id tulajdonsaga
        input.name = aktualis.id //az input nameje az aktualis objetum id tulajdonsaga
        div.appendChild(input) //a divhez hozzaadjuk az inputot
        }
        const br2 = document.createElement('br') //letertrhozunk megegy br-t
        div.appendChild(br2) //a br-t hozzadjuk a divhez
        const span = document.createElement('span') //letrehozunk egy span-t
        span.classList = "error" //a span classa error
        div.appendChild(span) //a spant hozzaadjuk a divhez
        const br3 = document.createElement('br')  //letertrhozunk megegy br-t
        div.appendChild(br3) //a br-t hozzaadjuk a divhez
        
    }
    const button = document.createElement('button') //letrehozunk egy buttont
    button.innerHTML = "Hozzáadás" //a button szovege Hozzáadás
    form.appendChild(button) //a buttont hozzaadjuk a formhoz
}


