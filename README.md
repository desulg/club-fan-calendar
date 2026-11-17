# Mängupäev — klubi kalender

Eestikeelne klubikalendri prototüüp.

Demo: https://desulg.github.io/club-fan-calendar/

## Võimalused

- Mängude nimekiri ja kuuvaade ning kodu- ja võõrsilmängude filter.
- Haldusvaates mängude lisamine, muutmine ja kustutamine.
- Valitud mängude eksport .ics-faili koos Eesti ajavööndi ja mängupäeva kell 09.00 meeldetuletusega.
- Kohanduv kujundus telefonile ja arvutile.

## Käivitamine

Sõltuvusi ega build'i pole. Käivita `python3 -m http.server 8000` ja ava http://localhost:8000.

## Demo piirangud

Haldusvaade on avalik demo. Andmed salvestuvad ainult kasutaja brauserisse (localStorage), mitte ühisesse andmebaasi. Muudatused ei mõjuta teiste külastajate kalendrit.

Kalendrifail on ühekordne eksport. Pidev sünkroonimine, ühine andmebaas ja klubi autentimine vajavad serveripoolset edasiarendust. Meeldetuletuste kuvamine sõltub kalendrirakendusest.

## Avaldamine

GitHub Pages avaldab main-haru juurkataloogi. Uuendused jõuavad demosse pärast push'i ja Pagesi avaldamise lõppu.

## Võistkonna kujundus ja mänguinfo

Vaikimisi kasutatakse Bigbank Kalevi logo ja sinist värvi (#044771). Logo allikas: https://bckalev.ee/wp-content/uploads/2026/08/bigbank-kalev-logo.svg (klubi kaubamärk).

Haldusvaate võistkonna seadetes saab muuta nime, värve ja üles laadida logo. Need seaded kehtivad ainult selles brauseris; eri võistkondade registreerimine ja kontod ei ole veel ühendatud.

Mängul saab määrata lisainfo, piletihinna, piletiviite ja teavituse kellaaja (vaikimisi 10.00). Loetelus on tulevaste ja varasemate mängude vaated. Esialgsed mängud on illustratiivsed, mitte klubi kinnitatud ajakava.

Kontrollid: `node --check app.js` ja `node tests/calendar.cjs`.
