<?php
// Configuración de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "pruebasb";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Procesar datos del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Escapar entradas para evitar inyección SQL
    $referencia = $conn->real_escape_string($_POST['producto']);
    $descripcion = $conn->real_escape_string($_POST['descripcion']);
    $procesos = isset($_POST['procesos']) ? implode(", ", $_POST['procesos']) : '';
    $tallas = isset($_POST['tallas']) ? implode(", ", $_POST['tallas']) : '';
    $fecha = $conn->real_escape_string($_POST['fecha']);
    $colores = $conn->real_escape_string($_POST['colores']); // Ya vienen en formato CSV

    // Insertar datos en la base de datos
    $sql = "INSERT INTO produccion_datos (referencia, descripcion, procesos, tallas, fecha, colores) 
            VALUES ('$referencia', '$descripcion', '$procesos', '$tallas', '$fecha', '$colores')";

    if ($conn->query($sql) === TRUE) {
        echo "Datos guardados correctamente.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Cerrar conexión
$conn->close();
?>
