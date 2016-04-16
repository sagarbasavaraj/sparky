describe('Application should', () => {
  it('have a header', (client) => {
    client
      .url('http://localhost:7000/')
      .waitForElementVisible('body', 1000)
      .assert.visible('header .title')
      .assert.containsText('header .title', 'Dash Off!');
  });
});

