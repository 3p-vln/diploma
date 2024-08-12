// Формула (1): Показник енергоефективності для насосного устатковання
function calculateEfficiency1() {
  const P1 = parseFloat(document.getElementById("P1").value);
  const P2 = parseFloat(document.getElementById("P2").value);

  if (isNaN(P1) || isNaN(P2)) {
    alert("Будь ласка, введіть коректні значення для всіх полів.");
    return;
  }

  const efficiency = P1 / P2;
  document.getElementById(
    "result1"
  ).textContent = `Результат: Показник енергоефективності η = ${efficiency.toFixed(
    2
  )}`;
}

// Формула (2): Показник енергоефективності η
function calculateEfficiency2() {
  const Pavg = parseFloat(document.getElementById("Pavg").value);
  const Pref = parseFloat(document.getElementById("Pref").value);

  if (isNaN(Pavg) || isNaN(Pref)) {
    alert("Будь ласка, введіть коректні значення для всіх полів.");
    return;
  }

  const efficiency = Pavg / Pref;
  document.getElementById(
    "result2"
  ).textContent = `Результат: Показник енергоефективності η = ${efficiency.toFixed(
    2
  )}`;
}

// Формула (3): Гідравлічна потужність мережі P1
function calculatePower() {
  const P = parseFloat(document.getElementById("P").value);
  const t = parseFloat(document.getElementById("t").value);

  if (isNaN(P) || isNaN(t)) {
    alert("Будь ласка, введіть коректні значення для всіх полів.");
    return;
  }

  const P1 = P * t;
  document.getElementById(
    "result3"
  ).textContent = `Результат: Гідравлічна потужність мережі P₁ = ${P1.toFixed(
    2
  )}`;
}

// Формула (4): Гідравлічна потужність мережі на відповідному режимі її навантаження
function calculateHfit() {
  const A = parseFloat(document.getElementById("A").value);
  const B = parseFloat(document.getElementById("B").value);
  const C = parseFloat(document.getElementById("C").value);
  const D = parseFloat(document.getElementById("D").value);
  const Q = parseFloat(document.getElementById("Q4").value);

  if (isNaN(A) || isNaN(B) || isNaN(C) || isNaN(D) || isNaN(Q)) {
    alert("Будь ласка, введіть коректні значення для всіх полів.");
    return;
  }

  const Hfit = A * Math.pow(Q, 3) + B * Math.pow(Q, 2) + C * Q + D;
  document.getElementById(
    "result4"
  ).textContent = `Результат: Гідравлічна потужність мережі на відповідному режимі її навантаження Hₓᵢₜ = ${Hfit.toFixed(
    2
  )}`;
}

// Формула (5): Гідравлічна потужність мережі P1 для насосного устатковання
function calculateHydraulicPower() {
  const Q = parseFloat(document.getElementById("Q").value);
  const H = parseFloat(document.getElementById("H").value);
  const k = parseFloat(document.getElementById("k").value);

  if (isNaN(Q) || isNaN(H) || isNaN(k)) {
    alert("Будь ласка, введіть коректні значення для всіх полів.");
    return;
  }

  const P1 = Q * H * k;
  document.getElementById(
    "result5"
  ).textContent = `Результат: Гідравлічна потужність мережі P₁ = ${P1.toFixed(
    2
  )}`;
}

// Формула (6): Функція навантаження мережі F(Q)
function calculateLoadFunction() {
  const Hgeo = parseFloat(document.getElementById("Hgeo").value);
  const kres = parseFloat(document.getElementById("kres").value);

  if (isNaN(Hgeo) || isNaN(kres)) {
    alert("Будь ласка, введіть коректні значення для всіх полів.");
    return;
  }

  const FQ = Hgeo * kres;
  document.getElementById(
    "result6"
  ).textContent = `Результат: Функція навантаження мережі F(Q) = ${FQ.toFixed(
    2
  )}`;
}

// Формула (7): Еталонна потужність на вході P2
function calculateReferencePower() {
  const Pout = parseFloat(document.getElementById("Pout").value);
  const eta = parseFloat(document.getElementById("eta").value);

  if (isNaN(Pout) || isNaN(eta)) {
    alert("Будь ласка, введіть коректні значення для всіх полів.");
    return;
  }

  const P2 = Pout / eta;
  document.getElementById(
    "result7"
  ).textContent = `Результат: Еталонна потужність на вході P₂ = ${P2.toFixed(
    2
  )}`;
}

// Формула (8): Показник енергоефективності для всієї системи
function calculateSystemEfficiency() {
  const E = parseFloat(document.getElementById("E").value);
  const Esys = parseFloat(document.getElementById("Esys").value);

  if (isNaN(E) || isNaN(Esys)) {
    alert("Будь ласка, введіть коректні значення для всіх полів.");
    return;
  }

  const eta_sys = Esys / E;
  document.getElementById(
    "result8"
  ).textContent = `Результат: Показник енергоефективності системи ηₛᵧₛ = ${eta_sys.toFixed(
    2
  )}`;
}

// Формула (9): Коефіцієнт енергоефективності
function calculateEnergyEfficiencyRatio() {
  const Qc = parseFloat(document.getElementById("Qc").value);
  const Win = parseFloat(document.getElementById("Win").value);

  if (isNaN(Qc) || isNaN(Win)) {
    alert("Будь ласка, введіть коректні значення для всіх полів.");
    return;
  }

  const EER = Qc / Win;
  document.getElementById(
    "result9"
  ).textContent = `Результат: Коефіцієнт енергоефективності EER = ${EER.toFixed(
    2
  )}`;
}

// Формула (10): Показник сезонної енергоефективності
function calculateSeasonalEnergyEfficiency() {
  const Qcavg = parseFloat(document.getElementById("Qcavg").value);
  const Winavg = parseFloat(document.getElementById("Winavg").value);

  if (isNaN(Qcavg) || isNaN(Winavg)) {
    alert("Будь ласка, введіть коректні значення для всіх полів.");
    return;
  }

  const SEER = Qcavg / Winavg;
  document.getElementById(
    "result10"
  ).textContent = `Результат: Показник сезонної енергоефективності SEER = ${SEER.toFixed(
    2
  )}`;
}
