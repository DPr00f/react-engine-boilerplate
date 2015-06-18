class IndexController {
  render(req, res) {
    res.render('index', {
      title: req.params.msg || 'HOME'
    });
  }
}

export default new IndexController();
