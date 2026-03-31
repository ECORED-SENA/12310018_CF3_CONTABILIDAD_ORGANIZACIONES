<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Plan Único de Cuentas (PUC)
    p.mb-5 A continuación, se presenta un video sobre el Plan Único de Cuentas (PUC), con el propósito de comprender su estructura y su importancia en la organización del registro contable empresarial.
    figure(data-aos="zoom-in")
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uRWudMa8uy0" title="Plan Único de Cuentas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]: Plan Único de Cuentas.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1	Objetivo y utilidad del PUC en el registro contable
    p.mb-5 El Plan Único de Cuentas (PUC) tiene como objetivo garantizar la uniformidad en el registro de las operaciones económicas realizadas por los comerciantes, con el fin de asegurar transparencia, claridad, confiabilidad y comparabilidad de la información contable. Esta finalidad demuestra que el plan no busca complejizar la contabilidad, sino fortalecer su comprensión y verificación, de acuerdo con el Decreto 2650 de 1993 (Presidencia de la República de Colombia, 1993).
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la práctica, su utilidad se concreta cuando la empresa responde preguntas esenciales con información consistente: qué posee, qué adeuda, qué pagó, qué cobró y por qué variaron los saldos. Cuando cada transacción se registra en la cuenta correspondiente, los movimientos quedan organizados y los saldos pueden explicarse con mayor facilidad al comparar periodos, analizar variaciones mensuales o preparar informes para terceros.
    p.mb-0 El alcance del PUC también está definido normativamente. El Decreto 2650 de 1993 establece que deben aplicarlo quienes estén obligados a llevar contabilidad y que el catálogo de cuentas y su estructura son de uso obligatorio. No obstante, se permite utilizar códigos internos, siempre que exista una tabla de equivalencias y que en los libros registrados la información se asiente conforme al catálogo oficial. Esta disposición articula el orden interno de la organización con la consistencia externa del registro contable.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2	Codificación y estructura del PUC: cómo se lee y cómo se ubican cuentas
    p.mb-5 La codificación del PUC se organiza por niveles jerárquicos, lo que permite avanzar de lo general a lo específico y ubicar con precisión cada transacción dentro del sistema contable. A continuación, se sintetizan los niveles de codificación y su función dentro del catálogo:
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img3.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img4.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Clase (1 dígito)
                p.mb-0.text-center Identifica la naturaleza general de la cuenta.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img4.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Grupo (2 dígitos)
                p.mb-0.text-center Subdivide la clase en categorías más específicas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img4.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cuenta (4 dígitos)
                p.mb-0.text-center Define el concepto contable concreto donde se registran las operaciones.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img4.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Subcuenta (6 dígitos)
                p.mb-0.text-center Detalla la cuenta para precisar el registro según necesidad.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img4.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Auxiliares (desde 7 dígitos)
                p.mb-0.text-center Permiten mayor desagregación interna según requerimientos de información.
        p.mb-5 Esta estructura jerárquica facilita la clasificación ordenada de las operaciones y asegura coherencia en los registros.
    p.mb-5 El Decreto 2650 de 1993 establece, además, la relación entre clases y estados financieros. Esta clasificación permite comprender que la elección de una cuenta incide directamente en la forma en que se agrupa la información para el análisis empresarial. A continuación, se presenta la relación entre las clases del Plan Único de Cuentas (PUC) y los estados financieros en los que se integran sus saldos al cierre del periodo contable:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___style_2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img5.jpg', alt="" ).m-auto
            h4.text-center Clases 1, 2 y 3 - Cuentas del Balance general 
            p.mb-0.text-center Agrupan los activos, pasivos y patrimonio que representan la situación financiera de la entidad al cierre del periodo contable.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img6.jpg', alt="" ).m-auto
            h4.text-center Clases 4, 5, 6 y 7 - Cuentas del Estado de resultados 
            p.mb-0.text-center Incluyen los ingresos, costos y gastos que permiten determinar el desempeño económico y la utilidad o pérdida del ejercicio.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .box___style_2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img7.jpg', alt="" ).m-auto
            h4.text-center Clases 8 y 9 - Cuentas de orden 
            p.mb-0.text-center Registran hechos económicos contingentes, de control o información que no afectan directamente la situación financiera ni el resultado del periodo.
    p.mb-5 Leer un código implica interpretar esta jerarquía. Por ejemplo, el código #[b 1105] se descompone así: el primer dígito (1) indica que pertenece al #[b activo]; los dos primeros dígitos (11) señalan el grupo de #[b disponible]; y los cuatro dígitos (1105) identifican la cuenta específica. Si se requiere mayor nivel de detalle, se emplean subcuentas de seis dígitos o auxiliares adicionales, según las necesidades de información.
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img8.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La estructura del PUC se complementa con reglas de uso obligatorias. Cada cuenta contiene #[b descripciones], que determinan qué operaciones deben registrarse en ella, y #[b dinámicas], que precisan cómo se afecta mediante débitos y créditos. Estas orientaciones deben aplicarse conforme a lo establecido en el Decreto 2650 de 1993, garantizando coherencia en los asientos contables y uniformidad en la preparación de la información financiera.
    .color___box_1
      .px-5
        p.mb-5 La estructura jerárquica del PUC se organiza de lo general a lo particular, permitiendo identificar con precisión la ubicación y el nivel de detalle de cada cuenta dentro del sistema contable.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_3.h-100
              h4.mb-0.text-center Clase
              .fit___p_card
                p.text-center 1 dígito.
                p.mb-0.text-center Ejemplo: 1.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_3.h-100
              h4.mb-0.text-center Grupo
              .fit___p_card
                p.text-center 2 dígitos.
                p.mb-0.text-center Ejemplo: 11.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_3.h-100
              h4.mb-0.text-center Cuenta
              .fit___p_card
                p.text-center 4 dígitos.
                p.mb-0.text-center Ejemplo: 1105.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .box___style_3.h-100
              h4.mb-0.text-center Subcuenta
              .fit___p_card
                p.text-center 6 dígitos.
                p.mb-0.text-center Ejemplo: 110505.
        .box___style_4(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img10.svg', alt='' style="max-width: 85px").m-auto
            .col-xl.mb-4.mb-lg-0
              h4 Recurso de investigación recomendado
              p.mb-0 Para profundizar en la importancia de la estandarización contable, se sugiere consultar el portal especializado que contiene la base normativa del plan en Colombia.
            .col-xl-2
              a.boton.color-acento-botones.texto-negro(:href="('https://puc.com.co/')" target="_blank" type="application/pdf")
                span Abrir web
                i.fas.fa-file-download
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3	Clasificación y visión general de las clases (1 a 9)
    p.mb-5 La arquitectura del #[b Plan Único de Cuentas (PUC)] en Colombia se organiza en #[b nueve clases fundamentales], las cuales agrupan las cuentas según su naturaleza, comportamiento financiero y destino dentro de los reportes obligatorios. Esta estructura permite comprender cómo cada registro impacta los estados financieros y fortalece la aplicación de la #[b partida doble].
    .box___style_5.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 Las #[b clases 1 a 3] reúnen los #[b activos, pasivos y patrimonio]. Se denominan #[b cuentas reales o de balance], ya que reflejan la situación financiera de la entidad en una fecha determinada y se presentan en el #[b estado de situación financiera]. Por su parte, las #[b clases 4 a 7] incluyen #[b ingresos, gastos y costos], elementos que permiten determinar el resultado económico del ejercicio y se presentan en el #[b estado de resultados]. Finalmente, las #[b clases 8 y 9] corresponden a #[b cuentas de orden], utilizadas para el control de hechos contingentes o informativos que no afectan directamente la estructura financiera, pero requieren seguimiento y revelación.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img11.png', alt='').m-auto
    .color___box_2
      .px-5
        p.mb-5 A continuación, se organiza la clasificación general de las cuentas por clases y su relación con los principales reportes financieros:
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Clasificación general de las cuentas por clases y reportes asociados
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Clase
                    th.ajuste-border-tabla.texto-left Nombre de la clase
                    th.ajuste-border-tabla.texto-left Naturaleza de la cuenta
                    th.texto-left Reporte financiero principal
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b 1]
                    td.ajuste-border-tabla.texto-left Activos
                    td.ajuste-border-tabla.texto-left Real o de balance
                    td.texto-left Estado de situación financiera
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b 2]
                    td.ajuste-border-tabla.texto-left Pasivos
                    td.ajuste-border-tabla.texto-left Real o de balance
                    td.texto-left Estado de situación financiera
                  tr
                    td.ajuste-border-tabla.texto-left #[b 3]
                    td.ajuste-border-tabla.texto-left Patrimonio
                    td.ajuste-border-tabla.texto-left Real o de balance
                    td.texto-left Estado de situación financiera
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b 4]
                    td.ajuste-border-tabla.texto-left Ingresos
                    td.ajuste-border-tabla.texto-left De resultado
                    td.texto-left Estado de resultados
                  tr
                    td.ajuste-border-tabla.texto-left #[b 5]
                    td.ajuste-border-tabla.texto-left Gastos
                    td.ajuste-border-tabla.texto-left De resultado
                    td.texto-left Estado de resultados
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b 6]
                    td.ajuste-border-tabla.texto-left Costos de ventas
                    td.ajuste-border-tabla.texto-left De resultado
                    td.texto-left Estado de resultados
                  tr
                    td.ajuste-border-tabla.texto-left #[b 7]
                    td.ajuste-border-tabla.texto-left Costos de producción
                    td.ajuste-border-tabla.texto-left De resultado
                    td.texto-left Estado de resultados
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b 8 y 9]
                    td.ajuste-border-tabla.texto-left Cuentas de orden
                    td.ajuste-border-tabla.texto-left De control
                    td.texto-left Notas a los estados financieros
        p.mb-0 Las clases de resultado (4 a 7) se denominan transitorias porque su saldo se cancela al cierre del periodo contable para establecer la utilidad o pérdida, mientras que las de balance (1 a 3) son permanentes.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
