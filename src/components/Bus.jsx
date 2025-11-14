import LogoMudan from '../assets/images/mudanLogo.png';
import LogoAsiastar from '../assets/images/asiastarLogo.png';

import { Js6108IMGS } from '../assets/images/asiastarImg/js6108/Js6108IMGS';
import { Js6108ghaIMGS } from '../assets/images/asiastarImg/js6108gha/Js6108ghaIMGS';
import { Js6181ghbevIMGS } from '../assets/images/asiastarImg/js6181ghbev/Js6181ghbevIMGS';
import { KinkongIMGS } from '../assets/images/asiastarImg/kingkong/KinkongIMGS';  
import { Ybl6110hIMGS } from '../assets/images/asiastarImg/ybl6110h/Ybl6110hIMGS';
import { Ybl6119hbevIMGS } from '../assets/images/asiastarImg/ybl6119hbev/Ybl6119hbevIMGS';
import { Ybl6128hIMGS } from '../assets/images/asiastarImg/ybl6128h/Ybl6128hIMGS';
import { Ybl6128hx93IMGS } from '../assets/images/asiastarImg/ybl6128hx93/Ybl6128hx93IMGS'; 
import { Ybl6129hIMGS } from '../assets/images/asiastarImg/ybl6129h/Ybl6129hIMGS';
import { Ybl6829hIMGS } from '../assets/images/asiastarImg/ybl6829h/Ybl6829hIMGS';

import { MD6833IMGS } from '../assets/images/mudanImg/md6833/MD6833IMGS';
import { MD6773IMGS } from '../assets/images/mudanImg/md6773/MD6773IMGS';

