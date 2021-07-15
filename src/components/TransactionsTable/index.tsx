import { useEffect } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

export function TransactionsTable() {
  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
    .then(response => console.log(response.data))
  })
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Wesite</td>
            <td className="deposit">R$12000,00</td>
            <td>Tecnologia</td>
            <td>22/06/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento de Wesite</td>
            <td className="withdraw">- R$12000,00</td>
            <td>Tecnologia</td>
            <td>22/06/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}