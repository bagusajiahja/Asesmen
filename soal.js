// === KONFIGURASI ===
// Tempel URL Web App Google Apps Script (lihat apps-script.gs) di bawah ini.
const API_URL = "";

const PG = [
{q:"Struktur teks eksplanasi yang berisi penjelasan rantai proses mengapa suatu fenomena dapat terjadi adalah...",o:["Pernyataan Umum","Deretan Penjelas (Kausalitas)","Interpretasi","Asumsi Penulis"],k:1},
{q:"Di bawah ini yang merupakan ciri bahasa utama dalam menjelaskan hubungan sebab-akibat adalah...",o:["Menggunakan kata sifat subjektif","Menggunakan konjungsi dan kata kerja kausalitas","Menggunakan kata kiasan dan majas","Menggunakan kalimat perintah keras"],k:1},
{q:"Mengapa data fakta terverifikasi sangat krusial dalam deretan penjelas teks eksplanasi?",o:["Agar teks terlihat tebal dan formal","Memastikan alur sebab-akibat bersifat objektif dan valid secara ilmiah","Agar penulis mendapatkan pujian di media sosial","Karena opini pribadi dilarang dalam seluruh komunikasi"],k:1},
{q:"Hormon di dalam tubuh yang berfungsi mengatur pelepasan rasa kantuk sesuai pencahayaan lingkungan adalah...",o:["Dopamin","Melatonin","Kortisol","Adrenalin"],k:1},
{q:"Istilah teknis yang menggambarkan kondisi otak yang tetap aktif dan terstimulasi akibat notifikasi gawai adalah...",o:["Insomnia","Hyper-arousal","Nomophobia","FOMO"],k:1},
{q:"Perhatikan alur: <i>Screen-time malam → Melatonin tertekan → Insomnia.</i> Alur tersebut merupakan bentuk...",o:["Identifikasi fenomena umum","Rantai kausalitas (sebab-akibat) deretan penjelas","Kesimpulan akhir penulis","Pengenalan judul teks"],k:1},
{q:"Mengapa teks eksplanasi fenomena digital digolongkan sebagai teks kompleks?",o:["Karena hanya bisa dibaca oleh para ilmuwan","Karena memuat rangkaian sebab-akibat yang bertahap dan saling memengaruhi","Karena menggunakan bahasa latin di setiap kalimatnya","Karena tidak menyertakan gambar atau ilustrasi"],k:1},
{q:"Keunggulan menyajikan teks eksplanasi ke dalam bentuk diagram infografis di Padlet adalah...",o:["Menghemat baterai HP","Memperjelas visualisasi alur sebab-akibat yang abstrak agar lebih mudah dipahami","Memungkinkan murid menyalin teks tanpa dibaca","Menghilangkan syarat keakuratan data fakta"],k:1},
{q:"Tindakan membandingkan klaim internet dengan situs CekFakta atau riset ilmiah dinamakan...",o:["Menyusun bagan","Validasi data / membaca kritis","Menulis deskripsi","Membaca cepat"],k:1},
{q:"Konjungsi yang menunjukkan akibat dalam deretan penjelas adalah...",o:["Karena, sebab","Akibatnya, sehingga, oleh karena itu","Sebelum, sesudah","Atau, serta"],k:1},
{q:"Dampak jangka panjang gangguan sirkadian akibat gawai terhadap performa murid di sekolah adalah...",o:["Nilai pelajaran otomatis meningkat","Penurunan daya ingat, fokus belajar, dan stamina tubuh","Meningkatnya kemampuan mengingat istilah","Tidak ada dampak sama sekali"],k:1},
{q:"<i>Fitur Infinite Scroll sengaja dirancang untuk menjaga durasi atensi pengguna.</i> Kalimat tersebut tergolong...",o:["Fakta ilmiah terverifikasi","Hoaks/Mitos berlebihan","Pernyataan opini pribadi","Istilah konotatif"],k:0},
{q:"Bagian akhir teks eksplanasi yang memuat intisari atau simpulan pandangan atas fenomena dinamakan...",o:["Pernyataan Umum","Deretan Penjelas","Interpretasi / Penutup","Orientasi Ulang"],k:2},
{q:"Apa yang terjadi jika bagian <i>Deretan Penjelas</i> disusun tanpa alur kausalitas yang runtut?",o:["Teks menjadi lebih mudah dibaca","Pembaca mengalami kerancuan logika (<i>logical fallacy</i>) dalam memahami penyebab fenomena","Data fakta ilmiah otomatis menjadi hoaks","Istilah teknis tidak dapat diketik di platform"],k:1},
{q:"Menyiapkan bahan ajar terverifikasi sebelum diskusi kelompok bertujuan untuk...",o:["Melarang murid berpikir kritis","Memfokuskan murid pada kegiatan menganalisis data dan mengonstruksi alur kausalitas","Mengurangi durasi jam pelajaran di kelas","Mengharuskan murid menghafal seluruh teks"],k:1}
];

