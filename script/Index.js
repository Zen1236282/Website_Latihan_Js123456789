if(!window.matchMedia('screen and (max-width: 768px)').matches) document.body.innerHTML = '<h3 class="text-center">*Wehsite Hanya Bisa Dibuka Di HP*</h3>';
function DapatkanSalaman(){
  const hour = new Date().getHours();
  if(hour >= 5 && hour <= 10){
    return "Selamat Pagi";
  }else if(hour >= 11 && hour <= 15){
    return "Selamat Siang";
  }else if(hour >= 16 && hour <= 18){
    return "Selamat Sore";
  }else if(hour > 18 && hour < 20){
    return "Selamat Petang";
  }else if(hour >= 20 && hour <= 24){
    return "Selamat Malam";
  }else if(hour >= 1 && hour <= 4){
    return "Selamat Dini Hari";
  }
}
document.querySelector(".time").innerHTML = DapatkanSalaman();