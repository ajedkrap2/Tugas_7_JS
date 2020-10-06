function tugas7(){
  var tinggiSiswa = [154,143,145,146,169,175,149,168,158,180];

  console.log("Common For Looping");
  for (var i = 0; i < tinggiSiswa.length; i++) {
    console.log(tinggiSiswa[i]);
    // Dalam pengulangan biasa, diperlukan informasi yang lebih detil.
  }

  console.log("For-of Looping");
  for (let i of tinggiSiswa) {
    console.log(i);
    // Dalam pengulangan for of, hanya memerlukan variabel dasar dengan
    // variabel iterable atau array.
  }
}

tugas7();
