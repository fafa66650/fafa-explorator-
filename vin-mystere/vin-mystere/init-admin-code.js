
(function () {
  const storageKey = "fafa_access_code";
  const durationKey = "fafa_code_expiration";
  const displayId = "fafa-code-display";

  function generateCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "FAFA";
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  function displayCode(code, expiration) {
    const box = document.createElement("div");
    box.id = displayId;
    box.style.position = "fixed";
    box.style.bottom = "20px";
    box.style.right = "20px";
    box.style.background = "#4c1d95";
    box.style.color = "white";
    box.style.padding = "14px 20px";
    box.style.borderRadius = "10px";
    box.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    box.style.fontSize = "1em";
    box.style.zIndex = "9999";
    box.innerHTML = `<strong>Code :</strong> ${code}<br><small>Valide jusqu’à : ${new Date(expiration).toLocaleTimeString()}</small>`;
    document.body.appendChild(box);
  }

  const now = Date.now();
  const existingCode = localStorage.getItem(storageKey);
  const expiration = parseInt(localStorage.getItem(durationKey), 10);

  if (!existingCode || isNaN(expiration) || now > expiration) {
    const newCode = generateCode();
    const duration = 3 * 60 * 60 * 1000; // 3 hours
    const newExpiration = now + duration;
    localStorage.setItem(storageKey, newCode);
    localStorage.setItem(durationKey, newExpiration.toString());
    setTimeout(() => displayCode(newCode, newExpiration), 300);
  } else {
    setTimeout(() => displayCode(existingCode, expiration), 300);
  }
})();
