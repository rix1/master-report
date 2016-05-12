"# Proposed Design


\t\t\t\t\t\t\t\t\t\t
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

\t\t\t\t
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
\t- Ligge i seng (stille, åpent rom)
\t- Gå rundt i rom (bevegelse, åpent rom)
\t- Gå på badet (stille, gjennom vegg && bevegelse, gjennom vegg).
\t

## Further functional tests

**EX04 - Finne praktisk begrensning på overføringshastighet**
Hypotese: BLE er egnet for å strømme raw EKG-data.
Utstyr: En pc, BLE tag og en Android smarttelefon.
Metode: Simulere EKG-data på BLE tag ved hjelp av software. Motta EKG-strøm over BT på smarttelefon og lagre strømmen til en loggfil.

Kontroll: Kjøre samme programvare på pc og lagre logg lokalt. Sammenlign data fra de to loggfilene.


**EX05 - Finne maks batterikapasitet**
Kjøre programmet fra ekspriment 1"