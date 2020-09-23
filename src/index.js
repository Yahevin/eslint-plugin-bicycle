module.exports = {
    configs: {
        'bicycle/recommended': {
            plugins: [
                'bicycle'
            ],
            rules: {
                'bicycle/no-bad-await': 2,
            }
        }
    },
    rules: {
        'no-bad-await': require('./rules/no-bad-await'),
    }
};