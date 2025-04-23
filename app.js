document.write("<h1>AAAAAAAAAAAAAAAAAAAAAA</h1>")

let nombre="Pancracio"

let nombresArray=["Juanita","Yunikua","Rigoberta"]
let edadesArray=[23,53,21]
let objeto={
    nombre:"Carlos",
    edad:25,
    cuenta:"alumno",
    notas:[6.8,6.2,7.0]
}

console.log(nombresArray)
console.log(edadesArray)
console.log(objeto)

var uno=1
var unoStr="1"

console.log(uno==unoStr)
console.log(uno===unoStr)

if(uno == unoStr){
    console.log("Son iguales")
}
if(uno === unoStr){
    console.log("Son iguales iguales")
}
else{
    console.log("No son iguales")
}

var datosAlumnos = "vespertino"

switch(datosAlumnos){
    case "diurno":
        console.log("Es diurno")
        break
    case "vespertino":
        console.log("es vespertino")
        break
    default:
        console.log("No es alumno")
        break
}

var cont = 1

while(cont <= 10){
    console.log(cont)
    cont ++
}

for(var i=0;i<nombresArray.length;i++){
    console.log(nombresArray[i])
}

var num = [45,33,22,14,8,24,3,12,1,44]
var cant = 0

for(var i=0;i<num.length;i++){
    if(num[i] % 2 == 0){
        console.log("el numero ",num[i]," es par.")
        cant ++
    }
}

console.log("Hay ",cant," numeros pares en total")