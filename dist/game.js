const parts = ["game-src/part-00.txt","game-src/part-01.txt","game-src/part-02.txt","game-src/part-03.txt","game-src/part-04.txt","game-src/part-05.txt","game-src/part-06.txt","game-src/part-07.txt","game-src/part-08.txt","game-src/part-09.txt","game-src/part-10.txt","game-src/part-11.txt"];
const chunks = await Promise.all(parts.map(async (path) => {
  const response = await fetch(new URL(path, import.meta.url));
  if (!response.ok) throw new Error('Falha ao carregar ' + path + ': HTTP ' + response.status);
  return response.text();
}));
const source = chunks.join('');
const moduleUrl = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
await import(moduleUrl);
