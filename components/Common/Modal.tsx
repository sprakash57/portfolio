import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from '@/styles/components/Common/Modal.module.scss';

type Props = {
    isOpen: boolean
    children: React.ReactNode;
    onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: Props) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    if (!isMounted || !isOpen) return null;

    return createPortal(
        <>
            <div className={styles.overlay} />
            <div className={styles.modalContainer}>
                <button onClick={onClose}>close</button>
                {children}
            </div>
        </>,
        document.querySelector("#portal")!
    );
}

export default Modal;