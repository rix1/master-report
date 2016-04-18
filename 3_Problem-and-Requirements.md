// Chapter 3: Problem and Requirements

# Problem and Requirements

## Problem statement: elaborated

	[-] Elaborated description and analysis of the practical problem adressed.
		[-] Root cause analysis if needed.
		
> In order to define the problem more precisely, different groups of stakeholders can be approached, e.g. managers, employees and customers as they may have different views and knowledge about various aspects of the problem. By combining contributions from different stakeholder groups the researcher can achieve a deeper and more complete explication of the problem.

**Identifying the gap**
Even before I started literature surveys, I reached out to people in the industry. According to my mission statement I wanted to identify a practical problem experienced when dealing with sensory equipment today. TK[bold statement] something about how solving practical problems are more useful than technology driven research. ~~Solving practical problems compared to technology specific research have the potential to create knowledge of more significant importance~~. I quickly identified that the routines and processes involving monitoring equipment was more or less the same between different departments and hospitals, not only on a national scale, but also international. Because of this indifference I saw no need for doing a quantitative survey between the different hospitals. For my interviews I decided to begin with unstructured interviews and open questions. This way I was able to develop a understanding of how people viewed their work and how they interpreted the technology that was part of their everyday routines. This also made the me more flexible, and I was able to do interviews on a short notice, which enabled me to talk to people in their natural working environment. I took note of people's experience with, interpretations of, and reactions to the technical monitoring systems they had at hand. While observing what people said and did, I searched for latent needs, and afterwards reflected over what they did not say or do. I noticed that the transition between bedside patients and ambulatory ones was not optimal. 

In some cases the department did not have the necessary telemetry equipment for monitoring ambulatory patients. Other times the task of installing the new equipment just so that the patient could take a walk was not carried out because there was no imminent risk of heart failure. In both cases the medical staff I spoke to expressed discontent with this practice. "To see how a recovering heart reacts to physical movement post surgery could give valuable insight in TK what insight is gained", explained Dr. Eide of Kiel University Hospital.

**Some notes on intended use**
This is important to discuss. 

**Implications**
Why does it matter? Reflect on what this problem has to say for the stakeholders

**Improvement**
Replacing the wall-mounted cables with a wireless link would improve this situation.


### On intended use

I paid several visits to both St. Olavs and Vestre Viken HF in order to observe and talk to eksperts in the domain of patient monitoring. Karl Øyri made it clear that I had to consider the *intended use* for my artefact. However convenient, monitoring ambulatory patients is not the intended use in itself. As mentioned, many before me have taken the rather deterministic approach of looking at the technology X and claiming it will revolutionise health care because of its properties and possibilities. Therefore we must ask the question, for what patient profile are we solving the problem? What is the intended use?

At Vestre Viken a centralised monitoring station similar to the one I visited at St. Olavs was located at the intensive care unit. In addition to patients located in the ICU, they also monitored patients in other parts of the hospital connected via telemetry. Both the local and the remote patients were connected to a 5 lead (EASI) ECG setup. If there was something suspicious with the readings on the screen, both the ICU and the unit with the remote patients had several standalone 12-lead ECG units that could be connected to the patient on request. Through a demonstration, I was shown how a patient was connected to the standalone ECG device with 10 electrodes in order to get the full 12-lead resolution. This device was mobile (on wheels) and had the form factor of a small laptop computer. It was standalone in the sense that it's only output was a printed exert from the examination as shown in figure [1][FIGURE_PAPPA_ECG_PRINT] from a built in printer. We also visited two other medical units at the same hospital that did ECG monitoring. Both of which used a 3-lead setup. This stands to show that at Vestre Viken, 3 and 5-lead setups are most used in continous monitoring. The full 12-lead was only used in short examinations on demand. This practice was also confirmed Clinic of Cardiology at St. Olavs.

Based on these observations, the intended use of the artefact would be similar to the role played by telemetry systems today.
The artefact is intended to be used for monitoring patients that are vulnerable for heart defects. Because these can happen at any time of the day,

Through conversations with a doctor it became clear that that heart abnormalities of medical interest was likely to happen during physically straining activities like walking stairs etc. However as a patient could confirm, this could also happen during sleep.

