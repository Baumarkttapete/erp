const localeData = {
  en: {
    input: "Input",
    results: "Results",
    risks: "Risks",
    pdf_export: "PDF Export",
    effects: "Effects",

    home_title: "ERP",
    home_subtitle: "Project | Implementation | Introduction",
    home_subtitle2: "What Aspects to Consider?",

    home_costinfo: "What budget per user should be planned?",
    home_personalinfo: "How many people should be in the core team?",
    home_timeinfo: "How much time should be allocated for the implementation?",
    home_risksinfo:
      "What are the most likely risks that may arise during the implementation?",
    home_infotext:
      "Based on company size, industry, and region, these points can be estimated in advance.",
    home_btn_study: "To the Study",
    home_btn_calculation: "To the Calculation",

    about_infotext:
      "This application was developed as part of the thesis on 'Usability-Focused Development of an Application for Cost Estimation of ERP Implementation Projects' at the Berlin School of Economics and Law and was developed by Bianca Stodieck.",
    about_infotext2:
      "The goal is to assist companies in better estimating and making the costs for implementing an ERP system more transparent.",

    branch: "Branch",
    branch_industry: "Industry",
    branch_service: "Service",
    branch_trading: "Trade",
    userQuantity: "Number of Employees",
    region: "Region",
    region_d: "Germany",
    region_a: "Austria",
    region_ch: "Switzerland",

    tooltip_employees: "Number of Employees in the Company",
    tooltip_branch: "Company Industry",
    tooltip_region: "Company Region",
    tooltip_time: "Project Duration",
    tooltip_personal: "Required Core Team Members",

    step1_title: "User Inputs",
    step1_infotext:
      "Enter the number of employees in the company and select the industry and location of the branch. If the industry is not listed, choose the closest option.",

    step1_snackbar_text:
      "Please enter the number of employees, branch, and region of the company.",
    step2_title: "Summary",
    step2_infotext:
      "You should plan the following costs per user, duration, and core team members:",

    cost_per_user: "Cost per User",
    software: "Software",
    service: "Service",
    hardware: "Hardware",
    cost_infotext:
      "The costs per user consist of various components. Software costs include expenses for licensed software and customizations. Service costs include expenses for consultation and individual adjustments. Hardware costs include the acquisition of servers, computers, and other physical resources. The total costs are composed of these components and represent the financial expenditure per user.",
    prework: "Prework",
    months: " Months",
    implementation: "Implementation",
    time_infotext:
      "The duration of a project is divided into various phases. The preparation phase includes gathering requirements and planning. The implementation phase involves the actual implementation of the solution. The total duration is the sum of these two phases. Efficient planning and execution are crucial to completing the project on time.",
    personal: "Core Team",
    intern: "Internal",
    extern: "External",
    personal_infotext:
      "The personnel needs of the project team depend on various factors, including the size and complexity of the project. Internal personnel are employees of the company directly involved in the project. External employees are consultants from external companies bringing specialized skills. The total number of team members has a significant impact on the efficiency and success of the project. Complex projects in different industries often require a combination of internal and external personnel to achieve optimal results.",
    employees: " Employees",
    consultants: " Consultants",
    persons: " Persons",
    sum: "Total",

    cost: "Cost",
    time: "Duration",
    quality: "Quality",

    next: "Next",
    back: "Back",

    risk_infotext_diagram:
      "The following bar chart shows the main problems during system implementation and the percentage of companies of your company size to which these problems applied.",
    risk_infotext_radar:
      "You now have the opportunity to incorporate the potential impacts of the above-mentioned main problems into the Magic Triangle shown below. To do this, use the sliders next to the risks. For more detailed information on the risks and their respective impacts on the Magic Triangle, these can be expanded.",
    risk_infotext_radar_warning:
      "These are only estimations! The mentioned problems affect each project differently. Therefore, this view primarily serves to draw attention to the issue.",
    risk_datenmigration: "Issues with Data Migration",
    risk_datenmigration_info:
      "It is important to exercise special care during data migration to ensure that all information is transferred correctly and completely. This can be achieved through thorough planning, comprehensive testing, and the involvement of experts.",
    risk_datenmigration_info_cost:
      "Costs: Costs may increase if additional resources or specialized technologies are needed to ensure a smooth data migration. Involving experts can also incur additional expenses.",
    risk_datenmigration_info_time:
      "Duration: Data migration can take a significant amount of time, especially if large amounts of data need to be moved or if there are complex data structures. The more complex the migration, the longer it might take to complete the project.",
    risk_datenmigration_info_quality:
      "Quality: Inadequate data migration can affect the quality of the project. Data loss or errors in migration can lead to incorrect information or malfunctions.",
    risk_zeitplan: "Too Tight Schedule",
    risk_zeitplan_info:
      "This risk pertains to the possibility that the project may not be completed on time due to a schedule that is too tight. There may not be enough time to properly execute all required tasks.",
    risk_zeitplan_info_time:
      "Costs: Pressure from a tight schedule may require additional resources to expedite the project. This could lead to increased costs.",
    risk_zeitplan_info_cost:
      "Duration: A tight schedule may impact the duration of the project. Completion could be delayed as there may not be enough time to properly execute tasks.",
    risk_zeitplan_info_quality:
      "Quality: With a tight schedule, certain quality assurance processes or checks may be abbreviated or skipped, potentially impacting the quality of the end product.",
    risk_anpassungen: "Too Many Customizations",
    risk_anpassungen_info:
      "This risk refers to frequent changes in requirements or scope during the project. This can lead to additional complexity and potentially delays.",
    risk_anpassungen_info_time:
      "Duration: Too many customizations can extend the duration of the project, as additional time is needed to implement and test the changes.",
    risk_anpassungen_info_cost:
      "Costs: Constant customizations can increase the costs of the project, as they require additional resources and working hours.",
    risk_anpassungen_info_quality:
      "Quality: Constant customizations could affect the quality, as there may not be enough time for comprehensive testing and quality controls.",
    risk_ressourcen: "Lack of Resources for Users",
    risk_ressourcen_info:
      "This risk concerns the availability and qualification of the individuals or resources needed for the project. Shortages could occur if there are not enough qualified resources available.",
    risk_ressourcen_info_time:
      "Duration: A shortage of qualified resources could extend the duration of the project, as tasks may be completed more slowly or additional time may be needed for training.",
    risk_ressourcen_info_cost:
      "Costs: If additional resources are needed to compensate for shortages, it could increase the costs of the project.",
    risk_ressourcen_info_quality:
      "Quality: If the available resources are not sufficiently qualified, this could impact the quality of the end product.",
    risk_unternehmensprozesse: "Flawed Mapping of Business Processes",
    risk_unternehmensprozesse_info:
      "This risk pertains to the potential difficulty in understanding and integrating existing business processes into the project. Uncertainties could lead to delays or misinterpretations.",
    risk_unternehmensprozesse_info_time:
      "Duration: Difficulties in mapping business processes could lead to delays, as it may take more time to understand and implement the requirements.",
    risk_unternehmensprozesse_info_cost:
      "Costs: Complex or unclear processes can increase implementation costs, as more effort may be required to meet the requirements.",
    risk_unternehmensprozesse_info_quality:
      "Quality: Inadequate mapping of business processes can affect quality, as not all relevant aspects may be considered.",
    risk_schnittstellen: "Issues with Interface Setup",
    risk_schnittstellen_info:
      "This risk concerns the integration of different systems or components in the project. Difficulties in the smooth collaboration of interfaces can lead to problems and delays.",
    risk_schnittstellen_info_time:
      "Duration: Difficulties in integrating interfaces could extend the duration of the project, as additional time may be needed to resolve compatibility issues.",
    risk_schnittstellen_info_cost:
      "Costs: Issues with interfaces can incur additional costs, as specialized resources or technologies may be needed to enable the integration.",
    risk_schnittstellen_info_quality:
      "Quality: Difficulties in integrating interfaces could affect quality, as not all functions may work together smoothly.",
    risk_anforderungen: "Unclear Requirements",
    risk_anforderungen_info:
      "This risk refers to the possibility that the defined requirements for the project are not clear or detailed enough. This could lead to misunderstandings and complicate the implementation.",
    risk_anforderungen_info_time:
      "Duration: Unclear requirements could affect the duration of the project, as additional time may be needed to clarify and understand the requirements.",
    risk_anforderungen_info_cost:
      "Costs: Unclear requirements could lead to additional costs, as changes and adjustments may need to be made to meet the requirements.",
    risk_anforderungen_info_quality:
      "Quality: Unclear requirements could affect quality, as not all requirements may be correctly understood and implemented.",
    risk_schulungsaufwand: "Underestimated Training Effort",
    risk_schulungsaufwand_info:
      "This risk concerns the time and resources needed to train the individuals involved. If individuals are not adequately trained, this could affect the implementation of the project.",
    risk_schulungsaufwand_info_time:
      "Duration: The training effort could affect the duration of the project, as time may be needed to train the individuals involved.",
    risk_schulungsaufwand_info_cost:
      "Costs: The training effort can incur additional costs, as resources need to be allocated for training.",
    risk_schulungsaufwand_info_quality:
      "Quality: Inadequate training could affect quality, as individuals involved may not be able to effectively handle the new processes or technologies.",
    risk_inPercent: "In Percent",

    step4_infotext: "Please select the content to be included in the PDF.",

    theme: "Theme",
    colorful: "Colorful",
    high_contrast: "High Contrast",

    dialog_dataloss_title: "Attention",
    dialog_dataloss_text:
      "Leaving the calculator will result in the loss of inputs. Do you still want to proceed?",

    faq_infotext:
      "The questions and answers can be searched and filtered by entering keywords in the search field.",
    faq_search: "Search",

    faq_question1: "What is a Magic Triangle in relation to an ERP project?",
    faq_answer1:
      "The magic triangle (also known as project management triangle or triple constraint) is a project management concept that describes the basic parameters of a project. These parameters are",
    faq_answer1_2:
      "Quality: This refers to the overall content and goals of the project. It defines exactly what is to be achieved and what requirements must be met.",
    faq_answer1_3:
      "Time: This refers to the timeframe in which the project must be completed. This includes start and end dates as well as milestones.",
    faq_answer1_4:
      "Cost: This refers to the budget or financial resources needed to carry out the project.",
    faq_answer1_5:
      "These three parameters are closely interrelated. Changes in one parameter often affect the other two. For example, expanding the project scope may require additional time and resources. The idea of the magic triangle is that there necessarily have to be compromises between these three factors. For instance, if the scope of a project changes, it may be necessary to adjust the schedule or allocate additional resources to successfully complete the project. Understanding the magic triangle is crucial for effective project management as it helps project managers understand and consider the impact of decisions on scope, time, and cost.",
    faq_question3: "How was this project developed?",
    faq_answer3:
      "This application was developed as part of the thesis on 'Usability-Focused Development of an Application for Cost Estimation of ERP Implementation Projects' at the Berlin School of Economics and Law and was developed by Bianca Stodieck.",
    faq_question4: "How reliable are the provided values?",
    faq_answer4:
      "The basis for this is the Trovarit study 'ERP in Practice' from 2018/2019, in which the experiences of over 15,000 participating companies were recorded and evaluated.",
    faq_question5: "Will there be more options available?",
    faq_answer5:
      "Currently, no further development is planned. Therefore, there will be no additional options available.",
    faq_question6: "Who is the website intended for?",
    faq_answer6:
      "The website is intended for companies or individuals to assist them in better estimating and making the costs for implementing an ERP system more transparent.",
    faq_question7: "Will my inputs be saved?",
    faq_answer7: "No, no data will be saved.",
  },
  de: {
    home: "Startseite",
    calculation: "Kalkulation",
    about: "About",
    faq: "FAQ",

    input: "Eingaben",
    results: "Ergebnisse",
    risks: "Risiken",
    pdf_export: "PDF Export",
    effects: "Auswirkungen",

    home_title: "ERP",
    home_subtitle: "Projekt | Implementierung | Einführung",
    home_subtitle2: "Welche Aspekte sind zu beachten?",

    home_costinfo: "Welches Budget pro User sollte eingeplant werden? ",
    home_personalinfo:
      "Aus wie vielen Personen sollten in das Kernteam bestehen?",
    home_timeinfo:
      "Wie viel Zeit sollte für die Einführung eingeplant werden? ",
    home_risksinfo:
      "Was sind die wahrscheinlichsten Risiken, die während der Einführung aufkommen können?",
    home_infotext:
      "Basierend auf Unternehmensgröße, Branche und Region lassen sich diese Punkte im Voraus abschätzen. ",
    home_btn_study: "Zur Studie",
    home_btn_calculation: "Zur Berechnung",

    about_infotext:
      "Diese Anwendung ist im Rahmen der Abschlussarbeit zum Thema 'Usability-fokussierte Entwicklung einer Anwendung zur Kostenkalkulation von ERP-Einführungsprojekten' an der Hochschule für Wirtschaft und Recht Berlin entstanden und durch Bianca Stodieck entwickelt worden.",
    about_infotext2:
      "Das Ziel ist es, Unternehmen dabei zu unterstützen, die Kosten für die Einführung eines ERP-Systems besser abzuschätzen und transparenter zu gestalten.",

    branch: "Branche",
    branch_industry: "Industrie",
    branch_service: "Dienstleistung",
    branch_trading: "Handel",
    userQuantity: "Anzahl Mitarbeitende",
    region: "Region",
    region_d: "Deutschland",
    region_a: "Österreich",
    region_ch: "Schweiz",

    tooltip_employees: "Anzahl Mitarbeitende im Unternehmen",
    tooltip_branch: "Branche des Unternehmens",
    tooltip_region: "Region des Unternehmens",
    tooltip_time: "Dauer des Projekts",
    tooltip_personal: "Benötigte Personen im Kernteam",

    step1_title: "Benutzereingaben",
    step1_infotext:
      "Gib in die Inputfelder die Mitarbeitendenanzahl des Unternehmens an und wähle Branche und Standort der Niederlassung aus. Ist die Branche nicht in der Auswahl gelistet, wähle aus, was dem an nächsten kommt.",

    step1_snackbar_text:
      "Bitte gib Anzahl der Mitarbeitende, Branche UND Region des Unternehmens an.",
    step2_title: "Zusammenfassung",
    step2_infotext:
      "Folgende Kosten pro User, Dauer und Personen im Kernteam sollten sie einplanen:",

    cost_per_user: "Kosten pro User",
    software: "Software",
    service: "Dienstleistung",
    hardware: "Hardware",
    cost_infotext:
      "Die Kosten pro Nutzer setzen sich aus verschiedenen Komponenten zusammen. Die Softwarekosten umfassen die Aufwendungen für lizenzierte Software und Anpassungen. Die Dienstleistungskosten umfassen die Aufwendungen für Beratung und individuelle Anpassungen. Die Hardwarekosten umfassen die Anschaffung von Servern, Computern und anderen physischen Ressourcen. Die Gesamtkosten setzen sich aus diesen Komponenten zusammen und stellen den finanziellen Aufwand pro Nutzer dar.",
    prework: "Vorarbeit",
    months: " Monate",
    implementation: "Implementierung",
    time_infotext:
      "Die Dauer eines Projekts gliedert sich in verschiedene Phasen. Die Vorbereitungsphase umfasst die Sammlung der Anforderungen und die Planung. Die Implementierungsphase umfasst die eigentliche Implementierung der Lösung. Die Gesamtdauer ergibt sich aus der Summe dieser beiden Phasen. Eine effiziente Planung und Umsetzung ist entscheidend, um das Projekt termingerecht abzuschließen.",
    personal: "Kernteam",
    intern: "Intern",
    extern: "Extern",
    personal_infotext:
      "Der Personalbedarf des Projektteams hängt von verschiedenen Faktoren ab, unter anderem von der Größe und Komplexität des Projekts. Internes Personal sind Mitarbeitende des eigenen Unternehmens, die direkt am Projekt beteiligt sind. Externe Mitarbeitende sind Beratende von externen Firmen, die spezialisierte Fähigkeiten einbringen. Die Gesamtzahl der Teammitglieder hat einen großen Einfluss auf die Effizienz und den Erfolg des Projekts. Komplexe Projekte in verschiedenen Branchen erfordern oft eine Kombination aus internem und externem Personal, um optimale Ergebnisse zu erzielen.",
    employees: " Mitarbeitende",
    consultants: " Beratende",
    persons: " Personen",
    sum: "Gesamt",

    cost: "Kosten",
    time: "Dauer",
    quality: "Qualität",

    next: "Weiter",
    back: "Zurück",

    risk_infotext_diagram:
      "Folgendes Balkendiagramm zeigt die Hauptprobleme während der Systemeinführung und den prozentualen Anteil der Unternehmen Ihrer Unternehmensgröße, auf die diese Probleme zutrafen.",
    risk_infotext_radar:
      "Sie haben nun die Möglichkeit, die möglichen Auswirkungen der oben genannten Hauptprobleme in das unten gezeigte Magische Dreieck einfließen zu lassen. Betätigen Sie dazu die Slider neben den Risiken. Für genauere Infos zu den Risiken und die jeweiligen Auswirkungen auf das Magische Dreieck lassen sich diese ausklappen.",
    risk_infotext_radar_warning:
      "Hierbei handelt es sich nur um Schätzungen! Die genannten Probleme wirken sich auf jedes Projekt unterschiedlich aus. Daher dient diese Ansicht in erster Linie dazu, auf die Problematik aufmerksam zu machen.",
    risk_datenmigration: "Probleme bei der Datenmigration",
    risk_datenmigration_info:
      "Es ist wichtig, bei der Datenmigration besondere Sorgfalt walten zu lassen, um sicherzustellen, dass alle Informationen korrekt und vollständig übertragen werden. Dies kann durch gründliche Planung, umfassende Tests und den Einsatz von Experten erreicht werden.",
    risk_datenmigration_info_cost:
      "Kosten: Die Kosten können steigen, wenn zusätzliche Ressourcen oder spezialisierte Technologien benötigt werden, um eine reibungslose Datenmigration zu gewährleisten. Auch die Einbindung von Experten kann zusätzliche Ausgaben verursachen.",
    risk_datenmigration_info_time:
      "Dauer: Die Datenmigration kann erhebliche Zeit in Anspruch nehmen, insbesondere wenn große Datenmengen verschoben werden müssen oder wenn es komplexe Datenstrukturen gibt. Je komplizierter die Migration, desto länger könnte es dauern, das Projekt abzuschließen.",
    risk_datenmigration_info_quality:
      "Qualität: Eine unzureichende Datenmigration kann die Qualität des Projekts beeinträchtigen. Datenverlust oder Fehler in der Migration können zu inkorrekten Informationen oder Funktionsstörungen führen.",
    risk_zeitplan: "Zu knapper Zeitplan",
    risk_zeitplan_info:
      "Dieses Risiko bezieht sich darauf, dass das Projekt aufgrund eines zu engen Zeitplans möglicherweise nicht rechtzeitig abgeschlossen werden kann. Es könnte nicht genug Zeit geben, um alle erforderlichen Aufgaben ordnungsgemäß zu erledigen.",
    risk_zeitplan_info_time:
      "Kosten: Druck durch einen knappen Zeitplan kann dazu führen, dass zusätzliche Ressourcen benötigt werden, um das Projekt schneller voranzutreiben. Dadurch könnten die Kosten steigen.",
    risk_zeitplan_info_cost:
      "Dauer: Ein knapper Zeitplan kann dazu führen, dass die Dauer des Projekts beeinträchtigt wird. Die Fertigstellung könnte verzögert werden, da es möglicherweise nicht genug Zeit gibt, um Aufgaben ordnungsgemäß auszuführen.",
    risk_zeitplan_info_quality:
      "Qualität: Bei einem knappen Zeitplan könnte es sein, dass bestimmte Qualitätssicherungsprozesse oder -prüfungen verkürzt oder übersprungen werden, was die Qualität des Endprodukts beeinträchtigen könnte.",
    risk_anpassungen: "Zu viele Anpassungen",
    risk_anpassungen_info:
      "Dieses Risiko bezieht sich darauf, dass es während des Projekts zu häufigen Änderungen an den Anforderungen oder am Umfang kommt. Dies kann zu zusätzlicher Komplexität und möglicherweise zu Verzögerungen führen.",
    risk_anpassungen_info_time:
      "Dauer: Zu viele Anpassungen können die Dauer des Projekts verlängern, da zusätzliche Zeit benötigt wird, um die Änderungen zu implementieren und zu testen.",
    risk_anpassungen_info_cost:
      "Kosten: Die ständigen Anpassungen können die Kosten des Projekts erhöhen, da sie zusätzliche Ressourcen und Arbeitsstunden erfordern.",
    risk_anpassungen_info_quality:
      "Qualität: Ständige Anpassungen könnten die Qualität beeinträchtigen, da möglicherweise nicht genug Zeit für umfassende Tests und Qualitätskontrollen bleibt.",
    risk_ressourcen: "Fehlende Ressourcen für Anwender",
    risk_ressourcen_info:
      "Dieses Risiko betrifft die Verfügbarkeit und Qualifikation der Personen oder Ressourcen, die für das Projekt benötigt werden. Es könnte zu Engpässen kommen, wenn nicht genügend qualifizierte Ressourcen zur Verfügung stehen.",
    risk_ressourcen_info_time:
      "Dauer: Ein Mangel an qualifizierten Ressourcen kann die Dauer des Projekts verlängern, da Aufgaben möglicherweise langsamer erledigt werden oder zusätzliche Zeit für die Schulung benötigt wird.",
    risk_ressourcen_info_cost:
      "Kosten: Wenn zusätzliche Ressourcen benötigt werden, um Engpässe auszugleichen, könnten die Kosten des Projekts steigen.",
    risk_ressourcen_info_quality:
      "Qualität: Wenn die verfügbaren Ressourcen nicht ausreichend qualifiziert sind, könnte dies die Qualität des Endprodukts beeinträchtigen.",
    risk_unternehmensprozesse: "Fehlerhafte Abb. der Unternehmensprozesse",
    risk_unternehmensprozesse_info:
      "Dieses Risiko bezieht sich darauf, dass es möglicherweise Schwierigkeiten gibt, die bestehenden Unternehmensprozesse zu verstehen und in das Projekt zu integrieren. Unklarheiten könnten zu Verzögerungen oder Fehlinterpretationen führen.",
    risk_unternehmensprozesse_info_time:
      "Dauer: Schwierigkeiten bei der Abbildung der Unternehmensprozesse könnten zu Verzögerungen führen, da es möglicherweise mehr Zeit braucht, um die Anforderungen zu verstehen und umzusetzen.",
    risk_unternehmensprozesse_info_cost:
      "Kosten: Komplexe oder unklare Prozesse können die Implementierungskosten erhöhen, da möglicherweise mehr Aufwand erforderlich ist, um die Anforderungen zu erfüllen.",
    risk_unternehmensprozesse_info_quality:
      "Qualität: Eine unzureichende Abbildung der Unternehmensprozesse kann die Qualität beeinträchtigen, da möglicherweise nicht alle relevanten Aspekte berücksichtigt werden.",
    risk_schnittstellen: "Probleme bei Schnittstelleneinrichtung",
    risk_schnittstellen_info:
      "Dieses Risiko betrifft die Integration von verschiedenen Systemen oder Komponenten im Projekt. Schwierigkeiten bei der reibungslosen Zusammenarbeit von Schnittstellen können zu Problemen und Verzögerungen führen.",
    risk_schnittstellen_info_time:
      "Dauer: Schwierigkeiten bei der Integration von Schnittstellen könnten die Dauer des Projekts verlängern, da möglicherweise zusätzliche Zeit benötigt wird, um Kompatibilitätsprobleme zu lösen.",
    risk_schnittstellen_info_cost:
      "Kosten: Probleme mit Schnittstellen können zusätzliche Kosten verursachen, da möglicherweise spezialisierte Ressourcen oder Technologien benötigt werden, um die Integration zu ermöglichen.",
    risk_schnittstellen_info_quality:
      "Qualität: Schwierigkeiten bei der Integration von Schnittstellen könnten die Qualität beeinträchtigen, da möglicherweise nicht alle Funktionen reibungslos zusammenarbeiten.",
    risk_anforderungen: "Anforderungen unklar",
    risk_anforderungen_info:
      "Dieses Risiko bezieht sich darauf, dass die festgelegten Anforderungen an das Projekt nicht klar oder detailliert genug sind. Dies könnte zu Missverständnissen führen und die Umsetzung erschweren.",
    risk_anforderungen_info_time:
      "Dauer: Unklare Anforderungen könnten die Dauer des Projekts verlängern, da zusätzliche Zeit benötigt wird, um die Anforderungen zu klären und zu verstehen.",
    risk_anforderungen_info_cost:
      "Kosten: Unklare Anforderungen könnten zu zusätzlichen Kosten führen, da möglicherweise Änderungen und Anpassungen vorgenommen werden müssen, um die Anforderungen zu erfüllen.",
    risk_anforderungen_info_quality:
      "Qualität: Unklare Anforderungen könnten die Qualität beeinträchtigen, da möglicherweise nicht alle Anforderungen korrekt verstanden und umgesetzt werden.",
    risk_schulungsaufwand: "Unterschätzter Schulungsaufwand",
    risk_schulungsaufwand_info:
      "Dieses Risiko betrifft den Zeitaufwand und die Ressourcen, die für die Schulung der beteiligten Personen benötigt werden. Wenn die Personen nicht ausreichend geschult sind, könnte dies die Umsetzung des Projekts beeinträchtigen.",
    risk_schulungsaufwand_info_time:
      "Dauer: Der Schulungsaufwand könnte die Dauer des Projekts beeinflussen, da möglicherweise Zeit benötigt wird, um die beteiligten Personen zu schulen.",
    risk_schulungsaufwand_info_cost:
      "Kosten: Der Schulungsaufwand kann zusätzliche Kosten verursachen, da Ressourcen für die Schulung bereitgestellt werden müssen.",
    risk_schulungsaufwand_info_quality:
      "Qualität: Eine unzureichende Schulung könnte die Qualität beeinträchtigen, da die beteiligten Personen möglicherweise nicht effektiv mit den neuen Prozessen oder Technologien umgehen können.",

    risk_inPercent: "In Prozent",

    step4_infotext:
      "Bitte wähle die Inhalte aus, die in der PDF enthalten sein sollen.",

    theme: "Theme",
    colorful: "farbig",
    high_contrast: "kontrastreich",

    dialog_dataloss_title: "Achtung",
    dialog_dataloss_text:
      "Beim verlassen des Kalkulators gehen die Eingaben verloren. Möchtest du dennoch fortfahren?",

    faq_infotext:
      "Die Fragen sowie Antworten können mithilfe der Eingabe von Schlagwörtern im Suchfeld durchsucht und gefiltert werden.",
    faq_search: "Suche",

    faq_question1:
      "Was ist ein Magisches Dreieck im Bezug auf ein ERP-Projekt?",
    faq_answer1:
      "Das magische Dreieck (auch bekannt als Projektmanagement-Dreieck oder Triple Constraint) ist ein Projektmanagement-Konzept, das die grundlegenden Parameter eines Projekts beschreibt. Diese Parameter sind",
    faq_answer1_2:
      "Qualität: Dieser bezieht sich auf den gesamten Inhalt und die Ziele des Projekts. Er definiert, was genau erreicht werden soll und welche Anforderungen erfüllt werden müssen.",
    faq_answer1_3:
      "Zeit: Dies bezieht sich auf den Zeitrahmen, in dem das Projekt abgeschlossen sein muss. Dazu gehören Start- und Endtermine sowie Meilensteine. ",
    faq_answer1_4:
      "Kosten: Dies bezieht sich auf das Budget oder die finanziellen Mittel, die für die Durchführung des Projekts benötigt werden. ",
    faq_answer1_5:
      "Diese drei Parameter sind eng miteinander verknüpft. Änderungen bei einem Parameter wirken sich oft auf die anderen beiden aus. Zum Beispiel kann eine Erweiterung des Projektumfangs zusätzliche Zeit und Ressourcen erfordern. Die Idee des magischen Dreiecks besteht darin, dass es notwendigerweise Kompromisse zwischen diesen drei Faktoren geben muss. Wenn sich beispielsweise der Umfang eines Projekts ändert, kann es erforderlich sein, den Zeitplan anzupassen oder zusätzliche Ressourcen zuzuweisen, um das Projekt erfolgreich abzuschließen. Das Verständnis des magischen Dreiecks ist entscheidend für ein effektives Projektmanagement, da es den Projektleitern hilft, die Auswirkungen von Entscheidungen auf Umfang, Zeit und Kosten zu verstehen und zu berücksichtigen.",
    faq_question3: "Wie ist dieses Projekt entstanden?",
    faq_answer3:
      "Diese Anwendung ist im Rahmen der Abschlussarbeit zum Thema 'Usability-fokussierte Entwicklung einer Anwendung zur Kostenkalkulation von ERP-Einführungsprojekten' an der Hochschule für Wirtschaft und Recht Berlin entstanden und durch Bianca Stodieck entwickelt worden.",
    faq_question4: "Wie verlässlich sind die angegebenen Werte?",
    faq_answer4:
      "Als Grundlage hierfür dient die Trovarit-Studie 'ERP in der Praxis' aus dem Jahr 2018/2019 in der die Erfahrungen von über 15.000 teilnehmenden Unternehmen festgehalten und ausgewertet wurde.",
    faq_question5: "Wird es noch mehr Auswahlmöglichkeiten geben?",
    faq_answer5:
      "Aktuell ist keine Weiterentwicklung vorgesehen. Daher wird es auch keine weiteren Auswahlmöglichkeiten geben.",
    faq_question6: "Für wen ist die Webseite gedacht?",
    faq_answer6:
      "Die Webseite ist für Unternehmen bzw. Personen gedacht, sie dabei zu unterstützen, die Kosten für die Einführung eines ERP-Systems besser abzuschätzen und transparenter zu gestalten",
    faq_question7: "Werden meine Eingaben gespeichert?",
    faq_answer7: "Nein, es werden keinerlei Daten gespeichert.",
  },
};

export default localeData;
