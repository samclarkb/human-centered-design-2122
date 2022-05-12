# :computer: Human centered design

## Table of Contents 
* [Assesment](https://github.com/samclarkb/human-centered-design-2122#books-assessment)
* [User scenario](https://github.com/samclarkb/human-centered-design-2122#bicyclist-User-scenario)
* [Concept](https://github.com/samclarkb/human-centered-design-2122#bulb-concept)
* [Process](https://github.com/samclarkb/human-centered-design-2122#chart_with_upwards_trend-process)
* [Exclusive design principles](https://github.com/samclarkb/human-centered-design-2122#art-Exclusive-design-principles)
* [Test summary](https://github.com/samclarkb/human-centered-design-2122#clipboard-Test-summary)
* [Wishlist](https://github.com/samclarkb/human-centered-design-2122#memo-wishlist)
* [Installation](https://github.com/samclarkb/human-centered-design-2122#wrench-installation)
* [Recources](https://github.com/samclarkb/human-centered-design-2122#mag_right-recources)
* [License](https://github.com/samclarkb/human-centered-design-2122#bookmark-license)

## :books: Assesment 
Voor dit vak krijg je een ontwerp-opdracht die je gaat maken voor 1 mens. Een echt mens. Je moet je ontwerp 3 keer testen. Door te testen en te itereren ga je je ontwerp verbeteren. Uiteindelijk heb je een ontwerp dat exclusief gemaakt is voor 1 persoon. Een exclusive design ... Wie is deze persoon dan voor wie je dit gaat maken? Wat vindt deze persoon leuk of juist niet? En hoe bedient deze persoon een computer?

**Rubric:** 

<img src='https://github.com/samclarkb/human-centered-design-2122/blob/main/images/rubric.png' width='750px' />

## :bicyclist: User scenario

**Who?**

Larissa is blind. Ze maakt gebruik een screenreader. Je snapt dat heel veel van de gangbare design patterns niet optimaal werken voor haar omdat ze 100% vanuit een visueel oogpunt ontworpen zijn. Larissa is student aan de HvA. En daarnaast is ze topsporter. Ze heeft laatst een gouden medaille gewonnen op de olympische spelen. Daarnaast is Larissa een super vrolijke meid die altijd in is voor een dolletje. Ze is niet de typische topsporter die alles opgeeft voor haar sport, 'als Larissa geen zin heeft om te trainen, dan doet ze dat ook niet'. Larissa is niet volledig blind, dus ze kan contrast wel herkennen. oranje is haar lievelingskleur.

**What?**

Omdat Larissa alleen maar gebruikt maakt van een laptop/computer met een screenreader, is het van uiterst belang dat de applicatie screenreader vriendelijk is. Het is vooral belangrijk dat je naar ieder element kan navigeren met de tab toets. Ik heb een applicatie voor Larissa gemaakt waar zij na afloop van een training kan invullen wat zij die training heeft gedaan. Buiten het invullen, kan Larissa haar trainingsresultaten op een later moment invullen.

**How?**

Larissa gaf aan haar trainingen op haar laptop te bekijken, dus het design moet een focus hebben op desktop. Ik schrijf de applicatie met HTML, CSS en Javascript. Daarnaast heb ik de applicatie drie keer getest samen met Larissa om het product te optimaliseren naar de wensen van Larissa

**Why?**

Alle topwielrenners krijgen om de zoveel tijd een Excel sheet toegestuurd waarin alle trainingsschema’s staan. Dit is een uitgebreid, complex ding. En hij is *colour coded*. Je moet dus kunnen zien om hem te kunnen gebruiken. Dat kunnen jullie beter. Dus. Ontwerp een oplossing waardoor Larissa op een prettige en manier de relevante data kan gebruiken. 

Larissa gebruikt alleen geen excel sheets voor haar trainingen. Larissa traint een beetje op gevoel en bind zich niet vast aan trainingschema's. Mocht zij zichzelf een dag geen zin hebben in een baantraining, dan doet ze dit ook niet. Daarom is het voor Larissa van belang dat zij na afloop kan ivullen wat zij tijdens een training heeft gedaan.



## :bulb: Concept
De applicatie stelt Larissa in staat om trainingsresultaten na afloop van een training in te vullen. Ook kan ze haar ingevoerde trainingsresultaten op een later moment bekeijken. De applicatie is specifiek gemaakt voor Larissa en daarom is de applicatie voice over/screenreader vriendelijk. Dit houdt in dat Larissa op ieder element kan tabben en er rekening is gehouden met semantiek. Daarnaast is er rekening gehouden met de vier exclusive design principles (study situation, prioritise identity, ignore conventions, add nonsense). Deze worden later in de Read.me toegelicht.
 
**Home pagina:**

Wanneer larissa de app opent krijgt Larissa twee opties. Ze kan ervoor kiezen om gelijk naar een speciefieke datum te navigeren. Of ze kiest ervoor om eerst naar een specifieke maand te navigeren om vanuit daar naar een speciefieke datum te navigeren.

<img src='https://github.com/samclarkb/human-centered-design-2122/blob/main/images/Gif1.gif' width='750px' />

**Maand pagina:**

Op deze pagina kan Larissa naar een specifieke dag navigeren. De tabel is zo geprogrammeerd dat de screenreader verteld op welke dag Larissa zich bevindt. Dus wanneer Larissa 12 mei heeft geselcteerd, krijgt ze ook te horen dat deze dag op een dinsdag valt.

<img src='https://github.com/samclarkb/human-centered-design-2122/blob/main/images/Gif2.gif' width='750px' />

**Dag pagina:**

Op deze pagina kan Larissa haar trainingsresultaten invullen. Wanneer zij deze heeft ingevuld, krijgt zij aan de hand van hoeveel characters ze heeft ingevuld een berichtje te horen. Als zij minder dan 75 characters heeft ingevuld krijgt ze bijvoorbeeld 'Larissa, je had deze dag beter thuis kunnen blijven' te horen. De ingevoerde tekst wordt vervolgens ook weergegeven onder de textarea.

<img src='https://github.com/samclarkb/human-centered-design-2122/blob/main/images/Gif3.gif' width='750px' />

## :chart_with_upwards_trend: Process

geinteresseerd in mijn proces tijdens het maken van dit project? klik [hier](https://github.com/samclarkb/human-centered-design-2122/wiki/Process)!

## :art: Exclusive design principles
Hier een overzicht van de exclusive design principles en hoe ik deze heb toegepast.

<details>

 <summary> Study situation 🧠 </summary> 
 Ik heb verschillende dingen gedaan om Larissa zo goed mogelijk te begrijpen. Ten eerste heb ik mijn applicatie drie keer met Larissa mogen testen. Deze testen hebben mij veel bijgebracht over hoe mensen het web gebruiken met een screenreader/voice over: Semantiek binnen code is erg belangrijk voor blinde/slecht ziende mensen, je moet de gebruiker meer context geven door middel van tekst, omdat ze niks kunnen zien. Ik ben applicaties zelf ook gaan gebruiken met voice over. Dit heeft mij ook geholpen met het optimaliseren van de app.
 

</details>

<details>

 <summary> Prioritise identity 🚴 </summary> 
 Larissa gaf aan dat Oranje haar lievelingskleur is, dus heb ik er zoveel mogelijk oranje in verwerkt. Ook gaf Larissa aan een zwarte achtergrond te willen hebben in plaats van de gebruikelijke witte achtergrond. Larissa is een vrolijke dame met erg veel humor. Ze verteld ook vaak over hoe laks zij is als het aankomt op trainen. Larissa is niet de typische topsporter. Hierom heb ik een functie geschreven die op basis van de intensiteit van een training, een bericht weergeeft. Zo krijgt Larissa dit te horen wanneer zij minder dan 75 characters in de textarea invoerd: 'Larissa, je had deze dag beter thuis kunnen blijven'. Ik begin iedere pagina met Larissa,

</details>

<details>

 <summary> Ignore conventions :metal:  </summary> 
 
Vanwege de slecht functionerende ogen van Larissa heb ik de knoppen uit proportie groot gemaakt. Larissa ziet  voor een paar procent en ze vind het leuk als zij het scherm ziet veranderen. Dit is ook de reden waarom ik gebruik heb gemaakt van zo'n groot contrast. Op ieder element heb ik een tabindex van 0 toegepast. Dit zorgt ervoor dat je naar ieder element kan navigeren door gebruik te maken van de tab toets. Dit is niet gebruikelijk, maar omdat Larissa voornamelijk gebruik maakt van de tab toets, heb ik dit toegepast. Buiten de knoppen is ook de textera en het lettertype uit proportie groot.

</details>

<details>

 <summary> Add nonsense :stuck_out_tongue_winking_eye:</summary> 
 
Op de pagina waar Larissa de resultaten van haar training invoerd heb ik redelijk wat nonsense toegevoegd. Ik heb een sterrenlucht met vuurwerk als achtergrond gebruikt. Voor de meeste mensen wordt dit hoogstwaarschijnlijk als irritant ervaren, maar Larissa gaf aan dat ze het leuk vond dat dit scherm anders was ten opzichte van de andere schermen.
 
</details>

## :clipboard: Test summary
De testen met Larissa gingen eigenlijk erg goed. We leren op CMD om tijdens een test  gewoon je mond te houden en de testpersoon lekker laten 'kloten' met de applicatie. Gelukkig is Larissa niet op haar mondje gevallen en uit ze zo'n beetje alles wat ze tegen komt. Dit is erg bevorderlijk voor het testen. Ik ben wel echt tot de conclusie gekomen dat wanneer je geen instructies geeft aan de testpersoon de test het best verloopt. Misschien niet het best als in vloeiend, maar ik merk wel dat er op deze manier er de meeste bevindingen naar boven komen. Dit neem ik zeker mee naar eventuele volgende keren dat ik een applicatie ga testen. 

**Do's:**
- Korte introductie
- Mond houden tijdens het testen
- Gelijk aantekeingen maken
- Filmen/opnemen mits je goedkeruing hebt gevraagd

**Dont's**
- Lange introductie
- De testpersoon helpen tijdens het gebruik van de app
- Geen notities maken (je gaat dingen vergeten als je dit doet)
- Bepaalde gedeeltes van de app niet testen, omdat je denkt dat het nog niet voldoende ontwikkeld is

## :memo: Wishlist
Er zijn een paar dingen waar ik niet aan toe ben gekomen, maar graag had willen doen:
* Real data gebruiken/dynamische routes gebruiken
* De voice over tekst op een andere manier iets laten zeggen, bijvoorbeeld schreeuwend

## :wrench: Installation

Mocht je er zelf wat aan toe willen voegen, neem vooral je tijd! 

``` git clone https://github.com/samclarkb/browser-technologies-2122.git ```

## :mag_right: Recources 
- Göransson, D. (2019). What is a screen reader? What is a screen reader? https://axesslab.com/what-is-a-screen-reader/
- Van Gemert, V. (2022). Exclusive Design Principles. Exclusive Design Principles. https://exclusive-design.vasilis.nl/principles/
- Watson, L. [Leonie Watson]. (2020, 28 september). How screen readers navigate data tables [Video]. YouTube. https://www.youtube.com/watch?v=X1KR4u94cho

## :bookmark: License 
Copyright (c) 2021 Sam Clark Boot, [MIT](https://github.com/samclarkb/human-centered-design-2122/blob/main/LICENSE)



