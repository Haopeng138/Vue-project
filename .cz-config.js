module.exports = {
    types: [
        {value: 'feat',name:'feat: new feature'},
        {value: 'fix',name:'fix: bugs fix'},
        {value: 'docs',name:'docs: document change'},
        {value: 'style',name:'style; change format'},
        {value: 'refactor',name:'refactor: refactor'},
        {value: 'perf',name:'perf: performance'},
        {value: 'test',name:'test: add test'},
        {value: 'chore',name:'chore: change in chore'},
        {value: 'revert',name:'revert: revert'},
        {value: 'build',name:'build: build'},
    ],
    messages: {
        type: "choose commit type",
        customScope: "enter the modification range(optional)",
        subject: "a brew description",
        body: " a description",
        footer : "enter the closed issue (optional)",
        confirmCommit : "sure to commit (y/n/e/h)"
    },

    skipQuestion: ['body','footer'],
    
    subjectLimit: 72

}