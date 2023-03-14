export const ICategory = [
  { label: "accomodation", name: "accommodation" },
  { label: "activity", name: "activity" },
  { label: "administrative", name: "administrative" },
  { label: "amenity", name: "amenity" },
  { label: "beach", name: "beach" },
  { label: "camping", name: "camping" },
  { label: "catering", name: "catering" },
  { label: "childcare", name: "childcare" },
  { label: "education", name: "education" },
  { label: "entertainment", name: "entertainment" },
  { label: "healthcare", name: "healthcare" },
  { label: "leisure", name: "leisure" },
  { label: "low_emission_zone", name: "low_emission_zone" },
  { label: "man_made", name: "man_made" },
  { label: "natural", name: "natural" },
  { label: "national_park", name: "national_park" },
  { label: "office", name: "office" },
  { label: "parking", name: "parking" },
  { label: "pet", name: "pet" },
  { label: "political", name: "political" },
  { label: "populated_place", name: "populated_placeatural" },
  { label: "postal_code", name: "postal_code" },
  { label: "production", name: "production" },
  { label: "public_transport", name: "public_transport" },
  { label: "rental", name: "rental" },
  { label: "populated_place", name: "npopulated_placeatural" },
  { label: "service", name: "service" },
  { label: "ski", name: "ski" },
  { label: "sport", name: "sport" },
];
export const ICondition = [
  { label: "access", name: "access" },
  { label: "access_limited", name: "access_limited" },
  { label: "dogs", name: "dogs" },
  { label: "fee", name: "fee" },
  { label: "halal", name: "halal" },
  { label: "internet_access", name: "internet_access" },
  { label: "named", name: "named" },
  { label: "no_fee", name: "no_fee" },
  { label: "organic", name: "organic" },
  { label: "vegan", name: "vegan" },
  { label: "vegetarian", name: "vegetarian" },
  { label: "wheelchair", name: "wheelchair" },
];

const number = 10000;
const radius = Math.floor(Math.random() * (number - 1000) + 1000) + 1;

