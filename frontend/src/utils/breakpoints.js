const size = {
  mobileS: '320px', // iphone 5
  mobileM: '375px', // iphone 10
  mobileL: '425px', // iphone6/7/8 plus
  tablet: '768px', // ipad
  ipad: '1024px', // ipadPro
  laptopM: '1280px', // comum
  laptopL: '1440px', // mac air
  desktop: '2560px' // ultra wide
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  ipad: `(max-width: ${size.ipad})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};
