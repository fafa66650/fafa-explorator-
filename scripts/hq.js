<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>FAFA HQ™ – Panneau Admin</title>
  <link rel="stylesheet" href="scripts/hq.css">
  <script defer src="scripts/hq.js"></script>
</head>
<body>
  <h1>🧠 FAFA HQ™ – Panneau de Contrôle</h1>

  <div class="section">
    <h2>🔓 Déverrouiller un parcours</h2>
    <label>Nom du parcours à débloquer :</label>
    <input type="text" id="unlockInput" placeholder="ex : run" />
    <button onclick="unlockParcours()">Débloquer</button>
  </div>

  <div class="section">
    <h2>📩 Envoyer un message aux joueurs</h2>
    <label>Message :</label>
    <textarea rows="4" id="adminMessage" placeholder="Tape ton message ici..."></textarea>
    <button onclick="envoyerMessage()">Envoyer</button>
  </div>

  <div class="section">
    <h2>🕒 Voir les scores</h2>
    <button onclick="afficherScores()">Afficher les scores</button>
    <pre id="scoreResult"></pre>
    <button onclick="exportCSV()">📁 Exporter CSV</button>
  </div>

  <footer>
    <p class="footer-text">© FAFA™ — Interface privée. Ne pas partager sans autorisation.</p>
  </footer>

  <audio id="audioHQ" autoplay loop>
    <source src="assets/audio/admin-connexion.mp3" type="audio/mpeg" />
  </audio>
</body>
</html>