console.log(radius);
export const IFilter = [
  {
    label: "Abia, Nigeria",
    name: `place:514c9c4fd009191e405908a89fb05ed31540f00101f901dda938000000000092030441626961`,
  },
  {
    label: "Adamawa, Nigeria",
    name: `place:51f75e5c1154cf284059ca6f24aa72a92240f00101f901a6c43800000000009203074164616d617761`,
  },
  {
    label: "Akwa Ibom, Nigeria",
    name: `place:51da8d6e9712691f4059d02f18620b9c1340f00101f9011fb1380000000000920309416b77612049626f6d`,
  },
  {
    label: "Anambra, Nigeria",
    name: `place:51f263970143be1b405924c85b2159e91840f00101f901b1b1380000000000920307416e616d627261`,
  },
  {
    label: "Bauchi, Nigeria",
    name: `place:51f263970143be1b405924c85b2159e91840f00101f901b1b1380000000000920307416e616d627261`,
  },
  {
    label: "Bayelsa, Nigeria",
    name: `place:516d838faf5045184059e8b85a0490111340f00101f90104b3380000000000920307426179656c7361`,
  },
  {
    label: "Benue, Nigeria",
    name: `place:51cee1dfb0d27a214059de68cf9faf561d40f00101f901ecb338000000000092030542656e7565`,
  },
  {
    label: "Borno, Nigeria",
    name: `place:51bcf5b74ac44c2a40594de9e3db5ec42740f00101f901cfc7380000000000920305426f726e6f`,
  },
  {
    label: "Cross-River, Nigeria",
    name: `place:512efa1b2ac3312140592e58e2b430791740f00101f9019ab438000000000092030b43726f7373205269766572`,
  },
  {
    label: "Delta, Nigeria",
    name: `place:51724974054bba174059ce96ea9478cf1640f00101f90156b738000000000092030544656c7461`,
  },
  {
    label: "Ebonyi, Nigeria",
    name: `place:51f58547e5e3082040591cddb616c70d1940f00101f901cfb738000000000092030645626f6e7969`,
  },
  {
    label: "Edo, Nigeria",
    name: `place:51c72cefa4f5b71740599223a2409c881a40f00101f901ffb738000000000092030345646f`,
  },
  {
    label: "Ekiti, Nigeria",
    name: `place:51315a0d40603e1540597e87c9763be01e40f00101f90122b8380000000000920305456b697469`,
  },
  {
    label: "Enugu, Nigeria",
    name: `place:512cedc3e698c11d4059ab694fb886211a40f00101f9015cb8380000000000920305456e756775`,
  },
  {
    label: "Imo, Nigeria",
    name: `place:51bdab50e4453c1c405921aab488c3491640f00101f901c1ba380000000000920303496d6f`,
  },
  {
    label: "Jigawa, Nigeria",
    name: `place:5137c4b61d5821234059ef99e14562732840f00101f901c4813800000000009203064a6967617761`,
  },
  {
    label: "Kaduna, Nigeria",
    name: `place:5133af730470d81e4059f5e0ad3c35bf2440f00101f901a9993800000000009203064b6164756e61`,
  },
  {
    label: "Kano, Nigeria",
    name: "place:519ccff59b9f0d2140596d8707c2947c2740f00101f9015e9d3800000000009203044b616e6f",
  },
  {
    label: "Katsina, Nigeria",
    name: `place:51dfd276d1b0861e405995f0c2d0d6c22840f00101f901f9a13800000000009203074b617473696e61`,
  },

  {
    label: "Kebbi, Nigeria",
    name: `place:51705be4392b1e124059a8bf0d3ece6c2740f00101f9011d943800000000009203054b65626269`,
  },
  {
    label: "Kogi, Nigeria",
    name: `place:51ca0a651e96c41a4059aa16f56894ee1e40f00101f90153bb3800000000009203044b6f6769`,
  },
  {
    label: "Kwara, Nigeria",
    name: `place:5128182ca63b8a1140593903168efbee2140f00101f901cabb3800000000009203054b77617261`,
  },
  {
    label: "Lagos, Nigeria",
    name: `place:517007ea9447270b4059f44cd797fad11940f00103f901449ca401000000009203054c61676f73`,
  },
  {
    label: "Nassarawa, Nigeria",
    name: `place:5155d98a6446082340594dd33cf3d3722240f00101f901a3c5380000000000920307506c6174656175`,
  },
  {
    label: "Niger, Nigeria",
    name: `place:51720434fb8d601640599ec2dc7962d92340f00101f901f0bc3800000000009203054e69676572`,
  },
  {
    label: "Ogun, Nigeria",
    name: `place:5155d98a6446082340594dd33cf3d3722240f00101f901a3c5380000000000920307506c6174656175`,
  },
  {
    label: "Osun, Nigeria",
    name: `place:51872c91852b14124059ff2401e22d3f1e40f00101f90140be3800000000009203044f73756e`,
  },
  {
    label: "Oyo, Nigeria",
    name: `place:51590620bb2bea0c40594a31099522512040f00101f9016ac53800000000009203034f796f`,
  },
  {
    label: "Plateau, Nigeria",
    name: `place:5155d98a6446082340594dd33cf3d3722240f00101f901a3c5380000000000920307506c6174656175`,
  },
  {
    label: "Rivers, Nigeria",
    name: `place:5191e1860cb1a71b405945047977b4551340f00101f90127c6380000000000920306526976657273`,
  },
  {
    label: "Sokoto, Nigeria",
    name: `place:51c0c3556b8348154059d32fbe857b1b2a40f00101f901e891380000000000920306536f6b6f746f`,
  },
  {
    label: "Taraba, Nigeria",
    name: `place:512701013f3e8f25405941059acec0082040f00101f90192c6380000000000920306546172616261`,
  },
  {
    label: "Zamfara, Nigeria",
    name: `place:51bf23098dbae8184059124f2036c13a2840f00101f9014c903800000000009203075a616d66617261`,
  },

  {
    label: "United Kingdom",
    name: `place:5177eb3d85e5d60ac0599080cc75e95c4b40f00101f901c5f2000000000000c0020b92030e556e69746564204b696e67646f6d`,
  },
  {
    label: "United States Virgin Islands",
    name: "place:51e7f622fab03550c0596be910b0790f3240f00101f901b26004000000000092031c556e69746564205374617465732056697267696e2049736c616e6473",
  },
  {
    label: "Paris, France",
    name: "place:519cde56ca3cbe02405952699d53a56d4840f00101f9016517010000000000c002099203055061726973",
  },
  {
    label: "Metropolitan, France",
    name: "place:51a75138518eb3024059322d663c4b444740f00101f9010c6c1500000000009203164672616e6365206dc3a974726f706f6c697461696e65",
  },
  {
    label: "Mexico",
    name: "place:517511ecfa17ba59c059a677a6ed82f53740f00101f901febf010000000000c0020b9203074dc3a97869636f",
  },
  {
    label: "Illonois",
    name: "place:5172a403a4814956c0596c61e646df0f4440f00101f901dade010000000000920308496c6c696e6f6973",
  },
  {
    label: "Spain",
    name: "place:519fa15ae5a50f10c059b3150a9b08cc4340f00101f9016d02140000000000c0020b92030745737061c3b161",
  },
  {
    label: "Saudi Arabia",
    name: "place:51c93c09d3b12c464059c7e44fcd0f043840f00101f90180b1040000000000c0020b920310d8a7d984d8b3d8b9d988d8afd98ad8a9",
  },
  {
    label: "Toronto, Canada",
    name: "place:51f63a16f2dbd853c059ccb2cf1489dc4540f00101f90173f2040000000000c00209920307546f726f6e746f",
  },
  {
    label: "Alberta, Canada",
    name: "place:510686bacfd7a05cc059a38df2cd86954b40f00101f90112f8050000000000920307416c6265727461",
  },
  {
    label: "Prince Edward Island, Canada",
    name: "place:51ebe70600df8c4fc059e0822456bf4f4740f00101f901cbf70500000000009203145072696e6365204564776172642049736c616e64",
  },
  {
    label: "Yukon, Canada",
    name: "place:516a710f2e0df260c059780c38340dde4f40f00101f9011ff905000000000092030559756b6f6e",
  },
  {
    label: "Saskatchewan, Canada",
    name: "place:510180cf5c1e795ac059a012506569354b40f00101f9010af805000000000092030c5361736b617463686577616e",
  },
  {
    label: "Texas, US",
    name: "place:510180cf5c1e795ac059a012506569354b40f00101f9010af805000000000092030c5361736b617463686577616e",
  },
  {
    label: "Alabama, US",
    name: "place:519b87b96c0cb655c0599e753023de604040f00101f9019e78020000000000920307416c6162616d61",
  },
  {
    label: "Arizona, US",
    name: "place:51794504138aea5bc059f798a9f68a254140f00101f901e2780200000000009203074172697a6f6e61",
  },
  {
    label: "California, US",
    name: "place:514f7c3c037eea5dc059d422512b729b4240f00101f901638602000000000092030a43616c69666f726e6961",
  },
  {
    label: "Florida, US",
    name: "place:512bfac038c5a254c059f90f01cee96b3c40f00101f9010279020000000000920307466c6f72696461",
  },
  {
    label: "Georgia, US",
    name: "place:5137e0d90255db54c059f1575e8ebd514040f00101f901a57802000000000092030747656f72676961",
  },
  {
    label: "Hawaii, US",
    name: "place:511a4157089bc363c0598b9c81c6d9fe3440f00101f901a38a020000000000920306486177616969",
  },
  {
    label: "Idaho, US",
    name: "place:518a67fa5f32aa5cc0590b886f5ed4314640f00101f9014479020000000000920305496461686f",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Iowa, US",
    name: "place:51af7dd6cc006057c059c32f9dc68e094540f00101f9017277020000000000920304496f7761",
  },
  {
    label: "Kentucky, US",
    name: "place:51416523ea925255c059bec7685d66c34240f00101f90177770200000000009203084b656e7475636b79",
  },
  {
    label: "Michigan, US",
    name: "place:51463c5e42c36e55c0599015c5c3de6f4640f00101f9019d870200000000009203084d6963686967616e",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
  {
    label: "Indiana, US",
    name: "place:515579dd16089255c059fe615892bef54340f00101f9011878020000000000920307496e6469616e61",
  },
];
