# Registro de Testes de Endpoint
Aluno: Alanis Venerruche de Carvalho
Grupo: 2
## Testes escritos
| # | Verbo e rota | Com token? | Status esperado | Verde ou vermelho? |
| --- | ------------ | ---------- | --------------- | ------------------ |
| 1 | GET /eventos | Não | 200 | Verde |
| 2 | POST /eventos | Não | 401 | Verde |
| 3 | POST /eventos | Sim | 201 | Verde |
| 4 | GET /eventos/999999 | Não | 404 | Verde |
| 5 | GET /eventos/${evento.id}abc | Não | 400 | Vermelho |
## Resultado
Linha "Tests:" da saída do `npm run test:endpoint`: `1 failed, 4 passed, 5 total`
## Defeito encontrado
Teste: GET `/eventos/${evento.id}abc` — responde 400 quando o ID tem letras
Esperado: HTTP 400, pois o ID contém caracteres que não são numéricos.
Obtido: HTTP 200; o `parseInt` lê o ID numérico inicial e ignora o sufixo `abc`.
Em qual aula esse mesmo defeito já tinha aparecido, e como: Na atividade anterior de testes unitários de `parseId`, o teste com `"12abc"` esperava um `ValidationError`, mas a função retornava `12`.