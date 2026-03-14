function openModal(name, price) {
    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalPrice").innerText = "$" + price;
    
    // Change to your WhatsApp number (starting with 251)
    const myPhone = "2519xxxxxxxx"; 
    const waLink = `https://wa.me/${myPhone}?text=I've%20just%20sent%20the%20USDT%20for%20the%20${name}.%20Please%20confirm!`;
    document.getElementById("waConfirm").href = waLink;
    
    document.getElementById("paymentModal").style.display = "block";
}

function closeModal() {
    document.getElementById("paymentModal").style.display = "none";
}

function copyAddr() {
    const addr = document.getElementById("walletAddr").innerText;
    navigator.clipboard.writeText(addr);
    alert("Address copied! Use TRON (TRC-20) network only.");
}

window.onclick = function(event) {
    if (event.target == document.getElementById("paymentModal")) {
        closeModal();
    }
}
