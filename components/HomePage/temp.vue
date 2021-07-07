<template>
  <div>
    <link
      rel="preload"
      as="image"
      href={`/assets/images/main-page/top-slider/${topSlider[0].filename.replace(/\.png$/, '.webp')}`}
    />
    <Helmet>
      <title>Strona główna - Sklep KapKap.eu</title>
      <link rel="canonical" href={window.location.href} />
      <script type="application/ld+json">{structuredData}</script>
      <script type="application/ld+json">{faqStructuredData}</script>
      <script type="application/ld+json">{localStructuredData}</script>
    </Helmet>
    <section className="home-page section-b-space">
      <div className="home-slider">
        <h1 className="home-title">Sklep z personalizowanymi <br/> gadżetami i prezentami</h1>
        <Slider {...settings}>
          {topSlider && topSlider.map((image, key) =>
          <div className="home-slider-item" key={key}>
            {image.news && <div className="new">Nowość</div>}
            <Link to={`${process.env.PUBLIC_URL}${image.url}`}>
              <picture>
                <source srcSet={`/assets/images/main-page/top-slider/${image.filename.replace(/\.png$/, '.webp')}`}
                type="image/webp"/>
                <img src={`/assets/images/main-page/top-slider/${image.filename}`}
                     className="img-fluid" alt={image.alt}/>
              </picture>
            </Link>
          </div>
          )}
        </Slider>
      </div>

      <div className="article-photo-box no-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 service-block about">
              <div className="media">
                <div dangerouslySetInnerHTML={{__html: svgFreeShipping}}/>
                <div className="media-body">
                  <h4>{translate('freeShipping')}</h4>
                  <p>{translate('freeShippingWorldwide')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block about">
              <div className="media">
                <div dangerouslySetInnerHTML={{__html: svgservice}}/>
                <div className="media-body">
                  <h4>{translate('service24h7days')}</h4>
                  <p>{translate('helpForNew')}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 service-block about">
              <div className="media">
                <div dangerouslySetInnerHTML={{__html: svgoffer}}/>
                <div className="media-body">
                  <h4>{translate('specialOffers')}</h4>
                  <p>{translate('newSpecialOffers')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-product-slider">
        <h3 className="styled-page-header">Nowości</h3>
        <Carousel responsive={responsive} customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}>
        {news && news.map((image, key) =>
        <div className="bestseller-item" key={key}>
          {image.news && <span className="promotion new">Nowość</span>}
          <Link to={`${process.env.PUBLIC_URL}${image.url}`}>
            <picture>
              <source srcSet={`/assets/images/main-page/news/${image.filename.replace(/\.png$/, '.webp')}`}
              type="image/webp"/>
              <img src={`/assets/images/main-page/news/${image.filename}`} alt={image.alt}/>
            </picture>
          </Link>
          <h3>{image.title}</h3>

          <Link className="ch2-btn ch2-allow-all-btn ch2-btn-primary ch2-btn-text-xs"
                to={`${process.env.PUBLIC_URL}${image.url}`}>Personalizuj</Link>
        </div>
        )}
        </Carousel>
      </div>

      <div className="article-photo-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 static-article">
              <h5 className="styled-small-header">Wyjątkowa grafika</h5>
              <article>
                Każdy z naszych kubków otrzymuje unikalny projekt graficzny, dzięki możliwości
                błyskawicznego personalizowania.
                Użytkownik nie musi tworzyć, czy też pozycjonować poszczególnych elementów na kubku.
                Wszystko jest realizowane w tle przez aplikację, aby uzyskać najlepszy możliwy
                efekt.
                Położyliśmy nacisk na jakość grafiki, dlatego też zaprojektowaliśmy od nowa
                każde tło, każdą z ras psów, wiele różnych postaci, które również można
                personalizować oraz każdy cytat.
                Prześledziliśmy najpopularniejsze rasy psów, aby nie zabrało żadnych dostępnych w Polsce, ale narysowaliśmy również bardziej egzotyczne, jak np. Łajki. Uwielbiamy psy, więc na pewno każdy znajdzie coś ciekawego dla siebie.
                Jesteśmy otwarci na wszelkie sugestie, więc jeżeli uważasz, że coś trzeba poprawić, albo masz własny pomysł na grafikę, daj nam znać przez formularz kontaktowy, mailem lub za pomocą telefonu, a chętnie zaprojektujemy coś specjalnie dla ciebie.
                W planach mamy stworzenie projektów dla sympatyków kotów. Mamy również interesujące projekty w głowie dla motocyklistów.
                Zatem zaprojektuj z nami swój spersonalizowany, zabawny kubek, który umili Ci poranną kawę i zawsze będzie ci przypominać o ulubionych chwilach z twoim psem lub kotem.

              </article>
            </div>

            <div className="col-lg-6">
              <div className="banner-section">
                <Link to={`${process.env.PUBLIC_URL}/ja-i-pies/latem-nad-morzem`}>
                  <picture>
                    <source srcSet={`/assets/images/main-page/28718_120027_front_clipped_rev_1.webp`}
                            type="image/webp"/>
                    <img src={`/assets/images/main-page/28718_120027_front_clipped_rev_1.png`}
                         className="img-fluid" alt="Zabawny kubek z dziewczyną i jej corgi"/>
                  </picture>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="home-product-slider">*/}
      {/*    <h3 className="styled-page-header">Bestsellery</h3>*/}
      {/*    <Carousel responsive={responsive} customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}>*/}
      {/*      <div className="bestseller-item">*/}
        {/*        <span className="promotion bestseller">Bestseller</span>*/}
        {/*        <img src={`${process.env.PUBLIC_URL}/assets/images/menu-cup.png`}/>*/}
        {/*        <h3>Nad morzem</h3>*/}

        {/*        <Link className="ch2-btn ch2-allow-all-btn ch2-btn-primary ch2-btn-text-xs" to={"/ja-i-pies/w-lesie"}>Personalizuj</Link>*/}
        {/*      </div>*/}
      {/*    </Carousel>*/}
      {/*</div>*/}

      {/*<div className="article-photo-box">*/}
      {/*  <div className="container">*/}
        {/*      <div className="row">*/}
          {/*          <div className="col-lg-6">*/}
            {/*              <div className="banner-section">*/}
              {/*                  <img src={`${process.env.REACT_APP_ASSETS_URL}/mug_52.png`}*/}
                                        {/*                       className="img-fluid" alt=""/>*/}
              {/*              </div>*/}
            {/*          </div>*/}

          {/*          <div className="col-lg-6 static-article">*/}
            {/*              <h5 className="styled-small-header">Lorem ipsum</h5>*/}
            {/*              <article>*/}
              {/*                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra auctor nisl. Suspendisse id libero ultricies, condimentum odio vitae, faucibus libero. Mauris tempor nec libero id ultrices. Fusce tempor orci vitae dolor rhoncus, id mattis libero euismod. Proin quis consectetur mauris. Morbi fringilla velit et metus dictum, sed condimentum dui fermentum. Duis fringilla purus in condimentum aliquam. Cras convallis leo vitae fermentum euismod. Proin malesuada interdum lorem sed pulvinar. Curabitur odio magna, rhoncus eget blandit eu, ultrices ut urna. Donec in risus libero. Aenean maximus dui nisl, quis pellentesque nulla vestibulum eu. Cras efficitur vitae ipsum blandit mattis. Morbi condimentum consectetur erat, a accumsan neque blandit sagittis. Nam rutrum tortor nec odio aliquam, sit amet imperdiet arcu gravida. Pellentesque erat libero, tempor posuere neque a, fringilla lobortis nisl.*/}
              {/*                  <br/><br/>*/}
              {/*                  Donec at velit vel nisi vehicula mollis. Phasellus sit amet tortor ornare massa venenatis commodo. Proin in ultrices lacus, sit amet congue enim. Proin eleifend imperdiet nisi eu iaculis. Integer a vulputate velit. In consectetur dolor augue, eget venenatis quam malesuada vel. Cras tristique sit amet dui ac vulputate. Aenean rhoncus libero ut felis pharetra cursus.*/}
              {/*              </article>*/}
            {/*          </div>*/}
          {/*      </div>*/}
        {/*  </div>*/}
      {/*</div>*/}

      <div className="home-product-slider">
        <h3 className="styled-page-header">Cytaty</h3>
        <Carousel responsive={responsive} customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}>
        {quotes && quotes.map((image, key) =>
        <div className="bestseller-item" key={key}>
          {image.news && <span className="promotion new">Nowość</span>}
          <Link to={`${process.env.PUBLIC_URL}${image.url}`}>
            <picture>
              <source srcSet={`/assets/images/main-page/quotes/${image.filename.replace(/\.png$/, '.webp')}`}
              type="image/webp"/>
              <img src={`/assets/images/main-page/quotes/${image.filename}`} alt={image.alt}/>
            </picture>
          </Link>
          {/*<h3>Nad morzem</h3>*/}

          {/*<Link className="ch2-btn ch2-allow-all-btn ch2-btn-primary ch2-btn-text-xs" to={"/ja-i-pies/w-lesie"}>Personalizuj</Link>*/}
        </div>
        )}
        </Carousel>
      </div>


      <section className="faq-section section-b-space">
        <h3 className="styled-page-header">FAQ</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="accordion theme-accordion">
                {faqQuestions.map((faqItem, index) =>
                <div className="card" key={faqItem.question}>
                  <div className="card-header">
                    <h2 className="mb-0">
                      <button
                        onClick={() => changeSelected(index)}
                      className="btn btn-link"
                      type="button"
                      aria-controls={`card-${index}`}
                      >
                      {faqItem.question}
                      </button>
                    </h2>
                  </div>
                  <AnimateHeight
                    id={`card-${index}`}
                    duration={ 130 }
                    height={ selected === index ? 'auto' : 0 }
                  >
                  <div className="card-body">
                    <p dangerouslySetInnerHTML={{__html: faqQuestions[index].answer}}></p>
                  </div>
                  </AnimateHeight>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<div className="home-product-slider grey-bg">*/}
      {/*    <h3 className="styled-page-header">Promocje</h3>*/}
      {/*    <Carousel responsive={responsive} customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}>*/}
      {/*      <div className="bestseller-item">*/}
        {/*        <span className="promotion">-20%</span>*/}
        {/*        <img src={`${process.env.PUBLIC_URL}/assets/images/menu-cup.png`}/>*/}
        {/*        <h3>Nad morzem</h3>*/}

        {/*        <Link className="ch2-btn ch2-allow-all-btn ch2-btn-primary ch2-btn-text-xs" to={"/ja-i-pies/w-lesie"}>Personalizuj</Link>*/}
        {/*      </div>*/}
      {/*    </Carousel>*/}
      {/*</div>*/}
    </section>
  </div>
</template>

<script lang="ts">
</script>