const CM = {
a:[`"Fenomena kecanduan gawai di malam hari marak terjadi pada remaja era digital."`,
`"Cahaya biru menekan melatonin → Dopamin melonjak → Jam biologis terganggu."`,
`<i>Dopamin, Melatonin, Ritme Sirkadian, Hyper-arousal.</i>`,
`"Oleh karena itu, batasi penggunaan gawai 60 menit sebelum tidur agar kualitas tidur terjaga."`,
`"Hasil riset medis membuktikan paparan layar gawai menurunkan durasi tidur <i>REM Sleep</i>."`],
b:["Istilah Teknis / Neurobiologi","Pernyataan Umum (Identifikasi Fenomena)","Deretan Penjelas (Rantai Kausalitas)","Validasi Fakta Terverifikasi","Interpretasi / Simpulan Penutup"],
k:[1,2,0,4,3]
};

const UR = [
{q:"<b>Menganalisis Alur Kausalitas.</b> Berdasarkan Kartu Kasus Canva yang diberikan guru, uraikan rantai sebab-akibat (kausalitas) secara berurutan mulai dari pemicu utama hingga dampak akhir yang dialami remaja saat menggunakan gawai di malam hari!",
k:"Pemicu utama: paparan cahaya biru (blue light) dari layar gawai dan interaksi dengan fitur infinite scroll. Proses biologis/psikologis: cahaya biru menekan produksi melatonin, sementara konten menarik memicu lonjakan dopamin sehingga otak hyper-arousal (tetap aktif). Dampak akhir: ritme sirkadian terganggu, menyebabkan insomnia, penurunan durasi tidur REM, serta penurunan fokus dan daya ingat di sekolah pada pagi hari."},
{q:"<b>Menevaluasi & Memvalidasi Informasi.</b> Di media sosial beredar klaim: \"Menatap layar HP sebelum tidur dapat membakar sel otak remaja secara spontan.\" Berdasarkan prinsip validasi data dan materi eksplanasi yang kamu pelajari, analisis mengapa klaim tersebut salah dan bagaimana narasi ilmiah yang benar untuk menggantikannya!",
k:"Evaluasi: klaim tersebut hoaks/mitos berlebihan karena tidak didukung bukti medis empiris tentang pembakaran sel otak secara spontan akibat gawai. Narasi pembetulan: paparan cahaya biru menekan pelepasan melatonin sehingga menunda rasa kantuk alami dan mengganggu kualitas tidur (bukan membakar sel otak)."},
{q:"<b>Mengonstruksi Kebahasaan Kausalitas.</b> Buatlah satu paragraf bagian Deretan Penjelas yang memadukan konjungsi kausalitas (seperti \"akibatnya\" atau \"oleh karena itu\") serta menggunakan 3 istilah teknis berikut: <i>Melatonin, Dopamin,</i> dan <i>Sirkadian</i>!",
k:"Contoh tepat: \"Ketika remaja menatap layar gawai sebelum tidur, paparan cahaya biru secara langsung menekan pelepasan hormon melatonin di otak. Akibatnya, stimulasi notifikasi mendesak pelepasan dopamin yang membuat otak tetap aktif dan menunda rasa kantuk. Oleh karena itu, ritme sirkadian atau jam biologis tubuh menjadi terganggu hingga memicu masalah insomnia.\""},
{q:"<b>Memirsa & Evaluasi Media Visual.</b> Mengapa kelompokmu memilih menyajikan rantai sebab-akibat ke dalam bentuk diagram alur visual di Padlet dibanding paragraf teks panjang? Analisis dari sudut pandang kemudahan membaca kritis!",
k:"Visualisasi hubungan: diagram alur dengan penanda panah membuat rantai kausalitas (sebab → akibat) yang rumit terlihat lebih jelas dan runtut. Efisiensi kognitif: pembaca dapat langsung memverifikasi pemicu, proses biologis, dan dampak tanpa kelelahan membaca teks panjang (information overload)."},
{q:"<b>Refleksi Kritis & Solusi.</b> Setelah memirsa dan menganalisis alur kausalitas fenomena screen-time, rumuskan 2 tindakan solutif rasional yang berbasis pada pemutusan rantai kausalitas biologis agar remaja tidak mengalami gangguan tidur akibat gawai!",
k:"Solusi 1 (memutus pemicu cahaya biru): menghentikan penggunaan gawai 1–2 jam sebelum tidur atau mengaktifkan filter cahaya biru agar melatonin dapat diproduksi secara alami. Solusi 2 (memutus stimulasi dopamin): menjauhkan gawai dari tempat tidur (misalnya di meja belajar) untuk menghilangkan dorongan memeriksa notifikasi malam hari."}
];
