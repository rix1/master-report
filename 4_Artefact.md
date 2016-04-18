// Chapter 4: Artefact

### Artefact

	[-] Describe artefact
	[-] Explain the structure, behaviour and function, preferably with examples.
	[-] Describe the development process, including:
		[-] Design alternatives
		[-] Design rationale
		[-] Knowledge base used.

	(This is often the main part of a research paper)


As we aim to develop a versatile solution to the problem of ambulatory patient monitoring, our artefact will be of the type `model` according to the four types of artefacts in design science [1][ds_bok1]. A model can be used for supporting the construction of other artefacts, and hopefully our model can be reused by later projects. The artefact consist of a few different components defined as:

- **Node**: A node is the sensory device that does one or more physiological measurements and communicates it wirelessly to either another node or to a sink. In order to achieve wearability the nodes has to be as small as possible. Batteries are often the largest part of today’s sensory nodes and the biggest energy consumer is typically the antenna [1][article_comprehensiveStudy]. Energy consumption is typically reduced by using a low energy, short range radio antenna. 
- **WBAN**: Multiple nodes connected together constitute the wireless body area network (WBAN). The network topology of these vary depending on the communication protocol between the nodes, but they are typically organised as single hop stars, or multi-hop mesh networks. Desirable qualities in a WBAN is a low energy PHY layer, and a flexible MAC protocol capable of doing smart routing and the ability to be self organising [1][article_2013selforganizingMAC] [1][2009MACprotocolcomparison].
- **Smart device**: In earlier research this tier in the patient monitoring stack is often called a personal server (PS). This can be anything from a smart phone, with a graphical user interface to just a sink in the WBAN with a larger battery. Because of the low energy consumption of the nodes, you typically need  to facilitate communication between the WBAN and the gateway with some device that has more battery capacity, a stronger antenna and that is easier to replace on a frequent basis. 
- **Gateway**: This can either act  as a traditional network gateway or as a smart-gateway. The traditional gateway can be categorised as node in one network (hospital or home) providing access to the network through one or more networking interfaces, like a wireless router. A smart-gateway can provide additional services specialised for sensory data. These services can include but are not limited to local caching, pre-processing and on-demand-processing, WBAN discovery and localisation and more.
- **HIS**: Hospital information system. This is a common term for the various types of information systems at hospitals. The way these are implemented and used varies from across borders, regions, and even between different departments within the same hospital. [1][inteervju_heidi2013]. Because of this invariance in systems and practice, interoperability across communication protocols and data formats is of most importance.

**SIDENOTE: IoT Gateways**
It is claimed that the internet of things has a gateway problem [1][2015_The_Internet_of_Things_Has_a_Gateway_Problem]. This is an interesting topic that is worth discussing shortly. In their 2015 article, Zachariah et al. illustrates how the coming coming wave of IoT devices does not enjoy the same level of ubiquitous and universal access to the Internet as WIFI and cellular network enabled devices. The point is valid; for a BLE enabled device today to connect to internet these devices require an application layer gateway, that is able to translate data from the energy-efficient link to the Internet. There are however, much resources being put into creating new protocols, schemes and additions to existing standards in order to create this ubiquitous experience. Both IPv6 over BLE and  

there is a difference between low-power and low-energy

How does 6LoPAN

## Structure and Architecture

> ANSWER: What is the most versatile architecture for widespread deployment of WBANs in Norwegian hospitals? What wireless infrastructure is currently available at hospitals?


## Design alternatives

> ANSWER: What are good design guidelines when developing artefacts for health care?


