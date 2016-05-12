## Problem statement


Electronic patient monitoring has been practiced at hospitals for almost half a century [1]. Metrics like ECG, arterial blood pressure, SpO2, respiratory rate and body temperature are measured on every patient in a modern intensive care unit. The consumer industry, the driving force behind many technological advances, have the last couple of years also showed interest in capturing physiological data. With this interest comes new ideas, new solutions and new technology from companies that embed a customer centric focus. The health care has over the years grown into a collaboration of technologically isolated silos, whereas the consumer industry is working towards a ubiquitous reality [2]. Here, every device and service is connected to each other, and available at any given time. Having the ability to monitor several physiological metrics wirelessly together holds potential to reduce cables and ease everyday routines, as well as giving ambulatory patients the freedom to move. However, there is a wide array of different measuring techniques and wireless protocols that all have different capabilities with inherent strengths and weaknesses. Further, the technical requirements to each measurement may vary according to the use case and patient's condition. This is a big obstacle in the implementation of such monitoring systems.

The purpose of this master thesis is to investigate the required capabilities of a wireless monitoring system, in order to assess the feasibility of introducing low energy wireless sensors for data collection. We will investigate how these capability requirements can be addressed experimentally for a set of use cases.


## Abstract

In order to build an artifact that enables wireless monitoring of ambulatory patients, there is a need to understand both the domain and technology involved. In this thesis we investigated and assessed the required capabilities of a wireless monitoring system with the intention of creating a reference model for later projects. 

In the thesis we evaluate a proposed architecture for wireless patient monitoring implemented with Bluetooth Low Energy.


## Preface

This thesis is the result of a collaboration between the Department of Computer and Information Science (IDI) and Department of Telematics (IT) at NTNU and was conducted during the fall and spring semester 2015/2016.

For this research project we originally wanted to investigate how feasible it is to introduce todays commercial wireless low-energy technology in a medical environment. What were the shortcomings? Where are the barriers? What are the requirements? As discussed in section 2, our original approach to answering these questions was through the development of an artifact that solved the practical problem of ambulatory patient monitoring.

Due to the multidisciplinary nature of the problem statement, the focus has shifted and been changed along the way, which resulted in the need for a more general problem statement.

This project was supervised by Prof. Pieter Jelle Toussaint from IDI and Associate Professor Frank Alexander Kraemer from IT.


# Introduction

	
During the last couple of years there has been a significant increase in the number of connected devices. Hardware is getting cheaper and smaller, and the demand for information is growing. Economic prosperity, aging population, the growing middle income population and sensitive public policy are key demand drivers for better healthcare and infrastructure. In addition, we are expecting a population growth of 4 billion within the next 90 years [3]. In order to facilitate these changes, we need infrastructure that is cost effective, sustainable and scales well.

How the healthcare adapts in this time of change will have a major impact on how this expected population growth impact our societies. Today, one of the most radical changes to our current practices is likely to come from the prevalence of new sensory technology, measuring tools and techniques, and what we manage to do with the data collected from these sensors. These sensors may take many forms, but have a set of common qualities; they’re small, energy effective and operate with one or more wireless technologies.

One possible orchestration of these sensors are in a wireless body area network, or WBAN for short. This is a collective term for wireless networks situated inside, on or around the human body. The term originated around 1995 with the idea applying wireless personal area networks (WPAN) technology to on, or in-body devices [4]. This means entire systems of devices communicating with each other in immediate proximity of a human body. Researchers have the past 20 years investigated applications, optimizations and possibilities of WBANs. The technology however, has until recent years not been small enough nor energy efficient enough for networks like these to be practically feasible for patient monitoring.

Electronic patient monitoring is today an established practice at modern hospitals. It involves *repeated or continuous observations or measurements of patients, their physiological functions, and the function of the life support equipment* [5]. A monitoring system that affords good management decisions, can only be created by studying and finding the optimal compromise between several design factors; clinical, engineering and economic [6]. Because of this multidisciplinary nature, we use the following definition throughout this thesis:

> A repeated or continuous measurement of the physiological functions of one or more patients.

SIDENOTE: See chapter 3 for a complete overview of common metrics

