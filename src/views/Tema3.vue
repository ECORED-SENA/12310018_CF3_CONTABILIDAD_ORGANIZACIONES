<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Estados financieros básicos para analizar la empresa
    p.mb-5 Los registros contables organizan la información diaria de la empresa; sin embargo, esa información adquiere verdadero sentido cuando se presenta en #[b estados financieros], ya que en ellos se resume y explica de manera estructurada qué #[b posee la entidad, qué obligaciones tiene, cuál fue su resultado y cómo se comportó el efectivo durante un periodo]. En este contexto, los estados financieros transforman el registro técnico en una herramienta de análisis para la toma de decisiones con fundamento.
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img43.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, la preparación y presentación de estados financieros se sustenta en la Ley 1314 de 2009 y en los marcos técnicos incorporados mediante el Decreto 2420 de 2015 y sus modificaciones. Estas disposiciones establecen el marco normativo para que la información financiera sea #[b útil, comparable y confiable]. Asimismo, entidades como la Superintendencia de Sociedades emiten orientaciones que facilitan la comprensión de la estructura y el reporte de los estados financieros.
    p.mb-5 En este capítulo se estudia el conjunto completo de estados financieros y el propósito de cada uno: #[b estado de situación financiera, estado de resultados, estado de cambios en el patrimonio, estado de flujos de efectivo y notas a los estados financieros]. El análisis de estos informes fortalece la capacidad para interpretar la operación cotidiana y explicar, con argumentos técnicos, las variaciones entre periodos. A continuación, se presenta un esquema general del conjunto completo de estados financieros de propósito general.
    .row.justify-content-center.mb-5
      .col-xl-9
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 1.
          span Conjunto completo de estados financieros.
        figure.mb-3(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img44.svg', alt='La imagen presenta los estados financieros de propósito general que incluye estado de situación financiera, estado del resultado del periodo, estado de cambios en el patrimonio, estado de flujos de efectivo y notas a los estados financieros. ').m-auto
        .box___style_1.fit___box_1(data-aos="zoom-in")
          p.mb-0 El esquema que resume los componentes del conjunto completo: estado de situación financiera, estado del resultado del periodo, estado de cambios en el patrimonio, estado de flujos de efectivo y notas.
    p.mb-5 A continuación, se presenta la organización de los #[b estados financieros básicos] y su propósito en términos sencillos: 
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Estado de situación financiera")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img45.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Estado de situación financiera
            p.mb-0 Presenta activos, pasivos y patrimonio en una fecha determinada. Permite responder: ¿Qué tiene la empresa y qué debe?
      .py-3.py-md-4(titulo="Estado del resultado del periodo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img46.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Estado del resultado del periodo
            p.mb-0 Resume ingresos y gastos durante un periodo específico. Permite responder: ¿La empresa generó utilidad o pérdida?
      .py-3.py-md-4(titulo="Estado de cambios en el patrimonio")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img47.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Estado de cambios en el patrimonio
            p.mb-0 Explica las variaciones en el patrimonio, como aportes, utilidades retenidas o distribución de dividendos. Permite responder: ¿Qué cambió en el capital y por qué?
      .py-3.py-md-4(titulo="Estado de flujos de efectivo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img48.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Estado de flujos de efectivo
            p.mb-0 Detalla las entradas y salidas de efectivo clasificadas por actividades operativas, de inversión y financiación. Permite responder: ¿El efectivo fue suficiente para operar y cumplir obligaciones?
      .py-3.py-md-4(titulo="Notas a los estados financieros")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img49.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Notas a los estados financieros
            p.mb-0 Incluyen detalles, políticas contables y explicaciones complementarias que sustentan las cifras presentadas. Permiten responder: ¿Cómo se interpretan y respaldan los valores reportados?
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Propósito e importancia de los estados financieros
    p.mb-5 A continuación, se presenta un pódcast  que explica el propósito e importancia de los estados financieros, destacando su función en la toma de decisiones y en la evaluación de la situación económica de las organizaciones.
    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.box___style_12(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img50.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Propósito e importancia de los estados financieros"
              :audio="require('@/assets/componentes/audios/Podcast_CF3_12310018_CONTABILIDAD_ORGANIZACIONES.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img51.png" ).m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img39.svg" style="max-width: 60px").m-auto
      .col
        h3 Estado de situación financiera (Balance General)
    p.mb-5 Este informe permite identificar la salud financiera de la empresa al resumir sus recursos y obligaciones en un momento exacto. Es fundamental para medir la solvencia a corto y largo plazo, permitiendo a los acreedores determinar el riesgo de prestar dinero a la organización.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Para qué sirve
                p.mb-0 Se utiliza para verificar la relación entre lo que la empresa posee (activos) y lo que debe a terceros o a los socios (pasivos y patrimonio).
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img52.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cuando se presenta
                p.mb-0 Se elabora al cierre de cada ejercicio fiscal, aunque también puede prepararse mensualmente para el control administrativo interno.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img53.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cómo se diligencia
                p.mb-0 Se clasifican las cuentas bajo criterios de liquidez para los activos (corrientes y no corrientes) y de exigibilidad para los pasivos. Los datos se toman directamente de los saldos de las cuentas reales del libro mayor.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img54.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 A continuación, se presenta la estructura general del Estado de situación financiera, organizada conforme a los criterios de liquidez y exigibilidad.
    .color___box_3
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Estructura del Estado de Situación Financiera (Balance General)
            .tabla-a.ajuste___tabla-1(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Activo
                    th.ajuste-border-tabla.texto-left Valor
                    th.ajuste-border-tabla.texto-left Pasivo
                    th.texto-left Valor
                tbody
                  tr.ajuste-color-tabla-1
                    td.ajuste-border-tabla.texto-left #[b Activo corriente ]
                    td.ajuste-border-tabla.texto-left 
                    td.ajuste-border-tabla.texto-left #[b Pasivo corriente ]
                    td.texto-left 
                  tr
                    td.ajuste-border-tabla.texto-left Efectivo 
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left Obligaciones bancarias 
                    td.texto-left XX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Inversiones temporales 
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left Proveedores 
                    td.texto-left XX
                  tr
                    td.ajuste-border-tabla.texto-left Cuentas por cobrar comerciales 
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left Dividendos por pagar 
                    td.texto-left XX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Provisión de deudas malas (resta) 
                    td.ajuste-border-tabla.texto-left (XX)
                    td.ajuste-border-tabla.texto-left Impuestos por pagar 
                    td.texto-left XX
                  tr
                    td.ajuste-border-tabla.texto-left Inventarios (Materia prima, proceso, terminado)
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left Pasivos laborales 
                    td.texto-left XX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Otros activos corrientes 
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left Otros pasivos corrientes 
                    td.texto-left XX
                  tr
                    td.ajuste-border-tabla.texto-left #[b Total activo corriente ]
                    td.ajuste-border-tabla.texto-left #[b XXX]
                    td.ajuste-border-tabla.texto-left #[b Total pasivo corriente ]
                    td.texto-left #[b XXX]
                  tr.ajuste-color-tabla-1
                    td.ajuste-border-tabla.texto-left #[b Activo fijo (no corriente)]
                    td.ajuste-border-tabla.texto-left 
                    td.ajuste-border-tabla.texto-left #[b Pasivo a largo plazo] 
                    td.texto-left 
                  tr
                    td.ajuste-border-tabla.texto-left Terrenos 
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left Obligaciones bancarias largo plazo 
                    td.texto-left XX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Edificios 
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left Pasivos laborales 
                    td.texto-left XX
                  tr
                    td.ajuste-border-tabla.texto-left Maquinaria y equipo 
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left Préstamos de socios 
                    td.texto-left XX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Muebles y enseres 
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left Otros pasivos a largo plazo 
                    td.texto-left XX
                  tr
                    td.ajuste-border-tabla.texto-left Equipo de cómputo 
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left #[b Total pasivo a largo plazo ]
                    td.texto-left XXX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Vehículos 
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left 
                    td.texto-left 
                  tr
                    td.ajuste-border-tabla.texto-left Menos: depreciación acumulada 
                    td.ajuste-border-tabla.texto-left (XX)
                    td.ajuste-border-tabla.texto-left #[b Patrimonio ]
                    td.texto-left 
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Total activo fijo neto ]
                    td.ajuste-border-tabla.texto-left #[b XXX]
                    td.ajuste-border-tabla.texto-left Capital pagado 
                    td.texto-left XX
                  tr
                    td.ajuste-border-tabla.texto-left 
                    td.ajuste-border-tabla.texto-left 
                    td.ajuste-border-tabla.texto-left Reservas (Legal y otras) 
                    td.texto-left XX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Otros activos ]
                    td.ajuste-border-tabla.texto-left 
                    td.ajuste-border-tabla.texto-left Utilidades por distribuir 
                    td.texto-left XX
                  tr
                    td.ajuste-border-tabla.texto-left Inversiones permanentes e intangibles 
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left Utilidades del ejercicio 
                    td.texto-left XX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Valorizaciones 
                    td.ajuste-border-tabla.texto-left XX
                    td.ajuste-border-tabla.texto-left Valorizaciones 
                    td.texto-left XX
                  tr
                    td.ajuste-border-tabla.texto-left #[b Total otros activos ]
                    td.ajuste-border-tabla.texto-left #[b XXX]
                    td.ajuste-border-tabla.texto-left #[b Total patrimonio ]
                    td.texto-left #[b XXX]
                  tr.ajuste-color-tabla-2
                    td.ajuste-border-tabla.texto-left #[b Total activo ]
                    td.ajuste-border-tabla.texto-left #[b XXX]
                    td.ajuste-border-tabla.texto-left #[b Total pasivo y patrimonio ]
                    td.texto-left #[b XXX]
    p.mb-5 Esta tabla se organiza de tal manera que el total del activo siempre debe ser igual a la suma del total del pasivo y el total del patrimonio. Los activos se han ordenado de mayor a menor liquidez, mientras que los pasivos se han organizado según su grado de exigibilidad, permitiendo identificar rápidamente la capacidad de pago de la empresa en el corto plazo. (Contabilidad., 2018).
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img39.svg" style="max-width: 60px").m-auto
      .col
        h3 Estado del resultado del periodo
    p.mb-5 El Estado del resultado del periodo es un reporte dinámico y acumulativo que resume todas las operaciones realizadas por la entidad desde el primer hasta el último día de un periodo contable, generalmente un año. A diferencia del estado de situación financiera, que representa una foto fija en una fecha determinada, este informe refleja el flujo de la actividad económica y permite identificar cómo la empresa transforma sus ventas en beneficios reales después de cubrir sus compromisos operativos.
    .row.justify-content-center.mb-5
      .col-xl-10.col-md-9
        .row.align-items-center
          .col-xl
            .box___style_1.fit___box_2.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 Su finalidad principal es #[b determinar la rentabilidad del negocio], ya que evidencia si al cierre del ejercicio se obtuvo utilidad o pérdida. Además, constituye el documento base para decidir si las utilidades se distribuyen entre los socios o si se reinvierten para fortalecer el capital.
          .col-xl-auto(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img56.png', alt='').m-auto
    p.mb-5 La importancia de este estado financiero radica en que facilita la evaluación de la eficiencia gerencial en el control de costos y gastos. Al desglosar ingresos y egresos, se identifican los márgenes de ganancia en cada etapa del proceso productivo, lo que favorece decisiones relacionadas con ajustes de precios, reducción de gastos innecesarios o expansión de líneas de productos. Sin este reporte, no sería posible determinar si el crecimiento empresarial es sostenible o si existen pérdidas ocultas que comprometan su estabilidad futura.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img57.png', alt='').m-auto
      .col-xl
        .box___style_1.mb-3(data-aos="fade-left")
          p.mb-0 Para su diligenciamiento, deben aplicarse estrictamente los principios de contabilidad, especialmente el #[b principio de causación o devengo], según el cual los ingresos y gastos se reconocen en el momento en que ocurren, independientemente de cuándo se reciba o pague el dinero.
        p.mb-0 Su estructura se organiza generalmente por función del gasto: primero se restan los costos de ventas a los ingresos para obtener la utilidad bruta; posteriormente, se deducen los gastos administrativos y de ventas para determinar la utilidad operacional; finalmente, se incluyen otros ingresos y gastos, así como el impuesto de renta, hasta llegar a la utilidad neta del ejercicio. Este orden permite comprender con claridad qué parte de los ingresos corresponde a la operación y cuál constituye ganancia final.
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img58.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Aunque su presentación es obligatoria al cierre del ejercicio fiscal, muchas empresas lo elaboran mensualmente para realizar seguimiento a su desempeño. Asimismo, sirve como base para el cálculo del impuesto de renta, dado que la utilidad neta constituye la base gravable. Al finalizar el proceso contable, el resultado del ejercicio se traslada al patrimonio en el estado de situación financiera, integrando así el rendimiento del periodo con la riqueza acumulada de la organización (Guajardo Cantú, 2014).
    p.mb-5 A continuación, se sintetizan los aspectos esenciales relacionados con su finalidad, presentación y diligenciamiento:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_13.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img59.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Para qué sirve
            p.mb-0.text-center Determinar si la empresa obtuvo una utilidad o una pérdida neta al finalizar el periodo contable.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_13.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img60.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Cuándo se presenta
            p.mb-0.text-center Al término del ejercicio fiscal, para informar a los socios sobre el rendimiento de su inversión.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_13.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img61.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Cómo se diligencia
            p.mb-0 Se registran los ingresos totales por ventas y se restan, de forma secuencial, los costos de ventas, los gastos de administración y los gastos de ventas, aplicando el principio de causación o devengo.
    .color___box_2
      .px-5
        p.mb-5 La siguiente tabla presenta la estructura general de elaboración del Estado del resultado del periodo:
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 4.
              span Estructura de presentación del estado de resultados
            .tabla-a.ajuste___tabla-1(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Concepto
                    th.texto-left Valor ($)
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Ingresos ordinarios (ventas)
                    td.texto-left $XX.XXX
                  tr
                    td.ajuste-border-tabla.texto-left (-) Costo de ventas
                    td.texto-left ($XX.XXX)
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left (=) #[b Utilidad bruta]
                    td.texto-left $XX.XXX
                  tr
                    td.ajuste-border-tabla.texto-left (-) Gastos de administración
                    td.texto-left ($X.XXX)
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left (-) Gastos de ventas
                    td.texto-left ($X.XXX)
                  tr
                    td.ajuste-border-tabla.texto-left (=) #[b Utilidad operacional]
                    td.texto-left $XX.XXX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left (+) Otros ingresos
                    td.texto-left $X.XXX
                  tr
                    td.ajuste-border-tabla.texto-left (-) Otros gastos
                    td.texto-left ($X.XXX)
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left (=) #[b Utilidad antes de impuestos]
                    td.texto-left $XX.XXX
                  tr
                    td.ajuste-border-tabla.texto-left (-) Impuesto de renta
                    td.texto-left ($X.XXX)
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left (=) #[b Utilidad neta del ejercicio]
                    td.texto-left $XX.XXX
        p.mb-5 Esta estructura resume el resultado operativo de la empresa y evidencia cómo las ventas se convierten en utilidad neta después de restar costos, gastos e impuestos (Guajardo Cantú, 2014).
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img39.svg" style="max-width: 60px").m-auto
      .col
        h3 Estado de cambios en el patrimonio
    p.mb-5 El #[b estado de cambios en el patrimonio] es un informe contable cuya finalidad es reflejar de manera detallada el saldo inicial, los movimientos ocurridos y el saldo final de cada una de las cuentas que conforman el patrimonio de la entidad durante un periodo determinado. Este estado financiero resulta fundamental para propietarios y accionistas, ya que permite conocer con precisión las variaciones experimentadas por sus inversiones, reservas, utilidades y revalorizaciones en el ejercicio contable.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-3.mb-lg-0(data-aos="fade-right")
        .box___style_14
          p.mb-0 A diferencia de otros estados financieros, su enfoque se centra exclusivamente en explicar #[b qué cambió en el capital del negocio y cuáles fueron las causas de dichos movimientos]. De esta manera, proporciona información clara sobre la evolución de la riqueza propia de la organización. Su importancia radica en que aporta transparencia respecto a la gestión del patrimonio.
      .col-xl-auto.mb-3.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img62.jpg', alt='').m-auto
      .col-xl
        figure.mb-3(data-aos="fade-left")
          img(src='@/assets/curso/temas/img16.svg', alt='' style="max-width: 85px")
        p.mb-0 Permite identificar si la administración está reteniendo utilidades para fortalecer la operación o si se están distribuyendo dividendos que reducen el valor contable de la empresa. Asimismo, facilita el análisis de la política financiera adoptada por los socios y la capacidad de la entidad para autofinanciarse sin depender exclusivamente de recursos externos.
    p.mb-5 Para su diligenciamiento, generalmente se emplea un formato por columnas en el que se concilian los saldos de apertura con los de cierre. En este proceso se registran los incrementos derivados de utilidades del ejercicio o nuevos aportes de capital, así como las disminuciones ocasionadas por pérdidas o distribución de superávit. Este procedimiento se fundamenta en los registros contables históricos y en las decisiones aprobadas en asambleas de socios, garantizando que cada variación esté debidamente soportada y autorizada.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img63.png', alt='').m-auto
      .col-xl
        .box___style_1.fit___box_3.mb-4.mb-lg-0(data-aos="fade-left")
          p.mb-0 Su presentación es obligatoria al cierre del ejercicio fiscal como parte del conjunto de estados financieros básicos. Constituye una herramienta indispensable para que los inversionistas evalúen si su inversión crece de manera sostenida y bajo qué conceptos se han generado los cambios más relevantes en el capital (Fierro Martínez, 2015).
    .color___box_1
      .px-5
        p.mb-5 A continuación, se presenta la estructura general de elaboración del Estado de cambios en el patrimonio:
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 5.
              span Estructura de presentación del estado de cambios en el patrimonio
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Concepto
                    th.ajuste-border-tabla.texto-left Saldo inicial
                    th.ajuste-border-tabla.texto-left Aumentos
                    th.ajuste-border-tabla.texto-left Disminuciones
                    th.texto-left Saldo final
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Capital social
                    td.ajuste-border-tabla.texto-left $XX.XXX
                    td.ajuste-border-tabla.texto-left $XX.XXX
                    td.ajuste-border-tabla.texto-left ($XX.XXX)
                    td.texto-left $XX.XXX
                  tr
                    td.ajuste-border-tabla.texto-left Reservas
                    td.ajuste-border-tabla.texto-left $XX.XXX
                    td.ajuste-border-tabla.texto-left $XX.XXX
                    td.ajuste-border-tabla.texto-left ($XX.XXX)
                    td.texto-left $XX.XXX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Utilidades retenidas
                    td.ajuste-border-tabla.texto-left $XX.XXX
                    td.ajuste-border-tabla.texto-left $XX.XXX
                    td.ajuste-border-tabla.texto-left ($XX.XXX)
                    td.texto-left $XX.XXX
                  tr
                    td.ajuste-border-tabla.texto-left Utilidad del ejercicio
                    td.ajuste-border-tabla.texto-left $0
                    td.ajuste-border-tabla.texto-left $XX.XXX
                    td.ajuste-border-tabla.texto-left $0
                    td.texto-left $XX.XXX
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Total patrimonio]
                    td.ajuste-border-tabla.texto-left $XX.XXX
                    td.ajuste-border-tabla.texto-left $XX.XXX
                    td.ajuste-border-tabla.texto-left ($XX.XXX)
                    td.texto-left $XX.XXX
        p.mb-5 Esta tabla detalla las variaciones de la inversión de los propietarios y permite comprender qué factores incrementaron o redujeron la riqueza propia durante el periodo contable (Fierro Martínez, 2015).
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img39.svg" style="max-width: 60px").m-auto
      .col
        h3 Estado de flujos de efectivo
    p.mb-5 El #[b estado de flujos de efectivo] es un estado financiero cuyo propósito principal consiste en presentar de manera detallada el efectivo neto generado y utilizado por la empresa durante un periodo contable. A diferencia del Estado del resultado del periodo, que se fundamenta en el principio de causación o devengo, este informe se concentra exclusivamente en el movimiento real del dinero disponible en caja y bancos.
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img64.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Su importancia es determinante para la sostenibilidad del negocio, ya que permite evaluar si la entidad cuenta con la capacidad suficiente para generar el efectivo necesario que le permita cumplir sus obligaciones inmediatas, pagar salarios y mantener el funcionamiento diario de sus operaciones. En efecto, una empresa puede reflejar utilidades contables significativas y, simultáneamente, enfrentar dificultades de liquidez por no disponer de recursos monetarios suficientes.
    p.mb-5 La relevancia de este estado radica en que clasifica los flujos de efectivo en tres grandes categorías: #[b operación, inversión y financiación]. Esta clasificación facilita identificar si los recursos provienen del giro ordinario del negocio o si la organización depende de préstamos bancarios o de la venta de activos para sostenerse. En consecuencia, se convierte en una herramienta clave para analizar la calidad de las decisiones gerenciales y la política financiera adoptada.
    .box___style_6.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img65.png', alt='').m-auto
        .col-xl
          p.mb-0 Para su diligenciamiento, se examinan las variaciones en las cuentas de efectivo entre el inicio y el final del ejercicio fiscal. Se reconocen como entradas de efectivo las ventas efectivamente cobradas o los préstamos recibidos, y como salidas los pagos realizados a proveedores, empleados y entidades financieras. Su estructura exige separar claramente las actividades operativas, las actividades de inversión y las actividades de financiación, garantizando coherencia y trazabilidad en la información reportada.
    p Este estado financiero es obligatorio dentro de los informes de propósito general y se presenta al cierre de cada periodo contable. Además, permite proyectar flujos futuros de efectivo y apoyar a los inversionistas en la evaluación de la capacidad de la empresa para pagar dividendos sin comprometer su estabilidad operativa (Estupiñán Gaitán, 2020).
    p.mb-5 A continuación, se resume la estructura básica del Estado de flujos de efectivo según la clasificación de actividades:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___style_2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img66.jpg', alt="" ).m-auto
            h4.text-center Operación
            p.mb-0.text-center Dinero recibido por ventas cobradas y pagos realizados a proveedores y nómina.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img67.jpg', alt="" ).m-auto
            h4.text-center Inversión
            p.mb-0.text-center Recursos utilizados para comprar o vender activos fijos, maquinaria u otros activos de largo plazo.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .box___style_2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img68.jpg', alt="" ).m-auto
            h4.text-center Financiación
            p.mb-0.text-center Recursos obtenidos mediante préstamos bancarios o aportes de socios, así como pagos de dividendos y obligaciones financieras.
    p.mb-5 Esta clasificación permite identificar el origen y destino del efectivo, facilitando la evaluación de la liquidez y autosuficiencia financiera de la empresa (Estupiñán Gaitán, 2020).
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img39.svg" style="max-width: 60px").m-auto
      .col
        h3 Notas a los estados financieros
    p.mb-5 Las #[b notas a los estados financieros] no constituyen un cuadro numérico adicional, sino un conjunto de revelaciones narrativas y explicaciones que complementan la información presentada en los estados financieros básicos. Su propósito es proporcionar el contexto necesario para comprender cómo se midieron los hechos económicos y qué políticas contables fueron aplicadas por la entidad.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img69.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se consideran una parte #[b integral e indivisible] de los estados financieros de propósito general, ya que sin estas aclaraciones las cifras podrían resultar incompletas o inducir a interpretaciones inadecuadas por parte de los usuarios externos. En consecuencia, las notas garantizan que la información contable sea comprensible, transparente y coherente con los principios de contabilidad generalmente aceptados.
    p.mb-5 La importancia de las notas radica en su capacidad para ampliar la información que no se detalla explícitamente en los estados financieros. Permiten especificar el domicilio y la forma legal de la empresa, las políticas contables adoptadas para la medición de inventarios o activos fijos, así como los juicios y estimaciones realizados por la gerencia. Además, incluyen revelaciones sobre riesgos e incertidumbres, como procesos jurídicos pendientes o cambios en el entorno económico que puedan afectar la situación financiera en el corto o largo plazo.
    .box___style_5.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 Para su elaboración, se requiere un ejercicio descriptivo riguroso por parte del contador y la administración. Su estructura debe seguir un orden lógico: primero, la información general de la entidad; segundo, el resumen de las políticas contables significativas (incluyendo las bases de medición); y finalmente, el desglose detallado de las partidas más relevantes de cada estado financiero. Es fundamental que la redacción sea clara, precisa y sintética, de modo que cualquier analista externo pueda comprender la información sin acceso directo a los registros internos de la organización.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img70.png', alt='').m-auto
    .color___box_3
      .px-5
        p.mb-5 Las empresas presentan las notas de manera obligatoria junto con los estados financieros al cierre de cada periodo contable. Constituyen el soporte de la rendición de cuentas frente a terceros y permiten evidenciar la responsabilidad de la gerencia en la gestión de los recursos y en la presentación fiel de la realidad económica del negocio (Carvalho, 2017). A continuación, se sintetiza la estructura general de las Notas a los estados financieros:
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 6.
              span Estructura de las notas a los estados financieros
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Componente
                    th.ajuste-border-tabla.texto-left Función principal
                    th.texto-left Información que contiene
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b Información general]
                    td.ajuste-border-tabla.texto-left Contextualizar la entidad
                    td.texto-left Domicilio, descripción de operaciones y forma legal
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Políticas contables]
                    td.ajuste-border-tabla.texto-left Definir las reglas aplicadas
                    td.texto-left Bases de medición y criterios de reconocimiento de hechos económicos
                  tr
                    td.ajuste-border-tabla.texto-left #[b Detalles y explicaciones]
                    td.ajuste-border-tabla.texto-left Desglosar cifras relevantes
                    td.texto-left Información detallada sobre deudores, inventarios, activos fijos y pasivos
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Revelaciones adicionales]
                    td.ajuste-border-tabla.texto-left Informar riesgos e incertidumbres
                    td.texto-left Procesos pendientes, contingencias y posibles efectos futuros
        p.mb-5 Esta estructura permite transformar los datos numéricos en información comprensible, al incorporar explicaciones sobre políticas adoptadas, estimaciones realizadas y riesgos que pueden incidir en la estabilidad financiera de la empresa (Carvalho, 2017).
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img71.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los #[b estados financieros de propósito general] constituyen el resumen sistemático de la información contable de una organización en una fecha determinada. Su relevancia radica en que ofrecen datos confiables y comparables a terceros, facilitando el análisis de la situación financiera, el desempeño operativo y la capacidad de generación de recursos. Al elaborarse bajo principios y normas contables estandarizadas, se convierten en herramientas de control y evaluación del desempeño administrativo.
        .box___style_8.mb-0(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img16.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              p.mb-0 En conclusión, la integración del #[b estado de situación financiera (balance general), estado del resultado del periodo, estado de cambios en el patrimonio, estado de flujos de efectivo y las notas a los estados financieros] garantiza que cualquier interesado, incluso sin acceso directo a los registros internos, pueda comprender la capacidad de la empresa para generar utilidades y cumplir con sus obligaciones. Estos informes constituyen el lenguaje técnico de los negocios y aseguran transparencia, comparabilidad y confianza en el entorno económico nacional e internacional.
</template>

<script>
export default {
  name: 'Tema3',
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
