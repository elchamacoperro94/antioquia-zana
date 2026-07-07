import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'serve-objetivos',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const decodedUrl = decodeURIComponent(req.url || '');
          if (
            decodedUrl.startsWith('/Objetivo 1/') ||
            decodedUrl.startsWith('/Objetivo 2/') ||
            decodedUrl.startsWith('/Objetivo 3/') ||
            decodedUrl.startsWith('/Objetivo 4/') ||
            decodedUrl.startsWith('/Informes por Actividades/')
          ) {
            const urlPath = decodedUrl.split('?')[0];
            const filePath = path.join(__dirname, urlPath);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              res.setHeader('Content-Type', 'application/octet-stream');
              res.setHeader('Content-Disposition', `attachment; filename="${path.basename(filePath)}"`);
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
          next();
        });
      }
    }
  ],
})
