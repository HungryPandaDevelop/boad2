//
// $('h1').on('click',function(){
//   localStorage.clear();
// });
// console.log(localStorage.getItem('likedId'));
let getCount = localStorage.getItem('likedId') ? localStorage.getItem('likedId') : [] ;
if(getCount.length > 0){
  getCount = getCount.split(',');
  getCount = getCount.map(Number);
};


// console.log(getCount)
let yachtsItemTileTemplate = ({
  id,
  title,
  link,
  yachts_price,
  god_refit,
  naznachenie,
  yachts_harakteristiki,
  yachts_galereya,
  lang,
  refit_text
},isFavorites) => {
  // console.log('l', yachts_harakteristiki)
  return (`
  <div class="col-4 col-lg-6 col-sm-6 col-xs-12 yachts-item-wrapper">
    <div class="yachts-item">
      <div class="yachts-item-img">
      ${yachts_galereya ? (
        `<div class="yachts-item-img-owl owl-carousel">
        ${yachts_galereya.map((item, index)=>{
          if(index<3){
            return(`<div class="yachts-img img-cover"><img src="${item.full_image_url}" alt=""></div>`)
          }
        }).join('')}
        </div>`
      ): ''}
        
        <div class="yachts-logo"> <span>${refit_text}</span></div>
        ${!isFavorites ? (`<div class="yachts-item-liked ${getCount && getCount.includes(id) && 'active'}" data-id="${id}"> </div>`) : (`<div class="delete-btn" data-id="${id}"></div>`)}
      </div>
      <div class="yachts-item-info"> 
        <h3><a href="${link}">${title}</a></h3>
        <ul class="ln yachts-item-description">
          ${(naznachenie) && (
            `<li>
            <b>${lang === 'ru' ? 'Назначение' : 'Purpose'}:</b>
            <div>${naznachenie}</div>
          </li>`
          )}
          
          <li>
            <b>${lang === 'ru' ? 'Вервь' : 'Rope'}:</b>
            <div>${yachts_harakteristiki.yachts_char_element_1}</div>
          </li>
        </ul>
        <div class="yachts-item-price">${yachts_price} AED/${lang === 'ru' ? 'час' : 'hour'}</div>
        <div class="yachts-item-adv">
          <div class="yachts-adv-icons"> 
            <div class="yachts-adv-icon yachts-adv-icon-1"></div>
            <span>

            ${lang === 'ru' ? 
              `
              ${yachts_harakteristiki.yachts_char_element_32} м.
              <br> (${yachts_harakteristiki.yachts_char_element_3}ft.)
              `
              :
              `
              ${yachts_harakteristiki.yachts_char_element_3}  / ft. 
              <br> (${yachts_harakteristiki.yachts_char_element_32} m.)
              `
              }
              
            </span>
          </div>
          <div class="yachts-adv-icons"> 
            <div class="yachts-adv-icon yachts-adv-icon-2"></div>
            <span>
              ${yachts_harakteristiki.yachts_char_element_5} <br/>
              ${lang === 'ru' ? 'гостей' : 'guests'}
            </span>
          </div>
          <div class="yachts-adv-icons"> 
            <div class="yachts-adv-icon yachts-adv-icon-3"></div>
              <span>
                ${yachts_harakteristiki.yachts_char_element_8} <br/>
                ${lang === 'ru' ? 'человека' : 'crew members'}
              </span>
          </div>
          <div class="yachts-adv-icons"> 
            <div class="yachts-adv-icon yachts-adv-icon-4"></div>
            <span>
              ${yachts_harakteristiki.yachts_char_element_6}<br/>
              ${lang === 'ru' ? 'каюты' : 'cabins'}
            </span>
          </div>
        </div>
        <div class="btn-yachts-container">
          <a class="btn btn--blue element-btn element-btn-yachts" data-element="3" href="#">${lang === 'ru' ? 'Забронировать' : 'Book'}</a>
          <a class="btn btn--blue-border" href="${link}">${lang === 'ru' ? 'Подробнее' : 'More'}</a>
        </div>
      </div>
    </div>
  </div>
`)
};

