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
