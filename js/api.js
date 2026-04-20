export const api = {
  async getHeroContent() {
    return this._fetchWithDelay((data) => data.hero);
  },
  async getFeaturesContent() {
    return this._fetchWithDelay((data) => data.featuresSection);
  },
  async getNavContent() {
    return this._fetchWithDelay((data) => data.navigation);
  },
  //  delay
  async _fetchWithDelay(selector) {
    const delay = Math.random() * 500 + 1000;
    await new Promise((res) => setTimeout(res, delay));
    const res = await fetch("./data/content.json");
    const data = await res.json();
    return selector(data);
  },
};
