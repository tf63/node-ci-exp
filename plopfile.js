module.exports = function (plop) {
    plop.setGenerator('component', {
        // オプション名になる
        description: 'Create a new component',
        prompts: [
            {
                type: 'input',
                name: 'path',
                default: 'components/',
                message: 'component path (e.g. components/):',
            },
            {
                type: 'input',
                name: 'name',
                message: 'component name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '{{path}}/{{kebabCase name}}/index.tsx',
                templateFile: 'templates/components/index.tsx.hbs',
            },
            {
                type: 'add',
                path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
                templateFile: 'templates/components/component.tsx.hbs',
            },
            {
                type: 'add',
                path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
                templateFile: 'templates/components/component.spec.tsx.hbs',
            },
            {
                type: 'add',
                path: '{{path}}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
                templateFile: 'templates/components/component.stories.tsx.hbs',
            },
        ],
    })
}
