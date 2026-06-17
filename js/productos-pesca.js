/* =============================================================
   Aconcagua Deportes — Sección PESCA (Cañas)
   -------------------------------------------------------------
   Fuente: catálogo "CH-010 Cañas CH 2026" (Okuma, Rapala,
   Williamson, Blue Fox, 13 Fishing).

   NOTAS IMPORTANTES (leer antes de publicar):
   1) PRECIOS: el catálogo NO trae precios, por eso van en `null`.
      La tarjeta muestra "Consultar precio" cuando price === null.
      Reemplaza null por el valor en pesos cuando lo tengas, ej: 75990
   2) IMÁGENES: como aún no me pasaste la lista de archivos de la
      carpeta Dropbox de Pesca, usé el CÓDIGO del modelo como nombre
      de archivo .webp (ej: 11OKHSXS902M.webp). Debes:
        - subir cada imagen a Cloudinary con ESE nombre, o
        - pasarme la lista real de Dropbox y la actualizo.
      Mientras no exista la imagen, la tarjeta muestra un
      placeholder con la marca (no se rompe el layout).
   3) condition: "new" | "popular" | "sale".
      Dejé solo "new" (modelos 2026 / NUEVO) y "popular".
      Usa "sale" cuando pongas un modelo en oferta.
   ============================================================= */

