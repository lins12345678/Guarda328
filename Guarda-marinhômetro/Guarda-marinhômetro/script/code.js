// programando o contador
const andre = document.querySelector(".select-1")
function contador(){
    const DD = document.querySelector("#d-dia");
    const UD = document.querySelector("#u-dia");
    const DH = document.querySelector("#d-hora");
    const UH = document.querySelector("#u-hora");
    const DM = document.querySelector("#d-min");
    const UM = document.querySelector("#u-min");
    const DS = document.querySelector("#d-s");
    const US = document.querySelector("#u-s");
   

    const now = new Date();
    const gm = new Date("December 9, 2023 00:00:00");
    let mls;
    let s;
    let h;
    let m;
    let d;
    
    mls = new Date("December 9, 2023 00:00:00") - new Date();
    s = mls/1000;
    m = s/60;
    h = m/60;
    d = h / 24;
    hd = h%24;
    md = m%60;
    sd = s%60;
    if (hd < 10){
        DH.value = "0";
        UH.value = hd.toString().charAt(0);
    }
    else{
        DH.value = hd.toString().charAt(0);
        UH.value = hd.toString().charAt(1);
    }
    if (md < 10){
        DM.value = "0";
        UM.value = md.toString().charAt(0);
    }
    else{
        DM.value = md.toString().charAt(0);
        UM.value = md.toString().charAt(1);
    }
    if (sd < 10){
        DS.value = "0";
        US.value = sd.toString().charAt(0);
    }
    else{
        DS.value = sd.toString().charAt(0);
        US.value = sd.toString().charAt(1);
    }
    if (d < 10){
        DD.value = "0";
        UD.value = d.toString().charAt(0);
    }
    else{
        DD.value = d.toString().charAt(0);;
        UD.value = d.toString().charAt(1);
    }

}
setInterval(contador, 1000);

const imgandre = document.querySelector(".select-1");
const audio1 = document.querySelector(".bom-dia");

// imgandre.addEventListener("click", setTimeout( () => {
//     imgandre.setAttribute("src", "img/lins1.jpeg");

// },500))

imgandre.addEventListener("click", () => {
    audio1.play();
});




