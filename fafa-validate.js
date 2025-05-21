// FAFA Explorator™ - Script de validation des codes
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#codeInput");
  const result = document.querySelector("#result");
  const parcours = document.querySelector("#parcoursSelect");

  let allCodes = {};

  // Charger les codes depuis codes.json
  fetch("codes.json")
    .then(res => res.json())
    .then(data => {
      allCodes = data;
    });

  document.querySelector("#checkCodeBtn").addEventListener("click", () => {
    const val = input.value.trim().toLowerCase();
    const type = parcours.value;

    if (!allCodes[type]) {
      result.innerHTML = "❌ Sélection de parcours invalide.";
      return;
    }

    const allAnswers = Object.values(allCodes[type].enigmes || {}).flat().map(r => r.toLowerCase());

    if (allAnswers.includes(val)) {
      result.innerHTML = "✅ Bravo explorateur, code reconnu !";
      result.style.color = "limegreen";
    } else if (allCodes[type].bonus && allCodes[type].bonus.toLowerCase() === val) {
      result.innerHTML = "🎉 Bonus FAFA déverrouillé !";
      result.style.color = "gold";
    } else if (allCodes.global && allCodes.global.universal_code.toLowerCase() === val) {
      result.innerHTML = "🌟 Succès FAFAEXPLORATOR activé !";
      result.style.color = "#00ffff";
    } else {
      result.innerHTML = "⛔ Code incorrect. Essaie encore.";
      result.style.color = "tomato";
    }
  });
});