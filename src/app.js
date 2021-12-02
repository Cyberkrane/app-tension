let btnCalcular = document.querySelector(".btn")
let promPs = document.querySelector('#promedioPs')
let promDs = document.querySelector('#promedioDs')
let promPulso = document.querySelector('#promedioPulso')


btnCalcular.addEventListener('click', e => {
    e.preventDefault()
    let dato1 = parseInt(document.querySelector("#ps1").value)
    let dato2 = parseInt(document.querySelector("#ds1").value)
    let dato3 = parseInt(document.querySelector("#pulso1").value)
    let dato4 = parseInt(document.querySelector("#ps2").value)
    let dato5 = parseInt(document.querySelector("#ds2").value)
    let dato6 = parseInt(document.querySelector("#pulso2").value)
    let dato7 = parseInt(document.querySelector("#ps3").value)
    let dato8 = parseInt(document.querySelector("#ds3").value)
    let dato9 = parseInt(document.querySelector("#pulso3").value)

    let datosPS = (dato1 + dato4 + dato7) / 3
    let datosDS = (dato2 + dato5 + dato8) / 3
    let datosPulso = (dato3 + dato6 + dato9) / 3

    promPs.innerHTML = `
    <h3>${Math.round(datosPS)}</h3>
    `
    promDs.innerHTML = `
    <h3>${Math.round(datosDS)}</h3>
    `
    promPulso.innerHTML = `
    <h3>${Math.round(datosPulso)}</h3>
    `
})