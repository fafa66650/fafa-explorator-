<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>🧠 FAFA HQ™ – Panneau de Contrôle</title>
  <link rel="stylesheet" href="../assets/style/hq.css">
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
    <textarea rows="4" id="messageInput" placeholder="Tape ton message ici..."></textarea>
    <button onclick="sendMessage()">Envoyer</button>
  </div>

  <div class="section">
    <h2>🕒 Voir les scores</h2>
    <button onclick="showScores()">Afficher les scores</button>
    <pre id="scoreLog"></pre>
  </div>

  <div class="section">
    <h2>📜 Journal des actions</h2>
    <button onclick="viewLog()">Afficher le journal</button>
    <ul id="logList"></ul>
  </div>

  <footer>
    <p class="footer-text">© FAFA™ — Interface privée. Ne pas partager sans autorisation.</p>
  </footer>

  <audio id="hqAudio">
    <source src="../assets/audio/admin-connexion.mp3" type="audio/mpeg">
  </audio>

  <script src="../scripts/hq.js"></script>
</body>
</html>
