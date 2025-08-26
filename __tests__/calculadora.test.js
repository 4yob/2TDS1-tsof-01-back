import { somar, subtrair, multiplicar, dividir } from "../src/calculadora.js";

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 5;
        const b = 7;

        // Act (Executar)
        const resultado = somar(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(12);
    })
    test("Deve subtrair dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 5;
        const b = 7;

        // Act (Executar)
        const resultado = subtrair(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(-2);
    })
    test("Deve multiplicar dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 5;
        const b = 7;

        // Act (Executar)
        const resultado = multiplicar(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(35);
    })
    test("Deve dividir dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 5;
        const b = 7;

        // Act (Executar)
        const resultado = dividir(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(5/7);
    })
})