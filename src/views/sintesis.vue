<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La contabilidad en las organizaciones colombianas parte de una correcta categorización empresarial según su actividad económica, origen de capital y tamaño medido en ingresos anuales, lo cual define el marco normativo bajo el cual deben reportar su información. Este proceso culmina en la elaboración de estados financieros de propósito general que, mediante reportes como el de situación financiera, resultados, flujos de efectivo y cambios en el patrimonio, responden a interrogantes fundamentales sobre lo que la empresa posee, lo que debe y su capacidad real para generar utilidad o liquidez. Al estar debidamente certificados y acompañados de sus respectivas notas aclaratorias, estos informes bajo estándares internacionales garantizan la transparencia y confiabilidad necesaria para que usuarios internos y externos tomen decisiones estratégicas sobre el futuro y la sostenibilidad del negocio.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre el relacionamiento del PUC con los estados financieros básicos (NIC/NIIF). Estructura con base legal contable y cinco categorías principales: objetivos (transparencia y comparabilidad, calidad de la información), impacto y uso (obligatoriedad, uniformidad técnica, medición y valoración), gestión y reporte de la información financiera (gestión, estándares internacionales, reporte general), principios y herramientas del PUC (codificación y estructura del PUC, clasificación y visión general de las cuentas) y estados financieros (estado de situación financiera, resultado del período, cambios en el patrimonio, flujos de efectivo, notas a los estados financieros y relacionamiento del PUC con estados financieros básicos).")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
