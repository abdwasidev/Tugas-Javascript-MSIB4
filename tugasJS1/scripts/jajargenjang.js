function getDataJajarGenjang() {
  var alasJajarGenjang = document.getElementById("sisiAJajarGenjang").value;
  alasJajarGenjang = parseInt(alasJajarGenjang);
  var sisiMiringJajarGenjang =
    document.getElementById("sisiBJajarGenjang").value;
  sisiMiringJajarGenjang = parseInt(sisiMiringJajarGenjang);
  var tinggiJajarGenjang = document.getElementById("tinggiJajarGenjang").value;
  tinggiJajarGenjang = parseInt(tinggiJajarGenjang);

  const hasilLuasJajarGenjang = alasJajarGenjang * tinggiJajarGenjang;
  const hasilKelilingJajarGenjang =
    2 * (alasJajarGenjang + sisiMiringJajarGenjang);

  console.log(hasilLuasJajarGenjang);
  console.log(hasilKelilingJajarGenjang);

  document.getElementById("hasilLuasJajarGenjang").innerHTML =
    hasilLuasJajarGenjang + " cm<sup>2</sup>";
  document.getElementById("hasilKelilingJajarGenjang").innerHTML =
    hasilKelilingJajarGenjang + " cm";
}
