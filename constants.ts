import { Feature, FAQItem } from './types';

export const PRICE = {
  original: 40.00,
  current: 17.39,
  currency: "USD"
};

export const COPY = {
  hero: {
    title: "Baja de peso sin dietas extremas ni prohibiciones absurdas",
    subtitle: "Descubre un sistema realista y sostenible para transformar tu cuerpo entendiendo tu biología, sin sufrir hambre ni volver a empezar de cero.",
    badge: "OFERTA POR TIEMPO LIMITADO"
  },
  problem: {
    title: "¿Te sientes identificado con esto?",
    points: [
      "Has intentado bajar de peso múltiples veces y siempre recuperas los kilos.",
      "Vives con ansiedad por la comida y culpa cada vez que comes algo 'prohibido'.",
      "Crees que el problema eres tú y tu falta de fuerza de voluntad.",
      "Estás cansado de contar calorías y comer desabrido sin ver resultados duraderos."
    ]
  },
  solution: {
    title: "Por qué esta guía es diferente a todo lo que has probado",
    description: "No es una dieta más. Es un manual de instrucciones para tu cuerpo. Dejas de luchar contra tu biología y empiezas a trabajar con ella.",
    features: [
      { title: "Adiós al 'Todo o Nada'", description: "Aprende a tener flexibilidad sin perder el progreso. Una comida no arruina tu semana." },
      { title: "Entiende tu Hambre", description: "Distingue entre hambre física y emocional para dejar de comer por ansiedad." },
      { title: "Sin Alimentos Prohibidos", description: "No tienes que eliminar carbohidratos ni grasas. Aprende a comer de todo con inteligencia." },
      { title: "Descanso Estratégico", description: "Descubre cómo el sueño y el estrés afectan tu peso más que las calorías." }
    ] as Feature[]
  },
  content: {
    title: "Lo que incluye exactamente esta guía",
    items: [
      "PARTE I: Entender el problema real y por qué las dietas fallan.",
      "PARTE II: Biología básica: Metabolismo, insulina y saciedad explicados simple.",
      "PARTE III: Alimentación sin dieta: Cómo armar platos saciantes y deliciosos.",
      "PARTE IV: Movimiento inteligente: Ejercicio que disfrutas vs. ejercicio como castigo.",
      "PARTE V: Factores invisibles: Estrés, sueño y su impacto directo en la grasa.",
      "PARTE VI: Hábitos y entorno: Cómo hackear tu cocina y rutina para ganar fácil.",
      "PARTE VII: Cómo superar el estancamiento y mantener el peso para siempre."
    ]
  },
  faq: [
    {
      question: "¿Es seguro el pago?",
      answer: "100% seguro. Utilizamos la plataforma Hotmart, líder mundial en productos digitales, que protege tus datos con encriptación de grado bancario."
    },
    {
      question: "¿Recibiré el libro físico?",
      answer: "No, es un producto 100% digital (eBook en PDF). Esto nos permite mantener el precio bajo y darté acceso inmediato apenas completes la compra. Podrás leerlo en tu celular, tablet o computadora."
    },
    {
      question: "¿Sirve si tengo poco tiempo?",
      answer: "Absolutamente. El sistema se basa en pequeños hábitos y en optimizar tu entorno, no en pasar horas cocinando o en el gimnasio."
    },
    {
      question: "¿Es una dieta Keto o Ayuno Intermitente?",
      answer: "No. No nos casamos con ninguna 'moda'. Te enseñamos principios nutricionales sólidos que funcionan independientemente de las etiquetas."
    },
    {
      question: "¿Qué pasa si no me funciona?",
      answer: "Tienes una garantía de satisfacción respaldada por Hotmart. Si el contenido no cumple tus expectativas, puedes solicitar la devolución según los términos de la plataforma."
    }
  ] as FAQItem[]
};