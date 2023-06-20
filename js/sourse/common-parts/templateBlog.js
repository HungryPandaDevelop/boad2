let blogItemTileTemplate = ({
  img,
  title,
  link,
  text,
  date,
  lang
}) => {
  // console.log('l', yachts_harakteristiki)
  return (`
  <div class="col-4 col-sm-6 col-xs-12">
    <div class="blog-item">
      <a class="blog-item-img " href="${link}">
        <div class="img-cover" >
          <img src="${img}" alt="">
        </div>
      </a>
    <div class="blog-item-info">
      <div class="blog-item-date">
      ${date}
      </div>
      <h3>
        <a href="${link}">
        ${title}
        </a>
      </h3>
      <div class="blog-item-text">
      ${text}
     </div>
      <div class="btn-container">
        <a class="btn btn--blue-border" href="${link}">
        ${lang === 'ru' ? 'Прочитать' : 'Read'}      
        </a>
      </div>
    </div>
    </div>    
  </div>
`)
};