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
        evszam: "1809",
        esemeny: "győri csata",
        tananyag: "magyar"
    },
]

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