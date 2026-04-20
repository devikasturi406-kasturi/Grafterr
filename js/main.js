import { api } from "./api.js";
import {
  renderHero,
  renderFeature,
  renderNav,
  renderError,
} from "./components.js";
import { initCarousel } from "./carousel.js";

async function init() {
  const featureTarget = document.getElementById("feature_target");

  try {
    // Fetching data from api.js
    const heroData = await api.getHeroContent();
    const featuresData = await api.getFeaturesContent();
    const navData = await api.getNavContent();

    // the IDs from HTML
    const heroTarget = document.getElementById("hero_target");
    const featureTarget = document.getElementById("feature_target");
    const navTarget = document.getElementById("navbar");

    // Inject the content
    heroTarget.innerHTML = renderHero(heroData);
    featureTarget.innerHTML = renderFeature(featuresData);
    navTarget.innerHTML = renderNav(navData);

    // Initializing Carousel
    initCarousel();
  } catch (error) {
    console.error("Loading failed", error);
    // Retry button
    featureTarget.innerHTML = renderError("Something went wrong.");

    document.getElementById("retry-btn").addEventListener("click", () => {
      featureTarget.innerHTML = '<div class="features"></div>';
      init();
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
