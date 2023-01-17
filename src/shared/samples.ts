function MessageText(message: string, number: string) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "text",
        text: { preview_url: false, body: message }
    });

    return data;
}

function ImageText(url: string, number: string) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "image",
        image: { link: url }
    });

    return data;
}


function MessageButtons(number: string) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "interactive",
        interactive: {
            type: "button",
            body: {
                text: "Escoge una de nuestras opciones:"
            },
            action: {
                buttons: [
                    {
                        type: "reply",
                        reply: {
                            id: "contacto-site",
                            title: "Contacto Site"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "soporte",
                            title: "Soporte"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "info-fenix",
                            title: "Información Fénix 2.0"
                        }
                    }
                ]
            }
        },
    });

    return data;
}

function NumberCompanies(number: string) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "interactive",
        interactive: {
            type: "button",
            body: {
                text: "Escoge una de nuestras opciones:"
            },
            action: {
                buttons: [
                    {
                        type: "reply",
                        reply: {
                            id: "uno-cinco",
                            title: "1 - 5"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "seis-diez",
                            title: "6 - 10"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "mas-diez",
                            title: "10+"
                        }
                    }
                ]
            }
        },
    });

    return data;
}

function HasTeam(number: string) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "interactive",
        interactive: {
            type: "button",
            body: {
                text: "Escoge una de nuestras opciones:"
            },
            action: {
                buttons: [
                    {
                        type: "reply",
                        reply: {
                            id: "si-tengo",
                            title: "Si, cuento con departamento propio"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "no-tengo",
                            title: "No, no cuento con departamento propio"
                        }
                    }
                ]
            }
        },
    });

    return data;
}

function Finish(number: string) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "interactive",
        interactive: {
            type: "button",
            body: {
                text: "Escoge una de nuestras opciones:"
            },
            action: {
                buttons: [
                    {
                        type: "reply",
                        reply: {
                            id: "si-enviar",
                            title: "Si, enviar la solicitud"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "no-enviar",
                            title: "No, no enviar la solicitud"
                        }
                    },
                    {
                        type: "reply",
                        reply: {
                            id: "volver-al-inicio",
                            title: "Volver al inicio"
                        }
                    }
                ]
            }
        },
    });

    return data;
}

function List(number: string) {

    const data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type": "text",
                "text": "Giros de negocio"
            },
            "body": {
                "text": "Selecciona tu Giro"
            },
            "action": {
                "button": "Ver los Giros",
                "sections": [
                    {
                        "title": "Giro",
                        "rows": [
                            {
                                "id": "industrial",
                                "title": "Industrial",
                            },
                            {
                                "id": "comercial",
                                "title": "Comercial",
                            },
                            {
                                "id": "de-servicio",
                                "title": "De servicio",
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}


export { ImageText, MessageText, List, MessageButtons, NumberCompanies, HasTeam, Finish }