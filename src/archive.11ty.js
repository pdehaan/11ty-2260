class Archive {
  get data() {
    return {
      title: "Archive",
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    const rows = data.collections.all.map(p => `<li>${p.url} => ${p.data.title}</li>`);
    return `<ul>${rows.join("\n")}</ul>`;
  }
}

module.exports = Archive;
