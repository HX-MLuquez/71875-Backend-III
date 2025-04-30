// PROCESS CHILD

// Proceso hijo que realiza un cálculo complejo

process.on("message", (msg) => {
  console.log(`Proceso hijo (PID ${process.pid}) recibió: "${msg}"`);

  let result = 0;
  console.log("Comienza cálculo complejo");
  console.time("Duración del cálculo");

  for (let i = 0; i < 500_000_000; i++) {
    result += Math.random() * 10;
  }

  console.timeEnd("Duración del cálculo");

  // Enviar el resultado al proceso principal
  process.send({ type: "resultado", result: Math.round(result) });
});