export const busesBrands = [
  
  {
    id: 'asiastar',
    name: 'AsiaStar',
    logoUrl: LogoAsiastar,
    models: [
      {
        id: 'ybl6129h',
        name: 'YBL6129H',
        motor: 'combustion',
        category: 'interurbano',
        description: 'El AsiaStar YBL6129H redefine el estándar del transporte interurbano con una mezcla equilibrada de potencia, confort y diseño moderno. Su estructura resistente y su interior ergonómico garantizan un viaje placentero incluso en trayectos largos. Ideal para operadores que buscan confiabilidad, estilo y eficiencia en un solo vehículo.',
        imageUrl: Ybl6129hIMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: '12000×2550×3860',
            neumatico: 'Neumáticos estándar ( con neumático de repuesto)',
            velocidad_maxima: '120 km/h',
            cantidad_de_asientos:'49+1+1',

        }],
        size: '12m'
      },
      {
        id: 'ybl6128hx93',
        name: 'YBL6128H（X9-3)',
        motor: 'combustion',
        category: 'interurbano',
        description: 'El YBL6128H (X9-3) destaca por su elegancia exterior y su diseño interior optimizado para el confort. Perfecto para viajes de turismo o transporte ejecutivo, este modelo combina potencia, eficiencia y un acabado de alta gama. Su motor de combustión ofrece un rendimiento confiable, mientras que la estructura aerodinámica reduce el consumo y mejora la experiencia de conducción.',
        imageUrl: Ybl6128hx93IMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: '12000×2550×3860',
            neumatico: 'Neumáticos Michelin 295/80R22.5 ( con neumático de repuesto y soporte de elevación)',
            velocidad_maxima: '120 km/h',
            cantidad_de_asientos:'49+1+1',

        }],
        size: '12m'
      },
      {
        id: 'ybl6128hybl6130hybl6148h',
        name: 'YBL6128H - YBL6130H - YBL6148H',
        motor: 'combustion',
        category: 'interurbano',
        description: 'Esta serie representa la excelencia del diseño asiático en transporte de larga distancia. Con acabados premium, amplio espacio interior y tecnología enfocada en la eficiencia, estos modelos combinan rendimiento y confort. Su estructura sólida y aerodinámica brinda estabilidad y seguridad en cada viaje, ideal para operadores turísticos y líneas interprovinciales que buscan prestigio y rentabilidad.',
        imageUrl: Ybl6128hIMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: '12000×2550×3860 / 12650×2550×3860 / 13680×2550×3860',
            neumatico: 'Neumáticos Michelin y Jiatong ( con neumático de repuesto)',
            velocidad_maxima: '120 km/h',
            cantidad_de_asientos:'49+1+1 / 49+1 / 55+1',

        }],
        size: '12m, 12.5m y 13.5m'
      },
      {
        id: 'ybl6110hybl6121h',
        name: 'YBL6110H - YBL6121H',
        motor: 'combustion',
        category: 'interurbano',
        description: 'Los modelos YBL6110H y YBL6121H de AsiaStar están diseñados para ofrecer un viaje interurbano cómodo, eficiente y moderno. Su diseño aerodinámico mejora el rendimiento en carretera, mientras que el interior amplio y ergonómico asegura confort tanto para pasajeros como conductores. Perfecto para empresas de transporte y turismo que buscan confiabilidad y elegancia en cada ruta.',
        imageUrl: Ybl6110hIMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: ' 10690×2500×3670 / 12000×2550×3620',
            neumatico: 'Neumáticos estándar Jiatong 11R22.5 ( con neumático de repuesto) / 295/80R22.5 ( con neumático de repuesto)',
            velocidad_maxima: '120 km/h',
            cantidad_de_asientos:'43+1 / 49+1',

        }],
        size: '10.5m y 12m'
      },
      {
        id: 'kingkong',
        name: 'Serie King Kong',
        motor: 'combustion',
        category: 'interurbano',
        description: 'La Serie King Kong de AsiaStar impone presencia y elegancia en cada kilómetro, diseñada para el transporte interurbano y turístico de alto nivel, combina líneas modernas con un interior espacioso y cómodo. Su estructura robusta, acompañada de tecnología confiable y un rendimiento eficiente, garantiza viajes seguros, placenteros y rentables para operadores y pasajeros por igual. Ideal para quienes buscan un equilibrio perfecto entre potencia, confort y prestigio.',
        imageUrl: KinkongIMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: '12010x2550x3900 - 12600×2550×3800 (mm)',
            neumatico: 'Neumáticos estándar doble linea 315/80R22.5 ( con neumático de repuesto)',
            velocidad_maxima: '120 km/h',
            cantidad_de_asientos:'53+1+1',

        }],
        size: '12m y 12.5m'
      },
      {
        id: 'ybl6829hybl6859hybl6909h',
        name: 'YBL6829H - YBL6859H - YBL6909H',
        motor: 'combustion',
        category: 'interurbano',
        description: 'Compactos, eficientes y modernos, estos modelos son la solución perfecta para rutas interurbanas de media distancia. Su diseño versátil y aerodinámico permite un manejo ágil y estable, mientras que su interior está pensado para ofrecer comodidad sin comprometer la capacidad de pasajeros. Una opción rentable y confiable para flotas urbanas o turísticas.',
        imageUrl: Ybl6829hIMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: '8245×2550×3420 / 8670×2550×3420 / 8990×2550×3435',
            neumatico: 'Neumáticos estándar Jiatong 255/70R22.5 ( con neumático de repuesto)',
            velocidad_maxima: '120 km/h',
            cantidad_de_asientos:'33+1 / 35+1 / 39+1',

        }],
        size: '8m, 8.5m y 9m'
      },
      {
        id: 'js6108',
        name: 'JS6108',
        motor: 'combustion',
        category: 'urbano',
        description: 'El modelo JS6108 de AsiaStar combina eficiencia, resistencia y diseño moderno en un autobús ideal para el entorno urbano. Su construcción robusta y su interior funcional ofrecen una experiencia de viaje segura y cómoda, mientras que su motor eficiente reduce el consumo sin sacrificar rendimiento. Perfecto para flotas municipales y transporte público de alta demanda.',
        imageUrl: Js6108IMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: '10490×2550×3506',
            neumatico: 'Neumáticos estándar 11R22.5 ( con neumático de repuesto)',
            velocidad_maxima: '70 km/h',
            cantidad_de_asientos:'24+1',

        }],
        size: '10.5m'
      },
      {
        id: 'js6108gha',
        name: 'JS6108GHA',
        motor: 'combustion',
        category: 'urbano',
        description: 'El AsiaStar JS6108GHA representa la nueva generación de autobuses urbanos: diseño europeo, interiores ergonómicos y construcción liviana que reduce el consumo y aumenta la durabilidad. Su configuración versátil permite múltiples versiones y adaptaciones, garantizando un servicio eficiente, cómodo y elegante para pasajeros y operadores en cualquier ciudad.',
        imageUrl: Js6108ghaIMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: '10490×2550×3120',
            neumatico: 'Neumáticos estándar 11R22.5 ( con neumático de repuesto)',
            velocidad_maxima: '70 km/h',
            cantidad_de_asientos:'24+1',

        }],
        size: '10.5m'
      },
      {
        id: 'js6181ghbev',
        name: 'JS6181GHBEV',
        motor: 'electrico',
        category: 'urbano',
        description: 'El AsiaStar JS6181GHBEV redefine el transporte urbano con su imponente diseño articulado de 18 metros y propulsión 100% eléctrica. Ofrece cero emisiones, funcionamiento silencioso y una experiencia de viaje suave y cómoda. Su amplio interior, con gran capacidad de pasajeros, lo convierte en la opción ideal para ciudades que apuestan por un transporte público moderno, eficiente y sostenible.',
        imageUrl: Js6181ghbevIMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: '18000×2550×3420',
            neumatico: 'Neumáticos Michelin 275/70R22.5 ( con neumático de repuesto)',
            velocidad_maxima: '70 km/h',
            cantidad_de_asientos:'58+4+1/75',
            puerto_de_carga: 'Enchufe UE CCS tipo 2',

        }],
        size: '18m'
      },
      {
        id: 'ybl6129hbev',
        name: 'YBL6129HBEV',
        motor: 'electrico',
        category: 'interurbano',
        description: 'El modelo YBL6129HBEV ofrece el equilibrio perfecto entre elegancia, eficiencia y sostenibilidad. Con un diseño aerodinámico y motor totalmente eléctrico, garantiza cero emisiones y bajo costo operativo. Su interior cómodo y silencioso brinda una experiencia de viaje de alta calidad, ideal para transporte interurbano o turístico comprometido con el medio ambiente.',
        imageUrl: Ybl6129hIMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: '10500×2550×3420',
            neumatico: 'Neumáticos estándar 275/70R22.5 ( sin neumático de repuesto)',
            velocidad_maxima: '70 km/h',
            cantidad_de_asientos:'24+1',
            puerto_de_carga: 'Interfaz de carga externa (interfaz PLUG-IN)',

        }],
        size: '10.5m'
      },
      {
        id: 'ybl6119hbev',
        name: 'YBL6119HBEV',
        motor: 'electrico',
        category: 'interurbano',
        description: 'El AsiaStar YBL6119HBEV es sinónimo de innovación eléctrica aplicada al transporte de pasajeros. Su diseño moderno y eficiente ofrece una conducción silenciosa y libre de emisiones, reduciendo costos de mantenimiento y operación. Ideal para recorridos interurbanos o corporativos que buscan combinar sostenibilidad, tecnología y comodidad en cada trayecto.',
        imageUrl: Ybl6119hbevIMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: '10990×2550×(3670 con A/C) o (3525 sin A/C)',
            neumatico: 'Neumáticos estándar 295/80R22.5',
            velocidad_maxima: '90 km/h',
            cantidad_de_asientos:'30+1',
            puerto_de_carga: 'SAEJ1772',

        }],
        size: '11m'
      },
      {
        id: 'js6108ghbev',
        name: 'JS6108GHBEV',
        motor: 'electrico',
        category: 'urbano',
        description: 'El AsiaStar JS6108GHBEV combina la movilidad eléctrica con la eficiencia del diseño urbano. Compacto, ágil y totalmente libre de emisiones, este autobús ofrece un funcionamiento silencioso y sostenible. Su diseño interior ergonómico y adaptable lo hace perfecto para rutas urbanas con alta frecuencia, garantizando comodidad, accesibilidad y un bajo impacto ambiental.',
        imageUrl: Js6108IMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: '10500×2550×3050, (3230 con A/C techo medio) o (3420 con A/C techo alto)',
            neumatico: 'Neumáticos estándar 275/70R22.5',
            velocidad_maxima: '70 km/h',
            cantidad_de_asientos:'24+1',
            puerto_de_carga: 'SAEJ1772',

        }],
        size: '10.5m'
      }

    ]
  },




  {
    id: 'mudan',
    name: 'Mudan',
    logoUrl: LogoMudan,
    models: [
      {
        id: 'md6773',
        name: 'MD6773',
        motor: 'combustion',
        category: 'interurbano',
        description: 'El Mudan MD6773 es un autobús compacto, versátil y confiable, diseñado para ofrecer eficiencia y comodidad en el transporte urbano o de corta distancia. Su diseño moderno y aerodinámico se complementa con un interior funcional y ergonómico, ideal para rutas con alta rotación de pasajeros. Destaca por su bajo consumo de combustible, mantenimiento sencillo y gran maniobrabilidad, convirtiéndolo en una opción rentable y duradera para flotas empresariales o municipales.',
        imageUrl: MD6773IMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: '7740×2240×2980',
            neumatico: 'Neumáticos estándar 215/75R17.5 ( con neumático de repuesto)',
            velocidad_maxima: '100 km/h',
            cantidad_de_asientos:'25+1',

        }],
        size: '7m'
      },
      {
        id: 'md6833',
        name: 'MD6833',
        motor: 'combustion',
        category: 'interurbano',
        description: 'El Mudan MD6833 combina estilo, potencia y confort en un autobús de tamaño medio ideal para transporte interurbano o turístico. Con un diseño elegante y aerodinámico, ofrece una conducción estable y segura, mientras que su interior optimiza el espacio para brindar máxima comodidad a los pasajeros. Su excelente relación entre rendimiento y durabilidad lo convierte en una alternativa inteligente para empresas que buscan eficiencia y buena presencia en sus unidades.',
        imageUrl: MD6833IMGS,
        imageSpecs: '',
        specs: [
            {
            dimension: ' 8300×2350×3180',
            neumatico: 'Neumáticos estándar 225/70R19.5（6+1 con neumático de repuesto)',
            velocidad_maxima: '100 km/h',
            cantidad_de_asientos:'30+1',

        }],
        size: '8m'
      }
    ]
  }
];