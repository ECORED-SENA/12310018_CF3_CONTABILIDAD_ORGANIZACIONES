<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Elementos y criterios generales de presentación (marco NIC/NIIF)
    p.mb-5 La adopción del marco de las #[b Normas Internacionales de Contabilidad (NIC)] y las #[b Normas Internacionales de Información Financiera (NIIF)] establece los fundamentos para que los estados financieros sean comparables tanto de manera interna (entre periodos de una misma entidad) como de forma externa (frente a organizaciones a nivel internacional).
    .box___style_5.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 Su relevancia radica en que promueve la presentación de información contable transparente y estandarizada, lo que permite que inversionistas, entidades financieras y otros terceros, aun sin acceso a los registros internos, puedan confiar en la situación económica de la empresa. Asimismo, facilita un análisis objetivo de ingresos, gastos, activos y pasivos, fortaleciendo la toma de decisiones basada en criterios técnicos y no en apreciaciones subjetivas.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img72.png', alt='').m-auto
    p.mb-5 El marco conceptual de las NIC/NIIF define los objetivos de la información financiera, las características cualitativas que debe cumplir (como relevancia y representación fiel) y los criterios para el reconocimiento y medición de las partidas contables. Funciona como una guía estructural que orienta la preparación y presentación de los estados financieros de propósito general.
    .row.align-items-center.justify-content-center.mb-0
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img73.png', alt='').m-auto
      .col-xl
        .box___style_1.mb-3(data-aos="fade-left")
          p.mb-0 La responsabilidad de cumplir estos lineamientos recae en la administración de la empresa, especialmente en el administrador, el representante legal y el contador público, quienes deben certificar que la información refleje razonablemente la realidad económica en la fecha de corte correspondiente. En determinados casos, los informes requieren además el dictamen de un revisor fiscal.
        p.mb-0 Los estados financieros surgen del sistema contable y se estructuran conforme a principios y convenciones que buscan reportar periódicamente el desempeño de la gestión. Bajo el estándar internacional, es imprescindible que los datos se registren de manera clara y verificable, garantizando la confianza de los usuarios externos.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Cambios que genera en la contabilidad de la empresa
    p.mb-5 La implementación del marco NIC/NIIF transforma la contabilidad tradicional (centrada en el cumplimiento fiscal y el registro histórico) en un sistema de #[b reporte financiero profesional orientado a la toma de decisiones]. A continuación, se presentan los principales cambios estructurales que introduce este marco:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Medición y valoración
                p.mb-0 Se supera el uso exclusivo del costo histórico y se incorporan criterios como el valor razonable, permitiendo que activos y pasivos reflejen la realidad económica actual.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img74.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Reconocimiento de ingresos
                p.mb-0 Los ingresos se reconocen cuando se cumple el principio de devengo y existe un intercambio económico sustancial, evitando la sobrestimación artificial de utilidades.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img75.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Clasificación de cuentas
                p.mb-0 Se exige la separación entre activos y pasivos corrientes y no corrientes, fortaleciendo el análisis de liquidez y solvencia.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img76.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Uniformidad técnica
                p.mb-0 Se deben aplicar políticas contables consistentes en todos los periodos, impidiendo cambios arbitrarios de método que alteren la comparabilidad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img77.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Estos ajustes fortalecen la calidad, coherencia y transparencia de la información financiera presentada.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img39.svg" style="max-width: 60px").m-auto
      .col
        h3 Aspectos positivos y negativos en su implementación
    .color___box_2
      .px-5
        p.mb-5 Como todo proceso de estandarización, la adopción del marco NIC/NIIF implica beneficios y desafíos organizacionales. La siguiente tabla sintetiza los principales:
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 7.
              span Aspectos positivos y negativos en su implementación
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Aspectos positivos
                    th.texto-left Aspectos negativos
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Transparencia]: facilita el acceso a créditos y mercados de capitales internacionales.
                    td.texto-left #[b Costo de implementación]: requiere inversión en capacitación y actualización de sistemas contables.
                  tr
                    td.ajuste-border-tabla.texto-left #[b Comparabilidad]: permite medir el desempeño frente a competidores globales.
                    td.texto-left #[b Juicio profesional]: exige alto criterio técnico del contador en la valoración de rubros complejos.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Calidad de la información]: convierte los estados financieros en herramientas útiles para anticipar riesgos y tendencias.
                    td.texto-left #[b Provisionalidad]: la utilidad contable sigue siendo estimada, pues el resultado definitivo solo se determina en la liquidación de la empresa.
        p.mb-5 Esta comparación evidencia que la implementación exige ajustes técnicos y administrativos, pero fortalece la credibilidad y utilidad de la información financiera.
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img78.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En Colombia, la aplicación de estos marcos es obligatoria conforme a la normatividad de convergencia hacia estándares internacionales. Se aplican a los estados financieros de propósito general, destinados a usuarios que no tienen acceso directo a los registros contables internos.
        p.mb-0 Existen distintos niveles de aplicación según el tamaño y naturaleza de la entidad (como grandes empresas o pequeñas y medianas entidades); sin embargo, el propósito común es garantizar que toda organización que certifique sus estados financieros cumpla con los principios de preparación y presentación establecidos en el marco internacional, bajo la responsabilidad del administrador, el representante legal y el contador público.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Propósito e importancia de los estados financieros bajo el marco NIC/NIIF
    p.mb-5 Los #[b estados financieros] constituyen el resultado final del proceso contable y tienen como propósito esencial presentar una representación fiel de la situación económica y financiera de una organización en una fecha de corte determinada. Bajo el marco de las NIC/NIIF, estos informes se elaboran con criterios técnicos uniformes que permiten ofrecer información útil, comprensible y confiable a una amplia variedad de usuarios, tales como administradores, accionistas, entidades bancarias y el Estado.
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img79.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Su función principal consiste en suministrar información estructurada que facilite el análisis de la rentabilidad, la gestión eficiente de los recursos y la capacidad de la empresa para cumplir sus obligaciones. Al presentar reportes periódicos sobre el desempeño administrativo, se convierten en la base para la planeación estratégica y la toma de decisiones orientadas a la sostenibilidad a largo plazo.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-3.mb-lg-0(data-aos="fade-right")
        .box___style_14.fit___box_14
          p.mb-0 La importancia de aplicar este marco internacional radica en su capacidad para transformar datos contables dispersos en información organizada bajo principios universalmente aceptados. Esto permite comparar resultados entre distintos periodos de una misma entidad y frente a otras organizaciones del mismo sector. 
      .col-xl-auto.mb-3.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img80.jpg', alt='').m-auto
      .col-xl
        p.mb-0 Gracias a esta estandarización, es posible identificar ineficiencias operativas, controlar gastos y determinar si la empresa genera recursos suficientes para enfrentar compromisos futuros. Además, los estados financieros constituyen instrumentos esenciales en procesos de auditoría, obtención de créditos y cumplimiento de obligaciones fiscales ante las autoridades competentes.
    .box___style_8.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img16.svg', alt='' style="width: 85px").m-auto
        .col-xl.col-md-10
          p.mb-0 La preparación y presentación de los estados financieros es responsabilidad directa de la administración, quien debe garantizar que la información sea completa, neutral y libre de errores materiales. Para que estos informes tengan validez oficial, deben estar certificados mediante la firma del representante legal y del contador público, y en determinados casos, contar con el dictamen de un revisor fiscal. Este procedimiento asegura que los hechos económicos registrados correspondan a evidencias verificables contenidas en los libros de contabilidad.
    p.mb-5 La adopción de las NIIF introduce transformaciones relevantes en la gestión contable de la empresa. A continuación, se sintetizan los principales efectos de su implementación:
    .color___box_2
      .px-5
        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Enfoque contable")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img81.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Enfoque contable
                p.mb-0 Se prioriza la realidad económica sobre la forma legal, incorporando métodos de valoración como el valor razonable en lugar del uso exclusivo del costo histórico.
          .py-3.py-md-4(titulo="Aspectos positivos")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img82.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Aspectos positivos
                p.mb-0 Incrementa la transparencia, facilita el acceso a mercados de capitales internacionales y fortalece la confiabilidad de la información para usuarios externos.
          .py-3.py-md-4(titulo="Aspectos negativos")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img83.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Aspectos negativos
                p.mb-0 Requiere alto juicio profesional en la valoración de partidas complejas y los resultados siguen siendo estimaciones contables hasta la liquidación de la empresa.
          .py-3.py-md-4(titulo="Obligatoriedad en Colombia")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img84.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Obligatoriedad en Colombia
                p.mb-0 Su aplicación es obligatoria conforme al reglamento general de contabilidad, garantizando información estandarizada para usuarios sin acceso directo a los registros internos.
        p.mb-0 En síntesis, los estados financieros elaborados bajo el marco NIC/NIIF no solo cumplen una función informativa, sino que constituyen herramientas estratégicas para la evaluación del desempeño empresarial, la transparencia ante terceros y la consolidación de la confianza en el entorno económico.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
