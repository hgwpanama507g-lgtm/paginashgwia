export interface CompanyInfo {
  distributorName: string;
  distributorRole: string;
  phoneWhatsapp: string;
  phoneWhatsappFormatted: string;
  phoneWhatsappUrl: string;
  officialStoreUrl: string;
  officialStoreUser: string;
  logoUrl: string;
  branch: {
    country: string;
    city: string;
    address: string;
    plaza: string;
    local: string;
    province: string;
    corregimiento: string;
    scheduleWeekdays: string;
    scheduleSaturday: string;
    scheduleSunday: string;
    phoneLandline: string;
    phoneLandlineFormatted: string;
    shippingService: string;
    shippingDescription: string;
    googleMapsSearchUrl: string;
  };
  social: {
    whatsapp: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export const COMPANY_INFO: CompanyInfo = {
  distributorName: "Yamilka Batista",
  distributorRole: "Distribuidora Independiente Autorizada HGW",
  phoneWhatsapp: "50767788375",
  phoneWhatsappFormatted: "+507 6778-8375",
  phoneWhatsappUrl: "https://wa.me/50767788375?text=Hola%20Yamilka,%20estoy%20interesado(a)%20en%20los%20productos%20y%20afiliaci%C3%B3n%20HGW%20Panam%C3%A1.",
  officialStoreUrl: "https://www.healthgreenworld.com/?userName=Yamilka507",
  officialStoreUser: "Yamilka507",
  logoUrl: "/assets/aistudio/logo_hgw_largo_ae3211c9.png",
  branch: {
    country: "Panamá",
    city: "Ciudad de Panamá",
    address: "Avenida Porras, Plaza Royal Blue, Local No. 6",
    plaza: "Plaza Royal Blue",
    local: "Local No. 6",
    province: "Provincia de PANAMÁ",
    corregimiento: "Corregimiento de San Francisco",
    scheduleWeekdays: "Lunes a Viernes: 09:00 am a 06:00 pm",
    scheduleSaturday: "Sábados: 09:00 am a 01:00 pm",
    scheduleSunday: "Domingo y Festivos: Cerrado",
    phoneLandline: "5073928415",
    phoneLandlineFormatted: "+507 392-8415",
    shippingService: "Servientrega",
    shippingDescription: "Única sede con envíos a todo Panamá por Servientrega. Entregas seguras y rápidas a domicilio o sucursal.",
    googleMapsSearchUrl: "https://maps.google.com/?q=Plaza+Royal+Blue+Avenida+Porras+San+Francisco+Panama"
  },
  social: {
    whatsapp: "https://wa.me/50767788375",
    instagram: "https://www.instagram.com/healthgreenworld",
    facebook: "https://www.facebook.com/healthgreenworld",
    youtube: "https://www.youtube.com"
  }
};
