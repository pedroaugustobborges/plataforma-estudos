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
    {
      id: 'inf-topico-4',
      numero: 4,
      titulo: 'Pacote Microsoft Office, Sistemas Operacionais, Segurança da Informação e Computação em Nuvem',
      conteudo: {
        resumo: `
## Resumo Rápido

### Microsoft Office - Aplicativos Principais

| Aplicativo | Função | Extensão |
|------------|--------|----------|
| **Word** | Editor de texto | .docx |
| **Excel** | Planilha eletrônica | .xlsx |
| **PowerPoint** | Apresentação de slides | .pptx |
| **Outlook** | E-mail e calendário | .pst |
| **Access** | Banco de dados | .accdb |

### Sistemas Operacionais

| Windows | Linux |
|---------|-------|
| Proprietário (Microsoft) | Código aberto (GPL) |
| Interface gráfica nativa | Várias distribuições |
| .exe (executáveis) | Permissões (chmod) |
| Registro do sistema | Terminal/Shell |

### Segurança da Informação

| Ameaça | Descrição |
|--------|-----------|
| **Vírus** | Precisa de hospedeiro, propaga por execução |
| **Worm** | Autorreplicante, propaga por rede |
| **Trojan** | Disfarçado de programa legítimo |
| **Phishing** | Engenharia social por e-mail/site falso |
| **Ransomware** | Criptografa dados e exige resgate |

### Ferramentas de Proteção

| Ferramenta | Função |
|------------|--------|
| **Antivírus** | Detecta e remove malware |
| **Firewall** | Controla tráfego de rede |
| **Anti-spyware** | Remove programas espiões |
| **VPN** | Conexão criptografada |

### Computação em Nuvem (Cloud)

| Modelo | Descrição | Exemplo |
|--------|-----------|---------|
| **IaaS** | Infraestrutura | AWS EC2 |
| **PaaS** | Plataforma | Google App Engine |
| **SaaS** | Software | Google Docs, Office 365 |
        `,

        explicacao: `
## Explicação Didática

### 1. Pacote Microsoft Office

#### 1.1 Microsoft Word

**Função:** Processador de textos

**Recursos principais:**
- Formatação de texto (fonte, parágrafo, estilos)
- Inserção de imagens, tabelas, gráficos
- Cabeçalho e rodapé
- Mala direta
- Controle de alterações

**Atalhos importantes:**
| Atalho | Função |
|--------|--------|
| Ctrl+N | Novo documento |
| Ctrl+S | Salvar |
| Ctrl+B | Negrito |
| Ctrl+I | Itálico |
| Ctrl+U | Sublinhado |
| Ctrl+Z | Desfazer |
| Ctrl+C/V/X | Copiar/Colar/Recortar |
| Ctrl+P | Imprimir |

**Extensões:**
- **.docx**: Documento padrão (Office 2007+)
- **.doc**: Formato antigo (compatibilidade)
- **.pdf**: Exportação para leitura universal

#### 1.2 Microsoft Excel

**Função:** Planilha eletrônica para cálculos e análises

**Conceitos básicos:**
- **Célula**: Interseção de linha e coluna (ex: A1, B5)
- **Intervalo**: Conjunto de células (ex: A1:C10)
- **Fórmula**: Começa com = (ex: =A1+B1)
- **Função**: Fórmula predefinida (ex: =SOMA, =MÉDIA)

**Funções mais cobradas:**
| Função | Descrição |
|--------|-----------|
| =SOMA(intervalo) | Soma valores |
| =MÉDIA(intervalo) | Calcula média |
| =CONT.VALORES(intervalo) | Conta células não vazias |
| =SE(condição;V;F) | Teste lógico |
| =PROCV(valor;tabela;col;tipo) | Procura vertical |
| =CONCATENAR(t1;t2) | Junta textos |

**Referências:**
| Tipo | Exemplo | Comportamento |
|------|---------|---------------|
| **Relativa** | A1 | Muda ao copiar |
| **Absoluta** | $A$1 | Fixa ao copiar |
| **Mista** | $A1 ou A$1 | Fixa parcialmente |

#### 1.3 Microsoft PowerPoint

**Função:** Criar apresentações de slides

**Elementos:**
- Slides
- Layouts
- Temas
- Transições
- Animações

**Atalhos importantes:**
| Atalho | Função |
|--------|--------|
| F5 | Iniciar apresentação (do início) |
| Shift+F5 | Iniciar do slide atual |
| Esc | Sair da apresentação |
| N/Enter | Próximo slide |
| P | Slide anterior |

### 2. Sistemas Operacionais

#### 2.1 Windows

**Conceito:** Sistema operacional proprietário da Microsoft

**Características:**
- Interface gráfica (GUI)
- Multitarefa e multiusuário
- Plug and Play
- Sistema de arquivos: NTFS, FAT32

**Componentes importantes:**
| Componente | Função |
|------------|--------|
| **Área de Trabalho** | Tela principal com ícones |
| **Barra de Tarefas** | Acesso a programas e janelas |
| **Menu Iniciar** | Acesso a aplicativos e configurações |
| **Explorador de Arquivos** | Gerenciar arquivos e pastas |
| **Painel de Controle** | Configurações do sistema |

**Atalhos do Windows:**
| Atalho | Função |
|--------|--------|
| Win+E | Explorador de Arquivos |
| Win+D | Mostrar área de trabalho |
| Win+L | Bloquear computador |
| Alt+Tab | Alternar janelas |
| Alt+F4 | Fechar programa |
| Ctrl+Alt+Del | Opções de segurança |
| Print Screen | Captura de tela |

**Gerenciador de Tarefas (Ctrl+Shift+Esc):**
- Processos em execução
- Desempenho do sistema
- Encerrar programas travados

#### 2.2 Linux

**Conceito:** Sistema operacional de código aberto baseado no Unix

**Características:**
- Gratuito e de código aberto (GPL)
- Várias distribuições (distros)
- Linha de comando poderosa (Terminal/Shell)
- Segurança robusta (permissões)

**Distribuições populares:**
| Distro | Característica |
|--------|----------------|
| **Ubuntu** | Fácil de usar, popular |
| **Debian** | Base para muitas distros |
| **Fedora** | Inovações Red Hat |
| **CentOS** | Servidores |
| **Linux Mint** | Semelhante ao Windows |

**Estrutura de diretórios:**
| Diretório | Conteúdo |
|-----------|----------|
| / | Raiz do sistema |
| /home | Diretórios dos usuários |
| /etc | Arquivos de configuração |
| /var | Arquivos variáveis (logs) |
| /bin | Comandos essenciais |
| /usr | Programas de usuário |

**Comandos básicos:**
| Comando | Função |
|---------|--------|
| ls | Listar arquivos |
| cd | Mudar diretório |
| pwd | Diretório atual |
| mkdir | Criar pasta |
| rm | Remover arquivo |
| cp | Copiar |
| mv | Mover/renomear |
| chmod | Alterar permissões |
| sudo | Executar como root |

**Permissões (rwx):**
- **r** (read) = leitura (4)
- **w** (write) = escrita (2)
- **x** (execute) = execução (1)
- Exemplo: chmod 755 arquivo

### 3. Segurança da Informação

#### 3.1 Conceitos Fundamentais

**Pilares da Segurança (CID):**
| Pilar | Significado |
|-------|-------------|
| **Confidencialidade** | Acesso apenas a autorizados |
| **Integridade** | Dados não alterados |
| **Disponibilidade** | Sistema sempre acessível |

#### 3.2 Tipos de Malware

**Vírus:**
- Precisa de **hospedeiro** (arquivo)
- Propaga-se quando o arquivo é executado
- Pode danificar dados e sistema

**Worm (Verme):**
- **Autorreplicante** (não precisa de hospedeiro)
- Propaga-se pela **rede** automaticamente
- Consome recursos (rede, memória)

**Trojan (Cavalo de Troia):**
- Disfarçado de programa **legítimo**
- **NÃO se replica** sozinho
- Abre portas para outros malwares

**Spyware:**
- **Espiona** atividades do usuário
- Coleta dados (senhas, cartões)
- Tipos: Keylogger, Screenlogger

**Ransomware:**
- **Criptografa** dados da vítima
- Exige **resgate** (ransom) para liberar
- Exemplo: WannaCry (2017)

**Rootkit:**
- Esconde presença de outros malwares
- Difícil detecção
- Atua em nível de sistema

#### 3.3 Phishing

**Conceito:** Técnica de **engenharia social** para obter dados sensíveis

**Características:**
- E-mails falsos imitando empresas
- Sites clonados
- Solicita dados pessoais/bancários
- Usa urgência ("sua conta será bloqueada")

**Como identificar:**
- Verificar remetente do e-mail
- Passar mouse sobre links (sem clicar)
- Erros de português
- Solicitação de dados sensíveis

#### 3.4 Ferramentas de Proteção

**Antivírus:**
- Detecta e remove malware
- Atualização constante (assinaturas)
- Varredura em tempo real e sob demanda

**Firewall:**
- **Filtra** tráfego de rede
- Bloqueia conexões suspeitas
- Regras de entrada/saída
- Pode ser software ou hardware

**Anti-spyware:**
- Especializado em spyware
- Protege privacidade
- Complementa o antivírus

**VPN (Virtual Private Network):**
- Conexão **criptografada**
- "Túnel" seguro na internet
- Oculta IP real
- Acesso remoto seguro a redes corporativas

**Criptografia:**
- Transforma dados em código ilegível
- **Simétrica**: mesma chave para cifrar/decifrar
- **Assimétrica**: chave pública + chave privada

**Backup:**
- Cópia de segurança dos dados
- Tipos: completo, incremental, diferencial
- Regra 3-2-1: 3 cópias, 2 mídias, 1 offsite

### 4. Computação em Nuvem (Cloud Computing)

#### 4.1 Conceito

**Cloud Computing:** Fornecimento de recursos de TI pela internet, sob demanda, com pagamento pelo uso.

#### 4.2 Características

| Característica | Descrição |
|----------------|-----------|
| **Autoatendimento** | Usuário provisiona recursos |
| **Amplo acesso** | Acesso de qualquer dispositivo |
| **Pool de recursos** | Recursos compartilhados |
| **Elasticidade** | Escala conforme demanda |
| **Serviço medido** | Paga pelo que usa |

#### 4.3 Modelos de Serviço

**IaaS (Infrastructure as a Service):**
- Infraestrutura virtualizada
- Servidores, armazenamento, rede
- Exemplos: AWS EC2, Azure VMs, Google Compute

**PaaS (Platform as a Service):**
- Plataforma para desenvolvimento
- Sem gerenciar infraestrutura
- Exemplos: Google App Engine, Heroku

**SaaS (Software as a Service):**
- Software pronto para uso
- Acesso via navegador
- Exemplos: Google Docs, Office 365, Salesforce

| Modelo | Você gerencia | Provedor gerencia |
|--------|---------------|-------------------|
| **IaaS** | Apps, dados, SO | Virtualização, hardware |
| **PaaS** | Apps, dados | SO, virtualização, hardware |
| **SaaS** | Apenas uso | Tudo |

#### 4.4 Modelos de Implantação

| Modelo | Característica |
|--------|----------------|
| **Nuvem Pública** | Compartilhada, qualquer um pode usar |
| **Nuvem Privada** | Exclusiva de uma organização |
| **Nuvem Híbrida** | Combinação de pública + privada |
| **Nuvem Comunitária** | Compartilhada por comunidade específica |

#### 4.5 Vantagens da Nuvem

- **Redução de custos** (sem investimento inicial)
- **Escalabilidade** (aumenta/diminui recursos)
- **Mobilidade** (acesso de qualquer lugar)
- **Backup automático**
- **Atualizações automáticas**

#### 4.6 Desvantagens/Riscos

- **Dependência de internet**
- **Segurança** (dados em terceiros)
- **Privacidade**
- **Indisponibilidade** do serviço
        `,

        pontosChave: [
          'Office: Word (.docx), Excel (.xlsx), PowerPoint (.pptx), Outlook, Access',
          'Excel: célula (A1), intervalo (A1:C10), fórmulas (=SOMA, =SE, =PROCV)',
          'Windows: proprietário, GUI, NTFS; Linux: código aberto, várias distros, permissões (chmod)',
          'Pilares da segurança: Confidencialidade, Integridade, Disponibilidade (CID)',
          'Vírus: precisa hospedeiro; Worm: autorreplicante pela rede; Trojan: disfarçado',
          'Phishing: engenharia social, e-mails/sites falsos para roubar dados',
          'Ransomware: criptografa dados e pede resgate',
          'Firewall: filtra tráfego de rede; Antivírus: detecta malware; VPN: conexão criptografada',
          'Cloud: IaaS (infraestrutura), PaaS (plataforma), SaaS (software)',
          'Nuvem pública (compartilhada), privada (exclusiva), híbrida (combinação)',
        ],

        armadilhas: [
          {
            titulo: 'Confundir Vírus com Worm',
            descricao: 'Vírus PRECISA de hospedeiro e execução. Worm se propaga SOZINHO pela rede.',
            dica: 'Worm = verme que se arrasta sozinho. Vírus = precisa de "carona".',
          },
          {
            titulo: 'Confundir Trojan com Vírus',
            descricao: 'Trojan NÃO se replica. É um programa disfarçado que engana o usuário.',
            dica: 'Trojan = presente de grego (parece bom, mas é malicioso).',
          },
          {
            titulo: 'Achar que Firewall substitui Antivírus',
            descricao: 'Firewall filtra REDE. Antivírus detecta MALWARE. São complementares.',
            dica: 'Firewall = porteiro. Antivírus = detector de doenças.',
          },
          {
            titulo: 'Confundir IaaS, PaaS e SaaS',
            descricao: 'IaaS = infraestrutura. PaaS = plataforma. SaaS = software pronto.',
            dica: 'SaaS usa pelo navegador (Gmail). IaaS gerencia servidores virtuais.',
          },
        ],

        mnemonicos: [
          {
            termo: 'CID',
            significado: 'Confidencialidade, Integridade, Disponibilidade',
            frase: 'Os 3 pilares da segurança da informação: CID',
          },
          {
            termo: 'VWT',
            significado: 'Vírus (hospedeiro), Worm (rede), Trojan (disfarçado)',
            frase: 'VWT: Vírus hospeda, Worm verme, Trojan trai',
          },
          {
            termo: 'IPS',
            significado: 'IaaS, PaaS, SaaS (do mais trabalho para menos)',
            frase: 'Infraestrutura > Plataforma > Software (você gerencia menos)',
          },
        ],

        flashcards: [
          {
            id: 'inf-fc-4-1',
            frente: 'Qual a diferença entre VÍRUS, WORM e TROJAN?',
            verso: '**VÍRUS:**\n- Precisa de hospedeiro (arquivo)\n- Propaga ao executar arquivo\n\n**WORM:**\n- NÃO precisa de hospedeiro\n- Autorreplicante pela REDE\n\n**TROJAN:**\n- NÃO se replica\n- Disfarçado de programa legítimo',
            tags: ['malware', 'vírus', 'worm', 'trojan'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-4-2',
            frente: 'O que é PHISHING?',
            verso: '**PHISHING:**\n- Técnica de ENGENHARIA SOCIAL\n- E-mails/sites FALSOS imitando legítimos\n- Objetivo: roubar dados sensíveis\n\n**Sinais:**\n- Urgência ("conta será bloqueada")\n- Links suspeitos\n- Erros de português\n- Pedido de dados pessoais',
            tags: ['phishing', 'engenharia social'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-4-3',
            frente: 'Qual a função do FIREWALL?',
            verso: '**FIREWALL:**\n- FILTRA o tráfego de REDE\n- Bloqueia conexões suspeitas\n- Define regras de entrada/saída\n- Pode ser software ou hardware\n\n**NÃO substitui antivírus!**\n\nFirewall = "parede de fogo" (porteiro da rede)',
            tags: ['firewall', 'segurança'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-4-4',
            frente: 'O que é VPN e para que serve?',
            verso: '**VPN = Virtual Private Network**\n\n- Conexão CRIPTOGRAFADA\n- "Túnel" seguro na internet\n- Oculta IP real\n- Acesso remoto seguro\n\n**Usos:**\n- Home office seguro\n- Privacidade em redes públicas\n- Acessar conteúdo bloqueado',
            tags: ['VPN', 'segurança'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-4-5',
            frente: 'Quais são os modelos de serviço em CLOUD (IaaS, PaaS, SaaS)?',
            verso: '**IaaS (Infrastructure):**\n- Servidores, storage, rede\n- Ex: AWS EC2\n\n**PaaS (Platform):**\n- Plataforma de desenvolvimento\n- Ex: Heroku, App Engine\n\n**SaaS (Software):**\n- Software pronto para uso\n- Ex: Gmail, Office 365\n\nDe IaaS para SaaS: menos gerenciamento',
            tags: ['cloud', 'IaaS', 'PaaS', 'SaaS'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-4-6',
            frente: 'O que é RANSOMWARE?',
            verso: '**RANSOMWARE:**\n- CRIPTOGRAFA dados da vítima\n- Exige RESGATE (ransom) para liberar\n- Pagamento geralmente em Bitcoin\n\n**Exemplo:** WannaCry (2017)\n\n**Proteção:**\n- Backup atualizado\n- Não abrir anexos suspeitos\n- Sistema atualizado',
            tags: ['ransomware', 'malware'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-4-7',
            frente: 'Quais os pilares da Segurança da Informação (CID)?',
            verso: '**CID:**\n\n**C**onfidencialidade:\n- Acesso apenas a autorizados\n\n**I**ntegridade:\n- Dados não alterados\n\n**D**isponibilidade:\n- Sistema sempre acessível\n\n(Alguns incluem: Autenticidade e Não-repúdio)',
            tags: ['segurança', 'CID'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-4-8',
            frente: 'Quais as principais diferenças entre Windows e Linux?',
            verso: '**WINDOWS:**\n- Proprietário (Microsoft)\n- Pago (licença)\n- Interface gráfica nativa\n- .exe (executáveis)\n\n**LINUX:**\n- Código aberto (GPL)\n- Gratuito\n- Várias distribuições\n- Terminal/Shell poderoso\n- Permissões (chmod)',
            tags: ['Windows', 'Linux', 'SO'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-4-9',
            frente: 'Quais as funções mais importantes do Excel?',
            verso: '**Funções essenciais:**\n\n- =SOMA(intervalo)\n- =MÉDIA(intervalo)\n- =SE(teste;V;F)\n- =PROCV(valor;tabela;col;tipo)\n- =CONT.VALORES(intervalo)\n- =CONCATENAR(t1;t2)\n\n**Referências:**\n- A1 (relativa)\n- $A$1 (absoluta)',
            tags: ['Excel', 'funções'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-4-10',
            frente: 'O que são nuvem pública, privada e híbrida?',
            verso: '**Nuvem PÚBLICA:**\n- Compartilhada\n- Qualquer um pode usar\n- Ex: AWS, Azure\n\n**Nuvem PRIVADA:**\n- Exclusiva de uma organização\n- Mais controle e segurança\n\n**Nuvem HÍBRIDA:**\n- Combinação de pública + privada\n- Flexibilidade',
            tags: ['cloud', 'modelos'],
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
            id: 'inf-q-4-1',
            enunciado: 'O tipo de malware que se propaga automaticamente pela rede, sem necessidade de um arquivo hospedeiro, é denominado:',
            alternativas: [
              { letra: 'A', texto: 'Vírus' },
              { letra: 'B', texto: 'Trojan' },
              { letra: 'C', texto: 'Worm' },
              { letra: 'D', texto: 'Spyware' },
              { letra: 'E', texto: 'Adware' },
            ],
            gabarito: 'C',
            justificativa: 'O WORM é autorreplicante e se propaga automaticamente pela rede, sem precisar de arquivo hospedeiro. O vírus precisa de hospedeiro; o trojan não se replica.',
            dificuldade: 'Fácil',
            competencia: 'Tipos de malware',
            banca: 'IADES',
            tags: ['worm', 'malware'],
          },
          {
            id: 'inf-q-4-2',
            enunciado: 'A técnica de engenharia social que utiliza e-mails ou sites falsos para induzir o usuário a fornecer dados pessoais é conhecida como:',
            alternativas: [
              { letra: 'A', texto: 'Ransomware' },
              { letra: 'B', texto: 'Phishing' },
              { letra: 'C', texto: 'Pharming' },
              { letra: 'D', texto: 'Rootkit' },
              { letra: 'E', texto: 'Backdoor' },
            ],
            gabarito: 'B',
            justificativa: 'PHISHING é uma técnica de engenharia social que usa e-mails ou sites falsos (que imitam legítimos) para enganar usuários e obter dados sensíveis como senhas e números de cartão.',
            dificuldade: 'Fácil',
            competencia: 'Phishing',
            banca: 'IADES',
            tags: ['phishing', 'engenharia social'],
          },
          {
            id: 'inf-q-4-3',
            enunciado: 'A ferramenta de segurança responsável por filtrar o tráfego de rede, bloqueando conexões suspeitas, é o:',
            alternativas: [
              { letra: 'A', texto: 'Antivírus' },
              { letra: 'B', texto: 'Anti-spyware' },
              { letra: 'C', texto: 'Firewall' },
              { letra: 'D', texto: 'Backup' },
              { letra: 'E', texto: 'Desfragmentador' },
            ],
            gabarito: 'C',
            justificativa: 'O FIREWALL é responsável por filtrar o tráfego de rede, aplicando regras para permitir ou bloquear conexões. O antivírus detecta malware; anti-spyware remove spyware.',
            dificuldade: 'Fácil',
            competencia: 'Firewall',
            banca: 'IADES',
            tags: ['firewall', 'segurança'],
          },
          {
            id: 'inf-q-4-4',
            enunciado: 'O modelo de computação em nuvem em que o usuário acessa software pronto pelo navegador, sem instalar nada, é o:',
            alternativas: [
              { letra: 'A', texto: 'IaaS' },
              { letra: 'B', texto: 'PaaS' },
              { letra: 'C', texto: 'SaaS' },
              { letra: 'D', texto: 'DaaS' },
              { letra: 'E', texto: 'BaaS' },
            ],
            gabarito: 'C',
            justificativa: 'SaaS (Software as a Service) é o modelo onde o usuário acessa software pronto pelo navegador, sem instalação. Exemplos: Google Docs, Office 365, Gmail.',
            dificuldade: 'Fácil',
            competencia: 'Cloud Computing',
            banca: 'IADES',
            tags: ['SaaS', 'cloud'],
          },
          {
            id: 'inf-q-4-5',
            enunciado: 'O tipo de malware que criptografa os dados do usuário e exige pagamento para liberá-los é o:',
            alternativas: [
              { letra: 'A', texto: 'Adware' },
              { letra: 'B', texto: 'Keylogger' },
              { letra: 'C', texto: 'Ransomware' },
              { letra: 'D', texto: 'Botnet' },
              { letra: 'E', texto: 'Trojan' },
            ],
            gabarito: 'C',
            justificativa: 'RANSOMWARE criptografa os dados da vítima e exige resgate (ransom) para fornecer a chave de descriptografia. Exemplo famoso: WannaCry (2017).',
            dificuldade: 'Fácil',
            competencia: 'Ransomware',
            banca: 'IADES',
            tags: ['ransomware', 'malware'],
          },
          {
            id: 'inf-q-4-6',
            enunciado: 'A VPN (Virtual Private Network) é uma ferramenta que:',
            alternativas: [
              { letra: 'A', texto: 'Remove vírus do computador.' },
              { letra: 'B', texto: 'Cria uma conexão criptografada e segura pela internet.' },
              { letra: 'C', texto: 'Desfragmenta o disco rígido.' },
              { letra: 'D', texto: 'Filtra e-mails indesejados.' },
              { letra: 'E', texto: 'Acelera a velocidade de download.' },
            ],
            gabarito: 'B',
            justificativa: 'A VPN cria um "túnel" criptografado pela internet, permitindo conexões seguras mesmo em redes públicas. Oculta o IP real e protege a privacidade.',
            dificuldade: 'Fácil',
            competencia: 'VPN',
            banca: 'IADES',
            tags: ['VPN', 'segurança'],
          },
          {
            id: 'inf-q-4-7',
            enunciado: 'No Microsoft Excel, a referência $A$1 é conhecida como referência:',
            alternativas: [
              { letra: 'A', texto: 'Relativa' },
              { letra: 'B', texto: 'Absoluta' },
              { letra: 'C', texto: 'Mista' },
              { letra: 'D', texto: 'Circular' },
              { letra: 'E', texto: 'Externa' },
            ],
            gabarito: 'B',
            justificativa: 'A referência $A$1 é ABSOLUTA porque o $ fixa tanto a coluna quanto a linha. Ao copiar a fórmula, essa referência não muda. Referência relativa (A1) muda ao copiar.',
            dificuldade: 'Fácil',
            competencia: 'Excel - Referências',
            banca: 'IADES',
            tags: ['Excel', 'referências'],
          },
          {
            id: 'inf-q-4-8',
            enunciado: 'O sistema operacional Linux, diferentemente do Windows, caracteriza-se por ser:',
            alternativas: [
              { letra: 'A', texto: 'Proprietário e pago.' },
              { letra: 'B', texto: 'De código aberto e gratuito.' },
              { letra: 'C', texto: 'Exclusivo para servidores.' },
              { letra: 'D', texto: 'Incompatível com redes.' },
              { letra: 'E', texto: 'Monousuário.' },
            ],
            gabarito: 'B',
            justificativa: 'O Linux é um sistema operacional de CÓDIGO ABERTO (open source) e GRATUITO, licenciado sob GPL. Possui várias distribuições e pode ser usado em desktops, servidores e dispositivos móveis.',
            dificuldade: 'Fácil',
            competencia: 'Linux',
            banca: 'IADES',
            tags: ['Linux', 'SO'],
          },
          {
            id: 'inf-q-4-9',
            enunciado: 'Os pilares da segurança da informação são:',
            alternativas: [
              { letra: 'A', texto: 'Velocidade, confiabilidade e economia.' },
              { letra: 'B', texto: 'Confidencialidade, integridade e disponibilidade.' },
              { letra: 'C', texto: 'Hardware, software e peopleware.' },
              { letra: 'D', texto: 'Backup, restore e recovery.' },
              { letra: 'E', texto: 'Firewall, antivírus e VPN.' },
            ],
            gabarito: 'B',
            justificativa: 'Os três pilares (ou tríade) da segurança da informação são: CONFIDENCIALIDADE (acesso restrito), INTEGRIDADE (dados íntegros) e DISPONIBILIDADE (acesso quando necessário). Sigla: CID.',
            dificuldade: 'Fácil',
            competencia: 'Pilares da Segurança',
            banca: 'IADES',
            tags: ['segurança', 'CID'],
          },
          {
            id: 'inf-q-4-10',
            enunciado: 'No modelo de computação em nuvem IaaS (Infrastructure as a Service), o provedor oferece:',
            alternativas: [
              { letra: 'A', texto: 'Apenas software pronto para uso.' },
              { letra: 'B', texto: 'Infraestrutura virtualizada como servidores e armazenamento.' },
              { letra: 'C', texto: 'Apenas banco de dados.' },
              { letra: 'D', texto: 'Plataforma completa de desenvolvimento.' },
              { letra: 'E', texto: 'Suporte técnico presencial.' },
            ],
            gabarito: 'B',
            justificativa: 'No IaaS (Infrastructure as a Service), o provedor oferece INFRAESTRUTURA virtualizada: servidores, armazenamento, rede. O cliente gerencia o sistema operacional e aplicações. Exemplos: AWS EC2, Azure VMs.',
            dificuldade: 'Média',
            competencia: 'IaaS',
            banca: 'IADES',
            tags: ['IaaS', 'cloud'],
          },
        ],
      },
    },
    {
      id: 'inf-topico-5',
      numero: 5,
      titulo: 'Sistema Eletrônico de Informações (SEI)',
      conteudo: {
        resumo: `
## Resumo Rápido - SEI

### O que é o SEI?
Sistema desenvolvido pelo TRF4 para gestão eletrônica de documentos e processos administrativos.

**Endereço em Goiás:** https://sei.goias.gov.br/

### Principais Características

| Característica | Descrição |
|----------------|-----------|
| **Gratuito** | Software livre, sem custo de licença |
| **100% Web** | Acessa pelo navegador |
| **Paperless** | Elimina uso de papel |
| **Processos Digitais** | Tramitação eletrônica |
| **Assinatura Digital** | Certificado ou login/senha |

### Tipos de Processos

| Tipo | Característica |
|------|----------------|
| **Público** | Qualquer servidor pode ver |
| **Restrito** | Apenas unidades autorizadas |
| **Sigiloso** | Acesso controlado |

### Funcionalidades Principais

- **Criar Processo**: iniciar novo processo administrativo
- **Incluir Documento**: adicionar documentos ao processo
- **Tramitar**: enviar para outra unidade
- **Assinar**: assinatura eletrônica
- **Concluir**: finalizar na unidade
- **Anexar Processo**: juntar processos relacionados

### Níveis de Acesso

| Nível | Descrição |
|-------|-----------|
| **Básico** | Visualizar e assinar |
| **Administrador** | Gerenciar unidade |
| **Gestor** | Configurar sistema |

### Documentos no SEI

**Internos (nato-digitais):**
- Criados diretamente no SEI
- Editores: texto ou HTML

**Externos:**
- Digitalizados ou importados
- Formatos: PDF, imagem, etc.

### Assinatura Eletrônica

**Tipos:**
- Com certificado digital (ICP-Brasil)
- Com login + senha do SEI

**Validade:** Ambas têm valor legal.
        `,

        explicacao: `
## Explicação Didática - SEI

### 1. Histórico e Conceito

#### 1.1 Origem
O SEI foi desenvolvido pelo **Tribunal Regional Federal da 4ª Região (TRF4)** e disponibilizado gratuitamente para órgãos públicos através de acordo de cooperação.

#### 1.2 Implantação em Goiás
O Governo de Goiás adotou o SEI como sistema oficial de gestão de documentos e processos, acessível em: **https://sei.goias.gov.br/**

### 2. Características do SEI

#### 2.1 Software Livre
- Código aberto
- Sem custo de licença
- Pode ser adaptado pelo órgão

#### 2.2 100% Web
- Acesso via navegador (Chrome, Firefox, Edge)
- Não precisa instalar programa
- Acesso de qualquer lugar com internet

#### 2.3 Paperless (Sem papel)
- Documentos nato-digitais
- Digitalização de documentos físicos
- Tramitação totalmente eletrônica

#### 2.4 Portabilidade
- Funciona em diversos dispositivos
- Desktop, notebook, tablet, celular
- Interface responsiva

### 3. Estrutura do SEI

#### 3.1 Unidades
São os setores/departamentos cadastrados no sistema.

**Hierarquia:**
- Órgão → Unidades → Usuários

#### 3.2 Processos
Conjunto de documentos relacionados a um assunto.

**Componentes:**
- Número único (NUP)
- Tipo de processo
- Interessado
- Descrição
- Documentos

#### 3.3 Documentos

**INTERNOS (nato-digitais):**
- Criados dentro do SEI
- Editor de texto próprio
- Modelos padronizados

**EXTERNOS:**
- Documentos digitalizados
- Arquivos importados (PDF, imagem)
- Documentos de outros sistemas

### 4. Funcionalidades Principais

#### 4.1 Criar Processo
1. Clicar em "Iniciar Processo"
2. Escolher tipo de processo
3. Preencher dados (interessado, descrição)
4. Definir nível de acesso
5. Adicionar documentos

#### 4.2 Incluir Documento
- Documento interno: criar no editor
- Documento externo: upload de arquivo
- Referência a documento de outro processo

#### 4.3 Tramitar Processo
Enviar para outra unidade.

| Ação | Significado |
|------|-------------|
| **Enviar** | Processo vai para outra unidade |
| **Manter aberto** | Continua na unidade atual também |
| **Concluir** | Retira da unidade atual |

#### 4.4 Assinatura Eletrônica

**Tipos:**
1. **Certificado Digital (ICP-Brasil)**
   - Token ou cartão
   - Maior nível de segurança

2. **Login + Senha do SEI**
   - Usuário e senha cadastrados
   - Também tem validade jurídica

#### 4.5 Acompanhamento
- Histórico do processo
- Unidades por onde passou
- Quem assinou cada documento
- Data e hora de cada ação

### 5. Níveis de Acesso a Processos

#### 5.1 Público
- Qualquer servidor do órgão pode visualizar
- Padrão para maioria dos processos

#### 5.2 Restrito
- Apenas unidades envolvidas
- Protege informações sensíveis
- Hipóteses legais de restrição

#### 5.3 Sigiloso
- Acesso apenas por credenciados
- Processos com informações classificadas
- Controle rigoroso

### 6. Recursos Avançados

#### 6.1 Blocos
Agrupamento de processos para ação conjunta.

**Tipos:**
- Bloco de assinatura: assinar vários documentos
- Bloco de reunião: compartilhar com outras unidades
- Bloco interno: organização da unidade

#### 6.2 Pesquisa
Localizar processos e documentos por:
- Número do processo
- Tipo de documento
- Assunto
- Interessado
- Período

#### 6.3 Controle de Prazos
- Definir prazos para processos
- Alertas de vencimento
- Relatórios de atraso

### 7. Boas Práticas no SEI

#### 7.1 Nomenclatura
- Usar nomes descritivos
- Seguir padrões do órgão
- Evitar caracteres especiais

#### 7.2 Organização
- Tipo de processo adequado
- Documentos na ordem correta
- Numeração sequencial

#### 7.3 Segurança
- Não compartilhar senha
- Logout ao sair
- Verificar nível de acesso
        `,

        pontosChave: [
          'SEI: Sistema Eletrônico de Informações desenvolvido pelo TRF4',
          'Software livre, gratuito, 100% web, sem papel',
          'Goiás: https://sei.goias.gov.br/',
          'Documentos internos: criados no SEI (nato-digitais)',
          'Documentos externos: digitalizados ou importados (PDF, imagem)',
          'Assinatura: certificado digital OU login+senha (ambas válidas)',
          'Níveis de acesso: público, restrito e sigiloso',
          'Tramitar: enviar processo para outra unidade',
          'Blocos: agrupamento de processos para ações conjuntas',
          'NUP: Número Único de Protocolo (identificador do processo)',
        ],

        armadilhas: [
          {
            titulo: 'Achar que SEI é pago ou proprietário',
            descricao: 'SEI é SOFTWARE LIVRE, gratuito, desenvolvido pelo TRF4.',
            dica: 'SEI = Software livre = Gratuito.',
          },
          {
            titulo: 'Confundir documento interno com externo',
            descricao: 'Interno: criado no SEI. Externo: digitalizado ou importado.',
            dica: 'Nasceu no SEI = interno. Veio de fora = externo.',
          },
          {
            titulo: 'Pensar que só certificado digital vale',
            descricao: 'Assinatura com login+senha do SEI também tem validade jurídica.',
            dica: 'Duas formas de assinar, ambas válidas legalmente.',
          },
          {
            titulo: 'Confundir tramitar com concluir',
            descricao: 'Tramitar envia para outra unidade. Concluir finaliza na unidade.',
            dica: 'Tramitar = envia. Concluir = encerra na unidade.',
          },
        ],

        mnemonicos: [
          {
            termo: 'SEI-TRF4',
            significado: 'SEI criado pelo TRF4, software livre gratuito',
            frase: 'SEI = TRF4 = GRÁTIS',
          },
          {
            termo: 'PRS',
            significado: 'Público, Restrito, Sigiloso',
            frase: 'Níveis de acesso no SEI: PRS',
          },
          {
            termo: 'INTERNO-NASCEU',
            significado: 'Interno nasceu no SEI, externo entrou',
            frase: 'Documento INTERNO nasceu no SEI, EXTERNO entrou',
          },
          {
            termo: 'DUAS-ASSINATURAS',
            significado: 'Certificado ou Login+Senha',
            frase: 'Duas formas de assinar: certificado digital ou login+senha',
          },
        ],

        flashcards: [
          {
            id: 'inf-fc-5-1',
            frente: 'O que é o SEI e quem o desenvolveu?',
            verso: '**SEI = Sistema Eletrônico de Informações**\n\nDesenvolvido pelo **TRF4** (Tribunal Regional Federal da 4ª Região)\n\n**Características:**\n- Software LIVRE\n- GRATUITO\n- 100% WEB\n- Sem papel (paperless)',
            tags: ['SEI', 'conceito'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-5-2',
            frente: 'Qual o endereço do SEI do Governo de Goiás?',
            verso: '**https://sei.goias.gov.br/**\n\nCaracterísticas do acesso:\n- 100% Web (navegador)\n- Sem instalação\n- Qualquer dispositivo\n- Acesso com login e senha',
            tags: ['SEI', 'Goiás'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-5-3',
            frente: 'Qual a diferença entre documento INTERNO e EXTERNO no SEI?',
            verso: '**INTERNO (nato-digital):**\n- Criado DENTRO do SEI\n- Editor de texto próprio\n- Nasce digital\n\n**EXTERNO:**\n- Vem de FORA do SEI\n- Digitalizado ou importado\n- PDF, imagem, etc.\n\nMacete: Interno NASCEU no SEI.',
            tags: ['documentos', 'tipos'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-5-4',
            frente: 'Quais os tipos de assinatura eletrônica no SEI?',
            verso: '**1. CERTIFICADO DIGITAL (ICP-Brasil):**\n- Token ou cartão\n- Maior segurança\n\n**2. LOGIN + SENHA:**\n- Usuário e senha do SEI\n- Também tem validade jurídica\n\n**AMBAS têm valor legal!**',
            tags: ['assinatura', 'eletrônica'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-5-5',
            frente: 'Quais são os níveis de acesso aos processos no SEI?',
            verso: '**PÚBLICO:**\nQualquer servidor pode ver\n(padrão)\n\n**RESTRITO:**\nApenas unidades envolvidas\n(informações sensíveis)\n\n**SIGILOSO:**\nApenas credenciados\n(classificados)',
            tags: ['acesso', 'níveis'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-5-6',
            frente: 'O que significa TRAMITAR um processo no SEI?',
            verso: '**TRAMITAR:**\nEnviar o processo para OUTRA UNIDADE\n\n**Opções ao tramitar:**\n- Enviar (sai da unidade atual)\n- Manter aberto (fica em ambas)\n- Enviar e concluir na atual\n\n**Diferente de CONCLUIR:**\nConcluir apenas finaliza na unidade',
            tags: ['tramitar', 'processo'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-5-7',
            frente: 'O que são BLOCOS no SEI?',
            verso: '**BLOCOS:**\nAgrupamento de processos para ação conjunta\n\n**Tipos:**\n- **Bloco de assinatura**: assinar vários docs\n- **Bloco de reunião**: compartilhar com outras unidades\n- **Bloco interno**: organização da unidade',
            tags: ['blocos', 'organização'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-5-8',
            frente: 'O que é o NUP no SEI?',
            verso: '**NUP = Número Único de Protocolo**\n\nIdentificador único do processo\n\n**Formato típico:**\nXXXXX.XXXXXX/AAAA-XX\n\nPermite rastrear o processo em todo o ciclo',
            tags: ['NUP', 'protocolo'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-5-9',
            frente: 'Quais as principais funcionalidades do SEI?',
            verso: '**FUNCIONALIDADES:**\n\n1. **Criar processo**: iniciar novo\n2. **Incluir documento**: adicionar docs\n3. **Tramitar**: enviar para outra unidade\n4. **Assinar**: assinatura eletrônica\n5. **Concluir**: finalizar na unidade\n6. **Pesquisar**: localizar processos',
            tags: ['funcionalidades', 'operações'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-5-10',
            frente: 'Por que o SEI é considerado paperless?',
            verso: '**PAPERLESS = SEM PAPEL**\n\n**Razões:**\n- Documentos nato-digitais\n- Tramitação eletrônica\n- Assinatura eletrônica\n- Digitalização de docs físicos\n- Arquivo digital\n\n**Benefícios:**\n- Economia\n- Agilidade\n- Sustentabilidade\n- Rastreabilidade',
            tags: ['paperless', 'benefícios'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
        ],

        questoes: [
          {
            id: 'inf-q-5-1',
            enunciado: 'O Sistema Eletrônico de Informações (SEI) foi desenvolvido por qual órgão?',
            alternativas: [
              { letra: 'A', texto: 'Ministério da Economia.' },
              { letra: 'B', texto: 'Tribunal Regional Federal da 4ª Região.' },
              { letra: 'C', texto: 'Controladoria-Geral da União.' },
              { letra: 'D', texto: 'Governo do Estado de Goiás.' },
              { letra: 'E', texto: 'Supremo Tribunal Federal.' },
            ],
            gabarito: 'B',
            justificativa: 'O SEI foi desenvolvido pelo TRF4 (Tribunal Regional Federal da 4ª Região) e disponibilizado gratuitamente para órgãos públicos.',
            dificuldade: 'Fácil',
            competencia: 'SEI - Origem',
            banca: 'IADES',
            tags: ['SEI', 'TRF4'],
          },
          {
            id: 'inf-q-5-2',
            enunciado: 'Sobre o SEI, é CORRETO afirmar que:',
            alternativas: [
              { letra: 'A', texto: 'É um software pago, com licença anual.' },
              { letra: 'B', texto: 'Requer instalação de programa específico no computador.' },
              { letra: 'C', texto: 'É um software livre, gratuito e 100% web.' },
              { letra: 'D', texto: 'Funciona apenas em computadores com Windows.' },
              { letra: 'E', texto: 'Não permite assinatura eletrônica de documentos.' },
            ],
            gabarito: 'C',
            justificativa: 'O SEI é um software LIVRE (código aberto), GRATUITO (sem custo de licença) e 100% WEB (acesso via navegador, sem instalação).',
            dificuldade: 'Fácil',
            competencia: 'Características do SEI',
            banca: 'IADES',
            tags: ['SEI', 'características'],
          },
          {
            id: 'inf-q-5-3',
            enunciado: 'No SEI, um documento criado diretamente no sistema é classificado como:',
            alternativas: [
              { letra: 'A', texto: 'Documento externo.' },
              { letra: 'B', texto: 'Documento digitalizado.' },
              { letra: 'C', texto: 'Documento interno (nato-digital).' },
              { letra: 'D', texto: 'Documento importado.' },
              { letra: 'E', texto: 'Documento físico.' },
            ],
            gabarito: 'C',
            justificativa: 'Documentos criados diretamente no SEI são chamados de INTERNOS ou NATO-DIGITAIS. Documentos externos são os digitalizados ou importados de fora do sistema.',
            dificuldade: 'Fácil',
            competencia: 'Tipos de documentos',
            banca: 'IADES',
            tags: ['documento', 'interno'],
          },
          {
            id: 'inf-q-5-4',
            enunciado: 'A assinatura eletrônica no SEI pode ser realizada:',
            alternativas: [
              { letra: 'A', texto: 'Apenas com certificado digital ICP-Brasil.' },
              { letra: 'B', texto: 'Apenas com login e senha do sistema.' },
              { letra: 'C', texto: 'Com certificado digital ou com login e senha, ambos com validade jurídica.' },
              { letra: 'D', texto: 'Apenas por meio de biometria.' },
              { letra: 'E', texto: 'Não possui opção de assinatura eletrônica.' },
            ],
            gabarito: 'C',
            justificativa: 'O SEI permite assinatura com CERTIFICADO DIGITAL (ICP-Brasil) ou com LOGIN+SENHA do sistema. Ambas as formas têm VALIDADE JURÍDICA.',
            dificuldade: 'Fácil',
            competencia: 'Assinatura eletrônica',
            banca: 'IADES',
            tags: ['assinatura', 'eletrônica'],
          },
          {
            id: 'inf-q-5-5',
            enunciado: 'Os níveis de acesso a processos no SEI são:',
            alternativas: [
              { letra: 'A', texto: 'Aberto, fechado e secreto.' },
              { letra: 'B', texto: 'Público, restrito e sigiloso.' },
              { letra: 'C', texto: 'Livre, controlado e bloqueado.' },
              { letra: 'D', texto: 'Geral, específico e confidencial.' },
              { letra: 'E', texto: 'Normal, urgente e prioritário.' },
            ],
            gabarito: 'B',
            justificativa: 'Os níveis de acesso no SEI são: PÚBLICO (qualquer servidor pode ver), RESTRITO (apenas unidades envolvidas) e SIGILOSO (apenas credenciados).',
            dificuldade: 'Fácil',
            competencia: 'Níveis de acesso',
            banca: 'IADES',
            tags: ['acesso', 'níveis'],
          },
          {
            id: 'inf-q-5-6',
            enunciado: 'No SEI, a ação de enviar um processo para outra unidade é chamada de:',
            alternativas: [
              { letra: 'A', texto: 'Concluir.' },
              { letra: 'B', texto: 'Arquivar.' },
              { letra: 'C', texto: 'Tramitar.' },
              { letra: 'D', texto: 'Anexar.' },
              { letra: 'E', texto: 'Duplicar.' },
            ],
            gabarito: 'C',
            justificativa: 'TRAMITAR é a ação de enviar o processo para outra unidade. CONCLUIR é finalizar na unidade atual. ANEXAR é juntar processos.',
            dificuldade: 'Fácil',
            competencia: 'Funcionalidades',
            banca: 'IADES',
            tags: ['tramitar', 'funcionalidade'],
          },
          {
            id: 'inf-q-5-7',
            enunciado: 'O endereço de acesso ao SEI do Governo de Goiás é:',
            alternativas: [
              { letra: 'A', texto: 'www.goias.gov.br/sei' },
              { letra: 'B', texto: 'sei.goias.gov.br' },
              { letra: 'C', texto: 'sistema.sei.goias.br' },
              { letra: 'D', texto: 'www.sei.gov.br/goias' },
              { letra: 'E', texto: 'portal.sei.goias.gov.br' },
            ],
            gabarito: 'B',
            justificativa: 'O endereço correto do SEI do Governo de Goiás é https://sei.goias.gov.br/',
            dificuldade: 'Fácil',
            competencia: 'Acesso ao SEI',
            banca: 'IADES',
            tags: ['SEI', 'Goiás', 'URL'],
          },
          {
            id: 'inf-q-5-8',
            enunciado: 'Os blocos no SEI servem para:',
            alternativas: [
              { letra: 'A', texto: 'Bloquear o acesso a processos.' },
              { letra: 'B', texto: 'Agrupar processos para ações conjuntas.' },
              { letra: 'C', texto: 'Excluir processos em lote.' },
              { letra: 'D', texto: 'Converter documentos em PDF.' },
              { letra: 'E', texto: 'Criar cópias de segurança.' },
            ],
            gabarito: 'B',
            justificativa: 'Os BLOCOS no SEI servem para AGRUPAR processos para ações conjuntas, como assinatura em lote (bloco de assinatura) ou compartilhamento (bloco de reunião).',
            dificuldade: 'Média',
            competencia: 'Blocos',
            banca: 'IADES',
            tags: ['blocos', 'funcionalidade'],
          },
          {
            id: 'inf-q-5-9',
            enunciado: 'O conceito de "paperless" aplicado ao SEI significa:',
            alternativas: [
              { letra: 'A', texto: 'Que o sistema imprime automaticamente os documentos.' },
              { letra: 'B', texto: 'Que o sistema elimina o uso de papel através da tramitação eletrônica.' },
              { letra: 'C', texto: 'Que apenas documentos em papel podem ser cadastrados.' },
              { letra: 'D', texto: 'Que o sistema usa papel reciclado.' },
              { letra: 'E', texto: 'Que os documentos são enviados por correio.' },
            ],
            gabarito: 'B',
            justificativa: 'PAPERLESS significa "sem papel". O SEI permite a gestão totalmente ELETRÔNICA de documentos e processos, eliminando a necessidade de papel físico.',
            dificuldade: 'Fácil',
            competencia: 'Paperless',
            banca: 'IADES',
            tags: ['paperless', 'eletrônico'],
          },
          {
            id: 'inf-q-5-10',
            enunciado: 'O NUP (Número Único de Protocolo) no SEI serve para:',
            alternativas: [
              { letra: 'A', texto: 'Identificar os usuários do sistema.' },
              { letra: 'B', texto: 'Identificar unicamente cada processo.' },
              { letra: 'C', texto: 'Definir o nível de acesso do documento.' },
              { letra: 'D', texto: 'Controlar o tempo de tramitação.' },
              { letra: 'E', texto: 'Classificar a prioridade do processo.' },
            ],
            gabarito: 'B',
            justificativa: 'O NUP (Número Único de Protocolo) é o identificador único de cada PROCESSO no SEI, permitindo seu rastreamento em todo o ciclo de vida.',
            dificuldade: 'Fácil',
            competencia: 'NUP',
            banca: 'IADES',
            tags: ['NUP', 'protocolo'],
          },
        ],
      },
    },
    {
      id: 'inf-topico-6',
      numero: 6,
      titulo: 'Decreto Estadual de Goiás nº 10.254/2023 - Gestão de Documentos Digitais',
      conteudo: {
        resumo: `
## Resumo Rápido

O **Decreto nº 10.254/2023** regulamenta a gestão de documentos digitais no âmbito do Poder Executivo do Estado de Goiás, estabelecendo diretrizes para produção, tramitação, uso e arquivamento de documentos digitais.

### Principais Pontos

| Aspecto | Determinação |
|---------|--------------|
| **Objetivo** | Regulamentar gestão de documentos digitais |
| **Âmbito** | Poder Executivo de Goiás |
| **Sistema** | SEI (Sistema Eletrônico de Informações) |
| **Validade** | Documento digital tem mesmo valor do físico |

### Conceitos Fundamentais

| Termo | Definição |
|-------|-----------|
| **Documento digital** | Informação registrada em formato digital |
| **Documento nato-digital** | Criado originalmente em formato digital |
| **Documento digitalizado** | Convertido do formato físico para digital |
| **Assinatura eletrônica** | Validação com certificado ou login/senha |

### Princípios do Decreto

- **Transparência**: acesso à informação pública
- **Economicidade**: redução de custos com papel
- **Eficiência**: agilidade nos processos
- **Sustentabilidade**: redução de impacto ambiental
- **Segurança**: integridade e autenticidade dos documentos
        `,

        explicacao: `
## Explicação Didática

### 1. CONTEXTUALIZAÇÃO DO DECRETO 10.254/2023

O Decreto nº 10.254/2023 faz parte da política de **transformação digital** do Governo de Goiás, visando modernizar a administração pública estadual por meio da gestão eletrônica de documentos e processos.

#### 1.1 Objetivo Principal

Regulamentar a **produção, tramitação, uso, avaliação e arquivamento** de documentos digitais no âmbito do Poder Executivo do Estado de Goiás.

#### 1.2 Fundamentos Legais

| Legislação | Matéria |
|------------|---------|
| **Lei Federal 14.063/2020** | Assinaturas eletrônicas |
| **Lei Federal 12.527/2011** | Lei de Acesso à Informação (LAI) |
| **Decreto Federal 10.278/2020** | Digitalização de documentos |
| **MP 2.200-2/2001** | ICP-Brasil |

### 2. DEFINIÇÕES IMPORTANTES

#### 2.1 Tipos de Documentos

| Tipo | Definição | Origem |
|------|-----------|--------|
| **Documento digital** | Informação registrada e codificada em formato digital | Qualquer |
| **Documento nato-digital** | Criado originalmente em formato digital | Digital |
| **Documento digitalizado** | Resultado da conversão de documento físico | Físico → Digital |
| **Documento arquivístico** | Produzido no exercício de funções do órgão | Atividade oficial |

#### 2.2 Tipos de Assinatura

| Tipo | Características | Validade |
|------|-----------------|----------|
| **Assinatura eletrônica simples** | Login e senha | Atos internos |
| **Assinatura eletrônica avançada** | Associada ao assinante | Maior segurança |
| **Assinatura eletrônica qualificada** | Certificado ICP-Brasil | Máxima validade |

#### 2.3 Conceitos de Gestão

| Conceito | Significado |
|----------|-------------|
| **Gestão de documentos** | Controle do ciclo de vida dos documentos |
| **Metadados** | Informações sobre os documentos (data, autor, tipo) |
| **Classificação** | Organização por assunto ou função |
| **Temporalidade** | Prazo de guarda e destinação |
| **Repositório** | Local de armazenamento digital |

### 3. SISTEMA ELETRÔNICO DE INFORMAÇÕES (SEI)

O SEI é o sistema oficial adotado pelo Estado de Goiás para gestão de documentos e processos digitais.

#### 3.1 Características do SEI

| Característica | Descrição |
|----------------|-----------|
| **Paperless** | Dispensa o uso de papel |
| **Tempo real** | Tramitação instantânea |
| **Transparência** | Rastreabilidade de ações |
| **Assinatura eletrônica** | Certificado ou login/senha |
| **Numeração única** | NUP - Número Único de Protocolo |

#### 3.2 Funcionalidades Principais

- **Criação de documentos** (nato-digitais)
- **Digitalização** (inserção de documentos externos)
- **Tramitação** (envio entre unidades)
- **Assinatura eletrônica** (validação de documentos)
- **Pesquisa** (busca por número, tipo, assunto)
- **Arquivamento** (conclusão de processos)

### 4. DIRETRIZES DO DECRETO

#### 4.1 Produção de Documentos

| Diretriz | Descrição |
|----------|-----------|
| **Preferência digital** | Documentos devem ser criados em formato digital |
| **Formato aberto** | Utilizar formatos não proprietários (PDF/A) |
| **Metadados** | Incluir informações de identificação |
| **Numeração** | Atribuir número único de protocolo |

#### 4.2 Tramitação de Documentos

| Aspecto | Determinação |
|---------|--------------|
| **Meio** | Preferencialmente eletrônico |
| **Sistema** | SEI ou sistema oficial do órgão |
| **Registro** | Todas as movimentações devem ser registradas |
| **Prazos** | Contados em dias úteis do sistema |

#### 4.3 Armazenamento e Preservação

| Aspecto | Determinação |
|---------|--------------|
| **Repositório** | Ambientes seguros e controlados |
| **Backup** | Cópias de segurança periódicas |
| **Integridade** | Garantir que não haja alterações indevidas |
| **Acesso** | Controle por níveis (público, restrito, sigiloso) |

### 5. VALIDADE JURÍDICA

#### 5.1 Equivalência Legal

| Documento | Validade |
|-----------|----------|
| **Nato-digital com assinatura eletrônica** | Equivalente ao documento físico assinado |
| **Digitalizado com certificação** | Equivalente ao documento original |
| **Cópia autenticada digitalmente** | Mesma validade da autenticação cartorial |

#### 5.2 Requisitos de Validade

Para ter validade jurídica, o documento digital deve:
1. Ser assinado eletronicamente
2. Ter integridade verificável
3. Estar armazenado em repositório confiável
4. Possuir metadados adequados
5. Respeitar a temporalidade arquivística

### 6. NÍVEIS DE ACESSO

| Nível | Descrição | Acesso |
|-------|-----------|--------|
| **Público** | Informações de interesse geral | Qualquer cidadão |
| **Restrito** | Dados protegidos por lei | Servidores autorizados |
| **Sigiloso** | Informações classificadas | Credenciados específicos |

#### 6.1 Hipóteses de Restrição

- Dados pessoais sensíveis
- Sigilo fiscal
- Segredo de justiça
- Informações comerciais confidenciais
- Segurança do Estado

### 7. RESPONSABILIDADES

#### 7.1 Do Servidor Público

| Responsabilidade | Descrição |
|------------------|-----------|
| **Criação** | Produzir documentos com qualidade |
| **Classificação** | Categorizar corretamente |
| **Tramitação** | Movimentar nos prazos |
| **Sigilo** | Proteger informações restritas |
| **Assinatura** | Validar documentos sob sua responsabilidade |

#### 7.2 Do Órgão/Entidade

| Responsabilidade | Descrição |
|------------------|-----------|
| **Infraestrutura** | Prover sistemas e equipamentos |
| **Capacitação** | Treinar servidores |
| **Segurança** | Proteger dados e sistemas |
| **Arquivamento** | Preservar documentos |
| **Transparência** | Disponibilizar informações públicas |

### 8. DIGITALIZAÇÃO DE DOCUMENTOS

#### 8.1 Requisitos Técnicos

| Aspecto | Especificação |
|---------|---------------|
| **Resolução mínima** | 300 dpi |
| **Formato** | PDF/A (preservação de longo prazo) |
| **Cores** | Colorido, quando necessário |
| **OCR** | Reconhecimento de texto (quando aplicável) |

#### 8.2 Procedimento de Digitalização

1. **Preparação**: organizar documentos físicos
2. **Digitalização**: captura da imagem
3. **Conferência**: verificar qualidade e legibilidade
4. **Indexação**: inserir metadados
5. **Validação**: assinatura eletrônica
6. **Descarte**: após prazo, se autorizado

### 9. APLICAÇÃO NA VIGILÂNCIA SANITÁRIA

| Documento | Formato | Assinatura |
|-----------|---------|------------|
| **Auto de infração** | Nato-digital no SEI | Eletrônica do fiscal |
| **Licença sanitária** | Nato-digital | Eletrônica da autoridade |
| **Notificação** | Nato-digital | Eletrônica do servidor |
| **Processo sancionatório** | Processo eletrônico | Múltiplas assinaturas |
| **Alvará** | Nato-digital | Com código de verificação |

### 10. PONTOS IMPORTANTES PARA PROVA

- Documento digital tem **mesmo valor jurídico** que o físico
- Assinatura pode ser com **certificado ICP-Brasil** ou **login/senha do sistema**
- O sistema oficial é o **SEI** (Sistema Eletrônico de Informações)
- Documentos devem ser criados preferencialmente em **formato digital**
- Níveis de acesso: **público, restrito e sigiloso**
- Digitalização deve ser em **300 dpi mínimo** e formato **PDF/A**
- A gestão inclui: produção, tramitação, uso, avaliação e **arquivamento**
        `,

        pontosChave: [
          'Decreto 10.254/2023 regulamenta gestão de documentos digitais no Poder Executivo de GO',
          'Documento digital tem MESMO VALOR JURÍDICO que o documento físico',
          'SEI (Sistema Eletrônico de Informações) é o sistema oficial do Estado de Goiás',
          'Assinatura eletrônica: pode ser com certificado ICP-Brasil ou login/senha do sistema',
          'Documento nato-digital: criado originalmente em formato digital',
          'Documento digitalizado: convertido de físico para digital',
          'Níveis de acesso: público, restrito e sigiloso',
          'Digitalização: resolução mínima de 300 dpi, formato PDF/A',
          'Princípios: transparência, economicidade, eficiência, sustentabilidade, segurança',
          'NUP (Número Único de Protocolo): identifica cada processo no SEI',
        ],

        armadilhas: [
          {
            titulo: 'Confundir nato-digital com digitalizado',
            descricao: 'Nato-digital = criado originalmente em formato digital. Digitalizado = convertido de documento físico.',
            dica: 'Nato = nasceu digital. Digitalizado = virou digital depois.',
          },
          {
            titulo: 'Achar que só certificado digital vale',
            descricao: 'A assinatura com login e senha do SEI também tem validade jurídica, não apenas o certificado ICP-Brasil.',
            dica: 'SEI aceita ambas: certificado digital OU login/senha do sistema.',
          },
          {
            titulo: 'Confundir níveis de acesso',
            descricao: 'Público (todos), Restrito (servidores autorizados), Sigiloso (credenciados específicos).',
            dica: 'Sigiloso é mais restrito que Restrito.',
          },
          {
            titulo: 'Esquecer requisitos de digitalização',
            descricao: 'A digitalização tem requisitos técnicos: 300 dpi mínimo, formato PDF/A.',
            dica: 'Lembre: 300 dpi + PDF/A para preservação de longo prazo.',
          },
        ],

        mnemonicos: [
          {
            termo: 'SEI-GO',
            significado: 'Sistema Eletrônico de Informações de Goiás',
            frase: 'SEI-GO é o sistema oficial de documentos digitais do Estado de Goiás.',
          },
          {
            termo: 'NATO',
            significado: 'NAsceu digital, não foi converTidO',
            frase: 'Documento NATO-digital: NAsceu assim, não foi converTidO.',
          },
          {
            termo: 'PRS',
            significado: 'Público, Restrito, Sigiloso',
            frase: 'Níveis de acesso no SEI: PRS - do mais aberto ao mais fechado.',
          },
          {
            termo: '300-PDF',
            significado: '300 dpi + PDF/A',
            frase: 'Requisitos de digitalização: 300 dpi mínimo, formato PDF/A.',
          },
        ],

        flashcards: [
          {
            id: 'inf-fc-6-1',
            frente: 'O que regulamenta o Decreto 10.254/2023 de Goiás?',
            verso: '**Decreto 10.254/2023:**\n\nRegula a **gestão de documentos digitais** no âmbito do Poder Executivo do Estado de Goiás.\n\nAbrange:\n• Produção\n• Tramitação\n• Uso\n• Avaliação\n• Arquivamento\n\nde documentos em formato digital.',
            tags: ['decreto', 'objetivo'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-6-2',
            frente: 'Qual a diferença entre documento NATO-DIGITAL e DIGITALIZADO?',
            verso: '**NATO-DIGITAL:**\nCriado ORIGINALMENTE em formato digital.\nEx: documento criado no SEI.\n\n**DIGITALIZADO:**\nConvertido de FÍSICO para digital.\nEx: documento em papel escaneado.\n\n**Dica:**\nNato = nasceu digital.\nDigitalizado = transformado depois.',
            tags: ['documento', 'tipos'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-6-3',
            frente: 'Quais são os tipos de assinatura eletrônica aceitos?',
            verso: '**Tipos de Assinatura Eletrônica:**\n\n1. **Simples**: Login + senha do sistema\n   Uso: atos internos\n\n2. **Avançada**: Associada ao assinante\n   Uso: maior segurança\n\n3. **Qualificada**: Certificado ICP-Brasil\n   Uso: máxima validade jurídica\n\n**No SEI-GO:** Aceita certificado OU login/senha, ambos com validade.',
            tags: ['assinatura', 'tipos'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-6-4',
            frente: 'Quais são os níveis de acesso a documentos no SEI?',
            verso: '**Níveis de Acesso:**\n\n| Nível | Quem acessa |\n|-------|-------------|\n| **Público** | Qualquer cidadão |\n| **Restrito** | Servidores autorizados |\n| **Sigiloso** | Credenciados específicos |\n\n**Do mais aberto ao mais fechado:**\nPúblico → Restrito → Sigiloso',
            tags: ['acesso', 'níveis'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-6-5',
            frente: 'Quais são os requisitos técnicos para digitalização de documentos?',
            verso: '**Requisitos de Digitalização:**\n\n• **Resolução mínima**: 300 dpi\n• **Formato**: PDF/A (preservação de longo prazo)\n• **Cores**: Colorido quando necessário\n• **OCR**: Reconhecimento de texto (quando aplicável)\n\n**Dica:** 300-PDF\n300 dpi + PDF/A',
            tags: ['digitalização', 'requisitos'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-6-6',
            frente: 'O documento digital tem a mesma validade que o documento físico?',
            verso: '**SIM!**\n\nO documento digital tem **MESMO VALOR JURÍDICO** que o documento físico, desde que:\n\n✓ Seja assinado eletronicamente\n✓ Tenha integridade verificável\n✓ Esteja em repositório confiável\n✓ Possua metadados adequados\n✓ Respeite temporalidade arquivística\n\nFundamento: Lei Federal 14.063/2020',
            tags: ['validade', 'jurídica'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-6-7',
            frente: 'Quais são os princípios do Decreto 10.254/2023?',
            verso: '**Princípios:**\n\n• **Transparência**: acesso à informação pública\n• **Economicidade**: redução de custos\n• **Eficiência**: agilidade nos processos\n• **Sustentabilidade**: redução do uso de papel\n• **Segurança**: integridade e autenticidade\n\n**Dica:** TEES\nTransparência, Economicidade, Eficiência, Sustentabilidade, Segurança',
            tags: ['princípios', 'decreto'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-6-8',
            frente: 'O que são METADADOS no contexto da gestão documental?',
            verso: '**METADADOS:**\n\nSão **informações SOBRE os documentos** que permitem sua identificação, localização e gestão.\n\n**Exemplos:**\n• Data de criação\n• Autor/Responsável\n• Tipo de documento\n• Assunto/Classificação\n• Número de protocolo\n• Nível de acesso\n\n**Função:** Organizar e facilitar a busca de documentos.',
            tags: ['metadados', 'conceito'],
            dificuldade: 'medio',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-6-9',
            frente: 'Qual o sistema oficial de gestão de documentos digitais em Goiás?',
            verso: '**SEI - Sistema Eletrônico de Informações**\n\nCaracterísticas:\n• **Paperless** (sem papel)\n• **Tramitação em tempo real**\n• **Assinatura eletrônica** (certificado ou login/senha)\n• **NUP** (Número Único de Protocolo)\n• **Transparência** e rastreabilidade\n\nEndereço: sei.goias.gov.br',
            tags: ['SEI', 'sistema'],
            dificuldade: 'facil',
            caixa: 1,
            proximaRevisao: null,
            ultimaRevisao: null,
            acertos: 0,
            erros: 0,
          },
          {
            id: 'inf-fc-6-10',
            frente: 'Quais as responsabilidades do servidor na gestão de documentos digitais?',
            verso: '**Responsabilidades do Servidor:**\n\n• **Criação**: produzir com qualidade\n• **Classificação**: categorizar corretamente\n• **Tramitação**: movimentar nos prazos\n• **Sigilo**: proteger informações restritas\n• **Assinatura**: validar documentos\n\n**Responsabilidades do Órgão:**\n• Infraestrutura, capacitação, segurança, arquivamento, transparência',
            tags: ['responsabilidades', 'servidor'],
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
            id: 'inf-q-6-1',
            enunciado: 'O Decreto Estadual nº 10.254/2023 de Goiás regulamenta:',
            alternativas: [
              { letra: 'A', texto: 'A contratação de serviços de informática.' },
              { letra: 'B', texto: 'A gestão de documentos digitais no Poder Executivo.' },
              { letra: 'C', texto: 'A segurança cibernética do Estado.' },
              { letra: 'D', texto: 'O uso de redes sociais por servidores.' },
              { letra: 'E', texto: 'A aquisição de equipamentos de TI.' },
            ],
            gabarito: 'B',
            justificativa: 'O Decreto 10.254/2023 regulamenta a gestão de documentos digitais no âmbito do Poder Executivo de Goiás, incluindo produção, tramitação, uso, avaliação e arquivamento.',
            dificuldade: 'Fácil',
            competencia: 'Objeto do decreto',
            banca: 'IADES',
            tags: ['decreto', 'objetivo'],
          },
          {
            id: 'inf-q-6-2',
            enunciado: 'Documento nato-digital é aquele que:',
            alternativas: [
              { letra: 'A', texto: 'Foi convertido de papel para formato digital.' },
              { letra: 'B', texto: 'Foi criado originalmente em formato digital.' },
              { letra: 'C', texto: 'Possui apenas assinatura manuscrita digitalizada.' },
              { letra: 'D', texto: 'Está disponível apenas em formato impresso.' },
              { letra: 'E', texto: 'Foi importado de outro sistema.' },
            ],
            gabarito: 'B',
            justificativa: 'Documento nato-digital é aquele criado ORIGINALMENTE em formato digital. O documento convertido de papel para digital é chamado de "digitalizado".',
            dificuldade: 'Fácil',
            competencia: 'Tipos de documentos',
            banca: 'IADES',
            tags: ['nato-digital', 'conceito'],
          },
          {
            id: 'inf-q-6-3',
            enunciado: 'A assinatura eletrônica no SEI de Goiás pode ser realizada:',
            alternativas: [
              { letra: 'A', texto: 'Apenas com certificado digital ICP-Brasil.' },
              { letra: 'B', texto: 'Apenas com biometria.' },
              { letra: 'C', texto: 'Com certificado digital ou login e senha do sistema.' },
              { letra: 'D', texto: 'Apenas de forma presencial no órgão.' },
              { letra: 'E', texto: 'Apenas por impressão e assinatura manual.' },
            ],
            gabarito: 'C',
            justificativa: 'O SEI permite assinatura eletrônica tanto com CERTIFICADO DIGITAL ICP-Brasil quanto com LOGIN E SENHA do sistema. Ambas as formas têm validade jurídica.',
            dificuldade: 'Fácil',
            competencia: 'Assinatura eletrônica',
            banca: 'IADES',
            tags: ['assinatura', 'SEI'],
          },
          {
            id: 'inf-q-6-4',
            enunciado: 'Quanto à validade jurídica, o documento digital:',
            alternativas: [
              { letra: 'A', texto: 'Tem valor inferior ao documento físico.' },
              { letra: 'B', texto: 'Só vale se impresso e assinado.' },
              { letra: 'C', texto: 'Tem o mesmo valor jurídico que o documento físico.' },
              { letra: 'D', texto: 'Não pode ser usado em processos administrativos.' },
              { letra: 'E', texto: 'Precisa de autenticação em cartório.' },
            ],
            gabarito: 'C',
            justificativa: 'O documento digital, quando assinado eletronicamente e em repositório confiável, tem o MESMO VALOR JURÍDICO que o documento físico, conforme a Lei Federal 14.063/2020.',
            dificuldade: 'Fácil',
            competencia: 'Validade jurídica',
            banca: 'IADES',
            tags: ['validade', 'documento digital'],
          },
          {
            id: 'inf-q-6-5',
            enunciado: 'Os níveis de acesso a documentos no SEI são:',
            alternativas: [
              { letra: 'A', texto: 'Aberto, fechado e confidencial.' },
              { letra: 'B', texto: 'Público, restrito e sigiloso.' },
              { letra: 'C', texto: 'Normal, urgente e prioritário.' },
              { letra: 'D', texto: 'Livre, controlado e bloqueado.' },
              { letra: 'E', texto: 'Interno, externo e reservado.' },
            ],
            gabarito: 'B',
            justificativa: 'Os níveis de acesso no SEI são: PÚBLICO (qualquer cidadão), RESTRITO (servidores autorizados) e SIGILOSO (credenciados específicos).',
            dificuldade: 'Fácil',
            competencia: 'Níveis de acesso',
            banca: 'IADES',
            tags: ['acesso', 'níveis'],
          },
          {
            id: 'inf-q-6-6',
            enunciado: 'A resolução mínima para digitalização de documentos, conforme o decreto, é:',
            alternativas: [
              { letra: 'A', texto: '72 dpi.' },
              { letra: 'B', texto: '150 dpi.' },
              { letra: 'C', texto: '200 dpi.' },
              { letra: 'D', texto: '300 dpi.' },
              { letra: 'E', texto: '600 dpi.' },
            ],
            gabarito: 'D',
            justificativa: 'A resolução mínima para digitalização de documentos é de 300 dpi (dots per inch), em formato PDF/A para preservação de longo prazo.',
            dificuldade: 'Média',
            competencia: 'Digitalização',
            banca: 'IADES',
            tags: ['digitalização', '300 dpi'],
          },
          {
            id: 'inf-q-6-7',
            enunciado: 'Metadados, no contexto da gestão documental, são:',
            alternativas: [
              { letra: 'A', texto: 'Cópias de segurança dos documentos.' },
              { letra: 'B', texto: 'Informações sobre os documentos que permitem sua identificação.' },
              { letra: 'C', texto: 'Documentos sigilosos do Estado.' },
              { letra: 'D', texto: 'Assinaturas eletrônicas.' },
              { letra: 'E', texto: 'Formatos de arquivos digitais.' },
            ],
            gabarito: 'B',
            justificativa: 'Metadados são INFORMAÇÕES SOBRE os documentos, como data de criação, autor, tipo, assunto, que permitem sua identificação, localização e gestão.',
            dificuldade: 'Média',
            competencia: 'Metadados',
            banca: 'IADES',
            tags: ['metadados', 'conceito'],
          },
          {
            id: 'inf-q-6-8',
            enunciado: 'O sistema oficial de gestão de documentos digitais do Estado de Goiás é o:',
            alternativas: [
              { letra: 'A', texto: 'SIAFI.' },
              { letra: 'B', texto: 'E-DOC.' },
              { letra: 'C', texto: 'SEI (Sistema Eletrônico de Informações).' },
              { letra: 'D', texto: 'SIPREV.' },
              { letra: 'E', texto: 'SIGA.' },
            ],
            gabarito: 'C',
            justificativa: 'O SEI (Sistema Eletrônico de Informações) é o sistema oficial adotado pelo Estado de Goiás para gestão de documentos e processos digitais.',
            dificuldade: 'Fácil',
            competencia: 'Sistema oficial',
            banca: 'IADES',
            tags: ['SEI', 'sistema'],
          },
          {
            id: 'inf-q-6-9',
            enunciado: 'São princípios do Decreto 10.254/2023, EXCETO:',
            alternativas: [
              { letra: 'A', texto: 'Transparência.' },
              { letra: 'B', texto: 'Economicidade.' },
              { letra: 'C', texto: 'Eficiência.' },
              { letra: 'D', texto: 'Exclusividade.' },
              { letra: 'E', texto: 'Sustentabilidade.' },
            ],
            gabarito: 'D',
            justificativa: 'Os princípios do decreto são: Transparência, Economicidade, Eficiência, Sustentabilidade e Segurança. EXCLUSIVIDADE não é um princípio do decreto.',
            dificuldade: 'Média',
            competencia: 'Princípios',
            banca: 'IADES',
            tags: ['princípios', 'exceção'],
          },
          {
            id: 'inf-q-6-10',
            enunciado: 'Conforme o decreto, o formato recomendado para documentos digitalizados é:',
            alternativas: [
              { letra: 'A', texto: 'DOC (Microsoft Word).' },
              { letra: 'B', texto: 'JPG (imagem).' },
              { letra: 'C', texto: 'PDF/A (preservação de longo prazo).' },
              { letra: 'D', texto: 'TXT (texto simples).' },
              { letra: 'E', texto: 'XLS (Microsoft Excel).' },
            ],
            gabarito: 'C',
            justificativa: 'O formato PDF/A é recomendado para digitalização de documentos por ser um padrão aberto voltado para PRESERVAÇÃO DE LONGO PRAZO.',
            dificuldade: 'Média',
            competencia: 'Formato de arquivo',
            banca: 'IADES',
            tags: ['PDF/A', 'formato'],
          },
        ],
      },
    },
  ],
};
