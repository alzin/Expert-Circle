class EditController {
  constructor(editArticleUseCase) {
    this.editArticleUseCase = editArticleUseCase;
  }

  async edit(req, res) {
    const editPrompt = req.body.prompt;
    const text = await this.editArticleUseCase.execute(editPrompt);

    if (text) {
      res.json({ newText: text });
    } else {
      res
        .status(500)
        .send({ error: "An error occurred while handling the edit request" });
    }
  }
}

module.exports = EditController;
