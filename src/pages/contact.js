import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import styles from './contact.module.scss';
import SocialIcon from '../components/socialIcon';
import { faTwitter, faLinkedinIn, faDev, faStackOverflow, faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { twitter, linkedin, address, phone, dev, starckoverflow, github, playStore } from '../libs/dataLib';

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState("");
    const [loading, setLoading] = useState(false);
    const submitForm = data => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", process.env.GATSBY_AWS_API, true);
        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        // Send the collected data as JSON
        xhr.send(JSON.stringify(data));
        // Load events
        xhr.onloadstart = e => {
            setLoading(true);
        };
        xhr.onloadend = response => {
            if (response.target.status === 200) {
                setFormSubmitted("has");
                if (typeof window.localStorage !== undefined) {
                    localStorage.setItem("submissionStatus", "has");
                }
            } else {
                alert(JSON.parse(response.target.response).message);
            }
            setLoading(false);
        };
    }

    const formValidation = ({ name, replyTo, phone, message }) => [name, replyTo, phone, message].join('') !== '';

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
        const isDirty = [formData.name.value, formData.replyTo.value, formData.phone.value, formData.message.value].join('') !== '';
        if (!isDirty) {
            if (!formValidation(data)) {
                alert('All fields are mandatory');
            } else {
                submitForm(data);
            }
        }
    }

    useEffect(() => {
        if (typeof window.localStorage !== undefined) {
            setFormSubmitted(localStorage.getItem("submissionStatus"));
        }
    }, [])

    return (
        <Layout title='Contact'>
            <div className='container mt-4'>
                <div className="row hr-line">
                    <div className="col">
                        <h3>Contact info</h3>
                    </div>
                </div>
                <div className='row mt-5'>
                    <section className='col-4 text-center'>
                        <h6 className='text-muted'>Address</h6>
                        <small>{address}</small>
                    </section>
                    <section className='col-4 text-center'>
                        <h6 className='text-muted'>Phone</h6>
                        <small>{phone}</small>
                    </section>
                    <section className='col-4 text-center'>
                        <h6 className='text-muted'>Skype ID</h6>
                        <small>{'sunnypr12'}</small>
                    </section>
                </div>
                <section className="row hr-line mb-4 mt-4">
                    <div className="col">
                        <h3>Social</h3>
                    </div>
                </section>
                <section className='row w-75 text-center m-auto'>
                    <div className="col-2"><SocialIcon icon={faTwitter} to={twitter} size='lg' /></div>
                    <div className="col-2"><SocialIcon icon={faLinkedinIn} to={linkedin} size='lg' /></div>
                    <div className="col-2"><SocialIcon icon={faDev} to={dev} size='lg' /></div>
                    <div className="col-2"><SocialIcon icon={faStackOverflow} to={starckoverflow} size='lg' /></div>
                    <div className="col-2"><SocialIcon icon={faGithub} to={github} size='lg' /></div>
                    <div className="col-2"><SocialIcon icon={faGooglePlay} to={playStore} size='lg' /></div>
                </section>
                <section className="row hr-line mb-4 mt-5">
                    <div className="col">
                        <h3>Shoot a mail</h3>
                    </div>
                </section>
                {formSubmitted !== 'has'
                    ? <section className="row w-75 m-auto">
                        <div className="col">
                            <form onSubmit={handleSubmit} autoComplete='off' id='reqFrm'>
                                <div className="form-group">
                                    <label htmlFor="ghynamenjb">Name*</label>
                                    <input type="text" className="form-control" id="ghynamenjb" name="ghynamenjb" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='qwdreplyTo786'>Email*</label>
                                    <input type="email" className="form-control" name="qwdreplyTo786" id="qwdreplyTo786" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='sdaphonepoi'>Phone*</label>
                                    <input type="tel" className="form-control" name="sdaphonepoi" id="sdaphonepoi" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='xc_messagemnj'>Message*</label>
                                    <textarea className="form-control" name="xc_messagemnj" id="xc_messagemnj" rows="5" required />
                                </div>
                                {/*<---- W i n n i e  t h e  P o o h ---->*/}
                                <label className={styles.binnypoo} htmlFor='name'>Name</label>
                                <input className={styles.binnypoo} type="text" name="name" id="name" />
                                <label className={styles.binnypoo} htmlFor='replyTo'>Email</label>
                                <input className={styles.binnypoo} type="email" name="replyTo" id="replyTo" />
                                <label className={styles.binnypoo} htmlFor='phone'>Phone</label>
                                <input className={styles.binnypoo} type="tel" name="phone" id="phone" />
                                <label className={styles.binnypoo} htmlFor='message'>Message:</label>
                                <textarea className={styles.binnypoo} name="message" id="message"></textarea>
                                {loading
                                    ? <div className={styles.loader}></div>
                                    : <button className="btn btn-secondary" type="submit">Send Message</button>}
                            </form>
                        </div>
                    </section>
                    : <div className="alert alert-success w-50 m-auto text-center">Thank you for your message. I'll be in touch shortly!!</div>}
            </div>
        </Layout>
    )
}

export default Contact;