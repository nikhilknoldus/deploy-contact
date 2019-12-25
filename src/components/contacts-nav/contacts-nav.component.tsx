import React from 'react';
import './contacts-nav.styles.scss';
import CustomButton from '../../shared/components/custom-button/custom-button.component';
import { NavLink } from 'react-router-dom';

const ContactsNav: React.FC = () => {
    return (
        <div data-test="contactListComponent" className="contact-list">
            <NavLink data-test="navLink1" to="/" activeClassName="active-button" exact>
                <CustomButton>Contacts</CustomButton>
            </NavLink>
            <NavLink data-test="navLink2" to="/favourite" activeClassName="active-button">
                <CustomButton>Favourites</CustomButton>
            </NavLink>
            <NavLink data-test="navLink3" to="/create" activeClassName="active-button">
                <CustomButton> + </CustomButton>
            </NavLink>
        </div>
    )
}
export default ContactsNav;
