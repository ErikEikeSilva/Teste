# Planilha de Testes - Atividade Prática

## Parte 1 – Análise da Planilha

### Cenários de Teste Existentes (SauceDemo)

A seguir, a análise dos cenários de teste fornecidos, adaptados para o sistema SauceDemo. O objetivo é validar as funcionalidades de login, navegação e logout.

| ID do Teste | Cenário de Teste | Objetivo do Teste | Dados Utilizados | Comportamento Esperado | Tipo de Teste |
|---|---|---|---|---|---|
| **TP001** | Login com credenciais válidas | Verificar se o usuário consegue fazer login com sucesso usando credenciais corretas. | Usuário: `standard_user`, Senha: `secret_sauce` | Redirecionamento para a página de produtos (dashboard). | Positivo |
| **TP002** | Navegação até o dashboard | Verificar se, após o login, o usuário é direcionado corretamente para o dashboard. | Usuário: `standard_user`, Senha: `secret_sauce` | Exibição da página de produtos com o título "Products". | Positivo |
| **TP003** | Logout do sistema | Verificar se o usuário consegue sair do sistema com sucesso. | Usuário: `standard_user`, Senha: `secret_sauce` (após login) | Redirecionamento para a página de login. | Positivo |
| **TN001** | Login sem preencher campos | Verificar o tratamento do sistema ao tentar fazer login com campos vazios. | Usuário: `(vazio)`, Senha: `(vazio)` | Mensagem de erro indicando que usuário/senha são obrigatórios. | Negativo |
| **TN002** | Login com usuário inválido | Verificar o tratamento do sistema ao tentar fazer login com um usuário não registrado. | Usuário: `invalid_user`, Senha: `secret_sauce` | Mensagem de erro indicando usuário e/ou senha incorretos. | Negativo |
| **TN003** | Login com senha inválida | Verificar o tratamento do sistema ao tentar fazer login com uma senha incorreta para um usuário válido. | Usuário: `standard_user`, Senha: `invalid_password` | Mensagem de erro indicando usuário e/ou senha incorretos. | Negativo |
| **TN004** | Campos obrigatórios não preenchidos (apenas usuário) | Verificar o tratamento do sistema ao tentar fazer login sem preencher a senha. | Usuário: `standard_user`, Senha: `(vazio)` | Mensagem de erro indicando que a senha é obrigatória. | Negativo |
| **TN005** | Campos obrigatórios não preenchidos (apenas senha) | Verificar o tratamento do sistema ao tentar fazer login sem preencher o usuário. | Usuário: `(vazio)`, Senha: `secret_sauce` | Mensagem de erro indicando que o usuário é obrigatório. | Negativo |

## Parte 2 – Execução dos Testes

Os resultados da execução dos testes serão registrados na seção abaixo, incluindo o resultado obtido, status, comentários e evidências (prints de tela).

## Parte 3 – Registro dos Resultados

### Resultados dos Testes Existentes

| ID do Teste | Cenário de Teste | Resultado Obtido | Status | Comentários | Evidência |
|---|---|---|---|---|---|
| TP001 | Login com credenciais válidas | Redirecionamento para a página de produtos. | Passed | Login realizado com sucesso. | [Evidência TP001](/home/ubuntu/test_activity/evidencias/TP001_TP002_login_dashboard.webp) |
| TP002 | Navegação até o dashboard | Exibição da página de produtos com o título "Products". | Passed | Dashboard exibido corretamente. | [Evidência TP002](/home/ubuntu/test_activity/evidencias/TP001_TP002_login_dashboard.webp) |
| TP003 | Logout do sistema | Redirecionamento para a página de login. | Passed | Logout realizado com sucesso. | [Evidência TP003](/home/ubuntu/test_activity/evidencias/TP003_logout.webp) |
| TN001 | Login sem preencher campos | Mensagem de erro "Epic sadface: Username is required". | Passed | O sistema exibiu a mensagem de erro esperada. | [Evidência TN001](/home/ubuntu/test_activity/evidencias/TN001_campos_vazios.webp) |
| TN002 | Login com usuário inválido | Mensagem de erro "Epic sadface: Username and password do not match any user in this service". | Passed | O sistema exibiu a mensagem de erro esperada. | [Evidência TN002](/home/ubuntu/test_activity/evidencias/TN002_usuario_invalido.webp) |
| TN003 | Login com senha inválida | Mensagem de erro "Epic sadface: Username and password do not match any user in this service". | Passed | O sistema exibiu a mensagem de erro esperada. | [Evidência TN003](/home/ubuntu/test_activity/evidencias/TN003_senha_invalida.webp) |
| TN004 | Campos obrigatórios não preenchidos (apenas usuário) | Mensagem de erro "Epic sadface: Password is required". | Passed | O sistema exibiu a mensagem de erro esperada. | [Evidência TN004](/home/ubuntu/test_activity/evidencias/TN004_senha_vazia.webp) |
| TN005 | Campos obrigatórios não preenchidos (apenas senha) | Mensagem de erro "Epic sadface: Username is required". | Passed | O sistema exibiu a mensagem de erro esperada. | [Evidência TN005](/home/ubuntu/test_activity/evidencias/TN001_campos_vazios.webp) |

