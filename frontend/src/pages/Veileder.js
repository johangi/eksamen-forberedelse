const Veileder = () => {
    return (
        <div className="veileder">
            <section className="trusler">
                <h1>Typiske trusler</h1>
                <h3>DoS - Denial of Service / DDoS - Distributed Denial of Service</h3>
                <p>
                    Dette er når en aktør utnytter serveren slik at den sender en respons til en stor andel forespørsler.
                    Dette kan føre til at serveren kan bli treig eller "krasje", og gjør at brukere på serveren får avslått tilgang
                    til serveren. Slike angrep er ofte rettet mot stater, banker, og generelt store bedrifter.
                </p>
                <h3>Web Defacement Attack</h3>
                <p>
                    I et slikt angrep, vil en aktør få tilgang til en nettside/server, og endre på innholdet for at eieren av siden
                    skal "miste fjes". Ofte vil aktøren utnytte en svakhet i webserveren, og erstatte nettsiden med sin egen side.
                </p>
                <h3>SSH Brute Force Attack</h3>
                <p>
                    Ved å "brute force" SSH login legitimasjon vil en aktør kunne tvinge tilgang til en server som har SSH pålogging.
                    Slike angrep kan bli brukt til å sende "onde" filer uten at det blir lagt merke til.
                </p>
                <h3>Cross-Site Scripting</h3>
                <p>
                    Et slikt angrep har som mål å angripe sider med feil i scriptingen sin. Angrepet utføres ved å "skyte inn"
                    ondsinnet kode, som kan gi aktøren tilgang til sensitiv informasjon som er lagret i web appen, for eksempel cookies.
                </p>
                <hr />
                <h1>Hvordan beskytter jeg meg selv og serveren min?</h1>
                <h3>Hold systemet oppdatert</h3>
                <p>
                    Gammel programvare kan ha sikkerhetshull og andre svakheter som kan gjøre det lettere for en potensiell aktør
                    å skaffe seg tilgang til systemet ditt.
                </p>
                <h3>Unngå offentlige nettverk</h3>
                <p>
                    En ubeskyttet nettverkstilkobling kan gi en aktør muligheten til å spre virus og annen skadevare. Hvis du tillater
                    deling av filer på offentlige nettverk, kan en aktør lett infisere din maskin med skadevare.
                </p>
                <h3>Skru på brannmur</h3>
                <p>
                    Med en brannmur kan du kontrollere all trafikken som går inn og ut av din maskin. Dette kontrolleres med å se på
                    traffiktypen, avsenderadresse, og mål. Med dette kan du for eksempel begrense http traffik til port 80 på en server.
                </p>
                <h3>Sikkerhetskopier dataene dine</h3>
                <p>
                    Hvis det skulle skje at du blir angrepet og mister data eller tilgang til systemet ditt, vil det være lurt å ha en
                    sikkerhetskopi for å lett få tilbake all informasjonen og dataen din.
                </p>
            </section>
            <hr />
            <section className="auth">
                <h1>Autentisering & Autorisering</h1>
                <h3>Hva er autentisering?</h3>
                <p>
                    Autentisering er en prosess som verifiserer identiteten til en bruker. For eksempel innlogging.
                </p>
                <h3>Hva er autorisering?</h3>
                <p>
                    Autorisering er en prosess som sjekker hva en autentisert bruker har tilgang til, for eksempel å lage en todo.
                </p>
                <h3>Hvorfor autentisere og autorisere?</h3>
                <p>
                    De fleste nettsider & maskiner inneholder sensitiv informasjon. For å hindre at denne informasjonen blir sett av de
                    som ikke skal se det, vil du autentisere brukere før de får tilgang til denne informasjonen.
                </p>
                <h3>Hvorfor trenger man auth på en todo-liste?</h3>
                <p>
                    Hensikten med denne nettsiden er at du skal kunne lage din egen todo-liste, og kunne oppdatere alle dine egne "todos".
                    Uten autentisering vil din todo-liste ikke kunne knyttes til deg som en bruker, og du ville ikke hatt dine helt egne "todos".
                </p>
                <p>
                    Autorisering er viktig for at det bare er deg som kan redigere dine egne "todos". Uten dette ville det vært mulig for alle brukere
                    å redigere alle sine todos, noe som ikke er målet til denne nettsiden.
                </p>
            </section>
            <hr />
            <section className="linux">
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
            </section>
        </div>
    );
}

export default Veileder;