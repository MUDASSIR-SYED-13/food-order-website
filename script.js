document.getElementById("calculateBtn").addEventListener("click", function() {
  const items = document.querySelectorAll(".menu input[type='checkbox']");
  const orderList = document.getElementById("orderList");
  const totalDisplay = document.getElementById("total");

  orderList.innerHTML = "";
  let total = 0;

  items.forEach(item => {
    if (item.checked) {
      const name = item.value;
      const price = parseInt(item.getAttribute("data-price"));
      total += price;

      const li = document.createElement("li");
      li.textContent = `${name} - ₹${price}`;
      orderList.appendChild(li);
    }
  });

  if (total > 0) {
    totalDisplay.textContent = `Total Amount: ₹${total}`;
  } else {
    totalDisplay.textContent = "No items selected.";
  }
});