An electrocardiography (ECG) test produces one example of such physiological metric. First invented by Willem Einthoven in the early 1900's, it is a technique that captures the electrical activity of the heart over time. Throughout this thesis, ECG will be used as a benchmark because of it's technical requirements.


### Problem statement

		X What is the problem? Whose problem is it? 2-3 refs that confirm this is relevant
		X What has been done to address the problem? No one has ever tested this wrt. BLE
		
The purpose of this master thesis is to investigate the required capabilities of a wireless monitoring system for ECG monitoring, in order to assess the feasibility of introducing Bluetooth Low Energy wireless sensors for data collection today. We will investigate how the Bluetooth technology can be evaluated experimentally for a set of use cases.

1. Is Bluetooth an appropriate protocol for medical applications such as continuous ECG monitoring? We will look at the technical qualities of Bluetooth and evaluate against the capability requirements of a wireless monitoring system with respect to practical aspects such as energy consumption, range and transfer rate. These aspects will be tested experimentally with a prototype. If applicable, what is the desired configuration?

Wireless transfer of data is a huge cost on battery. 

2. What are todays ECG monitoring practices? How can these routines be adjusted to accommodate for low energy monitoring?

3. 


### Existing research

								
			
			- What is wrong with earlier research?
		- Clearly defined research questions
	

Patient monitoring has been practiced for decades. Zimmerman popularized the term PAN in 2001, which later that year was modified to body area network (BAN) in order to describe network enabled devices communication on in and near the body.



### Contributions of the thesis

				

### Structure
# Method

						
	---
	
			- Positivism
		- Interpretivism
		- Critical research
		
		
## Research Strategies and Methods

	

Like in any projects studying involving people and technology there is an inherent complexity that the researchers have to unravel in order to understand the forces that guide the socio-technical systems in front of them.

When studying these systems it is important to understand why and how an artifact works in it's environment, not only that it works. This is complete field of research in itself, and several approaches to achieving this insight have been proposed [7]. My approach was influenced by both the Design Science methodology, my personal experience and IBM's framework for Design Thinking: Observe > Reflect > Make.





### Data collection and analysis

	

As we will see in Chapt. 3, literature review was a major part of this research project in terms of data collection and analysis. A lot of work has been done within the field of WBANs and WSNs, and a systematic approach to gathering and analyzing and extracting knowledge from previous work was an absolute necessity. Literature was also consulted in order to learn about patient monitoring.

However, wireless technology is changing at a rapid pace and certain practical issues are directly linked to the technology in question. This puts a limit on the information and knowledge you can gather from literature. Because of this, we chose interviews as a method for gathering information about the domain and existing practices. A lot of knowledge is embedded in the people and practices of their every day routines. We used both unstructured and semi-structured interviews and with a focus on open questions. This way we were able to develop a understanding of how people viewed their work and how they interpreted the technology that was part of their everyday routines. This also made the research more flexible, and we were able to do interviews on a short notice. This strategy enabled us to talk to people in their natural working environment.

We took note of people's experience with, interpretations of, and reactions to the technical monitoring systems they had at hand. We observed what people said and did, and afterwards reflected over what they did not say or do. This way we were able to search for latent needs in the existing practices. 

Two stakeholders was selected for the survey: Medical engineers and medical practitioners. In order assess the validity of our observations, we chose to conduct interviews in two rounds on two separate hospitals, talking with stakeholders in both and comparing the results. This approach was helpful not only because we got to compare the technical solutions deployed but also the practices around patient monitoring. An alternative approach could have been to target departments higher in the organizational level like purchasing organizations, and do the comparison on the information gathered. This approach however could easily suffer from a mismatch between the general guidelines and the deployed technology as well as long turnover times, meaning a lot of time would have gone by just waiting for an answer from the respective departments.

### Scope

Due to the nature of this project, the research conducted would ideally take several safety and security considerations. Personal health information is considered highly sensitive, and health care is also a safety critical environment. A faulty system can result in life-threatening situations, and ensuring privacy is of outmost importance. However, in order to reduce the scope, the security features of a wireless monitoring system has not been the main focus of this research.

