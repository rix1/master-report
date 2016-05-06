// Chapter 5: Evaluation


# Evaluation

	// Describe how the artefact has been evaluated.
	// Describe evaluation strategy and process:
		// How the selected research strategies and methods were applied.


> Brief introduction to how the artifact was evaluated and validated


## Baseline functional tests

// *Fundamentale egenskaper som vil guide og sette begrensninger på videre tester og implementasjon.*

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