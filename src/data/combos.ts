export interface ComboPack {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: number;
  tag: string;
  items: string[];
  description: string;
  benefits: string[];
  image: string;
}

export const COMBOS: ComboPack[] = [
  {
    id: "c1",
    slug: "combo-sistema-inmunologico-vital",
    title: "Combo Sistema Inmune Vital",
    subtitle: "Protección celular profunda y vitalidad diaria",
    price: 73.00,
    tag: "Más Popular",
    items: [
      "1x Berry Juice HIGH VC (Arándano puro concentrado)",
      "1x Café Soluble con Ganoderma Lucidum",
      "1x Cápsulas Spirulina Plus (Nutrición completa)"
    ],
    description: "La combinación perfecta para reforzar las defensas naturales, energizar las mañanas y combatir los radicales libres con la máxima potencia antioxidante de HGW.",
    benefits: [
      "Potente dosis de Vitamina C bioasimilable",
      "Adaptógenos de hongo Reishi para equilibrio y energía",
      "Aporte proteico y micronutrientes de espirulina pura"
    ],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "c2",
    slug: "combo-terapia-turmalina-descanso",
    title: "Combo Terapia Turmalina & Alivio",
    subtitle: "Sueño reparador, postura y descompresión cervical",
    price: 109.62,
    tag: "Bienestar Físico",
    items: [
      "1x Almohada Magnética de Turmalina Ergonómica",
      "1x Protector de Cuello Autocalentable de Turmalina",
      "1x Jabón de Turmalina Negra con Iones Negativos"
    ],
    description: "Diseñado para quienes sufren dolor cervical, contracturas por estrés laboral y dificultades para conciliar un sueño profundo.",
    benefits: [
      "Emisión natural de rayos infrarrojos lejanos",
      "Iones negativos para neutralizar campos electromagnéticos",
      "Alivio muscular progresivo sin medicamentos"
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "c3",
    slug: "combo-facial-anti-edad-smilife",
    title: "Kit Rutina Facial SMILIFE Blueberry",
    subtitle: "Hidratación intensiva, firmeza y luminosidad de la piel",
    price: 101.66,
    tag: "Belleza y Cuidado",
    items: [
      "1x SMILIFE Facial Cleanser (Espuma suave purificante)",
      "1x SMILIFE Blueberry Toner (Tónico refrescante)",
      "1x SMILIFE Blueberry Essence (Sérum antioxidante concentrado)"
    ],
    description: "Tratamiento facial coreano-oriental enriquecido con extracto de arándano silvestre y ácido hialurónico para restaurar la barrera cutánea.",
    benefits: [
      "Limpia poros sin resecar ni alterar el pH natural",
      "Estimula la producción de colágeno y elastina",
      "Atenúa líneas de expresión y manchas por fotoenvejecimiento"
    ],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "c4",
    slug: "combo-salud-bucal-familiar",
    title: "Pack Higiene Bucal Avanzada",
    subtitle: "3 pastas dentales funcionales para toda la familia",
    price: 24.00,
    tag: "Cuidado Bucal",
    items: [
      "1x Pasta Dental con Probióticos HGW",
      "1x Pasta Dental de Turmalina (Versión Blanca)",
      "1x Green World Herbs Toothpaste (Herbal Tradicional)"
    ],
    description: "Salud dental integral sin flúor, combatiendo bacterias patógenas mientras promueve la flora benéfica de encías y lengua.",
    benefits: [
      "Protección contra caries, placa y sarro",
      "Neutraliza el mal aliento de raíz con aniones de turmalina",
      "Seguro para niños y adultos con sensibilidad dental"
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
  }
];
