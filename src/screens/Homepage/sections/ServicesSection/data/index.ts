export type Services = {
  type: ServicesType;
  title: string;
  details: string;
};

export type ServicesType =
  | 'drept-comercial'
  | 'dreptul-muncii'
  | 'dreptul-imigrarii'
  | 'dreptul-asigurărilor'
  | 'gdpr'
  | 'drept-administrativ'
  | 'drept-civil';

export const services: Services[] = [
  {
    type: 'drept-comercial',
    title: 'Drept comercial & societar',
    details:
      'înființarea unei societăți - redactarea tuturor înscrisurilor necesare constituirii unei persoane juridice (Act constitutiv, declaratii, contracte privind sediul), precum și parcurgerea în numele clientului a procedurii in fata Registrului Comerțului\n' +
      'stabilirea sediului social al societății la sediul avocatului pe o perioada limitata de 1 an\n' +
      'înregistrarea oricăror modificări corporative ale unei societăți (schimbare sediu, modificare obiect de activitate, cesiune parti sociale, schimbare administrator, înființarea/desființare punct de lucru, modificare capital, etc.)\n' +
      'asistare și reprezentare în cadrul procedurii de lichidare voluntara\n' +
      'redactarea de decizii ale asociatului unic sau de hotărâri ale adunării generale a asociaţilor, în conformitate cu voinţa acestora \n' +
      'redactare și revizuire de contracte comerciale\n' +
      'negocieri comerciale\n' +
      'due diligence\n' +
      'notificari / răspunsuri la notificări către instituții publice și parteneri comerciali\n' +
      'conformitate legala\n' +
      'litigii pentru recuperare datoriilor ori alte probleme de natura comerciala\n',
  },
  {
    type: 'dreptul-muncii',
    title: 'Dreptul muncii',
    details:
      'negocierea, redactarea și revizuirea contractului individual de muncă și a fișei de post\n' +
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
      'conformitatea cu dispozițiile legale în vigoare\n',
  },
  {
    type: 'dreptul-imigrarii',
    title: 'Dreptul imigrării',
    details:
      'obtinere viza de scurta sau lunga sedere (orice tip de viza)\n' +
      'invitații preliminare obținerii vizei\n' +
      'obținere și reînnoire permise de ședere temporară (muncă, reunificare familie, activități comerciale, studii etc.) sau permanență\n' +
      'certificat de înregistrare (înregistrare rezidenta cetățeni UE)\n' +
      'înregistrare rezidență fiscală\n' +
      'aviz de munca\n' +
      'obținerea cetățeniei române\n' +
      'acte de stare civilă\n',
  },
  {
    type: 'dreptul-asigurărilor',
    title: 'Dreptul asigurărilor',
    details:
      'analiza polițelor de asigurare\n' +
      'despăgubiri acordate în urma unor accidente rutiere (asistare dosare de dauna)\n' +
      'negociere directă cu asiguratorul pentru acordarea unor despăgubiri ca urmare a producerii riscului asigurat (accident rutier sau alt tip de eveniment)\n' +
      'reprezentarea în instanță pentru plata daunelor materiale și morale de către asigurător\n' +
      '5. Drept imobiliar\n' +
      'due diligence al imobilelor care urmează să facă obiectul unui contract imobiliar\n' +
      'asistență în obținerea documentelor necesare încheierii contractului de vanzare\n' +
      'negocierea, redactarea și revizuirea contractelor din domeniul imobiliar (promisiune de vânzare, contract de vânzare, contract de închiriere, contract de ipotecă etc.)\n' +
      'asistenţă juridică privind intabulări, rectificări şi notări în cartea funciară a imobilului\n' +
      ' litigii cu privire la dreptul de proprietate și dezmembrămintele acestuia (uz, uzufruct, abitaţie, servitute, superficie)\n',
  },
  {
    type: 'gdpr',
    title: 'Protecția datelor cu caracter personal',
    details:
      'politică de confidențialitate, politică de cookie-uri\n' +
      'termeni și condiții site\n' +
      'revizuire politici și clauze GDPR existente (conformitate)\n' +
      'notificari privind respectarea drepturilor persoanei vizate\n',
  },
  {
    type: 'drept-administrativ',
    title: 'Drept administrativ',
    details:
      'consultanţă juridică în ceea ce priveşte raportul cu autorităţile publice centrale şi cele locale\n' +
      'redactarea şi înaintarea oricăror cereri către autorităţile publice centrale şi cele locale\n' +
      'consultanta privind încheierea, executarea, modificarea și încetarea contractelor administrative\n' +
      'litigii privind anularea / contestarea actelor administrative\n',
  },
  {
    type: 'drept-civil',
    title: 'Drept civil',
    details:
      'recuperare creante\n' +
      'contestatii la executare\n' +
      'succesiuni și partaje\n' +
      'negociere și redactare contracte civile \n',
  },
];
