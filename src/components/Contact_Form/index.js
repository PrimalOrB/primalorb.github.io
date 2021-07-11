import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {

    const [ formState, setFormState ] = useState( { name: '', email: '', message: '' } )
    const [ errorMessage, setErrorMessage ] = useState( '' )
    const { name, email, message } = formState;


    function handleChange( e ) {
        if( e.target.name === 'email' ){
            const isValid = validateEmail( e.target.value )
            if ( !isValid ) {
                setErrorMessage( 'Your email is invalid' );
              } else {
                setErrorMessage( '' );
              }
        } else {
            if ( !e.target.value.length ) {
              setErrorMessage( `${ e.target.name } is required` );
            } else {
              setErrorMessage( '' );
            }
          }

        if( !errorMessage ){
            setFormState( {
                ...formState, [e.target.name]: e.target.value
            } )
        }  
    }

    function handleSubmit( e ){
        e.preventDefault()
        console.log( formState )
    }

    return (
        <section id="contact-form-cont">
            <form id="contact-form" onSubmit={ handleSubmit } role="none" aria-hidden="true">
                <div>
                    <label htmlFor="name" role="none" aria-hidden="true">Name:</label>
                    <input type="text" name="name" defaultValue={ name } onBlur={ handleChange } aria-label="name input"/>
                </div>
                <div>
                    <label htmlFor="email" role="none" aria-hidden="true">Email:</label>
                    <input type="email" name="email" defaultValue={ email } onBlur={ handleChange } aria-label="email input" />
                </div>
                <div>
                    <label htmlFor="message" role="none" aria-hidden="true">Message:</label>
                    <textarea name="message" rows="5" defaultValue={ message } onBlur={ handleChange } aria-label="message input"  />
                </div>
            </form>
            {errorMessage ? (
                <div className="error-text-div" role="alert" aria-relevant="all">
                    <p className="error-text">{errorMessage}</p>
                </div>
                ) : (
                    <div className="error-text-div">
                        <button type="submit" id="contact-submit" data-testid="contact-submit">Submit</button>
                </div>
                )}
        </section>
    )
}

export default ContactForm;