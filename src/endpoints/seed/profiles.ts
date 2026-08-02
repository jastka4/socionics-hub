import type { RequiredDataFromCollectionSlug } from 'payload'

type ProfileSeed = Omit<
  RequiredDataFromCollectionSlug<'profiles'>,
  'category' | 'profilePicture'
> & {
  category: '{{CATEGORY_FICTIONAL}}' | '{{CATEGORY_REAL}}'
  profilePicture: '{{IMAGE}}'
}

export const profiles: ProfileSeed[] = [
  {
    slug: 'abram-ioffe',
    name: 'Abram Ioffe',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'adolf-hitler',
    name: 'Adolf Hitler',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'albert-einstein',
    name: 'Albert Einstein',
    category: '{{CATEGORY_REAL}}',
    SHS: {
      type: 'ILI',
      subtype: ['C'],
      accentuation: [],
    },
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'albert-schweitzer',
    name: 'Albert Schweitzer',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'aleksandr-kalyagin',
    name: 'Aleksandr Kalyagin',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'alexander-hamilton',
    name: 'Alexander Hamilton',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'alexander-suvorov',
    name: 'Aleksander Suvorov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'alexandra-kollontai',
    name: 'Alexandra Kollontai',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SLE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'alexandre-dumas',
    name: 'Alexandre Dumas',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'andre-maurois',
    name: 'André Maurois',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'andrei-bitov',
    name: 'Andrei Bitov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ESE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'andrew-tate',
    name: 'Andrew Tate',
    category: '{{CATEGORY_REAL}}',
    SHS: {
      type: 'LSI',
      subtype: ['C', 'D', 'N', 'H'],
      accentuation: ['F'],
    },
    SCS: {
      type: 'IEE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'anna-akhmatova',
    name: 'Anna Akhmatova',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SLE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'anton-chekhov',
    name: 'Anton Chekhov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'anton-makarenko',
    name: 'Anton Makarenko',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'athos',
    name: 'Athos',
    category: '{{CATEGORY_FICTIONAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'ausra-augustinaviciute',
    name: 'Aušra Augustinavičiūtė',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'authors-crush',
    name: "Author's Crush",
    category: '{{CATEGORY_FICTIONAL}}',
    SHS: {
      type: 'EIE',
      subtype: ['H', 'D', 'N', 'C'],
      accentuation: [],
    },
    SCS: {},
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'carl-jung',
    name: 'Carl Jung',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'cesare-borgia',
    name: 'Cesare Borgia',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'charles-darwin',
    name: 'Charles Darwin',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'claude-monet',
    name: 'Claude Monet',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'dante-alighieri',
    name: 'Dante Alighieri',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'dmitri-mendeleev',
    name: 'Dmitri Mendeleev',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'dolores-ibarruri',
    name: 'Dolores Ibárruri',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'don-quixote',
    name: 'Don Quixote',
    category: '{{CATEGORY_FICTIONAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'edith-piaf',
    name: 'Edith Piaf',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'elon-musk',
    name: 'Elon Musk',
    category: '{{CATEGORY_REAL}}',
    SHS: {
      type: 'LSI',
      subtype: ['D', 'C', 'N', 'H'],
      accentuation: ['P'],
    },
    SCS: {},
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'emile-zola',
    name: 'Émile Zola',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'feliks-dzierzynski',
    name: 'Feliks Dzierżyński',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'frederic-joliot-curie',
    name: 'Frédéric Joliot-Curie',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'friedrich-schiller',
    name: 'Friedrich Schiller',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'george-washington',
    name: 'George Washington',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ESE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'georgi-plekhanov',
    name: 'Georgi Plekhanov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'georgy-zhukov',
    name: 'Georgy Zhukov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SLE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'gerard-philipe',
    name: 'Gérard Philipe',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ESE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'grigory-kotovsky',
    name: 'Grigory Kotovsky',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'hamlet',
    name: 'Hamlet',
    category: '{{CATEGORY_FICTIONAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'herve-bazin',
    name: 'Hervé Bazin',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'indira-gandhi',
    name: 'Indira Gandhi',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'irene-joliot-curie',
    name: 'Irène Joliot-Curie',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'ivan-aivazovsky',
    name: 'Ivan Aivazovsky',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'jane-fonda',
    name: 'Jane Fonda',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SLE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'janusz-korczak',
    name: 'Janusz Korczak',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'jean-jacques-rousseau',
    name: 'Jean-Jacques Rousseau',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'IEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'jean-marais',
    name: 'Jean Marais',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'johann-wolfgang-von-goethe',
    name: 'Johann Wolfgang von Goethe',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'jules-verne',
    name: 'Jules Verne',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ESE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'juozas-miltinis',
    name: 'Juozas Miltinis',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'kirill-lavrov',
    name: 'Kirill Lavrov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SLE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'konstantin-tsiolkovsky',
    name: 'Konstantin Tsiolkovsky',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'konstantin-ushinsky',
    name: 'Konstantin Ushinsky',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'laurence-olivier',
    name: 'Laurence Olivier',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'leon-trotsky',
    name: 'Leon Trotsky',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'leonid-bronevoy',
    name: 'Leonid Bronevoy',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'louis-xiii',
    name: 'Louis XIII',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'mahatma-gandhi',
    name: 'Mahatma Gandhi',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'marc-chagall',
    name: 'Marc Chagall',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'marcello-mastroianni',
    name: 'Marcello Mastroianni',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'IEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'margaret-thatcher',
    name: 'Margaret Thatcher',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'maximilien-robespierre',
    name: 'Maximilien Robespierre',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'michelangelo',
    name: 'Michelangelo',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'mikalojus-konstantinas-ciurlionis',
    name: 'Mikalojus Konstantinas Čiurlionis',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'mikhail-bakunin',
    name: 'Mikhail Bakunin',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ESE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'mikhail-kozakov',
    name: 'Mikhail Kozakov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ESE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'mikhail-lermontov',
    name: 'Mikhail Lermontov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'mikhail-saltykov-shchedrin',
    name: 'Mikhail Saltykov-Shchedrin',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'mikhail-sholokhov',
    name: 'Mikhail Sholokhov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'mikhail-ulyanov',
    name: 'Mikhail Ulyanov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SLE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'mireille-mathieu',
    name: 'Mireille Mathieu',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'natalya-gundareva',
    name: 'Natalya Gundareva',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'nero',
    name: 'Nero',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'nikita-khrushchev',
    name: 'Nikita Khrushchev',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'niccolo-paganini',
    name: 'Niccolò Paganini',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'nikolai-amosov',
    name: 'Nikolai Amosov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'nikolay-chernyshevsky',
    name: 'Nikolay Chernyshevsky',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'nicholas-roerich',
    name: 'Nicholas Roerich',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'oleg-tabakov',
    name: 'Oleg Tabakov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'paul-gauguin',
    name: 'Paul Gauguin',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'peter-paul-rubens',
    name: 'Peter Paul Rubens',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'peter-the-great',
    name: 'Peter the Great',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'pierre-auguste-renoir',
    name: 'Pierre-Auguste Renoir',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'porthos',
    name: 'Porthos',
    category: '{{CATEGORY_FICTIONAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'prosper-merimee',
    name: 'Prosper Mérimée',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ESE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'raphael',
    name: 'Raphael',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'richard-wagner',
    name: 'Richard Wagner',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SLE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'sergei-bondarchuk',
    name: 'Sergei Bondarchuk',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'sergei-kirov',
    name: 'Sergei Kirov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SLE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'sergei-korolev',
    name: 'Sergei Korolev',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SLE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'sergei-rachmaninoff',
    name: 'Sergei Rachmaninoff',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'sergei-yesenin',
    name: 'Sergei Yesenin',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'IEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'sergey-ivanovich-vavilov',
    name: 'Sergey Ivanovich Vavilov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'sigmund-freud',
    name: 'Sigmund Freud',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'thomas-more',
    name: 'Thomas More',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'LII',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'tiberius',
    name: 'Tiberius',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'IEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'valentin-gaft',
    name: 'Valentin Gaft',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ESE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'victor-hugo',
    name: 'Victor Hugo',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ESE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'vladimir-mayakovsky',
    name: 'Vladimir Mayakovsky',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SLE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'william-shakespeare',
    name: 'William Shakespeare',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'EIE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'winston-churchill',
    name: 'Winston Churchill',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'ILE',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'yelena-koreneva',
    name: 'Yelena Koreneva',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'yevgeny-leonov',
    name: 'Yevgeny Leonov',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'yevgeny-matveyev',
    name: 'Yevgeny Matveyev',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'IEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'yuri-gagarin',
    name: 'Yuri Gagarin',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'IEI',
    },
    profilePicture: '{{IMAGE}}',
  },
  {
    slug: 'yuri-nikitin',
    name: 'Yuri Nikitin',
    category: '{{CATEGORY_REAL}}',
    SHS: {},
    SCS: {
      type: 'SEI',
    },
    profilePicture: '{{IMAGE}}',
  },
]
