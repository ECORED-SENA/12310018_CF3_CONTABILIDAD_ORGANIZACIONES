<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Codificación PUC y Estados Financieros',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> validar la capacidad para codificar hechos económicos mediante el PUC y estructurar estados financieros básicos que permitan analizar la situación financiera y el rendimiento de la organización.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'Si una empresa compra muebles para su oficina a crédito, ¿qué códigos del PUC debería afectar principalmente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '1524 (Equipo de oficina) y 2335 (Costos y gastos por pagar).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '1105 (Caja) y 4135 (Comercio).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '1435 (Mercancías) y 2205 (Proveedores).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '5105 (Gastos de personal) y 1110 (Bancos).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Al realizar el cierre contable, ¿qué estado financiero permite determinar si la empresa obtuvo una utilidad o una pérdida?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Balance general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estado de resultados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estado de flujos de efectivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estado de cambios en el patrimonio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el criterio técnico para organizar los activos dentro del Balance General?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Por orden alfabético.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Según el tamaño del código PUC.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'De acuerdo con su liquidez.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Por la fecha de adquisición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una empresa presenta activos por $50.000.000 y pasivos por $20.000.000. ¿A cuánto equivale su patrimonio?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$30.000.000.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '$50.000.000.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$20.000.000.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$70.000.000.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué representa la cuenta 4135 (Comercio al por mayor y al por menor) en el ciclo contable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un gasto administrativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un activo corriente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un ingreso operacional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una deuda con proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿En qué grupo del PUC se clasifican las deudas que la empresa debe pagar en un plazo menor a un año?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasivo corriente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Activo no corriente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gastos de ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Si el análisis del Estado de Resultados muestra que los gastos son mayores que los ingresos, la empresa tiene:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Superávit de capital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incremento en los activos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exceso de liquidez.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pérdida del ejercicio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la función principal de las "Notas a los Estados Financieros"?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar los asientos diarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir al balance general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Explicar y detallar las cifras de los reportes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Calcular los impuestos automáticamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El registro de un aporte de los socios en efectivo afecta la cuenta de Caja (1105) en el:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crédito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Patrimonio directamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pasivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Débito.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué cuenta se utiliza para registrar el valor de los bienes comprados disponibles para la venta?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1528 (Equipo de computación).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '5135 (Servicios).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '1110 (Bancos).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '1435 (Mercancías no fabricadas por la empresa).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'La "Partida Doble" indica que en cada registro contable.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo se debe usar una cuenta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El total de débitos debe ser igual al total de créditos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se deben duplicar los valores por seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo se registran las entradas de dinero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué sucede con el Patrimonio de una empresa cuando se genera una utilidad neta al final del periodo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se convierte en un pasivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuye.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumenta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Permanece igual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Los gastos de servicios públicos y papelería de una oficina se clasifican bajo el código:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clase 1 (Activos).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clase 4 (Ingresos).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clase 3 (Patrimonio).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clase 5 (Gastos).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Si una empresa tiene alta liquidez pero baja rentabilidad, significa que:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No tiene deudas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tiene efectivo disponible pero su operación no genera ganancias suficientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La empresa va a quebrar mañana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sus activos son mayores que sus pasivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El código del PUC que comienza con el número 2 corresponde a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gastos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ingresos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pasivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Activos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'En la constitución de la empresa "Suministros Ágiles", el aporte de $60.000.000 en efectivo afecta las siguientes cuentas según la partida doble:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Débito a la 1110 (bancos) y crédito a la 3115 (aportes sociales).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Débito a la 1105 (caja) y crédito a la 3115 (aportes sociales).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Crédito a la 1105 (caja) y débito a la 3115 (aportes sociales).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Débito a la 1105 (caja) y crédito a la 2105 (obligaciones financieras).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Tras la compra de mercancía por $15.000.000 (40 % contado y 60 % crédito), ¿cuál es el saldo que debe reflejarse en la cuenta 2205 (Proveedores)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$15.000.000.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$6.000.000.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '$9.000.000.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '$5.000.000.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Si la utilidad bruta es de $4.500.000, ¿en qué sección del Balance General se debe registrar este valor para que se cumpla la ecuación patrimonial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Patrimonio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Activo no corriente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pasivo corriente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ingresos operacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el objetivo principal del "Estado de Situación Financiera" (Balance General)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mostrar detalladamente los ingresos y egresos de un mes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Presentar de forma clasificada los activos, pasivos y el patrimonio a una fecha determinada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Listar todos los nombres de los empleados y sus salarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar únicamente las compras de activos fijos realizadas a crédito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'La empresa "Suministros Ágiles" realiza las siguientes operaciones: inicia con un aporte de socios de $60.000.000 en efectivo, compra $15.000.000 en mercancía (pagando $6.000.000 de contado y el resto a crédito), adquiere muebles de oficina por $5.000.000 mediante transferencia bancaria, recibe un préstamo bancario de $10.000.000 y vende la mitad de su inventario por $12.000.000 de contado. Según estos hechos, ¿cuál es el valor total de su Activo Corriente (Caja, Bancos e Inventarios)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '$83.500.000.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '$78.500.000.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '$71.000.000.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '$5.000.000.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
