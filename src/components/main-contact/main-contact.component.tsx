import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ContactContext } from '../../store/context';

const MainContact: React.FC<RouteComponentProps> = ({ history }) => {

    const [contactData, dispatchContact]: any = React.useContext(ContactContext);

    const handleFavorite = (contactDetails: any) => {
        const { favourite } = contactDetails;
        dispatchContact({ type: 'FAVOURITE_CONTACT', payload: { ...contactDetails, favourite: !favourite } });
    }

    const handleEdit = (contactDetails: any) => {
        history.push({
            pathname: '/update',
            state: contactDetails
        });
    }

    return (
        <div className="main-contact">
            <ul className="contact-list-container">
                {contactData &&
                    contactData.map((contact: any, index: any) => (
                        <li key={index} className="contact-box">
                            <div className="contact-avatar">{(contact.name).charAt(0)}</div>
                            <span className="contact-name">{contact.name}</span><br />
                            <div className="other-info-container">
                                <span className="other-contact-info">
                                    <img className="other-contact-info-icons" alt="phone"
                                        src={require("../../assets/images/phone.png")} />
                                    {contact.phone ? contact.phone : 'xx-xxx-xxx'}
                                </span><br />
                                <span className="other-contact-info">
                                    <img className="other-contact-info-icons" alt="email"
                                        src={require("../../assets/images/email.png")} />
                                    {contact.email}</span>

                                <span onClick={() => handleFavorite(contact)}>
                                    {contact.favourite ? (
                                        <img className="other-contact-info-icons" alt="fav "
                                            src={require("../../assets/images/favorited.png")} />) :
                                        (<img className="other-contact-info-icons" alt="fav"
                                            src={require("../../assets/images/favorite.png")} />)}
                                </span>
                                <span onClick={() => handleEdit(contact)}>
                                    <img className="other-contact-info-icons" alt="fav"
                                        src={require("../../assets/images/edit.png")} />
                                </span>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default MainContact;
