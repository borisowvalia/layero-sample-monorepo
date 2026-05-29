const app = document.getElementById("app");
if (app) {
  app.innerHTML = `
    <main style="font-family: system-ui; max-width: 40rem; margin: 4rem auto; padding: 0 1rem">
      <h1>Layero monorepo sample</h1>
      <p>Built from <code>apps/web</code> — the repo root has no app.</p>
    </main>
  `;
}