TK my observations about how the monitoring system itself worked.
TK root cause analysis of the different parts contributing to the problem.

SIDENOTE: When observing the telemetry readings I got to see for myself how sensitive the electrodes were to noise. One patient graph was suddenly extremely fuzzy and noisy. I was told this was normal and probably caused by movement like walking, scratching or something similar. Reducing this noise would of course be a major consideration when implementing a system that enables ambulatory monitoring [1][ecg_ambulatory_noise]

Interviews with nurses and doctors revealed both what systems were used for what purpose and how they overlapped with other monitoring systems. Because this illustrates the different aspects of what would be the intended use for the artefact, the next section will look at this in detail.



## Requirements


	[-] Define requirements of artefact, which are justified based on the problem analysis.
	[-] Can also describe:
		[-] The process of problem analysis and requirements elicitation
		[-] The application of the selected research strategies and methods and the use of the knowlege base.


This section describes the requirements for the artefact. First we outline the artefact, then an introduction of the stakeholders and their roles follow, before elaborating on non-functional requirements. Lastly, a comparison of the different stakeholders and their concerns are conducted. 


### Stakeholders

Because of the interdisciplinary nature of this project, we have to include a broad span of different stakeholders. We have divided the stakeholders into three different groups: 


**Direct users:**

- Patients: The patients themselves are the main source of physiological data. The patients are the ones in direct contact with the sensory equipment, and will act as the wearer of the  WBANs. It is important to remember that these are people admitted to the hospital with a broad span of medical conditions. They might be in pain, unconscious, or mentally exhausted. One must take these considerations into the design and requirement specification. 
- Physicians:  Physicians and clinicians are the medical staff that are responsible for care and treatment of patients, as well as operating their respective departments. They are the ones that will install the sensors on the patient.


**Product owners:**

- Technical engineer: Technical engineer is defined as the medical and biomedical maintenance engineer responsible for installing and maintaining the technical equipment used for medical purposes at hospitals. Among other things, they are responsible for doing technical maintenance  on the central heart monitoring system, which is as close as we come to an established way of monitoring vital signs of multiple patients in hospitals today.
- Purchasing organisation: Depending on the local laws, policies and governance at different hospitals and hospital regions, the purchasing routines may be different. Often these routines also differ based on what type of medical equipment this is, and it’s intended use (e.g. disposable vs reusable equipment) [1][interview_heidi], [1][inett_helsedir_medtek_utstyr]. Either way, the department stakeholder represents the organisational unit(s) responsible for purchasing one or more parts of our proposed artefact. Note, because our artefact stack spans the full network stack, it also might span multiple purchasing organisations. Therefore, implementing our artefact may be difficult in practice. This is a concern for the feasibility of our artefact, and must be taken into account when developing the requirements.  


**Other stakeholders:**

- EHR vendors: The electronic health record vendors is here used as a common term describing providers of either software or cloud services for storing and managing electronic medical records/information at hospitals.  Although effort have been made to ensure interoperability across systems and vendors, these systems have traditionally been closed silos tailored for a specific hospital or medical service. This is however rapidly changing with new standards like HL7-FHIR (Fast Health Information Resources)[1][inet_hl7]. The development and adaptation of initiatives like this will be key to the success of a versatile/(platform independent?) monitoring solution that works across hospital departments and institutions.
- Device Manufacturers:
  - Medical devices: This stakeholder represents the manufacturers of medical-grade wireless monitoring nodes. Popular manufacturer of sensory equipment today include Philips, Siemens, GE and more.
  - Commercial products: This represents manufacturers of consumer technology for monitoring health and vital signs. Information gathered both before and after a person is admitted to the hospital could be of medical value.
- Commercial software providers: This stakeholder represents all the 3rd party consumer technology that track, gather and displays information from various consumer products. This stakeholder is often the same as device manufacturers, it could also be an independent company specialising in personal health services. Common for these providers is that they are in large part concerned with integrations to other services.


### Non-functional Requirements

The non-functional requirements, or qualities of the artefact.

Ease of use



### Functional Requirements

> ANSWER: What requirements does physicians demand from physiological sensors?
We have to answer for timelyness, ECG resolution and sample rate.


- Delay tolerant
- 