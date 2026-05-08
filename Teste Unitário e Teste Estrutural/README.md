# Secure Login API

Este projeto é uma API simples de validação de login, desenvolvida para fins educacionais. Ele demonstra como implementar uma função de validação de login básica em Node.js, utilizando testes unitários com Jest.

## Fluxo Completo de Desenvolvimento

Aqui está o fluxo completo desde a inicialização do projeto até a execução dos testes. Este guia assume que você está começando do zero.

### Caso de Teste: senha muito curta

- Objetivo: validar o tratamento de senha com menos de 6 caracteres.
- Tipo: teste unitário
- Função testada: `validateLogin(email, password)`
- Entrada:
  - email: `usuario@email.com`
  - senha: `12345`
- Resultado esperado:
  - `success: false`
  - `message: 'Senha deve ter no mínimo 6 caracteres'`
- O que está testando:
  - validação de tamanho mínimo da senha
- O que não está testando:
  - autenticação real contra banco de dados
  - política de senha especial (caracteres, letras maiúsculas, etc.)

### 1. Inicialização do Projeto

Execute o comando `npm init -y` para criar um arquivo `package.json` com configurações padrão:

```bash
npm init -y
```

Isso cria um arquivo `package.json` básico com informações do projeto.

### 2. Instalação das Dependências

Instale o Jest como dependência de desenvolvimento para testes:

```bash
npm install --save-dev jest
```

### 3. Configuração do Jest

No `package.json`, adicione o script de teste:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

### 4. Estrutura do Projeto

Crie a estrutura de pastas:

```
securelogin-api/
├── package.json
├── src/
│   ├── login.js
│   └── utils/
│       └── login.js (vazio por enquanto)
├── tests/
│   └── login.test.js
└── README.md
```

### 5. Implementação da Função de Validação

No arquivo `src/login.js`, implemente a função `validateLogin`:

```javascript
function validateLogin(email, password) {
  // .trim() remove espaços acidentais no início/fim
  const cleanEmail = email?.toString().trim();
  const cleanPassword = password?.toString();

  if (!cleanEmail) {
    return { success: false, message: 'E-mail é obrigatório' };
  }

  // Validação básica de formato de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return { success: false, message: 'E-mail inválido' };
  }

  if (!cleanPassword || cleanPassword.length < 6) {
    return { success: false, message: 'Senha é obrigatória' };
  }

  // Simulação de validação bem-sucedida (em um projeto real, verificaríamos no banco de dados)
  return { success: true, message: 'Login válido' };
}

module.exports = { validateLogin };
```

### 6. Escrita dos Testes

No arquivo `tests/login.test.js`, escreva os testes unitários:

```javascript
const { validateLogin } = require('../src/login');

describe('validateLogin()', () => {
  
  describe('Cenários de Erro (Negative Tests)', () => {
    
    test.each([
      ['', '123456', 'E-mail é obrigatório'],
      [null, '123456', 'E-mail é obrigatório'],
      ['usuario.com', '123456', 'E-mail inválido'],
      ['usuario@email.com', '', 'Senha é obrigatória'],
      ['usuario@email.com', '123', 'Senha deve ter no mínimo 6 caracteres'],
    ])('Deve retornar erro para email="%s" e senha="%s"', (email, password, expectedMsg) => {
      const result = validateLogin(email, password);
      expect(result).toEqual({
        success: false,
        message: expectedMsg
      });
    });

  });

  describe('Cenários de Sucesso (Positive Tests)', () => {
    
    test('Deve validar com sucesso para dados corretos', () => {
      const result = validateLogin('hudson@provedor.com', 'senha123');
      expect(result.success).toBe(true);
      expect(result.message).toBe('Login válido');
    });

  });

});
```

### 7. Execução dos Testes

Execute os testes com o comando:

```bash
npm test
```

Isso executará todos os testes definidos e mostrará os resultados no terminal.

## O que Está Sendo Testado

Os testes cobrem os seguintes cenários:

- **Cenários de Erro (Negative Tests):**
  - E-mail vazio ou nulo: Deve retornar "E-mail é obrigatório".
  - E-mail com formato inválido (sem @ ou domínio): Deve retornar "E-mail inválido".
  - Senha vazia: Deve retornar "Senha é obrigatória".
  - Senha com menos de 6 caracteres: Deve retornar "Senha deve ter no mínimo 6 caracteres".

- **Cenários de Sucesso (Positive Tests):**
  - E-mail válido e senha com 6 ou mais caracteres: Deve retornar sucesso com "Login válido".

Esses testes garantem que a função `validateLogin` se comporte corretamente para entradas válidas e inválidas.

## O que Não Está Sendo Testado

Este projeto é focado em testes unitários da função de validação. O que **não** está sendo testado inclui:

- **Integração com Banco de Dados:** A função simula a validação, mas não conecta a um banco real. Não há testes de integração com sistemas externos.
- **Casos de Borda Extremos:** Por exemplo, e-mails muito longos, senhas com caracteres especiais, ou ataques como SQL injection (embora a função use regex básica).
- **Performance:** Não há testes de carga ou performance para grandes volumes de validações.
- **Segurança Avançada:** Não testa hashing de senhas, autenticação JWT, ou outras medidas de segurança.
- **Interface de API:** Não há testes de endpoints HTTP ou rotas de API (o projeto é apenas uma função utilitária).
- **Tratamento de Erros do Sistema:** Como falhas de rede ou erros internos, já que é uma função síncrona simples.
- **Internacionalização:** Mensagens de erro estão em português, sem testes para múltiplos idiomas.

Para um projeto real, seria necessário expandir os testes para cobrir esses aspectos.

## Como Usar

Para usar a função em outro projeto:

```javascript
const { validateLogin } = require('./src/login');

const result = validateLogin('usuario@email.com', 'senha123');
if (result.success) {
  console.log('Login bem-sucedido!');
} else {
  console.log('Erro:', result.message);
}
```

## Contribuição

Este é um projeto educacional. Sinta-se à vontade para sugerir melhorias nos testes ou na implementação.
