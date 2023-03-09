function getDataPersegiPanjang() {
  var panjangPersegiPanjang = document.getElementById("panjangPP").value;
  panjangPersegiPanjang = parseInt(panjangPersegiPanjang);
  var lebarPersegiPanjang = document.getElementById("lebarPP").value;
  lebarPersegiPanjang = parseInt(lebarPersegiPanjang);

  const hasilLuasPP = panjangPersegiPanjang * lebarPersegiPanjang;
  const hasilKelilingPP = (panjangPersegiPanjang + lebarPersegiPanjang) * 2;

  console.log(hasilLuasPP);
  console.log(hasilKelilingPP);

  document.getElementById("hasilLuasPP").innerHTML =
    hasilLuasPP + " cm<sup>2</sup>";
  document.getElementById("hasilKelilingPP").innerHTML =
    hasilKelilingPP + " cm";
}
