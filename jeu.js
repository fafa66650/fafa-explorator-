function lancerMode(mode) {
  switch (mode) {
    case 'patrimonio':
      window.location.href = "parcours/patrimonio.html";
      break;
    case 'run':
      window.location.href = "parcours/run.html";
      break;
    case 'univerz':
      window.location.href = "parcours/univerz.html";
      break;
    default:
      alert("Mode inconnu");
  }
}

function lancerAdmin() {
  const motDePasse = prompt("Mot de passe FAFA HQ :");
  if (motDePasse === "fafa2024") {
    window.location.href = "fafa-hq.html";
  } else {
    alert("Accès refusé. Mot de passe incorrect.");
  }
}
