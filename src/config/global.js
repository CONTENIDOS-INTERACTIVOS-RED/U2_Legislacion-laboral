export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '1',
    tituloUnidad:
      'Derechos relacionados con la actividad laboral y contratación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Actividad laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Derecho administrativo y su relación con la contratación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Derecho administrativo en el ámbito laboral y de la contratación ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Concepto de Derecho tributario y su relación con la contratación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Evolución del derecho tributario',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Relación entre el Derecho tributario y la contratación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Importancia de la relación entre el derecho tributario y la contratación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Concepto de Derecho laboral y su relación con la contratación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Relación entre el Derecho laboral y la contratación',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ávalos, E. Buteler, A. & Massimino, L. (2014). Derecho administrativo 1 (ed.). Alveroni Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/78472',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (2021). Perspectivas sociales y del empleo en el mundo: El papel de las plataformas digitales en la transformación del mundo del trabajo.',
      link:
        'https://www.ilo.org/global/research/global-reports/weso/2021/lang--es/index.htm',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística. (2023). Boletín técnico: Gran Encuesta Integrada de Hogares (GEIH) - Empleo informal y seguridad social, octubre - diciembre 2023.',
      link:
        'https://www.dane.gov.co/files/operaciones/GEIH/bol-GEIHEISS-oct-dic2023.pdf',
    },
    {
      referencia:
        'Congreso de Colombia. (1950). Código Sustantivo del Trabajo [Decreto Ley 2663 de 1950]. Actualizado hasta 2023.',
      link:
        'https://www.suin-juriscol.gov.co/viewdocument.asp?ruta=codigo/30019323',
    },
    {
      referencia:
        'Asamblea Nacional Constituyente de Colombia. (1991). Constitución Política de Colombia. Actualizado hasta 2023.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Constitucion/1687988',
    },
    {
      referencia:
        'Congreso de Colombia. (1993). Ley 80 de 1993: Por la cual se expide el Estatuto General de Contratación de la Administración Pública. Diario Oficial No. 41.094.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1790106',
    },
    {
      referencia:
        'Congreso de Colombia. (2002). Ley 734 de 2002: Por la cual se expide el Código Disciplinario Único. Diario Oficial No. 44.699.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1667339',
    },
    {
      referencia:
        'Troya Jaramillo, J. V. (2014). Manual de Derecho Tributario (ed.). Corporación de Estudios y Publicaciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/115041',
    },
    {
      referencia:
        'Organización para la Cooperación y el Desarrollo Económicos. (2016). Proyecto de la OCDE y del G-20 sobre la Erosión de la Base Imponible y el Traslado de Beneficios.',
      link:
        'https://www.oecd.org/es/publications/proyecto-de-la-ocde-y-del-g-20-sobre-la-erosion-de-la-base-imponible-y-el-traslado-de-beneficios_24156108.html',
    },
    {
      referencia:
        'Capón Filas, R. (1998). Derecho del trabajo (ed.). Librería Editora Platense S.R.L.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/66572',
    },
    {
      referencia:
        'Congreso de Colombia. (1915). Ley 57 de 1915: Por la cual se establece el régimen para el servicio de correo y telégrafos en el país. Diario Oficial.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1609446',
    },
  ],
  glosario: [
    {
      termino: 'Cesantías',
      significado:
        'Prestación social destinada a garantizar la estabilidad económica del trabajador en caso de desempleo, acumulada anualmente y regulada por el sistema laboral colombiano.',
    },
    {
      termino: 'Contrato Laboral',
      significado:
        'Acuerdo bilateral entre empleador y trabajador en el que se establecen las condiciones de la relación laboral, sujeto a las normas del Código Sustantivo del Trabajo.',
    },
    {
      termino: 'Contratación Administrativa',
      significado:
        'Proceso por el cual las entidades públicas celebren contratos con particulares para adquirir bienes, servicios o realizar obras, regulado por el Derecho administrativo.',
    },
    {
      termino: 'Derecho Administrativo',
      significado:
        'Rama del Derecho Público que regula la estructura y funciones de la administración pública, así como las relaciones entre el Estado y los particulares.',
    },
    {
      termino: 'Derecho Laboral',
      significado:
        'Conjunto de normas jurídicas que regulan las relaciones entre empleadores y trabajadores, garantizando el cumplimiento de derechos y deberes recíprocos.',
    },
    {
      termino: 'Derecho Tributario',
      significado:
        'Rama del Derecho que regula la creación, recaudación y administración de tributos, con incidencia en los procesos de contratación laboral y administrativa.',
    },
    {
      termino: 'Equidad Salarial',
      significado:
        'Principio que exige la igualdad de remuneración para trabajadores que desempeñen funciones similares, sin discriminación por género, edad o condición social.',
    },
    {
      termino: 'Modalidades de Contratación',
      significado:
        'Diversos tipos de procesos contractuales establecidos por la normativa para regular la adquisición de bienes y servicios en el sector público.',
    },
    {
      termino: 'Negociación Colectiva',
      significado:
        'Procedimiento legal mediante el cual trabajadores y empleadores acuerdan condiciones laborales mediante representantes autorizados.',
    },
    {
      termino: 'Prestaciones Sociales',
      significado:
        'Beneficios adicionales al salario que el empleador debe otorgar al trabajador, tales como primas, cesantías y seguridad social.',
    },
    {
      termino: 'Principio de Favorabilidad',
      significado:
        'Norma que ordena interpretar las disposiciones laborales de la manera más beneficiosa para el trabajador en caso de ambigüedad.',
    },
    {
      termino: 'Responsabilidad Laboral del Contratista',
      significado:
        'Obligación del contratista de garantizar los derechos laborales de los trabajadores que emplea en la ejecución de contratos administrativos.',
    },
    {
      termino: 'Seguridad Social Integral',
      significado:
        'Sistema que garantiza el acceso a servicios de salud, pensiones y cobertura por riesgos laborales a todos los trabajadores.',
    },
    {
      termino: 'Transparencia Contractual',
      significado:
        'Principio que exige que los procesos de contratación pública sean claros, accesibles y supervisados por la ciudadanía para prevenir irregularidades.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
