import "dotenv/config";
import { Request, Response } from "express";
import { processMessage } from "../shared/process";
import { handleHttp } from "../utils/error.handle";

const verifyToken = (req: Request, res: Response) => {
  try {
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if (mode && token) {
      if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
        console.log("WEBHOOK_VERIFIED");
        res.status(200).send(challenge);
      } else {
        res.sendStatus(403);
      }
    }
  } catch (e) {
    res.status(400).send();
  }
};

const recivedMessage = (req: Request, res: Response) => {
  try {
    let body = req.body;
    let messageOrginal = GettexttUser(
      req.body.entry[0].changes[0].value.messages[0]
    );
    let type = req.body.entry[0].changes[0].value.messages[0].type;

    if (type == "interactive") {
      processMessage(
        messageOrginal,
        req.body.entry[0].changes[0].value.messages[0].from
      );
    } else {
      // info on WhatsApp textt message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#textt-messages
      if (req.body.object) {
        if (
          req.body.entry &&
          req.body.entry[0].changes &&
          req.body.entry[0].changes[0] &&
          req.body.entry[0].changes[0].value.messages &&
          req.body.entry[0].changes[0].value.messages[0]
        ) {
          let phone_number_id =
            req.body.entry[0].changes[0].value.metadata.phone_number_id;
          let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
          let msg_body =
            req.body.entry[0].changes[0].value.messages[0].textt.body;
          let msg_reply = req.body.entry[0].changes[0].value.messages[0]; // extract the message textt from the webhook payload

          if (msg_body != "" || msg_body != undefined) {
            processMessage(msg_body, from);
          }
        }
        res.sendStatus(200);
      } else {
        // Return a '404 Not Found' if event is not from a WhatsApp API
        res.sendStatus(404);
      }
    }
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

function GettexttUser(message: any) {
  let text = "";
  let typeMeesage = message["type"];

  console.log(message);

  switch (typeMeesage) {
    case "text":
      text = message["text"]["body"];
      break;

    case "interactive":
      let interactiveObject = message["interactive"];
      let typeInteractive = interactiveObject["type"];

      if (typeInteractive === "button_reply") {
        text = interactiveObject["button_reply"]["title"];
      } else {
        text = interactiveObject["list_reply"]["title"];
      }
      break;
  }

  return text;
}

export { verifyToken, recivedMessage };
