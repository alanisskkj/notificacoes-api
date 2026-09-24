# Registro de Testes Unitários
Aluno: Alanis Venerruche de Carvalho
Grupo: 2
Data: 24/09/2026
## Testes escritos
| # | Arquivo | O que o teste verifica | Tipo |
| --- | ------- | ---------------------- | ----------------------- |
| 1 | `tests/unit/validators.test.js` | Aceita um e-mail válido | sucesso |
| 2 | `tests/unit/validators.test.js` | Rejeita e-mail sem `@` | falha |
| 3 | `tests/unit/validators.test.js` | Aceita nome com exatamente o tamanho mínimo | borda |
| 4 | `tests/unit/parseId.test.js` | Rejeita ID não numérico (`abc`) | falha |
| 5 | `tests/unit/parseId.test.js` | Rejeita ID parcialmente numérico (`12abc`) | falha |
| 6 | `tests/unit/ambiente.test.js` | Confirma a configuração básica do ambiente de testes | sucesso |
## Resultado
Passaram: 5 testes
Falharam: 1 teste
## Defeito encontrado
Teste: `parseId › rejeita um id parcialmente numérico como '12abc'`
Esperado: lançar `ValidationError`
Obtido: não lançou erro e retornou o valor `12`
## Cobertura
60% de Lines da linha `helpers`
Em uma frase, o que esse número significa: 60% das linhas de código dos helpers foram executadas pelos testes.