/* eslint-disable react/prop-types */
import React from "react";

export const PendingTasks = ({ currentUser }) => {
  return currentUser !== "" ? (
    <>
      <div style={{ color: "gray" }}>
        <br />A desarrollar:
        <ul>
          <li>
            Hacer un componente que me permita saber que versión de la
            aplicación se está ejecutando
          </li>
          <li>
            Hacer que el agregado de un login funcione aunque no se inicie
            sesión
          </li>
          <li>Hacer que al clickear un login se muestren todos sus datos</li>
          <li>
            Hacer que la búsqueda revise todos los campos (Ahora comenté parte
            de la funcionalida)
          </li>
          <li>Hacer funcional el login</li>
          <li>Refactor del diálogo Agregar para que esté todo en una Grid</li>
          <li>Opción para editar credenciales almacenadas</li>
          <li>Opción para eliminar credenciales</li>
          <li>
            Hacer que aparezcan agrupadas en una sola las filas las credenciales
            para un mismo servicio y que se expandan al hacerles click
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
        </ul>
        <hr />
        {
          //   Completado:
          //   <ul>
          //     <li></li>
          //     <li></li>
          //     <li></li>
          //     <li></li>
          //     <li>Creado archivo de configuración de acceso a base de datos</li>
          //     <li>Creado archivo de conexión a base de datos</li>
          //     <li style={{ textDecoration: "line-through" }}>
          //       Al clickear en un sitio web de la lista, abrir un popup con los
          //       detalles
          //     </li>
          //     <li style={{ textDecoration: "line-through" }}>
          //       Agregar botón de agregar
          //     </li>
          //     <li style={{ textDecoration: "line-through" }}>
          //       Hacer que la búsqueda revise por todos los campos
          //     </li>
          //     <li style={{ textDecoration: "line-through" }}>
          //       Agregar campo notas
          //     </li>
          //     <li style={{ textDecoration: "line-through" }}>
          //       Que cuando no haya credenciales el mensaje cambie de 'Listado de
          //       credenciales' a 'Aún no se agregaron credenciales'
          //     </li>{" "}
          //     <li style={{ textDecoration: "line-through" }}>
          //       Hacer que la opción para agregar credenciales muestre un form nuevo
          //     </li>{" "}
          //     <li style={{ textDecoration: "line-through" }}>
          //       Que se muestre el campo Notas en los detalles de las credenciales
          //       seleccionadas
          //     </li>
          //     <li style={{ textDecoration: "line-through" }}>
          //       Que se pueda exportar a txt
          //     </li>
          //     <li style={{ textDecoration: "line-through" }}>.</li>
          //   </ul>
        }
      </div>
    </>
  ) : null;
};

export const dummyCredentialsList = [
  {
    login_id: 0,
    service_name: "facebook",
    service_url: "http://www.facebook.com",
    username: "usuario@mail.com",
    password: "123456",
    notes: "Cuenta principal"
  } /*,
  {
    login_id: 1,
    service_name: "outlook",
    service_url: "http://www.Outlook.com",
    username: "usuario@Outlook.com",
    password: "123456",
    notes: "Mail usado para Facebook"
  },
  {
    login_id: 2,
    service_name: "netflix",
    service_url: "http://www.Netflix.com",
    username: "John",
    password: "123456",
    notes: "Cuenta compartida"
  },
  {
    login_id: 3,
    service_name: "gmail",
    service_url: "http://www.Gmail.com",
    username: "usuario@Gmail.com",
    password: "123456",
    notes: "Mail alternativo del banco Nación"
  },
  {
    login_id: 4,
    service_name: "santander",
    service_url: "http://www.Santanderrio.com.ar",
    username: "usuario",
    password: "123456",
    notes: "Cuenta sueldo"
  },
  {
    login_id: 5,
    service_name: "facebook",
    service_url: "http://www.facebook.com",
    username: "usuario2@mail.com",
    password: "1234566",
    notes: "Cuenta pirata"
  },
  {
    login_id: 6,
    service_name: "facebook",
    service_url: "http://www.facebook.com",
    username: "usuario2@mail.com",
    password: "1234566",
    notes: "Tío"
  },
  {
    login_id: 7,
    service_name: "facebook",
    service_url: "http://www.facebook.com",
    username: "usuario2@mail.com",
    password: "1234566",
    notes: "Pagina de comidas"
  },
  {
    login_id: 8,
    service_name: "facebook",
    service_url: "http://www.facebook.com",
    username: "usuario2@mail.com",
    password: "1234566",
    notes: "Facebook viejo"
  },
  {
    login_id: 9,
    service_name: "facebook",
    service_url: "http://www.facebook.com",
    username: "usuario2@mail.com",
    password: "1234566",
    notes: "Perfil profesional"
  },
  {
    login_id: 10,
    service_name: "facebook",
    service_url: "http://www.facebook.com",
    username: "usuario2@mail.com",
    password: "1234566",
    notes: "Cuenta inaccesible"
  },
  {
    login_id: 11,
    service_name: "Nación",
    service_url: "http://www.nacion.com",
    username: "inversiones2018",
    password: "1234566",
    notes: "Plazos fijos en dólares"
  }*/
];
