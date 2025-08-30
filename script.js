// ================= EXPLORE MODAL =================
document.querySelector(".cta").addEventListener("click", () => {
  const modal = document.getElementById("exploreModal");
  const msg = document.getElementById("exploreMsg");

  msg.innerText = "Senang kamu mau menjelajahi website ini 🎉";
  modal.style.display = "flex";
});

function closeExploreModal() {
  document.getElementById("exploreModal").style.display = "none";
}

// ================= HEADQUARTER INFO MODAL =================
function showInfo(city) {
  const modal = document.getElementById("infoModal");
  const title = document.getElementById("cityTitle");
  const desc = document.getElementById("cityDesc");

  const info = {
    jakarta: {
      title: "🏙️ Jakarta",
      desc: `Jakarta, secara resmi bernama Daerah Khusus Ibukota Jakarta (DKI Jakarta),
      adalah ibu kota Indonesia sekaligus daerah otonom setingkat provinsi.
      Dikenal sebagai "The Big Durian", kota ini menjadi pusat bisnis, politik, dan budaya.`
    },
    bandung: {
      title: "🌄 Bandung",
      desc: `Bandung adalah ibu kota Provinsi Jawa Barat dan kota terbesar ketiga di Indonesia.
      Dijuluki "Kota Kembang" dan "Paris van Java", terkenal dengan kuliner, fashion, dan wisata kreatifnya.`
    },
    surabaya: {
      title: "⚓ Surabaya",
      desc: `Surabaya adalah ibu kota Provinsi Jawa Timur sekaligus kota terbesar kedua di Indonesia.
      Dijuluki "Kota Pahlawan" karena pertempuran bersejarah 10 November 1945.`
    }
  };

  title.innerText = info[city].title;
  desc.innerText = info[city].desc;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("infoModal").style.display = "none";
}

window.addEventListener("click", (event) => {
  const infoModal = document.getElementById("infoModal");
  if (event.target === infoModal) closeModal();
});

// ================= PROJECT MODAL =================
function showProject(id) {
  const modal = document.getElementById("projectModal");
  const title = document.getElementById("projectTitle");
  const desc = document.getElementById("projectDesc");
  const img = document.getElementById("projectImg");

  const projects = {
    1: {
      title: "🚀 Project 1 - Website Company Profile",
      desc: `Website company profile modern dengan desain responsif.<br>
             • Dibuat dengan HTML, CSS, dan JavaScript.<br>
             • Halaman: Home, About, Portfolio, Contact.<br>
             • Fitur: animasi hover & modal info.`,
      img: "https://picsum.photos/600/300?random=1"
    },
    2: {
      title: "📱 Project 2 - Mobile App UI",
      desc: `Desain UI aplikasi mobile minimalis.<br>
             • Menggunakan Figma untuk prototyping.<br>
             • Tampilan clean dan user friendly.<br>
             • Tema warna biru pastel.`,
      img: "https://picsum.photos/600/300?random=2"
    },
    3: {
      title: "🖥️ Project 3 - Dashboard Admin",
      desc: `Sistem dashboard interaktif untuk admin.<br>
             • Dibuat dengan React.js dan Tailwind CSS.<br>
             • Menampilkan grafik data dengan Chart.js.<br>
             • Fitur: login, statistik, dan manajemen data.`,
      img: "https://picsum.photos/600/300?random=3"
    }
  };

  title.innerHTML = projects[id].title;
  desc.innerHTML = projects[id].desc;
  img.src = projects[id].img;

  modal.style.display = "flex";
}

function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}

window.addEventListener("click", (event) => {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) closeProjectModal();
});

// ================= FORM MESSAGE =================
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const tgl = document.getElementById("tgl").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const pesan = document.getElementById("pesan").value;

  document.getElementById("outNama").innerText = nama;
  document.getElementById("outTgl").innerText = tgl;
  document.getElementById("outGender").innerText = gender;
  document.getElementById("outPesan").innerText = pesan;

  const now = new Date();
  document.getElementById("time").innerText = now.toLocaleString();

  showToast("Pesan berhasil dikirim!");
});

// ================= TOAST =================
function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = msg;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("hide"), 2000);
  setTimeout(() => toast.remove(), 3000);
}