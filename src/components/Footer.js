import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
const StyledFooterFooter = styled.footer`
   
`

const Footer = () => {
    const [deferredPrompt, setDeferredPrompt] = useState()

    const handleA2hs = () => {
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    }

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);
        });
        return () => {
            window.removeEventListener('beforeinstallprompt');
        }
    }, [])

    return (
        <StyledFooterFooter>
            <button onClick={handleA2hs}>A2HS</button>
        </StyledFooterFooter>
    )
}

export default Footer