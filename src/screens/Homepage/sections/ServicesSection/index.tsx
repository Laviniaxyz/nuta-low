import React, { useContext, useState } from 'react';
import { Components } from './styled';
import ServiceCard from './ServiceCard';
import DetailsModal from './DetailsModal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { SiteLanguageContext } from '../../../../providers/siteLanguage/context';
import { WindowSizeContext } from '../../../../providers/windowSize/context'; // requires a loader

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require('../../../../assets/lawyer-image.png');
export type IconType = 'commercial' | 'work' | 'migration' | 'ensurance' | 'real-estate' | 'gdpr' | 'money' | 'civil';

const ServicesSection = () => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const { isRo } = useContext(SiteLanguageContext);
  const { windowSize } = useContext(WindowSizeContext);

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
          ? 'înființarea unei societăți – redactarea tuturor înscrisurilor necesare constituirii unei persoane juridice (Act constitutiv, declarații, contracte privind sediul), precum și parcurgerea în numele clientului a procedurii în fața Registrului Comerțului\n' +
            'stabilirea sediului social al societății la sediul avocatului pe o perioada limitata de 1 an\n' +
            'înregistrarea oricăror modificări corporative ale unei societăți (schimbare sediu, modificare obiect de activitate, cesiune părți sociale, schimbare administrator, înființarea/desființare punct de lucru, majorare/reducere capital social, etc.)\n' +
            'asistarea și reprezentare în cadrul procedurii de lichidare voluntară\n' +
            'redactarea de decizii ale asociatului unic sau de hotărâri ale adunării generale a asociaților, în conformitate cu voința acestora \n' +
            'redactare și revizuire de contracte comerciale\n' +
            'negocieri comerciale\n' +
            'due diligence\n' +
            'notificări / răspunsuri la notificări către instituții publice și parteneri comerciali\n' +
            'conformitate legală\n' +
            'litigii pentru recuperarea datoriilor ori alte probleme de natură comercială'
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
          ? 'negocierea, redactarea și revizuirea contractului individual de muncă și a fisei de post\n' +
            'elaborarea unor clauze contractuale specifice, ca parte integrantă a contractului individual de muncă, în vederea protejării intereselor clientului (clauza de neconcurență, clauza de confidențialitate, clauza de mobilitate, clauza cu privire la formarea profesională etc.)\n' +
            'redactarea și revizuirea Regulamentului Intern și a altor proceduri interne privitoare la organizarea și disciplina muncii\n' +
            'încetarea contractului individual de muncă (demisie, concedierea, acordul părților)\n' +
            'asistența și negocierea în vederea obținerii unor pachete compensatorii la încetarea raporturilor de muncă\n' +
            'medierea în vederea stingerii conflictelor individuale de muncă\n' +
            'asistare în procedura cercetării disciplinare\n' +
            'negocieri colective, redactarea și încheierea contractului colectiv de muncă\n' +
            'contestarea deciziilor de concediere și a altor acte unilaterale ale angajatorului\n' +
            'litigii privind drepturile salariale restante, hărțuirea la locul de muncă sau alte aspecte legate de relațiile dintre angajat și angajator\n' +
            'asistarea și reprezentarea în fața autorităților competente cu rol de verificare a îndeplinirii obligațiilor prevăzute în legislația muncii\n' +
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
          ? 'obținere viza de scurtă sau lungă ședere (orice tip de viză)\n' +
            'invitații preliminare obținerii vizei\n' +
            'obținere și reînnoire permise de ședere temporară pentru diferite scopuri (muncă, reunificare familie, activități comerciale, studii etc.) sau permanentă\n' +
            'certificat de înregistrare (înregistrare rezidență cetățeni UE)\n' +
            'înregistrare rezidență fiscală\n' +
            'aviz de muncă\n' +
            'obținerea cetățeniei romane\n' +
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
        title = isRo ? 'Dreptul asigurărilor' : 'Insurance law';
        details = isRo
          ? 'analiza polițelor de asigurare\n' +
            'despăgubiri acordate în urma unor accidente rutiere (asistare dosare de daună)\n' +
            'negociere directă cu asigurătorul pentru acordarea unor despăgubiri ca urmare a producerii riscului asigurat (accident rutier sau alt tip de eveniment)\n' +
            'reprezentarea în instanță pentru plata daunelor materiale și morale de către asigurător'
          : 'analysis of insurance policies\n' +
            'compensation granted following road accidents (assistance with damage files)\n' +
            'direct negotiation with the insurer for the granting of compensation as a result of the occurrence of the insured risk (road accident or other type of event)\n' +
            'representation in court for the payment of material and moral damages by the insurer';
        break;
      case 'real-estate':
        title = isRo ? 'Drept imobiliar' : 'Real estate';
        details = isRo
          ? 'ue dilligence al imobilelor care urmează să facă obiectul unui contract imobiliar\n' +
            'asistență în obținerea documentelor necesare încheierii contractului de vânzare\n' +
            'negocierea, redactarea și revizuirea contractelor din domeniul imobiliar (promisiune de vânzare, contract de vânzare, contract de închiriere, contract de ipotecă etc.)\n' +
            'asistență juridică privind intabulări, rectificări și notări în cartea funciară a imobilului\n' +
            'litigii cu privire la dreptul de proprietate și dezmembrămintele acestuia (uz, uzufruct, abitație, servitute, superficie)'
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
            'notificări privind respectarea drepturilor persoanei vizate'
          : 'Privacy policy, cookie policy\n' +
            'Site terms and conditions\n' +
            'Review existing GDPR policies and clauses (compliance)\n' +
            'Notifications regarding compliance with the rights of the data subject';
        break;
      case 'money':
        title = isRo ? 'Drept administrativ și fiscal' : 'Administrative law';
        details = isRo
          ? 'consultanță juridică în ceea ce privește raportul cu autoritățile publice centrale și cele locale\n' +
            'redactarea și înaintarea oricăror cereri către autoritățile publice centrale și cele locale\n' +
            'consultanță privind încheierea, executarea, modificarea și încetarea contractelor administrative\n' +
            'litigii privind anularea / contestarea actelor administrative'
          : 'Legal consultancy regarding the relationship with central and local public authorities\n' +
            'drafting and submitting any requests to central and local public authorities\n' +
            'consultancy regarding the conclusion, execution, modification and termination of administrative contracts\n' +
            'disputes regarding the cancellation / contestation of administrative acts';
        break;
      case 'civil':
        title = isRo ? 'Drept civil' : 'Civil law';
        details = isRo
          ? 'recuperare creanțe\n' +
            'ontestații la executare\n' +
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
          <ServiceCard
            title={isRo ? 'Drept comercial & societar' : 'Corporate law'}
            icon={'commercial'}
            blackBg={true}
            onClick={toggleModal}
          />
          <ServiceCard title={isRo ? 'Dreptul muncii' : 'Labor law'} icon={'work'} onClick={toggleModal} />
          <ServiceCard
            title={isRo ? 'Dreptul imigrarii' : ' Immigration law'}
            icon={'migration'}
            blackBg={true}
            onClick={toggleModal}
          />
          <ServiceCard
            title={isRo ? 'Dreptul asigurarilor' : 'Insurance law'}
            icon={'ensurance'}
            blackBg={true}
            onClick={toggleModal}
          />
          <ServiceCard
            title={isRo ? 'Drept imobiliar' : 'Real estate'}
            icon={'real-estate'}
            blackBg={true}
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
            blackBg={true}
            onClick={toggleModal}
          />
          <ServiceCard title={isRo ? 'Drept civil' : 'Civil law'} icon={'civil'} blackBg={true} onClick={toggleModal} />
        </Carousel>
      )}
      <DetailsModal open={open} toggleModal={() => setOpen(!open)} title={title} details={details} />
    </Components.ServicesContainer>
  );
};

export default ServicesSection;
