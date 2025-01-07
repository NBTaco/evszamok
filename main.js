//tomb ami alapjan generalodik
const tomb = [
    {
        ido: "XVI. század",
        evszam: "1514",
        esemeny: "Dózsa-féle parasztháború",
        tananyag: "magyar",
        evszam2:"1519-1522",
        esemeny2:"Magellán körülhajózza a földet",
        tananyag2:"egyetemes"
    },
    {
        ido: "XVII. század",
        evszam: "1664",
        esemeny: "vasvári béke",
        tananyag: "magyar"
    },
    {
        ido: "XVIII. század",
        evszam: "1701-1714",
        esemeny: "spanyol örökösödési háború",
        tananyag: "egyetemes",
        evszam2: "1703-1711",
        esemeny2: "Rákóczi szabadságharc",
        tananyag2: "magyar"
    },
    {
        ido: "XIX. század",
        evszam: "1812",
        esemeny: "Napóleon oroszországi hadjárata",
        tananyag: "egyetemes",
        evszam2: "1809",
        esemeny2: "győri csata",
        tananyag2: "magyar"
    },
]

generateForm()

//table
const table = document.createElement('table')
document.body.appendChild(table)

//meghivas
RenderTable(tomb)

//table generalas
function RenderTable(array){
    fejlecGeneralas()

    const tbody = document.createElement('tbody')
    table.appendChild(tbody)

    for(let i = 0; i < array.length; i++){ 

        const aktualis = array[i]
        let index = 0
        let tulajdszam = 0

        for(const j in aktualis){
            tulajdszam++
        }

        const tbodyr1 = document.createElement('tr')
        tbodyr1.classList = 'a'
        tbody.appendChild(tbodyr1)
        
        const tbodyr2 = document.createElement('tr')
        tbodyr2.classList = 'b'
        tbody.appendChild(tbodyr2)

        for(const j in aktualis){
            if(index === 0){
                const td = document.createElement('td')
                td.innerHTML = aktualis[j] 
                td.rowSpan = 2 
                tbodyr1.appendChild(td)
            }

            if(index === 1){
                const td = document.createElement('td')
                td.innerHTML = aktualis[j]
                tbodyr1.appendChild(td)
            }

            if(index === 2){
                const td = document.createElement('td') 
                td.innerHTML = aktualis[j]
                tbodyr1.appendChild(td)
            }

            if(index === 3){
                const td = document.createElement('td')
                td.innerHTML = aktualis[j]
                tbodyr1.appendChild(td)
            }

            if(index === 4){ 
                const td5 = document.createElement('td')
                td5.innerHTML = aktualis[j] 
                tbodyr2.appendChild(td5) 
            }
            if(index === 5){ 
                const td = document.createElement('td')
                td.innerHTML = aktualis[j] 
                tbodyr2.appendChild(td) 
            }
            if(index === 6){ 
                const td = document.createElement('td')
                td.innerHTML = aktualis[j] 
                tbodyr2.appendChild(td) 
            }
            index++ 
        }
    }
}

//fejlec generalas
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

const form = document.getElementById('form')

form.addEventListener('submit', function(e){ 
    e.preventDefault() 
    const idoHTM = document.getElementById('korszak') 
    const evszamHTM = document.getElementById('evszam1') 
    const esemenyHTM = document.getElementById('megnev1') 
    const tananyagHTM = document.getElementById('tan1') 
    const evszam2HTM = document.getElementById('evszam2') 
    const esemeny2HTM = document.getElementById('megnev2') 
    const tananyag2HTM = document.getElementById('tan2') 

    const idoV = idoHTM.value 
    const evszamV = evszamHTM.value 
    const esemenyV = esemenyHTM.value
    const tananyagV = tananyagHTM.value 
    const evszam2V = evszam2HTM.value 
    const esemeny2V = esemeny2HTM.value 
    const tananyag2V = tananyag2HTM.value 

    const aktualis = e.currentTarget
    const errorok = aktualis.querySelectorAll('.error')
    let errorszoveg = "A mező kitöltés kötelező!"  
    let errorszoveg2 = "Mind a 3 kötelező!"  
    let valid = true

    for(const i of errorok)
        i.innerHTML = "" 
    

    if(!validate(idoHTM, errorszoveg)){
        valid = false 
    }
    

    if(!validate(evszamHTM, errorszoveg)) {
        valid = false 
    }

    if(!validate(esemenyHTM, errorszoveg)){
        valid = false 
    }

    if(!validate(tananyagV, errorszoveg)) {
        valid = false 
    }
    
    if(!validateinput(tananyagHTM, errorszoveg)){
        valid = false
    }

    if(!validate3(evszam2HTM,esemeny2HTM,tananyag2HTM,errorszoveg2)){
        valid = false
    }

    if(valid){
        if(evszam2V != "" &&  esemeny2V != "" && tananyag2HTM != ""){
            const ujob = { 
                ido: idoV,
                evszam: evszamV,
                esemeny: esemenyV,
                tananyag: tananyagV,
                evszam2: evszam2V,
                esemeny2: esemeny2V,
                tananyag2: tananyag2V
            }
            tomb.push(ujob)
        } 
        else { 
            const ujob = { 
                ido: idoV,
                evszam: evszamV,
                esemeny: esemenyV,
                tananyag: tananyagV,
            }
            tomb.push(ujob)
        }
    }
    table.innerHTML = ""
    RenderTable(tomb) 
})

function validate3(validelem1,validelem2,validelem3,errorszoveg){
    let valid = true
    const parent1 = validelem1.parentElement
    const parent2 = validelem2.parentElement
    const parent3 = validelem3.parentElement

    const error1 = parent1.querySelector('.error')
    const error2 = parent2.querySelector('.error')
    const error3 = parent3.querySelector('.error')

    if(!validate(validelem1, errorszoveg) && !validate(validelem2, errorszoveg)  && !validateinput(validelem3, errorszoveg)){
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

function validateinput(inputelem, errorszoveg){
    let valid = true;
    const parent = inputelem.parentElement;
    const errorhely = parent.querySelector(".error");

    if (inputelem.value === "") {
        if (errorhely) {
            errorhely.innerHTML = errorszoveg;
        }
        valid = false;
    } 
    else 
        errorhely.innerHTML = "";
    return valid
}


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

        if(aktualis.id == 'tan1' || aktualis.id == 'tan2'){
            const div = document.createElement('div')
            form.appendChild(div)
            const label = document.createElement('label')
            label.innerHTML = aktualis.label
            div.appendChild(label)
            const br1 = document.createElement('br')
            div.appendChild(br1)
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
            const br2 = document.createElement('br')
            div.appendChild(br2)
            const span = document.createElement('span')
            span.classList = "error"
            div.appendChild(span)
            const br3 = document.createElement('br')
            div.appendChild(br3)
        }
        else{
            const div = document.createElement('div')
            form.appendChild(div)
            const label = document.createElement('label')
            label.innerHTML = aktualis.label
            div.appendChild(label)
            const br1 = document.createElement('br')
            div.appendChild(br1)
            const input = document.createElement('input')
            input.type = "text"
            input.id = aktualis.id
            input.name = aktualis.id
            div.appendChild(input)
            const br2 = document.createElement('br')
            div.appendChild(br2)
            const span = document.createElement('span')
            span.classList = "error"
            div.appendChild(span)
            const br3 = document.createElement('br')
            div.appendChild(br3)
        }
    }
    const button = document.createElement('button')
    button.innerHTML = "Hozzáadás"
    form.appendChild(button)
}