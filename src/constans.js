/*-- DataBase Ukraine cities ---*/
import cities from './cities_db.json';

/*-- Firm logos --*/
import logo_1 from './assets/img/logo_1.png';
import logo_2 from './assets/img/logo_2.png';
import logo_3 from './assets/img/logo_3.png';
import logo_4 from './assets/img/logo_4.png';
import logo_5 from './assets/img/logo_5.png';
import logo_6 from './assets/img/logo_6.png';
import logo_7 from './assets/img/logo_7.png';
import logo_8 from './assets/img/logo_8.png';
import logo_9 from './assets/img/logo_9.png';
import logo_10 from './assets/img/logo_10.png';
import logo_11 from './assets/img/logo_11.png';
import logo_12 from './assets/img/logo_12.png';

/*-- Slides for slider on home page --*/
import slide_1 from './assets/img/slide_1.jpg';

/*-- Flags images --*/
import flag_english from './assets/img/flag-english.svg';
import flag_ukraine from './assets/img/flag-ukraine.svg';
import flag_russia from './assets/img/flag-russia.svg';
import flag_germany from './assets/img/flag-germany.svg';
import flag_poland from './assets/img/flag-poland.svg';
import flag_spain from './assets/img/flag-spain.svg';

export const langsData = [
   {
      id: 0,
      label: 'Английский',
      name: 'lang',
      total: 603,
      img: flag_english,
      levels: [
         {
            id: 0,
            label: '(А1) – начальный',
            name: 'english-level',
            total: 73
         },
         {
            id: 1,
            label: '(А2) – ниже среднего',
            name: 'english-level',
            total: 73
         },
         {
            id: 2,
            label: '(В1) – средний',
            name: 'english-level',
            total: 73
         },
         {
            id: 3,
            label: '(В2) – выше среднего',
            name: 'english-level',
            total: 73
         },
         {
            id: 4,
            label: '(C1) – продвинутый',
            name: 'english-level',
            total: 73
         },
         {
            id: 5,
            label: '(C2) – профессиональный уровень владения',
            name: 'english-level',
            total: 73
         },
      ]
   },
   {
      id: 1,
      label: 'Русский',
      name: 'lang',
      total: 603,
      img: flag_russia,
   },
   {
      id: 2,
      label: 'Украинский',
      name: 'lang',
      total: 603,
      img: flag_ukraine,
   },
   {
      id: 3,
      label: 'Немецкий',
      name: 'lang',
      total: 603,
      img: flag_germany,
   },
   {
      id: 4,
      label: 'Польский',
      name: 'lang',
      total: 603,
      img: flag_poland,
   },
   {
      id: 5,
      label: 'Испанский',
      name: 'lang',
      total: 603,
      img: flag_spain,
   },
]

export const busynessData = [
   {
      id: 0,
      label: 'Полная занятость',
      name: 'busyness',
      total: 34567
   },
   {
      id: 1,
      label: 'Неполная занятость',
      name: 'busyness',
      total: 876
   },
   {
      id: 2,
      label: 'Удаленная работа',
      name: 'busyness',
      total: 1234
   },
]

export const educationData = [
   {
      id: 0,
      label: 'Высшее',
      name: 'education',
      total: 34567
   },
   {
      id: 1,
      label: 'Неоконченное высшее',
      name: 'education',
      total: 876
   },
   {
      id: 2,
      label: 'Средне-специальное',
      name: 'education',
      total: 1234
   },
   {
      id: 3,
      label: 'Среднее',
      name: 'education',
      total: 8764
   },
]

export const logoImages = [
   {
      id: 0,
      img: logo_1,
      link: '#'
   },
   {
      id: 1,
      img: logo_2,
      link: '#'
   },
   {
      id: 2,
      img: logo_3,
      link: '#'
   },
   {
      id: 3,
      img: logo_4,
      link: '#'
   },
   {
      id: 4,
      img: logo_5,
      link: '#'
   },
   {
      id: 5,
      img: logo_6,
      link: '#'
   },
   {
      id: 6,
      img: logo_7,
      link: '#'
   },
   {
      id: 7,
      img: logo_8,
      link: '#'
   },
   {
      id: 8,
      img: logo_9,
      link: '#'
   },
   {
      id: 9,
      img: logo_10,
      link: '#'
   },
   {
      id: 10,
      img: logo_11,
      link: '#'
   },
   {
      id: 11,
      img: logo_12,
      link: '#'
   },
   {
      id: 12,
      img: logo_1,
      link: '#'
   },
   {
      id: 13,
      img: logo_2,
      link: '#'
   },
   {
      id: 14,
      img: logo_3,
      link: '#'
   },
   {
      id: 15,
      img: logo_4,
      link: '#'
   },
   {
      id: 16,
      img: logo_5,
      link: '#'
   },
   {
      id: 17,
      img: logo_6,
      link: '#'
   },
   {
      id: 18,
      img: logo_7,
      link: '#'
   },
   {
      id: 19,
      img: logo_8,
      link: '#'
   },
   {
      id: 20,
      img: logo_9,
      link: '#'
   },
   {
      id: 21,
      img: logo_10,
      link: '#'
   },
   {
      id: 22,
      img: logo_11,
      link: '#'
   },
   {
      id: 23,
      img: logo_12,
      link: '#'
   },
]

