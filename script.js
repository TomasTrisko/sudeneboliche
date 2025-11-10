document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const input = document.getElementById("numberInput").value;
    const result = document.getElementById("result");
    const number = parseInt(input);
  
    // Kontrola platnosti vstupu
    if (isNaN(number) || number <= 0) {
      alert("Zadej platné číslo!");
      result.textContent = "";
      return;
    }
  
    // Určení sudosti/lichosti
    if (number % 2 === 0) {
      alert("Číslo je sudé");
      result.textContent = "Číslo je sudé";
    } else {
      alert("Číslo je liché");
      result.textContent = "Číslo je liché";
    }
  
    // Bonus: kontrola prvočísla
    if (jePrvocislo(number)) {
      result.textContent += " a je to také prvočíslo.";
    }
  });
  
  function jePrvocislo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  