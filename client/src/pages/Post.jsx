import { MarkdownHooks } from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeStarryNight from "rehype-starry-night";

const Post = (props) => {
  const params = useParams();
  const mark = `
# Como usar os hooks useState e useEffect no React

Se você está começando com React, dois hooks essenciais são o \`useState\` e o \`useEffect\`. Vamos ver como eles funcionam de forma simples!

## useState
O \`useState\` é usado para gerenciar o estado de um componente. Ele retorna um array com duas posições: o valor atual do estado e uma função para atualizá-lo.

\`\`\`javascript
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
\`\`\`

No exemplo acima, \`contador\` é o estado inicial (0) e \`setContador\` é a função que atualiza esse estado.

## useEffect
O \`useEffect\` é usado para executar efeitos colaterais, como buscar dados, manipular o DOM ou inscrever-se em eventos. Ele é executado após a renderização do componente.

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Exemplo() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    // Simulando uma requisição de dados
    fetch('https://api.exemplo.com/dados')
      .then(response => response.json())
      .then(data => setDados(data));
  }, []); // O array vazio [] significa que o efeito só roda uma vez, após o primeiro render

  return (
    <div>
      {dados ? <p>Dados: {JSON.stringify(dados)}</p> : <p>Carregando...</p>}
    </div>
  );
}
\`\`\`

No exemplo, o \`useEffect\` é usado para buscar dados de uma API quando o componente é montado. O array de dependências \`[]\` garante que o efeito só seja executado uma vez.

## Resumindo:
- **useState**: Gerencia o estado do componente.
- **useEffect**: Executa efeitos colaterais após a renderização.

Com esses dois hooks, você já pode criar componentes React mais dinâmicos e interativos! 🚀
  `


  return (
    <main className="markdown-body">
      <img src="https://i.imgur.com/HSJtTyv.jpeg"/>
      <MarkdownHooks
        children={mark}
        rehypePlugins={[rehypeStarryNight]}
      />
    </main>
  );
}

export default Post;
