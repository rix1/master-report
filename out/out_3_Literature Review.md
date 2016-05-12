"# Literature Review


Open with how we searched for literature: What were the keywords? How was the approach? Write some sentences about how this is a active research field with changing technology. What years were we looking for?

## Electrocardiogram


Electrocardiogram is a measurement of the electrical activity produced by the muscles around the heart. The measurements are done 





---





## Problem statement: elaborated

\t\t\t\t\t

### On intended use

I paid several visits to both St. Olavs and Vestre Viken HF in order to observe and talk to experts in the domain of patient monitoring. Karl Øyri made it clear that I had to consider the *intended use* for my artifact. However convenient, monitoring ambulatory patients is merely an action following an an intention, not the goal in itself. As mentioned, many before me have taken the rather deterministic approach of looking at the technology and claiming it will revolutionize health care because of its properties and possibilities. Therefore we must ask the question, for what patient profile are we solving the problem? What use cases? What is the intended use?

At Vestre Viken a centralized monitoring station similar to the one I visited at St. Olavs was located at the intensive care unit. In addition to patients located in the ICU, they also monitored patients in other parts of the hospital connected via telemetry. Both the local and the remote patients were connected to a 5 lead (EASI) ECG setup. If there was something suspicious with the readings on the screen, both the ICU and the unit with the remote patients had several standalone 12-lead ECG units that could be connected to the patient on request. Through a demonstration, I was shown how a patient was connected to the standalone ECG device with 10 electrodes in order to get the full 12-lead resolution. This device was mobile (on wheels) and had the form factor of a small laptop computer. It was standalone in the sense that it's only output was a printed exert from the examination as shown in Fig. [FIGURE][FIGURE_PAPPA_ECG_PRINT] from a built in printer. We also visited two other medical units at the same hospital that did ECG monitoring. Both of which used a 3-lead setup. This stands to show that at Vestre Viken, 3 and 5-lead setups are most used in continuous monitoring. The full 12-lead was only used in short examinations on demand. This practice was also confirmed at the Clinic of Cardiology at St. Olavs.

Based on these observations, the intended use of the artifact should be similar to the role played by telemetry systems today. These systems are used for monitoring patients that are expected to experience, or are vulnerable to, heart defects either pre or post surgery, or during treatment. See table [10] for a description of the most common irregularities and how they are identified. Because irregularities can happen at any time of the day, continuous monitoring is a fundamental requirement to the artifact.

SIDENOTE: Through conversations with a doctor it became clear that that the prevalence of heart abnormalities of medical interest was likely to happen during physically straining activities like walking stairs etc. However, this could also be happening while resting, as confirmed by an patient who experienced irregular heart beats (cardiac arrhythmia) while sleeping.




## Requirements


\t\t\t\t\t\t

This section describes the requirements for the artifact. First we outline the artifact, then an introduction of the stakeholders and their roles follow, before elaborating on non-functional requirements. Lastly, a comparison of the different stakeholders and their concerns are conducted. 


### Stakeholders

Because of the interdisciplinary nature of this project, we have to include a broad span of different stakeholders. We have divided the stakeholders into three different groups: Direct users, product owners and vendors and suppliers.


**Direct users:**

- Patients: The patients themselves are the main source of physiological data. The patients are the ones in direct contact with the sensory equipment, and will act as the wearer of the  WBANs. It is important to remember that these are people admitted to the hospital with a broad span of medical conditions. They might be in pain, unconscious, or mentally exhausted. One must take these considerations into the design and requirement specification. 
- Physicians:  Physicians and clinicians are the medical staff that are responsible for care and treatment of patients, as well as operating their respective wards and departments. They are the ones that will install the sensors on the patient.

**Product owners:**

- Technical engineer: Technical engineer is defined as the medical and biomedical maintenance engineer responsible for installing and maintaining the technical equipment used for medical purposes at hospitals. Among other things, they are responsible for doing technical maintenance  on the central heart monitoring system, which is as close as we come to an established way of monitoring vital signs of multiple patients in hospitals today.
- Purchasing organization: Depending on the local laws, policies and governance at different hospitals and hospital regions, the purchasing routines may be different. Often these routines also differ based on what type of medical equipment this is, and it’s intended use (e.g. disposable vs reusable equipment) [11], [12]. Either way, the department stakeholder represents the organizational unit(s) responsible for purchasing one or more parts of our proposed artifact.

SIDENOTE: Because our artifact stack spans the full network stack, it also might span multiple purchasing organizations. Therefore, implementing our artifact may be difficult in practice. This is a concern for the feasibility of our artifact, and must be taken into account when developing the requirements.  

**Vendors and suppliers:**

- EHR vendors: The electronic health record vendors is here used as a common term describing providers of either software or cloud services for storing and managing electronic medical records/information at hospitals.  Although effort have been made to ensure interoperability across systems and vendors, these systems have traditionally been closed silos tailored for a specific hospital or medical service. This is however rapidly changing with new standards like HL7-FHIR (Fast Health Information Resources)[13]. The development and adaptation of initiatives like this will be key to the success of a versatile/(platform independent?) monitoring solution that works across hospital departments and institutions.
- Device Manufacturers:
  - Medical devices: This stakeholder represents the manufacturers of medical-grade wireless monitoring nodes and gateways. Popular manufacturer of sensory equipment today include Philips, Siemens and General Electric (GE)
  - Commercial products: This represents manufacturers of consumer technology for monitoring health and vital signs. Information gathered both before and after a person is admitted to the hospital could be of medical value.
- Commercial software providers: This stakeholder represents all the 3rd party consumer technology that track, gather and displays information from various consumer products. This stakeholder is often the same as device manufacturers, it could also be an independent company specializing in personal health services. Common for these providers is that they are in large part concerned with integrations to other services.


### Non-functional Requirements

The non-functional requirements, or qualities of the artifact.


### Functional Requirements

"