Should this be where I talk about usability? Considerations when researching hospital systems 

# Interviews

What can we learn from the systems employed today?

Interviews with medical engineers at both hospitals revealed that both had a telemetry system from Philips installed. In both cases the network infrastructure and equipment was produced by Philips, but was delivered and maintained by different partners (Vingmed AS at Vestre Viken and HEMIT at St. Olavs) [8]. In this section I will describe the IntelliVue telemetry system from Philips, which is deployed at Norwegian hospitals today. The studying these systems were conducted in order to gain insight in the practice of wireless patient monitoring today, as well as giving us an indication of how prepared hospitals are for WBANs from a infrastructural point of view.

System architecture:

The Philips IntelliVue telemetry system is a complete end-to-end system enabling wireless monitoring of ECG data. For the medical practitioners the system is composed of two components: the TRx4841/51A wireless transceivers and the IntelliVue Information Centre. The TRx transceivers are devices for capturing ECG and SpO2 on adult and pediatric patients, and are worn by the patients. Powered by two AA batteries they stream the captured data to a custom 802.11 type router operating in the 2,4 GHz spectrum. Because Philips provide all hardware in this \"closed loop\" system, the telemetry system does not have to confine to the interoperability requirements it would needed if the system were to allow for proprietary sensors and measuring devices. The wireless interface does not strictly follow the 802.11 specification, and the system offer a \"Smart Hopping\" technology in order to reduce collisions on the already crowded 2,4 GHz network band. This is made possible by synchronizing all access points. Another noteworthy network feature is the \"make before break\" method that improves the roaming abilities. The TRx transceivers will look for new, stronger access points when they detect a decay in signal strength with the current AP. The system will make sure to connect transceivers to the new (stronger) AP before breaking with the previous one, enabling a more reliable handoff between access points.

As mentioned, this being a end to end system the IntelliVue patient monitoring suite includes transceivers, bedside monitors, access points, routers, gateways, network switches, uninterruptible power supplies (UPS), processing units and databases and a optional printer [FIG][intellivue_telemetry_architecture].

Offering every piece in this architecture enables Philips and its local distributers/providers to guarantee good QoS metrics which is essential for wireless patient monitoring applications. However, installing a complete system like this comes with a substantial cost, and ties you down to just one provider for an extended period of time. The IntelliVue Telemetry system at St. Olavs was installed in 2009, and is expected to have a lifespan of at least 10 years [9]. This reduces the flexibility and increases the need for interoperability and good integrations with other systems. An example of this lack of flexibility can be found in the installation of the CorPulse ECG device from Alere. This is a device installed in emergency vehicles enabling pre-hospital ECG to be sent via a SIM card and the 3G network. This is often critical information that enable the medical staff to make informed decisions before the patient arrives at the hospital. Because this is a different system from a different provider, the hospitals we visited had installed a stand alone computer next to the information center system from Philips, that displayed the pre-hospital ECG from the Alere device. This is suboptimal not only in technical terms and with regards to maintenance, but also from a user experience point of view. The lack of integrations become yet another technical obstacle in the everyday life of medical practitioners, and ways around the barriers are found. As seen (although censored) in fig. [FIG][bilde_av_alere_ecg], credentials are often shared as a result of this, rendering the security measure useless. Based on these observations, we believe interoperable devices and services will be crucial for the success of a ubiquitous health care.

The transceivers and noise.
Although the IntelliVue wireless transceivers provide ambulatory and bedside patient monitoring, this can be a bit misleading. The system offer indeed patients the freedom of movement, but the ECG output can be heavily distorted by movement, as we saw for us self while surveying the hospitals. Accurate, unobtrusive and noise resilient sensors like the ones in [CITE][2007 EEG/ECG sensor], will be an absolute necessity in persuasive patient monitoring. Unlike multimedia streams, a physiological data stream cannot be buffered to mask jitter and latency on the receiving end. End to end latency will therefore be experienced as gaps in the monitoring stream, thereby invalidating the purpose of the system.

SIDENOTE: 
It's worth noting however that a decision support system based on data mining would usually not have the same real-time requirements and would not suffer from potential latency.


