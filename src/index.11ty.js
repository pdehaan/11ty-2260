class Index {
  get data() {
    return {
      title: "I'm an index page!",
      permalink: "/index-page/",
    }
  }

  render(data) {
    return `<h1>${data.title}</h1>`;
  }
}

module.exports = Index;
