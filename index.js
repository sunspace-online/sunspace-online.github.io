
let mapOptions = {
  center: [53.825564, -2.421975],
  zoom: 6,
  fullscreenControl: true,
  fullscreenControlOptions: {
      position: 'topleft'
  }
};

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
   
    // Creates a red marker with the coffee icon

  var redMarker = L.ExtraMarkers.icon({
   prefix: 'fa',
    icon: 'solid fa-sun',
    markerColor: '#d65409',
    iconColor: '#FFD43B',
    svg : true
  });

 // L.marker([51.941196,4.512291], {icon: redMarker}).addTo(map);
  

function addMarker(map, name, position, date, description, url) {

  
let marker = new L.Marker(position, { title: name, icon: redMarker}).addTo(map);

addOpenWindow(marker, name, date, description, url);
 
}

function addOpenWindow(marker, heading, date, description, url) {
  var contentString = "";

  if (url) {
    contentString =
      '<div id="locationContent">' +
      '<div class="eventLocation">' +
      "</div>" +
      '<h2 class="eventTitle">' +
      heading +
      "</h2>" +
      '<div class="eventDate">' +
      date +
      "</div>" +
      '<div class="eventBody">' +
      "<p>" +
      description +
      "</p>" +
      "<p>" +
      '<a href="' +
      url +
      '">Click Here</a> for more information.' +
      "</p>" +
      "</div>" +
      "</div>";
  } else {
    contentString =
      '<div id="locationContent">' +
      '<div class="eventLocation">' +
      "</div>" +
      '<h2 class="eventTitle">' +
      heading +
      "</h2>" +
      '<div class="eventDate">' +
      date +
      "</div>" +
      '<div class="eventBody">' +
      "<p>" +
      description +
      "</p>" +
      "</div>" +
      "</div>";
  }

  marker.bindPopup(contentString);
}

