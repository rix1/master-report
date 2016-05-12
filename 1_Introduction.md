// Chapter 1: Introduction

# Introduction

	// Introduction to the area the study is situated

During the last couple of years there has been a significant increase in the number of connected devices. Hardware is getting cheaper and smaller, and the demand for information is growing. Economic prosperity, aging population, the growing middle income population and sensitive public policy are key demand drivers for better healthcare and infrastructure. In addition, we are expecting a population growth of 4 billion within the next 90 years [CITE][WPP2015_Methodology.pdf]. In order to facilitate these changes, we need infrastructure that is cost effective, sustainable and scales well.

How the healthcare adapts in this time of change will have a major impact on how this expected population growth impact our societies. Today, one of the most radical changes to our current practices is likely to come from the prevalence of new sensory technology, measuring tools and techniques, and what we manage to do with the data collected from these sensors. These sensors may take many forms, but have a set of common qualities; they’re small, energy effective and operate with one or more wireless technologies.

One possible orchestration of these sensors are in a wireless body area network, or WBAN for short. This is a collective term for wireless networks situated inside, on or around the human body. The term originated around 1995 with the idea applying wireless personal area networks (WPAN) technology to on, or in-body devices [CITE][2010 Implementation of wireless body area networks for healthcare systems]. This means entire systems of devices communicating with each other in immediate proximity of a human body. Researchers have the past 20 years investigated applications, optimizations and possibilities of WBANs. The technology however, has until recent years not been small enough nor energy efficient enough for networks like these to be practically feasible for patient monitoring.

Electronic patient monitoring is today an established practice at modern hospitals. It involves *repeated or continuous observations or measurements of patients, their physiological functions, and the function of the life support equipment* [CITE][Hudson L. Respir. Care 1985; 30: 638 ff]. A monitoring system that affords good management decisions, can only be created by studying and finding the optimal compromise between several design factors; clinical, engineering and economic [CITE][1970 The aim and philosophy of patient monitoring]. Because of this multidisciplinary nature, we use the following definition throughout this thesis:

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

	// summarise existing research
		// Knowledge gaps
		// research questions or goals
		// Describe similar solutions to the problem
	
	// What is done earlier to address this problem?
	// What is wrong with earlier research?
	
	// Purpose:
		- What is wrong with earlier research?
		- Clearly defined research questions
	

Patient monitoring has been practiced for decades. Zimmerman popularized the term PAN in 2001, which later that year was modified to body area network (BAN) in order to describe network enabled devices communication on in and near the body.

// TK Summarize the most best/important articles you read


### Contributions of the thesis

	// "Describe the outcomes of research, especially your contribution to knowledge about your subject area. Your contribution can be an answer to your original research question( s) but can also include unexpected findings. For example, you and the academic community might learn something about a particular research strategy as a result of your research 	
	// Types of research products: 1) new or improved evidence; 2) new or improved methodology; 3) new 	or improved analysis; 4) new or improved concepts or theories; 5) new or improved computer-based product.	
	// What will be your research contribution? Which of the four types above?
	// How and why will it be better than earlier contributions?

// TK Who was my main data sources and contributors? How did they participate in this project? Mention the most influential people I've talked with.

### Structure
