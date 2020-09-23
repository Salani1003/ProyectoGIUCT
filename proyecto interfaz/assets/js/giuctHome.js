$("document").ready(function () {
  let random = Math.random();
  let frase = [
    "“El aspecto más triste de la vida actual es que la ciencia gana en conocimiento más rápidamente que la sociedad en sabiduría.”- Isaac Asimov",
    "“La educación científica de los jóvenes es al menos tan importante, quizá incluso más, que la propia investigación”. -Glenn Theodore Seaborg",
    "“En algún lugar, algo increíble está esperando ser conocido”. -Carl Sagan",
  ];
  if (random > 0 && random < 0.33) {
    $(".template").append(frase[0]);
  } else if (random > 0.33 && random < 0.66) {
    $(".template").append(frase[1]);
  } else if (random > 0.66 && random < 0.99) {
    $(".template").append(frase[2]);
  }
});
function agregarFormMateria() {
  let formMateria = $("#formMateria").html();
  $(".template").empty();
  $(".template").append(formMateria);
}

function agregarFormPersona() {
  let formPersona = $("#formPersona").html();
  $(".template").empty();
  $(".template").append(formPersona);
}
function agregarPersona() {
  let dni = $(".template #dni").val();
  $(".template").empty();
  $(".template").append(
    '<div class="alert alert-success" role="alert"> <h4 class="alert-heading">Hecho</h4> <hr> <p>Se dio de Alta a la persona con DNI: <strong>' +
    dni +
    "</strong></p> </div>"
  );
}
function agregarFormBajaPersona() {
  let formBajaPersona = $("#formBajaPersona").html();
  $(".template").empty();
  $(".template").append(formBajaPersona);
}

function agregarModificacionPersona() {
  let modificacionPersona = $("#formModificacionPersona").html();
  $(".template").empty();
  $(".template").append(modificacionPersona);
}

function agregarconsultaPersona() {
  let consultaPersona = $("#formConsultaPersona").html();
  $(".template").empty();
  $(".template").append(consultaPersona);
}

function horasSemanales() {
  // muestra las horas disponibles segun la eleccion (alumno, graduado ,docente)

  let academico = $(".template #selectorAcademico").val();
  if (academico == 1) {
    $(".siEsAlumno").css("display", "block");
    $(".siEsGraduado").css("display", "none");
    $(".siEsDocente").css("display", "none");
  } else {
    if (academico == 2) {
      $(".siEsAlumno").css("display", "none");
      $(".siEsGraduado").css("display", "block");
      $(".siEsDocente").css("display", "none");
    } else {
      if (academico == 3) {
        $(".siEsAlumno").css("display", "none");
        $(".siEsGraduado").css("display", "none");
        $(".siEsDocente").css("display", "block");
      }
    }
  }
}

function procesarBajaPersona() {
  let dni = $(".template #dniBaja").val();
  $(".template").empty();
  $(".template").append(
    '<div class="alert alert-success" role="alert"> <h4 class="alert-heading">Hecho</h4> <hr> <p>Se dio de baja a la persona con DNI: <strong>' +
    dni +
    "</strong></p> </div>"
  );
}

function solicitarModificacionPersona() {
  let solicitudModificacion = $("#solicitudModificacion").html();
  $(".template").empty();
  $(".template").append(solicitudModificacion);
}

function solicitarConsultaPersona() {
  let dni = $(".template #dniConsulta").val();
  if (dni != "") {
    $(".template").append(
      '<div class="alert alert-success" role="alert"> <h4 class="alert-heading">Resultado de la contulta</h4> <hr> <p>Este es el espacio destinado a mostrar el resultado de la consulta del DNI ingresado.</p> </div>'
    );
  }
}

function seleccionTrabajo() {
  let seleccionTrabajo = $("#formTipoTrabajo").html();
  $(".template").empty();
  $(".template").append(seleccionTrabajo);
}

function cargarFormTrabajo() {
  let tipo = $(".template #tipoTrabajo").val();
  console.log(tipo);
  if (tipo == 1) {
    let formReunion = $("#formReuniones").html();
    $(".template").empty();
    $(".template").append(formReunion);
  } else {
    if (tipo == 2) {
      let formRevistaYArticulo = $("#formRevistaYArticulo").html();
      $(".template").empty();
      $(".template").append(formRevistaYArticulo);
    } else {
      if (tipo == 3) {
        let formEscrito = $("#formEscrito").html();
        $(".template").empty();
        $(".template").append(formEscrito);
      } else {
        if (tipo == 4) {
          let formEvento = $("#formEvento").html();
          $(".template").empty();
          $(".template").append(formEvento);
        } else {
          if (tipo == 5) {
            let formDivulgacion = $("#formDivulgacion").html();
            $(".template").empty();
            $(".template").append(formDivulgacion);
          }
        }
      }
    }
  }
}
function cargarFormRevistaArticulo() {
  let tipo = $(".template #tipoArticulo").val();
  if (tipo == 1 || tipo == 2) {
    let formRevista = $("#formRevista").html();
    $(".template").empty();
    $(".template").append(formRevista);
  } else {
    if (tipo == 3 || tipo == 4) {
      let formArticulo = $("#formArticulo").html();
      $(".template").empty();
      $(".template").append(formArticulo);
    }
  }
}
function agregarReunion() {
  let nombre = $(".template #nombreReunion").val();
  $(".template").empty();
  $(".template").append(
    '<div class="alert alert-success" role="alert"> <h4 class="alert-heading">Se agrego la reunion correctamente </h4> <hr><p>Nombre de reunion :  ' +
    nombre +
    " </p>  </div>"
  );
}

function bajaTrabajo() {
  let formBajaTrabajo = $("#formBajaTrabajo").html();
  $(".template").empty();
  $(".template").append(formBajaTrabajo);
}
function confirmarBajaTrabajo() {
  let nombre = $(".template #nombreBajaTrabajo").val();
  if (nombre != "") {
    $(".template").append(
      '<div class="alert alert-success" role="alert"> <h4 class="alert-heading">Resultado de la eliminacion</h4> <hr> <p>Eliminacion correcta de :' +
      nombre +
      ".</p> </div>"
    );
  }
}
function modificacionTrabajo() {
  let formInicioModificacionTrabajo = $(
    "#formInicioModificacionTrabajo"
  ).html();
  $(".template").empty();
  $(".template").append(formInicioModificacionTrabajo);
}
function modificacionSegundaParte() {
  let tipo = $(".template #tipoTrabajoModificacion").val();
  switch (tipo) {
    case 1:
      let formReunion = $("#formReuniones").html();
      $(".template").empty();
      $(".template").append(formReunion);
      break;
    case 2:
      let formReunion1 = $("#formReuniones").html();
      $(".template").empty();
      $(".template").append(formReunion1);
      break;
    case 3:
      let formRevista = $("#formRevista").html();
      $(".template").empty();
      $(".template").append(formRevista);
      break;
    case 4:
      let formArticulo = $("#formArticulo").html();
      $(".template").empty();
      $(".template").append(formArticulo);
      break;
    case 5:
      let formEscrito = $("#formEscrito").html();
      $(".template").empty();
      $(".template").append(formEscrito);
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
    case 10:
      break;
  }
}
function consultaTrabajo() {
  let consultaTrabajo = $("#formConsultaTrabajo").html();
  $(".template").empty();
  $(".template").append(consultaTrabajo);
}
function consultaRealizada() {
  $(".template").append(
    '<div class="alert alert-success" role="alert"> <h4 class="alert-heading">Resultado de la consulta</h4> <hr> <p>Espacio destinado a mostrar las consultas de trabajos".</p> </div>'
  );
}