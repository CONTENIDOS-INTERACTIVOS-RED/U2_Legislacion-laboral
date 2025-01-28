<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Inhabilidades e incompatibilidades para contratar'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column
        p.mb-4 En el marco de la contratación estatal en Colombia, las inhabilidades e incompatibilidades constituyen mecanismos legales diseñados para garantizar la transparencia, legalidad y equidad en los procesos, así como para prevenir la corrupción y los conflictos de interés. Estas restricciones limitan la participación de ciertos individuos o empresas en la contratación pública cuando se presentan circunstancias que podrían afectar la imparcialidad o legalidad del proceso.
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos="fade-up").d-flex.align-items-center
          span Las inhabilidades e incompatibilidades son restricciones legales contempladas en la Ley 80 de 1993 (Estatuto General de la Contratación de la Administración Pública) y normas complementarias. Su finalidad es garantizar que los procesos de contratación estatal se desarrollen de manera transparente, equitativa, imparcial y que primen los intereses generales sobre los particulares. Estas disposiciones buscan evitar actos de corrupción, conflictos de interés y cualquier tipo de interferencia que compromete la legalidad y ética en la celebración y ejecución de contratos estatales.


    #t_3_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 3.1
        h2 Inhabilidades

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .bg-rojo-claro.p-4(data-aos="fade-up")
          span Las inhabilidades son causales de orden objetivo y legal que impiden a una persona natural o jurídica participar en procesos de contratación estatal. Se caracterizan por ser situaciones preexistentes que afectan la idoneidad, moralidad o legalidad del contratista. Estas restricciones no son subsanables y, en muchos casos, tienen carácter temporal o definitivo.

    p.mb-4 Las características de las inhabilidades, son:

    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-26.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='27%' y='83%' numero='+')
        .h5.mb-2 Objetividad
        p No dependen de la voluntad del contratante o de la entidad pública. Son situaciones objetivas y verificables.
      .tarjeta.bg-white.p-4(x='42.3%' y='83%' numero='+')
        .h5.mb-2 Legalidad
        p Están expresamente señaladas en la ley y no pueden ser interpretadas de manera extensiva o restrictiva.
      .tarjeta.bg-white.p-4(x='57.3%' y='83%' numero='+')
        .h5.mb-2 Preexistencia
        p Surgen antes del proceso de contratación y afectan la capacidad jurídica para contratar con el Estado.
      .tarjeta.bg-white.p-4(x='72.3%' y='83%' numero='+')
        .h5.mb-2 No subsanables
        p Una vez configurada la causal, no puede ser removida o corregida durante el proceso contractual.

    .d-flex.mb-4.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-27.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 Las inhabilidades se caracterizan por su carácter objetivo, lo que implica que no dependen de la voluntad de las partes involucradas, sino de la existencia de circunstancias verificables que impiden la participación en procesos de contratación estatal. Estas pueden ser definitivas cuando imposibilitan la contratación de manera permanente, o temporales cuando su efecto tiene un tiempo limitado.

    p.mb-4 Ejemplos de causales objetivas incluyen haber sido condenado penalmente por delitos que afectan el patrimonio del Estado, como peculado o corrupción; haber sido sancionado por incumplimiento en contratos estatales previos, o no estar al día en el pago de obligaciones fiscales o de seguridad social. Un caso práctico de aplicación es el de una empresa constructora que, tras ser condenada por prácticas fraudulentas en contratos anteriores, queda inhabilitada por un período de 10 años para participar en licitaciones públicas, garantizando así la transparencia y legalidad en futuras contrataciones.

    p.mb-4 Ejemplos de inhabilidades en la Ley 80 de 1993:

    .row.bg-fonto-3.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row
          .col-5.d-none.d-xl-block(data-aos="zoom-in")
            img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7
            SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
              .row.mb-4.justify-content-center.h-100
                .col-12(data-aos='zoom-in')
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-29.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Interdicción judicial
                    p.px-1.text-small.mb-0.d-flex.text-center Cuando una persona ha sido declarada incapaz mediante sentencia judicial.
              .row.mb-4.justify-content-center.h-100
                .col-12(data-aos='zoom-in')
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-30.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Condenas penales
                    p.px-1.text-small.mb-0.d-flex.text-center Personas condenadas por delitos contra la administración pública.
              .row.mb-4.justify-content-center.h-100
                .col-12(data-aos='zoom-in')
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-31.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Sanciones disciplinarias o fiscales
                    p.px-1.text-small.mb-0.d-flex.text-center Personas inhabilitadas por fallos de la Procuraduría o la Contraloría.
              .row.mb-4.justify-content-center.h-100
                .col-12(data-aos='zoom-in')
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-32.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Mora
                    p.px-1.text-small.mb-0.d-flex.text-center Retraso en el cumplimiento de obligaciones tributarias o parafiscales, por lo que se generan intereses de mora y sanciones.
              .row.mb-4.justify-content-center.h-100
                .col-12(data-aos='zoom-in')
                  .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                    img.mx-auto.mb-4(src='@/assets/curso/unidad/img-33.svg', style='width: 80px')
                    p.text-bold.mb-4.text-center Inhabilidad por parentesco
                    p.px-1.text-small.mb-0.d-flex.text-center Relación familiar entre el contratista y los servidores públicos que intervienen en la contratación.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 3.2
        h2 Incompatibilidades

    .row.bg-fondo-2.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        p.mb-4 Las incompatibilidades son situaciones de conflicto de interés que surgen en la relación entre las partes, durante un proceso de contratación estatal, afectando la imparcialidad, transparencia y la debida ejecución del contrato. A diferencia de las inhabilidades, las incompatibilidades pueden ser subsanables si se eliminan los factores que generan el conflicto.
        p.mb-4 Sus características, son:

        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Conflicto de interés
                p.text-small.px-4.text-center.pb-2 Se presenta cuando una persona tiene intereses particulares que entran en contradicción con los intereses públicos.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Subsanabilidad
                p.text-small.px-4.text-center.pb-2 En algunos casos, es posible remover el conflicto que origina la incompatibilidad para que el proceso contractual pueda continuar.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Relación temporal
                p.text-small.px-4.text-center.pb-2 Pueden surgir durante cualquier etapa del proceso contractual: selección, adjudicación o ejecución.

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-verde.p-4(data-aos="fade-up").d-flex.align-items-center
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-37.svg', alt='Texto que describa la imagen')
          .my-auto
            p.pe-xl-3.mb-0 <b>Las incompatibilidades</b> surgen de conflictos de interés entre las partes que intervienen en la contratación pública y tienen como objetivo evitar situaciones que puedan comprometer la objetividad y transparencia del proceso. A diferencia de las inhabilidades, las incompatibilidades pueden resolverse si se eliminan las circunstancias que las originan.
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos="fade-up").d-flex.align-items-center
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-40.svg', alt='Texto que describa la imagen')
          .my-auto
            p.pe-xl-3.mb-0 <b>Los conflictos de interés</b> se presentan cuando existe una relación directa o indirecta entre el contratista y los funcionarios encargados de dirigir, evaluar o adjudicar el contrato. Estas situaciones afectan la imparcialidad del proceso, dado que incluyen vínculos familiares, económicos o laborales que pueden comprometer la neutralidad y equidad en la toma de decisiones.


    p.mb-4 Un caso de aplicación ocurre cuando un funcionario público pretende adjudicar un contrato a una empresa en la que su hermano es socio, lo cual genera un conflicto de interés evidente que afecta la transparencia y podría invalidar el proceso si no se corrige.

    p.mb-4 Ejemplos de incompatibilidades en la Ley 80 de 1993:

    .row.bg-fondo-3.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Ejercicio simultáneo de funciones
                p.text-small.px-4.text-center.pb-2 Cuando un servidor público o contratista ejerce actividades privadas que interfieren con su función estatal.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Relación contractual con la entidad pública
                p.text-small.px-4.text-center.pb-2 Contratar con una entidad en la que la persona ejerce influencia o toma decisiones.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Participación en varias etapas del proceso contractual
                p.text-small.px-4.text-center.pb-2 Un mismo proveedor no puede participar en la estructuración, licitación y ejecución del contrato.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Conflictos por interés económico
                p.text-small.px-4.text-center.pb-2 Relación de dependencia o intereses económicos con otros proponentes o servidores públicos.

    p.mb-4 <b>Tabla 1.</b> Diferencias entre Inhabilidades e Incompatibilidades

    .row.mb-4
      .col-12.col-md-10.mx-auto
        .tabla-a
          table
            thead
              tr
                th.text-center.text-white.bg-verde-oscuro(width="28%") Aspecto
                th.text-center.text-white.bg-verde-oscuro Inhabilidades
                th.text-center.text-white.bg-verde-oscuro Incompatibilidades
            tbody
              tr
                td.text-center.text-bold.bg-verde-claro Causalidad
                td.text-center.bg-verde-claro Situaciones <b>objetivas y preexistentes</b>.
                td.text-center.bg-verde-claro Situaciones de <b>conflicto de interés</b>.
              tr
                td.text-center.text-bold.bg-verde-claro Subsanabilidad
                td.text-center.bg-verde-claro <b>No son subsanables</b>.
                td.text-center.bg-verde-claro <b>Pueden ser subsanables</b> si se elimina el conflicto.
              tr
                td.text-center.text-bold.bg-verde-claro Temporalidad
                td.text-center.bg-verde-claro Generalmente <b>preexistentes</b> al proceso.
                td.text-center.bg-verde-claro Pueden surgir <b>durante</b> cualquier etapa contractual.
              tr
                td.text-center.text-bold.bg-verde-claro Naturaleza
                td.text-center.bg-verde-claro Relacionadas con la <b>idoneidad o legalidad</b>.
                td.text-center.bg-verde-claro Relacionadas con la <b>imparcialidad</b>.
              tr
                td.text-center.text-bold.bg-verde-claro Ejemplo común
                td.text-center.bg-verde-claro Condena penal o sanción fiscal.
                td.text-center.bg-verde-claro Ejercicio simultáneo de actividades públicas y privadas.

    p.mb-4 Las inhabilidades e incompatibilidades en la contratación estatal, son mecanismos fundamentales que garantizan la transparencia en los procesos, evitando la corrupción y posibles abusos de poder. Estas restricciones promueven la ética pública, asegurando que prime el interés general sobre los intereses particulares, y favorecen la igualdad de oportunidades para todos los proponentes, protegiendo así los recursos públicos y garantizando su adecuada ejecución.

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .d-flex.align-items-start(data-aos='fade-up').d-flex.align-items-center
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-45.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El cumplimiento de estas disposiciones es de carácter obligatorio, y su desconocimiento puede derivar en la nulidad del contrato, así como en sanciones disciplinarias y responsabilidad fiscal o penal para las partes involucradas.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 3.3
        h2 Objetivo de las inhabilidades e incompatibilidades

    p.mb-4 Las inhabilidades e incompatibilidades en la contratación estatal, cumplen un objetivo fundamental: asegurar que los procesos se desarrollen de manera transparente, legal y ética, protegiendo siempre el interés general y los recursos públicos. A continuación, se explican de manera pedagógica y detallada los objetivos principales que persiguen:

    p.text-bold.mb-4 Prevenir la corrupción
    p.mb-4 Uno de los mayores riesgos en la contratación pública, es la posibilidad de prácticas irregulares o actos de corrupción que perjudiquen al Estado y a la sociedad en general. Las inhabilidades e incompatibilidades actúan como barreras legales para impedir que personas naturales o jurídicas que tienen antecedentes negativos participen en estos procesos:

    .row.mb-4
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Inhabilidades y prevención")(data-aos="fade-up")
            p Las inhabilidades se centran en situaciones objetivas, como condenas penales, sanciones fiscales o incumplimientos previos en contratos estatales. Por ejemplo, si una persona ha sido condenada por peculado o corrupción, queda inhabilitada automáticamente, evitando que vuelva a manejar recursos públicos y genere nuevos riesgos.
          .div(titulo="Incompatibilidades y conflictos de interés")(data-aos="fade-up")
            p Las incompatibilidades, por su parte, se enfocan en evitar conflictos de interés, donde un funcionario o participante pueda favorecer de manera indebida a una persona o empresa. Por ejemplo, si un funcionario adjudica un contrato a un familiar cercano, se vulnera la transparencia y se abre la puerta a prácticas corruptas.

    p.mb-4 Imaginemos que una empresa constructora incumplió un contrato estatal, abandonando una obra pública y perjudicando a la comunidad. Las normas de inhabilidad impedirán que esa empresa participe en futuras licitaciones, protegiendo al Estado de repetir la experiencia negativa.

    p.text-bold.mb-4 Garantizar la transparencia

    p.mb-4 La transparencia es un pilar esencial en la contratación estatal porque permite que los procesos sean equitativos, imparciales y verificables por cualquier ciudadano. Las inhabilidades e incompatibilidades buscan asegurar que las decisiones sean objetivas: Los contratos deben adjudicarse con base en méritos, idoneidad y capacidad, y no por relaciones personales, influencias o favoritismos.

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-verde.p-4(data-aos="fade-up").d-flex.align-items-center
          span Además, al regular y excluir a personas o empresas con conflictos de interés, se garantiza que el proceso se enfoque únicamente en el interés general. Asimismo, se proteja la igualdad de oportunidades: Todos los proponentes deben tener las mismas posibilidades de competir por un contrato, evitando privilegios indebidos.<br>Si un funcionario adjudica un contrato de mantenimiento vial a una empresa de la cual su hermano es socio, se rompe la imparcialidad del proceso. Aquí, la incompatibilidad actúa como una herramienta para garantizar que el contrato sea asignado a quien realmente cumpla con los requisitos y méritos.
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')

    p.text-bold.mb-4 Proteger la legalidad

    .row.mb-4
      .col-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8
        p.mb-4(data-aos="fade-up") La legalidad es otro de los objetivos clave de las inhabilidades e incompatibilidades, ya que estas restricciones aseguran que los procedimientos se ajusten a la norma jurídica y se preserven los principios de la función pública. Al impedir que personas con antecedentes judiciales, fiscales o disciplinarios participen, se garantiza que los recursos públicos estén en manos de actores confiables y transparentes.
        span Cuando los procesos de contratación son transparentes y legales, los ciudadanos confían en la gestión pública y en el uso adecuado de los recursos. Estas restricciones refuerzan la ética pública al exigir que los servidores y contratistas actúen siempre con integridad y en cumplimiento de la ley.

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        .d-flex.align-items-start(data-aos='fade-up').d-flex.align-items-center
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-49.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Si una empresa no está al día en el pago de impuestos o en las contribuciones a la seguridad social, esto indica una falta de responsabilidad financiera. La inhabilidad correspondiente evita que esta empresa contrate con el Estado, protegiendo la legalidad y el interés de los recursos públicos.

    p.mb-4 En resumen, las inhabilidades e incompatibilidades son herramientas jurídicas que cumplen un papel fundamental en la contratación estatal, al:

    .row.mb-4
      .col-12.col-xl-8
        .bg-rojo-claro.d-flex.flex-column.justify-content-center.p-4.h-100(data-aos="fade-up")
          div.d-flex.mb-2
            p.me-3.mb-0 • 
            p.mb-0 Prevenir la corrupción, al excluir a personas y empresas que representan un riesgo.
          div.d-flex.mb-2
            p.me-3.mb-0 • 
            p.mb-0 Garantizar la transparencia, al asegurar procesos objetivos, imparciales y equitativos.
          div.d-flex.mb-2
            p.me-3.mb-0 • 
            p.mb-0 Proteger la legalidad, al preservar la integridad de los procedimientos y fortalecer la confianza ciudadana.
          div.d-flex.mb-2
            p.me-3.mb-0 • 
            p.mb-0 De esta manera, se promueve una gestión pública ética, responsable y eficiente, asegurando que los recursos del Estado se utilicen de manera adecuada y en beneficio del bien común.
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')

    .bg-gris.p-4(data-aos="fade-up").mb-5
      span A manera de conclusión, podemos afirmar que las inhabilidades e incompatibilidades en la contratación estatal son herramientas indispensables para garantizar la transparencia, imparcialidad y legalidad de los procesos contractuales. Estas restricciones permiten prevenir la corrupción, proteger los recursos públicos y asegurar que los contratos estatales respondan al interés general. A través de su aplicación rigurosa, se fortalece la confianza en la administración pública y se promueve un uso adecuado de los recursos estatales en beneficio de la sociedad.

    .bg-full-width.border-top-9-azul.mb-5
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/74568") Contratos administrativos: culturas y sistemas jurídicos comparados
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=57mZ6nBdels") [Vídeo] Etapas de la contratación estatal en Colombia
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sistemas numéricos y álgebra de Boole',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la contratación estatal?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un proceso privado entre particulares.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proceso mediante el cual el Estado adquiere bienes, obras o servicios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un acto informal sin regulación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un procedimiento exclusivo para obras públicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es el objetivo principal de la contratación estatal?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Favorecer a grandes contratistas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Satisfacer necesidades colectivas y cumplir los fines del Estado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir impuestos para contratistas privados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fomentar la privatización de servicios públicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes leyes regula la contratación estatal en Colombia?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 79 de 2000', esCorrecta: false },
            { id: 'b', texto: 'Ley 80 de 1993', esCorrecta: true },
            { id: 'c', texto: 'Ley 1150 de 2007', esCorrecta: false },
            { id: 'd', texto: 'Ley 1474 de 2011', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué principio garantiza la participación equitativa de los proponentes?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Principio de eficiencia', esCorrecta: false },
            { id: 'b', texto: 'Principio de legalidad', esCorrecta: false },
            { id: 'c', texto: 'Principio de transparencia', esCorrecta: true },
            { id: 'd', texto: 'Principio de formalidad', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué son las inhabilidades?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Causales objetivas que impiden participar en contratación estatal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Restricciones temporales que dependen de la voluntad de las partes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conflictos de interés que se pueden subsanar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitaciones económicas de los proponentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es un ejemplo de inhabilidad?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estar al día con las obligaciones fiscales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Haber sido condenado penalmente por peculado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tener contrato vigente con una empresa privada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser socio minoritario en una empresa familiar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué son las incompatibilidades?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Situaciones objetivas que impiden participar en contratación estatal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conflictos de interés que afectan la imparcialidad del proceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Restricciones legales permanentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incapacidad para presentar propuestas técnicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes NO es una característica de las inhabilidades?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Objetividad', esCorrecta: false },
            { id: 'b', texto: 'Subsanabilidad', esCorrecta: true },
            { id: 'c', texto: 'Legalidad', esCorrecta: false },
            { id: 'd', texto: 'Preexistencia', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Un funcionario público adjudica un contrato a su hermano. Esto es un ejemplo de:',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Inhabilidad por parentesco', esCorrecta: false },
            {
              id: 'b',
              texto: 'Incompatibilidad por conflicto de interés',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Ineficiencia del contrato', esCorrecta: false },
            { id: 'd', texto: 'Formalidad del proceso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la consecuencia de desconocer las inhabilidades e incompatibilidades?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Extensión del contrato', esCorrecta: false },
            { id: 'b', texto: 'Nulidad del contrato', esCorrecta: true },
            { id: 'c', texto: 'Mejora del proceso', esCorrecta: false },
            { id: 'd', texto: 'Contratación directa', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué mecanismo garantiza la legalidad y transparencia en los procesos?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Asignación directa', esCorrecta: false },
            { id: 'b', texto: 'Control y vigilancia', esCorrecta: true },
            { id: 'c', texto: 'Prórroga automática', esCorrecta: false },
            { id: 'd', texto: 'Subcontratación libre', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué ley define los contratos estatales como actos generadores de obligaciones?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 1150 de 2007', esCorrecta: false },
            { id: 'b', texto: 'Ley 80 de 1993', esCorrecta: true },
            { id: 'c', texto: 'Ley 1474 de 2011', esCorrecta: false },
            { id: 'd', texto: 'Ley 152 de 1994', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué principio obliga a optimizar el uso de recursos públicos?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Principio de economía', esCorrecta: true },
            {
              id: 'b',
              texto: 'Principio de responsabilidad',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Principio de transparencia', esCorrecta: false },
            { id: 'd', texto: 'Principio de igualdad', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de los siguientes elementos es esencial en un contrato estatal?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Contratista anónimo', esCorrecta: false },
            { id: 'b', texto: 'Objeto ilícito', esCorrecta: false },
            { id: 'c', texto: 'Voluntad de las partes', esCorrecta: true },
            { id: 'd', texto: 'Ausencia de presupuesto', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'La nulidad absoluta de un contrato ocurre cuando:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se incumplen normas de orden público.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Existe un error de redacción en el contrato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hay acuerdo entre las partes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El contrato se firma verbalmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué mecanismo previene prácticas irregulares y corrupción?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inhabilidades e incompatibilidades',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Prórrogas presupuestales', esCorrecta: false },
            { id: 'c', texto: 'Auditoría parcial', esCorrecta: false },
            { id: 'd', texto: 'Proyectos temporales', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿En qué etapa ocurre la "ineficacia funcional" de un acto jurídico?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Antes de la firma del contrato',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Durante la ejecución del contrato',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Después de firmado y debido a incumplimientos',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Al momento de la adjudicación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál es la finalidad principal del contrato estatal?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cumplir fines del interés privado',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asegurar el bienestar general y satisfacer necesidades colectivas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Maximizar los intereses económicos del contratista',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir gastos del Estado en infraestructura',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué garantiza el control y vigilancia en la contratación estatal?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ajustes discrecionales en los contratos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso eficiente y transparente de los recursos públicos',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Adjudicación de contratos sin licitación',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Participación limitada de oferentes',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué entidad ejerce control fiscal en la contratación estatal?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Procuraduría General', esCorrecta: false },
            {
              id: 'b',
              texto: 'Contraloría General de la República',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Superintendencia de Sociedades',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Ministerio de Hacienda', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 21,
          texto: '¿Cuándo un acto jurídico es considerado ineficaz?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando tiene una causa lícita',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando carece de algún requisito esencial',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuando beneficia a las partes',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando cumple con los procedimientos legales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 22,
          texto:
            '¿Qué ocurre cuando una empresa no paga sus obligaciones fiscales?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se declara su incapacidad jurídica',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Queda inhabilitada para contratar con el Estado',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se le otorga un plazo de prórroga',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se acepta su propuesta con condiciones',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 23,
          texto: 'La formalidad en un contrato estatal implica que:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El contrato debe ser verbal',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El contrato debe constar por escrito y cumplir requisitos legales',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Las partes acuerdan informalmente su contenido',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No se requieren documentos formales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 24,
          texto: '¿Qué sucede si un contrato tiene un objeto ilícito?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es declarado ineficaz o nulo',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Es modificado automáticamente',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se aprueba con restricciones',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Continúa bajo evaluación', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 25,
          texto:
            '¿Qué principio asegura la adjudicación basada en méritos y capacidad?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Principio de igualdad', esCorrecta: false },
            {
              id: 'b',
              texto: 'Principio de selección objetiva',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Principio de transparencia', esCorrecta: false },
            {
              id: 'd',
              texto: 'Principio de responsabilidad',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 26,
          texto:
            '¿Cómo se denomina al proceso en el cual se selecciona al contratista?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Licitación pública', esCorrecta: true },
            { id: 'b', texto: 'Declaración de ineficacia', esCorrecta: false },
            { id: 'c', texto: 'Contrato de adhesión', esCorrecta: false },
            { id: 'd', texto: 'Evaluación informal', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 27,
          texto:
            '¿Qué organismo declara ineficacia de un contrato por falta de presupuesto?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ministerio Público', esCorrecta: false },
            { id: 'b', texto: 'Contraloría General', esCorrecta: true },
            { id: 'c', texto: 'Consejo de Estado', esCorrecta: false },
            { id: 'd', texto: 'Procuraduría General', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 28,
          texto:
            '¿Qué característica diferencia las incompatibilidades de las inhabilidades?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las incompatibilidades son subsanables',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Las inhabilidades son temporales',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las incompatibilidades son preexistentes',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las inhabilidades surgen durante la ejecución',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 29,
          texto:
            '¿Qué figura protege la legalidad de los procesos contractuales?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Declaración de nulidad', esCorrecta: true },
            { id: 'b', texto: 'Auditoría fiscal', esCorrecta: false },
            { id: 'c', texto: 'Contratación directa', esCorrecta: false },
            { id: 'd', texto: 'Formalidad básica', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 30,
          texto: 'El contrato estatal debe alinearse con:',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Intereses del contratista', esCorrecta: false },
            {
              id: 'b',
              texto: 'Principios de economía, transparencia y eficiencia',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Objetivos del sector privado',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Procedimientos informales', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Felicidades! Has superado la prueba con éxito.',
      mensaje_final_reprobado:
        'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
