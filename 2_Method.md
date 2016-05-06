# Method

	// Overview of research strategies and methods that have been used
	// Justification for the methods.
	// Summaries the contributions of the thesis ,
	// outlines the significance of these contributions
	// describe the structure of the remainder of the thesis.
	
	---
	
	// Purpose:
		- What is the problem? Whose problem is it? 2-3 refs that confirm this is relevant
		- What has been done to address the problem? No one has ever tested this wrt. BLE
		- What is wrong with earlier research?
		- Clearly defined research questions
	
Many have pointed out the need for cheaper wireless patient monitoring in both health and medical care. Some are prone to technological determinism and promote the need strictly based on technological advances [CITE][2006 System architecture WBAN u-health Otto]. They emphasize on the possible economic gains of utilizing cost effective and available technology do continuous health monitoring. As well as the medical gains the increased amount of data available promise to deliver. In this chapter we will survey existing research, and give a more in-depth presentation of the topics and domains involved in the multidisciplinary world of patient monitoring. This rest of the chapter is organized as follows: 

// Some focus only on in-hospital patients, while others have been researching remote patient monitoring outside the hospital. These different approaches ties into the development of the healthcare itself (Healthcare 3.0), which I will discuss further in Chapter 6.


### Identifying the Gap

Before literature surveys, we reached out to people in the industry. According to the mission statement and in line with the Design Science methodology, we wanted to identify a practical problem experienced when dealing with sensory equipment today. We talked to physicians and nurses dealing with ECG monitoring and telemetry. In some cases the department did not have the necessary telemetry equipment for monitoring ambulatory patients. Other times the task of installing the new equipment just so that the patient could take a walk was not carried out because there was no imminent risk of heart failure. In both cases the medical staff expressed discontent with this practice. "To see how a recovering heart reacts to physical movement post surgery could give valuable insight in how successful a surgery was. But today, the required administration needed to record such data stops us from getting this insight.", explained Dr. Eide of Kiel University Hospital.

### Patient Monitoring

// Invasive vs non-invasive techniques. Mention [CITE][2010 A comprehensive survey of WBAN] and in-body communication.

Continuous ECG is today captured on every patient in the post operative observation ward, as well as those in the intensive care unit. Less critical patients, that are located in other wards, may still be monitored if susceptible to heart defects. This is often done remotely through a telemetry system that wirelessly streams the captured data to a centralized observation post with 24/7 monitoring.


### ECG

SIDENOTE: When observing the telemetry readings I got to see for myself show sensitive the electrodes were to noise. One patient graph was suddenly extremely fuzzy and noisy. I was told this was normal and probably caused by movement like walking, scratching or something similar. Reducing this noise would of course be a major consideration when implementing a system that enables ambulatory monitoring [CITE][ecg_ambulatory_noise]

### Bluetooth


#### WBANs

SIDENOTE: IoT Gateways. It is claimed that the internet of things has a gateway problem [CITE][2015_The_Internet_of_Things_Has_a_Gateway_Problem]. This is an interesting topic that is worth discussing shortly. In their 2015 article, Zachariah et al. illustrates how the coming coming wave of IoT devices does not enjoy the same level of ubiquitous and universal access to the Internet as WIFI and cellular network enabled devices. The point is valid; for a BLE enabled device today to connect to internet these devices require an application layer gateway, that is able to translate data from the energy-efficient link to the Internet. There are however, much resources being put into creating new protocols, schemes and additions to existing standards in order to create this ubiquitous experience.
there is a difference between low-power and low-energy


### Existing research

	// summarise existing research
		// Knowledge gaps
		// research questions or goals
		// Describe similar solutions to the problem
	
	// What is done earlier to address this problem?
	// What is wrong with earlier research?

Patient monitoring has been practiced for decades. Zimmerman popularized the term PAN in 2001, which later that year was modified to body area network (BAN) in order to describe network enabled devices communication on in and near the body.

// TK Summarize the most best/important articles you read

## Research Strategies and Methods

	// Overview of research strategies and methods

// TK Talk about how we found the research questions. And what process this project is going to follow. Express shortcomings in previous research.

Like in any projects studying involving people and technology there is an inherent complexity that the researchers have to unravel in order to understand the forces that guide the socio-technical systems in front of them.

When studying these systems it is important to understand why and how an artifact works in it's environment, not only that it works. This is complete field of research in itself, and several approaches to achieving this insight have been proposed [CITE][TK Design thinking and others]. My approach was influenced by both the Design Science methodology, my personal experience and IBM's framework for Design Thinking: Observe > Reflect > Make.

// Link your methods up to what design science say about finding data in previous research and discuss why this approach was chosen over other strategies

// Here I write about how I approached the literature review. How I gathered requirements based on interviews and how I planned my experiments.


### Data collection and analysis

	// Overview of methods of data collection and data analysis that have been used.

// TK Talk about how the information gathering was conducted, and how I am going to validate my solution. Mention some considerations that will be important for the success of this project.

Other than literature reviews, we chose interviews as the main method for gathering information about the domain and existing practices. This was because a lot of knowledge is embedded in the people and practices of their every day routines. We used both unstructured and semi-structured interviews and with a focus on open questions. This way we were able to develop a understanding of how people viewed their work and how they interpreted the technology that was part of their everyday routines. This also made the research more flexible, and we were able to do interviews on a short notice, which enabled us to talk to people in their natural working environment. We took note of people's experience with, interpretations of, and reactions to the technical monitoring systems they had at hand. We observed what people said and did, and afterwards reflected over what they did not say or do. This way we were able to search for latent needs in the existing practices. In order to validate and confirm these observations, our approach involved comparing the practices and technology used at two different Norwegian hospitals, Vestre Viken HF and St. Olavs Hospital.

### Research Ethics

	// Discuss research ethics

Creativity plays a big role in the creation and development of any artifact, and creativity love accidents and surprises. However, safety allows no accidents and little surprises.

Due to the nature of this project, the research conducted has to take several precautions. Personal health information is considered highly sensitive, so security considerations must be included. Health care is also a safety critical environment and a faulty system can result in life-threatening situations.

// TK Some words about different considerations my project has to take, e.g. privacy etc. Should this be where I talk about usability? Considerations when researching hospital systems 

// TK write about design science, the different steps/processes. When developing, we experiment and try things out, but when in health you must consider minimize.