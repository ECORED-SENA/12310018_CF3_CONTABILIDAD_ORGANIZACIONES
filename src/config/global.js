export default {
  global: {
    Name: 'Relacionamiento del PUC con estados financieros básicos (NIC/NIIF)',
    Description:
      'En este componente se reconoce el PUC como el mapa del registro: su objetivo, codificación y estructura orientan la selección de cuentas según cada transacción. Con la dinámica y descripción de cuentas del PUC se registra con coherencia y se obtienen saldos organizados para su posterior agrupación. Con base en esos saldos se elaboran los estados financieros básicos: balance general (estado de situación financiera) y estado de resultados. En la presentación se aplican criterios generales NIC/NIIF de estructura y comparabilidad para facilitar la lectura y el análisis.  ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Plan Único de Cuentas (PUC)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Objetivo y utilidad del PUC en el registro contable',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Codificación y estructura del PUC: cómo se lee y cómo se ubican cuentas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clasificación y visión general de las clases (1 a 9)',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Dinámica y descripción de cuentas en el PUC aplicada a transacciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Descripción y dinámica del PUC para seleccionar cuentas en transacciones frecuentes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Errores comunes de clasificación y ejemplos guiados',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estados financieros básicos para analizar la empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Propósito e importancia de los estados financieros',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Elementos y criterios generales de presentación (marco NIC/NIIF)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Cambios que genera en la contabilidad de la empresa',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Propósito e importancia de los estados financieros bajo el marco NIC/NIIF',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Costo de ventas',
      significado:
        'representa el valor de adquisición o producción de los bienes o servicios vendidos durante un periodo determinado.',
    },
    {
      termino: 'Exigibilidad',
      significado:
        'criterio de clasificación para los pasivos que organiza las deudas según el plazo de vencimiento, priorizando aquellas que deben cancelarse en el menor tiempo posible.',
    },
    {
      termino: 'Ingresos ordinarios',
      significado:
        'son los incrementos en los beneficios económicos producidos a lo largo del periodo, relacionados con la actividad principal de la empresa.',
    },
    {
      termino: 'Liquidez',
      significado:
        'criterio técnico utilizado para ordenar los activos en el balance, representando la facilidad y velocidad con la que un recurso puede transformarse en dinero efectivo sin perder su valor.',
    },
    {
      termino: 'Notas a los estados financieros',
      significado:
        'revelaciones narrativas y detalladas que explican las políticas contables, bases de medición y el desglose de las cifras presentadas en los reportes principales para garantizar su comprensión.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'es la parte residual de los activos de la entidad una vez deducidos todos sus pasivos, representando la inversión neta de los dueños.',
    },
    {
      termino: 'PUC (Plan Único de Cuentas)',
      significado:
        'herramienta técnica que busca la uniformidad en el registro de las operaciones económicas realizadas por los comerciantes, permitiendo la transparencia y claridad de la información contable.',
    },
    {
      termino: 'Valor razonable',
      significado:
        'precio que se recibiría por vender un activo o que se pagaría por transferir un pasivo en una transacción ordenada entre participantes del mercado en la fecha de la medición bajo el marco NIIF.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carvalho, J. A. (2017). Estados financieros: normas IFRS-NIIF. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2009). Ley 1314 de 2009 por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia. Diario Oficial No. 47.409. ',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes%2F1677255',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública. (2018). Marco conceptual para la información financiera. ',
      link:
        'https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública. (2022). Concepto 2022-0535: plan de cuentas – obligatoriedad (PUC y marcos NIIF; utilidad de catálogo de cuentas).',
      link: '',
    },
    {
      referencia:
        'Estupiñán Gaitán, R. (2020). Estado de flujos de efectivo: bajo NIIF. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Fierro Martínez, Á. M. (2015). Contabilidad general con enfoque NIIF para pymes. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Guajardo Cantú, G. (2014). Contabilidad financiera. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1993). Decreto 2650 de 1993 por el cual se modifica el Plan Único de Cuentas para comerciantes. Diario Oficial No. 41.156. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1772403',
    },
    {
      referencia:
        'PUC. (2024). Estructura del catálogo de cuentas: codificación y niveles. ',
      link: 'https://puc.com.co/',
    },
    {
      referencia:
        'Superintendencia de Sociedades. (s.f.). Tips de consolidación y combinación de estados financieros. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
