import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }: { children: React.ReactNode }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    const portal = document.querySelector("#portal");

    if (!isMounted || !portal) return null;

    return createPortal(children, portal);
}

export default Modal;