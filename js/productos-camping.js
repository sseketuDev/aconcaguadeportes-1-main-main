/* =============================================================
   Aconcagua Deportes — sección CAMPING / OUTDOOR
   -------------------------------------------------------------
   Fuente: catálogo "26CH-17 Cajas y Bolsos" (Rapala, Ragot, Storm, Blue Fox).

   ⚠️ NOTA DE CATEGORÍA: ese catálogo es de ALMACENAMIENTO DE PESCA.
   Aquí incluí SOLO los artículos que también sirven para camping/outdoor
   (mochilas, bolsos de transporte y artículos impermeables de Rapala y Ragot).
   Quedaron FUERA, por ser de pesca pura: bandejas Tackle Tray (RTT),
   cajas/maletas Storm, estuches de moscas Blue Fox, racks de caña y señuelos.
   Esos van mejor en una subsección Pesca → "Cajas y Bolsos".

   PRECIOS: el catálogo no trae precios → null → muestra "Consultar precio".
   IMÁGENES: uso el Model No. como nombre de archivo .webp en Cloudinary.
   Súbelas con ese nombre o pásame la lista de Dropbox y la ajusto.
   ============================================================= */

const campingData = [
  /* ---------------------- MOCHILAS ---------------------- */
  {
    id: 1,
    name: "Rapala CountDown Backpack",
    brand: "Rapala",
    category: "Mochilas",
    price: null,
    condition: "new",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkAhkrTSgBMyM9DhU1n6mA_cFElIuUUK9Uh1-ndQF3N-3NXSS1JNb1M6D6UkX",
    description: "Mochila técnica 46x30x13 cm. Correas acolchadas de malla 3D con cinturón pectoral, respaldo ventilado, bolsillo expandible para botella y correas ajustables para transporte. Cierres inoxidables."
  },
  {
    id: 2,
    name: "Rapala Urban Back Bag 25L",
    brand: "Rapala",
    category: "Mochilas",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0nWYmW0SFr5nSHJDKL1zOmeMZiCJGVAhVgI6RL2wEA88KT_YGbxSanEYm2Fyq",
    description: "Mochila multiuso de 25 L (40x32x20 cm), color Digi-camo/Negro. Bolsillo acolchado para notebook 14” o vejiga de hidratación 2L, respaldo ventilado malla 3D y cinturón de cadera desmontable."
  },
  {
    id: 3,
    name: "Rapala Mochila Combo 3 en 1",
    brand: "Rapala",
    category: "Mochilas",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdXbJrj8OqBxjDKePTvbg6eXy9RcflZwniuX4lV1LzcWr7ovYHbMPg64xdjcHY",
    description: "Mochila + bolso combinados (31x67x26 cm), color Verde/Negro. Espalda acolchada, base reforzada e impermeable, funda anti-lluvia y separable para usar como mochila de diario."
  },

  /* ---------------------- BOLSOS ---------------------- */
  {
    id: 4,
    name: "Rapala CountDown Sling Bag",
    brand: "Rapala",
    category: "Bolsos",
    price: null,
    condition: "new",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy4dcUyCJ2SZ0JFwMqlUVXLRIcDONFpix0YjpbdGDl7W3g0BXv3oxyrImPdzZM",
    description: "Bolso bandolera de acceso rápido manos libres (24x42x13 cm). Correa acolchada malla 3D, bolsillo con cierre para móvil, respaldo ventilado y bolsillo expandible para botella. Cierres inoxidables."
  },
  {
    id: 5,
    name: "Rapala CountDown Hip Bag",
    brand: "Rapala",
    category: "Bolsos",
    price: null,
    condition: "new",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzqVGXqXGa_dlAhL-syLBCU5KQyrzv04IPS1u5zqlYkMOijL4voF-e4yb&s=10https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKut1eRLBNlvEzMd8paam-W1ikmr0HyuMxRYju69suth2_sk-Iu9LcgAXl&s=10",
    description: "Riñonera de cadera (32x18x12 cm) ligera y ágil. Correa acolchada ajustable con respaldo de malla 3D, bolsillos internos y laterales. Cierres inoxidables."
  },
  {
    id: 6,
    name: "Rapala Urban Sling Bag",
    brand: "Rapala",
    category: "Bolsos",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKut1eRLBNlvEzMd8paam-W1ikmr0HyuMxRYju69suth2_sk-Iu9LcgAXl&s=10",
    description: "Cangurera con asas ajustables (40x28x14 cm), Digi-camo/Negro. Bolsillo trasero acolchado para tablet 10”, bolsillo rígido EVA para lentes y panel posterior ventilado malla 3D."
  },

  /* -------------------- IMPERMEABLES -------------------- */
  {
    id: 7,
    name: "Ragot Dry Bag Waterproof 30L",
    brand: "Ragot",
    category: "Impermeables",
    price: null,
    condition: "new",
    image: "https://dojiw2m9tvv09.cloudfront.net/51416/product/bolso-seco-ragot-30-litros-dry-bag-waterproof2180.jpg",
    description: "Bolsa 100% impermeable de 30 L con costuras termoselladas y cierre enrollable con hebilla. Ideal para ropa, comida o electrónica. Incluye correa para el hombro."
  },
  {
    id: 8,
    name: "Ragot Dry Bag Waterproof 10L",
    brand: "Ragot",
    category: "Impermeables",
    price: null,
    condition: "new",
    image: "https://dojiw2m9tvv09.cloudfront.net/51416/product/bolso-seco-ragot-30-litros-dry-bag-waterproof2180.jpg"
  },
  {
    id: 9,
    name: "Ragot Bakkan Waterproof 25L",
    brand: "Ragot",
    category: "Impermeables",
    price: null,
    condition: "new",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDostH2EZAHPC_u6q1gc8g7O_X5rCeotSi8UZ08F7XJ5ZNkQZ72vKMAb_i&s=10",
    description: "Bakkan multiuso impermeable de 25 L (26x25x41 cm) con tapa con cremallera y fondo estanco. Sirve como contenedor, cubo o estanque. Asas reforzadas y correa de transporte."
  },
  {
    id: 10,
    name: "Rapala Hydro Premium Tackle Bag",
    brand: "Rapala",
    category: "Impermeables",
    price: null,
    condition: "new",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRTiJ4Wgsw6VBpxt0PXyBtMLy0_SCX1idog98WWkzF662PQm4J-wzSDJJItJO0P",
    description: "Bolso totalmente impermeable (40x26x30 cm) en PVC de 1,5 mm, fondo rígido reforzado y cremallera 100% resistente al óxido. Tapa rígida que funciona como mesa. Correa desmontable."
  },
  {
    id: 11,
    name: "Rapala Hydro Tackle Box XL",
    brand: "Rapala",
    category: "Impermeables",
    price: null,
    condition: "new",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAMSeSr59-OfMo17Wephhct8OSxm4KhXCiVgw49FbBaROtPae2bst5gJZTaUE6",
    description: "Caja impermeable XL (24x17,5x13 cm) en PVC de 1 mm, fondo reforzado, tapa transparente, asa plegable y cremallera resistente al óxido. Mantiene el equipo seco y ordenado."
  }
];
