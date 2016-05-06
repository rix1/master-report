# Interviews

	// Describe artefact
	// Explain the structure, behaviour and function, preferably with examples.
	// Describe the development process, including:
		// Design alternatives
		// Design rationale
		// Knowledge base used.
	// (This is often the main part of a research thesis)

in order to assess the feasibility of introducing low energy wireless sensors for data collection. We will investigate how these capability requirements can be addressed experimentally for a set of use cases.

In order to assess the feasibility of introducing low energy wireless sensors in a patient monitoring setting, our artifact takes the form of a test bed that can be used to address the capability requirements of patient monitoring experimentally. According to the four types of artifacts in design science [CITE][ds_bok1], our artifact was intended to be of the model type. A model can be used for supporting the construction of other artifacts, and hopefully our model can be reused by later projects. The artifact consist of a few different components defined as:

- Node: A node is the sensory device that does one or more physiological measurements and communicates it wirelessly to either another node or to a sink in the WBAN. In order to achieve wearability the nodes has to be as small as possible. Batteries are often the largest part of today’s sensory nodes and the biggest energy consumer is typically the antenna [CITE][article_comprehensiveStudy].
- WBAN: Multiple nodes connected together constitute the wireless body area network (WBAN). The network topology of these vary depending on the communication protocol between the nodes, but they are typically organized as single hop stars, or multi-hop mesh networks [CITE][2010 Support Mobility in HWSN 6LoWPAN]. Desirable qualities in a WBAN is a low energy PHY layer, and a flexible MAC protocol capable of doing smart routing and the ability to be self organizing [CITE][article_2013selforganizingMAC] [CITE][2009MACprotocolcomparison].
- Smart device/Gateway: In earlier research this tier in the patient monitoring stack is often called a personal server (PS). This can be anything from a smart phone, with a graphical user interface to just a sink in the WBAN with a larger battery. Because of the low energy consumption of the nodes, you typically need  to facilitate communication between the WBAN and the gateway with some device that has more battery capacity, a stronger antenna and that is easier to replace on a frequent basis. 
- Boarder router: The border router can be categorized as a end node in a network providing access network access for proprietary devices through one or more networking interfaces. Based on the network configuration and overall architecture of the monitoring system this router may have different responsibilities. A smart-gateway can for example provide additional services specialized for sensory data. These services can include but are not limited to local caching, pre-processing and on-demand-processing, WBAN discovery, localization and more [CITE][2015 IoT u-healthcare Finnland].
- HIS: Hospital information system. This is a common term for the various types of information systems at hospitals. The way these are implemented and used varies from across borders, regions, and even between different departments within the same hospital. [CITE][inteervju_heidi2013]. Because of this invariance in systems and practice, interoperability across communication protocols and data formats is of most importance.

## Structure and Architecture

// ANSWER: What is the most versatile architecture for widespread deployment of WBANs in Norwegian hospitals? What wireless infrastructure is currently available at hospitals?


## Design alternatives

// ANSWER: What are good design guidelines when developing artifacts for health care?

One possible configuration could be wiring up a patient with 10 electrodes, but only having 3 of them activated at a time. Further, one would need to calculate the trade off between doing the ECG analysis onboard the chip versus streaming the data continuously to a WBAN gateway. Either way, the central monitoring station would get notified when abnormalities happened. If the signals were fuzzy, or the doctor demanded higher resolution{1} the remaining 7 electrodes could be activated resulting in a 12-lead ECG. This would match the existing practice of doing low resolution monitoring, and getting details on demand.



