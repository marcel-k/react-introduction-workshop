- ~~1: beginnen met de layout in de app.js en app.css maken~~
- 2: componenten maken van footer en header en de ui ervan uitwerken (title, logo, copyright)


- 3: componenten maken van menu en content en de ui ervan uitwerken (lijst, content tekst, knopje register)


- 4:
  - maak van de register button ook een apart component.
  - maak een list component.
  - Maak search component.
  - Gebruik search en list in menu.


- 5: uitwerken list-item component. props. Eerst static listitems gebruiken in list.


- 6: List is een component die we willen hergebruiken. gebruik array van objecten, map en keys.
  - Keys niet verklappen, kijken wie de error door heeft
  - Id van list gebruiken als key
  - array verplaatsen naar menu want verantwoordelijkheid en herbruikbaarheid.


- 7:  menu current, registered, selected items
  - Toevoegen aan data
  - composition in menu en children prop in list
  - cssClasses prop voor listitem


- 8: content tekst en register knop tekst als props. Mag geen index als key gebruiken.


### Step 3
- Indentify al pieces of data that we have in our application:
    - List of meetups
        - Registered meetups
        - Current meetup
    - Selected meetup
    - The value of our register button
    - The search text the user has entered
    - The filtered list of meetups

- Ask the three questions** for every piece of data, results in:
    - value of register button
    - Search text
    - Selected meetup
    - List of meetups (will become state later on? because register? Or can be computed)


State: Search text
renders: search en list. common owner: menu
-  9: Maak van menu een class component en voeg initial state toe in constructor (searchText). Paas deze state door naar search als prop en zorg dat de value van de input geset wordt.


- 10: filter de menu items op naam met deze state voordat je de listitems mapped.

State: Selected meetup and register button
renders: list and content. common owner: app?
-  11: Maak een nieuwe class component die als common ancestor/container voor menu en content gaat fungeren. Deze wordt verantwoordelijk voor het bijhouden van de staat van menuitems en de selecteditem.
    - Eerst menu en content verplaatsen vanaf app naar menucontentcontainer en menucontentcontainer gebruiken in app.


- 12: Verplaats menuitems van menu naar menucontentcontainer.


State: register button
renders: list and content. common owner: MenuContentContainer
- 13: paas registered en title van de selected item door van menucontentcontainer naar content en zorg dat de button text veranderd naar ‘Register’ of ‘Unregister’.


State: selected meetup
renders: list and content. common owner: MenuContentContainer
- 14: zet default selecteditemId (minimaal benodigd) op de state in constructor van menucontentcontainer en verwijder selected prop uit de menuitems. Zorg ook dat het menu gebruik gaat maken van selectedItemId via props. Dingen die je kunt 'berekenen' moet je niet op de state zetten. In essentie kun je berekenen welk item selected is door een filter over de lijst te halen. Als je de hele item op de state zet en je wil later de register property van deze item veranderen kun je in de problemen komen.

State: Search text
- 15: Begin met de search text.
  - Voeg een onInputChange prop toe.
  - Voeg op de input element een onChange event handler toe (refereer terug naar slides).
  - voeg een methode aan menu toe ‘handleInputChange’ met parameter text.
  - Roep in handleInputChange this.setState aan en update de search text.
  - Voeg op de Search element de onInputChange event handler toe en roep handleInputChange aan. Vergeet niet om te binden!


State: Selected meetup
- 16: Wanneer er op een listitem (wrapper button) geklikt wordt (onClick) moet er naar de menucontentcontainer gecommuniceerd worden dat de selected meetup moet veranderen. Zelfde manier als search text alleen heb je nu twee events.


State: Register button
Vertel van te voren dat je er van uit moet gaan dat wanneer er op de knop geklikt wordt er een server call gedaan wordt om te saven. Pas als dat goed is gegaan mag je de state updaten.
- 17: Wanneer er op de register button geklikt wordt (onClick), moet er naar de menucontentcontainer gecommuniceerd worden dat de register state van het item moet veranderen. Zelfde manier als selected meetup, alleen zijn er verschillende manier om dit te doen, en maar 1 is echt goed.
    - Laat alle wrong ways zien en vertel waarom wrong.
    - laat daarna good way zien: immutable en rekening houden met selected item die ondertussen veranderd.


Open 18a en run npm install commando. Open daarna een nieuwe terminal tab en run ‘npm run api’ om de api te starten.
- 18b: verwijder de hardcoded menuitems. Gebruik componentDidMount lifecycle method (staat al wat) om de data op te halen met native fetch en de lijst van items op de state te zetten en de initial selecteditemid.

- 19: remove hardcoded paragraphs. Pas de handleMenuItemClick functie aan en gebruik fetch om de juiste content op te halen en zet de paragraphs op de state.
    - Doe het eerst in handle menuitem click
    - Verplaats naar updateContent(itemId) omdat je precies hetzelfde moet doen in componentdidmount
    - Roep update aan in componentdidmount


Open 20a om 20b te doen.
- 20b: als er op register geklikt wordt moet dit ook naar de server bewaard worden, voordat de state wordt bijgewerkt. Dit gaat asynchroon uiteraard.
    - Maak de updateMeetup functie af en roep hem aan in handleregisterclick.
    - Je zult code vanaf registerclick naar updatemeetup moeten verplaatsen.


- 21: Focus zetten op de filter input zo gauw de app geladen is.
    - Refactor search component naar statefull
    - sla de ref van input element op in this.


Open 22a en leg uit dat je een spinner component svg hebt toegevoegd.
- 22b: gebruik de spinner in menucontentContainer om een spinner te tonen tijdens het laden van het menu en content. Breid de spinner props verder uit om de kleur en size (width en height) instelbaar te maken.
    - Voeg twee properties toe op de state: isloadingmenu en isloadingcontent
    - Gebruik die om de spinner component te tonen ipv menu of content.
    - Set op de juiste plekken de state.


- 23: om het af te maken willen we ook een kleine spinner naast de register button wanneer erop geklikt wordt.
    - Paas de props naar button via passthroughprops
    - Maak een spinnerbutton component die de button en spinner combineert. Toon de spinner via een prop.
    - Gebruik de spinnerbutton in de content ipv button.
    - Zorg dat de spinner wordt getoond wanneer de menucontentcontainer begint met updaten.

- 24: gewoon doen. filterMenuItems kan een functie buiten de component worden.

- 25: gewoon doen. even checken of inputRef.current bestaat in useEffect en mag maar 1 x uitvoeren, even laten zien wat er gebeurt als je geen tweede param meegeeft.

- 26: is een stuk lastiger. van alle props op this.state een useState maken. alle setstates worden setHookName (meerdere).
voor de reducer kun je alle setHookName gebruik bij langs en omzetten naar reducer:
- Begin met FETCHING_MENU_ITEMS vanuit useEffect.
  - zorg dat items ALTIJD een nieuwe array wordt.
