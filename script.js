const passwordInput = document.getElementById("password");
const strengthFill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");

passwordInput.addEventListener("input", () => {
  const pwd = passwordInput.value;
  const score = calculateStrength(pwd);

  let width = 0;
  let color = "red";
  let label = "Weak";

  if (score >= 4) {
    width = 100;
    color = "green";
    label = "Strong";
  } else if (score >= 2) {
    width = 60;
    color = "orange";
    label = "Moderate";
  } else if (score > 0) {
    width = 30;
    color = "red";
    label = "Weak";
  } else {
    width = 0;
    label = "N/A";
  }

  strengthFill.style.width = `${width}%`;
  strengthFill.style.backgroundColor = color;
  strengthText.textContent = `Strength: ${label}`;
});

function calculateStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}
