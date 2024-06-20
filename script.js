let count = 0;

function increment() {
    count++;
    if (count >= 0 && count < 33) {
        document.getElementById("counter").textContent = count;
        document.getElementById("message").textContent = "Subhanallah";
    } else if (count >= 33 && count < 66) {
        document.getElementById("counter").textContent = count - 33;
        document.getElementById("message").textContent = "Alhamdulillah";
    } else if (count >= 66 && count <= 99) {
        document.getElementById("counter").textContent = count - 66;
        document.getElementById("message").textContent = "Allahu Akbar";
    }
    if (count > 99) {
        count = 0;
    }
}
