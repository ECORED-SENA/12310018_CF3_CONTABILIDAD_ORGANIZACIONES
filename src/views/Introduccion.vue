<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 En este componente se parte de situaciones cotidianas de la empresa (compras, ventas, pagos, recaudos) para mostrar cómo esas operaciones se convierten en información útil para entender la situación y el rendimiento del negocio. La idea es que el aprendiz comprenda que la información financiera no aparece “por arte de magia”: se construye desde registros ordenados que permiten ver qué recursos tiene la empresa, qué debe y cómo cambian sus resultados con el tiempo.
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para lograr ese orden, se trabaja el Plan Único de Cuentas (PUC) como un mapa del registro contable. Se estudia su objetivo de uniformar el registro y mejorar la claridad, confiabilidad y comparabilidad de la información, y se interpreta su codificación y estructura (clases, grupos, cuentas y subcuentas) para ubicar cuentas con criterio (Presidencia de la República de Colombia, 1993). 
    p.mb-5 Luego se aplica la descripción y dinámica de las cuentas del PUC a transacciones frecuentes, con el fin de seleccionar la cuenta correcta según el hecho económico y registrar de forma coherente. En esta parte se enfatiza que el PUC organiza cuentas asociadas a activos, pasivos, patrimonio, ingresos, gastos y costos, lo que facilita pasar del movimiento diario a saldos que se pueden revisar y agrupar. 
    .row.align-items-center.justify-content-center
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/intro/img2.png', alt='').m-auto
      .col-xl
        .box___style_1.mb-3(data-aos="fade-left")
          p.mb-0 Con base en esos saldos se elaboran los estados financieros básicos: el balance general (estado de situación financiera) y el estado de resultados, como herramientas para analizar la empresa. Finalmente, se introducen criterios generales de presentación del marco NIC/NIIF, orientados a que la información se presente con estructura mínima y comparabilidad entre periodos, de modo que sea más fácil de leer, explicar y usar en el análisis.
        p.mb-0 Al finalizar este componente, el aprendiz contará con una forma ordenada de leer la actividad diaria de una empresa: podrá ubicar y seleccionar cuentas con criterio, registrar transacciones frecuentes y entender cómo esos registros se convierten en información resumida para analizar la situación y los resultados. En la vida laboral, esto se traduce en menos errores, mayor control y capacidad para explicar “por qué” se registró una operación de cierta manera. Así, el PUC y los estados financieros dejan de ser temas teóricos y se convierten en herramientas reales para organizar el trabajo contable y apoyar decisiones en cualquier tipo de organización.
</template>

<script>
export default {
  name: 'Introduccion',
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
