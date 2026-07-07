import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

// Configuración principal de Vite (https://vite.dev/config/)
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      // Plugin personalizado para servir entregables y documentos directamente desde el disco
      name: 'serve-objetivos',
      configureServer(server) {
        // Registramos un middleware en el servidor local de Vite
        server.middlewares.use((req, res, next) => {
          // Decodificamos la URL para manejar espacios y caracteres especiales en español (como tildes o la ñ)
          const decodedUrl = decodeURIComponent(req.url || '');
          
          // Verificamos si la petición apunta a alguna de las carpetas de documentos oficiales
          if (
            decodedUrl.startsWith('/Objetivo 1/') ||
            decodedUrl.startsWith('/Objetivo 2/') ||
            decodedUrl.startsWith('/Objetivo 3/') ||
            decodedUrl.startsWith('/Objetivo 4/') ||
            decodedUrl.startsWith('/Informes por Actividades/') ||
            decodedUrl.startsWith('/entregables objetivos/')
          ) {
            // Removemos cualquier parámetro de consulta (query string) para quedarnos solo con la ruta del archivo
            const urlPath = decodedUrl.split('?')[0];
            // Resolvemos la ruta absoluta en el sistema de archivos del computador
            const filePath = path.join(__dirname, urlPath);
            
            // Validamos que el archivo realmente exista y no sea una carpeta
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              // Configuramos las cabeceras HTTP para forzar la descarga del archivo (download)
              res.setHeader('Content-Type', 'application/octet-stream');
              res.setHeader('Content-Disposition', `attachment; filename="${path.basename(filePath)}"`);
              
              // Leemos el archivo en flujo (stream) y lo enviamos directamente como respuesta HTTP
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
          // Si no coincide con ninguna ruta de descargas, pasamos el control al siguiente middleware de Vite
          next();
        });
      }
    }
  ],
})
