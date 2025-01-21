<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .d-flex.align-items-start.bg-verde.p-4.mb-4(data-aos="fade-up")
      img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
      .my-auto
        p.pe-xl-3.mb-0 El mundo laboral está lleno de oportunidades, pero también de reglas que lo hacen funcionar de manera justa y transparente. Esta unidad temática lo invita a conocer esas reglas, entender cómo se aplican y descubrir por qué son tan importantes para el día a día de trabajadores y empleadores. No se trata solo de aprender leyes, sino de entender cómo estas influyen en la vida laboral y cómo usarlas para construir relaciones laborales justas y efectivas.<br>En esta unidad, el estudiante comenzará a explorar tres áreas claves que conectan con los derechos laborales y la contratación: 
    .row.mb-4
      .col-12.col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Derecho administrativo")
            p A través del Derecho administrativo, aprenderá cómo el Estado organiza las contrataciones, especialmente en el sector público. Descubrirá qué reglas aseguran que estos procesos sean claros y beneficiosos para todas las partes. 
          .div(titulo="Derecho tributario")
            p Con el Derecho tributario, se dará cuenta de cómo los impuestos están presentes en cada contrato laboral o comercial. Entenderá cómo estas obligaciones impactan tanto a los empleadores como a los trabajadores y por qué son esenciales para que el sistema funcione.
          .div(titulo="Derecho laboral")
            p El Derecho laboral le mostrará la importancia de derechos como el salario, la seguridad social y las condiciones de trabajo dignas. Además, comprenderá cómo estos derechos se protegen en las leyes y qué hacer para garantizar su cumplimiento.
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p.mb-4 Cada una de estas disciplinas aporta herramientas fundamentales para entender cómo funcionan los contratos y los derechos que los acompañan.<br>A lo largo de esta unidad, el estudiante no solo aprenderá teoría, sino que también conectará esos conceptos con situaciones reales. ¿Qué hace justo un contrato? ¿Cómo se garantiza que un empleador cumpla con sus obligaciones? ¿Qué pasa cuando un contrato no respeta las normas? Estas son preguntas claves que se abordarán, despertando su curiosidad y mostrando cómo este conocimiento se aplica en la práctica.
        .bg-verde-claro.p-4
          span Al final de esta unidad, no solo tendrá claridad sobre estas áreas del Derecho, sino que también contará con herramientas para analizar y resolver problemas laborales con confianza. Es el inicio de un recorrido para entender cómo las leyes laborales ayudan a construir entornos de trabajo más justos y responsables.<br>¡Prepárese para descubrir todo lo que hay detrás de los derechos laborales y la contratación! Esta unidad es una oportunidad para conectar la teoría con el mundo real y prepararse para los desafíos del futuro profesional.

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
