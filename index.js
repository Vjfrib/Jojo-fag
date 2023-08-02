const rls = require("readline-sync")
//importando modulo/ lib/ pacote

/* pra pedir um pedaço do módulo (caso ele ja seja unitário ) vc pode usar o tipo de uso:

const app = rls.method();

assim, para toda chamada de app, o recebido por app entra como parâmetro? ou...

é transferido para app as funcionalidades de method()?
e assim poderemos usar subfuncionalidades?

tipo app.get vai querer dizer:

---
const rls = require('readline-sync') de um json....

const fiction = rls.action();
pega a caracteristica do objeto beber agua, ou fazer get, lá do rls, que já tá imitando algo do 'readline-sync'

fiction.actFast(now);
ele já pega um método de agir (actFast), do objeto action, que foi importada por rls, do 'readline-sync'