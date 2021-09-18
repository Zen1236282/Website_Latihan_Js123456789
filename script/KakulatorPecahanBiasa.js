if(!window.matchMedia('screen and (max-width: 768px)').matches) document.body.innerHTML = '<h3 style="text-align:center;">*Wehsite Hanya Bisa Dibuka Di HP*</h3>';
const Kakulator = document.querySelectorAll("#Pembilang-1, #Pembilang-2, #Penyembut-2, #Penyembut-1, .calc-btn"),
langkah1 = document.querySelector(".Langkah-1"),
JenisKakulator = document.querySelector("#kakulator"),
langkah2 = document.querySelector(".Langkah-2"),
HasilPecahanBiasa = document.querySelector(".Hasil-Pecahan-Biasa"),
HasilDesimal = document.querySelector(".Hasil-Desimal");

function GetFpb(number1, number2) {
  if (!number2) return number1;
  return GetFpb(number2, number1 % number2);
};

function TampilkanHasil(hasilPembilang,hasilPenyebut){
  HasilPecahanBiasa.innerHTML = (hasilPembilang+"/"+hasilPenyebut).includes("-")?`<br/>${hasilPembilang.toString().replaceAll("-","")}<div>-<div class="garis"></div></div>${hasilPenyebut.toString().replaceAll("-","")}`:`<br/>${hasilPembilang}<div><div class="garis"></div><br/></div>${hasilPenyebut}`;
}
Kakulator[4].addEventListener("click", ()=>{
  if(!isNaN(parseInt(Kakulator[0].value) + parseInt(Kakulator[3].value)+parseInt(Kakulator[1].value) + parseInt(Kakulator[2].value))){
    
    const Pembilang1 = parseInt(Kakulator[0].value),
    Pembilang2 = parseInt(Kakulator[2].value),
    Penyebut1 = parseInt(Kakulator[1].value),
    Penyebut2 = parseInt(Kakulator[3].value);
      
    switch(JenisKakulator.value){
      case 'tambah':
      (function(){
        let hasilPembilang = (Pembilang1 * Penyebut2) + (Pembilang2 * Penyebut1),
        hasilPenyebut = Penyebut1 * Penyebut2;
        
        const FPB = GetFpb(hasilPembilang,hasilPenyebut);
        langkah1.innerHTML = `<br/>(${Pembilang1}x${Penyebut2})+(${Pembilang2}x${Penyebut1})<br/><div class="garis"></div><br/>${Penyebut1}x${Penyebut2}`;
        
        langkah2.innerHTML = `${hasilPembilang}:${FPB}<br/><div class="garis"></div><br/>${hasilPenyebut}:${FPB}`;
        
        hasilPembilang /= FPB, hasilPenyebut /= FPB;
        TampilkanHasil(hasilPembilang,hasilPenyebut);
      })();
      break;
      case 'kurang':
      (function(){
        let hasilPembilang = (Pembilang1 * Penyebut2) - (Penyebut1 * Pembilang2),
        hasilPenyebut = Penyebut1 * Penyebut2;
        
        const FPB = GetFpb(hasilPembilang,hasilPenyebut);
        
        langkah1.innerHTML = `<br/>(${Pembilang1}x${Penyebut2})-(${Pembilang2}x${Penyebut1})<br/><div class="garis"></div><br/>${Penyebut1}x${Penyebut2}`;
        
        langkah2.innerHTML = `${hasilPembilang}:${FPB}<br/><div class="garis"></div><br/>${hasilPenyebut}:${FPB}`;
        hasilPembilang /= FPB, hasilPenyebut /= FPB;
        
        TampilkanHasil(hasilPembilang,hasilPenyebut);
      })();
      break;
      case 'kali':
      (function(){
        let hasilPembilang = Pembilang1 * Pembilang2,
        hasilPenyebut = Penyebut1 * Penyebut2;
        
        const FPB = GetFpb(hasilPembilang,hasilPenyebut);
        
        langkah1.innerHTML = `<br/>${Pembilang1}x${Pembilang2}<br/><div class="garis"></div><br/>${Penyebut1}x${Penyebut2}`;
        
        langkah2.innerHTML = `${hasilPembilang}:${FPB}<br/><div class="garis"></div><br/>${hasilPenyebut}:${FPB}`;
        
        hasilPembilang /= FPB, hasilPenyebut /= FPB;
        TampilkanHasil(hasilPembilang,hasilPenyebut);
      })();
      break;
      default:
        alert("<ERROR>");
    }
  }else{
    alert("<ERROR>");
  }
});