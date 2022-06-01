const axios = require('axios');

// API call for Twitter
module.exports = {

    search: async () => {



        return axios.get(`https://tweet-search-passthrough.herokuapp.com/usertweets/MarsCuriosity`).then((res) => res.data)

            .then((result) => {
                const output = [];

                for (let i = 0; i < Math.min(result.length, 20); i++) {
                    const { created_at, text, user, source } = result[i];

                    const tweet = { created_at: created_at, text: text, url: user.url, source: source, name: user.name, screen_name: user.screen_name, description: user.description, location: user.location }
                    output.push(tweet);


                }

                return output

            })


    }
}
