function getDataSegitiga() {
  var sisiASegitiga = document.getElementById("sisiASegitiga").value;
  sisiASegitiga = parseInt(sisiASegitiga);
  var sisiBSegitiga = document.getElementById("sisiBSegitiga").value;
  sisiBSegitiga = parseInt(sisiBSegitiga);
  var sisiCSegitiga = document.getElementById("sisiCSegitiga").value;
  sisiCSegitiga = parseInt(sisiCSegitiga);

  const hasilLuasSegitiga = (sisiASegitiga + sisiBSegitiga + sisiCSegitiga) / 2;
  const hasilKelilingSegitiga = sisiASegitiga + sisiBSegitiga + sisiCSegitiga;

  console.log(hasilLuasSegitiga);
  console.log(hasilKelilingSegitiga);

  document.getElementById("hasilLuasSegitiga").innerHTML =
    hasilLuasSegitiga + " cm<sup>2</sup>";
  document.getElementById("hasilKelilingSegitiga").innerHTML =
    hasilKelilingSegitiga + " cm";
}
