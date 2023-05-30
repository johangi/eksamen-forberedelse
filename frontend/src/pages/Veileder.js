const Veileder = () => {
    return (
        <div className="veileder">
            <h1>Sette Opp ny bruker i Linux</h1>
            <h2>Nøkkelpålogging, sudorettigheter, og hosting av node app.</h2>
            <br />
            <h4>1.</h4>
            <p>Opprett en ny bruker:
                <br />
                Logg inn på Linux-serveren din med en bruker som har superbrukerrettigheter (for eksempel 'root' brukeren).
                <br />
                Kjør følgende kommando for å opprette en ny bruker:</p>
            <img src="step1.png" alt="step1" />
            <p>Erstatt 'geir' med ønsket brukernavn. Følg instruksjonene for å legge inn passord og annen relevant informasjon.</p>
            <h4>2.</h4>
            <p>Opprett en SSH-nøkkel:
                <br />
                Logg inn som ny bruker:</p>
            <img src="step2.png" alt="step2" />
            <p>Kjør følgende kommando for å opprette en SSH-nøkkel:</p>
            <img src="step3.png" alt="step3" />
            <p>Følg instruksjonene for å generere nøkkelen. Standardinnstillingene bør fungere fint. Når nøkkelen er generert, kan du se nøkkelen ved å kjøre:</p>
            <img src="step4.png" alt="step4" />
            <p>Kopier hele nøkkelen til utklippstavlen.</p>
            <h4>3.</h4>
            <p>Legg til SSH-nøkkelen på serveren: <br />
                Logg inn på serveren med superbrukerrettigheter. <br />
                Kjør følgende kommando for å legge til SSH-nøkkelen: <br />
                su - geir <br />
                mkdir ~/.ssh <br />
                nano ~/.ssh/authorized_keys <br />
                Lim inn SSH-nøkkelen fra utklippstavlen inn i 'authorized_keys' filen. Lagre og avslutt filen.<br />
                Kjør følgende kommando for å endre rettighetene til mappen og filen:
            </p>
            <img src="step5.png" alt="step5" /><br />
            <img src="step5.1.png" alt="step5.1" />
            <h4>4.</h4>
            <p>Gi brukeren sudorettigheter:<br />
                Logg inn på serveren med superbrukerrettigheter.<br />
                Kjør følgende kommando for å legge til ny bruker til sudo-gruppen:<br />
            </p>
            <img src="step6.png" alt="step6" />
            <h4>5.</h4>
            <p>Installer nødvendige pakker for å hoste en Node.js applikasjon:<br />
                Logg inn som ny bruker.<br />
                Kjør følgende kommando for å oppdatere pakkelisten:<br />
            </p>
            <img src="step7.png" alt="step7" />
            <p>
                Kjør følgende kommando for å installere Node.js, npm og andre nødvendige verktøy:
            </p>
            <img src="step8.png" alt="step8" />
            <h4>6.</h4>
            <p>Last opp Node.js applikasjonen:<br />
                Du kan laste opp applikasjonen til serveren ved å bruke Git eller et annet overføringsverktøy.<br />
                Lag en mappe for applikasjonen ved å kjøre:<br />
            </p>
            <img src="step9.png" alt="step9" />
            <p>Naviger til mappen ved å kjøre:</p>
            <img src="step10.png" alt="step10" />
            <p>Last opp applikasjonen og pakk den ut i mappen.</p>
            <h4>7.</h4>
            <p>Start Node.js applikasjonen: <br />
                Naviger til applikasjonsmappen ved å kjøre:
            </p>
            <img src="step10.png" alt="step11" />
            <p>Start applikasjonen ved å kjøre følgende kommando:</p>
            <img src="step11.png" alt="step11" />
            <p><i><strong>Hint:</strong> Applikasjonen bør kjøre på Port 80. Dette er default port for HTTP traffikk.</i></p>
        </div>
    );
}

export default Veileder;