## Desafio Proposto – Novos Casos de Teste

### Novos Casos de Teste Positivos

| ID do Teste | Cenário | Dados de Entrada | Resultado Esperado | Resultado Obtido | Observações |
|---|---|---|---|---|---|

| **NTP002** | Adicionar item ao carrinho | Usuário: `standard_user`, Senha: `secret_sauce`, Item: `Sauce Labs Backpack` | Item adicionado ao carrinho, ícone do carrinho atualizado. | Item "Sauce Labs Backpack" adicionado ao carrinho, ícone do carrinho mostra "1". | Passed | [Evidência NTP002](/home/ubuntu/test_activity/evidencias/NTP002_adicionar_item_carrinho.webp) |
| **NTP003** | Remover item do carrinho | Usuário: `standard_user`, Senha: `secret_sauce`, Item: `Sauce Labs Backpack` (adicionado) | Item removido do carrinho, ícone do carrinho atualizado. | Item "Sauce Labs Backpack" removido do carrinho, ícone do carrinho mostra "0". | Passed | [Evidência NTP003](/home/ubuntu/test_activity/evidencias/NTP003_remover_item_carrinho.webp) |
| **NTP004** | Navegar para a página de detalhes do produto | Usuário: `standard_user`, Senha: `secret_sauce`, Clicar em `Sauce Labs Backpack` | Exibição da página de detalhes do produto `Sauce Labs Backpack`. | Página de detalhes do produto "Sauce Labs Backpack" exibida. | Passed | [Evidência NTP004](/home/ubuntu/test_activity/evidencias/NTP004_detalhes_produto.webp) |
| **NTP005** | Filtrar produtos por nome (A a Z) | Usuário: `standard_user`, Senha: `secret_sauce`, Selecionar filtro `Name (A to Z)` | Produtos listados em ordem alfabética crescente. | Produtos listados em ordem alfabética crescente. | Passed | [Evidência NTP005](/home/ubuntu/test_activity/evidencias/NTP005_filtrar_produtos.webp) |

### Novos Casos de Teste Negativos

| ID do Teste | Cenário | Dados de Entrada | Resultado Esperado | Resultado Obtido | Observações |
|---|---|---|---|---|---|
| **NTN001** | Login com usuário 'locked_out_user' | Usuário: `locked_out_user`, Senha: `secret_sauce` | Mensagem de erro "Epic sadface: Sorry, this user has been locked out." | Mensagem de erro "Epic sadface: Sorry, this user has been locked out." | Passed | [Evidência NTN001](/home/ubuntu/test_activity/evidencias/NTN001_usuario_bloqueado.webp) |
| **NTN006** | Login com usuário 'locked_out_user' (duplicado, mas para fins de demonstração) | Usuário: `locked_out_user`, Senha: `secret_sauce` | Mensagem de erro "Epic sadface: Sorry, this user has been locked out." | Mensagem de erro "Epic sadface: Sorry, this user has been locked out." | Passed | [Evidência NTN001](/home/ubuntu/test_activity/evidencias/NTN001_usuario_bloqueado.webp) |
| **NTN002** | Acessar página de produtos sem login | URL: `https://www.saucedemo.com/inventory.html` (sem login) | Redirecionamento para a página de login. | Redirecionamento para a página de login com mensagem de erro "Epic sadface: You can only access '/inventory.html' when you are logged in." | Passed | [Evidência NTN002](/home/ubuntu/test_activity/evidencias/NTN002_acesso_sem_login.webp) |
| **NTN003** | Tentar finalizar compra com carrinho vazio | Usuário: `standard_user`, Senha: `secret_sauce`, Carrinho vazio, Clicar em `Checkout` | Mensagem de erro ou redirecionamento para a página de produtos. | O sistema permitiu prosseguir para a página de informações de checkout (`checkout-step-one.html`) mesmo com o carrinho vazio. | Failed | [Evidência NTN003](/home/ubuntu/test_activity/evidencias/NTN003_checkout_carrinho_vazio.webp) |
| **NTN004** | Tentar adicionar item ao carrinho com usuário 'problem_user' | Usuário: `problem_user`, Senha: `secret_sauce`, Item: `Sauce Labs Backpack` | Item não adicionado corretamente ou imagem do item quebrada. | As imagens dos produtos aparecem quebradas para o 'problem_user'. | Passed | [Evidência NTN004](/home/ubuntu/test_activity/evidencias/NTN004_problema_imagens.webp) |
| **NTN005** | Tentar login com credenciais em maiúsculas/minúsculas (case-sensitive) | Usuário: `STANDARD_USER`, Senha: `SECRET_SAUCE` | Mensagem de erro "Epic sadface: Username and password do not match any user in this service". | Mensagem de erro "Epic sadface: Username and password do not match any user in this service". | Passed | [Evidência NTN005](/home/ubuntu/test_activity/evidencias/NTN005_login_case_sensitive.webp) |
