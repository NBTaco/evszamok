
/**
 * A függvény végigmegy egy tömbön, ami az array paraméterben adunk meg, és annak objektumai alapján létrehoz egy táblázatot a HTML-en
 * 
 * 
 * @param {Array} array a tömb ami alapján generálunk
 */
function RenderTable(array){
    fejlecGeneralas()

    const tbody = document.createElement('tbody')
    table.appendChild(tbody)

    for(let i = 0; i < array.length; i++){ 

        const aktualis = array[i]
        let index = 0

        const tbodyr1 = document.createElement('tr')
        tbody.appendChild(tbodyr1)
        
        const tbodyr2 = document.createElement('tr')
        tbody.appendChild(tbodyr2)

        for (const j in aktualis) {
            const td = document.createElement('td')
            td.innerHTML = aktualis[j]
        
            if (index === 0){
                td.rowSpan = 2;
                tbodyr1.appendChild(td)
            } 
            
            else if (index >= 1 && index <= 3){
                tbodyr1.appendChild(td)
            } 
            
            else if (index >= 4 && index <= 6){
                tbodyr2.appendChild(td)
            }
        
            index++
        }
    }
}

/**
 * A függvény egy a függvényen belüli objektum alaopján létrehozza a táblázat fejlécét, a függvényt a RenderTable()-ben használjuk
 */
function fejlecGeneralas(){
    const fejlec = {
        ido: "Időszak",
        evszam: "Évszám",
        esemeny: "Esemény",
        tananyag: "Tananyag"
    }
    const thead = document.createElement('thead')
    table.appendChild(thead)

    const tr = document.createElement('tr')
    thead.appendChild(tr)

    for(const j in fejlec){
        const th = document.createElement('th')
        th.innerHTML = fejlec[j]
        tr.appendChild(th)
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
function validate3(validelem1,validelem2,validelem3,errorszoveg){
    let valid = true
    const parent1 = validelem1.parentElement
    const parent2 = validelem2.parentElement
    const parent3 = validelem3.parentElement

    const error1 = parent1.querySelector('.error')
    const error2 = parent2.querySelector('.error')
    const error3 = parent3.querySelector('.error')

    if(!validate(validelem1, errorszoveg) && !validate(validelem2, errorszoveg)  && !validate(validelem3, errorszoveg)){
        error1.innerHTML = ""
        error2.innerHTML = ""
        error3.innerHTML = ""
    }
    else{
        if(!validate(validelem1, errorszoveg)){
            error1.innerHTML = errorszoveg
            valid = false
        }
        if(!validate(validelem2, errorszoveg)){
            error2.innerHTML = errorszoveg
            valid = false
        }
        if(!validate(validelem3, errorszoveg)){
            error3.innerHTML = errorszoveg
            valid = false
        }
    }
    return valid
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
function validate(elem, errorszoveg){ 
    let valid = true 
    if(elem.value === ""){
        const parent = elem.parentElement
        const errorhelye = parent.querySelector(".error") 
        if(errorhelye != ""){
            errorhelye.innerHTML = errorszoveg
        }
        valid = false
    }
    return valid 
}

/**
 * A függvény egy a függvényen belüli tomb alapján generál egy Form-ot a HTML-en
 */
function generateForm(){
    const formtomb = [
        {
            label: "Korszak megnevezése: ",
            id: "korszak",
        },
        {
            label: "1. esemény évszám:",
            id: "evszam1",
        },
        {
            label: "1. esemény megnevezés:",
            id: "megnev1",
        },
        {
            label: "1. esemény tananyag:",
            id: "tan1",
        },
        {
            label: "2. esemény évszám:",
            id: "evszam2",
        },
        {
            label: "2. esemény megnevezés:",
            id: "megnev2",
        },

        {
            label: "2. esemény tananyag:",
            id: "tan2",
        },
        
    ]

    const form = document.createElement('form')
    form.id = "form"
    form.action = "#"
    document.body.appendChild(form)

    for(let i = 0; i < formtomb.length; i++){
        const aktualis = formtomb[i]
        const div = document.createElement('div')
        form.appendChild(div)
        const label = document.createElement('label')
        label.innerHTML = aktualis.label
        div.appendChild(label)
        const br1 = document.createElement('br')
        div.appendChild(br1)
        if(aktualis.id == 'tan1' || aktualis.id == 'tan2'){
            const select = document.createElement('select')
            select.id = aktualis.id
            select.name = aktualis.id
            const option1 = document.createElement('option')
            option1.value = ''
            option1.innerHTML = ''
            select.appendChild(option1)
            const option2 = document.createElement('option')
            option2.value = 'magyar'
            option2.innerHTML = 'Magyar történelem'
            select.appendChild(option2)
            const option3 = document.createElement('option')
            option3.value = 'egyetemes'
            option3.innerHTML = 'Egyetemes történelem'
            select.appendChild(option3)
            div.appendChild(select)
        }
        else{
        const input = document.createElement('input')
        input.type = "text"
        input.id = aktualis.id
        input.name = aktualis.id
        div.appendChild(input)
        }
        const br2 = document.createElement('br')
        div.appendChild(br2)
        const span = document.createElement('span')
        span.classList = "error"
        div.appendChild(span)
        const br3 = document.createElement('br')
        div.appendChild(br3)
        
    }
    const button = document.createElement('button')
    button.innerHTML = "Hozzáadás"
    form.appendChild(button)
}


