new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Youtuber", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Blogger", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Editor", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();