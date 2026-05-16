import assert from 'node:assert';
import { ServicoDePagamento } from '../src/ServicoDePagamento.js';

describe('ServicoDePagamento', () => {
  it('deve registrar pagamento e retornar o último realizado', () => {
    const servico = new ServicoDePagamento();

    servico.pagar('0987-7656-3475', 'Samar', 156.87);

    const ultimo = servico.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimo, {
      codigoBarras: '0987-7656-3475',
      empresa: 'Samar',
      valor: 156.87,
      categoria: 'cara'
    });
  });

  it('deve classificar pagamento como padrão quando valor for menor ou igual a 100', () => {
    const servico = new ServicoDePagamento();

    servico.pagar('1234-5678-9012', 'Padaria', 95.5);

    const ultimo = servico.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimo, {
      codigoBarras: '1234-5678-9012',
      empresa: 'Padaria',
      valor: 95.5,
      categoria: 'padrão'
    });
  });

  it('deve retornar null quando não houver pagamentos', () => {
    const servico = new ServicoDePagamento();

    const ultimo = servico.consultarUltimoPagamento();

    assert.equal(ultimo, null);
  });
});
