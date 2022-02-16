/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Box from '../Box';

export default function Whats() {
    return (
        <div className='Whats'>
            <Box titulo='Victor Santos' informacao='Hey there, Im using WhatsApp' />
            <a href='https://wa.me/5521985378736' target='_blank'><button>Enviar Mensagem</button></a>
        </div>
    )
}