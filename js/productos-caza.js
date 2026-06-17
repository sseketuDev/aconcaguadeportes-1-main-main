/* =============================================================
   Aconcagua Deportes — sección CAZA Y TIRO
   -------------------------------------------------------------
   Fuente: "Catálogo Caza 2026" (TEC HARSEIM).
   Marcas: Norica, Crosman, Benjamin, Magtech, Umarex, Sightmark,
   Firefield, Konus, Led Lenser, Leatherman, Schneide, Core, TEC.

   ⚠️ ALCANCE: incluí lo que la tienda anuncia y se vende abierto
   (rifles de aire, pistolas/revólveres CO2, ópticas, balines/municiones
   de aire, cuchillería y accesorios). NO incluí armas de fuego ni
   cartuchos/balas del catálogo (escopetas Beretta, rifles centerfire,
   municiones metálicas), que son más regulados. Si quieres una sección
   aparte "Armas de fuego (venta bajo permiso)", la armamos.

   PRECIOS: el catálogo no trae precios → null → "Consultar precio".
   IMÁGENES: uso el CÓDIGO TEC como nombre de archivo .webp en Cloudinary.
   Súbelas con ese nombre o pásame la lista de Dropbox y la ajusto.
   ============================================================= */

const huntingData = [
  /* ------------------- RIFLES DE AIRE ------------------- */
  {
    id: 1, name: "Norica Dragon 5.5", brand: "Norica", category: "Rifles de aire",
    price: null, condition: "popular",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1gXghEXZ7DPYmi7dkheGAcmfoMDF1QKs6JPuK-2_llISSaraJciaXLk-DohAc",
    description: "Carabina de resorte, cal. 5.5 mm, 250 m/s, quiebre de cañón. Cañón de acero empavonado, miras de fibra óptica, seguro automático y culatín de goma."
  },
  {
    id: 2, name: "Norica Dead Eye GRS", brand: "Norica", category: "Rifles de aire",
    price: null, condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNeEBK4QAYQ2hbVmBSPPb7o52ZXiLA-jQhmmVjFG_RNUMboH-5YQ9OGc0L&s=10",
    description: "Cal. 5.5 mm, 275 m/s, sistema Nitro Pistón GRS. Culatín con sistema RAS que reduce el culatazo hasta 40%, gatillo ajustable y miras de fibra óptica."
  },
  {
    id: 3, name: "Norica Omnia ZRS", brand: "Norica", category: "Rifles de aire",
    price: null, condition: "new",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH-mrZ9FwYJ62RnL1ZUCdJIcZgOoKj_ODg8ZwP9_bTs62851DpBxOMRM&s=10",
    description: "Carabina sin retroceso (sistema ZRS), cal. 5.5 mm, 275 m/s. Cilindro de aluminio anodizado, carril de 11 mm para láser y visor, ambidiestra. (No incluye mira.)"
  },
  {
    id: 4, name: "Crosman Vantage Plus NP", brand: "Crosman", category: "Rifles de aire",
    price: null, condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_86DTrqcPo-nuXaus45YzjaP4kQRMr-v2WB8We49ABBVdzKLUeWJaOA2&s=10",
    description: "Cal. 5.5 mm, 290 m/s, Nitro Pistón Elite con quiebre de cañón. Incluye mira telescópica 4x32 y supresor de sonido incorporado. Culata sintética Montecarlo."
  },
  {
    id: 5, name: "Crosman Magfire Ultra", brand: "Crosman", category: "Rifles de aire",
    price: null, condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEnVF4PKSL0EHWlzz4lx3KBvzePlNZ-BLNWS0cIr3b9vdpAb7frBPNorR6&s=10",
    description: "Cal. 5.5 mm, 297 m/s, Nitro Pistón Elite, repetidor de 10 tiros. Mira telescópica 3-9x40 AO, riel Picatinny, supresor de sonido y gatillo ajustable."
  },
  {
    id: 6, name: "Benjamin Vaporizer NPE", brand: "Benjamin", category: "Rifles de aire",
    price: null, condition: "popular",
    image: "https://http2.mlstatic.com/D_NQ_NP_603191-MLC107637009652_032026-O.webp",
    description: "Cal. 5.5 mm, 290 m/s, Nitro Pistón Elite con quiebre de cañón. Mira 3-9x40, riel Picatinny, supresor de sonido y gatillo ajustable de 2 posiciones."
  },
  {
    id: 7, name: "Benjamin Armada PCP", brand: "Benjamin", category: "Rifles de aire",
    price: null, condition: "new",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTg9v-3nGLXBDJEfEm4XoNEwjX_qH97C5k53GCcChQmEYPbp2NoIrs_A9QFoiyD",
    description: "PCP cal. 5.5 mm, 305 m/s, bolt action, clip para 10 postones. Mira telescópica 4-16x50, culata removible. Incluye bípode."
  },
  {
    id: 8, name: "Norica NTX35 PCP", brand: "Norica", category: "Rifles de aire",
    price: null, condition: "new",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSa1mP9pkjEYlCqasbYFqKJ1mRqEAP_ajFgdFG_mivD3XpHmhgxnEaI5K9kf37y",
    description: "PCP cal. 5.5 mm con presión regulada, hasta 70 disparos por carga. Cañón con rosca para supresor, culata thumbhole ambidiestra de fibra y gatillo de dos tiempos ajustable."
  },
  {
    id: 9, name: "Magtech Jade", brand: "Magtech", category: "Rifles de aire",
    price: null, condition: "popular",
    image: "https://http2.mlstatic.com/D_NQ_NP_739214-MLC86354652051_062025-O.webp",
    description: "Carabina de resorte de iniciación, cal. 5.5 mm, 213 m/s. Fabricada en resina negra, mira delantera removible de fibra óptica y trasera ajustable."
  },

  /* --------------- PISTOLAS Y REVÓLVERES (CO2) --------------- */
  {
    id: 10, name: "Crosman Vigilante (Revólver CO2)", brand: "Crosman", category: "Pistolas y revólveres",
    price: null, condition: "popular",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVWr_JK2buniu_XfTNfR3Ku7UYKeEPfOLCmiFTLKSpUrU66-J4xTEkXYXWtH3R",
    description: "Revólver CO2 cal. 4.5 mm, acción simple y doble, hasta 142 m/s. Dispara 10 postones o 6 balines, cañón de acero, grip ergonómico y mira trasera ajustable."
  },
  {
    id: 11, name: "Umarex Beretta M92 Full Metal", brand: "Umarex", category: "Pistolas y revólveres",
    price: null, condition: "popular",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnfYv4XS3F3frAsO7CkwLRFEx_6kEwQsoT-PgEeEPX3nkYyI-x38NzFPpiF53f",
    description: "Réplica CO2 cal. 4.5 mm, 95 m/s, mecanismo Blowback, cuerpo full metal. Carro con retroceso, 17 balines. Una de las réplicas más populares para tiro."
  },
  {
    id: 12, name: "Umarex Colt M1911 Balín", brand: "Umarex", category: "Pistolas y revólveres",
    price: null, condition: "popular",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCoJyRNsZJ6nKCZElyz7qlOWg3PygkiHn9bepIa6IxreHSJbqA9NDNT5LcWYSz",
    description: "Réplica CO2 del clásico 1911, cal. 4.5 mm, 120 m/s, semiautomática full metal con Blowback. Capacidad 22 balines."
  },
  {
    id: 13, name: "Umarex CZ 75", brand: "Umarex", category: "Pistolas y revólveres",
    price: null, condition: "popular",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPqWDsE1N75a9yeBCF7QN4ZuE4rwXDUOzeoUstlDx9KQCsI0hDtUjvrnBLetys",
    description: "Réplica CO2 cal. 4.5 mm, 109 m/s, semiautomática completamente metálica con Blowback y carro con retroceso. 17 balines."
  },
  {
    id: 14, name: "Crosman MK45 (CO2 BB)", brand: "Crosman", category: "Pistolas y revólveres",
    price: null, condition: "popular",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQqzxGdg-st1_CyDviBo1Ru8LnHtwOEOOmeResryPGl-BAdShZBzlHZU9Oo7dSt",
    description: "Pistola CO2 semiautomática cal. 4.5 mm, 146 m/s, 20 balines. Cañón de acero, grip deslizante para cargar el CO2 con facilidad y riel Picatinny."
  },

  /* ---------------------- ÓPTICAS ---------------------- */
  {
    id: 15, name: "Sightmark Core 2.0 4-16x", brand: "Sightmark", category: "Ópticas",
    price: null, condition: "popular",
    image: "https://gunsweek.com/sites/default/files/styles/content/public/archive/contents/optics/articles/sightmark-presidio-3-18x50-lr2/Sightmark_Presidio_3-18x50_LR2_14.jpg?itok=XUcFrU42",
    description: "Mira telescópica 4-16x, tubo de 30 mm, retícula HDR2 grabada en segundo plano focal. Robusta y versátil para caza y tiro a distancia media."
  },
  {
    id: 16, name: "Sightmark Presidio 3-18x50", brand: "Sightmark", category: "Ópticas",
    price: null, condition: "new",
    image: "https://images.salsify.com/images/q_auto/c2105b371a046cc9c31c5c3ab4f329d58a00d152/f7d4950b81543516fee4785557739d13861605a6.jpg",
    description: "Mira telescópica 3-18x50, tubo 30 mm, retícula LR2 grabada en primer plano focal. Amplio rango de aumentos para tiro de precisión."
  },
  {
    id: 17, name: "Sightmark Latitude 20-60x80 (Catalejo)", brand: "Sightmark", category: "Ópticas",
    price: null, condition: "new",
    image: "https://academy.scene7.com/is/image/academy/20658001?$pdp-mobile-gallery-ng$",
    description: "Catalejo con zoom 20-60x80, espejo dieléctrico de alta transmisión. Ideal para avistamiento de blancos a larga distancia y observación de fauna."
  },
  {
    id: 18, name: "Firefield RapidStrike 1-6x24", brand: "Firefield", category: "Ópticas",
    price: null, condition: "popular",
    image: "https://www.bhphotovideo.com/images/fb/konus_2256_sporty_10x50_binocular_1095320.jpg",
    description: "Mira LPVO 1-6x24, tubo 30 mm, retícula iluminada grabada tipo círculo. Adquisición rápida del blanco a corta distancia y alcance a media."
  },
  {
    id: 19, name: "Konus Binocular Sportly 10x50", brand: "Konus", category: "Ópticas",
    price: null, condition: "popular",
    image: "https://www.pechechassediscount.com/30771-large_default/monoculaire-konus-konusmall-10x25-if.jpg",
    description: "Binocular 10x50 WA, prismas Porro BK-7, campo amplio. Buena captación de luz para amanecer/atardecer en jornadas de caza y observación."
  },
  {
    id: 20, name: "Konus Monocular KonusSmall 10x25", brand: "Konus", category: "Ópticas",
    price: null, condition: "popular",
    image: "https://www.konus.com/wp-content/uploads/1481540013.1913_bg_1458055648-1024x576.jpg",
    description: "Monocular compacto 10x25, 100 m de campo, solo 60 g. Práctico para llevar en el bolsillo durante salidas al terreno."
  },

  /* ------------------ MUNICIONES / BALINES ------------------ */
  {
    id: 21, name: "Balines Core 14,3 Domed HP 5.5", brand: "Core", category: "Municiones / balines",
    price: null, condition: "popular",
    image: "https://hikingoutdoor.cl/cdn/shop/products/CapturadePantalla2021-12-28ala_s_16.51.24_2048x.png?v=1640721131",
    description: "Balines cal. 5.5 mm, 14,3 gr, tipo Domed Hollowpoint. Lata de 250 unidades. Buen equilibrio entre precisión y poder de impacto."
  },
  {
    id: 22, name: "Balines Core 21 Slug 5.5", brand: "Core", category: "Municiones / balines",
    price: null, condition: "new",
    image: "https://http2.mlstatic.com/D_NQ_NP_903783-MLC82844113592_032025-O.webp",
    description: "Balines tipo Slug cal. 5.5 mm, 21 gr, lata de 250 unidades. Diseño slug para mayor estabilidad y energía en rifles PCP."
  },
  {
    id: 23, name: "Postones TEC Premium 4.5 (Zincados)", brand: "TEC", category: "Municiones / balines",
    price: null, condition: "popular",
    image: "https://http2.mlstatic.com/D_Q_NP_2X_614675-MLC100745191435_122025-T.webp",
    description: "Postones (BB) de acero zincado cal. 4.5 mm. Presentación de 500 unidades. Para pistolas y rifles CO2 de balín."
  },
  {
    id: 24, name: "Postones Crosman Copperhead 4.5", brand: "Crosman", category: "Municiones / balines",
    price: null, condition: "popular",
    image: "https://http2.mlstatic.com/D_NQ_NP_825562-MLC91719175174_092025-O.webp",
    description: "Postones (BB) cobrizados cal. 4.5 mm. Acabado de cobre para reducir la fricción y la oxidación. Compatibles con la mayoría de armas CO2 de balín."
  },

  /* ---------------------- CUCHILLERÍA ---------------------- */
  {
    id: 25, name: "Leatherman Arc", brand: "Leatherman", category: "Cuchillería",
    price: null, condition: "new",
    image: "https://http2.mlstatic.com/D_NQ_NP_959779-MLA81638706630_012025-O.webp",
    description: "Multiherramienta tope de gama con hoja de acero MagnaCut y acceso exterior. Robusta y precisa, respaldada por 25 años de garantía Leatherman."
  },
  {
    id: 26, name: "Leatherman Micra", brand: "Leatherman", category: "Cuchillería",
    price: null, condition: "popular",
    image: "https://http2.mlstatic.com/D_NQ_NP_692730-MLC96641155633_102025-O.webp",
    description: "Multiherramienta de llavero con tijeras como herramienta principal. Compacta y liviana para el día a día. Garantía Leatherman de 25 años."
  },
  {
    id: 27, name: "Schneide Klug (Multiherramienta)", brand: "Schneide", category: "Cuchillería",
    price: null, condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54Rp7TGUGFqye_VNeearcAGMU3i3yuPGpFg&s",
    description: "Multiherramienta con más de 20 funciones: alicates, cuchillo, tijeras, sierra, punzón, llaves hexagonales y cortador intercambiable. Máxima versatilidad en terreno."
  },
  {
    id: 28, name: "Schneide Taucher", brand: "Schneide", category: "Cuchillería",
    price: null, condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplYECZ6unlUzdX7cw2HjIXRCrbSAn7_wPcg&s",
    description: "Cuchillo de 11,5 cm en acero inoxidable y mango ABS, lomo aserrado y skinner. Resistente y multiuso para caza, pesca y outdoor."
  },

  /* ---------------------- ACCESORIOS ---------------------- */
  {
    id: 29, name: "Linterna Táctica Led Lenser TAC 7R", brand: "Led Lenser", category: "Accesorios",
    price: null, condition: "new",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScJMErGRwIUU92k8NGM5fYtjIQcgwRQObHq9qhMT775js0j38f1Ple-GIicXPZRj8aAzFXpHMQsRwxL6oOxmDNQ7CT1TUzIn0wmmHdCPkW39DME21D1Apm",
    description: "Linterna táctica recargable de 3.200 lúmenes, alcance 370 m, autonomía 30 h. Resistencia IP68, interruptor táctico y construcción robusta."
  }
];
