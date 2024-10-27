import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './styles.css';

const drinkItems = [
    {
        menu: "CHEMISTRY & THEATRE LIGHT",
        name: "POP-SICLE",
        price: "£12.50",
        ingredients: "Patron Silver Tequila, Koko Kanu, Bubblegum, Lime, Apple",
        effect: "Bubble",
        notes: ""
    },
    {
        menu: "CHEMISTRY & THEATRE LIGHT",
        name: "COLOUR CHANGING ONE",
        price: "£10.50",
        ingredients: "Ketel One Vodka, Apple, Soda, Citrus",
         effect: "Magic",
         notes: "Alcohol Free Version: SHADE SWITCHER. See ‘No or Low’ Page."
    },
    {
        menu: "CHEMISTRY & THEATRE LIGHT",
        name: "LIGHTBULB MOMENT",
        price: "£11.50",
        ingredients: "Tanqueray Gin, Pimms, Artisan Ginger Beer, Raspberry, Lemon, Mint",
        effect: "Smoking",
        notes: "Alcohol Free Version: EUREKA MOMENT. See ‘No or Low’ Page."
    },
    {
        menu: "CHEMISTRY & THEATRE LIGHT",
        name: "FRENCH KISS",
        price: "£11.50",
        ingredients: "Ketel One Vodka, Mouse Kingdom Dark Berries, Raspberry, Pineapple, Cranberry. Citrus, Meringue. Popping Candy",
        effect: "Tongue",
        notes: ""
    },
    {
        menu: "CHEMISTRY & THEATRE LIGHT",
        name: "BUBBLEBATH",
        price: "£11.50",
        ingredients: "Tanqueray Gin, Aperol, Viollete, Blueberry, Citrus",
        effect: "Fairy Liquid",
        notes: ""
    },
    {
        menu: "CHEMISTRY & THEATRE LIGHT",
        name: "T&T",
        price: "£11.00",
        ingredients: "El Tequileno Blanco Tequila, Pink Grapefruit, Tonic",
        effect: "Magic Fire",
        notes: ""
    },
    {
        menu: "CHEMISTRY & THEATRE LIGHT",
        name: "FLASH AF",
        price: "£11.00",
        ingredients: "Seven Tails Spiced, Martini Rubino, Appleton Signature Rum. Strawberry, Marmalade",
        effect: "Fiery Ginger Foam",
        notes: ""
    },
    {
        menu: "CHEMISTRY & THEATRE LIGHT",
        name: "THE LEGAL ONE",
        price: "£11.50",
        ingredients: "Tanqueray Gin, Pineapple & Coconut, Tropical Vermouth, Lime, Tonic",
        effect: "Bong",
        notes: ""
    },
      {
    menu: "CHEMISTRY & THEATRE DARK",
    name: "SMOKEY OLD FASHIONED",
    price: "£12",
    ingredients: "Buffalo Trace Bourbon, Maple Syrup, Jerry Thomas Bitters, Smoke. The Original.",
    effect: "",
    notes: ""
  },
  {
    menu: "CHEMISTRY & THEATRE DARK",
    name: "HIT AND RUM",
    price: "£12",
    ingredients: "Appleton Signature Rum, Grand Marnier, Wray & Nephew, Magnum Tonic Wine, Lime, Grapefruit, Pomegranate, Pineapple. Fire.",
    effect: "",
    notes: ""
  },
  {
    menu: "CHEMISTRY & THEATRE DARK",
    name: "DEAD RED ZOMBIE",
    price: "£12.50",
    ingredients: "Bacardi Carta Blanca Rum, Wray & Nephew, Grand Marnier, Citrus. Pineapple, Cranberry. Zombie Mix.",
    effect: "",
    notes: "Alcohol Free Version: THE ANTIDOTE. See ‘No or Low’ Page."
  },
  {
    menu: "CHEMISTRY & THEATRE DARK",
    name: "BRÛLEÉE VOUS",
    price: "£11.50",
    ingredients: "Martell VS Cognac, Buffalo Trace, Licor 43, Crème Brûlèe Syrup, Cream. Indulgent.",
    effect: "",
    notes: ""
  },
  {
    menu: "CHEMISTRY & THEATRE DARK",
    name: "PIPE DREAM",
    price: "£15",
    ingredients: "Brugal 1888, Discarded Cascara, Laphroaig 10yr, Licor 43, Giffard Chocolate Cookie. Opulence.",
    effect: "",
    notes: ""
  },
  {
    menu: "CHEMISTRY & THEATRE DARK",
    name: "HARD PEACH ICED TEA",
    price: "£12",
    ingredients: "Naked Malt Blended Whisky, Peach Agave Syrup. Homemade Golden Tea. Fragrant.",
    effect: "",
    notes: ""
  },
  {
  menu: "LIGHT & DREAMY",
    name: "SCREWBALL",
    price: "£11.50",
    ingredients: "Absolut Raspberry Vodka, Mouse Kingdom Blue, Bubblegum, Apple, Lime, White Chocolate",
    effect: "Cream Foam",
    notes: ""
  },
   {
  menu: "LIGHT & DREAMY",
    name: "GET ICED",
    price: "12.50",
    ingredients: "Ketel One Citron Vodka, Lemon, Wine, Citrus",
    effect: "White Shimmer",
    notes: "With every one sold, we pledge to donate 25p to the Akt Charity to support their mission to end LGBTQ+ youth homelessness. AKT.ORG.UK"
  },
   {
  menu: "LIGHT & DREAMY",
    name: "POP NOTCH",
    price: "£11",
    ingredients: "Whitley Neill Black Cherry Gin, Kings Ginger Liqueur, Lychee, Pink Grapefruit, Apple",
    effect: "Bubble",
    notes: ""
  },
  {
    menu: "LIGHT & DREAMY",
    name: "STRAWBERRY SHRUB BELLINI",
    price: "£11",
    ingredients: "Whitley Neil Raspberry Gin, Mouse Kingdom Strawberry & Balsamic, Disco Grenadine, Prosecco",
    effect: "Fizz",
    notes: ""
  },
   {
    menu: "LIGHT & DREAMY",
    name: "GIN-GER KICK",
    price: "£12",
    ingredients: "Lime Leaf Infused Roku Gin, Lime Juice, Ginger Beer",
    effect: "Fiery Ginger Foam",
    notes: ""
  },
   {
    menu: "LIGHT & DREAMY",
    name: "BASIL SMASH",
    price: "£11",
    ingredients: "Millers Gin, Basil, Peach, Lime.",
    effect: "Smash. The. Glass",
    notes: ""
  },
   {
    menu: "LIGHT & DREAMY",
    name: "ELDERPOWER",
    price: "£11.50",
    ingredients: "Dutch Barn Orchard Vodka, St. Germain Elderflower, Alchemist Cucumber & Mint Syrup, Prosecco",
    effect: "Evolved Dragon Fruit Dust",
    notes: ""
  },
{ 
menu: "BOLD & BOOZY",
    name: "HIPFLASK MARGARITA",
    price: "£16",
    ingredients: "El Tequileno Tequila, Grand Marnier, Apricot, Lime Sherbet, Demerara, Citrus, Orange Bitters",
    effect: "",
    notes: "£9.50 for a refill if you return the flask, otherwise yours to keep"
  },

  { 
menu: "BOLD & BOOZY",
    name: "PLANTPOT PICANTE",
    price: "£12.50",
    ingredients: "Patron Reposado Tequila, Mezcal Verde, Grapefruit, Lime, Nogave, Gochujang",
    effect: "Salt & Pepper Soil",
    notes: ""
  },
{ 
menu: "BOLD & BOOZY",
    name: "THE ESPRESSO MARTINI",
    price: "£12.50",
    ingredients: "Ketel One Vodka, Mouse Kingdom Coffee, Salted Caramel, Coffee, Caramel, Caviar, Chocolate",
    effect: "",
    notes: ""
  },
{ 
menu: "BOLD & BOOZY",
    name: "TONGUE TIED MAI TAI",
    price: "£12",
    ingredients: "Appleton Signature Rum, Wray & Nephew, Discarded Banana Rum, Lime, Disco Grenadine, Orgeat",
    effect: "Lime Sherbet Air",
    notes: ""
  },
{ 
menu: "BOLD & BOOZY",
    name: "HIPFLASK JUNE BUG",
    price: "£16",
    ingredients: "Bombay Sapphire Premier Cru Gin, Midori, Banana, Citrus, Pineapple & Coconut",
    effect: "",
    notes: "£9.50 for a refill if you return the flask, otherwise yours to keep"
  },
{ 
menu: "BOLD & BOOZY",
    name: "THE PORNSTAR",
    price: "£13",
    ingredients: "Reyka Vodka, Passoa, El Bandarra White, Pineapple, Passionfruit Caviar",
    effect: "Fizz",
    notes: "Alcohol Free Version: VIRGIN PORNSTAR. See ‘NO OR LOW‘ Page."
  },
{ 
menu: "BOLD & BOOZY",
    name: "THE IRISH",
    price: "£11",
    ingredients: "Jameson Whiskey, Demerara, Coffee, Baileys Foam, Cinnamon, Nutmeg",
    effect: "Served Hot",
    notes: ""
  },

  { 
menu: "PURE THEATRE",
    name: "COSMIC OYSTERS",
    price: "£?",
    ingredients: "Bombay Presse Gin, Limoncello, Yuzu, Citrus, Disco Blue, Passionfruit Pearls.",
    effect: "",
    notes: ""
  },

    { 
menu: "PURE THEATRE",
    name: "APERITIVO OYSTERS",
    price: "TWO FOR £11, FOUR FOR £22, SIX FOR £33, DOZEN FOR £66",
    ingredients: "Aperol, Italicus Bergamot Aperitivo, Citrus, Disco Grenadine, Orange Bitters, Pearls",
    effect: "",
    notes: ""
  },

{ 
menu: "NEXT LEVEL SERVES",
    name: "THE LEVITATING ONE",
    price: "£20",
    ingredients: "Johnnie Walker Blue Label, Regal Rogue Wild Rose & Bold Red Vermouth, Akashi Plum Sake, Muyu Vetiver",
    effect: "Anti-Gravity",
    notes: "WARNING: The levitating one has a magnetic field of theatre. Don’t order with a pacemaker or an implantable cardioverter defib."
  },
  { 
menu: "NEXT LEVEL SERVES",
    name: "FABERGÉ",
    price: "£13.50",
    ingredients: "Hendricks Gin, St Germain, Citrus, Yuzu, Punchy Cucumber. Faberge Opulence",
    effect: "",
    notes: "SHARE WHEN ONE ISN’T ENOUGH. MULTIPLE SERVES, MULTIPLE THEATRE."
  },
  { 
menu: "NEXT LEVEL SERVES",
    name: "THE MAD HATTERS (DRINK FOR 2)",
    price: "£26",
    ingredients: "Ketel One Vodka, Citrus, St Germain, Cointreau And Summer Fruits",
    effect: "Science",
    notes: ""
  },
  { 
menu: "NEXT LEVEL SERVES",
    name: "ZOMBIE APOCALYPSE (DRINK FOR 4)",
    price: "£50",
    ingredients: "Bacardi Carta Blanca Rum, Wray & Nephew, Grand Marnier, Citrus, Pineapple, Cranberry",
    effect: "Zombie Mix",
    notes: ""
  },
  { 
menu: "NEXT LEVEL SERVES",
    name: "PICK YOUR POISON (DRINK FOR 2)",
    price: "£25",
    ingredients: "Blue - Mount Gay Black Barrel Rum, Yuzu, Citrus, Disco Blue. Red - Appleton Estate 8 Year Rum, Campari, Velvet Falernum, Strawberry Puree",
    effect: "",
    notes: "The illusion of choice. Share with a friend? Or poison your enemy. . ."
  },
  { 
menu: "NEXT LEVEL SERVES",
    name: "POPSICLE STAND (DRINK FOR 3)",
    price: "£36",
    ingredients: "Patron Silver Tequila, Koko Kanu, Bubblegum, Lime, Apple.|| Patron Silver Tequila, Midori, Elderflower, Lime, Apple.|| Patron Silver Tequila, Cointreau, Disco Blue, Lime, Apple",
    effect: "Bubble",
    notes: ""
  },
  
  { 
menu: "NO OR LOW",
    name: "SHADE SWITCHER",
    price: "£7.50",
    ingredients: "Apple, Citrus, Lemonade, Colour Changing Magic",
    effect: "Disco Lollipop",
    notes: "Alcohol Version: COLOUR CHANGING ONE. See ‘THEATRE LIGHT’ Page"
  },

   { 
menu: "NO OR LOW",
    name: "THE ANTIDOTE",
    price: "£8.50",
    ingredients: "Three Spirit Livener, Cranberry & Pineapple Juice, Citrus, Passionfruit & Raspberry Soda",
    effect: "",
    notes: "Alcohol Version: DEAD RED ZOMBIE. See ‘THEATRE DARK’ Page"
  },

   { 
menu: "NO OR LOW",
    name: "EUREKA MOMENT",
    price: "£8.50",
    ingredients: "Three Spirit Livener, Raspberry, Lemon, Artisan Ginger Beer",
    effect: "Theatre",
    notes: "Alcohol Version: LIGHTBULB MOMENT. See ‘THEATRE LIGHT’ Page"
  },

   { 
menu: "NO OR LOW",
    name: "NO-LOMA SPRITZ",
    price: "£8",
    ingredients: "Three Spirit Livener, Grapefruit Sherbet, Alchemist Marmalade, Soda",
    effect: "",
    notes: "With every one sold, we pledge to donate 25p to the Carbon Free Dining Charity who plant trees in the developing world. CARBONFREEDINING.ORG"
  },

   { 
menu: "NO OR LOW",
    name: "VIRGIN PORNSTAR",
    price: "£8.50",
    ingredients: "Pineapple, Lemon, Vanilla, Passionfruit, Caviar",
    effect: "",
    notes: "Available Low ABV 1.55%"
  },

   { 
menu: "NO OR LOW",
    name: "POWER TRIP",
    price: "£8",
    ingredients: "Trip Blood Orange & Rosemary, Elderflower & Lime Sherbet Syrup",
    effect: "Fiery Ginger Foam. CBD Gummy",
    notes: ""
  },

   { 
menu: "NO OR LOW",
    name: "COS-NO",
    price: "£8",
    ingredients: "Lyres Italian Spritz, Everleaf Forest, Cranberry, Lime",
    effect: "Sherbet Air",
    notes: ""
  },

  { 
menu: "CLASSICS & SPRITZ",
    name: "MARGARITA",
    price: "£12",
    ingredients: "El Tequileno Blanco Tequila, Cointreau, Lime, Nogave",
    effect: "",
    notes: ""
  },

    { 
menu: "CLASSICS & SPRITZ",
    name: "AMARETTO SOUR",
    price: "£10.50",
    ingredients: "Disaronno, Lemon",
    effect: "Foam",
    notes: ""
  },

    { 
menu: "CLASSICS & SPRITZ",
    name: "FROZEN DAIQUIRI",
    price: "£11",
    ingredients: "Bacardi Carta Blanca Rum, Lime",
    effect: "",
    notes: "STRAWBERRY AS STANDARD OR BUBBLEGUM / MIXED BERRY"
  },

    { 
menu: "CLASSICS & SPRITZ",
    name: "APEROL SPRITZ",
    price: "£11",
    ingredients: "Aperol, Prosecco, Soda, Orange",
    effect: "",
    notes: ""
  },

    { 
menu: "CLASSICS & SPRITZ",
    name: "PIÑA COLADA",
    price: "£11",
    ingredients: "Koko Kanu Rum, Wray & Nephew, Coconut, Pineapple",
    effect: "",
    notes: ""
  },

    { 
menu: "CLASSICS & SPRITZ",
    name: "BLOODY MARY",
    price: "£11",
    ingredients: "Caramelised Garlic Ketel One Vodka, Lemon Juice, Big Tom Spiced Tomato Juice, Red Wine Reduction.",
    effect: "",
    notes: ""
  },

    { 
menu: "CLASSICS & SPRITZ",
    name: "NEGRONI",
    price: "£11.50",
    ingredients: "Millers Gin, Martini Rubino, Campari.",
    effect: "",
    notes: ""
  },

    { 
menu: "CLASSICS & SPRITZ",
    name: "FRENCH MARTINI",
    price: "£11",
    ingredients: "Reyka Vodka, Dark Berries Liqueur, Pineapple Juice",
    effect: "",
    notes: ""
  },

    { 
menu: "CLASSICS & SPRITZ",
    name: "MOJITO",
    price: "£10.50",
    ingredients: "Bacardi Carta Blanca Rum, Lime, Mint",
    effect: "",
    notes: "CLASSIC / STRAWBERRY / BUBBLEGUM / MIXED BERRY"
  },

  { 
menu: "WINE - SPARKLING",
    name: "THE ALCHEMIST PROSECCO",
    origin: "VENETO, ITALY",
    price: "125ML - £8.75 BOTTLE - £39",
    ingredients: "Citrus, elegant - commissioned",
    effect: "",
    notes: ""
  },


  { 
menu: "WINE - SPARKLING",
    name: "PET NAT",
    origin: "BODEGAS NAVARIUS, SPAIN",
    price: "Bottle - £42",
    ingredients: "Apples, pears and wild strawberries. Sparkling rose, grown up",
    effect: "",
    notes: ""
  },

  { 
menu: "WINE - SPARKLING",
    name: "MOET & CHANDON BRUT",
    origin: "CHAMPAGNE, FRANCE",
    price: "125ML - £13.50 BOTTLE - £70",
    ingredients: "The worlds favourite Champagne.",
    effect: "",
    notes: ""
  },

   { 
menu: "WINE - SPARKLING",
    name: "VEUVE CLICQUOT YELLOW LABEL",
    origin: "CHAMPAGNE, FRANCE",
    price: "Bottle - £90",
    ingredients: "Madame Veuve... What a woman",
    effect: "",
    notes: ""
  },

   { 
menu: "WINE - SPARKLING",
    name: "LAURENT PERRIER ROSE",
    origin: "CHAMPAGNE, FRANCE",
    price: "Bottle - £130",
    ingredients: "The best of the best in Rose Champagne",
    effect: "",
    notes: ""
  },

   { 
menu: "WINE - SPARKLING",
    name: "CHAMPAGNE, FRANCE",
    origin: "",
    price: "Bottle - £240",
    ingredients: "The Daddy of Champagne, literally",
    effect: "",
    notes: ""
  },

  { 
menu: "WINE - ROSE",
    name: "PINOT GRIGIO BLUSH",
    origin: "OPERETTO, ITALY",
    price: "175ML - £7 250ML - £9  BOTTLE - £26",   
    ingredients: "Dry & refreshing, summer berry notes",
    effect: "",
    notes: ""
  },

    { 
menu: "WINE - ROSE",
    name: "GRENACHE",
    origin: "LA BEAU SUD, FRANCE",
    price: "175ML - £8 250ML - £11 Bottle - £30",
    ingredients: "Delicate pink, red fruits, summer",
    effect: "",
    notes: ""
  },

    { 
menu: "WINE - ROSE",
    name: "‘WHISPERING ANGEL’ PROVENCE",
    origin: "CHATEAU D’ESCLANS, FRANCE",
    price: "175ML - £13 250ML - £18 Bottle - £50",
    ingredients: "Strawberries & cream, needs no introduction",
    effect: "",
    notes: ""
  },

  { 
menu: "WHITE WINE",
    name: "SMEDEREVKA X RIESLING",
origin: "TIKVEZ, MACEDONIA",
    price: "175ML - 7 250ML - £9 Bottle - £26",
    ingredients: "Stonefruits, crisp, lean & clean",
    effect: "",
    notes: ""
  },

    { 
menu: "WHITE WINE",
    name: "PINOT GRIGIO",
    origin: "STATUA, ITALY",
    price: "175ML - £8 250ML - £10.50 Bottle - £30",
    ingredients: "Light & delicate fruit, mouthwatering Pinot.",
    effect: "",
    notes: ""
  },

    { 
menu: "WHITE WINE",
    name: "CHENIN BLANC",
origin: "REBELAND, SOUTH AFRICA",
    price: "£32",
    ingredients: "Guava & passionfruit, flinty fresh",
    effect: "",
    notes: ""
  },

    { 
menu: "WHITE WINE",
    name: "PICPOUL DE PINET",
origin: "BELLE PERLE, FRANCE",
    price: "£35",
    ingredients: "Lip smacking citrus & blossom",
    effect: "",
    notes: ""
  },

    { 
menu: "WHITE WINE",
    name: "SAUVIGNON BLANC",
    origin: "TUATARA BAY, NEW ZEALAND",
    price: "175 ML - £9 250ML - £12.50 Bottle - £36",
    ingredients: "Gooseberries, grassy & green",
    effect: "",
    notes: ""
  },

    { 
menu: "WHITE WINE",
    name: "ALBARIÑO",
    origin: "‘RUTA 49’, SPAIN",
    price: "175 ML - £11 250 ML - £14 Bottle - £40",
    ingredients: "Fresh & zesty, moreish finish",
    effect: "",
    notes: ""
  },

    { 
menu: "WHITE WINE",
    name: "CHARDONNAY",
    origin: "BALFOUR SKYE, ENGLAND",
    price: "Bottle £48",
    ingredients: "Unoaked & complex, citrus cream",
    effect: "",
    notes: ""
  },
{
  menu: "ORANGE WINE",
    name: "MUSCAT X PINOT GRIS X PICPOUL",
    origin: "VILLA NORIA, FRANCE",
    price: "Bottle £44",
    ingredients: "Aromatic & orange natural wine. Trust us on this one",
    effect: "",
    notes: ""
  },

  {
  menu: "RED WINE",
    name: "NEGROAMARO",
    origin: "II PUMO’ ITALY",
    price: "175ML - £7 250ML - £9 Bottle - £27",
    ingredients: "Blackcurrants & wild fruits, charmingly balanced",
    effect: "",
    notes: ""
  },

  {
  menu: "RED WINE",
    name: "RIOJA",
    origin: "LA MALDITA, SPAIN",
    price: "175ML - £8.50 250ML - £11.50 Bottle - £30",
    ingredients: "Ripe red fruits, easy drinking summer Rioja",
    effect: "",
    notes: ""
  },

  {
  menu: "RED WINE",
    name: "PINOT NOIR",
    origin: "UNDERRAGA, CHILE",
    price: "Bottle - £33",
    ingredients: "Morello cherries & strawberries. Refined & complex, Pinot Noir at it’s best",
    effect: "",
    notes: ""
  },

  {
  menu: "RED WINE",
    name: "CABERNET SAUVIGNON",
    origin: "PASTORS BLEND, SOUTH AFRICA",
    price: "175ML - £9.50 250ML - £12.50 Bottle - £36",
    ingredients: "Dark fruits & summer herbs, smooth tannins",
    effect: "",
    notes: ""
  },

  {
  menu: "RED WINE",
    name: "SYRAH X MERLOT",
    origin: "BASIC INSTINCT, FRANCE",
    price: "Bottle - £38",
    ingredients: "Wild berries & cherries, juicy ripeness",
    effect: "",
    notes: ""
  },

  {
  menu: "RED WINE",
    name: "‘HEY’ MALBEC",
    origin: "MATIAS RICITELLI, ARGENTINA",
    price: "175ML - £11 250ML - £14 Bottle - £40",
    ingredients: "Developed black fruit, vanilla & chocolate",
    effect: "",
    notes: ""
  },

  {
  menu: "RED WINE",
    name: "GRENACHE X SYRAH",
    origin: "GERARD BERTRAND, FRANCE",
    price: "Bottle - £48",
    ingredients: "Black cherries, plums & wild raspberries, Bottled and served in clay. Opulence.",
    effect: "",
    notes: ""
  },


  {
  menu: "BEER",
    name: "HEINEKEN BOTTLE",
    abv: "5%",
    price: "£5.50",
    ingredients: "",
    effect: "",
    notes: ""
  },
{
    menu: "BEER",
    name: "SOL",
    abv: "4.5%",
    price: "£5.25",
    ingredients: "",
    effect: "",
    notes: ""
  },

  {
    menu: "BEER",
    name: "PERONI NASTRO AZZURRO",
    abv: "5%",
    price: "£5.75",
    ingredients: "",
    effect: "",
    notes: ""
  },

  {
    menu: "BEER",
    name: "GUINNESS DRAUGHT CAN",
    abv: "4.2%",
    price: "£6",
    ingredients: "",
    effect: "",
    notes: ""
  },

  {
    menu: "BEER",
    name: "MORETTI SALE DI MARE",
    abv: "4.8%",
    price: "£6",
    ingredients: "Medium bodied, unfiltered lager with a hint of Italian sea salt. ABV 4.8%.",
    effect: "",
    notes: ""
  },

  {
    menu: "BEER",
    name: "NOAM",
    abv: "5.2%",
    price: "£6.75",
    ingredients: "Natural, unfiltered premium Bavarian lager",
    effect: "",
    notes: ""
  },

  {
    menu: "BEER",
    name: "ALCHEMY IPA",
    abv: "3.9%",
    price: "£6.25",
    ingredients: "Tropical pale ale, bursting with flavour and hops",
    effect: "",
    notes: "What we brew in the shadows. Liquid sorcery collaboration between The Alchemist & Magic Rock Brewery."
  },

  {
    menu: "BEER",
    name: "JUBEL PEACH",
    abv: "4%",
    price: "£5.75",
    ingredients: "Dangerously moreish peach lager to quench any thirst",
    effect: "",
    notes: ""
  },

  {
    menu: "BEER",
    name: "PERONI CAPRI",
    abv: "4.2%",
    price: "£5.75",
    ingredients: "Refreshingly light, premium summer beer",
    effect: "",
    notes: ""
  },

 

   {
    menu: "CIDER",
    name: "MAISON SASSY ORGANIC",
    abv: "4%",
    price: "£6.50",
    ingredients: "Medium-dry, refreshingly moreish apple cider",
    effect: "",
    notes: ""
  },

   {
    menu: "CIDER",
    name: "OLD MOUT PINEAPPLE & RASPBERRY",
    abv: "4%",
    price: "£6.75",
    ingredients: "Exotic cider fusion of sweet pineapple & tart raspberry",
    effect: "",
    notes: ""
  },

   {
    menu: "NO-ALCOHOL BEER",
    name: "HEINEKEN 0.0",
    price: "£5",
    ingredients: "Refreshing & balanced, non-alcoholic beer",
    effect: "",
    notes: ""
  },

   {
    menu: "NO-ALCOHOL BEER",
    name: "LUCKY SAINT",
    price: "£5.75",
    ingredients: "Rich & full of flavour, non-alcoholic beer",
    effect: "",
    notes: ""
  },

   {
    menu: "SOFT DRINKS",
    name: "TRIP BLOOD ORANGE & ROSEMARY CBD",
    price: "£5.50",
    ingredients: "Lightly sparkling CBD drink - crafted for stress-free sipping",
    effect: "",
    notes: ""
  },

   {
    menu: "SOFT DRINKS",
    name: "PUNCHY CUCUMBER",
    price: "£5",
    ingredients: "Zingy yuzu with refreshing cucumber & a hint of rosemary. In a can.",
    effect: "",
    notes: ""
  },

   {
    menu: "SOFT DRINKS",
    name: "L.A. BREWERY KOMBUCHA",
    price: "£5.50",
    ingredients: "Sparkling strawberry & rhubarb",
    effect: "",
    notes: ""
  },

   {
    menu: "SOFT DRINKS",
    name: "COCA COLA 20CL",
    price: "£3",
    ingredients: "Classic glass bottled Coke",
    effect: "",
    notes: ""
  },






  




];


