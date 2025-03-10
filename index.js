'use strict';

const finlandBtn = document.querySelector('.fi');
const englandBtn = document.querySelector('.en');
const usaBtn = document.querySelector('.us');
const chinaBtn = document.querySelector('.ch');
const hawaiBtn = document.querySelector('.hw');
const clock  = document.querySelector('.clock-item');

//Button array
const btnArr = [finlandBtn, englandBtn, usaBtn, chinaBtn, hawaiBtn];

//locations object
const locales = {
  Finland: { locale: 'fi-FI', timeZone: 'Europe/Helsinki' },
  England: { locale: 'en-GB', timeZone: 'Europe/London' },
  USA: { locale: 'en-US', timeZone: 'America/New_York' },
  China: { locale: 'zh-CN', timeZone: 'Asia/Shanghai' },
  Hawaii: { locale: 'haw-US', timeZone: 'Pacific/Honolulu' }
};
//Message creator
const createLabelMessage = function(country) {
  
  const location = locales[country];

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'numeric', 
    year: 'numeric', 
    timeZone: location.timeZone,
  };

  if(clock) clearInterval(clock.interval);
  
  clock.interval = setInterval(function () {
    const time = new Date();
    clock.textContent = new Intl.DateTimeFormat(location.locale, options).format(time)
  },1000);
};

//eventlisteners and call for function
btnArr.forEach(e => e.addEventListener('click', function(e) {
    createLabelMessage(e.target.textContent);
}));