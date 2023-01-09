import ghpages from 'gh-pages';

ghpages.publish(
    'public',
    {
        branch: 'main',
        repo: 'https://github.com/ArcticStorm9/shakespeare-dev',
        user: {
            name: 'arcticstorm9',
            email: 'irshakes11@gmail.com'
        }
    },
    () => {
        console.log('Deployment Complete.')
    }
)