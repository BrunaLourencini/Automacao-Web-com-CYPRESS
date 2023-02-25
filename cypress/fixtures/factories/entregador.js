import { faker } from '@faker-js/faker';
import { generate } from 'gerador-validador-cpf'

export const entregador = {
  nome: faker.name.fullName(),
  cpf: generate(),
  email: faker.internet.email(),
  whatsapp: faker.phone.number('119####-####'),
  endereco: {
    cep: '01022-060',
    rua: 'Rua Doutor Itapura de Miranda',
    numero: faker.address.buildingNumber(),
    complemento: 'N/A',
    bairro: 'Centro',
    cidadeUf: 'São Paulo/SP',
  },
  metodoEntrega: 'Moto',
  cnh: 'habilitacao.jpg'
}

