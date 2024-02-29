<h1 align="center"> Tech Store </h1>

![Cover](/Cover.png)

<img width="100%" loading="lazy" src="https://github.com/SamirPaulb/SamirPaulb/blob/main/assets/rainbow-superthin.webp" />

## 📘 Descrição

Explore e adquira os mais recentes produtos de tecnologia no TechStore. Nosso e-commerce oferece uma ampla variedade de produtos, incluindo mouses, teclados, monitores, fones de ouvido e muito mais. 
Construído utilizando tecnologias modernas como React, Next.js, TypeScript e Tailwind CSS, o TechStore proporciona uma experiência de compra intuitiva e fácil de usar. Conheça os produtos em ofertas, 
compare preços e encontre exatamente o que você precisa para elevar sua experiência tecnológica.

## ✔️ Principais Funcionalidades

-   [x] **Login com o Google**: Permitimos que os usuários façam login usando suas contas do Google para uma experiência de autenticação simplificada.
-   [x] **Navegação por Categorias**: Os usuários podem explorar produtos por categorias, facilitando a busca e a compra.
-   [x] **Descontos em Produtos**: Alguns produtos podem ter descontos especiais, permitindo aos usuários economizar em suas compras.
-   [x] **Gerenciamento do Carrinho de Compras**: Os usuários podem adicionar produtos ao seu carrinho de compras, remover produtos e também modificar a quantidade de um produto no carrinho de compras conforme necessário. 
O gerenciamento é feito com a Context API do React e os produtos no carrinho são persistidos no Local Storage do Browser.
-   [x] **Pagamento do Pedido com a API do Stripe**: Oferecemos uma experiência segura de pagamento online com a integração da API do Stripe, incluindo o uso de Webhooks para processar eventos relacionados ao pagamento. 
Os usuários podem concluir seus pedidos com facilidade e segurança.
-   [x] **Controle de pedidos**: Os usuários podem acompanhar todo o seu histórico de pedidos e visualizar o valor, a data e os produtos de suas compras anteriores.

## 🛠 Tecnologias Utilizadas

As seguintes tecnologias foram utlizadas na construção deste projeto:

- [React JS](https://pt-br.reactjs.org/) — Uma biblioteca JavaScript popular para construir interfaces de usuário interativas.
- [Next.js](https://nextjs.org/) — Um framework React que oferece renderização do lado do servidor (SSR), geração estática (SSG), entre muitos outros recursos.
- [TypeScript](https://www.typescriptlang.org/) — O TypeScript é um superconjunto tipado que adiciona tipagem estática opcional e outros recursos de linguagem ao JavaScript.
- [Next Auth](https://next-auth.js.org/) — Uma biblioteca para autenticação de usuários com OAuth.
- [Prisma ORM](https://www.prisma.io/) — Um ORM (Object-Relational Mapping) para projetos com Node.js e TypeScript. O Prisma oferece um modelo de dados legível, migrations automatizadas e uma completa integração com TypeScript.
- [Supabase](https://supabase.com/) — Uma alternativa de código aberto ao Firebase. O Supabase oferece um banco de dados relacional Postgres, autenticação, APIs instantâneas, Edge Functions, assinaturas em tempo real, 
armazenamento e incorporações de vetores e muito outros recursos.
- [shadcn/ui](https://ui.shadcn.com/) — Uma biblioteca de componentes de IU reutilizáveis e estilizáveis que usa o Tailwind em sua essência e possui um conjunto com os mais modernas padrões de UI/UX.
- [Tailwind CSS](https://tailwindcss.com/) — Um framework CSS que oferece várias classes para utilização já pré-estilizadas.
- [API do Stripe](https://stripe.com/br) — Uma API de pagamento popular para processar pagamentos on-line de forma segura.

## 📌 Links Úteis

- [Demo](https://tech-store-web.vercel.app)
- [Documentação do Stripe](https://docs.stripe.com/)

## 🚀 Instalação e Execução

Para executar o That Movie localmente, siga estes passos:

**1. Clone o repositório em sua máquina local:**
```bash
git clone https://github.com/fernandes-vinicius/tech-store.git
```

**2. Navegue até o diretório do projeto:**
```bash
cd tech-store
```

**3. Instale as dependências utilizando npm:**
```bash
npm install
```

**4. Configue as variáveis de ambiente:**
- Crie uma conta no Stripe e siga a [documentação](https://docs.stripe.com/stripe-cli) para instalar a CLI do Stripe na sua máquina e fazer login na sua conta.
- Em seguida, você precisa executar o script para dizer para o Stripe criar um ouvinte de [Webhook](https://docs.stripe.com/connect/webhooks) local para realizar testes de pagamento. 
Copie a chave gerada pelo Webhook e adicione, junto com as demais chaves, no seu arquivo **.env**.
```bash
npm run stripe:listen
```
- Agora você precisa configurar as chaves do OAuth do Google. Crie seu App no [Google Develop Console](https://console.cloud.google.com) e adicione a **Client ID** e **Client Secret** ao **.env**.
- Por último, entre em sua conta do Supabase, crie um novo projeto e copie a **Conection Pool** do seu Database e adicione na sua **DATABASE_URL** no **.env**.

**5. Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

**6. Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.**

## 📃 Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/license/mit).
