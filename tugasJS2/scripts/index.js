function GajiTotalKaryawan() {
  let gajiPokok, tunjanganKeluarga;
  const name = document.getElementById("yourName").value;
  let jabatan = document.getElementById("pilihJabatan").value;
  let tunjanganJabatan = document.getElementById("tunjanganJabatan").value;
  let bpjs = document.getElementById("bpjs").value;
  let status = document.getElementById("pilihStatus").value;

  //   IF ELSE
  //   =====================================================================
  if (jabatan == "Manager") {
    gajiPokok = 10000000;
  } else if (jabatan == "Asisten Manager") {
    gajiPokok = 8000000;
  } else if (jabatan == "Staff") {
    gajiPokok = 5000000;
  } else {
    Swal.fire({
      icon: "error",
      title: "<h5 style='color:#6e91fe'>Oops...</h5>",
      color: "red",
      background: "#f2f5ff",
      text: "Anda Salah Input Jabatan",
      confirmButtonColor: "#6e91fe",
    });
  }

  //   SWITCH CASE
  //   =====================================================================
  switch (status) {
    case "Menikah":
      tunjanganKeluarga = 0.1;
      break;
    case "Belum Menikah":
      tunjanganKeluarga = 0;
      break;
    default:
      Swal.fire({
        icon: "error",
        title: "<h5 style='color:#6e91fe'>Oops...</h5>",
        color: "red",
        background: "#f2f5ff",
        text: "Anda Salah Input Status",
        confirmButtonColor: "#6e91fe",
      });
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
