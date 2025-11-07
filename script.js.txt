// Basic login and signup (demo only)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("username").value;
      localStorage.setItem("user", user);
      window.location.href = "menu.html";
    });
  }
});

let total = 0;
function addToBill(item, price) {
  const list = document.getElementById("billItems");
  const entry = document.createElement("li");
  entry.textContent = `${item} - ₹${price}`;
  list.appendChild(entry);

  total += price;
  document.getElementById("total").textContent = `Total: ₹${total}`;
}