const Dcard = ({ menu, name, price, ingredients, effect, notes, onPrev, onNext, hideDetails }) => (
  <div className="Dcard">
    <button className="nav-button left" onClick={onPrev}>&#9664;</button>
    <div className="Dcard-content">
      <h2>{menu}</h2>
      <h3>{name}</h3>
      {!hideDetails && (
        <>
          <h4>{price}</h4>
          <p>{ingredients}</p>
          <h5>{effect}</h5>
          <h5>{notes}</h5>
        </>
      )}
    </div>
    <button className="nav-button right" onClick={onNext}>&#9654;</button>
  </div>
);

const DrinkTraining = () => {
  const [index, setIndex] = useState(0);
  const [shuffledDrinks, setShuffledDrinks] = useState(drinkItems);
  const [isRandom, setIsRandom] = useState(false);
  const [hideDetails, setHideDetails] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((prevIndex) => (prevIndex + 1) % shuffledDrinks.length),
    onSwipedRight: () => setIndex((prevIndex) => (prevIndex - 1 + shuffledDrinks.length) % shuffledDrinks.length),
  });

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % shuffledDrinks.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + shuffledDrinks.length) % shuffledDrinks.length);
  };

  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const toggleRandom = () => {
    if (isRandom) {
      setShuffledDrinks(drinkItems);
    } else {
      setShuffledDrinks(shuffleArray(drinkItems));
    }
    setIsRandom(!isRandom);
    setIndex(0); // Reset index to show the first card of the array
  };

  const toggleDetails = () => {
    setHideDetails(!hideDetails);
  };

  return (
    <div className="drink-training" {...handlers}>

      <button className="shuffle-button" onClick={toggleRandom}>
        {isRandom ? 'Disable Random' : 'Enable Random'}
      </button>
      <button className="details-button" onClick={toggleDetails}>
        {hideDetails ? 'Show Details' : 'Hide Details'}
      </button>
      <div className="Dcard-container">
        <Dcard {...shuffledDrinks[index]} onPrev={handlePrev} onNext={handleNext} hideDetails={hideDetails} />
    </div>
         <div className="img-container">
        
      <img src="https://res.cloudinary.com/din8rv70n/image/upload/v1729710582/logo_p8ku5o.png" width="100" height="auto"></img>

        
      </div>
    </div>

    
  );
};

export default DrinkTraining;



