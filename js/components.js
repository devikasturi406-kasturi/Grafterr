// rendering nav section data
export const renderNav = (data) => {
  const getNavLinks = data.links
    .map(
      (link) => `
    <li><a href="${link.url}">${link.text}</a></li>
    `,
    )
    .join(" ");

  return `
<div class="nav">
        <div class="nav-left-container">
          <div class="logo-container">
            <img
              src="${data.logo.src}"
              alt="${data.logo.src}"
              class="logo"
            />
          </div>
          <ul class="nav-links-container">
          ${getNavLinks}
          </ul>
        </div>

        <div class="login-btn-container">
          <button>Login</button>
        </div>
      </div>
`;
};

// rendering hero section data
export const renderHero = (data) => `
  <div class="hero-content">
    <div class="headline">
      <h1>${data.headlinePrefix} <br><span>${data.headlineGradient}</span></h1>
    </div>
    <div class="subheadline">
      <p>${data.subheadline}</p>
    </div>
    <div class="btn"><button>${data.cta}</button></div>
    <div class="shape yellow-circle"></div>
    <div class="shape green-square"></div>
  </div>
`;

// rendering features section data
export const renderFeature = (data) => {
  const productCards = data.products
    .map(
      (product) => `
        <div class="carousel__item">
                  <div class="card">
                    <h3>${product.name}</h3>
                    <div class="image-container">
                      <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-image"
                      />
                    </div>
                  </div>
                </div>
    `,
    )
    .join("");

  return `
<div class="container" >
    <div class="features-header" >
            <div class="title">
              <h1>
                ${data.title1}<span>${data.titleAccent}</span>${data.title2}
              </h1>
            </div>
            <div class="subtitle">
              <p>
               ${data.subtitle}
              </p>
            </div>
            <div class="shape blue-ellipse"></div>

            <div class="shape red-ellipse"></div>
            <div class="divider"></div>
        </div>

          <div class="carousel">
            <div class="carousel__viewport">
              <div class="carousel__track">
                ${productCards}
              </div>
            </div>

            <div class="carousel__controls">
              <button class="arrow prev">&larr;</button>
              <button class="arrow next">&rarr;</button>
            </div>
    </div>
</div>
`;
};

// error handling
export const renderError = (errorMessage) => {
  return `
    <div class="error-container">
      <div class="error-content">
        <p class="error-message">Oops! ${errorMessage}</p>
        <button id="retry-btn" class="error-btn">Try Again</button>
      </div>
    </div>
  `;
};
