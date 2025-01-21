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
    numeroUnidad: '2',
    tituloUnidad: 'Contratación estatal',
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
        titulo: 'Ineficacia de los actos jurídicos: inexistencia y nulidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de acto jurídico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características esenciales del acto jurídico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'El acto jurídico en el marco de la contratación estatal',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ineficacia de los actos jurídicos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Definición de contrato administrativo o contrato estatal (Art. 32 Ley 80/93)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos esenciales del contrato estatal',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características del contrato estatal',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Inhabilidades e incompatibilidades para contratar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Inhabilidades',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Incompatibilidades',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Objetivo de las inhabilidades e incompatibilidades',
            hash: 't_3_3',
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
      link: 'https://elibro.net/es/lc/tecnologicodeloriente/titulos/78472',
    },
    {
      referencia:
        'Congreso de Colombia. (1993). Ley 80 de 1993: Por la cual se expide el Estatuto General de Contratación de la Administración Pública. Diario Oficial No. 41.094.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1790106',
    },
    {
      referencia:
        'Cámara Colombiana de la Infraestructura. (2018). Manual de buenas prácticas para constructores.',
      link:
        'https://issuu.com/camaracci/docs/buenas-practicas-contratacion-de-constructores-cci',
    },
    {
      referencia:
        'Congreso de Colombia. (2007). Ley 1150 de 2007: Por medio de la cual se introducen medidas para la eficiencia y la transparencia en la Ley 80 de 1993 y se dictan otras disposiciones generales sobre la contratación con recursos públicos. Diario Oficial No. 46.691.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=184686',
    },
    {
      referencia:
        'Congreso de Colombia. (2011). Ley 1474 de 2011: Por la cual se dictan normas orientadas a fortalecer los mecanismos de prevención, investigación y sanción de actos de corrupción y la efectividad del control de la gestión pública. Diario Oficial No. 48.128.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43292',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2001). Sentencia C-949 de 2001.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=20044958',
    },
    {
      referencia:
        'Roa Rojas, H. (2008). Régimen de contratación estatal (ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicodeloriente/titulos/69056',
    },
    {
      referencia:
        'García, A. B. & Pedreros Sáchica, M. F. (2015). Algunos temas sobre contratación estatal (ed.). Editorial Pontificia Universidad Javeriana.',
      link: 'https://elibro.net/es/lc/tecnologicodeloriente/titulos/123260',
    },
  ],
  glosario: [
    {
      termino: 'Acto Jurídico',
      significado:
        'Es una manifestación de voluntad realizada por una persona natural o jurídica con el fin de producir efectos legales reconocidos por el ordenamiento jurídico, como la creación, modificación, transferencia o extinción de derechos y obligaciones. En la contratación estatal, el acto jurídico debe cumplir requisitos esenciales como la voluntad libre y expresa, el objeto lícito y posible, y la capacidad de las partes. Por ejemplo, un contrato de obra pública constituye un acto jurídico en el cual el Estado acuerda con un contratista la ejecución de una infraestructura.',
    },
    {
      termino: 'Conflicto de Interés',
      significado:
        'Situación en la cual los intereses personales, familiares o económicos de una persona interfieren o parecen interferir con el cumplimiento de sus deberes públicos. En la contratación estatal, se produce un conflicto de interés cuando un servidor público o participante en el proceso toma decisiones que favorecen indebidamente a una persona o empresa vinculada a él. Por ejemplo, si un funcionario adjudica un contrato a una empresa donde su hermano es socio, se compromete la transparencia y objetividad del proceso.',
    },
    {
      termino: 'Contrato Estatal',
      significado:
        'Es el acuerdo de voluntades celebrado entre una entidad estatal y un particular (persona natural o jurídica) con el fin de satisfacer necesidades colectivas y cumplir con los fines esenciales del Estado, tales como la construcción de obras, la adquisición de bienes o la prestación de servicios. Está regulado por la Ley 80 de 1993 y se caracteriza por su sujeción a principios de transparencia, economía, eficiencia y responsabilidad. Ejemplo: un contrato para la construcción de un hospital en una región rural.',
    },
    {
      termino: 'Control y Vigilancia',
      significado:
        'Se refiere a los mecanismos implementados para supervisar y evaluar los procesos de contratación estatal con el objetivo de garantizar que los recursos públicos se administren de manera transparente, eficiente y legal. Este control puede ejercerse en tres etapas: previo (antes del contrato), concomitante (durante la ejecución) y posterior (al finalizar el contrato). Entidades como la Contraloría General y la Procuraduría General son responsables de realizar esta vigilancia.',
    },
    {
      termino: 'Corrupción',
      significado:
        'Es el uso indebido del poder público para obtener beneficios personales o favorecer intereses particulares, en perjuicio del interés general. En la contratación estatal, la corrupción se manifiesta en prácticas como el peculado, la adjudicación irregular de contratos, el soborno o la manipulación de licitaciones. Estas acciones afectan gravemente los recursos públicos y la confianza ciudadana en la administración estatal.',
    },
    {
      termino: 'Economía (Principio de)',
      significado:
        'Es un principio fundamental en la contratación estatal que busca garantizar que los recursos públicos se utilicen de manera eficiente, logrando los mejores resultados con el menor costo posible. La economía implica optimizar los recursos, evitar gastos innecesarios y seleccionar contratistas que ofrezcan las mejores condiciones técnicas y económicas. Ejemplo: seleccionar una empresa que garantice calidad en una obra al menor precio, respetando las condiciones del contrato.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Capacidad de alcanzar los objetivos propuestos en la contratación estatal utilizando de manera óptima los recursos disponibles. La eficiencia implica cumplir con los plazos, calidad y costos establecidos en el contrato. Por ejemplo, un contrato para la construcción de una carretera que se entrega en el tiempo pactado, con materiales adecuados y dentro del presupuesto asignado.',
    },
    {
      termino: 'Formalidad',
      significado:
        'Es el cumplimiento de los requisitos legales y administrativos exigidos para que un acto jurídico o contrato estatal tenga validez. En la contratación pública, la formalidad incluye procedimientos específicos como la licitación pública, la firma del contrato, la aprobación presupuestal y la publicación en el SECOP (Sistema Electrónico de Contratación Pública). La falta de formalidad puede invalidar el contrato.',
    },
    {
      termino: 'Ineficacia',
      significado:
        'Es la condición jurídica en la cual un acto jurídico no produce los efectos esperados debido a la ausencia de un elemento esencial o a la violación de normas imperativas. En la contratación estatal, un contrato es ineficaz cuando se celebra sin cumplir requisitos como la disponibilidad presupuestal o la competencia de las partes. Ejemplo: un contrato firmado sin contar con la aprobación presupuestal requerida.',
    },
    {
      termino: 'Inhabilidades',
      significado:
        'Son causales objetivas y legales que impiden a una persona natural o jurídica participar en procesos de contratación estatal debido a circunstancias preexistentes, como condenas penales, sanciones fiscales o incumplimientos previos. Las inhabilidades pueden ser temporales o definitivas y no son subsanables. Ejemplo: una empresa sancionada por incumplir un contrato estatal queda inhabilitada por 5 años para participar en nuevos procesos.',
    },
    {
      termino: 'Incompatibilidades',
      significado:
        'Son situaciones que generan conflictos de interés entre las partes en un proceso de contratación estatal, afectando la imparcialidad y transparencia del mismo. A diferencia de las inhabilidades, las incompatibilidades pueden ser subsanadas si se eliminan las circunstancias que las originan. Ejemplo: un funcionario que adjudica un contrato a una empresa donde tiene intereses económicos.',
    },
    {
      termino: 'Licitud del Objeto',
      significado:
        'Es el requisito que establece que el objeto del contrato debe ser legal, posible y determinado. El objeto del contrato describe la obligación principal que se va a cumplir, como la construcción de una obra o la prestación de un servicio. Ejemplo: no es válido un contrato para actividades prohibidas por la ley.',
    },
    {
      termino: 'Nulidad',
      significado:
        'Es la sanción que invalida un acto jurídico debido a la ausencia de elementos esenciales o a la violación de normas de orden público. En la contratación estatal, la nulidad puede ser absoluta (por objeto ilícito o falta de competencia) o relativa (por vicios en el consentimiento). Ejemplo: un contrato celebrado sin autorización presupuestal es nulo.',
    },
    {
      termino: 'Participación Equitativa',
      significado:
        'Es el derecho de todos los interesados en un proceso de contratación estatal a competir en igualdad de condiciones, sin privilegios ni favoritismos. La participación equitativa garantiza que los contratos se adjudiquen de manera justa y transparente.',
    },
    {
      termino: 'Principio de Transparencia',
      significado:
        'Es el fundamento que asegura que los procesos de contratación estatal sean públicos, verificables e imparciales. La transparencia se logra mediante la publicidad de los procesos, la selección objetiva y la rendición de cuentas. Ejemplo: publicar los contratos en el SECOP.',
    },
    {
      termino: 'Recursos Públicos',
      significado:
        'Bienes, fondos o activos que pertenecen al Estado y deben ser administrados con responsabilidad y en beneficio del interés general. La contratación estatal utiliza recursos públicos para financiar proyectos y satisfacer las necesidades colectivas.',
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
