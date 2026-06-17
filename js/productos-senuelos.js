/* Aconcagua Deportes — senuelos.js */
/* Agrega aquí los productos con el mismo formato que productos-caza.js */
/* Campos: id, name, brand, category, price, condition, image, description */
/*
 * NOTA SOBRE LAS IMÁGENES:
 * El campo "image" usa una ruta local con el código del modelo como nombre de archivo.
 * Debes descargar cada foto del catálogo/distribuidor oficial y guardarla en
 * "img/imagenes senuelos/" con ese mismo nombre (o reemplazar la ruta por tu URL de Cloudinary).
 * Fuentes oficiales: https://www.rapala.cl  ·  https://www.bluefox.com  ·  catálogos CH26-001 y CH26-003.
 */
const senuelosData = [

  /* ============================ RAPALA (10 más importantes) ============================ */

  { id: 1, name: "Rapala Original Floater 07", brand: "Rapala", category: "Minnow flotante", price: null, condition: "popular",
    image: "https://i.tackledirect.com/images/img600/rapalaf07.jpg",
    description: "El señuelo que lo empezó todo (desde 1936). Cuerpo de balsa, flotante, 7 cm / 4 g, nada a 0,9–1,5 m con la clásica acción de pez herido. Casting y trolling. Cód. 14RAF07." },

  { id: 2, name: "Rapala CountDown 07", brand: "Rapala", category: "Minnow hundido", price: null, condition: "popular",
    image: "https://blueyshuntingandfishing.com.au/cdn/shop/files/022677279916_1_1200x1084.jpg?v=1734397385",
    description: "Clásico hundido de balsa con conteo de profundidad. 7 cm / 8 g, trabaja entre 1,5–2,4 m. Permite pescar a profundidad controlada en casting y trolling. Cód. 14RACD07." },

  { id: 3, name: "Rapala Shad Rap 07", brand: "Rapala", category: "Crankbait", price: null, condition: "popular",
    image: "https://cdn11.bigcommerce.com/s-f7519/images/stencil/1280x1280/products/1656/14818/SR_BOF__79184.1587580688.jpg?c=2",
    description: "Uno de los crankbaits más legendarios de la historia. Cuerpo de balsa con perfil de alevín, 7 cm / 8 g, profundidad 1,5–3,3 m. Acción sutil ideal para agua dulce. Cód. 14RASR07." },

  { id: 4, name: "Rapala X-Rap 10", brand: "Rapala", category: "Minnow suspending", price: null, condition: "popular",
    image: "https://www.raubfisch24.de/wp-content/uploads/2020/07/rapala-shadow-rap-11-silver.jpg",
    description: "Jerkbait suspending insignia con lámina holográfica y cola de pelo 3D. 10 cm / 13 g, profundidad 1,2–1,8 m. Acción agresiva de arranque y pausa. Cód. 14RAXR10." },

  { id: 5, name: "Rapala Shadow Rap 11", brand: "Rapala", category: "Minnow suspending", price: null, condition: "popular",
    image: "https://www.anglerswarehouse.com.au/assets/full/RAP13MAXRAP.png?20240730140435",
    description: "Jerkbait de giro de 180° que se mantiene casi inmóvil en la pausa. 11 cm / 13 g, profundidad 0,6–1,2 m. Imita un pez agonizando para provocar ataques. Cód. 14RASDR11." },

  { id: 6, name: "Rapala MaxRap 13", brand: "Rapala", category: "Minnow", price: null, condition: "new",
    image: "https://cdn11.bigcommerce.com/s-f7519/images/stencil/1280x1280/products/1331/9429/RAPJ07G11__97509.1560458019.png?c=2",
    description: "Minnow de lance largo con acción rápida y destello holográfico. 13 cm / 15 g, profundidad 0,3–0,9 m. Excelente para cubrir agua y buscar depredadores activos. Cód. 14RAMXR13." },

  { id: 7, name: "Rapala Jointed 09", brand: "Rapala", category: "Minnow articulado", price: null, condition: "popular",
    image: "https://down-my.img.susercontent.com/file/c00ed547342afc3a1170da674cf33097",
    description: "Versión articulada del Original con doble cuerpo de balsa para una acción más amplia y nadadora. 9 cm / 7 g, profundidad 1,5–2,1 m. Casting y trolling. Cód. 14RAJ09." },

  { id: 8, name: "Rapala CountDown Magnum 14", brand: "Rapala", category: "Trolling agua salada", price: null, condition: "popular",
    image: "https://owp.klarna.com/product/1280x1280/3184064823/Rapala-Sarda-18-Wahoo-UV-Lure.jpg?ph=true",
    description: "El cuerpo duro de abachi N°1 del mundo para curricán de mar. 14 cm / 36 g, profundidad 4,5–5,4 m. Diseñado para atún, dorado y peces de caza mayor. Cód. 14RACDMAG14." },

  { id: 9, name: "Rapala Sarda 18", brand: "Rapala", category: "Trolling agua salada", price: null, condition: "new",
    image: "ihttps://www.jacquet-peche.com/63506-large_default/leurre-rapala-countdown-magnum-elite-145cm-amhpu.jpg",
    description: "Novedad 2026. Señuelo tipo torpedo con marco de acero inoxidable de una pieza para curricán de alta velocidad (hasta 14 nudos). 18 cm / 200 g, hundido, anzuelos simples VMC TechSet. Cód. 14RASD18." },

  { id: 10, name: "Rapala CountDown Magnum Elite 145", brand: "Rapala", category: "Trolling agua salada", price: null, condition: "new",
    image: "https://files.ekmcdn.com/fishers/images/blue-fox-vibrax-original-fluo-spinners-model-3-silver-fluo-red-23365-p.jpg?w=1000&h=1000&v=F42870CF-7880-4346-BEF1-93EFA79DFEC0",
    description: "Novedad 2026. Evolución del Countdown Magnum con cuerpo de abachi reforzado, labio de acero inoxidable y anzuelos VMC serie 75. 14,5 cm / 41 g, profundidad 4,5–5,4 m, hasta 10 nudos. Cód. 14RACDMAGE145." },

  /* ============================ BLUE FOX (10 más importantes) ============================ */

  { id: 11, name: "Blue Fox Original Vibrax 3", brand: "Blue Fox", category: "Cucharilla giratoria", price: null, condition: "popular",
    image: "https://nauticafermar.cl/wp-content/uploads/2025/04/236d1385-3237-11ef-a5a5-3f7c8389386d.jpg",
    description: "La cucharilla giratoria insignia de Blue Fox. Cuerpo patentado de 2 piezas que emite vibraciones de baja frecuencia y no retuerce el hilo. Talla 3 / 8 g, aleta 45° (0,6–1,2 m). Anzuelo VMC. Cód. 14RVBF3." },

  { id: 12, name: "Blue Fox Vibrax Gilded 2", brand: "Blue Fox", category: "Cucharilla giratoria", price: null, condition: "new",
    image: "https://summits.co.uk/cdn/shop/files/Blue_Fox_Vibrax_Shad_Fishing_Spinner_Lure_Silver_Shad.jpg?v=1760691547&width=1001&height=1001",
    description: "Novedad 2026. Vibrax con cuerpo de latón mecanizado chapado en plata o cobre y dibujos impresos de alta definición. Talla 2 / 6 g, hoja de profundidad media (0,6–1,2 m). Cód. 14RVBFGD2." },

  { id: 13, name: "Blue Fox Vibrax Shad 3", brand: "Blue Fox", category: "Cucharilla giratoria", price: null, condition: "popular",
    image: "https://hunterfishing.cl/wp-content/uploads/2023/02/Spinner-Vibrax-Fluorescent-RT-Blue-Fox-1024x1024.jpg",
    description: "Vibrax con cuerpo central fundido en zinc, cromado y acabado láser holográfico que imita peces pasto. Talla 3 / 8 g, aleta 45° (0,6–1,2 m). Cód. 14RVBFSD3." },

  { id: 14, name: "Blue Fox Vibrax Foxtail 3", brand: "Blue Fox", category: "Cucharilla giratoria", price: null, condition: "popular",
    image: "https://hunterfishing.cl/wp-content/uploads/2023/06/Spinner-Blue-Fox-GYR-1536x1536.jpg",
    description: "Vibrax con cola de pelo (bucktail) que añade volumen y movimiento en el agua. Talla 3 / 8 g. El pelo aporta atracción extra en la recuperación y la pausa. Cód. 14RVBFX3." },

  { id: 15, name: "Blue Fox Vibrax Fluorescent 3", brand: "Blue Fox", category: "Cucharilla giratoria", price: null, condition: "popular",
    image: "https://hunterfishing.cl/wp-content/uploads/2023/02/Spinner-Vibrax-Hot-Pepper-SYB-Blue-Fox.jpg",
    description: "Vibrax en colores fluorescentes de alta visibilidad para aguas turbias o poca luz. Talla 3 / 8 g, sistema de 2 piezas antitorsión y anzuelo VMC. Cód. 14RVBFF3." },

  { id: 16, name: "Blue Fox Vibrax Hot Pepper 3", brand: "Blue Fox", category: "Cucharilla giratoria", price: null, condition: "popular",
    image: "https://www.gonzalogalan.com.ar/wp-content/uploads/2016/09/Blue-fox-salmon-600x600.jpg",
    description: "Vibrax con patrón de puntos 'Hot Pepper' de gran contraste, muy efectivo para trucha y salmón. Talla 3 / 8 g, aleta 45° (0,6–1,2 m). Cód. 14RVBFS3." },

  { id: 17, name: "Blue Fox Vibrax UV 3", brand: "Blue Fox", category: "Cucharilla giratoria", price: null, condition: "new",
    image: "https://i.ebayimg.com/images/g/0lAAAOSwRA1keeCd/s-l1600.jpg",
    description: "Vibrax con acabado UV Bright que refleja más luz y aumenta la visibilidad en profundidad. Talla 3 / 8 g, cuerpo patentado de 2 piezas antitorsión. Cód. 14RVBFU3." },

  { id: 18, name: "Blue Fox Salmon Super Vibrax 6", brand: "Blue Fox", category: "Cucharilla giratoria", price: null, condition: "popular",
    image: "data:image/webp;base64,UklGRuwJAABXRUJQVlA4IOAJAABQLACdASqjAI8APkUejESioaEUCzTQKAREsbdwufVp+iOZndP8txMHCfi36TzivMJ/SDpY+YTzsPSD6A/8y6lX0HfLS/dX4Yf2c/cf2u9WPZz31+Kr2JLaOD+p77bhr4ATt+0CgPpNbLMoB/pb0Ev93yxfTH/p9wj+Y/2P/seuN69P2m9jv9oCf2/EHW5rf1Ef0/CkFvQGaK2OkSUXos69m5T71MnMlkQq0XcEa6YPa84ww8As7++PC14QDb5OnJXtRZwEukgGU2kpIzVdGpW32IcSwXteWuQ/ip9NmipOf2MNGr/yJJb6e87lrCc1UjMyIu8b3puwZNEUI311Op97gNe62GOJb7bGlZAzmPGTJQ70PXBIBCRzThXGcLvxZ7kggMHN1GokrHzxPiR2XE/3hTyv0cYQJT5Tw+sTLWIi+4WtjrLE914ezeoaCbYzAyVz/I6RMJOvx4bdb/7baWKRQBF73NFYDevzoNAA/v/izHrMFkonK97q/ITu4cfq0LCBH/EojMQp3anvG+GNqTOT467OHuclBXiRdwn3/+oaoowYD4i+yInCS80qEhvqeL2CJlw+xTgOE53R0dY6ya+iMI7MyEcSAOvfvqvMXuWy8lnEZviv4irfDDd7RyO8wMNnRfvsQM1Z3qVzqwlA+rVbUKheBg2NWzkXzC6v9RM2UmexJ5VX3nuBvusEXxLDWnCKlgZpvPCnVLuu0kwsm1hcoEoHrWPdnHjK3mzgAAa6PXqpZ1SQpuDa7hhuQwTX2HyUPYzhd3dwFOtrlsXXm4vEb9TMdUCjzOQ0HEDf3Kv+r2Lyabyatykme0BqEAlZlJZtXu2NNFW5HXpSCZGk+qOzthUDperkIqNQXvcH/+7ryHmsvDSiGEfXMw7lT5nMxxodtj2P4vkyW3hz+PSwVE0+4jc2kZC3Pxb5aefE6hkajzr0icSwdIul7776cw+t7pDjTBWfK3V/JxB9/Hr8Rc9CDseodzzAxQOYpXJlmSlK09r/T4FMS9TWf/NzOJir4TYicLEBfBOKQALoBre4V0FLlXvKbBSPqTFv0VeTh7JW+AE0Mrd+d/D/98Sj0XdbqSl+A5hiFC4l4EGhjxOWmJVCpsdZg//9898x8sVyx0RMnmUpzi7NcZoEdzTa1GLMOsicl2NO44XQ2/HvvjWbujmWbU/gZ0n0EVIVLdrfkJZbpPyAjCpAii5mo6jiPHpkbMj3vbeSfmgCAgzH82iyQRHxglWdSiFtdUa7jzCgkeyIUEMgmzPnnUN4GgAjmh5NEoatdbj2+cOi+PiM+ujFuaXWzb6ImhJzm+lqbSEoUE3QHcfnMfBFNgp4YTrBm/0btubWm6pRfZfXmUtsENGbdohClSKHdlko0fuuQUf2OYs2bhGkOxlQeY+3jK6jfUImq1LXNBphdFrvqIMK+fBrVCZoqjp47ru5vEadQU9wmzF8FX4gnpul96O3tW8EBjcUepZsUl0i/3lDWFsfsWeABmprYCN2Xwuc9LKrIwBN8rlXFmC/mhhdxkd8tc8PYFqAZ7CxoQHQAc6h6zQqLWvLESpO4r9H8AHaz52JkUGNAt5oEBQTuOGo0YiVhgmrLPbuvPcwTp+ABhUCID9zfhyCKpfoiCNb1e77B7cX4xD2Axjr6JTIp0pjM4WHdUvzNmE74VSqzo3+ejf1aU6BCFt7jIwy+s981O2NxiFC60G+zJU8E0Qie/MpFh9yceQIbrANfwn2CAkCiA6xcd+pRpFZwY998IMyMEAxJagBoOK7Z/NYaPTlCWkBStJhFw20Ony+U4jo/CCHJOj0mTUtQKxIiKJAiCmCEzL8Mq723s0STHgBk9EZY6c7wvU5PW+kvM+0T4E3vfi/geRBWGh0j9KIqFpSIk7NUukig39+neoC9Cz8/fCt+Srs94OTX9rVcOU7rcBjbW7Z7Jk99T5sn3HWcmOC9g1AKbeHSqe4AJm86czEQ/Kn5gD1/BUz4SIGwHNrpr6oWV12rr9sr/We8i0dtb+N9m5OVrH9FZbuP7PEtCRkS3WwtsfenVFwZ3nF5be1bcHDrq0KWgZvhCZXhGrGj0QvK+RKmrxETQYOM9q2+Qsd+yYAgFTsaP7GdYefHck1dmKPWJ9imxM9UULANnugpr76lG25C0fe3vGsoRgyPEswz5X/n19tlPHptrCzjSqvLeVa/u+gz/hFQNJX5u7DwNFezSOVJPct+KwUv8qu5/+rdo6GJxXNij7ajrQwMSipxVgh5fwL0yKeRERGvI1B1lyvKC1AiY3PFkJw650F4hWVFK7Pbay3Ky/S2+XRMH6RB2EYE8cf5F3Yrw1Fy1OrvzhBI3FsdgvkUGR95UuD7TUcvxFIRGHxBMpULlVXekadJFVmkSJuHtMY73uNGPNonYtF7REOJJQyvgxgPFFekjJ1BuRHYRdGCmzF2BAN4r+h6TLyLihnhZdWk55MsSjf8LjHpKzjNn6YTbICgMSby7LMbQyWSdTJ0GlzKpjFeGNpKxBsYloQo28b3qM3iCgKyy4EcTRkyct6b01Gt9kjkwI8TjgmMWwuoNUgwWrljuurA6rMj4A6o7ejwrx61JJIGojj72ojqzmmhzYZBdq2az6KJPqe/H41rk3Zztqxfjoe6wAAue4Mpj/vY8IdLM08HoLOjoTBRsVDAPzso/TBe+FuvKDskAIRGhn2vWyeMr5OgNYDR81ZbTQzFNJEjz9XwoEoM4IWb2ZlczL7hRryeePMLBtPQ9Jj5Dho86T6d0xv0yrMHkAuJUX0Al8S3RslvUHCkeVUqBhwT71YuNDI9J64eKzgvu1pWs4hJhH2WjcDHAp4zRGS+W2X7oPUD6rqt2inPZv8cIR/aZQgA6aCzY7Gw6q8Q/ykFDdtE6+mELlwFiOe6Am5vv3N22Fn6XjScRxSmafibdcSsiDskX9b0XUNY+moErpPp62Q7tT9YP6uQmGj8cwuKV4eLh2O5lgUnMVNFFVyDSl3pncoXILeOgydsB9AH6/WBl5SI3s5m92wDmv+F7RJNbnrInGJm08ZPY8d96258/8l/5r+HX68Vx/GpTkrYBWw8YC4P/YjsXNQtjZV3HeaenhJB5Kv3cNukVKJQmBGlQWa1/0EdK5lAURtptzlNMP/qOXoIlsrvSGiwKrYzBADUbEIJOKbsXy7MGttMbiLmVlwmekPlQMA//tj+yf0yIXoMsFZO4S9C2A+vfTb7R7fRJ+acsncTfr2q7xWXxXVbgLcibZOqzduj63xPzWlzPNys+oX1nMLCFa/22WyvdlbaSZAgiU432NwND2cbnk1GnS1eFBXsoYkVaD+GDv5NAngV5Qd4uB5NObUKj/Ts80GRst2FPY4hWkjK9QKcDLvPN+KxLETV/jLYAAAAA==",
    description: "Versión grande para salmón con cuerpo y pala extralargos, aletas de 30° para nadar a 1,2–1,5 m. Talla 6 / 33 g, diseñada para lances largos con equipo ligero. Cód. 14RVBFSASV6." },

  { id: 19, name: "Blue Fox Moresilda 40", brand: "Blue Fox", category: "Cuchara", price: null, condition: "popular",
    image: "https://cdn.ardent-peche.com/73781-large_default/cuiller-ondulante-blue-fox-moresilda-trout-holographic-hd-18g.jpg",
    description: "Cuchara pesada de diseño tradicional noruego para lances largos y corrientes fuertes. 100 mm / 40 g, anzuelo VMC forjado. Gran versatilidad de colores. Cód. 14BFMS40." },

  { id: 20, name: "Blue Fox Møresilda Holographic HD Trout 15", brand: "Blue Fox", category: "Cuchara", price: null, condition: "new",
    image: "img/imagenes senuelos/14RVMSH15H.png",
    description: "Novedad 2026. Cuchara Moresilda con acabado holográfico HD que imita peces pasto reales (diseño noruego original de 1955). 75 mm / 15 g, peso pesado para lances largos. Cód. 14RVMSH15H." }

];