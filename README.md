📌 Projeto: Sistema de Gerenciamento de Pagamentos

Este projeto tem como objetivo simular um sistema de pagamentos, permitindo a realização de novas transações, o armazenamento histórico em memória e a consulta do último pagamento realizado, além de classificar automaticamente os pagamentos por faixa de valor.

📋 Estrutura do Projeto

Foi desenvolvida uma classe `ServicoDePagamento` que gerencia uma lista interna de pagamentos. Cada pagamento é armazenado como um objeto contendo as seguintes propriedades:

* **codigoBarras:** código de barras associado ao pagamento.
* **empresa:** nome da empresa beneficiária do pagamento.
* **valor:** o valor financeiro da transação.
* **categoria:** classificação automática do pagamento baseada no valor:
    * `'cara'`: para pagamentos com valor estritamente maior que 100.00.
    * `'padrão'`: para pagamentos com valor igual ou menor que 100.00.

🚀 Funcionalidades Principais

A classe disponibiliza dois métodos principais:

💵 Método `pagar(codigoBarras, empresa, valor)`
Recebe os dados do pagamento, cria o objeto com a respectiva categoria (`'cara'` ou `'padrão'`) e o armazena na lista interna de pagamentos.

🔍 Método `consultarUltimoPagamento()`
Retorna exclusivamente o objeto correspondente ao último pagamento que foi realizado no sistema.

Exemplo de uso:
```javascript
const servicoDePagamento = new ServicoDePagamento();
servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);

console.log(servicoDePagamento.consultarUltimoPagamento());
// Retorno:
// {
//    codigoBarras: '0987-7656-3475',
//    empresa: 'Samar',
//    valor: 156.87,
//    categoria: 'cara'
// }
