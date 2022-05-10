import React from 'react';
import { alertHandler } from '../services/helpers';

export default function Alert({ alertPopUp }) {
    return (
        <div className={alertHandler(alertPopUp)} style={{ width: '100%' }} role='alert'>
            {alertPopUp.message}
        </div>
    );
}
