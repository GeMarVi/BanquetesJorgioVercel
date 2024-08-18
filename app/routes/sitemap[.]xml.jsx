export const loader = () => {
  // Lista de URLs para incluir en el sitemap
  const urls = [
    {
      loc: "https://www.jorgioespadasbrasilenas.com.mx/",
      lastmod: "2024-08-15T00:00:00+00:00",
      priority: 1.0
    },
    {
      loc: "https://www.jorgioespadasbrasilenas.com.mx/espadas-brasilenas",
      lastmod: "2024-08-10T00:00:00+00:00",
      priority: 0.8
    },
    {
      loc: "https://www.jorgioespadasbrasilenas.com.mx/parrilladas",
      lastmod: "2024-08-12T00:00:00+00:00",
      priority: 0.8
    },
    {
      loc: "https://www.jorgioespadasbrasilenas.com.mx/buffet-de-tacos",
      lastmod: "2024-08-12T00:00:00+00:00",
      priority: 0.8
    },
    {
      loc: "https://www.jorgioespadasbrasilenas.com.mx/mobiliario",
      lastmod: "2024-08-12T00:00:00+00:00",
      priority: 0.8
    },
    {
      loc: "https://www.jorgioespadasbrasilenas.com.mx/personal",
      lastmod: "2024-08-12T00:00:00+00:00",
      priority: 0.8
    }
    // Agrega más rutas aquí si es necesario
  ];

  // Generar el contenido XML del sitemap
  const content = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
          <priority>${url.priority}</priority>
        </url>
      `).join('')}
    </urlset>
  `;

  // Devolver la respuesta con el contenido XML y los encabezados adecuados
  return new Response(content.trim(), { // trim() para asegurar que no haya espacios en blanco
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600" // Opcional: establece el caché del sitemap
    }
  });
};
