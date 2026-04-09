/** Single source of truth for practice data. Used across Home, Impressum, Footer. */
export const PRACTICE = {
  legalName: 'Hausarztpraxis Dr. Caroline Weil de Vega',
  doctorName: 'Dr. Caroline Weil de Vega',
  doctorNameLegal: 'Caroline Weil de Vega',
  title: 'Fachärztin für Allgemeinmedizin',
  address: {
    street: 'Am Waldbach 5',
    zip: '77654',
    city: 'Offenburg',
  },
  phone: {
    display: '0781 / 948 00 11',
    tel: '+497819480011',
  },
  fax: {
    display: '0781 / 970 507 12',
  },
  email: 'Praxis.WeilDeVega@gmx.de',
  chamber: {
    name: 'Landesärztekammer Baden-Württemberg',
    street: 'Jahnstraße 40',
    city: '70597 Stuttgart',
    url: 'https://www.aerztekammer-bw.de',
  },
  supervisoryAuthority: {
    name: 'Kassenärztliche Vereinigung Baden-Württemberg',
    street: 'Albstadtweg 11',
    city: '70567 Stuttgart',
  },
  maps: {
    embed:
      'https://www.google.com/maps?q=Am+Waldbach+5,+77654+Offenburg,+Germany&output=embed',
    route:
      'https://www.google.com/maps/dir/?api=1&destination=Am+Waldbach+5,+77654+Offenburg,+Germany',
  },
} as const;

export const fullAddress = () =>
  `${PRACTICE.address.street}, ${PRACTICE.address.zip} ${PRACTICE.address.city}`;
