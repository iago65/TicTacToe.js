# 🎮 TicTacToe.js

Um jogo da velha moderno e responsivo desenvolvido com HTML, CSS e JavaScript puro como **exercício final do Módulo 3 de JavaScript** da **OneBitCode**.

## 🎯 Sobre o Projeto

Este foi o exercício final do módulo **JS-3** focado em **Manipulação de DOM**, desenvolvido de forma independente seguindo os requisitos específicos do enunciado:
📋 **Tic-Tac-Toe / Jogo da Velha**

Construa um jogo tic-tac-toe, conhecido em português como jogo da velha, utilizando HTML, CSS e Javascript. Você pode desenvolver com liberdade, da forma que preferir, mas o jogo precisa atender aos seguintes requisitos:
- ✅ Deve ser possível incluir os nomes dos dois jogadores;
- ✅ O nome do jogador da vez deve ser mostrado na tela e alterado a medida que os turnos vão se alternando;
- ✅ Um tabuleiro deve ser mostrado na tela e ser atualizado quando o jogador clicar na região que ele quer marcar;
- ✅ Quando um jogador clicar no tabuleiro deve ser marcado um “X” ou “O” de acordo com o jogador da vez e não deve ser possível clicar naquela região novamente;
- ✅ Quando um jogador ganhar seu nome deve ser mostrado na tela e as regiões da vitória devem ser destacadas de alguma forma;
- ✅ Em caso de empate, uma mensagem de empate deve ser mostrada na tela;
- ✅ Deve ser possível reiniciar o jogo para jogar novamente.

## ✨ Funcionalidades Implementadas

### 🎪 **Core Features**
- **Entrada personalizada**: Campos para inserir nomes dos jogadores
- **Indicador dinâmico**: Mostra claramente de quem é a vez ("Vez de: João - X")
- **Tabuleiro responsivo**: Grid 3x3 com design moderno
- **Prevenção de erros**: Impede cliques em células ocupadas
- **Validação robusta**: Não permite iniciar sem nomes preenchidos

### 🏆 **Sistema de Vitória**
- **Detecção completa**: Linhas, colunas e diagonais
- **Destaque visual**: Células vencedoras destacadas em azul
- **Mensagem personalizada**: "O jogador [Nome] - X ganhou!"
- **Detecção de empate**: Reconhece tabuleiro completo sem vencedor

### 🎨 **Design & UX**
- **Interface dark**: Tema moderno com cores elegantes
- **Responsivo**: Adaptável para dispositivos móveis
- **Transições suaves**: Hover effects e animações CSS
- **Tipografia Google Fonts**: Fonte Lato para melhor legibilidade

## 🚀 Como Jogar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/TicTacToe.js.git
   cd TicTacToe.js
   ```

2. **Abra o jogo**
   - Abra o arquivo `index.html` no navegador
   - Ou use Live Server no VS Code para melhor experiência

3. **Configure e jogue**
   - Digite os nomes dos dois jogadores
   - Clique em "Começar!"
   - Clique nas células para fazer suas jogadas
   - Primeiro a conseguir 3 em linha vence! 🎉

## 🛠️ Tecnologias Utilizadas

```
HTML5        ████████████████████ 100%
CSS3         ████████████████████ 100% 
JavaScript   ████████████████████ 100%
```

- **HTML5**: Estrutura semântica com data-attributes
- **CSS3**: Grid Layout, Flexbox, Media Queries, Transições
- **JavaScript ES6**: Manipulação de DOM, Event Listeners, Arrays
- **Google Fonts**: Tipografia Lato

## 🏗️ Estrutura do Projeto

```
TicTacToe.js/
├── 📄 index.html      # Estrutura HTML semântica
├── 🎨 style.css       # Estilização moderna e responsiva  
├── ⚡ script.js       # Lógica do jogo e manipulação DOM
└── 📚 README.md       # Documentação do projeto
```

## 🧠 Conceitos Aplicados (Módulo JS-3)

### **Manipulação de DOM**
- `document.getElementById()` e `document.querySelectorAll()`
- `addEventListener()` para interações do usuário
- `classList.add()` e `classList.remove()` para controle visual
- `textContent` e `innerText` para atualização de conteúdo

### **Estruturas de Dados**
- Arrays para representação do tabuleiro (`vBoard`)
- Arrays multidimensionais para combinações vencedoras
- Conversão de coordenadas (ex: "1.2" → índice do array)

### **Lógica de Programação**
- Loops `for` para verificação de vitórias
- Estruturas condicionais `if/else` para controle de fluxo
- Funções organizadas para separação de responsabilidades

### **Event Handling**
- Click events nas células do tabuleiro
- Validação de entrada em tempo real
- Prevenção de ações inválidas

## 🎮 Como Funciona

### **Fluxo do Jogo:**
1. **Inicialização**: Validação de nomes → Configuração do tabuleiro
2. **Turnos**: Clique → Validação → Marcação → Verificação → Próximo turno
3. **Finalização**: Vitória/Empate → Mensagem → Opção de reinício

### **Lógica de Vitória:**
```javascript
// Combinações vencedoras
const winningRows = [[0,1,2], [3,4,5], [6,7,8]]
const winningColumns = [[0,3,6], [1,4,7], [2,5,8]]  
const winningDiagonal = [[0,4,8], [2,4,6]]
```

## 📱 Responsividade

```css
@media (max-width: 768px) {
  /* Adaptações para mobile */
  span { width: 70px; height: 70px; }
  input { width: 160px; margin: 3px 5px; }
}
```

## 🎯 Regras do Jogo
- **Como qualquer outro jogo da velha 😂**
- **Objetivo**: Conseguir 3 símbolos iguais em linha
- **Vitória**: Horizontal, vertical ou diagonal  
- **Turnos**: Alternância automática (X sempre começa)
- **Empate**: Todas as 9 casas preenchidas sem vencedor

## 🏆 Avaliação Pessoal

Este projeto consolidou meu aprendizado em:
- ✅ Manipulação avançada de DOM
- ✅ Event handling e interações complexas
- ✅ Estruturas de dados e algoritmos
- ✅ CSS moderno (Grid/Flexbox)
- ✅ Design responsivo
- ✅ UX/UI design

---

**🎓 Desenvolvido como exercício final do Módulo JS-3 - OneBitCode**  
*Foco: Manipulação de DOM e interações avançadas com JavaScript*

**📅 Concluído:** Julho 2025  
**⭐ Status:** Projeto independente (sem auxílio do professor)
