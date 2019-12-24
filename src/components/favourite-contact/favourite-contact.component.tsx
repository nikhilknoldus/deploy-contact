import React from "react";
import { ContactContext } from "../../store/context";

const FavouriteContact: React.FC = () => {
    const [contactData, dispatchContact]: any = React.useContext(ContactContext);

    const handleFavorite = (contactDetails: any) => {
        const { favourite } = contactDetails;
        dispatchContact({
            type: "FAVOURITE_CONTACT",
            payload: { ...contactDetails, favourite: !favourite },
        });
    };

    return (
        <div className="main-contact">
            <ul className="contact-list-container">
                {contactData &&
                    contactData.filter((contact: any) => contact.favourite)
                        .map((contact: any, index: any) => (
                            <li key={index} className="contact-box">
                                <div className="contact-avatar">{(contact.name).charAt(0)}</div>
                                <span className="contact-name">{contact.name}</span><br />
                                <div className="other-info-container">
                                    <span className="other-contact-info">
                                        <img className="other-contact-info-icons" alt="phone"
                                            src={require("../../assets/images/phone.png")} />
                                        {contact.phone}
                                    </span>
                                    <br />
                                    <span className="other-contact-info">
                                        <img className="other-contact-info-icons" alt="email"
                                            src={require("../../assets/images/email.png")} />
                                        {contact.email}
                                    </span>
                                    <span onClick={() => handleFavorite(contact)}>
                                        <img className="other-contact-info-icons" alt="fav"
                                            src={require("../../assets/images/favorited.png")} />
                                    </span>
                                </div>
                            </li>
                        ))}
            </ul>
        </div>
    );
};

export default FavouriteContact;
