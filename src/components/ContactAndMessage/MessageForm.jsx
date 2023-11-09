import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const MessageForm = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const form = useFormik( {
        initialValues: {
            name: '',
            email: '',
            message: '',
        },

        validationSchema: Yup.object( {
            name: Yup.string() 
                .required("Namn måste anges")
                .matches(/^[A-Za-zÄ-Öä-ö\s]{2,}$/, "Namnet är inte giltigt"),
            email: Yup.string()
                .required("E-post måste anges")
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/, "E-postadressen måste vara giltig"),
            message: Yup.string()
                .required("Meddelande måste skrivas")
                .matches(/^[^<>{}]{8,}$/, "Meddelandet måste bestå av minst 8 tecken"),
        }),

        onSubmit: async (values, {resetForm}) => {
            try {
                const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(values)
                })
    
                switch (result.status) {
                    case 200:
                        setSuccessMessage('Meddelande skickat')
                        setErrorMessage('')
                        resetForm()
                        setTimeout(() => {
                            setSuccessMessage('')
                        }, 5000)
                        break;
                    case 400:
                        setErrorMessage('Något gick fel')
                        setSuccessMessage('')
                        break;
                }
            }
            catch (error) {
                setErrorMessage('Ett nätverksfel inträffade eller servern svarar inte.')
                setSuccessMessage('')
            }  
        }
    })
    useEffect(() => {
        let timer;
        if (successMessage) {
            timer = setTimeout(() => {
                setSuccessMessage('')
            }, 5000)
        }
        return () => clearTimeout(timer)
    }, [successMessage])

    return (
        <form onSubmit={form.handleSubmit} noValidate>
            <div className="form-input">
                <input type="text" name='name' value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} placeholder="Name*" required />
                {form.touched.name && form.errors.name ? (
                    <span className='error'>{form.errors.name}</span>
                ) : null}
                
            </div>
            <div className="form-input">
                <input type="email" name='email' value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} placeholder="Email*" required />
                {form.touched.email && form.errors.email ? (
                    <span className='error'>{form.errors.email}</span>
                ) : null}
            </div>
            <div className="form-input">
                <textarea name='message' value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur} placeholder="Your Message*" rows="5" required></textarea>
                {form.touched.message && form.errors.message ? (
                    <span className='error'>{form.errors.message}</span>
                ) : null}
            </div>
            <div className="form-input">
                <button className=" btn-yellow" type="submit">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>  
            </div>
            <p className='error'>{errorMessage}</p>
            <p className='success'>{successMessage}</p>
        </form>
    )
}

export default MessageForm