The information center
In addition, the information center provide a web view for accessing the patient data from outside the monitoring central. According to the service manuals they claim that the information displayed in the web view should be near-real time with little delay, but recommend users to always use the bedside monitor or the information center for real-time monitoring. We were unable to find a accurate metric for the end-to-end latency in IntelliVue's documentation. However, because the providers have full control over the whole infrastructure and the distances at a hospital are relatively small, it is reasonable to assume this delay is less than 2 seconds from the measurement to the information center.

An alternative approach to getting information about acceptable transmission delay would be to measure the actual network traffic in the systems deployed today. However, we were unsuccessful in getting in touch with the network administrator at either hospitals.

Information on transmission delay is also scarce in the literature we reviewed. Within the field of WBAN very few address this issue, and and we had to look into Telemedicine in order to find any suggestions to end to end latency at all. Through clinical trails, Alesanco and Garcia suggest 4 seconds as the maximum acceptable delay for a reliable real-time ECG transmission. Their research however is concerned with telemedicine over 2G/3G networks, and the intended use and QoS are different.

# Literature Review


Open with how we searched for literature: What were the keywords? How was the approach? Write some sentences about how this is a active research field with changing technology. What years were we looking for?

## Electrocardiogram


Electrocardiogram is a measurement of the electrical activity produced by the muscles around the heart. The measurements are done 





---





## Problem statement: elaborated

					

### On intended use

I paid several visits to both St. Olavs and Vestre Viken HF in order to observe and talk to experts in the domain of patient monitoring. Karl Øyri made it clear that I had to consider the *intended use* for my artifact. However convenient, monitoring ambulatory patients is merely an action following an an intention, not the goal in itself. As mentioned, many before me have taken the rather deterministic approach of looking at the technology and claiming it will revolutionize health care because of its properties and possibilities. Therefore we must ask the question, for what patient profile are we solving the problem? What use cases? What is the intended use?

At Vestre Viken a centralized monitoring station similar to the one I visited at St. Olavs was located at the intensive care unit. In addition to patients located in the ICU, they also monitored patients in other parts of the hospital connected via telemetry. Both the local and the remote patients were connected to a 5 lead (EASI) ECG setup. If there was something suspicious with the readings on the screen, both the ICU and the unit with the remote patients had several standalone 12-lead ECG units that could be connected to the patient on request. Through a demonstration, I was shown how a patient was connected to the standalone ECG device with 10 electrodes in order to get the full 12-lead resolution. This device was mobile (on wheels) and had the form factor of a small laptop computer. It was standalone in the sense that it's only output was a printed exert from the examination as shown in Fig. [FIGURE][FIGURE_PAPPA_ECG_PRINT] from a built in printer. We also visited two other medical units at the same hospital that did ECG monitoring. Both of which used a 3-lead setup. This stands to show that at Vestre Viken, 3 and 5-lead setups are most used in continuous monitoring. The full 12-lead was only used in short examinations on demand. This practice was also confirmed at the Clinic of Cardiology at St. Olavs.

Based on these observations, the intended use of the artifact should be similar to the role played by telemetry systems today. These systems are used for monitoring patients that are expected to experience, or are vulnerable to, heart defects either pre or post surgery, or during treatment. See table [10] for a description of the most common irregularities and how they are identified. Because irregularities can happen at any time of the day, continuous monitoring is a fundamental requirement to the artifact.

SIDENOTE: Through conversations with a doctor it became clear that that the prevalence of heart abnormalities of medical interest was likely to happen during physically straining activities like walking stairs etc. However, this could also be happening while resting, as confirmed by an patient who experienced irregular heart beats (cardiac arrhythmia) while sleeping.




## Requirements


						

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

# Proposed Design


										
## Introduction 

Here I will introduce the different components of my proposed design.

in order to assess the feasibility of introducing low energy wireless sensors for data collection. We will investigate how these capability requirements can be addressed experimentally for a set of use cases.

