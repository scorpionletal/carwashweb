/*var SQLGETSINGLEDATA = "SELECT * " + 
               "FROM tabla " +
               "WHERE nombre = ? " +
               "ORDER BY id " +
               "DESC "
               "LIMIT 1 ";
exports.SQLGETSINGLEDATA = SQLGETSINGLEDATA;

var SQLSAVESINGLEDATA = "INSERT INTO tabla ( " +
                "nombre , apellidos, edad, " +
      "direccion, correo, telefono, celular) " +
      "VALUES (?,?,?,?,?,?,?)";
exports.SQLSAVESINGLEDATA = SQLSAVESINGLEDATA;
*/
var postDataAlarmas = "INSERT INTO tiempo_real (id_alarma, bateria, tiempo, tipo_alimentacion) VALUES (?,?,?,?)";
exports.postDataAlarmas = postDataAlarmas;


var getdataalarmas = "SELECT * from tiempo_real ";
exports.getdataalarmas = getdataalarmas;

var getdata = "SELECT * from tiempo_real ";
exports.getdata = getdata;


//exports.saveHistory = saveHistory;