const fishingData = [
  /* ---------------------- OKUMA ---------------------- */
  {
    id: 1,
    name: "Okuma Helios SX 902M",
    brand: "Okuma",
    category: "Spinning",
    price: null,
    condition: "new",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHwqUvSDWwSyib-gbb-CpXeJM_kwAJKHyGOFv4AaG7_nE6v949lrdShrRmmN_0",
    description: "Caña spinning premium en carbono Toray 30T, 274 cm, 2 tramos, casting 15-45 g, acción rápida. Ultrasensible y liviana, ideal para detectar el ataque más sutil."
  },
  {
    id: 2,
    name: "Okuma Epixor 632UL",
    brand: "Okuma",
    category: "Ultraligera",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZ7u1Sh044ShAS4P1xqZZgZ1YIfzxJVI2K9C73zoAffy8f_c2ZPuxxFgXicFMx",
    description: "Ultraligera de carbono 30/36T, 190 cm, casting 1-8 g, 78 g. Mango de corcho AAA y pasahilos SeaGuide XO. Pensada para trucha con señuelos finos."
  },
  {
    id: 3,
    name: "Okuma Ceymar SW 902MH",
    brand: "Okuma",
    category: "Surfcasting",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZ7u1Sh044ShAS4P1xqZZgZ1YIfzxJVI2K9C73zoAffy8f_c2ZPuxxFgXicFMx",
    description: "Spinning de agua salada, 274 cm, lure 14-42 g, carbono de alto módulo y componentes Fuji. Una todo terreno para las costas de Chile."
  },
  {
    id: 4,
    name: "Okuma Cascade 70",
    brand: "Okuma",
    category: "Spinning",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3G3_8HHGxnv-Pi3KWPUQkvnBZLsqeLM6nzGLYqhHtnpWLFSkGAJvVZc&s=10",
    description: "Caña básica y versátil, 210 cm, lure 5-20 g, cuadro Fuji. Ideal para quien parte en la pesca de laguna o muelle sin gastar de más."
  },
  {
    id: 5,
    name: "Okuma Safina UL 612UL",
    brand: "Okuma",
    category: "Ultraligera",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXxbMsXYNEo3jBc_S0A_Mstr9fbuCXn9oNarRZPvuCg526IIu49HYjZJm&s=10",
    description: "Grafito de alta resistencia, 185 cm, 80 g, rango de lanzamiento 1-7 g. La compañera ideal para iniciarse en la pesca ultraligera."
  },
  {
    id: 6,
    name: "Okuma Bullrod 270MH",
    brand: "Okuma",
    category: "Surfcasting",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfUxc27jMqdnKErc2yNYjIXLZn-Tu0OqiwCXRydnFw83zUOAfhsoa4Uw6&s=10",
    description: "Multipropósito de 270 cm, casting 20-50 g, mango de corcho. Desde pequeños esteros hasta pesca de surf en las costas de Chile."
  },
  {
    id: 7,
    name: "Okuma Kostera SP 902MH",
    brand: "Okuma",
    category: "Surfcasting",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9EGG4nM3ofNyIk4VIq3kA3FnSHLPDo7Nhf10I4p55YqHuiN8vSLXgJ5o&s=10",
    description: "Caña de agua salada de 274 cm, línea 15-30 lb, acción Medium Heavy, 250 g. Mango de EVA antideslizante para largas jornadas en el mar."
  },
  {
    id: 8,
    name: "Okuma Competition 702M",
    brand: "Okuma",
    category: "Spinning",
    price: null,
    condition: "new",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcMa6CVK_8K5np1zNsRGBdV9AkW-HXY0CP09s-rlSFoTuYGzcurxiQtw&s=10",
    description: "Carbono 24T, 213 cm, lure 10-30 g, acción rápida. Diseño de culata con agarre dividido, empuñaduras de EVA y guías de acero inoxidable."
  },

  /* ---------------------- RAPALA ---------------------- */
  {
    id: 9,
    name: "Rapala Guanaqueros EVO 300XH",
    brand: "Rapala",
    category: "Surfcasting",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTklnWdMgHOZIuVna4llN9z87UXy7ZHNvGs9VvOCORY-4XQilaxmxE9rjrweSui",
    description: "100% carbono, 300 cm, acción 80-150 g, componentes Fuji. Liviana y firme para corvina, lenguado y lances con plomo en la costa."
  },
  {
    id: 10,
    name: "Rapala Humboldt 300H",
    brand: "Rapala",
    category: "Baitcasting",
    price: null,
    condition: "popular",
    image: "https://res.cloudinary.com/dbh4dfwol/image/upload/11RAHUM300H.webp",
    description: "Caña de baitcasting diseñada para las costas chilenas, 300 cm, acción 20-80 g, grafito 30 ton y componentes Fuji. Ideal para lenguados y depredadores de costa."
  },
  {
    id: 11,
    name: "Rapala Trout 210UL",
    brand: "Rapala",
    category: "Ultraligera",
    price: null,
    condition: "popular",
    image: "https://res.cloudinary.com/dbh4dfwol/image/upload/11RATR210XUL.webp",
    description: "Ultraligera de 210 cm, acción 1.5-5 g, 110 g. Acción parabólica que protege líneas finas. Especial para trucha con señuelos pequeños."
  },
  {
    id: 12,
    name: "Rapala Shadow 270MH",
    brand: "Rapala",
    category: "Spinning",
    price: null,
    condition: "popular",
    image: "https://res.cloudinary.com/dbh4dfwol/image/upload/11RASH270MH.webp",
    description: "Carbono de alto módulo, 270 cm, acción 10-35 g, 145 g, pasadores Fuji. Muy sensible para señuelos livianos en lagunas, lagos y muelles."
  },
  {
    id: 13,
    name: "Rapala Volkano 300XH",
    brand: "Rapala",
    category: "Surfcasting",
    price: null,
    condition: "popular",
    image: "https://res.cloudinary.com/dbh4dfwol/image/upload/11RAVOL300XH.webp",
    description: "Caña de costa, 300 cm, acción 50-100 g, pasadores Fuji y mango de corcho. Excelente lance de señuelos en zonas costeras."
  },
  {
    id: 14,
    name: "Rapala Spin Xtreme SW 330XH",
    brand: "Rapala",
    category: "Jigging",
    price: null,
    condition: "new",
    image: "https://assets.altaventa.cl/sherpa/357552b8-1314-11ef-a59e-3f7c8389386d.jpg",
    description: "Spinning de agua salada de gran potencia, 330 cm, acción 40-80 g, componentes Fuji. Ideal para pesca con jig desde orilla en escenarios complejos."
  },
  {
    id: 15,
    name: "Rapala Royal King 210H",
    brand: "Rapala",
    category: "Spinning",
    price: null,
    condition: "popular",
    image: "https://res.cloudinary.com/dbh4dfwol/image/upload/11RARK210H.webp",
    description: "Diseñada para la pesca del Chinook, 210 cm, acción 50-150 g. Construcción en carbono, pasador cerámico y mango de corcho."
  },
  {
    id: 16,
    name: "Rapala Corux 270H",
    brand: "Rapala",
    category: "Spinning",
    price: null,
    condition: "popular",
    image: "https://res.cloudinary.com/dbh4dfwol/image/upload/11RACOR270H.webp",
    description: "Carbono con pasador cerámico y mango de corcho, 270 cm, acción 20-50 g. Especialmente diseñada para señuelos Rapala y Storm."
  },

  /* -------------------- WILLIAMSON -------------------- */
  {
    id: 17,
    name: "Williamson Solid Carbon SJ 63BJ",
    brand: "Williamson",
    category: "Jigging",
    price: null,
    condition: "new",
    image: "https://dojiw2m9tvv09.cloudfront.net/51416/product/cana-williamson-botera-jigging-vertical-carbon-solido-slow-200g9539.jpg",
    description: "NUEVO 2026. Blank completamente sólido SC-carbon 2.0 con fibra IMAX-6, 191 cm, acción 20-30 lbs. Pasahilos Fuji 'O' marco K y portacarrete Fuji TDPS. Slow jigging."
  },
  {
    id: 18,
    name: "Williamson Pelamis 2030",
    brand: "Williamson",
    category: "Trolling",
    price: null,
    condition: "new",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-pzSZOWcrvJsmbwShOvQpuxUgg7f6V90_onGX1WWpg&s",
    description: "Caña de trolling de 173 cm, acción 20-30 lbs, portacarrete y cardán de aluminio. Acción equilibrada y potente para terminar la pelea rápido."
  },

  /* ---------------------- BLUE FOX ---------------------- */
  {
    id: 19,
    name: "Blue Fox Tolten 210",
    brand: "Blue Fox",
    category: "Spinning",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQQIp0P5lJ_MuKspgwQh9cymePSBoXX-1s6AmcFJZnY5x1aypgQPVvpY&s=10",
    description: "Fibra compuesta reforzada, 210 cm, acción 20-40 g, pasadores cerámicos. Caña reforzada para pescas exigentes de trucha en lagunas y lagos."
  },
  {
    id: 20,
    name: "Blue Fox Ranco 210H",
    brand: "Blue Fox",
    category: "Spinning",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MyE72gx09OrDP9IWZMEJFzpXkeGU8xm0RyBaTpC3kvhlWkV2WEZyj_8&s=10",
    description: "Fibra compuesta, acción Heavy, 210 cm, 30-60 g, pasadores cerámicos. Muy sensible para señuelos de trucha en laguna, lago y muelle."
  },
  {
    id: 21,
    name: "Blue Fox Itata 210MH",
    brand: "Blue Fox",
    category: "Spinning",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9rv-rfjtW_n5Un5_KX19tNkX_Ctajhr-k66Xc4w-CbuQ0LK8hNKr5Gt9&s=10",
    description: "Fibra compuesta, acción Medium Heavy, 210 cm, 20-40 g, pasadores cerámicos. Sensible y versátil para señuelos de trucha."
  },
  {
    id: 22,
    name: "Blue Fox Fresh Telescópica 210",
    brand: "Blue Fox",
    category: "Spinning",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MyE72gx09OrDP9IWZMEJFzpXkeGU8xm0RyBaTpC3kvhlWkV2WEZyj_8&s=10",
    description: "Telescópica de 210 cm, 5 tramos, acción 15-40 g, 150 g. Cabe en el bolso de pesca: perfecta para lugares de difícil acceso."
  },

  /* --------------------- 13 FISHING --------------------- */
  {
    id: 23,
    name: "13 Fishing Fate Black 60L",
    brand: "13 Fishing",
    category: "Spinning",
    price: null,
    condition: "new",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTO-M53AEPunZLZBjtR_d9IWKHSy7myyJyfGCNz8UmE77a7kPvGnoQHYG8jkmD7",
    description: "Blank de grafito PVG30T, 183 cm, 2 tramos, 125 g, potencia Light, acción rápida (3-15 g). Portacarrete Evolve Soft Touch y guías Alconite. Sensibilidad de élite."
  },
  {
    id: 24,
    name: "13 Fishing Defy Black 90H",
    brand: "13 Fishing",
    category: "Spinning",
    price: null,
    condition: "popular",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ9KvzZlCHtWo4W1czESME8M8fV3FOBSd3M4lxRCLPCBSdbDYvPD-9jP1ATNQ_r",
    description: "Blank de grafito PVG24T, 274 cm, 2 tramos, 200 g, potencia Heavy, casting 20-80 g. Mango de agarre dividido EVA. Rendimiento más allá de lo esperado."
  }
];
