describe('page screenshots', () => {
  it('render repository file list', function () {
    return this.browser
      .url('/task1')
      .waitForExist('.Files')
      .assertView('repository file list', '.Layout')
  })

  it('render folder file list', function () {
    return this.browser
      .url('/task1/tree/src/styles')
      .waitForExist('.Files')
      .assertView('folder file list', '.Layout')
  })

  it('render file viewer', function () {
    return this.browser
      .url('/task1/blob/package.json')
      .waitForExist('.FileViewer')
      .assertView('components file list', '.Layout')
  })
})

describe('navigation', () => {
  it('from folder to folder', function () {
    return this.browser
      .url('/task1')
      .waitForExist('=package.json')
      .click('=build')
      .assertView('from folder to folder', '.Layout')
  })

  it('from folder to file', async function () {
    return this.browser
      .url('/task1')
      .waitForExist('=package.json')
      .click('=package.json')
      .assertView('from folder to file', '.Layout')
  })

  it('from breadcrumbs', async function () {
    return this.browser
      .url('task1/blob/src/templater/blocks/commercial.js')
      .waitForExist('.Navigation')
      .click('[href="/task1/tree/src/templater"]')
      .assertView('from breadcrumbs', '.Layout')
  })
})
