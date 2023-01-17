export interface TextMessage {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "text";
  text: Text;
}

export interface Text {
  preview_url: boolean;
  body: string;
}
