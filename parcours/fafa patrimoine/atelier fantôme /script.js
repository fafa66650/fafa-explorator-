<!-- patrimoine9/intro.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>🎨 Atelier Fantôme – FAFA Patrimonio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(to bottom, #fdf4ff, #fce7f3);
      text-align: center;
      padding: 60px 20px;
      color: #831843;
    }
    .container {
      background: white;
      max-width: 750px;
      margin: auto;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 0 30px rgba(0,0,0,0.08);
      position: relative;
    }
    h1 {
      font-size: 2.4em;
      color: #be185d;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.15em;
      color: #9d174d;
      margin-bottom: 15px;
    }
    button {
      margin-top: 30px;
      padding: 16px 36px;
      font-size: 1.1em;
      border: none;
      border-radius: 12px;
      background: #db2777;
      color: white;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    button:hover {
      background: #be185d;
    }
    .logo {
      margin-bottom: 20px;
      animation: float 4s ease-in-out infinite;
    }
    footer {
      margin-top: 40px;
      font-size: 0.95em;
      color: #a21caf;
      opacity: 0.8;
    }
    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
      100% { transform: translateY(0); }
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="../../actifs/logo-fafa.png" alt="Logo FAFA" class="logo" width="100">
    <h1>🎨 Atelier Fantôme</h1>
    <p>Un atelier oublié, des toiles inachevées, et des visions étranges...</p>
    <p>Le pinceau disparu d’un artiste mythique semble hanter les lieux.</p>
    <p>Résous les 10 épreuves mêlant art, mystère et mémoire pour dévoiler le secret enfoui dans cet atelier fantôme.</p>
    <button onclick="demarrer()">👻 Commencer l'enquête artistique</button>
  </div>

  <footer>
    FAFA Patrimonio™ – Banyuls 2025
  </footer>

  <script>
    function demarrer() {
      localStorage.setItem("start", Date.now());
      location.href = "enigme1.html";
    }
  </script>
</body>
</html>


  <h2>🖌️ Épreuve 1 : Pinceau disparu</h2>
  <p>Quel outil revient dans chaque vision floue de l’atelier ?</p>
  <input id="rep"><button onclick="valider()">Valider</button>
  <script>
    function valider() {
      if (document.getElementById('rep').value.toLowerCase().includes("pinceau"))
        location.href = 'enigme2.html';
      else alert("Indice : utilisé pour peindre...");
    }
  </script>
</body>
</html>

<!-- patrimone9/enigme2.html -->
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Épreuve 2 – Couleur du rêve</title></head>
<body>
  <h2>🎨 Épreuve 2 : Couleur du rêve</h2>
  <p>Quelle couleur symbolise l'imaginaire et les souvenirs ?</p>
  <input id="rep"><button onclick="valider()">Valider</button>
  <script>
    function valider() {
      if (document.getElementById('rep').value.toLowerCase() === 'violet')
        location.href = 'enigme3.html';
      else alert("Entre bleu et rouge... une teinte onirique.");
    }
  </script>
</body>
</html>

<!-- patrimone9/enigme3.html -->
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Épreuve 3 – Message entre les lignes</title></head>
<body>
  <h2>🔍 Épreuve 3 : Message entre les lignes</h2>
  <p>Quel mot symbolise un souvenir qui reste ?</p>
  <input id="rep"><button onclick="valider()">Valider</button>
  <script>
    function valider() {
      if (document.getElementById('rep').value.toLowerCase() === 'souvenir')
        location.href = 'enigme4.html';
      else alert("Ce que laisse un fantôme ou une œuvre...");
    }
  </script>
</body>
</html>

<!-- patrimone9/enigme4.html -->
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Épreuve 4 – Photo</title></head>
<body>
  <h2>📸 Épreuve 4 : Photo de l’objet mystérieux</h2>
  <p>Prends une photo d’un objet ancien ou artistique dans l’atelier.</p>
  <button onclick="location.href='enigme5.html'">📷 Photo prise</button>
</body>
</html>

<!-- patrimone9/enigme5.html -->
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Épreuve 5 – Couleur manquante</title></head>
<body>
  <h2>🖍️ Épreuve 5 : Couleur manquante</h2>
  <p>Complète cette palette : Rouge, Bleu, Jaune, ?, Vert</p>
  <input id="rep"><button onclick="valider()">Valider</button>
  <script>
    function valider() {
      const val = document.getElementById('rep').value.toLowerCase();
      if (val === 'orange') location.href = 'enigme6.html';
      else alert("Couleur secondaire entre rouge et jaune");
    }
  </script>
</body>
</html>

<!-- patrimone9/enigme6.html -->
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Épreuve 6 – Anagramme cachée</title></head>
<body>
  <h2>🔤 Épreuve 6 : Anagramme</h2>
  <p>Réorganise : "FANTÔME"</p>
  <input id="rep"><button onclick="valider()">Valider</button>
  <script>
    function valider() {
      const r = document.getElementById('rep').value.toLowerCase();
      if (r.includes("montafé")) location.href = 'enigme7.html';
      else alert("Ce mot te paraît magique...");
    }
  </script>
</body>
</html>

<!-- patrimone9/enigme7.html -->
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Épreuve 7 – Mémoire visuelle</title></head>
<body>
  <h2>🧠 Épreuve 7 : Mémoire visuelle</h2>
  <p>Combien de tableaux sont accrochés dans l'atelier ?</p>
  <input id="rep"><button onclick="valider()">Valider</button>
  <script>
    function valider() {
      if (document.getElementById('rep').value === '4') location.href = 'enigme8.html';
      else alert("Compte bien chaque cadre...");
    }
  </script>
</body>
</html>

<!-- patrimone9/enigme8.html -->
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Épreuve 8 – Ombre et lumière</title></head>
<body>
  <h2>🌑 Épreuve 8 : Ombre et lumière</h2>
  <p>Le fantôme laisse une ombre étrange... Quel objet la projette ?</p>
  <input id="rep"><button onclick="valider()">Valider</button>
  <script>
    function valider() {
      if (document.getElementById('rep').value.toLowerCase().includes("lampe")) location.href = 'enigme9.html';
      else alert("Objet source de lumière dans la pièce...");
    }
  </script>
</body>
</html>

<!-- patrimone9/enigme9.html -->
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Épreuve 9 – Son mystère</title></head>
<body>
  <h2>🎵 Épreuve 9 : Son mystère</h2>
  <p>Quel instrument joue une mélodie dans l’atelier ?</p>
  <input id="rep"><button onclick="valider()">Valider</button>
  <script>
    function valider() {
      if (document.getElementById('rep').value.toLowerCase() === 'violon') location.href = 'enigme10.html';
      else alert("Un instrument à cordes, souvent nostalgique...");
    }
  </script>
</body>
</html>

<!-- patrimone9/enigme10.html -->
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Épreuve 10 – Mot final</title></head>
<body>
  <h2>🏁 Épreuve 10 : Le mot final</h2>
  <p>Quel mot résume l’ensemble de ton aventure ?</p>
  <input id="rep"><button onclick="valider()">Valider</button>
  <script>
    function valider() {
      const v = document.getElementById('rep').value.toLowerCase();
      if (v.includes('mémoire')) location.href = 'fin.html';
      else alert("Un mot lié au souvenir et au passé...");
    }
  </script>
</body>
</html>

<!-- patrimoine9/fin.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>🎨 Fin – Atelier Fantôme</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(to bottom, #fdf2f8, #fce7f3);
      text-align: center;
      padding: 60px 20px;
      color: #831843;
      overflow-x: hidden;
    }
    .container {
      background: white;
      max-width: 700px;
      margin: auto;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 0 30px rgba(0,0,0,0.08);
      position: relative;
    }
    h1 {
      font-size: 2.2em;
      margin-bottom: 20px;
      color: #be185d;
      animation: fadeIn 1.2s ease-in-out;
    }
    p {
      font-size: 1.15em;
    }
    .badge {
      margin: 30px auto;
      padding: 15px 25px;
      background: #db2777;
      color: white;
      display: inline-block;
      border-radius: 12px;
      font-size: 1.3em;
      animation: pulse 1.5s ease-in-out infinite alternate;
    }
    #chrono {
      font-size: 1.3em;
      margin-top: 20px;
      color: #9d174d;
    }
    .btn {
      margin: 20px 10px 0;
      padding: 12px 24px;
      font-size: 1em;
      border: none;
      border-radius: 8px;
      background: #be185d;
      color: white;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    .btn:hover {
      background: #9d174d;
    }
    .info {
      font-style: italic;
      margin-top: 25px;
      color: #701a3d;
    }
    .petals {
      position: absolute;
      background: rgba(219, 39, 119, 0.15);
      border-radius: 50%;
      animation: floatUp 12s linear infinite;
      opacity: 0.4;
    }
    .petals:nth-child(1) { width: 60px; height: 60px; left: 10%; animation-delay: 0s; }
    .petals:nth-child(2) { width: 40px; height: 40px; left: 60%; animation-delay: 3s; }
    .petals:nth-child(3) { width: 80px; height: 80px; left: 80%; animation-delay: 6s; }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      from { transform: scale(1); }
      to { transform: scale(1.05); }
    }
    @keyframes floatUp {
      from { bottom: -120px; }
      to { bottom: 100%; }
    }
  </style>
