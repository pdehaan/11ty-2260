class Draft {
  get data() {
    return {
      permalink: false,
      eleventyExcludeFromCollections: true,
      title: "I'm a draft page.",
    };
  }

  render(data) {
    return `<h1>${data.title}</h1>`;
  }
}

module.exports = Draft;
