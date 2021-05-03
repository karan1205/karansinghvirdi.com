import React, {Suspense} from 'react';

const neverResolve = new Promise(() => {});

const Suspender = ({suspend}) => {
    if(suspend) {
        throw neverResolve;
    } else {
        return null;
    }
};

export const Preload = ({show, children}) => {
    return (
        <Suspense fallback={null}>
            {children}
            <Suspender suspend={!show} />
        </Suspense>
    )
}
