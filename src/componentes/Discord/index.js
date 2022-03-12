/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Box from '../Box';

export default function Discord() {
    return (
        <div className='Discord'>
            <Box titulo='victorwsantos' informacao='Follow me on GitHub' />
            // eslint-disable-next-line react/jsx-no-target-blank
            <a href='https://github.com/victorwsantos' target='_blank'><button>Follow Me</button></a>
        </div>
    )
}