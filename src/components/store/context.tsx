import React from "react";

export interface IContactInterface {
    name: string;
    phone: number;
    email: string;
    favorite: boolean;
}

export const ContactContext = React.createContext<IContactInterface | null>(
    null
);

export const ContactProvider: any = ContactContext.Provider;
export const ContactConsumer = ContactContext.Consumer;
