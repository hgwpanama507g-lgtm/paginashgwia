const fs = require('fs');

const rawArticles = JSON.parse(fs.readFileSync('src/data/parsed_articles.json', 'utf8'));

const enrichedArticles = [
  {
    id: "1",
    slug: "que-son-los-arandanos-azules-y-beneficios",
    title: "Arándanos Azules: Tesoros Nutricionales y sus Beneficios para la Salud",
    summary: "Descubre por qué el arándano azul es considerado el rey de los antioxidantes y la piedra angular del bienestar celular en la línea Health Green World.",
    category: "Nutrición y Salud",
    author: "Yamilka Batista",
    authorRole: "Distribuidora Independiente HGW Panamá",
    date: "28 de Octubre, 2026",
    readingTime: "6 min de lectura",
    coverImage: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Arándanos", "Antioxidantes", "Salud Celular", "Nutrición HGW"],
    contentHtml: rawArticles.find(a => a.slug === "que-son-los-arandanos-azules-y-beneficios")?.content || ""
  },
  {
    id: "2",
    slug: "la-turmalina-que-es-propiedades-colores-historia-y-usos",
    title: "La turmalina: qué es, propiedades, colores, historia y usos",
    summary: "Guía completa y científica sobre el mineral de turmalina: piroelectricidad, piezoelectricidad, aniones y emisión de rayos infrarrojos lejanos aplicados al bienestar diario.",
    category: "Turmalina y Bienestar",
    author: "Yamilka Batista",
    authorRole: "Distribuidora Independiente HGW Panamá",
    date: "28 de Octubre, 2026",
    readingTime: "14 min de lectura",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    tags: ["Turmalina", "Iones Negativos", "Infrarrojo Lejano", "Bienestar Holístico"],
    contentHtml: rawArticles.find(a => a.slug === "la-turmalina-que-es-propiedades-colores-historia-y-usos")?.content || ""
  },
  {
    id: "3",
    slug: "plan-de-afiliacion-y-ganancia-mutua-50-50-hgw",
    title: "Plan de Afiliación y Ganancia Mutua 50-50 de HGW en Panamá",
    summary: "Conoce cómo generar ingresos residuales con el innovador plan de compensación de Health Green World. Gana el 50% de las ganancias de tu patrocinador y de tus directos.",
    category: "Oportunidad de Negocio",
    author: "Yamilka Batista",
    authorRole: "Distribuidora Independiente HGW Panamá",
    date: "30 de Octubre, 2026",
    readingTime: "8 min de lectura",
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    tags: ["Afiliación", "Ganancia Mutua 50-50", "Emprendimiento Panamá", "Bonos HGW"],
    contentHtml: `
      <h2>¿Qué hace único al Plan de Afiliación HGW?</h2>
      <p>Health Green World (HGW) ha revolucionado el modelo de redes de mercadeo y venta directa con su patentado sistema de <strong>Ganancia Mutua 50-50</strong>. A diferencia de las empresas tradicionales donde solo gana el que está arriba en la pirámide, en HGW tú ganas tanto de lo que generan tus patrocinados directos como de lo que genera la persona que te invitó al negocio.</p>
      
      <h3>Los 4 Niveles de Membresía</h3>
      <ul>
        <li><strong>Pre-Junior (50 BV - aprox. $90 - $110):</strong> Acceso a compras con descuento del 30% e inicio en el negocio.</li>
        <li><strong>Junior (100 BV - aprox. $180 - $220):</strong> Incrementa tus bonos de patrocinio y desarrollo de equipo.</li>
        <li><strong>Senior (300 BV - aprox. $540 - $600):</strong> Mayor porcentaje de ganancias en bonos de equipo y recompra.</li>
        <li><strong>Master (600 BV - aprox. $1,050 - $1,200):</strong> Máximo estatus con hasta un 52% de ganancia en compras y bonificaciones ilimitadas en los 7 bonos.</li>
      </ul>

      <h3>Los 7 Bonos de HGW Panamá</h3>
      <ol>
        <li><strong>Bono de Venta Directa:</strong> Margen comercial de hasta el 50% al distribuir productos al por menor.</li>
        <li><strong>Bono de Inicio Rápido (Patrocinio):</strong> Cobro inmediato al afiliar a nuevos socios en cualquier paquete.</li>
        <li><strong>Bono de Ganancia Mutua 50-50:</strong> Ganas el 50% del bono de patrocinio que cobra tu línea ascendente y descendente directa. ¡Ganas de tu patrocinador!</li>
        <li><strong>Bono de Desarrollo (Equipo Binario):</strong> Cobro de hasta el 10% de la rama de menor volumen sin límites de profundidad.</li>
        <li><strong>Bono de Recompra:</strong> Ingreso pasivo mensual sobre el consumo recurrente de tu organización en 10 generaciones.</li>
        <li><strong>Bono de Liderazgo Elite:</strong> Porcentajes sobre las ventas de la compañía en Panamá y Latinoamérica al alcanzar rangos como Zafiro, Rubí, Esmeralda y Diamante.</li>
        <li><strong>Bono de Autos y Viajes Internacionales:</strong> Premios anuales a los distribuidores con mayor crecimiento.</li>
      </ol>

      <h3>¿Cómo afiliarse hoy mismo con Yamilka Batista?</h3>
      <p>Es muy fácil: contacta directamente a Yamilka Batista al WhatsApp <strong>+507 6778-8375</strong> o regístrate en la tienda oficial en línea de HGW con el código de patrocinio <strong>Yamilka507</strong>. Te guiaremos paso a paso en la elección de tu paquete inicial y te brindaremos capacitación continua y material promocional.</p>
    `
  },
  {
    id: "4",
    slug: "catalogo-de-productos-hgw-panama-2026",
    title: "Catálogo Completo y Guía de Uso Productos HGW Panamá 2026",
    summary: "Explora la gama completa de productos oficiales HGW disponibles en Panamá: línea de arándanos, turmalina activa, pastas dentales herbales y cuidado facial SMILIFE.",
    category: "Catálogo y Guías",
    author: "Yamilka Batista",
    authorRole: "Distribuidora Independiente HGW Panamá",
    date: "02 de Noviembre, 2026",
    readingTime: "5 min de lectura",
    coverImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Catálogo 2026", "Productos Naturales", "HGW Panamá", "Servientrega"],
    contentHtml: `
      <h2>Bienvenido al Catálogo Oficial HGW Panamá 2026</h2>
      <p>Health Green World ofrece soluciones integrales de bienestar respaldadas por más de 20 años de investigación y biotecnología aplicada. Todos nuestros productos cuentan con altos estándares de calidad internacional y registro sanitario.</p>
      
      <h3>Líneas Destacadas en Panamá:</h3>
      <ul>
        <li><strong>Línea de Arándanos Azules:</strong> Blueberry Essence, Berry Juice HIGH VC, Mermelada y Péptidos de Colágeno con Arándano.</li>
        <li><strong>Línea de Turmalina:</strong> Almohada magnética cervical, protectores térmicos de cuello y cintura, jabones de turmalina negra, y pastas dentales de turmalina.</li>
        <li><strong>Línea de Cafés y Bebidas Funcionales:</strong> Café con Ganoderma, Coffee Ceps con Cordyceps, Café Trébol, Choco Blue y Té Pro Shaping.</li>
        <li><strong>Línea de Cosmética y Cuidado Diario SMILIFE:</strong> Cremas hidratantes, limpiador facial suave, desodorantes libres de aluminio y gel de ducha revitalizante.</li>
      </ul>
      <p>Todos los productos pueden ser adquiridos al detal o con descuento especial de socio registrado. Envíos directos a cualquier provincia de Panamá por Servientrega.</p>
    `
  },
  {
    id: "5",
    slug: "listado-de-precios-productos-hgw-panama-2026",
    title: "Listado Oficial de Precios Productos HGW Panamá 2026",
    summary: "Consulta la lista completa y actualizada de precios en dólares estadounidenses (USD) para cliente final y socio distribuidor de todos los productos HGW en Panamá.",
    category: "Precios y Catálogo",
    author: "Yamilka Batista",
    authorRole: "Distribuidora Independiente HGW Panamá",
    date: "03 de Noviembre, 2026",
    readingTime: "4 min de lectura",
    coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Precios 2026", "USD Panamá", "Descuentos", "Margen Distribuidor"],
    contentHtml: `
      <h2>Precios Oficiales HGW Panamá (USD)</h2>
      <p>En Panamá, todos los productos se comercializan en dólares estadounidenses (USD). Los socios inscritos disfrutan de un 30% a 52% de descuento inmediato sobre los precios de venta sugeridos al público.</p>
      
      <p>Revisa la sección de <a href="/catalogo-precios" class="text-emerald-700 underline font-semibold">Catálogo y Precios</a> para ver la tabla interactiva con búsqueda por producto, categoría, puntos BV y precio público vs precio socio.</p>
    `
  }
];

const tsContent = `// HGW Panamá Articles Data
// Health Green World Panama - Official Blog and Articles

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readingTime: string;
  coverImage: string;
  tags: string[];
  contentHtml: string;
}

export const ARTICLES: Article[] = ${JSON.stringify(enrichedArticles, null, 2)};

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug || a.id === slug);
}

export function getLatestArticles(limit: number = 3): Article[] {
  return ARTICLES.slice(0, limit);
}
`;

fs.writeFileSync('src/data/articles.ts', tsContent);
console.log('Successfully wrote src/data/articles.ts with', enrichedArticles.length, 'articles.');