</head>
<body>
  <div class="petals"></div>
  <div class="petals"></div>
  <div class="petals"></div>

  <div class="container">
    <h1>🎨 Mystère Résolu !</h1>
    <p>Tu as rassemblé les fragments de mémoire et libéré l’esprit de l’atelier.</p>
    <div class="badge">🏅 Badge : Explorateur Artistique FAFA™</div>
    <p id="chrono">⏱️ Temps total : ...</p>
    <p class="info">💡 Le savais-tu ? L’atelier Maillol à Banyuls fut un haut lieu de création mêlant sculpture, peinture et méditation.</p>
    <button class="btn" onclick="location.href='../../index.html'">🏠 Retour au QG</button>
    <button class="btn" onclick="location.href='../../carnet-explorateur.html'">📘 Voir mon Carnet</button>
    <button class="btn" onclick="location.href='../../bonus-atelier.html'">🖌️ Bonus Fantôme</button>
  </div>

  <script>
    const nomParcours = "Atelier Fantôme";
    const debut = localStorage.getItem("start");
    const score = "10/10";

    if (debut) {
      const fin = Date.now();
      const duree = Math.floor((fin - debut) / 1000);
      const min = String(Math.floor(duree / 60)).padStart(2, '0');
      const sec = String(duree % 60).padStart(2, '0');
      const temps = `${min}m ${sec}s`;
      document.getElementById("chrono").innerText = `⏱️ Temps total : ${temps}`;

      let historique = JSON.parse(localStorage.getItem("fafa_explorations") || "[]");
      historique.push({ nom: nomParcours, temps: temps, score: score });
      localStorage.setItem("fafa_explorations", JSON.stringify(historique));
      localStorage.removeItem("start");
    }
  </script>
</body>
</html>
