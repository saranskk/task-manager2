// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

  // Detect which page we're on
  const path = window.location.pathname;

  // Handle Registration
  if (path.includes("register.html")) {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      try {
        const res = await fetch("http://localhost:5000/api/users/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();

        if (res.ok) {
          alert("Registration successful!");
          window.location.href = "dashboard.html"; // redirect to dashboard
        } else {
          alert(data.message || "Registration failed!");
        }

      } catch (err) {
        console.error("❌ Error:", err);
        alert("Server error. Try again later!");
      }
    });
  }

  // Handle Login
  if (path.includes("index.html") || path.endsWith("/")) {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      try {
        const res = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
          alert("Login successful!");
          window.location.href = "dashboard.html"; // redirect to dashboard
        } else {
          alert(data.message || "Invalid credentials!");
        }

      } catch (err) {
        console.error("❌ Error:", err);
        alert("Server error. Try again later!");
      }
    });
  }

  // Dashboard Page - prevent redirect loop
  if (path.includes("dashboard.html")) {
    console.log("✅ Dashboard loaded properly, no redirect now.");
  }

});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login successful!");
  window.location.href = "dashboard.html";
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Registration successful!");
  window.location.href = "dashboard.html";
});
const res = await fetch("https://yourapp-production.up.railway.app/api/users/register", {...});




