import React from 'react';

const imageCache = {
    _cache: {},
    read(src) {
        if (!this._cache[src]) {
            this._cache[src] = new Promise((res) => {
                const img = new Image();
                img.onload = () => {
                    res(true);
                };
                img.src = src;
            }).then(bool => {
                this._cache[src] = bool
            });
        }
        if (this._cache[src] instanceof Promise) {
            throw this._cache[src];
        }
        return this._cache[src];
    }
}

export default function SuspenseImg({ alt, src, styleClass }) {
    imageCache.read(src);
    return <img className={styleClass} src={src} alt={alt} />
}
