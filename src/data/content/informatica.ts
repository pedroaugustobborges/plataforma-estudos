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
  ],
};
