fetch("https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json")
.then(x => x.json())
.then(y => megjelenit(y));

var tomb = []

function megjelenit(y){
    console.log(y)
    tomb = y
    var szoveg=""
    var index = 0;
    for (const elem of y) {
        szoveg+=`
        
        <div class="col-12 col-sm-6 col-md-6 col-lg-4">
            <div class="kepek">
                <h3 class="neve">${elem.name}</h3>
                <img class="img-fluid kepmeret" src="${elem.image}" alt=""> 
                <button id="${index}" onclick="kattintas(this)" class="gomb btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">${elem.name}</button>
            </div>
        </div>
        `
        index++
    }
document.getElementById("nevek").innerHTML=szoveg
}

function kattintas(gomb){
    //alert(gomb.id)
    document.getElementById("cím").innerHTML = tomb[gomb.id].name
    document.getElementById("adatok").innerHTML = `<img class="img-fluid" src="${tomb[gomb.id].image}" alt="">` + "<br>"
    document.getElementById("adatok").innerHTML += "<b>Színész neve:</b> <i>" + tomb[gomb.id].actor + "</i><br>"
    document.getElementById("adatok").innerHTML += "<b>Születési dátum:</b> <i>" + tomb[gomb.id].dateOfBirth + "</i><br>"
    document.getElementById("adatok").innerHTML += "<b>Ház neve:</b> <i>" + tomb[gomb.id].house + "</i><br>"
    document.getElementById("adatok").innerHTML += "<b>Patronus:</b> <i>" + tomb[gomb.id].patronus + "</i><br>"
    document.getElementById("adatok").innerHTML += "<b>Varázspálca:</b> <i>" + tomb[gomb.id].wand.core + "</i><br>"
}



//több oszlopos gridbe legyenek a szereplők képei, kattintásra alatta lévő gombon, modális ablakban részletes adatok