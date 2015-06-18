class IndexController {
  render(req, res) {
    res.render(req.url, {
      title: 'Person #' + (req.params.id || 'EMPTY')
    });
  }
}

export default new IndexController();
