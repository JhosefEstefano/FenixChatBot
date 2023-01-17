export interface ImageMessage {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "image";
  image: Image;
}

export interface Image {
  link: string;
}
