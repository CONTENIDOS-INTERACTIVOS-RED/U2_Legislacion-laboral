<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Ineficacia de los actos jurídicos: inexistencia y nulidad'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

      .col-12.col-xl-8
        .bg-verde-claro.p-4(data-aos="fade-up")
          span En el contexto actual, la contratación estatal es una herramienta fundamental para garantizar el cumplimiento de los fines del Estado y promover el desarrollo económico y social del país. Esta unidad temática le permitirá al estudiante comprender los principios, normativas y mecanismos que rigen los contratos estatales, así como los retos y consecuencias jurídicas que surgen en este proceso. No se trata solo de estudiar leyes, sino de entender cómo estas normativas aseguran la transparencia, eficiencia y legalidad en la contratación pública.

    p.text-bold.mb-4 Contratación estatal
    p.mb-4 Para conocer qué es la contratación estatal, lo invitamos a ver el siguiente video.

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        .video
          <iframe width="1903" height="748" src="https://www.youtube.com/embed/yLUpNYJfpfk" title="Contratación estatal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
    p.text-bold.mb-4 Importancia de la contratación estatal
    p.mb-4 La contratación estatal es fundamental porque constituye un mecanismo que permite al Estado ejecutar sus políticas públicas y garantizar el bienestar de la población. Además, es un proceso que debe ser vigilado y controlado para evitar irregularidades, actos de corrupción o incumplimiento de los contratos.

    .row.bg-rojo-claro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        span En palabras de la Corte Constitucional (Sentencia C-949 del 2001), la contratación estatal <b>"es una actividad instrumental que permite a la administración pública cumplir con los fines esenciales del Estado"</b>, lo que refuerza su importancia en la garantía del interés general.

    p.mb-4 Imagine que una entidad estatal requiere construir un hospital en una región apartada del país. Para ello, se debe realizar un proceso de contratación pública transparente, en el cual participan varias empresas constructoras. La entidad estatal selecciona a la empresa que ofrezca las mejores condiciones técnicas y económicas, garantizando la construcción del hospital en el menor tiempo posible y con los recursos presupuestales asignados. Este proceso ejemplifica la aplicación de los principios de economía, transparencia e igualdad.

    .d-flex.mb-4.align-items-start.bg-amarillo.p-4(data-aos='fade-up').d-flex.align-items-center
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-6.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 La contratación estatal es un proceso jurídico clave para el cumplimiento de los fines del Estado y la promoción del bienestar general. A través de la aplicación de principios como la transparencia, economía y responsabilidad, se garantiza que los recursos públicos se utilicen de manera eficiente y en beneficio de la sociedad.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Concepto de acto jurídico

    .d-flex.mb-4.align-items-start.bg-gris.p-4(data-aos='fade-up').d-flex.align-items-center
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-7.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.text-bold.mb-1 ¿Sabías que..?
        p.pe-xl-3.mb-0 Un acto jurídico es una manifestación de voluntad destinada a crear, modificar, transferir o extinguir derechos y obligaciones dentro del marco del derecho. Es decir, se trata de una acción consciente y deliberada que produce efectos jurídicos reconocidos por el ordenamiento legal. 

    p.mb-4 También puede definirse acto jurídico es toda conducta humana, voluntaria y lícita, cuya finalidad es generar consecuencias jurídicas, es decir, establecer, modificar, transferir o extinguir relaciones y situaciones jurídicas entre personas o entidades, en virtud del reconocimiento del ordenamiento legal.

    .row.bg-fondo-2.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        #t_1_2.titulo-segundo(data-aos="flip-up")
          div.d-flex
            span.me-3 1.2
            h2 Características esenciales del acto jurídico

        p.mb-4 Todo acto jurídico se origina con una declaración de voluntad que debe cumplir ciertas condiciones para ser considerada válida:
        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Seria
                p.text-small.px-4.text-center.pb-2 La seriedad implica que la intención no sea resultado de simulación, error evidente o falta de compromiso real.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Libre
                p.text-small.px-4.text-center.pb-2 La libertad asegura que la voluntad no esté influida por coacción, engaño o intimidación.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Claramente manifestada
                p.text-small.px-4.text-center.pb-2 Mientras que su manifestación puede ser verbal, escrita o incluso inferida de las acciones de las partes.

    .row.bg-rojo-claro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        span Un aspecto crucial del acto jurídico es su finalidad lícita, es decir, el objetivo perseguido debe ser acorde con las leyes y no contradecir principios de orden público, moral o buenas costumbres. Los actos que buscan fines contrarios al ordenamiento legal carecen de validez, dado que las normas jurídicas no pueden avalar objetivos que vayan en detrimento del bienestar colectivo.

    p.mb-4 Además, la capacidad jurídica de las partes involucradas es indispensable. Esta capacidad se divide en dos tipos: 
    
    .row.mb-4.justify-content-center.h-100
      .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-11.svg', style='width: 80px')
          p.text-bold.mb-4.text-center La de goce
          p.px-1.text-small.mb-0.d-flex.text-center Es la aptitud para ser titular de derechos y obligaciones.
      .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-12.svg', style='width: 80px')
          p.text-bold.mb-4.text-center La de ejercicio
          p.px-1.text-small.mb-0.d-flex.text-center Permite actuar por cuenta propia, para hacer valer esos derechos.

    p.mb-4 Generalmente, la ley presume que las personas mayores de edad poseen esta capacidad, salvo en casos donde exista una limitación legal, como la minoría de edad o condiciones que afecten la capacidad mental.

    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.mb-4.align-items-start.bg-verde-claro.p-4(data-aos="fade-up").d-flex.align-items-center
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-14.svg', alt='Texto que describa la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Otro elemento esencial es la forma del acto jurídico, que se refiere al modo en que este debe manifestarse para ser reconocido como válido. Algunas transacciones o acuerdos exigen formalidades específicas, como la escritura pública en contratos de compraventa de bienes inmuebles o en matrimonios, para garantizar seguridad jurídica y constituir evidencia clara del acto.
        p.mb-0 Asimismo, el acto jurídico tiene como propósito generar consecuencias jurídicas que el sistema legal reconoce. Estas consecuencias pueden incluir la creación, modificación, transferencia o extinción de derechos y obligaciones, configurándose así como el instrumento que materializa las relaciones jurídicas en la sociedad.
    
    .row.bg-rojo-claro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        span La validez y eficacia del acto jurídico dependen de que todos estos elementos estén presentes y en consonancia con las disposiciones legales. Su ausencia o incumplimiento puede provocar que el acto sea declarado nulo o ineficaz, afectando los intereses y derechos de las partes involucradas. Por ello, los actos jurídicos deben desarrollarse bajo principios de legalidad, justicia y transparencia, asegurando así su funcionalidad y legitimidad dentro del marco jurídico y en beneficio de la sociedad.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 El acto jurídico en el marco de la contratación estatal

    p.mb-4 El acto jurídico en el marco de la contratación estatal representa un compromiso formal entre el Estado y los particulares para satisfacer necesidades colectivas mediante la adquisición de bienes, servicios y obras públicas.

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto El acto jurídico en la contratación estatal
          p.mb-5 En el PDF El acto jurídico en la contratación estatal, se analiza cómo estos actos reflejan la voluntad del Estado en pro del interés general, detallando los principios de legalidad, transparencia y control que rigen los procesos de contratación pública. Asimismo, se abordan los mecanismos de supervisión que garantizan la correcta administración de los recursos públicos, previniendo irregularidades y promoviendo el desarrollo social.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_El acto jurídico en la contratación estatal.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> El acto jurídico en la contratación estatal
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    #t_1_4.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.4
        h2 Ineficacia de los actos jurídicos

    p.mb-4 La ineficacia de los actos jurídicos es una figura clave para garantizar la legalidad y transparencia en la contratación estatal, ya que asegura que los actos que incumplen requisitos esenciales o vulneran normas imperativas carezcan de efectos jurídicos.

    .row.bg-gris.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Ineficacia de los actos jurídicos 
          p.mb-5 En el PDF Ineficacia de los actos jurídicos, se analizan los distintos tipos de ineficacia, como la nulidad absoluta, la nulidad relativa y la ineficacia automática, y sus implicaciones en los contratos celebrados por entidades públicas. Además, se profundiza en cómo esta figura protege el interés general y previene el uso indebido de los recursos públicos.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Ineficacia de los actos jurídicos.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Ineficacia de los actos jurídicos


    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/123155") Manual básico de Derecho Administrativo (14 ed.)
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=FC_6EQ7TGNg") [Vídeo] Contratación estatal en Colombia - Curso básico 1
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
