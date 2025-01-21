<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Actividad laboral'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 La actividad laboral es una pieza clave en la construcción de una sociedad justa y equilibrada, ya que permite no solo la generación de ingresos y el crecimiento económico, sino también el fortalecimiento de los derechos y la dignidad de los trabajadores.

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Actividad laboral 
          p.mb-5 En el PDF Actividad laboral, se abordan los principales retos del mercado laboral en Colombia, incluyendo la informalidad, la protección de los derechos laborales y las estrategias de formalización del empleo. Asimismo, se exploran los estándares internacionales que garantizan condiciones dignas de trabajo y su importancia para avanzar hacia un entorno laboral más equitativo e inclusivo.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/nombre.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>Actividad laboral 
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')

    p.mb-4 En el caso de Colombia, los derechos laborales están regulados principalmente por el Código Sustantivo del Trabajo y la Constitución Política de 1991, que reconocen al trabajo como un derecho y una obligación social. Entre los derechos más relevantes para los trabajadores se encuentran:
    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-5.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='26%' y='78%' numero='+')
        .h5.mb-2 El derecho a un salario justo y suficiente

        p Todo trabajador debe recibir una remuneración adecuada que le permita satisfacer sus necesidades básicas y las de su familia. En Colombia, este derecho se materializa a través del salario mínimo legal mensual, ajustado anualmente.
      .tarjeta.bg-white.p-4(x='26%' y='47%' numero='+')
        .h5.mb-2 La seguridad social
 
        p Este derecho incluye acceso a servicios de salud, pensiones y protección frente a riesgos laborales, garantizando así el bienestar del trabajador y su familia.
      .tarjeta.bg-white.p-4(x='40%' y='23%' numero='+')
        .h5.mb-2 La igualdad y no discriminación
 
        p Los trabajadores tienen derecho a recibir un trato equitativo, sin ser discriminados por motivos de género, raza, religión, orientación sexual o cualquier otra condición.
      .tarjeta.bg-white.p-4(x='60%' y='23%' numero='+')
        .h5.mb-2 Condiciones dignas de trabajo

        p Esto abarca la regulación de la jornada laboral, el derecho al descanso y el acceso a un ambiente laboral seguro y saludable.
      .tarjeta.bg-white.p-4(x='75%' y='47%' numero='+')
        .h5.mb-2 La libertad sindical y la negociación colectiva

        p Los trabajadores tienen derecho a organizarse, afiliarse a sindicatos y participar en la negociación de sus condiciones laborales, un pilar clave para el equilibrio en las relaciones entre empleadores y empleados.
      .tarjeta.bg-white.p-4(x='73%' y='78%' numero='+')
        .h5.mb-2 La estabilidad laboral
 
        p Este principio busca proteger a los trabajadores contra el despido arbitrario, garantizando que cualquier terminación de contrato se realice conforme a la Ley.

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        span El reconocimiento y respeto de estos derechos no solo protegen a los trabajadores, sino que también fomentan relaciones laborales armónicas y productivas. En este sentido, los derechos laborales no son privilegios, sino herramientas que equilibran las dinámicas de poder en el trabajo, promoviendo justicia y bienestar en la sociedad.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Derecho administrativo y su relación con la contratación

    p.mb-4 El Derecho administrativo es una rama del Derecho público que regula la organización, funcionamiento y control de la administración pública, así como las relaciones entre las entidades estatales y los ciudadanos.

    p.mb-4 Conozcamos más sobre el Derecho administrativo:

    .row.mb-4
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="¿Cuál es su propósito?")
            p Su propósito principal es garantizar que las actuaciones de las entidades públicas se realicen dentro del marco de la legalidad, promoviendo la transparencia, la eficiencia y la eficacia en sus funciones. 
          .div(titulo="¿Qué establece?")
            p Este cuerpo normativo establece las reglas que orientan la organización, funcionamiento y control de las instituciones estatales, asegurando que sus decisiones estén al servicio del interés general.
          .div(titulo="¿Cuál es su objetivo principal?")
            p Dicho de otra manera, el Derecho administrativo es una rama del Derecho público. Su objetivo principal es garantizar que las actuaciones de las autoridades públicas se ajusten a los principios de legalidad, transparencia, eficacia, eficiencia, equidad y moralidad, promoviendo el interés general por encima de los intereses particulares.

    .row.mb-4
      .col-12.col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Se centra en…")
            p Este cuerpo normativo se centra en delimitar las competencias y facultades de las entidades públicas, establecer las reglas para su funcionamiento y fijar los mecanismos de control que aseguren la responsabilidad de los funcionarios y la protección de los derechos de los ciudadanos. En esencia, el Derecho administrativo busca equilibrar el poder que ostenta el Estado con las garantías que amparan a los individuos frente a posibles abusos o arbitrariedades.
          .div(titulo="Características esenciales")
            p El Derecho administrativo posee varias características esenciales que lo distinguen dentro del ámbito jurídico. En primer lugar, se enmarca dentro del Derecho público, dado que regula las relaciones de subordinación y coordinación entre las entidades estatales y entre éstas y los particulares. Su finalidad primordial es atender el interés general, asegurando que todas las normas y actuaciones estén orientadas a satisfacer las necesidades colectivas. 
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')

    p.mb-4 Además, es una rama del Derecho dinámica y adaptable, capaz de evolucionar constantemente para responder a los cambios sociales, tecnológicos y económicos, garantizando así una administración pública eficiente. Por último, el Derecho administrativo goza de autonomía, pues, aunque comparte vínculos con otras ramas del Derecho, como el constitucional o el laboral, cuenta con principios, instituciones y procedimientos específicos que le otorgan independencia conceptual.
    p.mb-4 En cuanto a su ámbito de regulación, esta rama jurídica abarca diversas áreas fundamentales:

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0.d-flex.align-items-center
              p Regula la organización administrativa, estableciendo la estructura interna de las entidades públicas, su jerarquía, competencias y funciones.  
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0.d-flex.align-items-center
              p También establece las bases para la contratación pública, definiendo las reglas para la adquisición de bienes, servicios y la ejecución de obras necesarias para el cumplimiento de los fines estatales. 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0.d-flex.align-items-center
              p Además, aborda la responsabilidad del Estado, determinando los supuestos en los que este debe responder por los daños causados por sus actuaciones u omisiones. 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0.d-flex.align-items-center
              p Otro aspecto relevante es la regulación de los procedimientos administrativos, que fija las etapas, requisitos y condiciones para garantizar la legalidad y la participación ciudadana en las decisiones públicas. 

    p.mb-4 Finalmente, el Derecho administrativo, incluye el control administrativo, asegurando la supervisión y corrección de las actuaciones de la administración mediante mecanismos como la acción de tutela, la acción de nulidad y restablecimiento del Derecho, y las acciones populares, herramientas claves para la defensa de los derechos ciudadanos y la transparencia en la gestión pública.

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        span La importancia del Derecho administrativo radica en su papel esencial para garantizar el buen funcionamiento de cualquier sociedad organizada. En primer lugar, promueve la transparencia y la eficiencia en la administración pública, estableciendo marcos normativos que obligan a las entidades estatales a manejar los recursos de manera responsable y a tomar decisiones claras y accesibles para la ciudadanía. Esto contribuye a optimizar el uso de los recursos públicos y a fortalecer la rendición de cuentas.

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-verde.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-12.svg', alt='Texto que describa la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El Derecho administrativo, protege los derechos de los ciudadanos al delimitar el alcance del poder estatal, asegurando que las actuaciones de las autoridades públicas se ajusten a la legalidad y sean respetuosas de los derechos fundamentales.
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-15.svg', alt='Texto que describa la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Proporciona herramientas jurídicas, como la acción de tutela y la acción popular, que permiten a los ciudadanos exigir el cumplimiento de sus derechos y garantizar que los procesos administrativos se desarrollen de manera justa y equitativa.

    p.mb-4 Por último, fomenta la confianza en las instituciones públicas al crear un sistema jurídico claro y equitativo que refuerza la credibilidad de las entidades del Estado. Cuando las normas administrativas se aplican de forma coherente y transparente, las actuaciones de las autoridades adquieren legitimidad, lo que contribuye a fortalecer el tejido social y a garantizar la estabilidad democrática. En este sentido, el Derecho administrativo no sólo regula las relaciones entre el Estado y los ciudadanos, sino que también actúa como un pilar fundamental para el desarrollo y la cohesión social.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Derecho administrativo en el ámbito laboral y de la contratación

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.mb-4.align-items-start.bg-rojo-claro.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-16.svg', alt='Texto que describa la imagen')
          .my-auto
            p.pe-xl-3.mb-0 En el ámbito laboral y de contratación, el Derecho administrativo desempeña un papel fundamental al proporcionar el marco normativo que regula la contratación pública. Este tipo de contratación es esencial para que el Estado pueda cumplir con sus objetivos y brindar los servicios necesarios a la sociedad. A través de sus principios y procedimientos, el Derecho administrativo asegura que los procesos de contratación sean equitativos, transparentes y orientados a satisfacer las necesidades colectivas, de manera eficiente.
        p.mb-0 Además, esta disciplina también vela por el equilibrio entre el poder de las entidades públicas y los derechos de los ciudadanos, estableciendo mecanismos de control y participación que permiten prevenir abusos y garantizar la rendición de cuentas. De esta forma, el Derecho administrativo no solo regula las relaciones del Estado con los particulares, sino que también fomenta la construcción de una gestión pública más ética y efectiva, que contribuya al bienestar general y al fortalecimiento del estado de derecho.
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

    h3 La contratación en el derecho administrativo 
    p.mb-4 La contratación en el marco del Derecho administrativo no se limita exclusivamente a las relaciones laborales entre los empleados públicos y las entidades estatales. También abarca la amplia gama de contratos administrativos o estatales que las instituciones públicas celebren con personas naturales o jurídicas para cumplir con sus objetivos y satisfacer las necesidades del interés general.

    .d-flex.mb-4.align-items-start.bg-amarillo.p-4(data-aos="fade-up")
      img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-18.svg', alt='Texto que describa la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Este tipo de contratación es clave para garantizar la ejecución de obras, la adquisición de bienes y la prestación de servicios que beneficien a la comunidad.

    p.mb-4 Los contratos administrativos tienen características especiales que los distinguen de los contratos civiles o comerciales:

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p Están regidos por normas específicas, como la Ley 80 de 1993 en Colombia, que establece los principios y procedimientos que deben seguirse para garantizar la transparencia, la eficacia y la igualdad de condiciones en los procesos de contratación. 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p Además, estos contratos suelen incluir cláusulas excepcionales al derecho común, otorgando a las entidades públicas prerrogativas especiales, como la posibilidad de modificar unilateralmente ciertas condiciones del contrato o de terminarlo anticipadamente por razones de interés público.

    .row.bg-fondo-2.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.d-flex.flex-column

        p.mb-4 La contratación administrativa también implica una relación tripartita que incluye:
        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Estado
                p.text-small.px-4.text-center.pb-2 Actúa como garante del cumplimiento de las condiciones contractuales y protector del interés colectivo
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Contratista
                p.text-small.px-4.text-center.pb-2 Debe cumplir con los términos acordados en el contrato, respetando las normas legales y garantizando la calidad de los bienes o servicios suministrados.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Sociedad
                p.text-small.px-4.text-center.pb-2 Se beneficia de los resultados de esta contratación, que busca mejorar las condiciones de vida de la población y promover el desarrollo económico y social.

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        span Asimismo, el Derecho administrativo establece controles previos, concurrentes y posteriores para supervisar que los procesos de contratación cumplan con los estándares legales y éticos. Estos mecanismos, como la auditoría, el control fiscal y las veedurías ciudadanas, son fundamentales para prevenir la corrupción, optimizar el uso de los recursos públicos y garantizar que los contratos realmente respondan a las necesidades de la población.

    .row.mb-4
      .col-4.d-none.d-lg-block
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8
        p.mb-4 En este contexto, la contratación administrativa no solo es una herramienta para la gestión pública, sino también un espacio donde convergen los derechos de los ciudadanos, la responsabilidad de las entidades públicas y los intereses de los contratistas. Su adecuada regulación y ejecución son esenciales para fortalecer la confianza en las instituciones y fomentar una administración pública eficiente y transparente.
        .bg-verde-claro.p-4
          span Hablemos ahora sobre la contratación administrativa, también conocida como contratación estatal, la cual es el proceso mediante el cual las entidades públicas celebren acuerdos para adquirir bienes, servicios o ejecutar obras necesarias para cumplir con sus funciones.

    p.mb-4 En Colombia, esta actividad está regulada principalmente por la Ley 80 de 1993, que establece el marco normativo y los principios que guían estos procesos. A diferencia de los contratos privados, los contratos administrativos están diseñados para priorizar el interés público, lo que implica la aplicación de reglas específicas y la supervisión constante de los procesos.
    p.mb-4 Entre los principios rectores de la contratación administrativa se destacan:

    .row.bg-fondo-3.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-5.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
          .col-12.col-lg-7(data-aos="fade-left")
            SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
              .row.mb-4.justify-content-center.h-100
                .col-12.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center La transparencia
                    p.px-1.text-small.mb-0.d-flex.text-center Que exige que todas las etapas del proceso sean públicas y sujetas a control ciudadano
              .row.mb-4.justify-content-center.h-100
                .col-12.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-27.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center La economía
                    p.px-1.text-small.mb-0.d-flex.text-center Que busca el uso eficiente de los recursos públicos
              .row.mb-4.justify-content-center.h-100
                .col-12.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-28.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center La responsabilidad
                    p.px-1.text-small.mb-0.d-flex.text-center Que obliga a todas las partes para que actúen conforme a la Ley
              .row.mb-4.justify-content-center.h-100
                .col-12.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-29.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center La equidad
                    p.px-1.text-small.mb-0.d-flex.text-center Que garantiza condiciones justas para todos los participantes.

    .row.bg-rojo-claro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        span Estos principios aseguran que los procesos sean confiables, inclusivos y alineados con los objetivos del interés general.

    p.mb-4 Existen diferentes modalidades para llevar a cabo la contratación administrativa:

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Licitación pública
              p Es la más común y se basa en un proceso competitivo que permite seleccionar al contratista que ofrezca las mejores condiciones.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Contratación directa
              p Se utiliza en casos excepcionales, como la falta de oferentes o situaciones de urgencia.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Selección abreviada
              p Es un procedimiento más ágil que se aplica en contratos de menor cuantía.

    p.mb-4 Estas modalidades están diseñadas para ajustarse a las necesidades específicas de las entidades públicas y las características del objeto a contratar.
    p.mb-4 En cuanto a la relación laboral, los empleados públicos no se vinculan mediante contratos laborales tradicionales, sino a través de nombramientos o vinculaciones que responden al régimen del empleo público. Esto significa que sus relaciones están reguladas por normas administrativas específicas, no por el derecho laboral común. Por otro lado, las entidades públicas también pueden contratar a terceros, ya sea personas naturales o jurídicas, para la prestación de servicios específicos. Estos acuerdos, aunque importantes, no constituyen relaciones laborales directas, sino que se rigen por el marco del Derecho administrativo.
    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        span En resumen, la contratación administrativa es un proceso clave para garantizar que las entidades públicas cumplan con su misión de manera eficiente, equitativa y transparente. Su regulación no solo protege el interés público, sino que también promueve el buen uso de los recursos y la confianza en las instituciones.

    p.text-bold.mb-4 Derechos laborales y derecho administrativo

    .row.mb-4
      .col-12.d-flex.align-items-start.bg-gris.p-4(data-aos="fade-up")
        img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-33.svg', alt='Texto que describa la imagen')
        .my-auto
          p.pe-xl-3.mb-0 El Derecho administrativo desempeña un papel crucial en la protección de los derechos laborales dentro del ámbito de la contratación pública, al establecer un marco normativo que garantiza el respeto y cumplimiento de las obligaciones laborales por parte de los contratistas que celebren acuerdos con el Estado. 

    p.mb-4 Esta relación no solo se limita al cumplimiento de los objetivos administrativos, sino que también extiende su influencia para salvaguardar los derechos de los trabajadores involucrados de manera directa o indirecta, en la ejecución de los contratos estatales, como lo veremos a continuación:

    .row.mb-4
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Entidades públicas")
            p Tienen la obligación de verificar que los contratistas cumplan con sus responsabilidades laborales hacia sus empleados, antes de autorizar cualquier desembolso económico. Este control implica la presentación de documentación que demuestre que se han cumplido las obligaciones laborales básicas, tales como el pago oportuno de los salarios, el registro de aportes al sistema de seguridad social (que incluye salud, pensiones y riesgos laborales) y el cumplimiento de las prestaciones sociales obligatorias, como cesantías, primas y vacaciones. Estos requisitos, establecidos tanto en el Estatuto General de Contratación Pública (Ley 80 de 1993) como en otras disposiciones laborales, buscan prevenir la precarización laboral y asegurar que los derechos de los trabajadores no sean vulnerados en los procesos de contratación financiados con recursos públicos.
          .div(titulo="Régimen disciplinario")
            p Establecido por la Ley 734 de 2002 refuerza esta obligación al imponer sanciones a los funcionarios públicos que no supervisen de manera adecuada el cumplimiento de las obligaciones laborales por parte de los contratistas. Esta normativa establece que la omisión en la verificación de las obligaciones laborales puede considerarse una falta grave o incluso gravísima, con sanciones que incluyen desde suspensiones temporales hasta la destitución del cargo. Por ejemplo, si un funcionario aprueba el pago de un contrato sin verificar el cumplimiento de las normas laborales por parte del contratista, no sólo incumple los principios del Derecho administrativo, como la responsabilidad y la legalidad, sino que también contribuye indirectamente a la vulneración de los derechos laborales de los trabajadores involucrados.
          .div(titulo="Contratos administrativos")
            p Incluyen cláusulas específicas que obligan a los contratistas a respetar los derechos laborales de su personal, bajo pena de sanciones contractuales como la retención de pagos o la terminación anticipada del contrato. Estas cláusulas, que reflejan los principios de equidad y responsabilidad, buscan garantizar que los trabajadores reciban condiciones justas en el marco de proyectos financiados por recursos públicos. A través de estas disposiciones, el Derecho administrativo se asegura de que los recursos estatales no sean utilizados en contratos que promuevan prácticas laborales abusivas o que incumplan las normativas laborales vigentes.

    .row.mb-4
      .col-12.col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Contratistas subcontratados")
            p Aunque estos trabajadores no tienen una relación laboral directa con el Estado, las entidades públicas tienen el deber de asegurarse de que los contratistas principales cumplan con las normativas laborales hacia los empleados de sus subcontratistas. Esta obligación refuerza la idea de que el interés público no solo abarca la ejecución eficiente de las obras, bienes o servicios contratados, sino también la protección de los derechos fundamentales de todas las personas involucradas en dichos procesos.
          .div(titulo="Control administrativo")
            p Se complementa con herramientas específicas como la obligación de presentar certificados de cumplimiento laboral y de seguridad social, los cuales deben ser revisados y aprobados antes de realizar pagos contractuales. Este control también incluye la posibilidad de remitir casos al Ministerio de Trabajo cuando se detecten irregularidades laborales en el marco de la contratación pública. Así, se asegura que los incumplimientos laborales sean investigados y sancionados, protegiendo a los trabajadores y promoviendo la formalidad en el empleo.
          .div(titulo="Transparencia, economía y responsabilidad")
            p La transparencia permite que los procesos sean públicos y accesibles para la vigilancia ciudadana, lo que ayuda a identificar posibles irregularidades laborales. La economía asegura que los recursos públicos sean utilizados de manera eficiente, evitando pagos a contratistas que no cumplan con sus obligaciones laborales. La responsabilidad garantiza que tanto los funcionarios públicos como los contratistas sean plenamente conscientes de las consecuencias legales y disciplinarias de sus acciones.
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    .row.bg-verde-claro.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3
        span En conclusión, la relación entre el Derecho administrativo y los derechos laborales es integral y multifacética. A través de mecanismos de control, supervisión y sanción, el Derecho administrativo no solo regula los procesos de contratación pública, sino que también actúa como garante de los derechos fundamentales de los trabajadores involucrados. Esta intersección entre el ámbito administrativo y el laboral refuerza la importancia de una administración pública ética, responsable y comprometida con el bienestar de todos los ciudadanos, asegurando que los recursos del Estado contribuyan al desarrollo social y económico sin comprometer los derechos de los trabajadores.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/123155") Manual básico de Derecho Administrativo
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=kh2d-sK92NM") [Vídeo] Consultorio laboral: Formas de contratación laboral y otros temas laborales
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
