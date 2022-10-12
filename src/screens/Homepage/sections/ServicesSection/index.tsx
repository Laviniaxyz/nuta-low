import React, { useContext, useEffect, useState } from 'react';
import { Components } from './styled';
import ServiceCard from './ServiceCard';
import DetailsModal from './DetailsModal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { SiteLanguageContext } from '../../../../providers/siteLanguage/context'; // requires a loader

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require('../../../../assets/lawyer-image-small-height.png');
export type IconType = 'commercial' | 'work' | 'migration' | 'ensurance' | 'real-estate' | 'gdpr' | 'money' | 'civil';

const ServicesSection = () => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const { isRo } = useContext(SiteLanguageContext);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const toggleModal = (icon: IconType) => {
    setOpen(!open);
    getTitleAndDetails(icon);
  };

  const setTitleAndDetails = (title: string, details: string) => {
    setTitle(title);
    setDetails(details);
  };

  const getTitleAndDetails = (type: IconType): void => {
    let title = '';
    let details = '';
    switch (type) {
      case 'commercial':
        title = isRo ? 'Drept comercial & societar' : 'Corporate law';
        details = isRo
          ? 'înființarea unei societăți - redactarea tuturor înscrisurilor necesare constituirii unei persoane juridice (Act constitutiv, declaratii, contracte privind sediul), precum și parcurgerea în numele clientului a procedurii in fata Registrului Comerțului\n' +
            'stabilirea sediului social al societății la sediul avocatului pe o perioada limitata de 1 an\n' +
            'înregistrarea oricăror modificări corporative ale unei societăți (schimbare sediu, modificare obiect de activitate, cesiune parti sociale, schimbare administrator, înființarea/desființare punct de lucru, modificare capital, etc.)\n' +
            'asistare și reprezentare în cadrul procedurii de lichidare voluntara\n' +
            'redactarea de decizii ale asociatului unic sau de hotărâri ale adunării generale a asociaţilor, în conformitate cu voinţa acestora \n' +
            'redactare și revizuire de contracte comerciale\n' +
            'negocieri comerciale\n' +
            'due diligence\n' +
            'notificari / răspunsuri la notificări către instituții publice și parteneri comerciali\n' +
            'conformitate legala\n' +
            'litigii pentru recuperare datoriilor ori alte probleme de natura comerciala'
          : 'Establishing a company - drafting up all the necessary documents for the establishment of a legal entity (Deed of incorporation, declarations, contracts for the headquarter) as well as completing the procedure before the Trade Registry on behalf of the client.\n' +
            "establishment of the headquarter of the company at the lawyer's headquarters for a limited period of 1 year\n" +
            'the registration of any corporate changes of a company (change of headquarters, change of object of activity, transfer of social shares, change of administrator, establishment/dissolution of work point, change of the company’s capital, etc.)\n' +
            'assisting and representing in the voluntary liquidation procedure\n' +
            'Drafting decisions of the sole associate or decisions of the general assembly of associates, in accordance with their will \n' +
            'drafting and revision of commercial contracts\n' +
            'trade negotiations\n' +
            'due diligence\n' +
            'Notifications / responses to notifications to public institutions and commercial partners\n' +
            'legal compliance\n' +
            'Litigation for debt recovery or other commercial issues';
        break;
      case 'work':
        title = isRo ? 'Dreptul muncii' : 'Labor law';
        details = isRo
          ? 'negocierea, redactarea și revizuirea contractului individual de muncă și a fișei de post\n' +
            'elaborarea unor clauze contractuale specifice, ca parte integrantă a contractului individual de munca, in vederea protejarii intereselor clientului (clauza de neconcurenta, clauza de confidentialitate, clauza de mobilitate, clauza cu privire la formarea profesională etc.)\n' +
            'redactare și revizuire Regulament Intern și alte proceduri interne privitoare la organizarea și disciplina muncii\n' +
            'încetarea contractului individual de munca (demisie, concedierea, acordul părților)\n' +
            'asistența și negocierea în vederea obținerii unor pachete compensatorii la încetarea raporturilor de munca\n' +
            'medierea în vederea stingerii conflictelor individuale de munca\n' +
            'asistare în procedura cercetării disciplinare\n' +
            'negocieri colective, redactarea și încheierea contractului colectiv de munca\n' +
            'contestarea deciziilor de concediere și a altor acte unilaterale ale angajatorului\n' +
            'litigii privind drepturile salariale restante, hartuirea la locul de muncă sau alte aspecte legate de relațiile dintre angajat și angajator\n' +
            'asistarea și reprezentarea în fata autorităților competente cu rol de verificare a îndeplinirii obligatiilor prevazute in legislația muncii\n' +
            'conformitatea cu dispozițiile legale în vigoare'
          : 'negotiation, drafting and revision of the individual employment contract and the job description\n' +
            "drafting specific contractual clauses, as part of the individual employment contract, in order to protect the client's interests (non-competition clause, confidentiality clause, mobility clause, clause regarding professional training, etc.)\n" +
            'drafting and revision of Internal Regulations and other internal procedures regarding the organization and discipline of work\n' +
            'termination of the individual employment contract (resignation, dismissal, agreement of the parties)\n' +
            'assistance and negotiation in order to obtain compensation upon termination of employment\n' +
            'mediation in order to settle individual labor conflicts\n' +
            'assistance in the disciplinary investigation procedure\n' +
            'collective negotiations, drafting and concluding the collective labor contract\n' +
            'contesting dismissal decisions and other unilateral acts of the employer\n' +
            'disputes regarding outstanding salary rights, workplace harassment or other aspects related to the relationship between employee and employer\n' +
            'assisting and representing before the competent authorities with the role of verifying the fulfillment of the obligations stipulated in the labor legislation\n' +
            'compliance with the legal provisions in force';
        break;
      case 'migration':
        title = isRo ? 'Dreptul imigrarii' : ' Immigration law';
        details = isRo
          ? 'obtinere viza de scurta sau lunga sedere (orice tip de viza)\n' +
            'invitații preliminare obținerii vizei\n' +
            'obținere și reînnoire permise de ședere temporară (muncă, reunificare familie, activități comerciale, studii etc.) sau permanență\n' +
            'certificat de înregistrare (înregistrare rezidenta cetățeni UE)\n' +
            'înregistrare rezidență fiscală\n' +
            'aviz de munca\n' +
            'obținerea cetățeniei române\n' +
            'acte de stare civilă'
          : 'obtaining a short or long stay visa (any type of visa)\n' +
            'preliminary invitations to obtain the visa\n' +
            'obtaining and renewing temporary residence permits (work, family reunification, commercial activities, studies, etc.) or permanent residence\n' +
            'registration certificate (residence registration of EU citizens)\n' +
            'fiscal residence registration\n' +
            'work permit\n' +
            'obtaining Romanian citizenship\n' +
            'civil status documents';
        break;
      case 'ensurance':
        title = isRo ? 'Dreptul asigurarilor' : 'Insurance law';
        details = isRo
          ? 'analiza polițelor de asigurare\n' +
            'despăgubiri acordate în urma unor accidente rutiere (asistare dosare de dauna)\n' +
            'negociere directă cu asiguratorul pentru acordarea unor despăgubiri ca urmare a producerii riscului asigurat (accident rutier sau alt tip de eveniment)\n' +
            'reprezentarea în instanță pentru plata daunelor materiale și morale de către asigurător\n'
          : 'analysis of insurance policies\n' +
            'compensation granted following road accidents (assistance with damage files)\n' +
            'direct negotiation with the insurer for the granting of compensation as a result of the occurrence of the insured risk (road accident or other type of event)\n' +
            'representation in court for the payment of material and moral damages by the insurer';
        break;
      case 'real-estate':
        title = isRo ? 'Drept imobiliar' : 'Real estate';
        details = isRo
          ? 'due diligence al imobilelor care urmează să facă obiectul unui contract imobiliar\n' +
            'asistență în obținerea documentelor necesare încheierii contractului de vanzare\n' +
            'negocierea, redactarea și revizuirea contractelor din domeniul imobiliar (promisiune de vânzare, contract de vânzare, contract de închiriere, contract de ipotecă etc.)\n' +
            'asistenţă juridică privind intabulări, rectificări şi notări în cartea funciară a imobilului\n' +
            ' litigii cu privire la dreptul de proprietate și dezmembrămintele acestuia (uz, uzufruct, abitaţie, servitute, superficie)'
          : 'due diligence of the buildings that will be the subject of a real estate contract\n' +
            'assistance in obtaining the necessary documents to conclude the sales contract\n' +
            'negotiation, drafting and revision of real estate contracts (promise of sale, sales contract, rental contract, mortgage contract, etc.)\n' +
            'Legal assistance regarding entries, rectifications and notations in the land register of the building\n' +
            'disputes regarding the right of ownership and its dismemberment (use, usufruct, habitation, servitude, surface)';
        break;
      case 'gdpr':
        title = isRo ? 'Protecția datelor cu caracter personal' : 'Personal data protection (GDPR)';
        details = isRo
          ? 'politică de confidențialitate, politică de cookie-uri\n' +
            'termeni și condiții site\n' +
            'revizuire politici și clauze GDPR existente (conformitate)\n' +
            'notificari privind respectarea drepturilor persoanei vizate'
          : 'Privacy policy, cookie policy\n' +
            'Site terms and conditions\n' +
            'Review existing GDPR policies and clauses (compliance)\n' +
            'Notifications regarding compliance with the rights of the data subject';
        break;
      case 'money':
        title = isRo ? 'Drept administrativ și fiscal' : 'Administrative law';
        details = isRo
          ? 'consultanţă juridică în ceea ce priveşte raportul cu autorităţile publice centrale şi cele locale\n' +
            'redactarea şi înaintarea oricăror cereri către autorităţile publice centrale şi cele locale\n' +
            'consultanta privind încheierea, executarea, modificarea și încetarea contractelor administrative\n' +
            'litigii privind anularea / contestarea actelor administrative'
          : 'Legal consultancy regarding the relationship with central and local public authorities\n' +
            'drafting and submitting any requests to central and local public authorities\n' +
            'consultancy regarding the conclusion, execution, modification and termination of administrative contracts\n' +
            'disputes regarding the cancellation / contestation of administrative acts';
        break;
      case 'civil':
        title = isRo ? 'Drept civil' : 'Civil law';
        details = isRo
          ? 'recuperare creante\n' +
            'contestatii la executare\n' +
            'succesiuni și partaje\n' +
            'negociere și redactare contracte civile '
          : 'debt recovery\n' +
            'enforcement appeals\n' +
            'succession procedure and the division of inheritance assets\n' +
            'negotiation and drafting of civil contracts';
        break;
    }
    setTitleAndDetails(title, details);
  };

  return (
    <Components.ServicesContainer id='practice-areas'>
      {windowSize.innerWidth > 500 ? (
        <>
          {/*<Components.ServicesH1>Domenii de practică</Components.ServicesH1>*/}
          <Components.BackgroundImage src={image} />
          <Components.ServicesWrapper>
            <ServiceCard
              title={isRo ? 'Drept comercial & societar' : 'Corporate law'}
              icon={'commercial'}
              blackBg={true}
              tabletBg={true}
              mobileBg={true}
              onClick={toggleModal}
            />
            <ServiceCard title={isRo ? 'Dreptul muncii' : 'Labor law'} icon={'work'} onClick={toggleModal} />
            <ServiceCard
              title={isRo ? 'Dreptul imigrarii' : ' Immigration law'}
              icon={'migration'}
              blackBg={true}
              mobileBg={true}
              onClick={toggleModal}
            />
            <ServiceCard
              title={isRo ? 'Dreptul asigurarilor' : 'Insurance law'}
              icon={'ensurance'}
              tabletBg={true}
              onClick={toggleModal}
            />
            <ServiceCard
              title={isRo ? 'Drept imobiliar' : 'Real estate'}
              icon={'real-estate'}
              tabletBg={true}
              mobileBg={true}
              onClick={toggleModal}
            />
            <ServiceCard
              title={isRo ? 'Protecția datelor cu caracter personal' : 'Personal data protection (GDPR)'}
              icon={'gdpr'}
              blackBg={true}
              onClick={toggleModal}
            />
            <ServiceCard
              title={isRo ? 'Drept administrativ și fiscal' : 'Administrative law'}
              icon={'money'}
              mobileBg={true}
              onClick={toggleModal}
            />
            <ServiceCard
              title={isRo ? 'Drept civil' : 'Civil law'}
              icon={'civil'}
              blackBg={true}
              tabletBg={true}
              onClick={toggleModal}
            />
          </Components.ServicesWrapper>
        </>
      ) : (
        <Carousel infiniteLoop={true} autoPlay={true} showStatus={false} showThumbs={false}>
          <ServiceCard title={'Drept comercial & societar'} icon={'commercial'} blackBg={true} onClick={toggleModal} />
          <ServiceCard title={'Dreptul muncii'} icon={'work'} onClick={toggleModal} />
          <ServiceCard title={'Dreptul imigrarii'} icon={'migration'} blackBg={true} onClick={toggleModal} />
          <ServiceCard title={'Dreptul asigurarilor'} icon={'ensurance'} blackBg={true} onClick={toggleModal} />
          <ServiceCard title={'Drept imobiliar'} icon={'real-estate'} blackBg={true} onClick={toggleModal} />
          <ServiceCard
            title={'Protecția datelor cu caracter personal'}
            icon={'gdpr'}
            blackBg={true}
            onClick={toggleModal}
          />
          <ServiceCard title={'Drept administrativ și fiscal'} icon={'money'} blackBg={true} onClick={toggleModal} />
          <ServiceCard title={'Drept civil'} icon={'civil'} blackBg={true} onClick={toggleModal} />
        </Carousel>
      )}
      <DetailsModal open={open} toggleModal={() => setOpen(!open)} title={title} details={details} />
    </Components.ServicesContainer>
  );
};

export default ServicesSection;