addMarker(
  map,
  "Builth Wells, Wales",
  { lat: 52.161788, lng: -3.416049 },
  "13 August 2016",
  "Solar Sphere festival workshops with Helen Mason and Emma Wilde (AstroCymru) - 50 students, Key Stage 2 and families"
);
addMarker(
  map,
  "Seething Astronomy Society, Norwich",
  { lat: 52.504687, lng: 1.420739 },
  "30 September 2016",
  "Institute of Physics, Norwich, Helen Mason gives a lecture to 50 scientists and members of the public."
);
addMarker(
  map,
  "University of Portsmouth, Portsmouth",
  { lat: 50.795144, lng: -1.093637 },
  "2 November 2016",
  "European Space Education Resource Office (ESERO)/Principia Space Conference - 80 students, Key Stage 2"
);
addMarker(
  map,
  "University of Portsmouth, Portsmouth",
  { lat: 50.795144, lng: -1.093737 },
  "3 November 2016",
  "Helen Mason ran Space2Earth workshops with 10 teachers"
);
addMarker(
  map,
  "University of York, York",
  { lat: 53.94854, lng: -1.053322 },
  "4 November 2016",
  "European Space Education Resource Office (ESERO)/Principia Space Conference (4-6 November 2016) -  Helen Mason gave public lecture and helped with the Space2Earth stand - reaching 30 students, their families and 10 teachers"
);
addMarker(
  map,
  "Robert Gordon's College, Aberdeen",
  { lat: 57.148068, lng: -2.101892 },
  "7 November 2016",
  "SunSpaceArt school talk - 40 students, KS4/5 and two teachers"
);
addMarker(
  map,
  "Robert Gordon's College, Aberdeen",
  { lat: 57.148068, lng: -2.101992 },
  "7 November 2016",
  "Institute of Physics, Aberdeen, Helen Mason gives a lecture to 50 scientists and members of the public."
);
addMarker(
  map,
  "Institute for Physics, London",
  { lat: 51.521737, lng: -0.145293 },
  "9 November 2016",
  "Helen Mason gives keynote address at the Institute of Physics careers for women conference - 50 university students"
);
addMarker(
  map,
  "Norwich Astronomical Society, Norfolk",
  { lat: 52.504713, lng: 1.420739 },
  "18 November 2016",
  "Norwich Astronomy Club – Helen Mason gives a public lecture to 50 amateur astronomers"
);
addMarker(
  map,
  "Shrubland Street Community Primary School, Leamington Spa",
  { lat: 52.279484, lng: -1.527608 },
  "8 December 2016",
  "Space Camp - Clare Dudeney and Helen Mason run SunSpaceArt workshop - 30 students, Key Stage 2, 3 teachers",
  "https://www.sunspaceart.org/school-workshops/space-camp-art/"
);
addMarker(
  map,
  "Holly Lodge Girls School, Liverpool",
  { lat: 53.42839, lng: -2.914116 },
  "14 December 2016",
  "Liverpool Fact Art Gallery – ‘Moon Village - Lunar Safety Jackets’ workshop, Holly Lodge Girls School, Year 9, Helen Schell, Deborah Davidson, Ideas Foundation and Helen Mason - 30 students, KS3/4, 5 teachers, KS3, 2 artists",
  "https://www.sunspaceart.org/school-workshops/liverpoolfact/"
);
addMarker(
  map,
  "Bryn Bach Primary School, Wales",
  { lat: 51.786407, lng: -3.262105 },
  "10 January 2017",
  "Bryn Bach and Fochriw Primary Schools. SunSpaceArt workshop led by Sarah Bridgland and Emma Wride (AstroCymru) , 2 x 2 days and exhibition, 10-11 Jan, 24 Jan, 1 Feb, Key Stage 2, 4 teachers and families",
  "https://www.sunspaceart.org/school-workshops/our-3d-universe-wales/"
);
addMarker(
  map,
  "Fochriw Primary School, Wales",
  { lat: 51.74269, lng: -3.29568 },
  "11 January 2017",
  "Bryn Bach and Fochriw Primary Schools. SunSpaceArt workshop led by Sarah Bridgland and Emma Wride (AstroCymru) , 2 x 2 days and exhibition, 10-11 Jan, 24 Jan, 1 Feb, Key Stage 2, 4 teachers and families",
  "https://www.sunspaceart.org/school-workshops/our-3d-universe-wales/"
);
addMarker(
  map,
  "Kingsley Community Primary School, Cheshire",
  { lat: 53.269033, lng: -2.692214 },
  "24 January 2017",
  "SunSpaceArt workshop, run by Geraldine Cox and Clare Dudeney - 30 students, Key Stage 2 and 1 teacher",
  "https://www.sunspaceart.org/school-workshops/solar-creativity-kingsley-community-primary-school/"
);
addMarker(
  map,
  "Scarning Primary School, Norfolk",
  { lat: 52.67794, lng: 0.918606 },
  "8 February 2017",
  "‘Extremophiles’ Space/Art, Scarning Primary School, workshop with SAW Trust, led by UEA undergraduate student, Kirsty Nice and Helen Mason and artist and poet",
  "https://www.sunspaceart.org/school-workshops/extremeophiles-in-norfolk/"
);
addMarker(
  map,
  "Northbury Primary School, London",
  { lat: 51.541193, lng: 0.075167 },
  "20 February 2017",
  "SunSpaceArt workshop, Helen Mason and Geraldine Cox and Clare Dudeney and Heather MacRae and Urmila Mitra (solar researcher) - 120 students, Key Stage 2 and 6 teachers",
  "https://www.sunspaceart.org/school-workshops/sunspaceart-bonanza-in-barking/"
);
addMarker(
  map,
  "Hockerill Secondary School, Essex",
  { lat: 51.870138, lng: 0.171052 },
  "24 February 2017",
  "SunSpaceArt workshop From Antarctica to Mars run by Helen Mason, including talk, 90 students, KS3/4 and 6 teachers"
);
addMarker(
  map,
  "St Ives Scout Group, Cambs",
  { lat: 52.328378, lng: -0.083497 },
  "3 March 2017",
  "Helen Mason gives talk to St Ives, Scouts group"
);
addMarker(
  map,
  "Royal Astronomical Society, London",
  { lat: 51.508665, lng: -0.139506 },
  "8 March 2017",
  "Helen Mason gives a talk on Women in Astronomy for International Women’s Day with 60 members of the public"
);
addMarker(
  map,
  "Cambridge University, Cambridge",
  { lat: 52.21011, lng: 0.101204 },
  "14 March 2017",
  "Helen Mason gives a talk at the Cambridge University Astronomy Club to 50 students"
);
addMarker(
  map,
  "Cambridge Science Festival, Cambridge",
  { lat: 52.21011, lng: 0.101104 },
  "21 March 2017",
  "Helen Mason gives public lecture to 80 people"
);
addMarker(
  map,
  "DAMTP, University of Cambridge, Cambridge",
  { lat: 52.210335, lng: 0.101015 },
  "25 March 2017",
  "DAMTP Open Day"
);
addMarker(
  map,
  "Northbury Primary School, London",
  { lat: 51.541193, lng: 0.075067 },
  "27 March 2017",
  "2nd visit to Northbury, SunSpaceArt workshop, Helen Mason, Geraldine Cox, Clare Dudeney, Heather MacRae, Urmila Mitra (solar researcher) and Christabel Forbes - 120 students, Key Stage 2 and 6 teachers ",
  "https://www.sunspaceart.org/school-workshops/sunspaceart-bonanza-in-barking/"
);
addMarker(
  map,
  "Society for Popular Astronomy, Cambridge",
  { lat: 52.214094, lng: 0.095195 },
  "1 April 2017",
  "Helen Mason gives a public lecture to 60 amateur astronomers"
);
addMarker(
  map,
  "Royal Astronomical Society, London",
  { lat: 51.508665, lng: -0.139606 },
  "11 April 2017",
  "Helen Mason gives two public lecture to at total of 120 people"
);
addMarker(
  map,
  "Royal Observatory Greenwich, London",
  { lat: 51.476873, lng: -0.0005 },
  "20 April 2017",
  "Helen Mason on panel discussion"
);
addMarker(
  map,
  "Henham and Ugley Primary School, Essex",
  { lat: 51.929361, lng: 0.249751 },
  "9 May 2017",
  "SunSpaceArt workshop run by Helen Mason and Heather MacRae - 30 students, Key Stage 2",
  "https://www.sunspaceart.org/school-workshops/henham-and-ugley-school-essex/"
);
addMarker(
  map,
  "Bentfield County Primary School, Essex",
  { lat: 51.909316, lng: 0.193573 },
  "9 May 2017",
  "SunSpaceArt workshop run by Helen Mason and Heather MacRae - 30 students, Key Stage 2",
  "https://www.sunspaceart.org/school-workshops/sun-earth-and-moon/"
);
addMarker(
  map,
  "Highways Primary School, Kent",
  { lat: 51.359934, lng: 0.111077 },
  "15 May 2017",
  "Flags of the Solar System SunSpaceArt workshop, Helen Schell and Helen Mason  - 30 students, Key Stage 2, two teachers",
  "https://www.sunspaceart.org/school-workshops/flags-of-the-solar-system/"
);
addMarker(
  map,
  "Cambridge International School, Cambridge",
  { lat: 52.124366, lng: 0.222022 },
  "17 May 2017",
  "Helen Mason gave talk at Assembly - 60 students, Key Stage 3/4 and 5 teachers"
);
addMarker(
  map,
  "Ely Cathedral, Ely",
  { lat: 52.398873, lng: 0.26377 },
  "31 May 2017",
  "Science Festival"
);
addMarker(
  map,
  "UK Space Conference, Liverpool",
  { lat: 53.395431, lng: -2.990322 },
  "31 May 2017",
  "UK Space Conference, Gala dinner, Helen Mason nominated for an ‘Arthur C. Clarke’ Award for Outreach"
);
addMarker(
  map,
  "Icknield Primary School, Luton",
  { lat: 51.909969, lng: -0.434997 },
  "12 June 2017",
  "Helen Mason led assembly with 80 students, Key Stage 1/2 and 10 teachers"
);
addMarker(
  map,
  "Invicta Grammar School for Girls, Maidstone",
  { lat: 51.274767, lng: 0.536775 },
  "26 June 2017",
  "Maidstone ‘Festival of Space’ (26-28 June 2017), Heather MacRae (Ideas Foundation), Helen Schell and Jancy McFee (works with NASA) ran workshop - with 34 students, Key Stage 3/4 and 2 teachers ",
  "https://www.sunspaceart.org/school-workshops/mission-to-mars-maidstone/"
);
addMarker(
  map,
  "Valley Park School, Maidstone",
  { lat: 51.275208, lng: 0.53637 },
  "26 June 2017",
  "Maidstone ‘Festival of Space’ (26-28 June 2017), Heather MacRae (Ideas Foundation), Helen Schell and Jancy McFee (works with NASA) ran workshop - with 34 students, Key Stage 3/4 and 2 teachers ",
  "https://www.sunspaceart.org/school-workshops/mission-to-mars-maidstone/"
);
addMarker(
  map,
  "New Line Learning Academy, Maidstone",
  { lat: 51.247701, lng: 0.534071 },
  "27 June 2017",
  "Maidstone ‘Festival of Space’ (26-28 June 2017), Heather MacRae (Ideas Foundation), Helen Schell and Jancy McFee (works with NASA) ran workshop - with 34 students, Key Stage 3/4 and 2 teachers ",
  "https://www.sunspaceart.org/school-workshops/mission-to-mars-maidstone/"
);
addMarker(
  map,
  "The Leenham School, Maidstone",
  { lat: 51.237705, lng: 0.710889 },
  "27 June 2017",
  "Maidstone ‘Festival of Space’ (26-28 June 2017), Heather MacRae (Ideas Foundation), Helen Schell and Jancy McFee (works with NASA) ran workshop - with 34 students, Key Stage 3/4 and 2 teachers ",
  "https://www.sunspaceart.org/school-workshops/mission-to-mars-maidstone/"
);
addMarker(
  map,
  "Cornwallis Academy, Maidstone",
  { lat: 51.230462, lng: 0.516391 },
  "28 June 2017",
  "Maidstone ‘Festival of Space’ (26-28 June 2017), Heather MacRae (Ideas Foundation), Helen Schell and Jancy McFee (works with NASA) ran workshop - with 34 students, Key Stage 3/4 and 2 teachers ",
  "https://www.sunspaceart.org/school-workshops/mission-to-mars-maidstone/"
);
addMarker(
  map,
  "Broadwater School, Surrey",
  { lat: 51.201288, lng: -0.594085 },
  "4 July 2017",
  "‘SpaceLink’ event and Helen Sharman. Helen Mason gave talk and held workshop with Heather MacRae -  with 80 students, Key Stage 3 and 10 teachers from different schools"
);
addMarker(
  map,
  "E.A. Milne Centre for Astrophysics, University of Hull, Hull",
  { lat: 53.771277, lng: -0.36682 },
  "6 July 2017",
  "National Astronomy Meeting 2017 – Astro Outreach - Helen Mason led group at outreach lunch of 60 people from the science and astronomy community"
);
addMarker(
  map,
  "SolarSphere Festival, Builth Wells, Wales",
  { lat: 52.161788, lng: -3.416149 },
  "11 August 2017",
  "SolarSphere Festival (11-14 August 2017) - Helen Mason gave a public lecture and ran Space/Art workshops with Emma Wride for 50 students and their families"
);
addMarker(
  map,
  "Great Smoky Mountains National Park, USA",
  { lat: 35.566747, lng: -83.500003 },
  "21 August 2017",
  "Total Eclipse of the Sun (17-22 August 2017) - Helen Mason gave a talk as the NASA Solar Expert to 100 families, 200 members of the public and reaching thousands of people on TV NASA 360",
  "https://www.sunspaceart.org/school-workshops/solar-eclipse-2017/"
);
addMarker(
  map,
  "INTERACT, Birmingham",
  { lat: 52.45113, lng: -1.931719 },
  "14 September 2017",
  "INTERACT - Institute of Physics/STFC/Communicators network - SunSpaceArt display - with 30 science communicators"
);
addMarker(
  map,
  "Royal Observatory Greenwich, London",
  { lat: 51.476873, lng: -0.0006 },
  "14 September 2017",
  "Helen Mason – public lecture and podcast"
);
addMarker(
  map,
  "Armagh Observatory and Planetarium, Northern Ireland",
  { lat: 54.351879, lng: -6.648574 },
  "2 October 2017",
  "Helen Mason and Geraldine Cox give three workshops to 5 schools (2-3 October 2017) - 200 students, Key Stage 2, and 10 teachers Funded by STFC SPARKS Award to Prof Gerry Doyle",
  "https://www.sunspaceart.org/school-workshops/postcards-from-the-solar-system/"
);
addMarker(
  map,
  "Park, Queen Elizabeth II Primary School, Northern Ireland",
  { lat: 54.442728, lng: -7.537895 },
  "2 October 2017",
  "Helen Mason and Geraldine Cox give three workshops to 5 schools (2-3 October 2017) - 200 students, Key Stage 2, and 10 teachers Funded by STFC SPARKS Award to Prof Gerry Doyle",
  "https://www.sunspaceart.org/school-workshops/postcards-from-the-solar-system/"
);
addMarker(
  map,
  "St Ronan’s Primary School, Northern Ireland",
  { lat: 54.595865, lng: -7.226752 },
  "2 October 2017",
  "Helen Mason and Geraldine Cox give three workshops to 5 schools (2-3 October 2017) - 200 students, Key Stage 2, and 10 teachers Funded by STFC SPARKS Award to Prof Gerry Doyle",
  "https://www.sunspaceart.org/school-workshops/postcards-from-the-solar-system/"
);
addMarker(
  map,
  "St Tierney’s Primary School, Northern Ireland",
  { lat: 54.244455, lng: -7.179482 },
  "3 October 2017",
  "Helen Mason and Geraldine Cox give three workshops to 5 schools (2-3 October 2017) - 200 students, Key Stage 2, and 10 teachers Funded by STFC SPARKS Award to Prof Gerry Doyle",
  "https://www.sunspaceart.org/school-workshops/postcards-from-the-solar-system/"
);
addMarker(
  map,
  "Ballymagee Primary School, Northern Ireland",
  { lat: 54.64589, lng: -5.634782 },
  "3 October 2017",
  "Helen Mason and Geraldine Cox give three workshops to 5 schools (2-3 October 2017) - 200 students, Key Stage 2, and 10 teachers Funded by STFC SPARKS Award to Prof Gerry Doyle",
  "https://www.sunspaceart.org/school-workshops/postcards-from-the-solar-system/"
);
addMarker(
  map,
  "Orchard County Primary School, Northern Ireland",
  { lat: 54.457522, lng: -6.607519 },
  "3 October 2017",
  "Helen Mason and Geraldine Cox give three workshops to 5 schools (2-3 October 2017) - 200 students, Key Stage 2, and 10 teachers Funded by STFC SPARKS Award to Prof Gerry Doyle",
  "https://www.sunspaceart.org/school-workshops/postcards-from-the-solar-system/"
);
addMarker(
  map,
  "Ascot Secondary School, Berkshire",
  { lat: 51.412775, lng: -0.705271 },
  "11 October 2017",
  "Helen Mason Public lecture"
);
addMarker(
  map,
  "International Astronomy Show, Coventry",
  { lat: 52.337017, lng: -1.516344 },
  "12 October 2017",
  "International Astronomy Show - Helen Mason gives public lecture to 50 amature astronomers"
);
addMarker(
  map,
  "Cambridge University Primary School, Cambridge",
  { lat: 52.219705, lng: 0.088457 },
  "19 October 2017",
  "Ra, the Sun God SunSpaceArt workshop, Helen Schell and Helen Mason - 30 students, Key Stage 2, and 1 teacher",
  "https://www.sunspaceart.org/school-workshops/ra-the-sun-god/"
);
addMarker(
  map,
  "St Edmunds College, Cambridge",
  { lat: 52.212768, lng: 0.108756 },
  "19 October 2017",
  "Festival of Ideas - Talk ‘The Colours of Space’ by Helen Schell and Helen Mason - 30 members of the public"
);
addMarker(
  map,
  "Swavesey Village College, Swavesey",
  { lat: 52.29418, lng: -0.008292 },
  "20 October 2017",
  "Primary Teachers STEM Meeting - Helen Mason gave talk on ESERO resources, leads workshop on ‘Exoplanets’ and runs SunSpaceArt display - 70 teachers for talk and 30 for each workshop"
);
addMarker(
  map,
  "British Antarctic Survey , Cambridge",
  { lat: 52.212802, lng: 0.079903 },
  "1 November 2017",
  "STEM meeting - on Polar Explorer Programme, SunSpaceArt display - 30 teachers and stem ambassadors"
);
addMarker(
  map,
  "Peterborough Astronomical Society, Peterborough",
  { lat: 52.591203, lng: -0.405545 },
  "2 November 2017",
  "Astronomy Club = Helen Mason gives talk to 50 amature astronomers"
);
addMarker(
  map,
  "Sheffield Institute of Physics, Sheffield",
  { lat: 53.380881, lng: -1.486223 },
  "12 December 2017",
  "Helen Mason gave public lecture - Institute of Physics web video "
);
addMarker(
  map,
  "Association of Science Educators, Liverpool",
  { lat: 53.406449, lng: -2.975511 },
  "5 January 2018",
  "Association of Science Educators (5/6 January 2018) Pop-up-Primary display table and SunSpaceArt workshop for primary teachers – Helen Schell and Helen Mason"
);
addMarker(
  map,
  "Long Eaton School, Derbyshire",
  { lat: 52.891899, lng: -1.281643 },
  "24 January 2018",
  "Stargazing Live, 150 students, Key Stage 2 - including Helen Mason talk to primary schools and GCSE/A-level students (100 students, Key Stage 4/5), public lecture to 150 families"
);
addMarker(
  map,
  "SEERIH, University of Manchester, Manchester",
  { lat: 53.46668, lng: -2.233581 },
  "30 January 2018",
  "Science and Engineering Education Research and Innovation Hub (SEERIH), Through the Science Window, SunSpaceArt CPD for Primary School Teachers, Helen Schell, Helen Mason, Sam Illingworth (poet) - 20 teachers"
);
addMarker(
  map,
  "AWISE, Lucy Cavendish College, Cambridge",
  { lat: 52.210766, lng: 0.110256 },
  "6 February 2018",
  "Association for Women in Science and Engineering (AWISE) – Keynote Address by Helen Mason ‘My Life in the Sun’ - 30 female scientists"
);
addMarker(
  map,
  "Oxford Road Community School, Reading",
  { lat: 51.455698, lng: -0.986739 },
  "8 February 2018",
  "ORSAnauts, Helen Mason – Sci/Art workshop on ‘Antarctica’ - 20 students, Key Stage 2, 1 teacher",
  "https://www.sunspaceart.org/school-workshops/polar-explorers/"
);
addMarker(
  map,
  "Maesglas Primary School, Wales",
  { lat: 51.566928, lng: -3.010834 },
  "14 February 2018",
  "Emma Wride (AstroCymru) and Sarah Bridgland - 45 students, Key Stage 2, Year 6 and 3 teachers "
);
addMarker(
  map,
  "The Derby High School of England, Stockport",
  { lat: 53.582687, lng: -2.305341 },
  "14 February 2018",
  "SunSpaceArt Workshop with 30 students, Key Stage 2",
  "https://www.sunspaceart.org/school-workshops/solar-satellite-booklets-in-stockport/"
);
addMarker(
  map,
  "Falinge High School, Stockport",
  { lat: 53.624285, lng: -2.167746 },
  "14 February 2018",
  "SunSpaceArt Workshop with 30 students, Key Stage 2",
  "https://www.sunspaceart.org/school-workshops/solar-satellite-booklets-in-stockport/"
);
addMarker(
  map,
  "St Ambrose Barlow RC High School, Stockport",
  { lat: 53.519839, lng: -2.361311 },
  "15 February 2018",
  "SunSpaceArt Workshop with 30 students, Key Stage 2",
  "https://www.sunspaceart.org/school-workshops/solar-satellite-booklets-in-stockport/"
);
addMarker(
  map,
  "Ambraham Moss , Stockport",
  { lat: 53.51163, lng: -2.23606 },
  "15 February 2018",
  "SunSpaceArt Workshop with 30 students, Key Stage 2",
  "https://www.sunspaceart.org/school-workshops/solar-satellite-booklets-in-stockport/"
);
addMarker(
  map,
  "Connaught House School, London",
  { lat: 51.513892, lng: -0.162976 },
  "20 February 2018",
  "SunSpaceArt workshop with Geraldine Cox, Dagny Yousuf, Krishna Mooroogen, Christabel Forbes, Helen Mason - 60 students, Key Stage 1/2, 3 teachers",
  "https://www.sunspaceart.org/school-workshops/creative-printing-at-connaught-house-school/"
);
addMarker(
  map,
  "Cambridge Physics Centre, Cambridge",
  { lat: 52.208796, lng: 0.092901 },
  "22 February 2018",
  "Helen Mason gives a talk to 100 sixth form students, Key Stage 4/5 and 15 teachers"
);
addMarker(
  map,
  "St Ambrose Barlow High School, Salford, Manchester",
  { lat: 53.52043, lng: -2.358387 },
  "26 February 2018",
  "‘Smart Materials’ SunSpaceArt workshop (26/26 February 2018), 4 secondary schools, Helen Schell, Deborah Davidson, Helen Masonwith 120 students, Key Stage 3 and 8 teachers",
  "https://www.sunspaceart.org/school-workshops/smart-materials-moon-village-design/"
);
addMarker(
  map,
  "The Derby High School, Bury, Manchester",
  { lat: 53.582716, lng: -2.305341 },
  "26 February 2018",
  "‘Smart Materials’ SunSpaceArt workshop (26/26 February 2018), 4 secondary schools, Helen Schell, Deborah Davidson, Helen Masonwith 120 students, Key Stage 3 and 8 teachers",
  "https://www.sunspaceart.org/school-workshops/smart-materials-moon-village-design/"
);
addMarker(
  map,
  "Falinge Park High School, Rochdale, Manchester",
  { lat: 53.624376, lng: -2.169304 },
  "26 February 2018",
  "‘Smart Materials’ SunSpaceArt workshop (26/26 February 2018), 4 secondary schools, Helen Schell, Deborah Davidson, Helen Masonwith 120 students, Key Stage 3 and 8 teachers",
  "https://www.sunspaceart.org/school-workshops/smart-materials-moon-village-design/"
);
addMarker(
  map,
  "Abraham Moss Community School, Crumpsall, Manchester",
  { lat: 53.511629, lng: -2.236051 },
  "26 February 2018",
  "‘Smart Materials’ SunSpaceArt workshop (26/26 February 2018), 4 secondary schools, Helen Schell, Deborah Davidson, Helen Masonwith 120 students, Key Stage 3 and 8 teachers",
  "https://www.sunspaceart.org/school-workshops/smart-materials-moon-village-design/"
);
addMarker(
  map,
  "Burnham grammar School, Burnham",
  { lat: 51.532456, lng: -0.653622 },
  "1 March 2018",
  "Helen Mason – Gold Crest mentor - gives talk to GCSE/6th formers - 40 students, Key Stage 4 and 3 teachers"
);
addMarker(
  map,
  "Wyton-on-the-Hill primary school, Huntingdon",
  { lat: 52.344079, lng: -0.112126 },
  "5 March 2018",
  "Geraldine Cox, Dagny Yousef, Helen Mason - 40 students, Key Stage 2, Year s 5/6 and 5 teachers",
  "https://www.sunspaceart.org/school-workshops/the-vibrating-sun-hidden-patterns/"
);
addMarker(
  map,
  "AWISE, Queen's College, Cambridge",
  { lat: 52.202136, lng: 0.113979 },
  "6 March 2018",
  "Helen Mason gives talk at the Cambridge Women in Physics dinner to 50 female university students"
);
addMarker(
  map,
  "Caedmon College, Whitby, North Yorkshire",
  { lat: 54.482008, lng: -0.62381 },
  "6 March 2018",
  "‘Space fashion for the Future' (6-9 March 2018) Heather MacRae, Helen Schell in partnership with Burberry (Ideas Foundation). Four schools - with 6 teachers, 200 students from different schools, Key Stage 3",
  "https://www.sunspaceart.org/school-workshops/burberry-women-pioneers/"
);
addMarker(
  map,
  "Eskdale School, Whitby, North Yorkshire",
  { lat: 54.471178, lng: -0.605458 },
  "7 March 2018",
  "‘Space fashion for the Future' (6-9 March 2018) Heather MacRae, Helen Schell in partnership with Burberry (Ideas Foundation). Four schools - with 6 teachers, 200 students from different schools, Key Stage 3",
  "https://www.sunspaceart.org/school-workshops/burberry-women-pioneers/"
);
addMarker(
  map,
  "Graham School, Scarborough, North Yorkshire",
  { lat: 54.279434, lng: -0.441033 },
  "8 March 2018",
  "‘Space fashion for the Future' (6-9 March 2018) Heather MacRae, Helen Schell in partnership with Burberry (Ideas Foundation). Four schools - with 6 teachers, 200 students from different schools, Key Stage 3",
  "https://www.sunspaceart.org/school-workshops/burberry-women-pioneers/"
);
addMarker(
  map,
  "Gearge Pindar School, Scarborough, North Yorkshire",
  { lat: 54.238492, lng: -0.394894 },
  "9 March 2018",
  "‘Space fashion for the Future' (6-9 March 2018) Heather MacRae, Helen Schell in partnership with Burberry (Ideas Foundation). Four schools - with 6 teachers, 200 students from different schools, Key Stage 3",
  "https://www.sunspaceart.org/school-workshops/burberry-women-pioneers/"
);
addMarker(
  map,
  "Warboys Primary School, Peterborough",
  { lat: 52.406556, lng: -0.08366 },
  "12 March 2018",
  "Helen Mason kicked off ‘Space Week’ by giving a talk to  80 students, Key Stage 2 and 10 teachers"
);
addMarker(
  map,
  "Tremains Primary School, Wales",
  { lat: 51.508513, lng: -3.552018 },
  "12 March 2018",
  "SunSpaceArt wokshop with Emma Wride (AstroCymru) and Sarah Bridgland with 40 students, Key Stage 2 and 3 teachers",
  "https://www.sunspaceart.org/school-workshops/space-go-in-wales/"
);
addMarker(
  map,
  "Litchard Primary School, Wales",
  { lat: 51.523639, lng: -3.579582 },
  "13 March 2018",
  "SunSpaceArt wokshop with Emma Wride (AstroCymru) and Sarah Bridgland with 40 students, Key Stage 2 and 3 teachers",
  "https://www.sunspaceart.org/school-workshops/space-go-in-wales/"
);
addMarker(
  map,
  "Coychurch Primary School, Wales",
  { lat: 51.507848, lng: -3.52688 },
  "15 March 2018",
  "SunSpaceArt wokshop with Emma Wride (AstroCymru) and Sarah Bridgland with 40 students, Key Stage 2 and 4 teachers",
  "https://www.sunspaceart.org/school-workshops/space-go-in-wales/"
);
addMarker(
  map,
  "Vange Primary School, Basildon, Essex",
  { lat: 51.554808, lng: 0.472725 },
  "14 March 2018",
  "Helen Mason (and John Dudeney) give talks with Heather MacRae, Polar Ambassador to 50 students and 3 teachers"
);
addMarker(
  map,
  "Temple Sutton Primary School, Southend, Essex",
  { lat: 51.552907, lng: 0.727263 },
  "14 March 2018",
  "Helen Mason (and John Dudeney) give talks with Heather MacRae, Polar Ambassador to 50 students and 3 teachers"
);
addMarker(
  map,
  "Reepham Secondary School, Norfolk",
  { lat: 52.758242, lng: 1.105824 },
  "19 March 2018",
  "Helen Mason – talk, ‘Stargazing Live’ - 80 students, Key Stage 3/4, 6 teachers and families "
);
addMarker(
  map,
  "Royal Observatory Greenwich, London",
  { lat: 51.476873, lng: -0.0007 },
  "20 March 2018",
  "Helen Mason gives ‘Think Space’ talk - 40 Key Stage 4/public"
);
addMarker(
  map,
  "SouthRise Primary School, Greenwich",
  { lat: 51.486331, lng: 0.08223 },
  "21 March 2018",
  "Space Day, Helen Mason and Clare Dudeney, Christabel Forbes and Emily Morey - 90 students, Key Stage 2, Year 6 and 5 teachers",
  "https://www.sunspaceart.org/school-workshops/pop-up-space-in-greenwich/"
);
addMarker(
  map,
  "Sir William Borlase Grammar School, Maidenhead",
  { lat: 51.570276, lng: -0.782253 },
  "22 March 2018",
  "Helen Mason – talk GCSE/6th formers - 40 students, Key Stage 4/5 and 3 teachers"
);
addMarker(
  map,
  "Rutherford Appleton Laboratory (RAL), Oxon",
  { lat: 51.574106, lng: -1.311282 },
  "27 March 2018",
  "Rutherford Appleton Laboratory (RAL) ‘SunSpaceArt’ - Schools workshop with Helen Schell, Geraldine Cox, Helen Mason and Alessandra Giunta (RAL Space) - 70 students, Key Stage 2, 6 teachers",
  "https://www.sunspaceart.org/school-workshops/solar-satellite-booklets-at-ral/"
);
addMarker(
  map,
  "Caldecott Primary School, Abingdon, Oxon",
  { lat: 51.664652, lng: -1.294142 },
  "27 March 2018",
  "Rutherford Appleton Laboratory (RAL) ‘SunSpaceArt’ - Schools workshop with Helen Schell, Geraldine Cox, Helen Mason and Alessandra Giunta (RAL Space) - 70 students, Key Stage 2, 6 teachers",
  "https://www.sunspaceart.org/school-workshops/solar-satellite-booklets-at-ral/"
);
addMarker(
  map,
  "Gorsington Primary School, Oxon",
  { lat: 51.718159, lng: -1.160193 },
  "27 March 2018",
  "Rutherford Appleton Laboratory (RAL) ‘SunSpaceArt’ - Schools workshop with Helen Schell, Geraldine Cox, Helen Mason and Alessandra Giunta (RAL Space) - 70 students, Key Stage 2, 6 teachers",
  "https://www.sunspaceart.org/school-workshops/solar-satellite-booklets-at-ral/"
);
addMarker(
  map,
  "South Stoke Primary School, Wallingford, Oxon",
  { lat: 51.547785, lng: -1.137443 },
  "27 March 2018",
  "Rutherford Appleton Laboratory (RAL) ‘SunSpaceArt’ - Schools workshop with Helen Schell, Geraldine Cox, Helen Mason and Alessandra Giunta (RAL Space) - 70 students, Key Stage 2, 6 teachers",
  "https://www.sunspaceart.org/school-workshops/solar-satellite-booklets-at-ral/"
);
addMarker(
  map,
  "The Ilsleys Primary School, Newbury, Oxon",
  { lat: 51.52434, lng: -1.289908 },
  "27 March 2018",
  "Rutherford Appleton Laboratory (RAL) ‘SunSpaceArt’ - Schools workshop with Helen Schell, Geraldine Cox, Helen Mason and Alessandra Giunta (RAL Space) - 70 students, Key Stage 2, 6 teachers",
  "https://www.sunspaceart.org/school-workshops/solar-satellite-booklets-at-ral/"
);
addMarker(
  map,
  "Rutherford Appleton Laboratory, Oxon",
  { lat: 51.574106, lng: -1.311382 },
  "27 March 2018",
  "Rutherford Appleton Laboratory (RAL) ‘SunSpaceArt’ - Schools workshop with Helen Schell, Geraldine Cox, Helen Mason and Alessandra Giunta (RAL Space) - 70 students, Key Stage 2, 6 teachers"
);
addMarker(
  map,
  "National Astronomy Meeting (NAM)/European Week of Astronomy and Space Science (EWASS) 2018, Liverpool",
  { lat: 53.406449, lng: -2.975597 },
  "3 April 2018",
  "(3-5 April 2018) Helen Mason organised ‘Space/Art’ session, she was awarded the RAS Annie Maunder Medal and Helen Schell was an invited speaker - 50 communicators and educators"
);
addMarker(
  map,
  "Cambridge Pub, Cambridge",
  { lat: 52.21011, lng: 0.101225 },
  "16 May 2018",
  "Pint of Science and Creative Reactions Sun/Art, Helen Mason worked with artist, Maria Merridan - 40 public and artists"
);
addMarker(
  map,
  "Institute of Physics , London",
  { lat: 51.532288, lng: -0.120537 },
  "17 May 2018",
  "Institute of Physics – round table discussion on ‘Girls and A-level Physics’ - with 50 IoP members"
);
addMarker(
  map,
  "Icknield primary School, Cambridgeshire",
  { lat: 51.909122, lng: -0.433624 },
  "23 May 2018",
  "SunSpaceArt workshops, Clare Dudeney, Christabel Forbes, Helen Mason - Key Stage 1 (30 students), Key Stage 2 (30 students) and 3 teachers",
  "https://www.sunspaceart.org/school-workshops/the-colours-of-space-at-icknield/"
);
addMarker(
  map,
  "Ely Cathedral, Ely",
  { lat: 52.398873, lng: 0.26367 },
  "30 May 2018",
  "‘Pop-up Science event with 50 families"
);
addMarker(
  map,
  "Cambridge Park, Cambridge",
  { lat: 52.21011, lng: 0.101125 },
  "2 June 2018",
  "SoapBox Science"
);
addMarker(
  map,
  "Goddard Space Flight Center, Washington DC",
  { lat: 38.99495, lng: -76.852323 },
  "14 June 2018",
  "GSFC – seminar on SunSpaceArt and meeting with NASA STE(A)M Innovation Centre - with 30 scientists and artists"
);
addMarker(
  map,
  "Gascoigne Primary School, London",
  { lat: 51.532892, lng: 0.079488 },
  "19 June 2018",
  "Great Science Share, Gascoigne Primary School and several other schools (Helen Mason and John Dudeney, polar scientist) - 200 students, 20 teachers, Key Stage 2"
);
addMarker(
  map,
  "Broadwater School, Surrey",
  { lat: 51.201274, lng: -0.594085 },
  "26 June 2018",
  "Get Space, Broadwater School and many other schools, Helen Mason Plenary talk - 100 students, 10 teachers, Key Stage 2 - SunSpaceArt workshops, Helen Schell and Helen Mason - 30 students and 3 teachers",
  "https://www.sunspaceart.org/school-workshops/get-space-v/"
);
addMarker(
  map,
  "Durham University, Durham",
  { lat: 54.7648, lng: -1.578181 },
  "28 June 2018",
  "Ogden Trust Science/Art event - Helen Mason and Helen Schell gave talks - with 40 artists"
);
addMarker(
  map,
  "Northern Saints Primary School, Sunderland",
  { lat: 54.922778, lng: -1.429854 },
  "29 June 2018",
  "SunSpaceArt workshop, Helen Schell, Helen Mason - with 60 students, 3 teachers, Key Stage 2",
  "https://www.sunspaceart.org/school-workshops/the-sun-our-star-in-sunderand/"
);
addMarker(
  map,
  "Christ Church Primary School, London",
  { lat: 51.531012, lng: -0.144053 },
  "12 July 2018",
  "Polar Science /Art workshop led by Clare Dudeney, with Christabel Forbes, Helen Mason and poet, Mario Petrucci - 60 students, Year  3 and 4, 3 teachers",
  "https://www.sunspaceart.org/school-workshops/watercolour-paintings-of-antarctica/"
);
addMarker(
  map,
  "Arbury Community Center, Cambridge",
  { lat: 52.226184, lng: 0.128971 },
  "13 July 2018",
  "Home Educators group – SunSpaceArt workshop - 20 students, 10 parents"
);
addMarker(
  map,
  "University of Leicester, Leicester",
  { lat: 52.622298, lng: -1.124419 },
  "3 September 2018",
  "John Coxon/MIST Outreach, panel, Helen Mason - 30 science communicators"
);
addMarker(
  map,
  "Westminster Reference Library, London",
  { lat: 51.509671, lng: -0.129814 },
  "4 September 2018",
  "Helen Mason gives talk to 50 members of the public"
);
addMarker(
  map,
  "Northern Saints Primary School, Sunderland",
  { lat: 54.922784, lng: -1.429854 },
  "18 September 2018",
  "‘Sun and Moon’ workshop-  Helen Schell and Helen Mason - 60 students and 3 teachers, Year  5",
  "https://www.sunspaceart.org/school-workshops/sun-and-moon-satellite-booklets-in-sunderland/"
);
addMarker(
  map,
  "Science Museum, London",
  { lat: 51.4978, lng: -0.1745 },
  "5 October 2018",
  "RAS – space week event, Science Museum's exhibition 'The Sun: Living With Our Star' -  Helen Mason on moderated panel discussion, ‘8 min’ dance - 80 members of the public"
);
addMarker(
  map,
  "SpaceCamps UK, Ushaw College, Durham",
  { lat: 54.788419, lng: -1.661102 },
  "10 October 2018",
  "Space Camp UK – Shine Trust, Stehen Hawking Foundation – SunSpaceArt CPD, Helen Schell runs training session for 30 teachers",
  "https://www.sunspaceart.org/school-workshops/sunspaceart-and-space-camp-uk/"
);
addMarker(
  map,
  "Blanche Nevile Primary School, London",
  { lat: 51.578995, lng: -0.154975 },
  "12 October 2018",
  "SEN, school for deaf students - with 40 students, ages 8-11, 4 teachers - Dagny Yousuf, Christabel Forbes, Geraldine Cox, Helen Mason, Krishna Mooroogen"
);
addMarker(
  map,
  "Royal Observatory Greenwich, London",
  { lat: 51.476873, lng: -0.0008 },
  "15 October 2018",
  "Flamstead Astro Soc, Royal Museums Greenwich, Helen Mason gives talk to 80 amateur Astronomers"
);
addMarker(
  map,
  "Vane Gallery, Newcastle",
  { lat: 54.973665, lng: -1.611303 },
  "16 October 2018",
  "‘Spectrum’, World Space Week – led by Helen Schell, Helen Mason - with 40 scientists and artists"
);
addMarker(
  map,
  "Llanyrafon Primary School, Wales",
  { lat: 51.648656, lng: -3.007228 },
  "23 October 2018",
  "Emma Wride and Sarah Bridgland run workshop - Year  5 – 53 students and 4 teachers",
  "https://www.sunspaceart.org/school-workshops/space-go-in-wales/"
);
addMarker(
  map,
  "New College, Swindon",
  { lat: 51.557411, lng: -1.758579 },
  "23 October 2018",
  "Helen Mason gives two public talks - 30 students Key Stage 4, 50 public"
);
addMarker(
  map,
  "Nythe Primary School , Swindon",
  { lat: 51.565495, lng: -1.740251 },
  "24 October 2018",
  "SunSpaceArt workshop with Clare Dudeney, Christabel Forbes, Helen Mason, Neville - 2 classes of 30 students and 4 teachers, Year  5",
  "https://www.sunspaceart.org/school-workshops/marbling-the-solar-system-in-swindon/"
);
addMarker(
  map,
  "John Innes Centre, Norwich",
  { lat: 52.622291, lng: 1.221381 },
  "26 October 2018",
  "TSN, Breckland Astron, Norwich Science Festival, Helen Mason gives talk to 25 amateur Astronomers"
);
addMarker(
  map,
  "Science Museum, London",
  { lat: 51.4978, lng: -0.1746 },
  "3 November 2018",
  "Family Sun Festival, SunSpaceArt workshops with 90 family members - Helen Schell, Helen Mason, Clare Dudeney",
  "https://www.sunspaceart.org/school-workshops/science-museum-the-sun-family-festival/"
);
addMarker(
  map,
  "Science Museum, London",
  { lat: 51.4978, lng: -0.1747 },
  "4 November 2018",
  "Family Sun Festival, SunSpaceArt workshops with 140 family members on 04 November 2020 - Helen Schell, Helen Mason, Clare Dudeney",
  "https://www.sunspaceart.org/school-workshops/science-museum-the-sun-family-festival/"
);
addMarker(
  map,
  "Canonbury Primary School, London",
  { lat: 51.544936, lng: -0.101158 },
  "5 November 2018",
  "SunSpaceArt workshop with Geraldine Cox, Dagny Yousuf, Christabel Forbes, Clare Dudeney, Helen Mason, Mario Petrucci - 30 students x 2 classes and 5 teachers, Year  5/6",
  "https://www.sunspaceart.org/school-workshops/sun-and-space-inspired-mobiles/"
);
addMarker(
  map,
  "Glassllwych Primary School, Wales",
  { lat: 51.58218, lng: -3.028048 },
  "8 November 2018",
  "SunSpaceArt Workshop with Emma Wride and Sarah Bridgland - Year 5 – 31 students and 2 teachers",
  "https://www.sunspaceart.org/school-workshops/pop-up-sun-in-wales/"
);
addMarker(
  map,
  "Ysgol Pontrobert, Wales",
  { lat: 52.703119, lng: -3.323646 },
  "19 November 2018",
  "SunSpaceArt Workshop with Emma Wride and Sarah Bridgland - Years 1-6, 31 students and 3 teachers",
  "https://www.sunspaceart.org/school-workshops/pop-up-sun-in-ysgol-pontrobert/"
);
addMarker(
  map,
  "Science Museum, London",
  { lat: 51.4978, lng: -0.1748 },
  "28 November 2018",
  "‘The Sun’ Lates with Helen Schell, Dagny Yousuf, Clare Dudeney, Christabel Forbes, Krishna Mooroogen - 150 adults – public and teachers",
  "https://www.sunspaceart.org/school-workshops/sun-lates-at-the-science-museum/"
);
addMarker(
  map,
  "Rutherford Appleton Laboratory, Didcot",
  { lat: 51.573814, lng: -1.314559 },
  "6 December 2018",
  "14th Appleton Space Conference - Helen Mason gave a talk"
);
addMarker(
  map,
  "Science Museum, London",
  { lat: 51.4978, lng: -0.1749 },
  "8 December 2018",
  "Science Museum - 'Night Owls', Spcial Educational Needs, SEN, young adults - Helen Schell, Christabel Forbes, helen Mason - with 30 young people.",
  "https://www.sunspaceart.org/school-workshops/night-owls-at-the-science-museum/"
);
addMarker(
  map,
  "Maths/Art Workshops, DAMTP, Cambridge",
  { lat: 52.210117, lng: 0.101215 },
  "10 December 2018",
  "Meeting to discuss Maths/Art projects"
);
addMarker(
  map,
  "Association of Science Educators, Birmingham",
  { lat: 52.45113, lng: -1.931708 },
  "11 January 2019",
  "Association of Science Educators, ASE (SunSpaceArt CPD workshop and Pop-up science display) Helen Mason, Helen Schell with 50 teachers"
);
addMarker(
  map,
  "Torquay Girls Secondary School, Devon",
  { lat: 50.475975, lng: -3.553408 },
  "15 January 2019",
  "Helen Mason gave a talk and ran a workshop with five classes of 30 Year  10 students and 5 teachers"
);
addMarker(
  map,
  "University College London, London",
  { lat: 51.524579, lng: -0.134029 },
  "21 January 2019",
  "Helen Mason talk to 30 undergraduate engineers"
);
addMarker(
  map,
  "Highway Primary School, Orpington, Kent",
  { lat: 51.359934, lng: 0.111087 },
  "22 January 2019",
  "Helen Schell and Helen Mason run school workshop with 32 Year  5 students and 3 teachers"
);
addMarker(
  map,
  "Institute of Physics , London",
  { lat: 51.532288, lng: -0.120637 },
  "5 February 2019",
  "Institute of Physics students’s event, Helen Mason attending"
);
addMarker(
  map,
  "University of Bath, Bath",
  { lat: 51.378035, lng: -2.327 },
  "6 February 2019",
  " Helen Mason gives a talk to 30 undergraduate students"
);
addMarker(
  map,
  "Somali Community Centre, Leicester",
  { lat: 52.639215, lng: -1.121782 },
  "9 February 2019",
  "Space Science Celebration with 20 Somali Youths, SOCOPA, STFC Wonder Match"
);
addMarker(
  map,
  "Rugby School, Rugby",
  { lat: 52.370342, lng: -1.261566 },
  "11 February 2019",
  " Helen Mason gives evening lecture to 40 students, Key Stage 4/5 and 4 teachers"
);
addMarker(
  map,
  "Saint Peter’s Methodist Primary School, Canterbury, Kent",
  { lat: 51.279983, lng: 1.077065 },
  "15 February 2019",
  "SpaceFund Jo –  Helen Mason, Christabel Forbes, Sehar Sheikh run workshop with 30 students, Key Stage 2, and 3 teachers"
);
addMarker(
  map,
  "Bryn Bach primary School, Wales",
  { lat: 51.786387, lng: -3.262116 },
  "19 February 2019",
  "Emma Wride and Sarah Bridgland run workshop with 30 students, Key Stage 2, Year 6, and 2 teachers",
  "https://www.sunspaceart.org/school-workshops/pop-up-sun-in-wales/"
);
addMarker(
  map,
  "Fochriw Primary School, Merythr Tydfil, Wales",
  { lat: 51.742677, lng: -3.29568 },
  "21 February 2019",
  "Emma Wride and Sarah Bridgland run workshop with 30 students, Key Stage 2, Year s5-6, and 2 teachers",
  "https://www.sunspaceart.org/school-workshops/pop-up-sun-in-wales/"
);
addMarker(
  map,
  "St Michaels Primary School, Surrey",
  { lat: 51.104889, lng: 0.139303 },
  "26 February 2019",
  "Helen Schell and Helen Mason run workshop with 30 students, Key Stage 2, and 2 teachers"
);
addMarker(
  map,
  "Science Museum, London",
  { lat: 51.4978, lng: -0.175 },
  "2 March 2019",
  "Helen Schell, Helen Mason, Clare Dudeney, Christabel Forbes, Juie Shetye (solar scientist) and Minal Patel run family workshop on the Sun with 200 people "
);
addMarker(
  map,
  "Science Museum, London",
  { lat: 51.4978, lng: -0.1751 },
  "3 March 2019",
  "Helen Schell, Helen Mason, Clare Dudeney, Christabel Forbes, Juie Shetye (solar scientist) and Minal Patel run family workshop on the Sun with 300 people"
);
addMarker(
  map,
  "Vittoria Primary School, Islington , London",
  { lat: 51.535465, lng: -0.112579 },
  "4 March 2019",
  "Our Place in the Universe - Helen Mason, Christabel Forbes and Clare Dudeney run workshop with 30 students and 2 teachers - Year 5 (Key Stage 2)",
  "http://www.sunspaceart.org/school-workshops/our-place-in-the-universe-vittoria-ps/"
);
addMarker(
  map,
  "St Ambrose Barlow RC High School, Manchester",
  { lat: 53.520434, lng: -2.358387 },
  "6 March 2019",
  "Helen Schell and Helen Mason give workshop with 46 students, Key Stage 3, and 2 teachers"
);
addMarker(
  map,
  "Physics in Action, Emmanuel Centre, Talk to Sixth formers, London",
  { lat: 51.496139, lng: -0.129032 },
  "8 March 2019",
  "Helen Mason gives talk to 200 female A-level students and 20 teachers from 15 schools"
);
addMarker(
  map,
  "Clytha Primary School, Newport, Wales",
  { lat: 51.584867, lng: -3.011424 },
  "8 March 2019",
  "Emma Wride and Sarah Bridgland give workshop with 30 students, Key Stage 2, Year 6, and 2 teachers",
  "https://www.sunspaceart.org/school-workshops/pop-up-sun-in-wales/"
);
addMarker(
  map,
  "Astronomy Society, Kidderminster",
  { lat: 52.383217, lng: -2.23351 },
  "13 March 2019",
  "Helen Mason gives Astro club talk with 40 members of the public"
);
addMarker(
  map,
  "King Charles I School, Kidderminster",
  { lat: 52.383848, lng: -2.234276 },
  "14 March 2019",
  "Helen Mason gives talk to 30 students, Key Stage 3, 10 students Key Stage 4/5 and 5 teachers"
);
addMarker(
  map,
  "Maesglas Primary School, Newport, Wales",
  { lat: 51.566915, lng: -3.010834 },
  "14 March 2019",
  "Emma Wride and Sarah Bridgland give school workshop to 45 students. Key Stage 2, Year 6 and 2 teachers",
  "https://www.sunspaceart.org/school-workshops/pop-up-sun-in-wales/"
);
addMarker(
  map,
  "Manor School, Brent , London",
  { lat: 51.537052, lng: -0.221215 },
  "15 March 2019",
  "Helen Mason, Christabel Forbes and Sehar Sheikh give a school workship to 25 students with Special Educational Needs and 3 teachers",
  "https://www.sunspaceart.org/school-workshops/journeys-through-space/"
);
addMarker(
  map,
  "Sandfield Close School, Leicester",
  { lat: 52.668077, lng: -1.096999 },
  "19 March 2019",
  "Helen Schell, Helen Mason and Katrina Porteous (poet) give workshop with 30 students, Key Stage 2, and 5 teachers"
);
addMarker(
  map,
  "DAMTP, University of Cambridge, Cambridge",
  { lat: 52.21011, lng: 0.101004 },
  "23 March 2019",
  "Helen Mason takes part in CMS/Maths Faculty Open Day with 100 members of the public"
);
addMarker(
  map,
  "St Andrew’s Primary School, Hove",
  { lat: 50.830605, lng: -0.174918 },
  "27 March 2019",
  "Helen Mason and John Dudeney give workshop on Polar Science with  30 students and 2 teachers, Key Stage 1"
);
addMarker(
  map,
  "West Hove Infant School, Hove",
  { lat: 50.834892, lng: -0.190273 },
  "27 March 2019",
  "Helen Mason and John Dudeney give workshop on Polar Science with  30 students and 2 teachers, Key Stage 2"
);
addMarker(
  map,
  "Allensbank Primary School, Wales",
  { lat: 51.502256, lng: -3.185988 },
  "8 April 2019",
  "Emma Wride (AstroCymru) and Sarah Bridgland give school workshop with 34 students, Key Stage 2, Year 5-6, and 2 teachers",
  "https://www.sunspaceart.org/school-workshops/pop-up-sun-in-wales/"
);
addMarker(
  map,
  "Astronomy Society, Cardiff, Cardiff",
  { lat: 51.488931, lng: -3.179774 },
  "16 May 2019",
  "Helen Mason gives talk to Astronomy club with 70 members of the public"
);
addMarker(
  map,
  "Ely Cathedral, Ely",
  { lat: 52.398873, lng: 0.26357 },
  "20 May 2019",
  "Moon exhibition and events (20-30 May 2019) - attracting 21,200 visitors,  Helen Schell and Helen Mason give public workshops, Helen Schell's artwork is on display"
);
addMarker(
  map,
  "Ely Cathedral, Ely",
  { lat: 52.398873, lng: 0.26347 },
  "20 May 2019",
  "Helen Schell and Helen Mason give school workshops to 60 students, Key Stage 2, and 4 teachers from Ten Mile Bank Primary and Hilgay Primary"
);
addMarker(
  map,
  "Ely Cathedral, Ely",
  { lat: 52.398873, lng: 0.26337 },
  "21 May 2019",
  "Helen Schell and Helen Mason give school workshops to 30 students, Key Stage 3, 20 students, Key Stage 2 and 6 teachers from Soham Village College and Foxton Primary"
);
addMarker(
  map,
  "Science Museum, London",
  { lat: 51.4978, lng: -0.1752 },
  "25 May 2019",
  "Helen Schell, Sehar Sheikh and Olwen Hill (teacher) give family workshops on the Moon to 66 members of the public"
);
addMarker(
  map,
  "Ely Cathedral, Ely",
  { lat: 52.398873, lng: 0.26327 },
  "29 May 2019",
  "Helen Mason runs family drop in workshop with 80 families"
);
addMarker(
  map,
  "Torriano School, Camden, London",
  { lat: 51.549707, lng: -0.132662 },
  "3 June 2020",
  "Helen Schell, Helen Mason and Alice White run school workshop with 60 students, Key Stage 2, Year 5, and 5 teachers"
);
addMarker(
  map,
  "Ysgol Gyun Y Strade, Wales",
  { lat: 51.686698, lng: -4.181412 },
  "5 June 2019",
  "Emma Wride and Sarah Bridgland run school workshops for GSS involving 54 students, Key Stage 2, Year s 5/6 and 6 teachers from five schools - Ysgol Gyun Y Strade (host), Ysgol Trimsaran, Ysgol Mynydd y Garreg, Ysgol Gymraeg y Ffwrnes and Ysgol Gymraeg Gwenllian"
);
addMarker(
  map,
  "Primary Science Education Conference, Edinburgh",
  { lat: 55.946191, lng: -3.209815 },
  "7 June 2019",
  "Primary Science Education Conference / Primary Science Teachers Trust. Helen Mason gives training session for 30 teachers "
);
addMarker(
  map,
  "Ysgol Glan Y Mor, Wales",
  { lat: 52.881921, lng: -4.422538 },
  "10 June 2019",
  "Emma Wride and Sarah Bridgland give school workshops to 110 students, Key Stage 2, Years 5/6, and 6 teachers"
);
addMarker(
  map,
  "National Botanic Garden of Wales, Wales",
  { lat: 51.83994, lng: -4.151486 },
  "18 June 2019",
  "Great Science Share - Emma Wride, Helen Mason and John Dudeney give several talks to 283 students, Key Stage 2, 26 teachers and 39 home educators"
);
addMarker(
  map,
  "Purfleet Primary School, Purfleet",
  { lat: 51.485444, lng: 0.234006 },
  "20 June 2019",
  "Helen Mason, John Dudeney, Clare Dudeney and Kulvinder Johal (PSTT) run school workshop on Polar Explorers with 90 students, Key Stage 2, Year 5 and 6 teachers"
);
addMarker(
  map,
  "Torriano Primary School, London",
  { lat: 51.549714, lng: -0.132662 },
  "21 June 2019",
  "Helen Mason visits ‘Sun exhibition’ for families"
);
addMarker(
  map,
  "St Ambrose Barlow RC High School, Stockport",
  { lat: 53.519839, lng: -2.361411 },
  "25 June 2019",
  "Helen Schell runs a second workhop with the school involving 30students, Key Stage 3 and 3 teachers"
);
addMarker(
  map,
  "Durham University, Durham",
  { lat: 54.7648, lng: -1.578281 },
  "27 June 2019",
  "Helen Schell and Helen Mason take part in an event on Changing Cosmic Perceptions with 40 Artists and Scientists"
);
addMarker(
  map,
  "Lancaster University, Lancaster",
  { lat: 54.010407, lng: -2.787718 },
  "2 July 2019",
  "Helen Mason and Helen Schell run a workshop on 'Engaging the Public and Schools with Science through the Solar System' at the National Astronomy Meeting 2019. With 60 Researchers and Science communicators"
);
addMarker(
  map,
  "Institute of Physics, London",
  { lat: 51.532288, lng: -0.120737 },
  "20 July 2019",
  "Helen Schell gives a family workshop on a 'Moon Adventure' for 75 people"
);
addMarker(
  map,
  "Science Museum, London",
  { lat: 51.4978, lng: -0.1753 },
  "21 July 2019",
  "Helen Schell, Helen Mason, Alice White and Olwen Hill (teacher) run family workshops on the ‘Moon’ with 140 people"
);
addMarker(
  map,
  "Institute of Physics, London",
  { lat: 51.532288, lng: -0.120837 },
  "31 July 2019",
  "Helen Schell gives a family workshop on a 'Moon Adventure' for 200 people"
);
addMarker(
  map,
  "Manchester Museum of Science and Industry (MOSI), Manchester",
  { lat: 53.477165, lng: -2.254561 },
  "17 August 2019",
  "Helen Schell, Sehar Sheikh, Prof Robert Walsh, Dr Juie Shetye, Malcom Walsh and Shahbaz Chaudhry run family workshop with 220 people"
);
addMarker(
  map,
  "Manchester Museum of Science and Industry (MOSI), Manchester",
  { lat: 53.477165, lng: -2.254661 },
  "18 August 2019",
  "Helen Schell, Sehar Sheikh, Prof Robert Walsh, Dr Juie Shetye, Malcom Walsh and Shahbaz Chaudhry run family workshop with 200 people"
);
addMarker(
  map,
  "Whitton Community Primary School, Ipswich",
  { lat: 52.081175, lng: 1.128888 },
  "2 September 2019",
  "Helen Mason held a CPD session with 35 teachers, Key Stage 2"
);
addMarker(
  map,
  "The University of Central Lancashire, Preston",
  { lat: 53.763957, lng: -2.709138 },
  "4 September 2019",
  "Helen Mason and Helen Schell participated in the INTERACT event - running two sessions (one with Durham University, ‘Changing Cosmic Perceptions’, one led by Helen Schell on the ‘Moon’). Interacted with about 70 researchers and science communicators. Also had a SunSpaceArt display table."
);
addMarker(
  map,
  "RICE University Space Institute, USA",
  { lat: 29.717236, lng: -95.401799 },
  "7 September 2019",
  "Hellen Schell visited NASA (7-21 Sept 2019), RICE University and the Learning and Performance Institute - meeting 25 scientists and 1 artist"
);
addMarker(
  map,
  "Ely Cathedral Conference Center, Ely",
  { lat: 52.39791, lng: 0.263935 },
  "13 September 2019",
  "Helen Mason gives talk at Ely Astronomy Society to 40 amateur astronomers and the general public"
);
addMarker(
  map,
  "Wymondham College, Norfolk",
  { lat: 52.544753, lng: 1.057658 },
  "18 September 2019",
  "Helen Mason gives talk to 60 students, Key Stage 4/5 and 5 teachers"
);
addMarker(
  map,
  "National Solar Observatory, ",
  { lat: 40.011751, lng: -105.245774 },
  "30 September 2019",
  "Helen Mason talks at the National Solar Observatory (NSO)"
);
addMarker(
  map,
  "High Altitude Observatory, Boulder",
  { lat: 40.031172, lng: -105.246044 },
  "3 October 2019",
  "Helen Mason talks at High Altitude Observatory (HAO) "
);
addMarker(
  map,
  "Grand County High School, Moab",
  { lat: 38.565022, lng: -109.545373 },
  "8 October 2019",
  "Helen Mason gives talk at a school in Moab, Utah to 30 students, Key Stage 4/5 and 1 teacher"
);
addMarker(
  map,
  "The Winter Gardens, Blackpool",
  { lat: 53.817012, lng: -3.052007 },
  "15 October 2019",
  "The Sun exhibition and workshop with the University of Central Lancashire (UCLAN) for the Blackpool Illuminations (15-18 Oct 2019) - led by Prof Robert Walsh. School workshops led by Helen Schell, Helen Mason, Christabel Forbes Forbes, Sehar Sheikh and Juie Shetye with 220 students, Key Stage 2, Years 5 and 6 and 15 teachers"
);
addMarker(
  map,
  "AKS Lytham Independent School, Blackpool",
  { lat: 53.742193, lng: -3.012615 },
  "15 October 2019",
  "The Sun exhibition and workshop with the University of Central Lancashire (UCLAN) for the Blackpool Illuminations (15-18 Oct 2019) - led by Prof Robert Walsh. School workshops led by Helen Schell, Helen Mason, Christabel Forbes Forbes, Sehar Sheikh and Juie Shetye with 220 students, Key Stage 2, Years 5 and 6 and 15 teachers"
);
addMarker(
  map,
  "Revoe Learning Academy, Blackpool",
  { lat: 53.807484, lng: -3.04335 },
  "16 October 2019",
  "The Sun exhibition and workshop with the University of Central Lancashire (UCLAN) for the Blackpool Illuminations (15-18 Oct 2019) - led by Prof Robert Walsh. School workshops led by Helen Schell, Helen Mason, Christabel Forbes Forbes, Sehar Sheikh and Juie Shetye with 220 students, Key Stage 2, Years 5 and 6 and 15 teachers"
);
addMarker(
  map,
  "St Kentigern's Primary School, Manchester",
  { lat: 53.44274, lng: -2.236848 },
  "17 October 2019",
  "The Sun exhibition and workshop with the University of Central Lancashire (UCLAN) for the Blackpool Illuminations (15-18 Oct 2019) - led by Prof Robert Walsh. School workshops led by Helen Schell, Helen Mason, Christabel Forbes Forbes, Sehar Sheikh and Juie Shetye with 220 students, Key Stage 2, Years 5 and 6 and 15 teachers"
);
addMarker(
  map,
  "Unity Academy Blackpool, Blackpool",
  { lat: 53.835841, lng: -3.037993 },
  "18 October 2019",
  "The Sun exhibition and workshop with the University of Central Lancashire (UCLAN) for the Blackpool Illuminations (15-18 Oct 2019) - led by Prof Robert Walsh. School workshops led by Helen Schell, Helen Mason, Christabel Forbes Forbes, Sehar Sheikh and Juie Shetye with 220 students, Key Stage 2, Years 5 and 6 and 15 teachers"
);
addMarker(
  map,
  "Westminster Primary Academy, Blackpool, Blackpool",
  { lat: 53.829676, lng: -3.047987 },
  "19 October 2019",
  "The Sun exhibition and workshop with the University of Central Lancashire (UCLAN) for the Blackpool Illuminations (15-18 Oct 2019) - led by Prof Robert Walsh. School workshops led by Helen Schell, Helen Mason, Christabel Forbes Forbes, Sehar Sheikh and Juie Shetye with 220 students, Key Stage 2, Years 5 and 6 and 15 teachers"
);
addMarker(
  map,
  "Exeter Road Community Primary School, Exmouth, Devon",
  { lat: 50.622333, lng: -3.41128 },
  "7 November 2019",
  "Helen Schell and Helen Mason run school workshop with 90 students, Key Stage 1, 90 students, Key Stage 2 and 12 teachers"
);
addMarker(
  map,
  "Somali Community Centre, Leicester",
  { lat: 52.642567, lng: -1.127285 },
  "23 November 2019",
  "Wonder Match (Sarah Langford lead) Science Celebration - Helen Mason led workshop with 30 Somali Youths and 3 teachers"
);
addMarker(
  map,
  "Ysgol Gynradd Gymraeg, Llyn-Y-Forwyn in Ferndale, Rhondda, Wales",
  { lat: 51.658681, lng: -3.450206 },
  "27 November 2019",
  "Emma Wride runs workshop with 30 students, Key Stage 2, Year 6 and 2 teachers"
);
addMarker(
  map,
  "Keir Hardie Primary School, London",
  { lat: 51.516381, lng: 0.019907 },
  "3 December 2019",
  " Helen Mason, Clare Dudeney and Christabel Forbes run workshop on ‘Journey into Space' with 60 students, Key Stage 2, and 4 teachers"
);
addMarker(
  map,
  "Ysgol Gynradd Llandeilo Primary School, Wales",
  { lat: 51.886529, lng: -3.990139 },
  "6 December 2019",
  "Emma Wride runs workshop with 30 students, Key Stage 2, Year 6 and 2 teachers"
);
addMarker(
  map,
  "Association of Science Educators, Reading",
  { lat: 51.440776, lng: -0.94677 },
  "10 January 2020",
  "Association of Science Educators conference - Helen Mason and Helen Schell give SunSpaceArt CPD session and PopUpPrimary workshop"
);
addMarker(
  map,
  "Somali Community Centre, Leicester",
  { lat: 52.64258, lng: -1.127307 },
  "18 January 2020",
  "Space Center (visit by Somali Youths) with 30 students and 4 teachers"
);
addMarker(
  map,
  "BBC - Radio4 - In Our Time, London",
  { lat: 51.518587, lng: -0.143756 },
  "23 January 2020",
  "Helen Mason joins a panel debate on BBC R4 – ‘In Our Time – Solar Wind’ reaching 3 million members of the public"
);
addMarker(
  map,
  "University Centre for Astronomy and Astrophysics (IUCAA), Pune, India",
  { lat: 18.55934, lng: 73.82531 },
  "7 February 2020",
  "Helen Mason gives talk ‘From Sun to Earth’ to 400 students, Key Stage 3/4 and 20 teachers"
);
addMarker(
  map,
  "Institute of Physics , London",
  { lat: 51.532288, lng: -0.120937 },
  "5 February 2020",
  "Helen Schell participated in the ‘Art and Science Teaching Project’ led by Exeter University with 15 primary and secondary school teachers and 7 organisers"
);
addMarker(
  map,
  "Sacred Heart R.C. Primary School, Bolton",
  { lat: 53.552416, lng: -2.52187 },
  "2 March 2020",
  "Helen Schell and Helen Mason led a CPD session with 7 teachers and 13 trainee teachers"
);
addMarker(
  map,
  "Great and Little Shelford P.S., Cambridgeshire",
  { lat: 52.14638, lng: 0.129559 },
  "9 March 2020",
  "Helen Schell and Helen Mason ran SunSpaceArt school workshop"
);
addMarker(
  map,
  "Sacred Heart R.C. Primary School, Bolton",
  { lat: 53.552416, lng: -2.52197 },
  "21 May 2020",
  "Helen Schell and Helen Mason led a follow up CPD session with 7 teachers and 13 trainee teachers via zoom"
);
