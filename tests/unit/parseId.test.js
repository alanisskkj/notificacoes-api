// tests/unit/parseId.test.js
const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");
describe("parseId", () => {
    // Para testar ERRO, o expect recebe uma função: () => ...
    it("lança ValidationError quando o id não é número", () => {
        expect(() => parseId("abc")).toThrow(ValidationError);
    });

});

// DESAFIO: escrevam aqui um teste para a pergunta abaixo
// Um id "12abc" deveria ser aceito? Pensem no que deveria acontecer, escrevam o teste com essa expectativa e rodem.

describe("parseId", () => {
    it("rejeita um id parcialmente numérico como '12abc'", () => {
        const id = "12abc";
        expect(() => parseId(id)).toThrow(ValidationError);
    })
})