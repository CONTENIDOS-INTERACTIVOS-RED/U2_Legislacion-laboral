<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2.Concepto de Derecho tributario y su relación con la contratación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 El Derecho tributario es una disciplina fundamental que regula la relación entre los ciudadanos y el Estado en materia de impuestos y contribuciones, garantizando el financiamiento de servicios y programas públicos.
    .row.bg-gris.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Derecho tributario 
          p.mb-5 En el PDF Derecho tributario, se profundiza en los principios que rigen esta rama del derecho, como la equidad y la progresividad, y se analiza cómo el sistema tributario colombiano aplica estas normas para asegurar una distribución justa de la carga fiscal. Además, se abordan las implicaciones del Derecho tributario internacional y los esfuerzos por evitar la doble tributación y promover prácticas fiscales transparentes.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/nombre.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>Derecho tributario.
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

    #t_2_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.1
        h2 Evolución del derecho tributario

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .bg-verde-claro.p-4.mb-4(data-aos="fade-up")
          span El Derecho tributario ha evolucionado significativamente a lo largo de la historia. En las sociedades antiguas, los tributos eran esencialmente aportes en especie o trabajo, que se entregaban a los gobernantes como un deber impuesto por el poder político o militar. Con el tiempo, el desarrollo de los Estados modernos llevó a la formalización de los sistemas tributarios, con la introducción de impuestos regulares y normas específicas para su recaudación.
        span En el siglo XX, el crecimiento de los Estados de bienestar y las economías globalizadas, llevó a una mayor complejidad en los sistemas tributarios, con la creación de nuevos impuestos y mecanismos de control. Más recientemente, la tecnología ha transformado el Derecho tributario, permitiendo la automatización de procesos fiscales, el intercambio de información entre países y la implementación de estrategias para combatir la evasión fiscal y el lavado de activos.

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        span El Derecho tributario puede definirse como el conjunto de normas que regulan cómo el Estado recauda los recursos que necesita para financiar sus actividades, a través de impuestos, tasas y contribuciones. Este campo del derecho busca equilibrar la necesidad de ingresos públicos con el respeto a los derechos de los ciudadanos, asegurando que los tributos sean justos, equitativos y adecuados a la capacidad de pago de cada contribuyente. En esencia, es la herramienta que garantiza que todos contribuyamos de manera proporcional al desarrollo y sostenimiento de la sociedad.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.2
        h2 2.2	Relación entre el Derecho tributario y la contratación

    p.mb-4 En el ámbito de la contratación, el Derecho tributario desempeña un papel fundamental, porque toda actividad contractual, tanto en el sector público como en el privado, tiene implicaciones tributarias. En el contexto de la contratación pública, estas relaciones son especialmente relevantes debido a la necesidad de asegurar que los recursos públicos sean manejados de manera eficiente y conforme a las leyes fiscales.

    .row.mb-4
      .col-12.d-flex.align-items-start.bg-verde-claro.p-4(data-aos="fade-up")
        img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-38.svg', alt='Texto que describa la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Los aspectos tributarios en la contratación incluyen la aplicación de impuestos, la responsabilidad de las entidades contratantes en la retención y el reporte de tributos, y el cumplimiento de las obligaciones fiscales por parte de los contratistas.

    p.mb-4 Conozcamos algunos de ellos:

    .row.mb-4
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Retenciones tributarias en la contratación pública")
            p Uno de los principales vínculos entre el Derecho tributario y la contratación, es la obligación de las entidades públicas de actuar como agentes de retención. Esto significa que, al realizar pagos a contratistas, las entidades deben retener ciertos impuestos, como el impuesto sobre la renta o el impuesto al valor agregado (IVA), y transferirlos a la administración tributaria. Esta medida asegura que los contratistas cumplan con sus obligaciones fiscales, evitando posibles evasiones.<br>Por ejemplo, en Colombia, la retención en la fuente es un mecanismo obligatorio en la contratación pública. La entidad contratante retiene un porcentaje del pago al contratista y lo reporta a la Dirección de Impuestos y Aduanas Nacionales (DIAN). Este procedimiento es clave para garantizar que el Estado recaude los impuestos correspondientes de manera eficiente.

          .div(titulo="Obligaciones tributarias de los contratistas")
            p Los contratistas, ya sean personas naturales o jurídicas, están obligados a cumplir con las normativas tributarias relacionadas con sus ingresos derivados de contratos públicos o privados. Esto incluye:<br> o	Declarar y pagar impuestos sobre la renta, por los ingresos obtenidos.<br> o	Liquidar y pagar el IVA si están gravados.<br> o	Registrar y cumplir con el impuesto de industria y comercio (ICA) en la jurisdicción donde desarrollen sus actividades.<br>El incumplimiento de estas obligaciones puede derivar en sanciones tributarias, la suspensión de pagos contractuales o la inhabilitación para contratar con el Estado en el futuro.

    .row.mb-4
      .col-12.col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Certificaciones de cumplimiento tributario")
            p En la contratación pública, es común que las entidades contratantes exijan a los contratistas certificados de cumplimiento tributario antes de suscribir contratos o realizar pagos. Estos certificados demuestran que los contratistas están al día con sus obligaciones fiscales, lo que asegura la legalidad y la transparencia en los procesos de contratación.
          .div(titulo="Relación con el interés público")
            p El Derecho tributario y la contratación se encuentran en su propósito de proteger el interés público. En primer lugar, la recaudación tributaria derivada de la contratación contribuye al financiamiento de los programas y servicios estatales. Por otro lado, la supervisión tributaria de los procesos de contratación pública garantiza que los recursos del Estado no sean canalizados hacia contratistas que incumplan sus obligaciones fiscales.
          .div(titulo="Incentivos tributarios en la contratación")
            p En algunos casos, el Derecho tributario también establece incentivos o beneficios fiscales relacionados con la contratación. Por ejemplo, ciertos contratos destinados al desarrollo de infraestructura o proyectos sociales pueden estar exentos de algunos impuestos, o los contratistas pueden acceder a deducciones tributarias por inversiones realizadas en el marco del contrato.
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')

    #t_2_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.3
        h2 Importancia de la relación entre el derecho tributario y la contratación
    p.mb-4 El vínculo entre el Derecho tributario y la contratación es esencial para asegurar la transparencia y legalidad en el manejo de los recursos públicos.

    .row.bg-amarillo.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Relación entre el Derecho tributario y la contratación 
          p.mb-5 En el PDF Relación entre el Derecho tributario y la contratación, se analiza cómo los procesos de contratación, especialmente en el ámbito público, contribuyen al fortalecimiento del sistema tributario mediante el cumplimiento de obligaciones fiscales por parte de los contratistas. Asimismo, se destacan los mecanismos legales que previenen la evasión fiscal y promueven la eficiencia en la recaudación de impuestos, asegurando que los recursos del Estado sean utilizados de manera equitativa y responsable.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Relación entre el Derecho tributario y la contratación.
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/113851") Manual de derecho financiero y tributario: parte general
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=4W6tCHv6NBk") [Vídeo] Derecho Tributario: ¿Qué es? [Fácil y con ejemplos]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
