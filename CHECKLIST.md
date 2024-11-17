1. Skapa Anteckningar
Lägg till ett formulär där användaren kan skriva en ny anteckning.
Formuläret ska innehålla:
CHECK: Ett textfält för anteckningens titel. 
CHECK: Ett textfält för anteckningens innehåll.
CHECK: En knapp för att spara anteckningen.
CHECK: Validera att titel och innehåll inte är tomma.

2. Spara Anteckningar i LocalStorage
CHECK: När användaren sparar en anteckning ska den lagras i LocalStorage.
CHECK: Använd JSON.stringify() för att konvertera anteckningsobjektet till en JSON-sträng innan det lagras.
Varje anteckning kan ha egenskaper som:
CHECK: id: unikt identifierande nummer.
CHECK: title: titeln för anteckningen.
CHECK: content: innehållet i anteckningen.
CHECK: timestamp: datum och tid då anteckningen skapades.

3. Visa Sparade Anteckningar
CHECK: Visa en lista över alla sparade anteckningar på sidan.
CHECK: Använd JavaScript för att läsa in data från LocalStorage och dynamiskt skapa HTML-element för varje anteckning.
CHECK: Visa anteckningens innehåll och eventuell annan relevant information (t.ex. datum).

4. Ta Bort Anteckningar
Implementera funktionalitet för att ta bort enskilda anteckningar.
CHECK MEN EJ FUNKTIONELL ÄN: Varje anteckning i listan ska ha en "Ta bort"-knapp.
När användaren klickar på "Ta bort" ska anteckningen tas bort från LocalStorage och listan uppdateras.
Lägg till en funktion eller knapp som låter användaren ta bort alla anteckningar.

5. Hantera Data i JavaScript
CHECK: Använd JavaScript-objekt och arrayer för att hantera anteckningsdata.
CHECK: Förstå skillnaden mellan JSON-data och JavaScript-objekt.

Validering och Felhantering
CHECK: Validera att användaren inte kan spara tomma anteckningar.
Hantera fall där data i LocalStorage är korrupt eller ogiltig.
Visa användarvänliga meddelanden om något går fel eller om en begränsning nås.

6. Saker som behöver göras:
* Implementera funktionalitet för att ta bort enskilda anteckningar.
CHECK MEN EJ FUNKTIONELL ÄN: Varje anteckning i listan ska ha en "Ta bort"-knapp.
När användaren klickar på "Ta bort" ska anteckningen tas bort från LocalStorage och listan uppdateras.
Lägg till en funktion eller knapp som låter användaren ta bort alla anteckningar.

* Hantera fall där data i LocalStorage är korrupt eller ogiltig.
Visa användarvänliga meddelanden om något går fel eller om en begränsning nås.
 
* 