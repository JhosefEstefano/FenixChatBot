import { Finish, HasTeam, ImageText, List, MessageText, NumberCompanies } from "./samples";

function processMessage(message: string, number: string) {
  message = message.toLowerCase();
  let models = [];

  if (
    message.includes("hola") ||
    message.includes("que tal") ||
    message.includes("buenas") ||
    message.includes("info") ||
    message.includes("buenos") ||
    message.includes("buena")
  ) {
    models.push(
      MessageText(
        "Hola 😁, bienvenido al canal oficial de comunicación de Site, S. A. 🖐",
        number
      )
    );
    models.push(
      ImageText(
        "https://contratospdf.s3.amazonaws.com/d6952801-cbfe-4f33-865d-49b3eaf579a4.JPG",
        number
      )
    );
    models.push(
      ImageText(
        "https://contratospdf.s3.amazonaws.com/aa41f849-aa95-4b41-8b16-b63acb3df75d.JPG",
        number
      )
    );
    models.push(
      MessageText(
        "Recuerda que puedes escribir *cancelar* en cualquier momento para terminar la acción. ❌",
        number
      )
    );
  } else if (
    message.includes("información fénix 2.0") ||
    message.includes("información")
  ) {
    models.push(
      MessageText(
        "Para recibir información detallada y adicional de nuestros sistemas y soluciones Fénix 2.0, llena la siguuiente información y uno de nuestros asesores estará en contacto para resolver cualquier duda o inquietud.",
        number
      )
    );

    models.push(
        MessageText(
          "¿Para cuantas empresas se requiere los sistemas?.",
          number
        )
      );

  } else if (/(?:\b|-)([1-9]{1,2}[0]?|100)\b/.test(message) && !message.includes('@')) {
    models.push(MessageText("¿Cada empresa es un NIT de contribuyente diferente?", number));
  }
  else if (message.includes('si') || message.includes('sí') || message.includes('no') ) {
    models.push(MessageText("¿Cuál es el nombre de la empresa o empresas interesadas? *(Escribe los nombres en un solo mensaje separado por comas)*", number));
  }
  else if (message.includes(',') && message.split(',').length > 1 || message.includes('S.A.') || message.includes('S. A.') ) {
    models.push(MessageText("¿Cuál es el giro de la empresa o empresas indicadas?", number));
    models.push(List(number));
  }
  else if (message.includes('industrial') || message.includes('comercial') || message.includes('de servicio') ) {
    models.push(MessageText("Compartenos tu correo", number));
  }
  else if (message.includes('@') || message.includes('hotmail') || message.includes('gmail') ) {
    models.push(MessageText("Nuestros sistemas son modulares, a continuación indicanos que areas de ti negocio deseas controlar o automatizar, por ejemplo indicaciones si desas únicamente facturar o también requieres control de inventario, sistemas contables, proveedores, bancos, etc... compartenos toda la información que consideres necesaria para poder conocer tu solicitud.", number));
  }
  else if (message.includes('facturar') || message.includes('control') || message.includes('inventario') || message.includes('bancos') || message.includes('sistema') || message.includes('sistemas') ) {
    models.push(MessageText("¿Cuántas sucursales en total se desean controlar dentro de los sistemas, normalmente las sucursales se cuentan como el número de establecimientos registrados en SAT diferentes para utilizar los sistemas?", number));
    models.push(NumberCompanies(number));
  }
  else if (message.includes('1 - 5') || message.includes('6 - 10') || message.includes('10+')) {
    models.push(HasTeam(number));
  }
  else if (message.includes('si, cuento') || message.includes('no, no cuento') || message.includes('propio')) {
    models.push(MessageText("¿Cuál es la ubicación de la empresa, si nos compartes la dirección, departamento y municipio? *(Pon la dirección en un solo mensaje)*", number));
  }
  else if (message.includes('calle') || message.includes('avenida') || message.includes('av') || message.includes('colonia') || message.includes('aldea') || message.includes('lote') || message.includes('manzana')) {
    models.push(MessageText("¿Deseas enviar la solicitud e información de sistema Fénix 2.0 con los datos indicados anteriormente?", number));
    models.push(Finish(number));
  }
  else if (message.includes('si, enviar')) {
    models.push(MessageText("Gracias nos pondremos en contacto contigo lo antes posible", number));
  }
  else if (message.includes('no, enviar')) {
    models.push(MessageText("Gracias por utilizar servicios de Site, S.A. 😁\nRecuerda que puedes contactarte con nosotros en el momento que desees. 😊", number));
  }
  else if (message.includes('Volver al inicio')) {
    models.push(
        MessageText(
          "Hola 😁, bienvenido al canal oficial de comunicación de Site, S. A. 🖐",
          number
        )
      );
      models.push(
        ImageText(
          "https://contratospdf.s3.amazonaws.com/d6952801-cbfe-4f33-865d-49b3eaf579a4.JPG",
          number
        )
      );
      models.push(
        ImageText(
          "https://contratospdf.s3.amazonaws.com/aa41f849-aa95-4b41-8b16-b63acb3df75d.JPG",
          number
        )
      );
      models.push(
        MessageText(
          "Recuerda que puedes escribir *cancelar* en cualquier momento para terminar la acción. ❌",
          number
        )
      );
  }
  else if (message.includes('cancelar')) {
    models.push(MessageText("Gracias por utilizar servicios de Site, S.A. 😁\nRecuerda que puedes contactarte con nosotros en el momento que desees. 😊", number));
  }else{
    models.push(MessageText("No te entendi por favor prueba de nuevo", number));
  }

    
  
}

export { processMessage };
