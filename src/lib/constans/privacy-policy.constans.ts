export type PolicyLang = 'ro' | 'en'

export type PolicyBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'h3'; text: string }
  | { type: 'table'; head: [string, string]; rows: [string, string][] }

export interface PolicySection {
  title: string
  blocks: PolicyBlock[]
}

export interface PolicyContent {
  title: string
  subtitle: string
  details: { label: string; value: string }[]
  noticeTitle: string
  notice: string
  sections: PolicySection[]
}

const ro: PolicyContent = {
  title: 'Politica de Confidențialitate',
  subtitle: 'și prelucrare a datelor cu caracter personal',
  details: [
    { label: 'Operator', value: 'SCP PARSEC S.R.L.' },
    { label: 'IDNO', value: '1016600010076' },
    {
      label: 'Sediu',
      value: 'str. Mitropolit Gavriil Bănulescu-Bodoni nr. 59/B, mun. Chișinău, MD-2005, Republica Moldova',
    },
    { label: 'Contact confidențialitate', value: 'contact@parsec.md' },
    { label: 'Versiune / intrare în vigoare', value: 'Versiunea 2.0 / 06.10.2026' },
  ],
  noticeTitle: 'Notă importantă pentru utilizatorii site-ului',
  notice:
    'Accesarea site-ului nu reprezintă, prin ea însăși, consimțământul pentru orice tip de prelucrare și nu conferă Companiei un drept general sau nelimitat asupra datelor. Fiecare prelucrare trebuie să aibă un scop determinat, explicit și legitim, un temei legal corespunzător și să fie limitată la datele necesare.',
  sections: [
    {
      title: '1. Scopul și domeniul de aplicare',
      blocks: [
        {
          type: 'p',
          text: 'Prezenta Politică explică modul în care SCP PARSEC S.R.L. („Compania”, „noi”) colectează, utilizează, stochează, transmite și protejează datele cu caracter personal prin intermediul site-ului www.parsec.md, al formularelor electronice, adreselor de e-mail, rețelelor sociale, formularelor de înscriere la evenimente și al altor canale digitale administrate de Companie. Politica este elaborată în conformitate cu Legea nr. 195/2024 privind protecția datelor cu caracter personal și cu celelalte acte normative aplicabile din Republica Moldova.',
        },
        {
          type: 'p',
          text: 'Politica se aplică vizitatorilor site-ului, persoanelor care ne contactează, candidaților, clienților, potențialilor clienți, furnizorilor, partenerilor și reprezentanților acestora, în măsura în care datele lor sunt colectate sau transmise Companiei.',
        },
        {
          type: 'p',
          text: 'Prezenta Politică este o informare privind prelucrarea datelor. Ea nu transformă accesarea site-ului într-un consimțământ general și nu înlocuiește acordurile distincte care pot fi necesare pentru anumite prelucrări opționale.',
        },
        { type: 'h3', text: '1.1. Delimitarea față de informările și regulamentele interne' },
        {
          type: 'p',
          text: 'Prezenta Politică se referă în principal la datele colectate prin site, formulare, e-mailuri și alte canale publice sau digitale asociate site-ului. Prelucrările efectuate în cadrul raporturilor de muncă — inclusiv monitorizarea accesului, CCTV, recunoașterea facială, înregistrarea apelurilor angajaților, evaluarea performanței, datele medicale și SSM — sunt guvernate suplimentar de informări și acte interne distincte, comunicate persoanelor vizate în funcție de categoria lor.',
        },
        {
          type: 'p',
          text: 'Detaliile tehnice privind arhitectura de securitate, configurațiile sistemelor, regulile interne de acces și logurile de audit nu sunt publicate integral, pentru a nu crea riscuri suplimentare de securitate. Acestea sunt gestionate prin regulamentele și registrele interne ale Companiei.',
        },
      ],
    },
    {
      title: '2. Operatorul datelor',
      blocks: [
        {
          type: 'p',
          text: 'În raport cu datele colectate prin intermediul site-ului și al canalelor administrate de Companie, SCP PARSEC S.R.L. acționează, de regulă, în calitate de operator, deoarece stabilește scopurile și mijloacele prelucrării.',
        },
        {
          type: 'p',
          text: 'În anumite situații, Compania poate prelucra date în calitate de persoană împuternicită, în baza instrucțiunilor unui client sau partener contractual. În asemenea cazuri, prelucrarea poate fi guvernată și de informările sau politicile operatorului respectiv.',
        },
      ],
    },
    {
      title: '3. Categorii de persoane vizate',
      blocks: [
        {
          type: 'ul',
          items: [
            'vizitatori și utilizatori ai site-ului',
            'persoane care transmit mesaje, solicitări sau reclamații',
            'candidați și persoane care transmit CV-uri',
            'clienți, potențiali clienți, furnizori și parteneri',
            'reprezentanți, angajați sau persoane de contact ai unor organizații',
            'persoane care se abonează la comunicări, precum și participanți, invitați, vorbitori, colaboratori și reprezentanți media implicați în evenimente',
            'persoane ale căror date sunt incluse în documente, fotografii, înregistrări audio-video sau alte materiale transmise ori realizate în cadrul proiectelor',
          ],
        },
      ],
    },
    {
      title: '4. Datele pe care le putem prelucra',
      blocks: [
        {
          type: 'ul',
          items: [
            'nume și prenume',
            'adresă de e-mail, număr de telefon și alte date de contact',
            'companie, funcție, experiență și alte date profesionale',
            'conținutul mesajului, solicitării sau reclamației',
            'datele incluse în CV, inclusiv fotografia transmisă voluntar, precum și imaginea, vocea, fotografiile, înregistrările audio-video ori testimonialele furnizate sau realizate în cadrul proiectelor și evenimentelor',
            'date privind contractele, serviciile, proiectele, participarea la evenimente, comunicările și relațiile comerciale',
            'adresă IP, identificatori ai dispozitivului, browserului și sesiunii',
            'date privind accesarea și utilizarea site-ului, formularelor de înscriere, paginilor de campanie și platformelor digitale administrate de Companie',
            'date tehnice privind securitatea, performanța și funcționarea site-ului',
            'date colectate prin cookie-uri sau tehnologii similare, conform secțiunii dedicate',
          ],
        },
        {
          type: 'p',
          text: 'Nu solicităm transmiterea unor date sensibile decât atunci când acestea sunt strict necesare, există un temei legal și sunt utilizate în conformitate cu legislația aplicabilă. Persoanele sunt rugate să nu transmită prin formulare sau e-mail date medicale, date bancare, date despre condamnări ori alte informații sensibile care nu sunt solicitate expres.',
        },
        {
          type: 'p',
          text: 'În proiectele care implică minori, prelucrarea datelor și utilizarea imaginii se realizează numai cu informarea adecvată și, atunci când legea o cere, cu acordul părintelui sau al reprezentantului legal ori în baza altui temei legal aplicabil.',
        },
        { type: 'h3', text: '4.1. Sursa datelor' },
        {
          type: 'p',
          text: 'Datele sunt colectate, de regulă, direct de la persoana vizată, atunci când aceasta completează un formular, transmite un e-mail, un CV, un document sau interacționează cu site-ul. În măsura permisă de lege, datele pot proveni și de la reprezentanți ai unei organizații, clienți, parteneri, furnizori, platforme profesionale, surse publice sau furnizori autorizați de servicii.',
        },
        {
          type: 'p',
          text: 'Atunci când datele nu sunt colectate direct de la persoana vizată, Compania va furniza informarea necesară în condițiile și în termenul prevăzut de lege, cu excepția situațiilor în care se aplică o excepție legală.',
        },
      ],
    },
    {
      title: '5. Scopurile prelucrării',
      blocks: [
        {
          type: 'p',
          text: 'În funcție de activitatea efectivă, canalul utilizat și relația cu persoana, datele pot fi prelucrate pentru următoarele scopuri:',
        },
        {
          type: 'ul',
          items: [
            'funcționarea, administrarea, mentenanța și securizarea site-ului',
            'identificarea și remedierea erorilor tehnice',
            'prevenirea atacurilor informatice, fraudelor, abuzurilor și accesului neautorizat',
            'răspunsul la solicitări, mesaje, reclamații și cereri de informații',
            'comunicarea cu clienții, potențialii clienți, furnizorii, partenerii și reprezentanții acestora',
            'pregătirea, încheierea și executarea contractelor',
            'furnizarea serviciilor și administrarea relațiilor comerciale',
            'prestarea serviciilor de comunicare și relații publice, marketing, organizare de evenimente, producție media, design grafic, dezvoltare web, servicii HR și consultanță strategică',
            'gestionarea proiectelor clienților, a campaniilor și a datelor participanților, invitaților, vorbitorilor, furnizorilor și partenerilor implicați în evenimente sau producții media',
            'recrutarea și evaluarea candidaților',
            'verificarea CV-urilor, experienței și calificărilor',
            'comunicarea cu candidații și organizarea interviurilor',
            'păstrarea CV-urilor pentru oportunități profesionale viitoare, în condițiile legii',
            'administrarea raporturilor de muncă, instruirea și evaluarea performanței',
            'calcularea și achitarea salariilor, bonusurilor și altor drepturi',
            'îndeplinirea obligațiilor fiscale, contabile, de asigurări sociale și de evidență a muncii',
            'prevenirea și investigarea fraudelor, abaterilor disciplinare, furtului de informații și utilizării neautorizate a datelor',
            'controlul accesului în sediu și securizarea persoanelor, bunurilor și informațiilor',
            'utilizarea sistemelor CCTV, dacă acestea sunt instalate, exclusiv pentru securitatea sediului, a persoanelor și a bunurilor, cu informarea corespunzătoare',
            'monitorizarea utilizării sistemelor informatice, rețelelor, conturilor, dispozitivelor și aplicațiilor Companiei',
            'documentarea comunicărilor, aprobărilor și feedbackului aferent proiectelor, pentru trasabilitate, coordonare și asigurarea calității',
            'gestionarea incidentelor, breșelor de securitate și situațiilor de urgență',
            'asigurarea sănătății și securității în muncă',
            'gestionarea datelor medicale strict în măsura permisă de lege și necesară pentru îndeplinirea obligațiilor angajatorului',
            'gestionarea sesizărilor interne și a sesizărilor de tip whistleblowing',
            'constatarea, exercitarea și apărarea drepturilor Companiei în litigii, investigații sau proceduri administrative',
            'îndeplinirea solicitărilor autorităților publice și a obligațiilor legale',
            'realizarea auditului intern și extern',
            'administrarea relațiilor cu furnizorii, persoanele împuternicite și prestatorii de servicii',
            'utilizarea serviciilor de e-mail, cloud, hosting, VPN, software, securitate și suport IT',
            'stocarea, arhivarea, recuperarea și distrugerea controlată a datelor',
            'asigurarea continuității activității și recuperării în caz de incident',
            'efectuarea transferurilor internaționale de date, atunci când acestea sunt necesare pentru activitatea Companiei',
            'comunicarea de informații comerciale, oferte și materiale de marketing, în condițiile legii',
            'administrarea abonărilor și dezabonărilor de la comunicări',
            'realizarea analizelor statistice și de performanță',
            'îmbunătățirea serviciilor, proceselor și experienței utilizatorilor',
            'testarea și dezvoltarea unor produse, servicii, aplicații sau procese noi',
            'utilizarea instrumentelor automatizate și a soluțiilor de inteligență artificială, cu respectarea cerințelor de transparență, securitate și control uman',
            'organizarea evenimentelor, instruirilor și activităților de reprezentare',
            'realizarea și publicarea fotografiilor, înregistrărilor audio-video, testimonialelor și materialelor de comunicare aferente proiectelor sau evenimentelor, numai în baza unui temei legal corespunzător',
            'îndeplinirea cerințelor de guvernanță corporativă, management al riscurilor și conformitate',
            'evaluarea tranzacțiilor corporative, reorganizărilor, fuziunilor, achizițiilor sau proceselor de due diligence',
            'utilizarea cookie-urilor și tehnologiilor similare, conform Politicii privind cookie-urile',
            'protejarea drepturilor, proprietății, reputației și intereselor legitime ale Companiei',
            'orice alt scop permis de lege, cu condiția ca acesta să fie determinat, explicit, legitim și comunicat persoanei înainte de prelucrare',
          ],
        },
        {
          type: 'p',
          text: 'Lista de mai sus este o listă de scopuri posibile, nu o autorizare automată pentru utilizarea tuturor datelor în toate scopurile. Compania va activa și utiliza numai acele prelucrări care sunt efectiv necesare activității și documentate în registrele și procedurile sale interne.',
        },
        { type: 'h3', text: '5.1. Scopuri și temeiuri în funcție de categoria persoanei' },
        { type: 'h3', text: 'a) Dacă sunteți vizitator al site-ului' },
        {
          type: 'p',
          text: 'Putem prelucra date tehnice, precum adresa IP, identificatorii sesiunii și datele browserului, pentru funcționarea, securitatea și prevenirea abuzurilor. Temeiul poate fi necesitatea tehnică și/sau interesul legitim al Companiei. Refuzul cookie-urilor neesențiale nu împiedică accesarea conținutului de bază al site-ului.',
        },
        {
          type: 'p',
          text: 'Dacă ne transmiteți o întrebare, sesizare sau reclamație, folosim datele pentru a vă identifica solicitarea, a comunica cu dumneavoastră și a formula un răspuns. Furnizarea datelor necesare este voluntară, însă lipsa lor poate face imposibil răspunsul sau soluționarea solicitării.',
        },
        { type: 'h3', text: 'b) Dacă sunteți client, potențial client sau reprezentant al unei organizații' },
        {
          type: 'p',
          text: 'Datele pot fi prelucrate pentru inițierea, negocierea și executarea relației contractuale, furnizarea serviciilor, gestionarea comunicărilor, facturare, suport, securitate și apărarea drepturilor Companiei. Temeiul îl constituie, după caz, contractul, obligația legală sau interesul legitim. Furnizarea datelor necesare poate fi o condiție pentru încheierea sau executarea contractului.',
        },
        { type: 'h3', text: 'c) Dacă sunteți candidat' },
        {
          type: 'p',
          text: 'Datele din CV, mesaj și comunicările de recrutare sunt prelucrate pentru evaluarea candidaturii, verificarea informațiilor profesionale, organizarea interviurilor și comunicarea rezultatului. Temeiul poate fi efectuarea demersurilor precontractuale, interesul legitim sau consimțământul, după caz. Neprezentarea datelor necesare poate împiedica evaluarea candidaturii.',
        },
        {
          type: 'p',
          text: 'Păstrarea CV-ului pentru oportunități viitoare este o prelucrare separată și opțională. Refuzul acesteia nu afectează candidatura curentă.',
        },
        { type: 'h3', text: 'd) Dacă vă abonați la comunicări comerciale' },
        {
          type: 'p',
          text: 'Datele de contact pot fi utilizate pentru transmiterea de informații comerciale numai în condițiile legii și, după caz, în baza consimțământului. Furnizarea datelor în acest scop este voluntară și puteți renunța oricând la comunicări.',
        },
        { type: 'h3', text: 'e) Dacă sunteți furnizor, prestator sau partener' },
        {
          type: 'p',
          text: 'Datele pot fi prelucrate pentru selectarea și evaluarea furnizorului, gestionarea contractului, plăți, comunicări, audit, securitate și respectarea obligațiilor legale. Temeiul poate fi contractul, obligația legală sau interesul legitim al Companiei.',
        },
        { type: 'h3', text: 'f) Dacă participați la un eveniment, proiect media sau campanie' },
        {
          type: 'p',
          text: 'Putem prelucra date de contact, date privind participarea, imaginea, vocea și materialele în care apăreți pentru organizarea și desfășurarea activității, comunicarea cu participanții, documentarea proiectului și publicarea materialelor, după caz. Temeiul poate fi contractul, obligația legală, interesul legitim sau consimțământul, în funcție de context și de utilizarea concretă.',
        },
      ],
    },
    {
      title: '6. Temeiurile prelucrării',
      blocks: [
        { type: 'p', text: 'În funcție de situație, prelucrarea se poate întemeia pe:' },
        {
          type: 'ul',
          items: [
            'executarea sau pregătirea executării unui contract',
            'îndeplinirea unei obligații legale',
            'interesul legitim al Companiei, după evaluarea necesității și proporționalității',
            'consimțământul persoanei, atunci când acesta este necesar',
            'constatarea, exercitarea sau apărarea unui drept în fața autorităților sau instanțelor',
            'protejarea vieții, integrității, securității persoanelor sau a bunurilor, în situațiile permise de lege',
          ],
        },
        {
          type: 'p',
          text: 'Compania nu va utiliza consimțământul ca temei atunci când prelucrarea poate fi realizată în mod legal pe baza executării contractului, a unei obligații legale sau a unui interes legitim documentat.',
        },
      ],
    },
    {
      title: '7. Accesarea site-ului și transmiterea voluntară a datelor',
      blocks: [
        {
          type: 'p',
          text: 'Accesarea site-ului nu reprezintă consimțământ pentru orice tip de prelucrare și nu conferă Companiei dreptul de a utiliza datele pentru scopuri nelimitate. Prin navigarea site-ului pot fi prelucrate date tehnice strict necesare funcționării și securității acestuia.',
        },
        {
          type: 'p',
          text: 'Transmiterea voluntară a unui mesaj, e-mail, CV, fotografie sau alt document permite Companiei să primească și să utilizeze datele respective pentru examinarea solicitării, comunicarea cu persoana și realizarea demersurilor aferente. Această transmitere nu autorizează utilizarea datelor pentru scopuri incompatibile, nelimitate sau neprevăzute în prezenta Politică.',
        },
      ],
    },
    {
      title: '8. CV-uri, materiale media și recrutare',
      blocks: [
        {
          type: 'ul',
          items: [
            'datele din CV sunt utilizate pentru evaluarea candidaturii și comunicarea cu persoana',
            'informațiile pot fi consultate de departamentele implicate în recrutare',
            'datele pot fi transmise furnizorilor de hosting, e-mail, stocare, recrutare sau suport IT, atunci când este necesar',
            'CV-ul poate fi păstrat pentru perioada stabilită în politica internă de retenție',
            'păstrarea CV-ului pentru oportunități viitoare se face separat, în baza unui temei legal corespunzător sau a consimțământului, după caz',
            'transmiterea unei fotografii în CV nu acordă Companiei dreptul de a o publica sau folosi în marketing; pentru materialele realizate la evenimente sau în producții media, persoanele sunt informate despre utilizarea preconizată, iar consimțământul este solicitat atunci când acesta reprezintă temeiul legal necesar',
          ],
        },
      ],
    },
    {
      title: '9. Comunicarea datelor către terți',
      blocks: [
        { type: 'p', text: 'Datele pot fi accesate sau comunicate, după caz, către:' },
        {
          type: 'ul',
          items: [
            'angajați și departamente autorizate, în limita atribuțiilor',
            'furnizori de hosting, e-mail, cloud, mentenanță IT, securitate și suport tehnic',
            'furnizori de servicii de recrutare, analiză, publicitate, comunicare, organizare de evenimente, producție foto-video, dezvoltare web sau administrare a rețelelor sociale',
            'consultanți, auditori, avocați și alți prestatori autorizați',
            'clienți sau parteneri, atunci când comunicarea este necesară pentru un scop contractual',
            'autorități publice, instanțe sau organe de investigare, atunci când legea o impune sau permite',
          ],
        },
        { type: 'p', text: 'Compania nu vinde datele cu caracter personal.' },
        {
          type: 'p',
          text: 'În cazul în care un furnizor prelucrează date în numele Companiei, acesta va acționa numai pe baza instrucțiunilor documentate și a obligațiilor contractuale privind confidențialitatea și securitatea.',
        },
      ],
    },
    {
      title: '10. Transferuri internaționale',
      blocks: [
        {
          type: 'p',
          text: 'Unele servicii utilizate de Companie pot presupune stocarea sau accesarea datelor din afara Republicii Moldova, inclusiv prin servicii cloud, e-mail, hosting, analiză web, publicitate, platforme de social media, aplicații de securitate, VPN sau furnizori IT.',
        },
        {
          type: 'p',
          text: 'Transferurile internaționale se efectuează numai atunci când sunt necesare pentru activitatea Companiei și în condițiile legislației aplicabile, pe baza unor garanții contractuale, tehnice și organizaționale adecvate. Lista furnizorilor și mecanismelor aplicate este gestionată în registrele interne ale Companiei.',
        },
      ],
    },
    {
      title: '11. Perioada de păstrare',
      blocks: [
        {
          type: 'p',
          text: 'Datele sunt păstrate numai atât timp cât este necesar pentru scopul colectării, executarea contractului, îndeplinirea obligațiilor legale, soluționarea litigiilor sau apărarea drepturilor Companiei.',
        },
        {
          type: 'table',
          head: ['Categorie', 'Perioadă orientativă'],
          rows: [
            ['Mesaje și solicitări', '24 de luni de la ultima comunicare'],
            ['CV-uri pentru recrutarea curentă', '12 luni, dacă nu există un motiv legal pentru o perioadă mai lungă'],
            ['CV-uri pentru oportunități viitoare', '12 luni sau perioada indicată în acordul persoanei'],
            ['Date contractuale și contabile', 'perioada prevăzută de legislația aplicabilă'],
            ['Jurnale tehnice și de securitate', 'până la 36 de luni, în funcție de necesitate și risc'],
            ['Cookie-uri', 'conform Politicii privind cookie-urile'],
            [
              'Date privind evenimentele și materialele media',
              'pe durata proiectului și ulterior conform contractului, consimțământului, interesului legitim documentat sau obligațiilor legale aplicabile',
            ],
          ],
        },
        {
          type: 'p',
          text: 'La expirarea perioadei, datele sunt șterse, anonimizate sau arhivate, conform legislației aplicabile și procedurilor interne.',
        },
      ],
    },
    {
      title: '12. Drepturile persoanelor',
      blocks: [
        { type: 'p', text: 'În condițiile legii, persoana poate solicita:' },
        {
          type: 'ul',
          items: [
            'accesul la datele sale',
            'rectificarea datelor incorecte sau incomplete',
            'ștergerea datelor, atunci când sunt îndeplinite condițiile legale',
            'restricționarea prelucrării',
            'opoziția față de anumite prelucrări',
            'portabilitatea datelor, atunci când este aplicabilă',
            'retragerea consimțământului, fără afectarea legalității prelucrărilor anterioare',
            'informații privind scopurile, temeiurile, destinatarii și perioada de păstrare',
            'contestarea unei decizii bazate exclusiv pe prelucrare automatizată, dacă este aplicabilă',
          ],
        },
        {
          type: 'p',
          text: 'Cererea poate fi transmisă la contact@parsec.md sau la sediul Companiei. Pentru protejarea datelor, Compania poate solicita informații suplimentare pentru verificarea identității solicitantului.',
        },
      ],
    },
    {
      title: '13. Securitatea datelor',
      blocks: [
        {
          type: 'p',
          text: 'Compania aplică măsuri tehnice și organizatorice rezonabile pentru protejarea datelor, inclusiv controlul accesului, conturi individuale, parole și autentificare adecvată, limitarea accesului la necesarul de serviciu, copii de siguranță, monitorizarea incidentelor, instruirea personalului și proceduri de răspuns la breșe.',
        },
        {
          type: 'p',
          text: 'Nicio metodă de transmitere sau stocare electronică nu poate fi garantată ca fiind absolut sigură. Persoanele sunt rugate să nu transmită prin e-mail sau formulare date care nu sunt necesare pentru scopul solicitării.',
        },
      ],
    },
    {
      title: '14. Instrumente automatizate și inteligență artificială',
      blocks: [
        {
          type: 'p',
          text: 'Compania poate utiliza instrumente automatizate sau soluții de inteligență artificială pentru operațiuni administrative, analiză, securitate, recrutare, suport sau îmbunătățirea serviciilor.',
        },
        {
          type: 'p',
          text: 'Datele confidențiale sau sensibile nu vor fi introduse în instrumente AI neautorizate. Instrumentele automatizate nu vor fi utilizate pentru a lua decizii cu efect juridic sau impact semnificativ asupra unei persoane fără evaluarea legalității, transparenței, proporționalității și a posibilității de intervenție umană.',
        },
      ],
    },
    {
      title: '15. Cookie-uri și tehnologii similare',
      blocks: [
        {
          type: 'p',
          text: 'Site-ul www.parsec.md utilizează cookie-uri strict necesare și poate utiliza, numai după exprimarea unei opțiuni valabile, cookie-uri analitice, inclusiv Google Analytics 4 (GA4), cookie-uri de marketing și tehnologii similare.',
        },
        {
          type: 'p',
          text: 'Cookie-urile strict necesare sunt utilizate pentru funcționarea și securitatea site-ului. Cookie-urile analitice, de marketing sau ale unor terți sunt activate numai după exprimarea unei opțiuni valabile, atunci când legea o impune. Preferințele pot fi retrase sau modificate prin mecanismul de gestionare a cookie-urilor.',
        },
      ],
    },
    {
      title: '16. Comunicări comerciale',
      blocks: [
        {
          type: 'p',
          text: 'Compania poate transmite informații comerciale, oferte sau noutăți numai în condițiile permise de legislația aplicabilă. Persoana poate renunța oricând la comunicările comerciale prin utilizarea opțiunii de dezabonare sau prin transmiterea unei solicitări la adresa de contact indicată.',
        },
      ],
    },
    {
      title: '17. Plângeri și autoritatea competentă',
      blocks: [
        {
          type: 'p',
          text: 'Dacă persoana consideră că prelucrarea datelor sale încalcă legislația, poate contacta Compania la contact@parsec.md. Persoana are, de asemenea, dreptul de a depune o plângere la Centrul Național pentru Protecția Datelor cu Caracter Personal al Republicii Moldova.',
        },
      ],
    },
    {
      title: '18. Modificarea politicii',
      blocks: [
        {
          type: 'p',
          text: 'Compania poate actualiza prezenta Politică pentru a reflecta modificări legislative, tehnice sau organizaționale. Versiunea actualizată va fi publicată pe site și va indica data modificării. În cazul unor modificări substanțiale, Compania poate utiliza mijloace suplimentare de informare, atunci când este necesar.',
        },
      ],
    },
  ],
}

