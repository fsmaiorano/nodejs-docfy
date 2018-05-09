const hljs = require('highlight.js');
const md = require('markdown-it')({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return `<pre class="hljs"><code>${hljs.highlight(lang, str.trim(), true).value}</code></pre>`
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(str.trim())}</code></pre>`
  },
});

module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    getterMethods: {
      excerpt() {
        // Resume
        return this.content.length > 120
          ? `${this.content.substring(0, this.content.lastIndexOf(' ', 120))} ...`
          : this.content;
      },
      formattedContent() {
        return md.render(this.content);
      },
    },
  });

  Document.associate = (models) => {
    Document.belongsTo(models.Project);
  };

  return Document;
};
