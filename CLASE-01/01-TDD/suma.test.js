import { suma } from "./utils/suma.js";
import chalk from "chalk";

function describe(nombreSuite, callback) {
  let total = 0;
  let exitos = 0;

  console.log(chalk.blueBright(`\n🧪 Test Suite: ${nombreSuite}`));
  console.time("⏱ Duración");

  const it = (descripcion, fn) => {
    total++;
    try {
      fn();
      exitos++
      console.log(`${chalk.green("✓")} ${descripcion}`);
    } catch (error) {
      console.log(`${chalk.red("✗")} ${descripcion}`);
      console.log(chalk.red(`   → ${error.message}`));
    }
  };
  callback(it);
  console.timeEnd("⏱ Duración");
  console.log(
    chalk.bold(`\nResumen:`),
    chalk.green(`${exitos} exitosas`),
    "|",
    chalk.red(`${total - exitos} fallidas`)
  );
}

describe("Pruebas para la función suma()", (it) => {
  it("debe retornar 7 en base a la suma de los números 4 y 3", () => {
    //* Esta es la fn que le pasamos por callback a la function real it
    const resultado = suma(4, 3);
    const esperado = 7;
    if (resultado !== esperado)
      throw new Error(`Esperado ${esperado}, pero se obtuvo ${resultado}`);
  });
  it("debe retornar 'error' si algún argumento no es un número", () => {
    const resultado = suma(4, "juan");
    const esperado = "error";
    if (resultado !== esperado)
      throw new Error(`Esperado '${esperado}', pero se obtuvo '${resultado}'`);
  });
  it("debe retornar la suma de múltiples números", () => {
    const resultado = suma(1, 2, 3, 4, 5);
    const esperado = 15;
    if (resultado !== esperado)
      throw new Error(`Esperado ${esperado}, pero se obtuvo ${resultado}`);
  });
});

//-------------------------------------------------------------
function describeTest(description, expect, fn) {
  console.log(chalk.blueBright(`\n Test: ${description}`));
  try {
    const result = fn();
    // console.log("---->", result);
    if (result === "Error") {
      console.log(chalk.red("✗ Test fallido"));
    } else if (result === expect) {
      console.log(chalk.green("✓ Test exitoso"));
    } else {
      console.log(chalk.red("✗ Test fallido"));
    }
  } catch (error) {
    console.log(chalk.red("✗ Test fallido"));
    console.log(chalk.red(`   → ${error.message}`));
  }
  console.log(chalk.blueBright("Fin del test"));
  console.log(chalk.blueBright("====================================="));
}

// describeTest("1_ Prueba de suma de los números 4 y 3", 7, () => {
//   "hola";
// });

// describeTest("2_ Prueba de suma de los números 4 y 3", 7, () => suma(4, 3));

// describeTest("3_ Prueba de suma de los números 4 y 'pepe'", "error", () =>
//   suma(4, "pepe")
// );

//* VOLVEMOS a las 19:45


// function login(){}

// function testPassUser(cb){

// }

// testPassUser(()=>login("Pepe", "111"))