In order to assess the feasibility of introducing low energy wireless sensors in a patient monitoring setting, our artifact takes the form of a test bed that can be used to address the capability requirements of patient monitoring experimentally. According to the four types of artifacts in design science [14], our artifact was intended to be of the model type. A model can be used for supporting the construction of other artifacts, and hopefully our model can be reused by later projects. The artifact consist of a few different components defined as:

- Node: A node is the sensory device that does one or more physiological measurements and communicates it wirelessly to either another node or to a sink in the WBAN. In order to achieve wearability the nodes has to be as small as possible. Batteries are often the largest part of today’s sensory nodes and the biggest energy consumer is typically the antenna [15].
- WBAN: Multiple nodes connected together constitute the wireless body area network (WBAN). The network topology of these vary depending on the communication protocol between the nodes, but they are typically organized as single hop stars, or multi-hop mesh networks [16]. Desirable qualities in a WBAN is a low energy PHY layer, and a flexible MAC protocol capable of doing smart routing and the ability to be self organizing [17] [18].
- Smart device/Gateway: In earlier research this tier in the patient monitoring stack is often called a personal server (PS). This can be anything from a smart phone, with a graphical user interface to just a sink in the WBAN with a larger battery. Because of the low energy consumption of the nodes, you typically need  to facilitate communication between the WBAN and the gateway with some device that has more battery capacity, a stronger antenna and that is easier to replace on a frequent basis. 
- Boarder router: The border router can be categorized as a end node in a network providing access network access for proprietary devices through one or more networking interfaces. Based on the network configuration and overall architecture of the monitoring system this router may have different responsibilities. A smart-gateway can for example provide additional services specialized for sensory data. These services can include but are not limited to local caching, pre-processing and on-demand-processing, WBAN discovery, localization and more [19].
- HIS: Hospital information system. This is a common term for the various types of information systems at hospitals. The way these are implemented and used varies from across borders, regions, and even between different departments within the same hospital. [20]. Because of this invariance in systems and practice, interoperability across communication protocols and data formats is of most importance.

## Structure and Architecture

Briefly discuss the architecture of my proposed design based on both chapter 3 (literature review) and 4 (interviews).

### Interoperability

Here I will briefly discuss interoperability formats such as HL7 and DICOM ECG, their overhead and suggest how to ensure interoperability in a future of fragmented HISes.

Answer the following: At what point should the data be packaged in a compatible format? As with the case with Bluetooth, the overhead of the file format is too big. I must address this issue and suggest how to ensure interoperability between sensor nodes and gateways.

In this section it is possible to address processing and storing data for temporal abstraction and analysis. 

## Design alternatives

<!-- One possible configuration could be wiring up a patient with 10 electrodes, but only having 3 of them activated at a time. Further, one would need to calculate the trade off between doing the ECG analysis onboard the chip versus streaming the data continuously to a WBAN gateway. Either way, the central monitoring station would get notified when abnormalities happened. If the signals were fuzzy, or the doctor demanded higher resolution{1} the remaining 7 electrodes could be activated resulting in a 12-lead ECG. This would match the existing practice of doing low resolution monitoring, and getting details on demand. -->

## Hardware

In this section I will discuss the different hardware alternatives we have in terms of developing Bluetooth Smart enabled applications. Main focus will be Texas Instruments (with CC2541 BLE + ADS1293 ECG front end) and Nordic with their nRF51822 BLE chip.

Here I must assess Texas Instruments' reference design, and discuss how it influenced my final design.

## Software

In this section I will briefly name the different operating systems for embedded systems. And what considerations was done when I selected platform for my proposed design.

---

# Evaluation

				
> Brief introduction to how the artifact was evaluated and validated


## Baseline functional tests


**EX01: Battery**
Måle batteriforbruk opp mot transmission rate. Hva er maks, hva er min og hva er best?

- Hypotese: Man kan strømme data fra en BLE tag til mobil og opprettholde et praktisk batteriforbruk. Alt: Et batteriforbruk som er lavere enn dagens løsninger (24-48 timer).
- Utstyr: BLE enhet og Android-mobil.
- Metode: Ha et program som sender en jevn strøm med data (utganspunktet basert på estimater fra andre prosjekter) og måle batteriforbruket. Ta imot data både fra strøm og fra batteri-meldinger.


