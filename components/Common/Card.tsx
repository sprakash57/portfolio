import NextImage from 'next/image';
import styles from '@/styles/components/Common/Card.module.scss';
import Header from './Header';
import React from 'react';
import { classnames } from '@/helpers/utils';

type CommonProps = {
    className?: string;
    children: React.ReactNode;
}

const Image = ({ image, alt }: { image: string | undefined, alt: string }) => {
    if (!image) return null;
    return (
        <figure className={styles.cardImage}>
            <NextImage
                src={require(`../../public/${image}`)}
                alt={alt}
                placeholder="blur"
            />
        </figure>
    )
}

const Title = ({ className = "", children }: { className?: string, children: React.ReactNode }) => {
    return (
        <header className={classnames(styles.cardTitle, className)}>
            {children}
        </header>
    )
}

const Body = ({ className, children }: CommonProps) => {
    return (
        <section className={classnames(styles.cardBody, className)}>
            {children}
        </section>
    )
}

const Card = ({ className, children, addStyles }: { children: React.ReactNode, className?: string, addStyles?: string }) => {
    const classes = className ? className : classnames(styles.card, addStyles);
    return (
        <section className={classnames(classes)}>{children}</section>
    )
}

Card.Body = Body;
Card.Title = Title;
Card.Image = Image;

export default Card;
