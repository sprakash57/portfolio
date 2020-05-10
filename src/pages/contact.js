import React, { useState } from 'react';
import Layout from '../components/layout';
import styles from './contact.module.scss';

const Contact = () => {
    const [respMessage, setRespMessage] = useState(false);
    const submitForm = data => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", process.env.GATSBY_AWS_API, true);
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        // Send the collected data as JSON
        xhr.send(JSON.stringify(data));
        // Callback function
        xhr.onloadend = response => {
            if (response.target.status === 200) {
                // The form submission was successful
                setRespMessage('Thanks for the message. I’ll be in touch shortly.');
                document.getElementById('reqFrm').reset();
            } else {
                // The form submission failed
                setRespMessage('Something went wrong');
                alert(JSON.parse(response.target.response).message);
            }
        };
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = e.target;
        const data = {
            sesReceive: process.env.GATSBY_AWS_SES_RECEIVE,
            sesSend: process.env.GATSBY_AWS_SES_SEND,
            name: formData.ghynamenjb.value,
            replyTo: formData.qwdreplyTo786.value,
            phone: formData.sdaphonepoi.value,
            message: formData.xc_messagemnj.value,
            honeyPot: ""
        }
        const isHoney = [formData.name.value, formData.replyTo.value, formData.phone.value, formData.message.value].join('') !== '';
        if (isHoney) data.honeyPot = "has";
        else submitForm(data);
    }

    return (
        <Layout title='Contact'>
            <h1>Contact</h1>
            <p>The best way to contact me is via <a target="_" href="https://www.linkedin.com/in/sunny-prakash-3780ba49/">Linkedin</a></p>
            <p>Or</p>
            <form onSubmit={handleSubmit} autoComplete='off' id='reqFrm'>
                <label htmlFor='ghynamenjb'>Name</label>
                <input type="text" name="ghynamenjb" />
                <label htmlFor='qwdreplyTo786'>Email</label>
                <input type="email" name="qwdreplyTo786" />
                <label htmlFor='sdaphonepoi'>Phone</label>
                <input type="tel" name="sdaphonepoi" />
                <label htmlFor='xc_messagemnj'>Message:</label>
                <textarea name="xc_messagemnj"></textarea>
                {/*<---- W i n n i e  t h e  P o o h ---->*/}
                <label className={styles.binnypoo} htmlFor='name'>Name</label>
                <input className={styles.binnypoo} type="text" name="name" />
                <label className={styles.binnypoo} htmlFor='replyTo'>Email</label>
                <input className={styles.binnypoo} type="email" name="replyTo" />
                <label className={styles.binnypoo} htmlFor='phone'>Phone</label>
                <input className={styles.binnypoo} type="tel" name="phone" />
                <label className={styles.binnypoo} htmlFor='message'>Message:</label>
                <textarea className={styles.binnypoo} name="message"></textarea>
                <button type="submit">Send Message</button>
            </form>
            <p>{respMessage}</p>
        </Layout>
    )
}

export default Contact;