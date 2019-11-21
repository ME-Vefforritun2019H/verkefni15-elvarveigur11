# vfor1Verk15
Javascript föll, aðferðir og hlutir (objects) 

1.  Vinnið  HTML skjalinu
1.1 Setjið inn title og tengingu við CSS skjalið
1.2 Setjið strenginn "TravelWorthy" í heading 1
1.3 Setjið upp div með id "info"
1.3.1 Setjið strenginn "latest hotel offer" í heading 2
1.3.2 Setjið upp div tagg með id "hotelName"
1.3.3 Setjið upp div tagg með id "roomRate"
1.3.4 Setjið upp div tagg með id "specialRate"
1.3.5 Setjið strenginn "room rate when you book 2 or more nights" í p tagg
1.3.6 Setjði upp div tagg með id "offerEnds"
1.4 Setjið upp tengingu við javascript skjalið.

2.  Vinnið í CSS skjalinu
2.1 Importið reglum fyrir Open Sans, gert svona: @import url(http://fonts.googleapis.com/css?family=Open+Sans);
2.2 Hafið áhrif á body
2.2.1   Setjið inn bakgrunnslitinn #fff
2.2.2   Setjið inn bakgrunn með myndinni travelworthy-backdrop svona: 
        background: url("images/travelworthy-backdrop.jpg") no-repeat center center fixed;
2.2.3   Setjið bakgrunnsstærðina í cover
2.2.4   Setjið margin í 0
2.2.5   Setjið á leturtýpurnar "Open Sans" og svo sans-serif

2.3 Hafið áhrif á h1
2.3.1   Setjið inn bakgrunn með myndinni travelworthy-logo svona: background: #1e1b1e url("images/travelworthy-logo.gif") no-repeat;
2.3.2   Setjið breiddina í 230 pixla
2.3.3   Setjið hæðina í 180 pixla
2.3.4   Látið flæða til vinstri
2.3.5   Setjið text-indent í 100%
2.3.6   Stillið white space í nowrap
2.3.7   Stillið overflow í hidden
2.3.8   Setjið margin í 0

2.4 Hafið áhrif á h2
2.4.1   Stillið margin í 1.75 em, 0, 0 ,0
2.4.2   Stillið litin á letri í #adffda
2.4.3   Setjið font weight í normal

2.5 Hafið áhrif á id info
2.5.1   Setjið bakgrunnslit í #1e1b1e
2.5.2   Setjið letur lit í #fff
2.5.3   Setjið breiddina í 200 pixla
2.5.4   Setjið padding í topp og botn 0 og svo hægri og vinstri í 15 pixla
2.5.5   Miðjið textann
2.5.6   Setjið lágmarkshæð í 100%
2.5.7   Setjið staðsetningu í absolute
2.5.8   Setjið top í 0
2.5.9   Setjið right í 15%

2.6 Hafið áhrif á id hotelName
2.6.1   Setjið allan texta í hástafi
2.6.2   Miðjið textann
2.6.3   Setjið stærðina á letrinu í 120%
2.6.4   Setjið margin top í 10 pixla
2.6.5   Setjið border top í 1px breidd, solid týpuna og litinn #fff
2.6.6   Setjið border botn í 1 pixla breidd, solid týpuna og litinn #fff
2.6.7   Setjið padding í topp og botn 10 pixla og hægri og vinstri í 0

2.7 Hafið áhrif á id roomRate
2.7.1   Setjið línu yfirstrikun á með text-decuration line through
2.7.2   Setjið display í inline block
2.7.3   Látið flæða til vinstri
2.7.4   Setjið padding top í 10 pixla

2.8 Hafið áhrif á id specialRate
2.8.1   Setjið leturstærðina í 440%
2.8.2   Setjið leturlitinn í #ffb87a
2.8.3   Setjið display í inline block
2.8.4   Setjið padding í topp 10 pixla, hægri 0, bottn 20 pixla og vinstri 0
2.8.5   Setjið margin í 0

2.9 Hafið áhrif á id offerEnds
2.9.1   Setjið allt letur í hástafi
2.9.2   Setjið á leturlitinn #ffb87a
2.9.3   Setjið leturstærð í 75%

3.  Vinnið í JavaScript skjalinu
3.1 Búið til objectið hotel
3.1.1 Setjið inn "property" name með gildið "Park"
3.1.2 Setjið inn "property" roomRate með gildið 240
3.1.3 Setjið inn "property" discount með gildið 15
3.1.4 Setjið inn "method" offerPrice
3.1.4.1 Skilgreinið breytuna offerRate og setjið í hana gildið á this.roomrate * ((100 - this.dicount) / 100)
3.1.4.2 Skilið frá ykkur gildinu í offerRate

3.2 Skilgreinið breyturnar hotelName, roomRate og specialRate

3.3 Setjið elementið með id "hotelName" í breytuna hotelName
3.4 Setjið elementið með id "roomRate" í breytuna roomRate
3.5 Setjið elementið með id "specialRate" í breytuna specialRate

3.6 Breytið textanum inní elementinu hotelName í gildið inní property name úr objectinu hotel
3.7 Breytið textanum inní elementinu roomRate í strenginn "$" og í gildið property roomRate úr objectinu hotel 
        og hafið bara tvö aukastafi

3.8 Breytið textanum inní elementinu specialRate í strenginn "$" og útkomuna úr aðferðinni (method) offerPrice úr objectinu
    hotel
    
3.9 Skilgreinið breyturnar expiryMsg, today og elEnds
3.10  Búið til fallið offerExpires og það á að taka inn (input) gildið inní breytunni today
3.10.1  Skilgreinið breyturnar weekFromToday, day, date, month, year, dayNames og monthNames
3.10.2  Setjið inní weekFromToday útkomuna úr new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)

3.10.3  Setjið inní breytuna dayNames nöfnin á öllum dögunum þannig að breytan verði að array
3.10.4  Setjið inní breytuna monthNames nöfnin á öllum mánuðunum þannig að breytan verði að array

3.10.5  Setjið inní breytuna day dayNames[weekFromToday.getDay()];
3.10.6  Setjið inní breytuna date gildið úr weekFromToday.getDay()
3.10.7  Setjið inní breytuna month monthNames[weekFromToday.getMonth()]
3.10.8  Setjið inní breytuna year gildið úr weekFromToday.getFullYear()

3.10.9  Setjið strenginn "Offer expires next " inní breytuna expiryMsg
3.10.10 Bætið í breytuna expiryMsg breytunum og strengjum: day + ' <br />(' + date + ' ' + month + ' ' + year + ')'
3.10.11 Skilið frá ykkur inni haldinu í expiryMsg

3.11    Setjið inní today dagsetningu fyrir daginn í dag með objectinu Date
3.12    Setjið inní elEnds elementið sem er með id "offerEnds"
3.13    Breytið með innerHTML gildinu í elEnds í gildið sem kemur úr fallinu offerExpires sem tekur með sér inputið í breytunni today
