function GajiTotalKaryawan() {
  let gajiPokok, tunjanganKeluarga;
  const name = document.getElementById("yourName").value;
  let jabatan = document.getElementById("pilihJabatan").value;
  let tunjanganJabatan = document.getElementById("tunjanganJabatan").value;
  let bpjs = document.getElementById("bpjs").value;
  let status = document.getElementById("pilihStatus").value;

  //   IF ELSE
  //   =====================================================================
  if (document.getElementById("pilihJabatan").value == "Manager") {
    gajiPokok = 10000000;
  } else if (
    document.getElementById("pilihJabatan").value == "Asisten Manager"
  ) {
    gajiPokok = 8000000;
  } else if (document.getElementById("pilihJabatan").selectedIndex == "Staff") {
    gajiPokok = 5000000;
  } else {
    alert("Salah Input Jabatan");
  }

  //   SWITCH CASE
  //   =====================================================================
  switch (document.getElementById("pilihStatus").value) {
    case "Menikah":
      tunjanganKeluarga = 0.1;
      break;
    case "Belum Menikah":
      tunjanganKeluarga = 0;
      break;
    default:
      alert("Salah Input Status");
  }

  //   =====================================================================
  let totalGaji =
    gajiPokok +
    (gajiPokok * tunjanganJabatan) / 100 +
    (gajiPokok * bpjs) / 100 +
    gajiPokok * tunjanganKeluarga;

  //   =====================================================================
  document.getElementById("getName").innerHTML = name;
  document.getElementById("getJabatan").innerHTML = jabatan;
  document.getElementById("getGajiPokok").innerHTML =
    "Rp. " + gajiPokok.toLocaleString("id-ID") + ",00";
  document.getElementById("getTunjanganJabatan").innerHTML =
    tunjanganJabatan + "% Gaji Pokok";
  document.getElementById("getBPJS").innerHTML = bpjs + "% Gaji Pokok";
  document.getElementById("getStatusPernikahan").innerHTML = status;
  document.getElementById("getTotalGaji").innerHTML =
    "Rp. " + totalGaji.toLocaleString("id-ID") + ",00";
}
