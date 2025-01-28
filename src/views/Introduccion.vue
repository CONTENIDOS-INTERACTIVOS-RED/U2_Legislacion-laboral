<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.mb-4.align-items-start.bg-verde-claro.p-4(data-aos="fade-up").d-flex.align-items-center
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-2.svg', alt='Texto que describa la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El mundo de la contratación estatal es un escenario clave para el desarrollo de los países, donde el Estado, como actor principal, garantiza la adquisición de bienes y servicios de manera transparente, eficiente y justa. Esta unidad temática lo invita a explorar las reglas, procedimientos y principios que rigen la contratación estatal en Colombia, comprendiendo su importancia en la gestión pública y en la construcción de relaciones equitativas entre el sector público y los particulares.
        p.mb-0 En esta unidad, el estudiante comenzará a adentrarse en los fundamentos jurídicos de la contratación estatal, entendiendo cómo las normas que la regulan garantizan la eficiencia del gasto público, el cumplimiento de la ley y el uso adecuado de los recursos del Estado. Se trata no solo de conocer las leyes, sino de analizar cómo estas inciden en la administración pública y en la prestación de bienes y servicios a la sociedad.

    .d-flex.mb-4.align-items-start.bg-gris.p-4(data-aos='fade-up').d-flex.align-items-center
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-3.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.text-bold.mb-1 ¿Sabías que..?

        p.pe-xl-3.mb-0 La contratación estatal está cimentada en principios como la transparencia, la igualdad, la economía y la responsabilidad, que aseguran la participación justa de todos los interesados y el cumplimiento de los fines del Estado.

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        p.mb-4 A lo largo de esta unidad, el estudiante descubrirá cómo funcionan los procesos de selección, las modalidades de contratación y las exigencias que deben cumplir tanto el Estado como los contratistas para evitar irregularidades y garantizar resultados eficientes y de calidad.
        p.mb-4 Asimismo, se abordarán los mecanismos de control y vigilancia que permiten identificar posibles incumplimientos o actos de corrupción, así como las consecuencias jurídicas y administrativas que se derivan de estas situaciones. Se analizarán también ejemplos prácticos y casos reales que permitirán al estudiante conectar los conceptos teóricos con situaciones cotidianas, generando una visión crítica y analítica sobre la contratación estatal.
        .d-flex.align-items-start.bg-verde.p-4(data-aos="fade-up").d-flex.align-items-center
          div.d-flex.mb-2
            p.me-3.mb-0 •
            p.mb-0 ¿Qué garantiza que una contratación sea transparente y justa? 
          div.d-flex.mb-2
            p.me-3.mb-0 •
            p.mb-0 ¿Cuáles son las obligaciones y derechos de las partes en un contrato estatal? 
          div.d-flex.mb-0
            p.me-3.mb-0 •
            p.mb-0 ¿Qué ocurre cuando se incumplen los principios o normas que la regulan?
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')

    p.mb-4 Estas preguntas serán fundamentales para abordar y comprender la contratación pública como una herramienta que impulsa el desarrollo económico y social del país.<br>Al final de esta unidad, el estudiante no solo tendrá claridad sobre el marco normativo y los principios de la contratación estatal, sino que también contará con herramientas para analizar, identificar y resolver problemas relacionados con estos procesos. Además, podrá valorar la contratación estatal como un mecanismo indispensable para fortalecer la transparencia, la eficiencia y el cumplimiento de los fines del Estado.

    .bg-rojo-claro.p-4(data-aos="fade-up")
      span ¡Prepárese para adentrarse en el fascinante mundo de la contratación estatal! Esta unidad es una oportunidad para entender cómo funcionan las relaciones entre el Estado y los particulares, conectando la teoría con el ejercicio práctico y preparándose para enfrentar los retos profesionales del sector público y privado.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
