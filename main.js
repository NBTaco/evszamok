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

const table = document.createElement('table')
document.body.appendChild(table)

RenderTable(tomb)

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
