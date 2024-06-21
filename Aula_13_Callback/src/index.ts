import { imprimir, concatenar, somar } from "./callback";
import { testTimeout, testInterval } from "./settimeout_setinterval";
import { testClearTimeout, testClearInterval } from "./cleartimeout_clearinterval";
import { reverterSentenca, exibeFrase } from "./exerciciosAula";

// //Callback
// concatenar("Hello", "ADS",imprimir);
// somar(6,9,imprimir);

//Timeout
// testTimeout();
// testInterval();

//ClearTimeout
// testClearTimeout();
//testClearInterval();

//Exercício 01
reverterSentenca("Hello ADS", exibeFrase);