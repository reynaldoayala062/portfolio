import pdf from '../../images/Reynaldo Ayala Resume - Google Docs.pdf'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transaction with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../images/svg-1.svg').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
    url: {pdf}
};

export const homeObjTwo = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Project Videos',
    headline: 'Take a look of my past project',
    description: 'I have created a remake of the famous tetris game to making my own productive app to keep you focused on your main goals ',
    buttonLabel: 'Watch now',
    imgStart: true,
    img: require('../../images/svg-8.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
    url: "//www.youtube.com/channel/UClF70456tB11P5BP5zxNfHw"
};

export const homeObjThree = {
    id: 'blogs',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Medium Blogs',
    headline: 'Get a personal look of my blogs',
    description: 'I talk about how hackers make a living to facial regonitions and what Apple has in store for the future',
    buttonLabel: 'Read More',
    imgStart: false,
    img: require('../../images/svg-7.svg').default,
    alt: 'blogs',
    dark: false,
    primary: false,
    darkText: true,
    url: "//reynaldo-ayala.medium.com/"
};

