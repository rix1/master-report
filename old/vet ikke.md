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
