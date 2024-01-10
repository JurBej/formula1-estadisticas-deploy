document.getElementById("mostrar").addEventListener("click",async ()=>{
    const resultado=document.getElementById("result");
    const bando=document.getElementById("bando").value;

    try{
        const respuesta=await fetch(`./u6e5_normandia.php?bando=`+bando);
        
        if(!respuesta.ok){
            throw `Error ${respuesta.status} de la BBDD: ${respuesta.statusText}`
        }

        const myData=await respuesta.json();
        myData.forEach(element => {
            const tr=document.createElement("tr");
            const td=document.createElement("td");
            const img=document.createElement("img");
            img.classList.add("img");
            img.src=`./armas/${element.imagen}`;
            td.appendChild(img);
            tr.appendChild(td);

            const td1=document.createElement("td");
            td1.innerHTML=element.nombre;
            tr.appendChild(td1)
    
            const td2=document.createElement("td");
            td2.innerHTML=element.descripcion;
            tr.appendChild(td2);

            resultado.appendChild(tr);
        });

    }catch(err){
        console.log(err);
    }
})