let yachtsItemListTemplate =({
  id,
  title,
  link,
  yachts_price,
  god_postrojki,
  naznachenie,
  yachts_harakteristiki,
  yachts_galereya,
  lang
}, isFavorites)=>{
  return(
    `
    <div class="yachts-item-grid yachts-item-wrapper">
    <div class="col-3">
      <div class="yachts-item-img">
        ${yachts_galereya && (
          `<div class="yachts-item-img-owl owl-carousel">
          ${yachts_galereya.map((item, index)=>{
            if(index<3){
              return(`<div class="yachts-img img-cover"><img src="${item.full_image_url}" alt=""></div>`)
            }
          }).join('')}
          </div>`
        )}
        <div class="yachts-logo"> <span>Full refit ${god_postrojki}</span></div>
        ${!isFavorites && (`<div class="yachts-item-liked ${getCount && getCount.includes(id) && 'active'}" data-id="${id}"> </div>`)}
      </div>
    </div>
    <div class="col-6">
      <div class="yachts-item-info"> 
        ${isFavorites ? (`<div class="delete-btn" data-id="${id}"></div>`) : ''}
        <h3><a href="${link}">${title}</a></h3>
        <div class="yachts-item-middle">
          <ul class="ln yachts-item-description">
          <li>
            <b>${lang === 'ru' ? 'Назначение' : 'Purpose'}:</b>
            <div>${naznachenie}</div>
          </li>
          <li><b>${lang === 'ru' ? 'Вервь' : 'Rope'}:</b>
            <div>${yachts_harakteristiki.yachts_char_element_1}</div>
          </li>
          </ul>
          <div class="yachts-item-middle-delimetr"></div>
          <div class="yachts-item-adv">
            <div class="yachts-adv-icons"> 
              <div class="yachts-adv-icon yachts-adv-icon-1"></div>
              <span>
                ${yachts_harakteristiki.yachts_char_element_4} м. <br/>
                (${yachts_harakteristiki.yachts_char_element_3} ft.)
              </span>
            </div>
            <div class="yachts-adv-icons"> 
              <div class="yachts-adv-icon yachts-adv-icon-2"></div>
              <span>
                ${yachts_harakteristiki.yachts_char_element_5} <br/>
                ${lang === 'ru' ? 'гостей' : 'guests'}
              </span>
            </div>
            <div class="yachts-adv-icons"> 
              <div class="yachts-adv-icon yachts-adv-icon-3"></div>
                <span>
                  ${yachts_harakteristiki.yachts_char_element_8} <br/>
                  ${lang === 'ru' ? 'человека' : 'crew members'}
                </span>
            </div>
            <div class="yachts-adv-icons"> 
              <div class="yachts-adv-icon yachts-adv-icon-4"></div>
              <span>
                ${yachts_harakteristiki.yachts_char_element_6}<br/>
                ${lang === 'ru' ? 'каюты' : 'cabins'}
              </span>
            </div>
          </div>
        </div>
        <div class="yachts-item-bottom">
          <div class="yachts-item-price">${yachts_price} AED/час</div>
          <div class="btn-yachts-container">
            <a class="btn btn--blue element-btn element-btn-yachts" data-element="3" href="#">${lang === 'ru' ? 'Забронировать' : 'Book'}</a>
            <a class="btn btn--blue-border" href="${link}">${lang === 'ru' ? 'Подробнее' : 'More'}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `)
}


let spinner = $(`
  <div class="col-12 spinner-container">
    <div class="spinner">
      <span class="spinner-inner-1"></span>
      <span class="spinner-inner-2"></span>
      <span class="spinner-inner-3"></span>
    </div>
  </div>
`);