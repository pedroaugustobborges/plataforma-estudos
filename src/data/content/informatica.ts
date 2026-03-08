import type { Materia } from '../../types';

export const informatica: Materia = {
  id: 'informatica',
  nome: 'Informática',
  sigla: 'INF',
  descricao: 'Conceitos de informática, internet e aplicativos',
  cor: '#2196f3',
  icone: 'Computer',
  topicos: [
    {
      id: 'inf-topico-1',
      numero: 1,
      titulo: 'Conceito de Internet e Intranet',
      conteudo: {
        resumo: `
## Resumo Rápido

### Quadro Comparativo

| Característica | INTERNET | INTRANET |
|----------------|----------|----------|
| **Acesso** | Público (mundial) | Restrito (organização) |
| **Abrangência** | Global | Local/corporativa |
| **Usuários** | Qualquer pessoa | Funcionários/autorizados |
| **Segurança** | Menor controle | Alto controle |
| **Tecnologia** | TCP/IP | TCP/IP (mesma) |
| **Exemplo** | www.google.com | portal.empresa.local |

### Conceitos Essenciais
- **Internet**: Rede mundial de computadores
- **Intranet**: Rede privada que usa tecnologia da Internet
- **Extranet**: Extensão da Intranet para parceiros externos
- **VPN**: Rede privada virtual (acesso seguro remoto)

### Para IADES - Memorize:
- Internet = **pública e mundial**
- Intranet = **privada e corporativa** (mesma tecnologia)
- Ambas usam **protocolo TCP/IP**
- A Intranet **NÃO** precisa de conexão com a Internet
        `,

        explicacao: `
## Explicação Didática

### 1. O que é a INTERNET?

A **Internet** é uma rede mundial de computadores interconectados que permite a troca de informações entre dispositivos em todo o planeta.

#### Características Principais
- **Pública**: qualquer pessoa pode acessar
- **Global**: abrange todo o mundo
- **Descentralizada**: não tem um "dono" único
- **Protocolo TCP/IP**: linguagem comum de comunicação

#### História Resumida
| Ano | Marco |
|-----|-------|
| 1969 | ARPANET (precursora militar, EUA) |
| 1983 | Adoção do TCP/IP |
| 1989 | Criação da WWW (Tim Berners-Lee) |
| 1995 | Internet comercial no Brasil |

#### Componentes da Internet
1. **ISP** (Provedor de Serviços de Internet): empresa que fornece acesso
2. **Backbone**: espinha dorsal, redes de alta velocidade
3. **Servidores**: computadores que hospedam serviços
4. **Clientes**: dispositivos que acessam os serviços

### 2. O que é INTRANET?

A **Intranet** é uma rede **privada** que utiliza as mesmas tecnologias e protocolos da Internet, mas é restrita ao ambiente interno de uma organização.

#### Características da Intranet
- **Privada**: acesso apenas para usuários autorizados
- **Corporativa**: serve a funcionários/membros
- **Protegida**: firewall controla o acesso
- **Usa TCP/IP**: mesma tecnologia da Internet

#### Componentes Típicos
- Portal corporativo (informações internas)
- E-mail institucional
- Sistemas de gestão (RH, financeiro)
- Documentos compartilhados
- Comunicação interna

#### Vantagens da Intranet
1. **Comunicação**: rápida disseminação de informações
2. **Segurança**: dados protegidos da Internet
3. **Padronização**: tecnologia conhecida (navegadores)
4. **Custo**: infraestrutura de baixo custo

### 3. Diferenças entre Internet e Intranet

| Aspecto | Internet | Intranet |
|---------|----------|----------|
| **Acesso** | Público | Restrito |
| **Abrangência** | Global | Local |
| **Usuários** | Qualquer pessoa | Autorizados |
| **Controle** | Descentralizado | Centralizado (TI) |
| **Firewall** | Não exige | Essencial |
| **Anonimato** | Possível | Identificação |
| **Conteúdo** | Variado | Corporativo |

### 4. O que é EXTRANET?

A **Extranet** é uma extensão da Intranet que permite acesso a usuários **externos autorizados** (parceiros, fornecedores, clientes).

#### Características
- Acesso controlado a parceiros externos
- Intermediária entre Intranet e Internet
- Requer autenticação
- Usa tecnologias seguras (VPN, SSL)

**Exemplo prático:**
> Um laboratório parceiro pode acessar a Extranet da ANVISA para enviar resultados de análises, mas não tem acesso completo à Intranet.

### 5. VPN - Rede Privada Virtual

A **VPN** (Virtual Private Network) permite criar uma conexão segura através da Internet pública, como se fosse uma rede privada.

#### Como funciona
1. Cria um "túnel" criptografado
2. Dados trafegam de forma segura
3. Permite acesso remoto à Intranet

**Uso comum:**
> Fiscal de Saúde trabalhando em campo pode acessar sistemas da SES-GO via VPN, de forma segura.

### 6. Protocolos e Tecnologias

#### Protocolo TCP/IP
**TCP** (Transmission Control Protocol) + **IP** (Internet Protocol)
- Base de comunicação da Internet e Intranet
- TCP: garante entrega correta dos dados
- IP: endereçamento dos dispositivos

#### Outros Protocolos Importantes
| Protocolo | Função | Porta |
|-----------|--------|-------|
| HTTP | Páginas web | 80 |
| HTTPS | Páginas web seguras | 443 |
| FTP | Transferência de arquivos | 21 |
| SMTP | Envio de e-mail | 25/587 |
| POP3 | Recebimento de e-mail | 110 |
| IMAP | Recebimento de e-mail (servidor) | 143 |

### 7. Conceitos Relacionados

#### URL (Uniform Resource Locator)
Endereço de um recurso na web.
> https://www.saude.go.gov.br/pagina

Componentes:
- **https** → protocolo
- **www.saude.go.gov.br** → domínio
- **/pagina** → caminho

#### Domínio
Nome que identifica um site (ex: google.com.br)
- **.gov.br** → governo brasileiro
- **.org.br** → organização
- **.com.br** → comercial

#### DNS (Domain Name System)
Traduz nomes de domínio em endereços IP.
> www.google.com → 142.250.218.4

### 8. Segurança na Internet vs. Intranet

#### Na Internet
- Exposição a ameaças externas
- Necessidade de antivírus, firewall pessoal
- Cuidado com phishing, malware
- HTTPS para conexões seguras

#### Na Intranet
- Firewall corporativo
- Controle de acesso
- Monitoramento de atividades
- Políticas de segurança
- Backup centralizado

### 9. Aplicação na Vigilância Sanitária

| Sistema | Tipo | Descrição |
|---------|------|-----------|
| Portal da ANVISA | Internet | Acesso público |
| SINAVISA | Intranet/Extranet | Sistema nacional de notificação |
| SEI-GO | Intranet | Sistema Eletrônico de Informações |
| Portal do Servidor | Intranet | Acesso funcional |
        `,

        pontosChave: [
          'Internet = rede PÚBLICA mundial; Intranet = rede PRIVADA corporativa',
          'Ambas usam a MESMA tecnologia (TCP/IP, navegadores, HTTP)',
          'Intranet NÃO precisa de conexão com a Internet',
          'Extranet = Intranet aberta para parceiros EXTERNOS autorizados',
          'VPN = túnel seguro para acessar Intranet via Internet',
          'Firewall protege a Intranet de acessos não autorizados',
          'HTTP (porta 80) = web normal; HTTPS (porta 443) = web segura',
          'DNS traduz nomes (google.com) em IPs (número)',
          'A Internet surgiu da ARPANET (1969, EUA)',
          'ISP = Provedor de acesso à Internet',
        ],

        armadilhas: [
          {
            titulo: 'Achar que Intranet precisa de Internet',
            descricao: 'A Intranet pode funcionar totalmente isolada. Usa a mesma TECNOLOGIA, não a mesma REDE.',
            dica: 'Intranet = tecnologia igual, rede diferente (interna).',
          },
          {
            titulo: 'Confundir Intranet com rede local qualquer',
            descricao: 'Intranet especificamente usa tecnologias web (HTTP, navegadores). Uma rede local comum pode não usar.',
            dica: 'Intranet = rede privada COM tecnologias web (TCP/IP, HTTP).',
          },
          {
            titulo: 'Achar que Extranet é Internet',
            descricao: 'Extranet é uma EXTENSÃO da Intranet para parceiros, não é acesso público.',
            dica: 'Extranet = parceiros autorizados. Internet = qualquer pessoa.',
          },
          {
            titulo: 'Confundir HTTP com HTTPS',
            descricao: 'HTTPS é a versão SEGURA (criptografada) do HTTP. O "S" = Secure.',
            dica: 'Sites de banco, login: sempre HTTPS. O navegador mostra cadeado.',
          },
        ],

        mnemonicos: [
          {
            termo: 'PRI-PU',
            significado: 'Intranet = PRIvada; Internet = PÚblica',
            frase: 'Intra = PRI(vada), Inter = PÚ(blica)',
          },
          {
            termo: 'TCP-IP',
            significado: 'Transporte Confiável de Pacotes - Identificação de Pontos',
            frase: 'TCP garante entrega, IP endereça destino',
          },
          {
            termo: 'VPN',
            significado: 'Virtual Private Network',
            frase: 'VPN = Via Privada pela Net (túnel seguro)',
          },
        ],

        flashcards: [
          {
            id: 'inf-fc-1-1',
            frente: 'Qual a diferença FUNDAMENTAL entre Internet e Intranet?',
            verso: '**INTERNET**:\n- Rede PÚBLICA\n- Acesso MUNDIAL\n- Qualquer pessoa\n\n**INTRANET**:\n- Rede PRIVADA\n- Acesso RESTRITO\n- Apenas autorizados\n\nAmbas usam MESMA tecnologia (TCP/IP)!',
            tags: ['internet', 'intranet', 'diferença'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-1-2',
            frente: 'A Intranet precisa de conexão com a Internet?',
            verso: '**NÃO!**\n\nA Intranet pode funcionar totalmente ISOLADA da Internet.\n\nEla usa a mesma TECNOLOGIA (TCP/IP, HTTP, navegadores), mas é uma rede separada e privada.',
            tags: ['intranet', 'pegadinha'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-1-3',
            frente: 'O que é uma EXTRANET?',
            verso: 'É uma **extensão da Intranet** que permite acesso a **parceiros externos** autorizados.\n\nExemplo: Fornecedor acessando sistema de compras da empresa.\n\n⚠️ NÃO é acesso público como a Internet!',
            tags: ['extranet', 'conceito'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-1-4',
            frente: 'O que é VPN e para que serve?',
            verso: '**VPN** = Virtual Private Network\n\nCria um "túnel" criptografado pela Internet, permitindo acessar a Intranet de forma SEGURA remotamente.\n\nUso: fiscal em campo acessando sistemas da SES-GO.',
            tags: ['VPN', 'segurança'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-1-5',
            frente: 'O que é o protocolo TCP/IP?',
            verso: '**TCP/IP** = conjunto de protocolos que permite comunicação em rede.\n\n**TCP**: garante entrega correta dos dados\n**IP**: endereça os dispositivos na rede\n\nÉ a BASE tanto da Internet quanto da Intranet.',
            tags: ['TCP/IP', 'protocolo'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-1-6',
            frente: 'Qual a diferença entre HTTP e HTTPS?',
            verso: '**HTTP** (porta 80):\n- HyperText Transfer Protocol\n- Sem criptografia\n\n**HTTPS** (porta 443):\n- HTTP + SSL/TLS\n- COM criptografia\n- Mais seguro (cadeado no navegador)\n\nUse HTTPS para dados sensíveis!',
            tags: ['HTTP', 'HTTPS', 'segurança'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-1-7',
            frente: 'O que é FIREWALL?',
            verso: '**Firewall** = "parede de fogo"\n\nSistema que controla o tráfego de rede, filtrando conexões autorizadas e bloqueando acessos indevidos.\n\nEssencial para proteger a Intranet de acessos externos não autorizados.',
            tags: ['firewall', 'segurança'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-1-8',
            frente: 'O que é DNS?',
            verso: '**DNS** = Domain Name System\n\n"Agenda telefônica" da Internet.\n\nTraduz nomes de domínio em endereços IP:\n\nwww.google.com → 142.250.218.4\n\nSem DNS, teríamos que memorizar números!',
            tags: ['DNS', 'conceito'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: 'inf-q-1-1',
            enunciado: 'A principal diferença entre Internet e Intranet é que:',
            alternativas: [
              { letra: 'A', texto: 'A Internet usa protocolo TCP/IP e a Intranet usa outro protocolo.' },
              { letra: 'B', texto: 'A Internet é uma rede pública mundial, enquanto a Intranet é uma rede privada corporativa.' },
              { letra: 'C', texto: 'A Intranet não permite o uso de navegadores web.' },
              { letra: 'D', texto: 'A Internet é mais segura que a Intranet.' },
              { letra: 'E', texto: 'A Intranet obrigatoriamente precisa de conexão com a Internet.' },
            ],
            gabarito: 'B',
            justificativa: 'A diferença fundamental é o ACESSO: Internet é pública/mundial; Intranet é privada/corporativa. Ambas usam TCP/IP e navegadores. Intranet não precisa de Internet.',
            dificuldade: 'Fácil',
            competencia: 'Conceito Internet/Intranet',
            banca: 'IADES',
            tags: ['internet', 'intranet'],
          },
          {
            id: 'inf-q-1-2',
            enunciado: 'Sobre a Intranet, é CORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'É acessível a qualquer pessoa com conexão à Internet.' },
              { letra: 'B', texto: 'Utiliza tecnologias diferentes das usadas na Internet.' },
              { letra: 'C', texto: 'É uma rede privada que utiliza as mesmas tecnologias da Internet.' },
              { letra: 'D', texto: 'Não pode utilizar navegadores web como interface.' },
              { letra: 'E', texto: 'Necessariamente precisa estar conectada à Internet para funcionar.' },
            ],
            gabarito: 'C',
            justificativa: 'A Intranet é uma rede PRIVADA que usa as MESMAS tecnologias da Internet (TCP/IP, HTTP, navegadores). Não precisa de conexão com a Internet e não é pública.',
            dificuldade: 'Fácil',
            competencia: 'Conceito de Intranet',
            banca: 'IADES',
            tags: ['intranet', 'tecnologia'],
          },
          {
            id: 'inf-q-1-3',
            enunciado: 'A Extranet pode ser definida como:',
            alternativas: [
              { letra: 'A', texto: 'Sinônimo de Internet.' },
              { letra: 'B', texto: 'Uma rede totalmente isolada e sem acesso externo.' },
              { letra: 'C', texto: 'Uma extensão da Intranet que permite acesso a parceiros externos autorizados.' },
              { letra: 'D', texto: 'Uma rede de acesso público como a Internet.' },
              { letra: 'E', texto: 'Um tipo de firewall para proteção da rede.' },
            ],
            gabarito: 'C',
            justificativa: 'Extranet é uma EXTENSÃO da Intranet que permite acesso CONTROLADO a parceiros externos autorizados (fornecedores, clientes), mantendo a segurança.',
            dificuldade: 'Média',
            competencia: 'Conceito de Extranet',
            banca: 'IADES',
            tags: ['extranet', 'conceito'],
          },
          {
            id: 'inf-q-1-4',
            enunciado: 'O protocolo utilizado tanto na Internet quanto na Intranet para comunicação entre computadores é o:',
            alternativas: [
              { letra: 'A', texto: 'HTTP apenas.' },
              { letra: 'B', texto: 'FTP apenas.' },
              { letra: 'C', texto: 'TCP/IP.' },
              { letra: 'D', texto: 'HTML.' },
              { letra: 'E', texto: 'WWW.' },
            ],
            gabarito: 'C',
            justificativa: 'O TCP/IP é o protocolo base de comunicação tanto da Internet quanto da Intranet. HTTP é protocolo de aplicação (web), FTP de transferência de arquivos, HTML é linguagem de marcação, WWW é serviço.',
            dificuldade: 'Fácil',
            competencia: 'Protocolo TCP/IP',
            banca: 'IADES',
            tags: ['TCP/IP', 'protocolo'],
          },
          {
            id: 'inf-q-1-5',
            enunciado: 'Para acessar a Intranet de uma organização a partir de um local externo de forma segura, utiliza-se:',
            alternativas: [
              { letra: 'A', texto: 'HTTP simples.' },
              { letra: 'B', texto: 'VPN (Virtual Private Network).' },
              { letra: 'C', texto: 'Extranet pública.' },
              { letra: 'D', texto: 'Navegador comum sem configurações.' },
              { letra: 'E', texto: 'Acesso direto pela Internet sem proteção.' },
            ],
            gabarito: 'B',
            justificativa: 'A VPN (Rede Privada Virtual) cria um túnel criptografado através da Internet, permitindo acesso seguro à Intranet corporativa a partir de locais externos.',
            dificuldade: 'Média',
            competencia: 'VPN',
            banca: 'IADES',
            tags: ['VPN', 'acesso remoto'],
          },
          {
            id: 'inf-q-1-6',
            enunciado: 'O dispositivo ou software responsável por controlar o tráfego entre a Intranet e a Internet, filtrando acessos não autorizados, é denominado:',
            alternativas: [
              { letra: 'A', texto: 'Roteador.' },
              { letra: 'B', texto: 'Switch.' },
              { letra: 'C', texto: 'Firewall.' },
              { letra: 'D', texto: 'Modem.' },
              { letra: 'E', texto: 'Hub.' },
            ],
            gabarito: 'C',
            justificativa: 'O FIREWALL é o sistema que filtra o tráfego de rede, controlando quais conexões são permitidas ou bloqueadas, protegendo a Intranet de acessos não autorizados.',
            dificuldade: 'Fácil',
            competencia: 'Firewall',
            banca: 'IADES',
            tags: ['firewall', 'segurança'],
          },
          {
            id: 'inf-q-1-7',
            enunciado: 'A versão segura do protocolo HTTP, que utiliza criptografia para proteger a comunicação, é denominada:',
            alternativas: [
              { letra: 'A', texto: 'HTTP/2' },
              { letra: 'B', texto: 'FTP' },
              { letra: 'C', texto: 'HTTPS' },
              { letra: 'D', texto: 'SMTP' },
              { letra: 'E', texto: 'TCP' },
            ],
            gabarito: 'C',
            justificativa: 'HTTPS = HTTP + SSL/TLS. É a versão SEGURA do HTTP, com criptografia. Usado em sites de banco, login, compras online. O navegador exibe um cadeado.',
            dificuldade: 'Fácil',
            competencia: 'Protocolo HTTPS',
            banca: 'IADES',
            tags: ['HTTPS', 'segurança'],
          },
          {
            id: 'inf-q-1-8',
            enunciado: 'O serviço responsável por traduzir nomes de domínio (como www.saude.gov.br) em endereços IP é o:',
            alternativas: [
              { letra: 'A', texto: 'DHCP' },
              { letra: 'B', texto: 'FTP' },
              { letra: 'C', texto: 'DNS' },
              { letra: 'D', texto: 'SMTP' },
              { letra: 'E', texto: 'HTTP' },
            ],
            gabarito: 'C',
            justificativa: 'DNS = Domain Name System. É o serviço que traduz nomes de domínio amigáveis (www.google.com) em endereços IP numéricos (142.250.218.4).',
            dificuldade: 'Fácil',
            competencia: 'DNS',
            banca: 'IADES',
            tags: ['DNS', 'domínio'],
          },
          {
            id: 'inf-q-1-9',
            enunciado: 'Um fiscal de saúde pública precisa acessar o sistema interno da secretaria enquanto está em uma inspeção externa. A tecnologia que permite esse acesso seguro é a:',
            alternativas: [
              { letra: 'A', texto: 'Internet aberta' },
              { letra: 'B', texto: 'VPN' },
              { letra: 'C', texto: 'Wi-Fi público' },
              { letra: 'D', texto: 'Bluetooth' },
              { letra: 'E', texto: 'Infravermelho' },
            ],
            gabarito: 'B',
            justificativa: 'A VPN (Virtual Private Network) permite que o fiscal acesse a Intranet da secretaria de forma segura, criando um túnel criptografado através da Internet.',
            dificuldade: 'Média',
            competencia: 'VPN - aplicação',
            banca: 'IADES',
            tags: ['VPN', 'aplicação', 'vigilância sanitária'],
          },
          {
            id: 'inf-q-1-10',
            enunciado: 'Sobre Internet e Intranet, é INCORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'A Internet é uma rede pública de abrangência mundial.' },
              { letra: 'B', texto: 'A Intranet utiliza tecnologias como TCP/IP e HTTP.' },
              { letra: 'C', texto: 'A Intranet pode existir isoladamente, sem conexão com a Internet.' },
              { letra: 'D', texto: 'Internet e Intranet utilizam protocolos de comunicação diferentes e incompatíveis.' },
              { letra: 'E', texto: 'A Intranet é protegida por firewalls para controle de acesso.' },
            ],
            gabarito: 'D',
            justificativa: 'A alternativa D é INCORRETA porque Internet e Intranet utilizam os MESMOS protocolos (TCP/IP, HTTP, etc.). A diferença é o acesso (público vs. privado), não a tecnologia.',
            dificuldade: 'Média',
            competencia: 'Comparação Internet/Intranet',
            banca: 'IADES',
            tags: ['internet', 'intranet', 'incorreto'],
          },
        ],
      },
    },
    {
      id: 'inf-topico-2',
      numero: 2,
      titulo: 'Ferramentas e aplicativos de navegação, correio eletrônico, grupos de discussão, busca e pesquisa',
      conteudo: {
        resumo: `
## Resumo Rápido

### Navegadores Web (Browsers)

| Navegador | Desenvolvedor | Características |
|-----------|---------------|-----------------|
| **Google Chrome** | Google | Mais usado, extensões, integração Google |
| **Mozilla Firefox** | Mozilla | Código aberto, privacidade |
| **Microsoft Edge** | Microsoft | Baseado em Chromium, Windows 10/11 |
| **Safari** | Apple | Exclusivo Apple, otimizado iOS/macOS |
| **Opera** | Opera Software | VPN integrada, leve |

### Correio Eletrônico (E-mail)

| Protocolo | Função | Porta |
|-----------|--------|-------|
| **SMTP** | ENVIAR e-mails | 25 ou 587 |
| **POP3** | RECEBER (baixa e apaga do servidor) | 110 |
| **IMAP** | RECEBER (sincroniza com servidor) | 143 |

### Buscadores

| Buscador | Características |
|----------|-----------------|
| **Google** | Mais usado, algoritmo PageRank |
| **Bing** | Microsoft, integrado ao Edge |
| **Yahoo** | Portal com busca |
| **DuckDuckGo** | Foco em privacidade |

### Para IADES:
- SMTP = ENVIAR; POP3/IMAP = RECEBER
- IMAP mantém no servidor; POP3 baixa e remove
- Operadores de busca: "aspas", site:, -exclusão
        `,

        explicacao: `
## Explicação Didática

### 1. Navegadores Web (Browsers)

**Navegador** é o software que permite acessar páginas na Internet (WWW).

#### 1.1 Principais Navegadores

**Google Chrome:**
- Mais utilizado no mundo
- Desenvolvido pelo Google
- Extensões na Chrome Web Store
- Sincronização com conta Google
- Gerenciador de senhas integrado

**Mozilla Firefox:**
- Código aberto (open source)
- Foco em privacidade
- Extensões (add-ons)
- Desenvolvido pela Mozilla Foundation

**Microsoft Edge:**
- Substituiu o Internet Explorer
- Baseado no Chromium (mesmo do Chrome)
- Integrado ao Windows 10/11
- Modo IE para compatibilidade

**Safari:**
- Navegador da Apple
- Exclusivo para macOS e iOS
- Otimizado para dispositivos Apple

#### 1.2 Funcionalidades Comuns

| Funcionalidade | Descrição |
|----------------|-----------|
| **Abas (tabs)** | Múltiplas páginas na mesma janela |
| **Favoritos** | Salvar sites frequentes |
| **Histórico** | Registro de páginas visitadas |
| **Downloads** | Gerenciar arquivos baixados |
| **Extensões** | Adicionar funcionalidades |
| **Modo anônimo** | Navegação privada |
| **Sincronização** | Dados entre dispositivos |

#### 1.3 Atalhos Importantes

| Atalho | Função |
|--------|--------|
| **Ctrl + T** | Nova aba |
| **Ctrl + W** | Fechar aba |
| **Ctrl + N** | Nova janela |
| **Ctrl + Shift + N** | Janela anônima (Chrome) |
| **Ctrl + D** | Adicionar favorito |
| **Ctrl + H** | Histórico |
| **Ctrl + J** | Downloads |
| **F5** | Atualizar página |
| **Ctrl + F** | Buscar na página |

### 2. Correio Eletrônico (E-mail)

#### 2.1 Conceitos Básicos

**E-mail** (Electronic Mail) é o sistema de envio e recebimento de mensagens eletrônicas.

**Componentes do endereço:**
> usuario@dominio.com
- **usuario**: identificação do destinatário
- **@**: separador (arroba)
- **dominio.com**: servidor de e-mail

#### 2.2 Protocolos de E-mail

| Protocolo | Nome Completo | Função | Porta |
|-----------|---------------|--------|-------|
| **SMTP** | Simple Mail Transfer Protocol | ENVIAR e-mails | 25 ou 587 |
| **POP3** | Post Office Protocol v3 | RECEBER e-mails | 110 |
| **IMAP** | Internet Message Access Protocol | RECEBER e-mails | 143 |

#### 2.3 POP3 vs. IMAP

| Aspecto | POP3 | IMAP |
|---------|------|------|
| **Mensagens** | Baixa e REMOVE do servidor | MANTÉM no servidor |
| **Acesso** | Um dispositivo | Múltiplos dispositivos |
| **Armazenamento** | Local | No servidor |
| **Uso offline** | Melhor | Limitado |
| **Sincronização** | Não sincroniza | Sincroniza pastas |

**Quando usar cada um:**
- **POP3**: um único computador, quer manter local
- **IMAP**: vários dispositivos, acesso de qualquer lugar

#### 2.4 Clientes de E-mail

**Webmail (acesso pelo navegador):**
- Gmail, Outlook.com, Yahoo Mail

**Aplicativos instalados:**
- Microsoft Outlook
- Mozilla Thunderbird
- Apple Mail

#### 2.5 Estrutura de uma Mensagem

| Campo | Descrição |
|-------|-----------|
| **Para (To)** | Destinatário principal |
| **Cc** | Cópia (visível a todos) |
| **Cco/Bcc** | Cópia oculta (invisível aos outros) |
| **Assunto** | Título da mensagem |
| **Anexo** | Arquivos enviados junto |
| **Corpo** | Conteúdo da mensagem |

### 3. Grupos de Discussão

#### 3.1 Conceitos

**Grupos de discussão** são espaços virtuais para troca de informações sobre temas específicos.

**Tipos:**
- **Fóruns**: discussões organizadas por tópicos
- **Listas de e-mail**: mensagens distribuídas por e-mail
- **Newsgroups (Usenet)**: sistema antigo de discussão
- **Grupos em redes sociais**: Facebook, LinkedIn, WhatsApp

#### 3.2 Características

| Característica | Descrição |
|----------------|-----------|
| **Tema específico** | Foco em assunto determinado |
| **Moderação** | Pode ter moderadores |
| **Assincrono** | Não precisa estar online ao mesmo tempo |
| **Histórico** | Mensagens anteriores ficam disponíveis |

### 4. Ferramentas de Busca e Pesquisa

#### 4.1 Buscadores (Search Engines)

**Google:**
- Líder mundial (>90% das buscas)
- Algoritmo PageRank
- Indexa bilhões de páginas

**Bing:**
- Microsoft
- Integrado ao Windows e Edge
- Rewards para usuários

**DuckDuckGo:**
- Foco em privacidade
- Não rastreia usuários

#### 4.2 Operadores de Busca (Google)

| Operador | Função | Exemplo |
|----------|--------|---------|
| **"aspas"** | Busca frase exata | "vigilância sanitária" |
| **-** | Exclui termo | anvisa -medicamentos |
| **site:** | Busca em site específico | site:gov.br anvisa |
| **filetype:** | Busca tipo de arquivo | edital filetype:pdf |
| **OR** | Um OU outro termo | anvisa OR vigilância |
| ***** | Curinga (palavra qualquer) | "fiscal de * pública" |
| **define:** | Definição de palavra | define:autarquia |
| **intitle:** | Termo no título | intitle:concurso |

#### 4.3 Dicas de Pesquisa

1. **Seja específico**: use palavras-chave relevantes
2. **Use aspas**: para frases exatas
3. **Exclua termos**: use o sinal de menos (-)
4. **Filtre resultados**: por data, tipo, região
5. **Use operadores**: combine técnicas

#### 4.4 Exemplos Práticos (VISA)

| Busca | Resultado esperado |
|-------|-------------------|
| "vigilância sanitária" site:gov.br | Páginas oficiais sobre VISA |
| anvisa concurso filetype:pdf | PDFs de concursos da ANVISA |
| legislação sanitária -estadual | Legislação federal |
| "fiscal de saúde" OR "agente sanitário" | Ambos os termos |

### 5. Segurança na Navegação e E-mail

#### 5.1 Ameaças Comuns

| Ameaça | Descrição | Prevenção |
|--------|-----------|-----------|
| **Phishing** | E-mails falsos para roubar dados | Verificar remetente, não clicar em links suspeitos |
| **Malware** | Software malicioso | Antivírus, não baixar de fontes duvidosas |
| **Spam** | E-mails indesejados | Filtros de spam, não divulgar e-mail |

#### 5.2 Boas Práticas

- Use senhas **fortes** e **diferentes**
- Ative a **autenticação de dois fatores**
- Verifique o **cadeado** (HTTPS) em sites
- **Não clique** em links suspeitos
- Mantenha **software atualizado**
- Use **antivírus** atualizado
        `,

        pontosChave: [
          'Navegadores principais: Chrome, Firefox, Edge, Safari, Opera',
          'Modo anônimo/privativo: não salva histórico localmente',
          'SMTP = ENVIAR e-mails (porta 25 ou 587)',
          'POP3 = RECEBER e-mails, BAIXA e REMOVE do servidor (porta 110)',
          'IMAP = RECEBER e-mails, MANTÉM no servidor, sincroniza (porta 143)',
          'Para (To) = destinatário; Cc = cópia visível; Cco/Bcc = cópia OCULTA',
          'Google: operador "aspas" busca frase exata',
          'Operador site: limita busca a um domínio específico',
          'Operador filetype: busca por tipo de arquivo (pdf, doc)',
          'Phishing: e-mails falsos que tentam roubar informações',
        ],

        armadilhas: [
          {
            titulo: 'Confundir SMTP com POP3/IMAP',
            descricao: 'SMTP ENVIA. POP3 e IMAP RECEBEM.',
            dica: 'SMTP = Send Mail (envia). POP/IMAP = recebe.',
          },
          {
            titulo: 'Confundir POP3 com IMAP',
            descricao: 'POP3 baixa e REMOVE do servidor. IMAP MANTÉM no servidor.',
            dica: 'POP = Puxa e Apaga. IMAP = Internet MAntém no servidor.',
          },
          {
            titulo: 'Achar que modo anônimo protege totalmente',
            descricao: 'O modo anônimo não salva histórico LOCAL, mas seu provedor e sites visitados ainda podem rastrear.',
            dica: 'Modo anônimo = privacidade local, não anonimato total.',
          },
          {
            titulo: 'Confundir Cc com Cco',
            descricao: 'Cc (cópia) é visível a todos. Cco/Bcc (cópia oculta) é invisível.',
            dica: 'Cco = Cópia Com Ocultação.',
          },
        ],

        mnemonicos: [
          {
            termo: 'SMTP-SEND',
            significado: 'SMTP = Send Mail Transfer Protocol',
            frase: 'SMTP ENVIA (Send Mail)',
          },
          {
            termo: 'POP-PUXA',
            significado: 'POP3 puxa o e-mail e remove do servidor',
            frase: 'POP Puxa e Remove',
          },
          {
            termo: 'IMAP-INTERNET',
            significado: 'IMAP mantém no servidor (acesso de qualquer lugar)',
            frase: 'IMAP = Internet MAntém no servidor Permanentemente',
          },
        ],

        flashcards: [
          {
            id: 'inf-fc-2-1',
            frente: 'Qual protocolo é usado para ENVIAR e-mails?',
            verso: '**SMTP** (Simple Mail Transfer Protocol)\n\nPorta: 25 ou 587\n\nDica: SMTP = Send Mail (envia)\n\nPOP3 e IMAP são para RECEBER.',
            tags: ['e-mail', 'SMTP'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-2-2',
            frente: 'Qual a diferença entre POP3 e IMAP?',
            verso: '**POP3:**\n- BAIXA e REMOVE do servidor\n- Um dispositivo\n- Porta 110\n\n**IMAP:**\n- MANTÉM no servidor\n- Múltiplos dispositivos\n- Sincroniza\n- Porta 143',
            tags: ['e-mail', 'POP3', 'IMAP'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-2-3',
            frente: 'O que é o campo Cco (ou Bcc) no e-mail?',
            verso: '**Cco = Cópia OCULTA**\n(Bcc = Blind Carbon Copy)\n\nOs destinatários em Cco NÃO são visíveis para os outros.\n\nÚtil para enviar para muitos sem expor e-mails.\n\nCc = cópia VISÍVEL a todos.',
            tags: ['e-mail', 'Cco'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-2-4',
            frente: 'Como buscar uma FRASE EXATA no Google?',
            verso: 'Use **"aspas"** para buscar frase exata.\n\nExemplo:\n"vigilância sanitária"\n\nIsso retorna apenas páginas com essa frase exata, na ordem especificada.',
            tags: ['busca', 'Google'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-2-5',
            frente: 'Para que serve o operador site: no Google?',
            verso: '**site:** limita a busca a um domínio específico.\n\nExemplo:\nsite:gov.br concurso anvisa\n\nRetorna apenas resultados do domínio gov.br',
            tags: ['busca', 'operadores'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-2-6',
            frente: 'Para que serve o operador filetype: no Google?',
            verso: '**filetype:** busca por tipo de arquivo.\n\nExemplos:\nedital filetype:pdf\nplanilha filetype:xlsx\n\nRetorna apenas arquivos do tipo especificado.',
            tags: ['busca', 'operadores'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-2-7',
            frente: 'O que é PHISHING?',
            verso: '**Phishing** = tentativa de roubar informações usando e-mails ou sites FALSOS que imitam os verdadeiros.\n\nExemplo: e-mail falso do banco pedindo senha.\n\nPrevenção:\n- Verificar remetente\n- Não clicar em links suspeitos\n- Verificar URL',
            tags: ['segurança', 'phishing'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-2-8',
            frente: 'Quais os principais atalhos de navegador?',
            verso: '**Ctrl + T** = nova aba\n**Ctrl + W** = fechar aba\n**Ctrl + Shift + N** = janela anônima\n**Ctrl + D** = favorito\n**Ctrl + H** = histórico\n**F5** = atualizar\n**Ctrl + F** = buscar na página',
            tags: ['navegador', 'atalhos'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: 'inf-q-2-1',
            enunciado: 'O protocolo utilizado para o ENVIO de mensagens de correio eletrônico é o:',
            alternativas: [
              { letra: 'A', texto: 'POP3' },
              { letra: 'B', texto: 'IMAP' },
              { letra: 'C', texto: 'SMTP' },
              { letra: 'D', texto: 'FTP' },
              { letra: 'E', texto: 'HTTP' },
            ],
            gabarito: 'C',
            justificativa: 'O SMTP (Simple Mail Transfer Protocol) é o protocolo usado para ENVIAR e-mails. POP3 e IMAP são usados para RECEBER e-mails.',
            dificuldade: 'Fácil',
            competencia: 'Protocolos de e-mail',
            banca: 'IADES',
            tags: ['SMTP', 'e-mail'],
          },
          {
            id: 'inf-q-2-2',
            enunciado: 'A principal diferença entre os protocolos POP3 e IMAP é que:',
            alternativas: [
              { letra: 'A', texto: 'O POP3 é usado para enviar e o IMAP para receber e-mails.' },
              { letra: 'B', texto: 'O POP3 baixa e remove as mensagens do servidor, enquanto o IMAP as mantém.' },
              { letra: 'C', texto: 'O IMAP é mais antigo que o POP3.' },
              { letra: 'D', texto: 'Não há diferença significativa entre eles.' },
              { letra: 'E', texto: 'O POP3 é usado apenas em dispositivos móveis.' },
            ],
            gabarito: 'B',
            justificativa: 'A principal diferença é que o POP3 BAIXA e REMOVE as mensagens do servidor (acesso em um dispositivo), enquanto o IMAP MANTÉM as mensagens no servidor (acesso em múltiplos dispositivos).',
            dificuldade: 'Média',
            competencia: 'POP3 vs IMAP',
            banca: 'IADES',
            tags: ['POP3', 'IMAP'],
          },
          {
            id: 'inf-q-2-3',
            enunciado: 'No campo Cco (ou Bcc) de um e-mail, os destinatários inseridos:',
            alternativas: [
              { letra: 'A', texto: 'Recebem a mensagem e são visíveis para todos os outros destinatários.' },
              { letra: 'B', texto: 'Não recebem a mensagem, apenas uma notificação.' },
              { letra: 'C', texto: 'Recebem a mensagem, mas NÃO são visíveis para os outros destinatários.' },
              { letra: 'D', texto: 'Recebem a mensagem com atraso de 24 horas.' },
              { letra: 'E', texto: 'São automaticamente adicionados à lista de contatos.' },
            ],
            gabarito: 'C',
            justificativa: 'O campo Cco (Cópia Oculta) ou Bcc (Blind Carbon Copy) permite enviar cópia da mensagem para destinatários que NÃO são visíveis para os demais. Útil para preservar privacidade.',
            dificuldade: 'Fácil',
            competencia: 'Campos do e-mail',
            banca: 'IADES',
            tags: ['e-mail', 'Cco'],
          },
          {
            id: 'inf-q-2-4',
            enunciado: 'Para buscar no Google apenas páginas de sites governamentais brasileiros (.gov.br), deve-se utilizar o operador:',
            alternativas: [
              { letra: 'A', texto: 'filetype:gov.br' },
              { letra: 'B', texto: 'site:gov.br' },
              { letra: 'C', texto: 'domain:gov.br' },
              { letra: 'D', texto: 'url:gov.br' },
              { letra: 'E', texto: 'in:gov.br' },
            ],
            gabarito: 'B',
            justificativa: 'O operador "site:" limita a busca a um domínio específico. Exemplo: site:gov.br vigilância sanitária retornará apenas resultados de sites governamentais.',
            dificuldade: 'Fácil',
            competencia: 'Operadores de busca',
            banca: 'IADES',
            tags: ['Google', 'operadores'],
          },
          {
            id: 'inf-q-2-5',
            enunciado: 'Para buscar no Google apenas arquivos em formato PDF, deve-se utilizar:',
            alternativas: [
              { letra: 'A', texto: 'type:pdf' },
              { letra: 'B', texto: 'format:pdf' },
              { letra: 'C', texto: 'filetype:pdf' },
              { letra: 'D', texto: 'ext:pdf' },
              { letra: 'E', texto: 'file:pdf' },
            ],
            gabarito: 'C',
            justificativa: 'O operador "filetype:" permite buscar arquivos de um tipo específico. Exemplo: edital filetype:pdf retornará apenas arquivos PDF.',
            dificuldade: 'Fácil',
            competencia: 'Operadores de busca',
            banca: 'IADES',
            tags: ['Google', 'filetype'],
          },
          {
            id: 'inf-q-2-6',
            enunciado: 'O atalho Ctrl + Shift + N em navegadores como Google Chrome abre:',
            alternativas: [
              { letra: 'A', texto: 'Uma nova aba.' },
              { letra: 'B', texto: 'Uma nova janela normal.' },
              { letra: 'C', texto: 'Uma janela de navegação anônima/privativa.' },
              { letra: 'D', texto: 'O gerenciador de downloads.' },
              { letra: 'E', texto: 'As configurações do navegador.' },
            ],
            gabarito: 'C',
            justificativa: 'O atalho Ctrl + Shift + N abre uma janela de navegação anônima (Chrome) ou privativa (Firefox usa Ctrl + Shift + P). Nesse modo, o histórico não é salvo localmente.',
            dificuldade: 'Média',
            competencia: 'Atalhos de navegador',
            banca: 'IADES',
            tags: ['navegador', 'atalhos'],
          },
          {
            id: 'inf-q-2-7',
            enunciado: 'O phishing é uma técnica de ataque que consiste em:',
            alternativas: [
              { letra: 'A', texto: 'Invadir computadores por força bruta.' },
              { letra: 'B', texto: 'Enviar e-mails ou criar sites falsos para roubar informações.' },
              { letra: 'C', texto: 'Sobrecarregar servidores com requisições.' },
              { letra: 'D', texto: 'Instalar programas espiões fisicamente.' },
              { letra: 'E', texto: 'Interceptar comunicações de rede.' },
            ],
            gabarito: 'B',
            justificativa: 'Phishing é uma técnica de engenharia social que usa e-mails ou sites FALSOS que imitam os legítimos para enganar usuários e roubar informações como senhas e dados bancários.',
            dificuldade: 'Fácil',
            competencia: 'Segurança - Phishing',
            banca: 'IADES',
            tags: ['segurança', 'phishing'],
          },
          {
            id: 'inf-q-2-8',
            enunciado: 'Para buscar no Google a frase exata "fiscal de saúde pública", deve-se digitar:',
            alternativas: [
              { letra: 'A', texto: 'fiscal de saúde pública (sem aspas)' },
              { letra: 'B', texto: '"fiscal de saúde pública" (com aspas)' },
              { letra: 'C', texto: 'fiscal AND saúde AND pública' },
              { letra: 'D', texto: '+fiscal +saúde +pública' },
              { letra: 'E', texto: 'exact:fiscal de saúde pública' },
            ],
            gabarito: 'B',
            justificativa: 'Para buscar uma frase exata no Google, deve-se usar ASPAS. Isso retorna apenas páginas que contêm a frase exatamente como digitada.',
            dificuldade: 'Fácil',
            competencia: 'Busca com aspas',
            banca: 'IADES',
            tags: ['Google', 'aspas'],
          },
          {
            id: 'inf-q-2-9',
            enunciado: 'O protocolo IMAP é mais indicado que o POP3 quando:',
            alternativas: [
              { letra: 'A', texto: 'O usuário acessa e-mails de um único computador.' },
              { letra: 'B', texto: 'Há necessidade de economizar espaço no servidor.' },
              { letra: 'C', texto: 'O usuário acessa e-mails de múltiplos dispositivos.' },
              { letra: 'D', texto: 'Não há conexão frequente com a Internet.' },
              { letra: 'E', texto: 'O servidor de e-mail é muito antigo.' },
            ],
            gabarito: 'C',
            justificativa: 'O IMAP mantém as mensagens no SERVIDOR, permitindo acesso de MÚLTIPLOS dispositivos com sincronização. Ideal para quem usa celular, computador e tablet.',
            dificuldade: 'Média',
            competencia: 'IMAP',
            banca: 'IADES',
            tags: ['IMAP', 'e-mail'],
          },
          {
            id: 'inf-q-2-10',
            enunciado: 'Assinale a alternativa que apresenta um navegador de Internet desenvolvido pela Mozilla Foundation:',
            alternativas: [
              { letra: 'A', texto: 'Google Chrome' },
              { letra: 'B', texto: 'Microsoft Edge' },
              { letra: 'C', texto: 'Safari' },
              { letra: 'D', texto: 'Mozilla Firefox' },
              { letra: 'E', texto: 'Internet Explorer' },
            ],
            gabarito: 'D',
            justificativa: 'O Mozilla Firefox é desenvolvido pela Mozilla Foundation. Chrome é do Google, Edge e IE são da Microsoft, e Safari é da Apple.',
            dificuldade: 'Fácil',
            competencia: 'Navegadores',
            banca: 'IADES',
            tags: ['Firefox', 'navegador'],
          },
        ],
      },
    },
    {
      id: 'inf-topico-3',
      numero: 3,
      titulo: 'Principais aplicativos para edição de textos, planilhas eletrônicas, geração de material escrito e audiovisual',
      conteudo: {
        resumo: `
## Resumo Rápido

### Suítes de Escritório

| Suíte | Desenvolvedor | Aplicativos |
|-------|---------------|-------------|
| **Microsoft Office** | Microsoft | Word, Excel, PowerPoint |
| **LibreOffice** | The Document Foundation | Writer, Calc, Impress |
| **Google Workspace** | Google | Docs, Sheets, Slides |

### Principais Aplicativos

| Função | Microsoft | LibreOffice | Google |
|--------|-----------|-------------|--------|
| **Texto** | Word | Writer | Docs |
| **Planilha** | Excel | Calc | Sheets |
| **Apresentação** | PowerPoint | Impress | Slides |

### Extensões de Arquivo

| Tipo | Microsoft | LibreOffice/Padrão |
|------|-----------|-------------------|
| Texto | .docx (.doc) | .odt |
| Planilha | .xlsx (.xls) | .ods |
| Apresentação | .pptx (.ppt) | .odp |
| PDF | - | .pdf (universal) |

### Para IADES:
- LibreOffice = software LIVRE (gratuito e código aberto)
- Google Workspace = trabalho COLABORATIVO em nuvem
- Excel: fórmulas iniciam com = (igual)
- PDF = formato UNIVERSAL de documento
        `,

        explicacao: `
## Explicação Didática

### 1. Suítes de Escritório

**Suíte de escritório** é um conjunto de aplicativos para produtividade, incluindo editor de texto, planilha eletrônica e apresentações.

#### 1.1 Microsoft Office

A suíte mais popular no ambiente corporativo.

| Aplicativo | Função | Extensão |
|------------|--------|----------|
| **Word** | Editor de textos | .docx |
| **Excel** | Planilhas eletrônicas | .xlsx |
| **PowerPoint** | Apresentações | .pptx |
| **Outlook** | E-mail e calendário | - |
| **Access** | Banco de dados | .accdb |

**Características:**
- Software proprietário (pago)
- Versões: Desktop e Microsoft 365 (nuvem)
- Padrão no mercado corporativo
- Integração com Windows

#### 1.2 LibreOffice

Alternativa **gratuita e de código aberto** ao Microsoft Office.

| Aplicativo | Equivalente MS | Extensão |
|------------|----------------|----------|
| **Writer** | Word | .odt |
| **Calc** | Excel | .ods |
| **Impress** | PowerPoint | .odp |
| **Draw** | Visio (parcial) | .odg |
| **Base** | Access | .odb |
| **Math** | Editor de fórmulas | .odf |

**Características:**
- **Software livre** (gratuito e código aberto)
- Desenvolvido pela The Document Foundation
- Formato padrão: **ODF** (Open Document Format)
- Compatível com formatos Microsoft
- Multiplataforma (Windows, Linux, macOS)

#### 1.3 Google Workspace (antigo G Suite)

Ferramentas na **nuvem** para trabalho colaborativo.

| Aplicativo | Função | Acesso |
|------------|--------|--------|
| **Google Docs** | Editor de textos | Navegador |
| **Google Sheets** | Planilhas | Navegador |
| **Google Slides** | Apresentações | Navegador |
| **Google Drive** | Armazenamento em nuvem | Navegador |
| **Google Forms** | Formulários | Navegador |

**Características:**
- Trabalho **colaborativo em tempo real**
- Armazenamento na **nuvem**
- Acesso de qualquer dispositivo
- Salvamento automático
- Histórico de versões

### 2. Editor de Texto (Word/Writer/Docs)

#### 2.1 Funções Principais

| Função | Descrição |
|--------|-----------|
| **Formatação** | Fonte, tamanho, cor, negrito, itálico |
| **Parágrafos** | Alinhamento, espaçamento, recuo |
| **Inserção** | Imagens, tabelas, gráficos, links |
| **Revisão** | Corretor ortográfico, controle de alterações |
| **Referências** | Sumário, notas de rodapé, citações |

#### 2.2 Atalhos Importantes (Word)

| Atalho | Função |
|--------|--------|
| **Ctrl + N** | Negrito |
| **Ctrl + I** | Itálico |
| **Ctrl + S** | Sublinhado |
| **Ctrl + B** | Salvar |
| **Ctrl + P** | Imprimir |
| **Ctrl + Z** | Desfazer |
| **Ctrl + Y** | Refazer |
| **Ctrl + C** | Copiar |
| **Ctrl + V** | Colar |
| **Ctrl + X** | Recortar |
| **Ctrl + A** | Selecionar tudo |

#### 2.3 Mala Direta

Recurso para gerar documentos personalizados em massa (cartas, etiquetas, e-mails).

**Componentes:**
1. Documento principal (modelo)
2. Fonte de dados (lista de destinatários)
3. Campos de mesclagem

### 3. Planilha Eletrônica (Excel/Calc/Sheets)

#### 3.1 Conceitos Básicos

| Termo | Definição |
|-------|-----------|
| **Célula** | Interseção de linha e coluna (ex: A1, B2) |
| **Linha** | Horizontal, identificada por números (1, 2, 3...) |
| **Coluna** | Vertical, identificada por letras (A, B, C...) |
| **Planilha** | Conjunto de células (aba) |
| **Pasta de trabalho** | Arquivo com planilhas (.xlsx) |

#### 3.2 Fórmulas e Funções

**As fórmulas SEMPRE começam com = (igual)**

| Função | Sintaxe | Descrição |
|--------|---------|-----------|
| **SOMA** | =SOMA(A1:A10) | Soma valores |
| **MÉDIA** | =MÉDIA(A1:A10) | Calcula média |
| **MÁXIMO** | =MÁXIMO(A1:A10) | Maior valor |
| **MÍNIMO** | =MÍNIMO(A1:A10) | Menor valor |
| **CONT.SE** | =CONT.SE(A:A;"critério") | Conta se condição |
| **SE** | =SE(A1>10;"Sim";"Não") | Condição |
| **PROCV** | =PROCV(valor;tabela;coluna;0) | Procura vertical |
| **PROCH** | =PROCH(valor;tabela;linha;0) | Procura horizontal |

#### 3.3 Referências de Células

| Tipo | Exemplo | Comportamento ao copiar |
|------|---------|------------------------|
| **Relativa** | A1 | Muda conforme posição |
| **Absoluta** | $A$1 | Não muda (fixa) |
| **Mista** | $A1 ou A$1 | Fixa coluna ou linha |

**O símbolo $ "trava" a referência.**

#### 3.4 Gráficos

| Tipo | Uso |
|------|-----|
| **Colunas/Barras** | Comparação de valores |
| **Linhas** | Tendências ao longo do tempo |
| **Pizza** | Proporção do todo |
| **Dispersão** | Correlação entre variáveis |

### 4. Apresentações (PowerPoint/Impress/Slides)

#### 4.1 Elementos

| Elemento | Descrição |
|----------|-----------|
| **Slide** | Cada "página" da apresentação |
| **Layout** | Estrutura predefinida do slide |
| **Tema** | Design visual aplicado |
| **Transição** | Efeito entre slides |
| **Animação** | Efeito em elementos do slide |

#### 4.2 Modo de Exibição

| Modo | Uso |
|------|-----|
| **Normal** | Edição |
| **Classificação** | Organizar slides |
| **Apresentação** | Exibir para público (F5) |
| **Anotações** | Adicionar notas do apresentador |

### 5. PDF (Portable Document Format)

#### 5.1 Características

- Formato **universal** de documento
- Mantém formatação independente do dispositivo
- Desenvolvido pela Adobe (hoje padrão ISO)
- Pode ser protegido por senha
- Ideal para documentos finais

#### 5.2 Criação de PDF

| Software | Como criar |
|----------|------------|
| **Word/Writer** | Salvar como PDF |
| **Navegador** | Imprimir → PDF |
| **Adobe Acrobat** | Criar/editar PDF |
| **PDFCreator** | Impressora virtual |

### 6. Ferramentas de Mídia

#### 6.1 Edição de Imagens

| Software | Tipo | Uso |
|----------|------|-----|
| **Paint** | Básico, Windows | Edições simples |
| **GIMP** | Livre, avançado | Alternativa ao Photoshop |
| **Photoshop** | Profissional | Edição avançada |
| **Canva** | Online | Design gráfico simplificado |

#### 6.2 Edição de Vídeo

| Software | Tipo |
|----------|------|
| **Movie Maker** | Básico (descontinuado) |
| **Clipchamp** | Windows 11 |
| **DaVinci Resolve** | Profissional, gratuito |
| **Premiere** | Profissional, pago |

#### 6.3 Edição de Áudio

| Software | Tipo |
|----------|------|
| **Audacity** | Livre, multiplataforma |
| **Adobe Audition** | Profissional |

### 7. Formatos de Arquivo

#### 7.1 Documentos

| Extensão | Tipo |
|----------|------|
| **.docx** | Word (novo) |
| **.doc** | Word (antigo) |
| **.odt** | Writer/OpenDocument |
| **.pdf** | Documento portátil |
| **.txt** | Texto puro |
| **.rtf** | Texto formatado |

#### 7.2 Planilhas

| Extensão | Tipo |
|----------|------|
| **.xlsx** | Excel (novo) |
| **.xls** | Excel (antigo) |
| **.ods** | Calc/OpenDocument |
| **.csv** | Valores separados por vírgula |

#### 7.3 Apresentações

| Extensão | Tipo |
|----------|------|
| **.pptx** | PowerPoint (novo) |
| **.ppt** | PowerPoint (antigo) |
| **.odp** | Impress/OpenDocument |

#### 7.4 Imagens

| Extensão | Tipo | Característica |
|----------|------|----------------|
| **.jpg/.jpeg** | Foto | Compressão com perda |
| **.png** | Imagem | Suporta transparência |
| **.gif** | Animação | Suporta animação |
| **.bmp** | Bitmap | Sem compressão |
| **.svg** | Vetor | Escalável |

#### 7.5 Áudio e Vídeo

| Extensão | Tipo |
|----------|------|
| **.mp3** | Áudio comprimido |
| **.mp4** | Vídeo |
| **.avi** | Vídeo (antigo) |
| **.wav** | Áudio sem compressão |
        `,

        pontosChave: [
          'Microsoft Office = suíte proprietária (Word, Excel, PowerPoint)',
          'LibreOffice = suíte LIVRE e gratuita (Writer, Calc, Impress)',
          'Google Workspace = nuvem, colaboração em TEMPO REAL',
          'Fórmulas em planilhas SEMPRE começam com = (igual)',
          'Referência absoluta usa $ para TRAVAR célula ($A$1)',
          'SOMA, MÉDIA, SE, PROCV = funções mais cobradas em Excel',
          'PDF = formato UNIVERSAL, mantém formatação em qualquer dispositivo',
          'ODF = Open Document Format (padrão do LibreOffice)',
          '.docx/.xlsx/.pptx = formatos novos do Microsoft Office',
          'F5 = iniciar apresentação de slides no PowerPoint',
        ],

        armadilhas: [
          {
            titulo: 'Confundir LibreOffice com OpenOffice',
            descricao: 'LibreOffice é a continuação do projeto OpenOffice.org. São diferentes, embora com origem comum.',
            dica: 'LibreOffice = mais atualizado, mantido pela The Document Foundation.',
          },
          {
            titulo: 'Esquecer o = nas fórmulas',
            descricao: 'Toda fórmula em planilhas DEVE começar com = (igual). Sem ele, vira texto.',
            dica: '=SOMA(A1:A10) ✓    SOMA(A1:A10) ✗',
          },
          {
            titulo: 'Confundir referência absoluta com relativa',
            descricao: 'Absoluta ($A$1) não muda ao copiar. Relativa (A1) muda conforme posição.',
            dica: '$ = trava. $A$1 = coluna E linha travadas.',
          },
          {
            titulo: 'Achar que Google Docs é offline',
            descricao: 'Google Workspace funciona na NUVEM, requer internet. Há modo offline limitado.',
            dica: 'Google = nuvem. Microsoft/LibreOffice = instalados localmente.',
          },
        ],

        mnemonicos: [
          {
            termo: 'WEC-WCI',
            significado: 'Word-Excel-PowerPoint (MS) / Writer-Calc-Impress (Libre)',
            frase: 'Microsoft WEC vs LibreOffice WCI',
          },
          {
            termo: 'DOLAR-TRAVA',
            significado: '$ trava a referência de célula no Excel',
            frase: 'Dólar ($) trava a célula: $A$1',
          },
          {
            termo: 'ODF-LIVRE',
            significado: 'Open Document Format = formato do LibreOffice',
            frase: 'ODF = formato LIVRE (odt, ods, odp)',
          },
        ],

        flashcards: [
          {
            id: 'inf-fc-3-1',
            frente: 'Quais são os aplicativos equivalentes entre Microsoft Office e LibreOffice?',
            verso: '**Microsoft Office ↔ LibreOffice:**\n\n- **Word** ↔ Writer\n- **Excel** ↔ Calc\n- **PowerPoint** ↔ Impress\n- **Access** ↔ Base\n\nLibreOffice é **LIVRE e GRATUITO**.',
            tags: ['office', 'LibreOffice'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-3-2',
            frente: 'Como as fórmulas devem começar em planilhas eletrônicas?',
            verso: 'As fórmulas SEMPRE começam com **= (igual)**.\n\nExemplos:\n- =SOMA(A1:A10)\n- =MÉDIA(B1:B5)\n- =SE(A1>10;"Sim";"Não")\n\nSem o =, o Excel interpreta como TEXTO.',
            tags: ['Excel', 'fórmulas'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-3-3',
            frente: 'Qual a diferença entre referência ABSOLUTA e RELATIVA?',
            verso: '**RELATIVA (A1):**\nMuda conforme a posição ao copiar.\n\n**ABSOLUTA ($A$1):**\nNão muda, fica travada.\n\n**MISTA ($A1 ou A$1):**\nTrava só coluna ou só linha.\n\nDica: **$ = TRAVA**',
            tags: ['Excel', 'referência'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-3-4',
            frente: 'Para que serve a função PROCV no Excel?',
            verso: '**PROCV** = Procura Vertical\n\nSintaxe:\n=PROCV(valor_procurado; tabela; coluna_retorno; 0)\n\nProcura um valor na PRIMEIRA coluna e retorna um valor da coluna especificada.\n\nO 0 significa correspondência EXATA.',
            tags: ['Excel', 'PROCV'],
            dificuldade: 'dificil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-3-5',
            frente: 'Quais são as extensões do Microsoft Office e LibreOffice?',
            verso: '**Microsoft Office:**\n- .docx (Word)\n- .xlsx (Excel)\n- .pptx (PowerPoint)\n\n**LibreOffice/ODF:**\n- .odt (Writer)\n- .ods (Calc)\n- .odp (Impress)\n\nODF = Open Document Format',
            tags: ['extensões', 'formatos'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-3-6',
            frente: 'Qual a principal característica do Google Workspace?',
            verso: '**Google Workspace:**\n\n- Trabalho na **NUVEM**\n- **Colaboração em TEMPO REAL**\n- Salvamento AUTOMÁTICO\n- Acesso de qualquer dispositivo\n- Requer Internet\n\nAplicativos: Docs, Sheets, Slides, Drive',
            tags: ['Google', 'nuvem'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-3-7',
            frente: 'O que é PDF e por que é usado?',
            verso: '**PDF** = Portable Document Format\n\nCaracterísticas:\n- Formato **UNIVERSAL**\n- Mantém formatação em qualquer dispositivo\n- Ideal para documentos finais\n- Pode ter senha de proteção\n\nCriado pela Adobe, hoje é padrão ISO.',
            tags: ['PDF', 'formato'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-3-8',
            frente: 'Quais as funções mais usadas em planilhas?',
            verso: '**Funções básicas:**\n- =SOMA(A1:A10) → soma valores\n- =MÉDIA(A1:A10) → média\n- =MÁXIMO(A1:A10) → maior\n- =MÍNIMO(A1:A10) → menor\n\n**Funções lógicas:**\n- =SE(condição;"sim";"não")\n- =CONT.SE(intervalo;"critério")',
            tags: ['Excel', 'funções'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: 'inf-q-3-1',
            enunciado: 'Assinale a alternativa que apresenta uma suíte de escritório de código aberto e gratuita:',
            alternativas: [
              { letra: 'A', texto: 'Microsoft Office' },
              { letra: 'B', texto: 'Adobe Creative Suite' },
              { letra: 'C', texto: 'LibreOffice' },
              { letra: 'D', texto: 'Corel WordPerfect' },
              { letra: 'E', texto: 'iWork' },
            ],
            gabarito: 'C',
            justificativa: 'O LibreOffice é uma suíte de escritório de CÓDIGO ABERTO e GRATUITA, mantida pela The Document Foundation. As demais são proprietárias (pagas).',
            dificuldade: 'Fácil',
            competencia: 'Suítes de escritório',
            banca: 'IADES',
            tags: ['LibreOffice', 'software livre'],
          },
          {
            id: 'inf-q-3-2',
            enunciado: 'No Microsoft Excel, para que uma fórmula seja reconhecida como tal, ela deve começar com:',
            alternativas: [
              { letra: 'A', texto: '+ (mais)' },
              { letra: 'B', texto: '- (menos)' },
              { letra: 'C', texto: '= (igual)' },
              { letra: 'D', texto: '# (cerquilha)' },
              { letra: 'E', texto: '@ (arroba)' },
            ],
            gabarito: 'C',
            justificativa: 'No Excel (e em outras planilhas), toda fórmula DEVE começar com o sinal de = (igual). Sem ele, o conteúdo é interpretado como texto.',
            dificuldade: 'Fácil',
            competencia: 'Fórmulas em planilhas',
            banca: 'IADES',
            tags: ['Excel', 'fórmulas'],
          },
          {
            id: 'inf-q-3-3',
            enunciado: 'No Excel, a referência $A$1 é denominada:',
            alternativas: [
              { letra: 'A', texto: 'Referência relativa.' },
              { letra: 'B', texto: 'Referência absoluta.' },
              { letra: 'C', texto: 'Referência circular.' },
              { letra: 'D', texto: 'Referência externa.' },
              { letra: 'E', texto: 'Referência nominal.' },
            ],
            gabarito: 'B',
            justificativa: 'A referência $A$1 é ABSOLUTA, pois o $ (cifrão) "trava" a referência. Ao copiar a fórmula, a célula referenciada NÃO muda. Referência relativa (A1) muda conforme posição.',
            dificuldade: 'Fácil',
            competencia: 'Referências em planilhas',
            banca: 'IADES',
            tags: ['Excel', 'referência absoluta'],
          },
          {
            id: 'inf-q-3-4',
            enunciado: 'No contexto das suítes de escritório, o aplicativo equivalente ao Microsoft Word no LibreOffice é:',
            alternativas: [
              { letra: 'A', texto: 'Calc' },
              { letra: 'B', texto: 'Impress' },
              { letra: 'C', texto: 'Writer' },
              { letra: 'D', texto: 'Draw' },
              { letra: 'E', texto: 'Base' },
            ],
            gabarito: 'C',
            justificativa: 'No LibreOffice, o WRITER é o editor de textos, equivalente ao Microsoft Word. Calc = Excel, Impress = PowerPoint, Base = Access.',
            dificuldade: 'Fácil',
            competencia: 'Aplicativos equivalentes',
            banca: 'IADES',
            tags: ['LibreOffice', 'Writer'],
          },
          {
            id: 'inf-q-3-5',
            enunciado: 'A principal característica do Google Workspace (antigo G Suite) que o diferencia das suítes instaladas localmente é:',
            alternativas: [
              { letra: 'A', texto: 'Funcionar apenas offline.' },
              { letra: 'B', texto: 'Permitir trabalho colaborativo em tempo real na nuvem.' },
              { letra: 'C', texto: 'Ser incompatível com formatos do Microsoft Office.' },
              { letra: 'D', texto: 'Não possuir editor de planilhas.' },
              { letra: 'E', texto: 'Exigir instalação local no computador.' },
            ],
            gabarito: 'B',
            justificativa: 'O Google Workspace permite trabalho COLABORATIVO em TEMPO REAL na NUVEM. Múltiplos usuários podem editar o mesmo documento simultaneamente.',
            dificuldade: 'Fácil',
            competencia: 'Google Workspace',
            banca: 'IADES',
            tags: ['Google', 'colaboração'],
          },
          {
            id: 'inf-q-3-6',
            enunciado: 'A função do Excel que soma valores em um intervalo de células é:',
            alternativas: [
              { letra: 'A', texto: '=MÉDIA(A1:A10)' },
              { letra: 'B', texto: '=SOMA(A1:A10)' },
              { letra: 'C', texto: '=CONT.VALORES(A1:A10)' },
              { letra: 'D', texto: '=MÁXIMO(A1:A10)' },
              { letra: 'E', texto: '=MULT(A1:A10)' },
            ],
            gabarito: 'B',
            justificativa: 'A função SOMA calcula a soma dos valores no intervalo especificado. MÉDIA calcula a média, MÁXIMO retorna o maior valor, CONT.VALORES conta células não vazias.',
            dificuldade: 'Fácil',
            competencia: 'Função SOMA',
            banca: 'IADES',
            tags: ['Excel', 'SOMA'],
          },
          {
            id: 'inf-q-3-7',
            enunciado: 'O formato de arquivo que preserva a formatação do documento e pode ser visualizado em praticamente qualquer dispositivo é o:',
            alternativas: [
              { letra: 'A', texto: '.docx' },
              { letra: 'B', texto: '.txt' },
              { letra: 'C', texto: '.pdf' },
              { letra: 'D', texto: '.odt' },
              { letra: 'E', texto: '.rtf' },
            ],
            gabarito: 'C',
            justificativa: 'O PDF (Portable Document Format) é o formato UNIVERSAL que preserva a formatação em qualquer dispositivo, sendo ideal para documentos finais.',
            dificuldade: 'Fácil',
            competencia: 'Formato PDF',
            banca: 'IADES',
            tags: ['PDF', 'formato'],
          },
          {
            id: 'inf-q-3-8',
            enunciado: 'No PowerPoint, para iniciar uma apresentação de slides a partir do primeiro slide, utiliza-se a tecla:',
            alternativas: [
              { letra: 'A', texto: 'F1' },
              { letra: 'B', texto: 'F3' },
              { letra: 'C', texto: 'F5' },
              { letra: 'D', texto: 'F7' },
              { letra: 'E', texto: 'F12' },
            ],
            gabarito: 'C',
            justificativa: 'A tecla F5 inicia a apresentação de slides do início no PowerPoint. Shift+F5 inicia a partir do slide atual.',
            dificuldade: 'Fácil',
            competencia: 'Atalhos PowerPoint',
            banca: 'IADES',
            tags: ['PowerPoint', 'atalhos'],
          },
          {
            id: 'inf-q-3-9',
            enunciado: 'A função PROCV no Excel é utilizada para:',
            alternativas: [
              { letra: 'A', texto: 'Somar valores de acordo com uma condição.' },
              { letra: 'B', texto: 'Procurar um valor na primeira coluna de uma tabela e retornar um valor correspondente.' },
              { letra: 'C', texto: 'Contar células que contêm números.' },
              { letra: 'D', texto: 'Calcular a média de valores numéricos.' },
              { letra: 'E', texto: 'Concatenar textos de várias células.' },
            ],
            gabarito: 'B',
            justificativa: 'A função PROCV (Procura Vertical) busca um valor na PRIMEIRA coluna de uma tabela e retorna um valor da coluna especificada na mesma linha.',
            dificuldade: 'Média',
            competencia: 'Função PROCV',
            banca: 'IADES',
            tags: ['Excel', 'PROCV'],
          },
          {
            id: 'inf-q-3-10',
            enunciado: 'As extensões .odt, .ods e .odp são formatos nativos de qual suíte de escritório?',
            alternativas: [
              { letra: 'A', texto: 'Microsoft Office' },
              { letra: 'B', texto: 'LibreOffice' },
              { letra: 'C', texto: 'Google Docs' },
              { letra: 'D', texto: 'Apple iWork' },
              { letra: 'E', texto: 'Corel WordPerfect' },
            ],
            gabarito: 'B',
            justificativa: 'As extensões .odt (texto), .ods (planilha) e .odp (apresentação) são do formato ODF (Open Document Format), nativo do LibreOffice. Microsoft usa .docx, .xlsx, .pptx.',
            dificuldade: 'Fácil',
            competencia: 'Formatos de arquivo',
            banca: 'IADES',
            tags: ['LibreOffice', 'ODF'],
          },
        ],
      },
    },
  ],
};