export const footerMenu = {
   'Job Seekers': [
      {
         id: 0,
         path: '#',
         label: 'Search Jobs'
      },
      {
         id: 1,
         path: '#',
         label: 'Create Resume'
      },
      {
         id: 2,
         path: '#',
         label: 'Job Allert'
      },
      {
         id: 3,
         path: '#',
         label: 'Advice to Job Seeker'
      },
   ],
   'Employer': [
      {
         id: 0,
         path: '#',
         label: 'Post a Job'
      },
      {
         id: 1,
         path: '#',
         label: 'Search Resume'
      },
      {
         id: 2,
         path: '#',
         label: 'Support'
      },
      {
         id: 3,
         path: '#',
         label: 'Advice to Employer'
      },
   ],
   'Job meteor': [
      {
         id: 0,
         path: '#',
         label: 'About Us'
      },
      {
         id: 1,
         path: '#',
         label: 'Blog'
      },
      {
         id: 2,
         path: '#',
         label: 'FAQ'
      },
   ],
   'Partner with Us': [
      {
         id: 0,
         path: '#',
         label: 'Advertising on the website'
      },
      {
         id: 1,
         path: '#',
         label: 'Affiliate Program'
      },
      {
         id: 2,
         path: '#',
         label: 'Contact Us'
      },
   ]
}

export const footerSocial = [
   {
      id: 0,
      path: '#',
      icon: '_icon-s-twitter',
   },
   {
      id: 1,
      path: '#',
      icon: '_icon-s-linkedin',
   },
   {
      id: 2,
      path: '#',
      icon: '_icon-s-facebook',
   },
   {
      id: 3,
      path: '#',
      icon: '_icon-s-instagram',
   },
   {
      id: 4,
      path: '#',
      icon: '_icon-s-youtube',
   },
   {
      id: 5,
      path: '#',
      icon: '_icon-s-whatsapp',
   },
]

const arrayCities = [];
const regions = cities[0].regions
for (let region of regions) {
   const cities = region.cities;
   for (let city of cities) {
      arrayCities.push(city)
   }
}
export const dataCities = arrayCities;

export const getFormatNumber = num => new Intl.NumberFormat('ru-RU').format(num);

export const actualVacancies = [
   {
      id: 0,
      count: getFormatNumber(100422),
      title: 'актуальных вакансий'
   },
   {
      id: 1,
      count: getFormatNumber(100422),
      title: 'актуальных вакансий'
   },
   {
      id: 2,
      count: getFormatNumber(100422),
      title: 'актуальных вакансий'
   },
]

export const getСurrentDate = date => {
   const today = new Date(date);
   const dd = today.getDate();
   const mm = today.getMonth() + 1;
   const yyyy = today.getFullYear();
   const getZero = num => num < 10 ? '0' + num : num;
   return getZero(dd) + '.' + getZero(mm) + '.' + yyyy;
}

export const sliderItems = [
   {
      id: 0,
      img: slide_1,
      title: 'Advice to job seekers',
      date: getСurrentDate('2021-12-24')
   },
   {
      id: 1,
      img: slide_1,
      title: 'Advice to job seekers',
      date: getСurrentDate('2021-12-24')
   },
   {
      id: 2,
      img: slide_1,
      title: 'Advice to job seekers',
      date: getСurrentDate('2021-12-24')
   },
   {
      id: 3,
      img: slide_1,
      title: 'Advice to job seekers',
      date: getСurrentDate('2021-12-24')
   },
]

export const API_URL = 'https://json-faker-api.herokuapp.com/results';

export const getWorkExperience = (firstDate, secondDate) => {
   const dateFrom = new Date(firstDate),
      dateTo = new Date(secondDate),
      monthDiff = dateTo.getMonth() - dateFrom.getMonth(),
      yearsDiff = dateTo.getFullYear() - dateFrom.getFullYear();
   return monthDiff + (12 * yearsDiff);
}

export const getAgeOfApplicant = birthday => {
   const dateFrom = new Date();
   const dateTo = new Date(birthday);
   return dateFrom.getFullYear() - dateTo.getFullYear();
}