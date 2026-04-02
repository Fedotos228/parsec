import Footer from '@/components/layout/footer'
import Menu from '@/components/layout/menu'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate',
  description: 'Politica de confidențialitate și protecția datelor cu caracter personal a companiei Parsec, conformă cu legislația Republicii Moldova.',
  openGraph: {
    title: 'Politica de Confidențialitate | Parsec',
    description: 'Politica de confidențialitate Parsec — protecția datelor conform Legii nr. 133/2011.',
    url: 'https://parsec.md/privacy-policy',
  },
  alternates: {
    canonical: 'https://parsec.md/privacy-policy',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="relative">
      <header className="absolute top-0 w-full p-8 z-40">
        <Menu />
      </header>

      <main className="pt-40 pb-24 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Politica de Confidențialitate
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Ultima actualizare: 2 aprilie 2026
        </p>

        <Section title="1. Introducere">
          <p>
            Compania <strong>SCP Parsec SRL</strong> (denumită în continuare „Parsec", „noi", „ne" sau „nostru"),
            cu sediul în Republica Moldova, prelucrează datele cu caracter personal în conformitate cu
            prevederile <strong>Legii nr. 133 din 08 iulie 2011 privind protecția datelor cu caracter
            personal</strong> și ale altor acte normative aplicabile din Republica Moldova.
          </p>
          <p className="mt-3">
            Prezenta Politică de Confidențialitate descrie modul în care colectăm, utilizăm, stocăm
            și protejăm datele dumneavoastră cu caracter personal atunci când utilizați site-ul nostru{' '}
            <strong>parsec.md</strong> sau când interacționați cu noi în orice alt mod.
          </p>
          <p className="mt-3">
            Prin utilizarea site-ului nostru, confirmați că ați citit și înțeles prezenta politică.
          </p>
        </Section>

        <Section title="2. Operatorul de Date">
          <p>
            Operatorul datelor cu caracter personal este:
          </p>
          <ul className="mt-3 space-y-1 list-none">
            <li><strong>Denumire:</strong> Parsec</li>
            <li><strong>Sediu:</strong> mun. Chişinău, sec. Rîşcani, str. Mitropolit Gavriil Bănulescu-Bodoni, 59/B</li>
            <li><strong>Site web:</strong> parsec.md</li>
            <li><strong>E-mail de contact:</strong> contact@parsec.md</li>
          </ul>
          <p className="mt-3">
            Parsec este înregistrată ca operator de date cu caracter personal la{' '}
            <strong>Centrul Național pentru Protecția Datelor cu Caracter Personal</strong> al
            Republicii Moldova (CNPDCP), în conformitate cu art. 22 al Legii nr. 133/2011.
          </p>
        </Section>

        <Section title="3. Datele Colectate">
          <p>Putem colecta și prelucra următoarele categorii de date cu caracter personal:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>
              <strong>Date de identificare:</strong> nume, prenume, funcție/titlu profesional.
            </li>
            <li>
              <strong>Date de contact:</strong> adresă de e-mail, număr de telefon, adresă poștală.
            </li>
            <li>
              <strong>Date tehnice:</strong> adresă IP, tip browser, sistem de operare, pagini vizitate,
              durata sesiunii și alte date de navigare colectate automat prin cookies sau tehnologii similare.
            </li>
            <li>
              <strong>Date de comunicare:</strong> mesajele și solicitările transmise prin formularul de
              contact sau prin e-mail.
            </li>
            <li>
              <strong>Date profesionale:</strong> informații despre compania sau organizația pe care o
              reprezentați, în contextul unor relații de afaceri.
            </li>
          </ul>
          <p className="mt-3">
            Nu colectăm date cu caracter special (date privind sănătatea, originea rasială sau etnică,
            convingerile politice sau religioase, datele biometrice etc.) prin intermediul acestui site.
          </p>
        </Section>

        <Section title="4. Scopurile și Temeiurile Prelucrării">
          <p>Prelucrăm datele dumneavoastră în următoarele scopuri și în baza următoarelor temeiuri legale
          prevăzute de Legea nr. 133/2011:</p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-semibold">a) Furnizarea serviciilor solicitate</p>
              <p className="text-white/40 text-sm mt-1">
                Temeiul legal: executarea unui contract sau luarea de măsuri la cererea persoanei vizate
                înainte de încheierea unui contract (art. 5 alin. (1) lit. b)).
              </p>
            </div>
            <div>
              <p className="font-semibold">b) Răspunsul la solicitări și comunicare</p>
              <p className="text-white/40 text-sm mt-1">
                Atunci când completați formularul de contact și descrieți un proiect sau o solicitare,
                utilizăm datele furnizate pentru a vă răspunde și pentru a vă transmite o ofertă
                comercială sau o propunere de colaborare aferentă solicitării dumneavoastră.
                Aceasta include trimiterea ulterioară, prin e-mail, a unei oferte financiare sau a
                unor detalii privind serviciile Parsec relevante pentru proiectul descris.
              </p>
              <p className="text-white/40 text-sm mt-1">
                Temeiul legal: interesul legitim al operatorului (art. 5 alin. (1) lit. f)) —
                persoana vizată a inițiat în mod voluntar contactul în scopul obținerii de servicii,
                creând astfel o așteptare rezonabilă privind primirea unui răspuns comercial.
                Aveți dreptul de a vă opune acestei prelucrări în orice moment, conform art. 21,
                prin trimiterea unui e-mail la <strong>contact@parsec.md</strong> sau prin accesarea
                linkului de dezabonare din orice comunicare comercială primită.
              </p>
            </div>
            <div>
              <p className="font-semibold">c) Îmbunătățirea site-ului și a serviciilor noastre</p>
              <p className="text-white/40 text-sm mt-1">
                Temeiul legal: interesul legitim al operatorului (art. 5 alin. (1) lit. f)).
              </p>
            </div>
            <div>
              <p className="font-semibold">d) Conformarea cu obligațiile legale</p>
              <p className="text-white/40 text-sm mt-1">
                Temeiul legal: obligație legală aplicabilă operatorului (art. 5 alin. (1) lit. c)).
              </p>
            </div>
            <div>
              <p className="font-semibold">e) Marketing și comunicări comerciale generale</p>
              <p className="text-white/40 text-sm mt-1">
                Pentru comunicări comerciale care nu au legătură directă cu o solicitare anterioară
                a dumneavoastră (ex. newsletter, campanii promoționale generale), temeiul legal este
                consimțământul explicit al persoanei vizate (art. 5 alin. (1) lit. a)).
                Vă puteți retrage oricând consimțământul prin trimiterea unui e-mail la contact@parsec.md
                sau prin accesarea linkului de dezabonare din mesajul primit.
              </p>
            </div>
          </div>
        </Section>

        <Section title="5. Cookies și Tehnologii de Urmărire">
          <p>
            Site-ul nostru utilizează cookies și tehnologii similare pentru a asigura funcționalitatea
            site-ului și a analiza traficul. La prima vizită, vi se afișează un banner de consimțământ
            prin care puteți accepta sau refuza cookies analitice.
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <p className="font-semibold">a) Cookies esențiale</p>
              <p className="text-white/60 text-sm mt-1">
                Necesare pentru funcționarea corectă a site-ului (ex. reținerea preferinței de
                consimțământ). Nu pot fi dezactivate și nu necesită consimțământul dumneavoastră.
              </p>
            </div>
            <div>
              <p className="font-semibold">b) Cookies analitice — Google Analytics (GA4)</p>
              <p className="text-white/60 text-sm mt-1">
                Utilizăm <strong>Google Analytics 4</strong> (furnizat de Google LLC, SUA) pentru a
                înțelege cum este utilizat site-ul: pagini vizitate, durată sesiune, sursă de trafic.
                Aceste cookies sunt activate <strong>exclusiv după acordarea consimțământului</strong>{' '}
                prin bannerul afișat la prima vizită.
              </p>
              <p className="text-white/60 text-sm mt-1">
                Implementăm <strong>Google Consent Mode v2</strong>: scriptul Google Analytics se
                încarcă pe toate paginile, însă în mod implicit nu colectează nicio dată. Colectarea
                începe doar în momentul în care apăsați „Acceptă" în bannerul de cookies. Dacă refuzați,
                nu se transmit date către Google.
              </p>
              <p className="text-white/60 text-sm mt-1">
                Durata de păstrare a datelor în Google Analytics: <strong>maximum 26 de luni</strong>.
                Pentru informații despre politica de confidențialitate Google, consultați{' '}
                <span className="underline">policies.google.com/privacy</span>.
              </p>
            </div>
          </div>

          <p className="mt-4">
            Vă puteți retrage consimțământul oricând ștergând datele din localStorage al browserului
            sau folosind opțiunea de ștergere a cookies din setările browserului dumneavoastră.
            De asemenea, puteți instala extensia{' '}
            <span className="underline">Google Analytics Opt-out Browser Add-on</span> pentru a bloca
            colectarea datelor de către Google Analytics indiferent de consimțământ.
          </p>
        </Section>

        <Section title="6. Partajarea Datelor cu Terți">
          <p>
            Nu vindem, nu închiriem și nu comercializăm datele dumneavoastră cu caracter personal.
            Putem transmite date către terți exclusiv în următoarele situații:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>
              <strong>Furnizori de servicii:</strong> parteneri contractuali care ne asistă în operarea
              site-ului și furnizarea serviciilor (ex. servicii de hosting, analiză web), în baza unor
              contracte care garantează protecția datelor.
            </li>
            <li>
              <strong>Obligații legale:</strong> atunci când suntem obligați prin lege sau la solicitarea
              autorităților competente din Republica Moldova.
            </li>
            <li>
              <strong>Transferuri de afaceri:</strong> în caz de fuziune, achiziție sau reorganizare a
              companiei, cu notificarea prealabilă a persoanelor vizate.
            </li>
          </ul>
          <p className="mt-3">
            Orice transfer de date în afara Republicii Moldova se realizează cu respectarea prevederilor
            art. 29–31 din Legea nr. 133/2011, numai către țări sau organizații care asigură un nivel
            adecvat de protecție a datelor.
          </p>
        </Section>

        <Section title="7. Durata Păstrării Datelor">
          <p>
            Păstrăm datele dumneavoastră cu caracter personal atât timp cât este necesar pentru
            îndeplinirea scopurilor descrise în prezenta politică sau conform cerințelor legale aplicabile:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Datele din formularele de contact: maximum <strong>2 ani</strong> de la ultima interacțiune.</li>
            <li>Datele contractuale: <strong>5 ani</strong> de la expirarea contractului, conform
            legislației fiscale și contabile din Republica Moldova.</li>
            <li>Datele de navigare (cookies analitice): conform politicii furnizorului instrumentului
            de analiză, de regulă <strong>maximum 26 de luni</strong>.</li>
          </ul>
          <p className="mt-3">
            La expirarea termenului de păstrare, datele sunt șterse sau anonimizate în mod securizat.
          </p>
        </Section>

        <Section title="8. Drepturile Persoanelor Vizate">
          <p>
            În conformitate cu Legea nr. 133/2011, aveți următoarele drepturi cu privire la datele
            dumneavoastră cu caracter personal:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li><strong>Dreptul de acces (art. 18):</strong> puteți solicita o copie a datelor pe care
            le deținem despre dumneavoastră.</li>
            <li><strong>Dreptul la rectificare (art. 19):</strong> puteți solicita corectarea datelor
            inexacte sau incomplete.</li>
            <li><strong>Dreptul la ștergere (art. 20):</strong> puteți solicita ștergerea datelor în
            condițiile prevăzute de lege.</li>
            <li><strong>Dreptul la restricționarea prelucrării (art. 20¹):</strong> puteți solicita
            limitarea prelucrării datelor în anumite circumstanțe.</li>
            <li><strong>Dreptul la portabilitate:</strong> puteți solicita transmiterea datelor furnizate
            către dumneavoastră sau către un alt operator, într-un format structurat și lizibil automat.</li>
            <li><strong>Dreptul de opoziție (art. 21):</strong> puteți vă opune prelucrării datelor în
            scop de marketing direct sau în baza interesului legitim.</li>
            <li><strong>Dreptul de a nu face obiectul unei decizii automate:</strong> dreptul de a nu
            fi supus unei decizii bazate exclusiv pe prelucrare automată.</li>
          </ul>
          <p className="mt-3">
            Pentru exercitarea acestor drepturi, ne puteți contacta la:{' '}
            <strong>contact@parsec.md</strong>. Vom răspunde solicitării dumneavoastră în termen de{' '}
            <strong>30 de zile</strong> calendaristice, conform art. 18 alin. (4) din Legea nr. 133/2011.
          </p>
        </Section>

        <Section title="9. Securitatea Datelor">
          <p>
            Parsec implementează măsuri tehnice și organizatorice adecvate pentru protejarea datelor
            cu caracter personal împotriva accesului neautorizat, pierderii, distrugerii sau divulgării,
            în conformitate cu art. 23 din Legea nr. 133/2011. Aceste măsuri includ:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Transmiterea datelor prin protocol securizat HTTPS/SSL.</li>
            <li>Acces restricționat la date pe baza principiului necesității (need-to-know).</li>
            <li>Instruirea periodică a personalului cu atribuții în prelucrarea datelor.</li>
            <li>Acorduri de confidențialitate cu partenerii și furnizorii de servicii.</li>
          </ul>
          <p className="mt-3">
            În cazul unui incident de securitate care afectează datele dumneavoastră, vă vom notifica
            în conformitate cu prevederile legale aplicabile.
          </p>
        </Section>

        <Section title="10. Autoritatea de Supraveghere">
          <p>
            Aveți dreptul de a depune o plângere la autoritatea de supraveghere competentă din
            Republica Moldova:
          </p>
          <ul className="mt-3 space-y-1 list-none">
            <li>
              <strong>Centrul Național pentru Protecția Datelor cu Caracter Personal (CNPDCP)</strong>
            </li>
            <li>Adresă: bd. Ștefan cel Mare și Sfânt nr. 124, etaj 3, MD-2012, Chișinău</li>
            <li>Telefon: +373 22 820 801</li>
            <li>E-mail: centru@datepersonale.md</li>
            <li>Web: <span className="underline">www.datepersonale.md</span></li>
          </ul>
        </Section>

        <Section title="11. Modificări ale Politicii">
          <p>
            Ne rezervăm dreptul de a modifica prezenta Politică de Confidențialitate în orice moment,
            pentru a reflecta schimbări legislative, tehnice sau operaționale. Versiunea actualizată
            va fi publicată pe site cu indicarea datei ultimei modificări. Vă recomandăm să verificați
            periodic această pagină.
          </p>
          <p className="mt-3">
            Continuarea utilizării site-ului după publicarea modificărilor constituie acceptarea
            noii politici.
          </p>
        </Section>

        <Section title="12. Contact">
          <p>
            Pentru orice întrebări, solicitări sau reclamații legate de prelucrarea datelor
            dumneavoastră cu caracter personal, ne puteți contacta:
          </p>
          <ul className="mt-3 space-y-1 list-none">
            <li><strong>E-mail:</strong> contact@parsec.md</li>
            <li><strong>Site web:</strong> parsec.md</li>
            <li><strong>Republica Moldova</strong></li>
          </ul>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b border-gray-200 pb-2">
        {title}
      </h2>
      <div className="text-white leading-relaxed text-base">{children}</div>
    </section>
  )
}
