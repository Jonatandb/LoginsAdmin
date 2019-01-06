import React from "react";

export const dummyCredentialsList = [
  {
    id: 0,
    serviceName: "facebook",
    serviceURL: "http://www.facebook.com",
    userName: "usuario@mail.com",
    password: "123456",
    notes: "Cuenta principal"
  },
  {
    id: 1,
    serviceName: "outlook",
    serviceURL: "http://www.Outlook.com",
    userName: "usuario@Outlook.com",
    password: "123456",
    notes: "Mail usado para Facebook"
  },
  {
    id: 2,
    serviceName: "netflix",
    serviceURL: "http://www.Netflix.com",
    userName: "John",
    password: "123456",
    notes: "Cuenta compartida"
  },
  {
    id: 3,
    serviceName: "gmail",
    serviceURL: "http://www.Gmail.com",
    userName: "usuario@Gmail.com",
    password: "123456",
    notes: "Mail alternativo del banco Nación"
  },
  {
    id: 4,
    serviceName: "santander",
    serviceURL: "http://www.Santanderrio.com.ar",
    userName: "usuario",
    password: "123456",
    notes: "Cuenta sueldo"
  },
  {
    id: 5,
    serviceName: "facebook",
    serviceURL: "http://www.facebook.com",
    userName: "usuario2@mail.com",
    password: "1234566",
    notes: "Cuenta pirata"
  },
  {
    id: 6,
    serviceName: "facebook",
    serviceURL: "http://www.facebook.com",
    userName: "usuario2@mail.com",
    password: "1234566",
    notes: "Tío"
  },
  {
    id: 7,
    serviceName: "facebook",
    serviceURL: "http://www.facebook.com",
    userName: "usuario2@mail.com",
    password: "1234566",
    notes: "Pagina de comidas"
  },
  {
    id: 8,
    serviceName: "facebook",
    serviceURL: "http://www.facebook.com",
    userName: "usuario2@mail.com",
    password: "1234566",
    notes: "Facebook viejo"
  },
  {
    id: 9,
    serviceName: "facebook",
    serviceURL: "http://www.facebook.com",
    userName: "usuario2@mail.com",
    password: "1234566",
    notes: "Perfil profesional"
  },
  {
    id: 10,
    serviceName: "facebook",
    serviceURL: "http://www.facebook.com",
    userName: "usuario2@mail.com",
    password: "1234566",
    notes: "Cuenta inaccesible"
  },
  {
    id: 11,
    serviceName: "Nación",
    serviceURL: "http://www.nacion.com",
    userName: "inversiones2018",
    password: "1234566",
    notes: "Plazos fijos en dólares"
  }
];

export const PendingTasks = ({ currentUser }) => {
  return currentUser !== "" ? (
    <>
      <div style={{ color: "lightgray" }}>
        <br />A desarrollar:
        <ul>
          <li>Refactor del diálogo Agregar para que esté todo en una Grid</li>
          <li>Opción para editar credenciales almacenadas</li>
          <li>Opción para eliminar credenciales</li>
          <li>
            Hacer que aparezcan agrupadas en una sola las filas para un mismo
            servicio y que se expandan al hacerles click
          </li>
          <li>
            Que se pueda usar como invitado para al menos descargarse el listado
            en xls
          </li>
          <li>Que se pueda exportar a varios formatos</li>
          <li>
            Que la exportanción funcione correctamente en todos los navegadores
          </li>
          <li>
            Que se pueda acceder con usuario y clave para ver las credenciales
            almacenadas previamente
          </li>
          <li>
            Que al hacerse click en Agregar, el primer campo tenga el foco con
            el cursor
          </li>
          <li>
            Que al hacerse click en Agregar, el botón guardar esté a la derecha
            y sea el predeterminado
          </li>
          <li>Corregir alineación y ancho de los campos de los formularios</li>
          <li>.</li>
        </ul>
        <hr />
        Completado:
        <ul>
          <li style={{ textDecoration: "line-through" }}>
            Al clickear en un sitio web de la lista, abrir un popup con los
            detalles
          </li>
          <li style={{ textDecoration: "line-through" }}>
            Agregar botón de agregar
          </li>
          <li style={{ textDecoration: "line-through" }}>
            Hacer que la búsqueda revise por todos los campos
          </li>
          <li style={{ textDecoration: "line-through" }}>
            Agregar campo notas
          </li>
          <li style={{ textDecoration: "line-through" }}>
            Que cuando no haya credenciales el mensaje cambie de 'Listado de
            credenciales' a 'Aún no se agregaron credenciales'
          </li>{" "}
          <li style={{ textDecoration: "line-through" }}>
            Hacer que la opción para agregar credenciales muestre un form nuevo
          </li>{" "}
          <li style={{ textDecoration: "line-through" }}>
            Que se muestre el campo Notas en los detalles de las credenciales
            seleccionadas
          </li>
          <li style={{ textDecoration: "line-through" }}>
            Que se pueda exportar a txt
          </li>
          <li style={{ textDecoration: "line-through" }}>.</li>
        </ul>
      </div>
    </>
  ) : null;
};
