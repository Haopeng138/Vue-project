module.exports = {
    // heredar configuracion
    extends: ['@commitlint/config-conventional'],
    // poner reglas
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'chore',
                'revert',
                'build'
            ]
        ],
        // case insensitive
        'subject-case': [0]
    }
}
