## sobre o 'const rls = require("readline-sync")'

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

*/

## conceitos

structs são objetos primitivos (vieram antes)
metodos são funções // scripts // algoritmos pimitivos

## Acho que entendi algo

os arquivos / módulos devem ser um conjunto de abstrações de objetos (encapsulamento) de métodos (funçoões)

## de Djikstra pra vida.

o que aprendi hj foi: 
- dividir do mas abstrato, até chegar no mais mecanico.
- sempre fazer associações. metodos como funções, function como um $\int f(x) = x^2 + 2x + 3$ da vida...

  (function -> aqula axa que entra alguma coisa no X, sai outro numero... uma abstração magica, que muda uma coisa pa outra
  
  tipo aqui: para $f(x) = x^2 + 2x + 3$, se u coloco 32 no lugar do x, a igualdade vai empurrar o 32 pa os outros espaços e fazer as somas.)
    um tab pra fazer o nesting, aninhamnto... compuação é incrivel, pelo método, pela lógica...

### Programação é abstração.

qndo for pra fazer uma coisa e sair... é 

return 'fazer uma coisa';