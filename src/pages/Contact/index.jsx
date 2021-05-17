import React, {useState} from 'react';
import './index.scss';

const regex = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name: /^[A-Za-z\s]+$/,
    message: /^[A-Za-z1-9!@#&*-_\s]+$/
};

const Contact = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    });
    const validate = (name, value) => {
        return regex[name].test(value)
    };
    const onInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        if(validate(e.target.name, e.target.value)) {
            setErrors({
                ...errors,
                [e.target.name]: false
            })
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const errorData = Object.keys(input).reduce((acc, key) => ({
            ...acc,
            [key]: !validate(key, input[key])
        }), {});
        setErrors(errorData);
        const values = Object.values(errors);
        if(!values.filter(Boolean).length) {
            fetch('https://karansinghvirdi.netlify.app/.netlify/functions/server/send-mail', {
                body: JSON.stringify(input)
            })
                .then(res => res.json())
                .then(res => {
                    console.log('Success');
                })
                .catch(() => {
                    console.log('Error');
                })
        }
    }
    const onInputBlur = (e) => {
        if(validate(e.target.name, e.target.value)) {
            setErrors({
                ...errors,
                [e.target.name]: false
            })
        } else {
            setErrors({
                ...errors,
                [e.target.name]: true
            })
        }
    }
    return (
        <form className="contact" onSubmit={onSubmit}>
            <input name="name"
                   value={input.name}
                   className={`input ${errors.name ? 'error' : ''}`}
                   type="text"
                   placeholder="Name"
                   onChange={onInputChange}
                   onBlur={onInputBlur} />
            <input name="email"
                   value={input.email}
                   className={`input ${errors.email ? 'error' : ''}`}
                   type="email"
                   placeholder="Email"
                   onChange={onInputChange}
                   onBlur={onInputBlur} />
            <textarea name="message"
                      value={input.message}
                      className={`textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Your message" rows="4"
                      onChange={onInputChange}
                      onBlur={onInputBlur} />
            <button type="submit">Submit</button>
        </form>
    )
};

export default Contact;