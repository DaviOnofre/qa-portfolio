# QA Portfolio - SauceDemo Automation

Projeto de automação de testes desenvolvido com Playwright + TypeScript utilizando boas práticas como Page Object Model (POM) e testes parametrizados.

## Tecnologias

- Playwright
- TypeScript
- Node.js

## Cenários Automatizados

- Login com múltiplos usuários
- Login inválido
- Fluxo completo de compra
- Adição de produtos ao carrinho
- Ordenação de produtos
- Logout

## Estrutura


test/

pages/
   SaucePage.ts
   
user/
   user.ts
   
teste.spec.ts


## Executando

*bash*

npm install

npx playwright install

npx playwright test


## Relatórios

*bash*

npx playwright show-report


## Autor

Davi Onofre