**EX02 - End-to-end latency**
Sier noe om hvor fort man kan få beskjed dersom noe er galt. Test først på lokalt nett.

- Hypotese:
- Utstyr:
- Metode:



**EX03 Range**
- Avstand mellom brikke og mobil gateway: 
	- Ligge i seng (stille, åpent rom)
	- Gå rundt i rom (bevegelse, åpent rom)
	- Gå på badet (stille, gjennom vegg && bevegelse, gjennom vegg).
	

## Further functional tests

**EX04 - Finne praktisk begrensning på overføringshastighet**
Hypotese: BLE er egnet for å strømme raw EKG-data.
Utstyr: En pc, BLE tag og en Android smarttelefon.
Metode: Simulere EKG-data på BLE tag ved hjelp av software. Motta EKG-strøm over BT på smarttelefon og lagre strømmen til en loggfil.

Kontroll: Kjøre samme programvare på pc og lagre logg lokalt. Sammenlign data fra de to loggfilene.


**EX05 - Finne maks batterikapasitet**
Kjøre programmet fra ekspriment 1

# Discussion

							

## Healthcare 3.0

In recent years we have seen an increased effort made by both big and small actors in the technology industry in trying to commercialize health technology. They offer devices that track and monitor activity, sleep and physical traits like weight and glucose levels to name a few [[21], [22]]. Some suggest that having more information about our health and bodies might shift the entire model of medical care; that we are now at the brink of a structural change, from a reactive to a proactive healthcare [[23], [24], [25],[26]].

One of the key players in this structural change is an affordable but rigid monitoring system that offer consumers as well as physicians good user experiences, reliable and continuous data, as well as appropriate security measures to keep the highly sensitive health information private. 

Traditionally, monitoring vital signs has been conducted only on patients in given situations or with special needs for monitoring. With sensory equipment being more affordable, it is reasonable to believe that we will be more scarce from not recording such physiological data. This data might help us understand the bigger picture of both individual and our collective health.

One drawback with the traditional medical monitoring systems like a Holter monitor [27], is that they have only been used to collect data. Data processing and analysis is done offline, and the devices often have to be sent to the manufacturer, using days or weeks before the results return [28].

What we need is a low cost, wearable, wireless system for monitoring physiological health information (PHI). This system must offer both patients and physicians the same services and level of quality they get from existing monitoring systems, but with an improved user experience and security measures to match the expectations users have from modern  consumer products. 
# Conclusion


[fastco]:http:[helsit_kari]:http:[johnmaeda]:http:[lynnechou]:http:[holter]:http:[fitbit]:https:[fitbit_scale]:https:[ziopatch]:http:[cosytech]: http:[bachelor_thesis]: My bachelor thesis
[WPP2015_Methodology.pdf]: http:

[ds_bok1]:design science boka den lille
[article_comprehensiveStudy]: A comprehensive study
[article_2013selforganizingMAC]: artikkel på skrivebordet
[2009MACprotocolcomparison]: artikkel i mappen
[inett_helsedir_medtek_utstyr]: https:[inet_hl7]:https:
[ecg_ambulatory_noise]: http:
[patient_monitoring_history]:{\"source\":\"PMC\",\"accessed\":{\"date-parts\":[[2016,4,20]]},\"id\":\"aiid:2467176\",\"title\":\"The aim and philosophy of patient monitoring\",\"author\":[{\"family\":\"Stewart\",\"given\":\"J. S. S.\"}],\"container-title-short\":\"Postgrad Med J\",\"container-title\":\"Postgraduate Medical Journal\",\"ISSN\":\"0032-5473\",\"issued\":{\"date-parts\":[[1970,6]]},\"page\":\"339-343\",\"volume\":\"46\",\"issue\":\"536\",\"PMID\":\"4920275\",\"PMCID\":\"PMC2467176\",\"type\":\"article-journal\"}

---


### Kan brukes:

**thesis som beskriver personvern:**

[2014_Privacy_preserving_Big_Data_Analytics]: Se artikkel
[2014_ARX_A_Comprehensive_Tool_for_Anonymizing_Biomedical_Data]: Se artikkel