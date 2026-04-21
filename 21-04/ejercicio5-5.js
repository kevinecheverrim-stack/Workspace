for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue; // salta múltiplos de 3
  }

  if (i === 17) {
    break; // detiene el bucle al llegar a 17
  }

  console.log(i);
}