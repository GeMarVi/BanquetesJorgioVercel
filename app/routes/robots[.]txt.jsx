export const loader = () => {
    // Contenido del archivo robots.txt
    const robotText = `
      User-agent: Googlebot
      Disallow: /nogooglebot/
  
      User-agent: *
      Allow: /
  
      Sitemap: https://www.jorgioespadasbrasilenas.com.mx/sitemap.xml
    `;
  
    // Devolver el contenido como texto plano con el código de estado 200
    return new Response(robotText.trim(), {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      }
    });
  };
  