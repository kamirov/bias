import "./App.css";
import { config } from "./config";

function App() {
  const { app } = config;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to {app.title}</h1>
        <p>
          This is a simple React application built with Vite (v{app.version})
        </p>
      </header>
      <main className="app-main">
        <section className="content-section">
          <h2>About This Project</h2>
          <p>
            This is a monorepo containing a React frontend application that can
            be deployed to AWS S3 + CloudFront for static hosting. The
            application is built with modern web technologies including
            TypeScript, Vite, and React.
          </p>
        </section>
        <section className="content-section">
          <h2>Features</h2>
          <ul>
            <li>⚡ Fast development with Vite</li>
            <li>🔧 TypeScript for type safety</li>
            <li>🚀 Static hosting ready</li>
            <li>📱 Responsive design</li>
            <li>🔄 Hot module replacement</li>
          </ul>
        </section>
        <section className="content-section">
          <h2>Getting Started</h2>
          <p>
            To run this application locally, use <code>pnpm dev</code> from the
            root directory. For deployment, use <code>pnpm deploy</code> to
            deploy to AWS S3 + CloudFront.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
