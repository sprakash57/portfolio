import React from 'react';
import NextImage from 'next/image';
import ExtLink from "@/public/icons/external.svg";
import { classnames } from '@/helpers/utils';
import styles from './index.module.scss';

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

const Body = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return (
        <section className={classnames(styles.cardBody, className)}>
            {children}
        </section>
    )
}

const Card = ({
    className,
    children,
    overrideStyles
}: {
    children: React.ReactNode,
    className?: string,
    overrideStyles?: string
}) => {
    return (
        <section
            className={overrideStyles ? overrideStyles : classnames(styles.card, className)}
        >
            {children}
        </section>
    )
}

Card.Body = Body;
Card.Title = Title;
Card.Image = Image;

export default Card;