const en: PolicyContent = {
  title: 'Privacy Policy',
  subtitle: 'and personal data processing',
  details: [
    { label: 'Data Controller', value: 'SCP PARSEC S.R.L.' },
    { label: 'IDNO (Company Registration Number)', value: '1016600010076' },
    {
      label: 'Headquarters',
      value: '59/B Mitropolit Gavriil Bănulescu-Bodoni St., Chișinău, MD-2005, Republic of Moldova',
    },
    { label: 'Privacy Contact', value: 'contact@parsec.md' },
    { label: 'Version / Effective Date', value: 'Version 2.0 / 06.10.2026' },
  ],
  noticeTitle: 'Important note for website users',
  notice:
    'Accessing the website does not, in itself, constitute consent for any type of processing and does not grant the Company a general or unlimited right over the data. Each processing activity must have a specific, explicit, and legitimate purpose, an appropriate legal basis, and be limited to the necessary data.',
  sections: [
    {
      title: '1. Purpose and scope',
      blocks: [
        {
          type: 'p',
          text: 'This Policy explains how SCP PARSEC S.R.L. (the "Company", "we") collects, uses, stores, transmits, and protects personal data through the website www.parsec.md, electronic forms, email addresses, social media, event registration forms, and other digital channels managed by the Company. This Policy is prepared in accordance with Law No. 195/2024 on Personal Data Protection and other applicable laws of the Republic of Moldova.',
        },
        {
          type: 'p',
          text: 'The Policy applies to website visitors, persons contacting us, candidates, clients, potential clients, suppliers, partners, and their representatives, insofar as their data is collected or transmitted to the Company.',
        },
        {
          type: 'p',
          text: 'This Policy is an information notice regarding data processing. It does not transform website access into general consent and does not replace the distinct agreements that may be necessary for certain optional processing activities.',
        },
        { type: 'h3', text: '1.1. Distinction from internal notices and regulations' },
        {
          type: 'p',
          text: 'This Policy primarily refers to data collected through the website, forms, emails, and other public or digital channels associated with the website. Processing carried out within employment relationships — including access monitoring, CCTV, facial recognition, employee call recording, performance evaluation, medical and occupational safety and health (OSH) data — is additionally governed by separate internal notices and documents, communicated to the data subjects according to their category.',
        },
        {
          type: 'p',
          text: "Technical details regarding the security architecture, system configurations, internal access rules, and audit logs are not published in full to avoid creating additional security risks. These are managed through the Company's internal regulations and registers.",
        },
      ],
    },
    {
      title: '2. Data Controller',
      blocks: [
        {
          type: 'p',
          text: 'In relation to the data collected through the website and the channels managed by the Company, SCP PARSEC S.R.L. generally acts as a data controller, as it determines the purposes and means of the processing.',
        },
        {
          type: 'p',
          text: 'In certain situations, the Company may process data as a data processor, based on the instructions of a client or contractual partner. In such cases, the processing may also be governed by the notices or policies of that respective controller.',
        },
      ],
    },
    {
      title: '3. Categories of data subjects',
      blocks: [
        {
          type: 'ul',
          items: [
            'website visitors and users',
            'persons submitting messages, requests, or complaints',
            'candidates and persons submitting CVs',
            'clients, potential clients, suppliers, and partners',
            'representatives, employees, or contact persons of certain organizations',
            'persons subscribing to communications, as well as participants, guests, speakers, collaborators, and media representatives involved in events',
            'persons whose data is included in documents, photographs, audio-video recordings, or other materials submitted or created as part of projects',
          ],
        },
      ],
    },
    {
      title: '4. Data we may process',
      blocks: [
        {
          type: 'ul',
          items: [
            'first and last name',
            'email address, phone number, and other contact details',
            'company, job title, experience, and other professional data',
            'content of the message, request, or complaint',
            'data included in the CV, including a voluntarily submitted photograph, as well as image, voice, photographs, audio-video recordings, or testimonials supplied or created as part of projects and events',
            'data regarding contracts, services, projects, event participation, communications, and commercial relationships',
            'IP address, device, browser, and session identifiers',
            'data regarding access to and use of the website, registration forms, campaign pages, and digital platforms managed by the Company',
            'technical data regarding website security, performance, and operation',
            'data collected through cookies or similar technologies, according to the dedicated section',
          ],
        },
        {
          type: 'p',
          text: 'We do not request the submission of sensitive data unless strictly necessary, there is a legal basis, and they are used in accordance with applicable legislation. Individuals are kindly requested not to submit through forms or email any medical data, banking data, data about criminal convictions, or other sensitive information that is not explicitly requested.',
        },
        {
          type: 'p',
          text: 'For projects involving minors, personal data and image use are processed only after appropriate information has been provided and, where required by law, with the consent of a parent or legal representative or on another applicable legal basis.',
        },
        { type: 'h3', text: '4.1. Source of data' },
        {
          type: 'p',
          text: 'Data is generally collected directly from the data subject when they fill out a form, send an email, a CV, a document, or interact with the website. To the extent permitted by law, data may also originate from representatives of an organization, clients, partners, suppliers, professional platforms, public sources, or authorized service providers.',
        },
        {
          type: 'p',
          text: 'When data is not collected directly from the data subject, the Company will provide the necessary information under the conditions and within the timeframe provided by law, except in situations where a legal exception applies.',
        },
      ],
    },
    {
      title: '5. Purposes of processing',
      blocks: [
        {
          type: 'p',
          text: 'Depending on the actual activity, the channel used, and the relationship with the person, data may be processed for the following purposes:',
        },
        {
          type: 'ul',
          items: [
            'operation, administration, maintenance, and security of the website',
            'identifying and fixing technical errors',
            'preventing cyber-attacks, fraud, abuse, and unauthorized access',
            'responding to requests, messages, complaints, and inquiries',
            'communicating with clients, potential clients, suppliers, partners, and their representatives',
            'preparing, concluding, and executing contracts',
            'providing services and managing commercial relationships',
            'providing communication and public relations, marketing, event management, media production, graphic design, web development, HR services, and strategic consulting',
            'managing client projects, campaigns, and data relating to participants, guests, speakers, suppliers, and partners involved in events or media productions',
            'recruiting and evaluating candidates',
            'verifying CVs, experience, and qualifications',
            'communicating with candidates and organizing interviews',
            'retaining CVs for future professional opportunities, in accordance with the law',
            'managing employment relationships, training, and performance evaluation',
            'calculating and paying salaries, bonuses, and other rights',
            'fulfilling tax, accounting, social security, and labor record-keeping obligations',
            'preventing and investigating fraud, disciplinary offenses, information theft, and unauthorized data use',
            'controlling access to the premises and securing persons, property, and information',
            'using CCTV systems, where installed, solely to secure the premises, persons, and property, with appropriate notice',
            "monitoring the use of the Company's IT systems, networks, accounts, devices, and applications",
            'documenting project communications, approvals, and feedback for traceability, coordination, and quality assurance',
            'managing incidents, security breaches, and emergency situations',
            'ensuring occupational health and safety',
            'managing medical data strictly to the extent permitted by law and necessary for fulfilling employer obligations',
            'managing internal reports and whistleblowing reports',
            "establishing, exercising, and defending the Company's rights in disputes, investigations, or administrative procedures",
            'fulfilling requests from public authorities and legal obligations',
            'conducting internal and external audits',
            'managing relationships with suppliers, processors, and service providers',
            'using email, cloud, hosting, VPN, software, security, and IT support services',
            'storing, archiving, recovering, and in a controlled manner destroying data',
            'ensuring business continuity and disaster recovery',
            "making international data transfers when necessary for the Company's activity",
            'communicating commercial information, offers, and marketing materials, under the law',
            'managing subscriptions and unsubscriptions from communications',
            'conducting statistical and performance analyses',
            'improving services, processes, and user experience',
            'testing and developing new products, services, applications, or processes',
            'using automated tools and artificial intelligence solutions, in compliance with transparency, security, and human oversight requirements',
            'organizing events, training, and representation activities',
            'creating and publishing photographs, audio-video recordings, testimonials, and communication materials relating to projects or events, only on an appropriate legal basis',
            'fulfilling corporate governance, risk management, and compliance requirements',
            'evaluating corporate transactions, reorganizations, mergers, acquisitions, or due diligence processes',
            'using cookies and similar technologies, according to the Cookie Policy',
            'protecting the rights, property, reputation, and legitimate interests of the Company',
            'any other purpose permitted by law, provided it is specific, explicit, legitimate, and communicated to the individual prior to processing',
          ],
        },
        {
          type: 'p',
          text: 'The list above is a list of possible purposes, not an automatic authorization to use all data for all purposes. The Company will activate and use only those processing activities that are actually necessary for the business and documented in its internal registers and procedures.',
        },
        { type: 'h3', text: '5.1. Purposes and legal bases depending on the category of the person' },
        { type: 'h3', text: 'a) If you are a website visitor' },
        {
          type: 'p',
          text: 'We may process technical data, such as IP address, session identifiers, and browser data, for operation, security, and abuse prevention. The legal basis can be technical necessity and/or the legitimate interest of the Company. Refusing non-essential cookies does not prevent access to the core content of the website.',
        },
        {
          type: 'p',
          text: 'If you send us a question, report, or complaint, we use the data to identify your request, communicate with you, and formulate a response. Providing the necessary data is voluntary, but failing to do so may make it impossible to respond or resolve the request.',
        },
        { type: 'h3', text: 'b) If you are a client, potential client, or representative of an organization' },
        {
          type: 'p',
          text: "Data may be processed to initiate, negotiate, and execute the contractual relationship, provide services, manage communications, invoicing, support, security, and defend the Company's rights. The legal basis is, as applicable, the contract, a legal obligation, or legitimate interest. Providing the necessary data may be a condition for concluding or executing the contract.",
        },
        { type: 'h3', text: 'c) If you are a candidate' },
        {
          type: 'p',
          text: 'The data from the CV, message, and recruitment communications are processed to evaluate the application, verify professional information, organize interviews, and communicate the result. The legal basis may be taking steps prior to entering into a contract, legitimate interest, or consent, as the case may be. Failure to provide necessary data may prevent the evaluation of the application.',
        },
        {
          type: 'p',
          text: 'Retaining the CV for future opportunities is a separate and optional processing activity. Refusing it does not affect the current application.',
        },
        { type: 'h3', text: 'd) If you subscribe to commercial communications' },
        {
          type: 'p',
          text: 'Contact data may be used to send commercial information only in accordance with the law and, where applicable, based on consent. Providing data for this purpose is voluntary and you can opt out of communications at any time.',
        },
        { type: 'h3', text: 'e) If you are a supplier, service provider, or partner' },
        {
          type: 'p',
          text: 'Data may be processed for supplier selection and evaluation, contract management, payments, communications, audit, security, and compliance with legal obligations. The legal basis may be the contract, a legal obligation, or the legitimate interest of the Company.',
        },
        { type: 'h3', text: 'f) If you participate in an event, media project, or campaign' },
        {
          type: 'p',
          text: 'We may process contact and participation data, your image, voice, and materials in which you appear in order to organize and deliver the activity, communicate with participants, document the project, and publish materials, as applicable. The legal basis may be a contract, a legal obligation, legitimate interest, or consent, depending on the context and the specific use.',
        },
      ],
    },
    {
      title: '6. Legal bases for processing',
      blocks: [
        { type: 'p', text: 'Depending on the situation, processing may be based on:' },
        {
          type: 'ul',
          items: [
            'execution or preparation for the execution of a contract',
            'compliance with a legal obligation',
            'the legitimate interest of the Company, following an assessment of necessity and proportionality',
            'the consent of the individual, when required',
            'the establishment, exercise, or defense of legal claims before authorities or courts',
            'protecting the life, physical integrity, or security of persons or property, in situations permitted by law',
          ],
        },
        {
          type: 'p',
          text: 'The Company will not use consent as a legal basis when the processing can be legally carried out based on the execution of a contract, a legal obligation, or a documented legitimate interest.',
        },
      ],
    },
    {
      title: '7. Website access and voluntary data submission',
      blocks: [
        {
          type: 'p',
          text: 'Accessing the website does not constitute consent for any type of processing and does not grant the Company the right to use the data for unlimited purposes. By browsing the website, technical data strictly necessary for its operation and security may be processed.',
        },
        {
          type: 'p',
          text: 'The voluntary submission of a message, email, CV, photograph, or other document allows the Company to receive and use that data to review the request, communicate with the person, and carry out related steps. This submission does not authorize the use of the data for incompatible, unlimited, or unforeseen purposes in this Policy.',
        },
      ],
    },
    {
      title: '8. CVs, media materials, and recruitment',
      blocks: [
        {
          type: 'ul',
          items: [
            'CV data is used to evaluate the application and communicate with the person',
            'information may be consulted by departments involved in recruitment',
            'data may be transmitted to hosting, email, storage, recruitment, or IT support providers, when necessary',
            'the CV may be kept for the period established in the internal retention policy',
            'retaining the CV for future opportunities is done separately, based on an appropriate legal basis or consent, as applicable',
            'submitting a photograph in a CV does not grant the Company the right to publish or use it for marketing; for materials created at events or in media productions, individuals are informed of the intended use, and consent is requested where it is the required legal basis',
          ],
        },
      ],
    },
    {
      title: '9. Disclosure of data to third parties',
      blocks: [
        { type: 'p', text: 'Data may be accessed or disclosed, as appropriate, to:' },
        {
          type: 'ul',
          items: [
            'authorized employees and departments, within the limits of their duties',
            'hosting, email, cloud, IT maintenance, security, and technical support providers',
            'recruitment, analytics, advertising, communication, event management, photo-video production, web development, or social media management service providers',
            'consultants, auditors, lawyers, and other authorized service providers',
            'clients or partners, when disclosure is necessary for a contractual purpose',
            'public authorities, courts, or investigative bodies, when required or permitted by law',
          ],
        },
        { type: 'p', text: 'The Company does not sell personal data.' },
        {
          type: 'p',
          text: 'If a supplier processes data on behalf of the Company, they will act only based on documented instructions and contractual obligations regarding confidentiality and security.',
        },
      ],
    },
    {
      title: '10. International transfers',
      blocks: [
        {
          type: 'p',
          text: 'Some services used by the Company may involve storing or accessing data outside the Republic of Moldova, including through cloud services, email, hosting, web analytics, advertising, social media platforms, security applications, VPNs, or IT providers.',
        },
        {
          type: 'p',
          text: "International transfers are carried out only when necessary for the Company's activity and in compliance with applicable legislation, based on adequate contractual, technical, and organizational safeguards. The list of providers and applied mechanisms is managed in the Company's internal registers.",
        },
      ],
    },
    {
      title: '11. Retention period',
      blocks: [
        {
          type: 'p',
          text: "Data is kept only as long as necessary for the purpose of collection, contract execution, compliance with legal obligations, dispute resolution, or defending the Company's rights.",
        },
        {
          type: 'table',
          head: ['Category', 'Indicative period'],
          rows: [
            ['Messages and requests', '24 months from the last communication'],
            ['CVs for current recruitment', '12 months, unless there is a legal reason for a longer period'],
            ['CVs for future opportunities', "12 months or the period indicated in the person's agreement"],
            ['Contractual and accounting data', 'the period provided by applicable legislation'],
            ['Technical and security logs', 'up to 36 months, depending on necessity and risk'],
            ['Cookies', 'according to the Cookie Policy'],
            [
              'Event data and media materials',
              'for the duration of the project and thereafter in accordance with the contract, consent, documented legitimate interest, or applicable legal obligations',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Upon expiration of the period, data is deleted, anonymized, or archived, according to applicable legislation and internal procedures.',
        },
      ],
    },
    {
      title: "12. Data subjects' rights",
      blocks: [
        { type: 'p', text: 'Under the law, the individual may request:' },
        {
          type: 'ul',
          items: [
            'access to their data',
            'rectification of incorrect or incomplete data',
            'erasure of data, when legal conditions are met',
            'restriction of processing',
            'objection to certain processing activities',
            'data portability, when applicable',
            'withdrawal of consent, without affecting the lawfulness of prior processing',
            'information regarding purposes, legal bases, recipients, and retention period',
            'to challenge a decision based solely on automated processing, if applicable',
          ],
        },
        {
          type: 'p',
          text: "The request can be submitted to contact@parsec.md or at the Company's headquarters. To protect data, the Company may request additional information to verify the applicant's identity.",
        },
      ],
    },
    {
      title: '13. Data security',
      blocks: [
        {
          type: 'p',
          text: 'The Company applies reasonable technical and organizational measures to protect data, including access control, individual accounts, passwords and appropriate authentication, limiting access to what is strictly necessary, backups, incident monitoring, staff training, and breach response procedures.',
        },
        {
          type: 'p',
          text: 'No method of electronic transmission or storage can be guaranteed to be absolutely secure. Individuals are kindly requested not to send via email or forms data that is not necessary for the purpose of the request.',
        },
      ],
    },
    {
      title: '14. Automated tools and artificial intelligence',
      blocks: [
        {
          type: 'p',
          text: 'The Company may use automated tools or artificial intelligence solutions for administrative operations, analysis, security, recruitment, support, or service improvement.',
        },
        {
          type: 'p',
          text: 'Confidential or sensitive data will not be inputted into unauthorized AI tools. Automated tools will not be used to make decisions with legal effects or significant impact on a person without assessing the legality, transparency, proportionality, and the possibility of human intervention.',
        },
      ],
    },
    {
      title: '15. Cookies and similar technologies',
      blocks: [
        {
          type: 'p',
          text: 'The website www.parsec.md uses strictly necessary cookies and may use analytics cookies, including Google Analytics 4 (GA4), marketing cookies, and similar technologies only after a valid choice has been made.',
        },
        {
          type: 'p',
          text: 'Strictly necessary cookies are used for the operation and security of the website. Analytics, marketing, or third-party cookies are activated only after a valid choice, where required by law. Preferences may be withdrawn or changed through the cookie management mechanism.',
        },
      ],
    },
    {
      title: '16. Commercial communications',
      blocks: [
        {
          type: 'p',
          text: 'The Company may send commercial information, offers, or news only under the conditions permitted by applicable legislation. The individual can opt out of commercial communications at any time by using the unsubscribe option or by sending a request to the indicated contact address.',
        },
      ],
    },
    {
      title: '17. Complaints and competent authority',
      blocks: [
        {
          type: 'p',
          text: 'If the individual believes that the processing of their data violates the legislation, they can contact the Company at contact@parsec.md. The individual also has the right to file a complaint with the National Center for Personal Data Protection of the Republic of Moldova.',
        },
      ],
    },
    {
      title: '18. Policy modification',
      blocks: [
        {
          type: 'p',
          text: 'The Company may update this Policy to reflect legislative, technical, or organizational changes. The updated version will be published on the website and will indicate the date of the modification. In case of substantial changes, the Company may use additional means of information when necessary.',
        },
      ],
    },
  ],
}

export const privacyPolicy: Record<PolicyLang, PolicyContent> = { ro, en }
