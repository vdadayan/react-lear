import React from 'react';
import './FormControls.scss'

export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return(
        <div>
            <textarea className={hasError && 'error'} {...input} {...props}/>
            {hasError &&
                <span>{meta.error}</span>
            }
        </div>
    );
}