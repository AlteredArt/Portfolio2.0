const BLOGS = [
    {
        id: 1,
        title: "AWS Databases",
        description: "Amazons Database Services",
        link: 'https://medium.com/@cherokeedreemer/aws-database-services-how-can-it-help-your-company-e073f8effe99',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/awsdatabase'
    },
    {
        id: 2,
        title: "Graph QL Vs. REST",
        description: "GraphQl compared to RESTful API",
        link: 'https://medium.com/@cherokeedreemer/graphql-better-than-the-rest-2818e7f50063',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/GraphQL.jpg'
    },
    {
        id: 3,
        title: "AWS App Services",
        description: "Amazons own App services review.",
        link: 'https://medium.com/@cherokeedreemer/amazon-application-services-f0857b84649b',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/awsappservices'
    },
    {
        id: 4,
        title: "Binary",
        description: "How Binary Works",
        link: 'https://medium.com/@cherokeedreemer/binary-what-is-it-good-for-318cd853b05',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/binary'
    },
    {
        id: 5,
        title: "AWS Cloud Computing",
        description: "Cloud Computing with Amazon.",
        link: 'https://medium.com/@cherokeedreemer/binary-what-is-it-good-for-318cd853b05',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/awscloudcomputing'
    },
    {
        id: 6,
        title: "JavaScript ES5 vs ES6",
        description: "5 Reasons to switch over to ES6",
        link: 'https://medium.com/@cherokeedreemer/binary-what-is-it-good-for-318cd853b05',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/es5vses6'
    },
    {
        id: 7,
        title: "Growing Up",
        description: "My journey into tech",
        link: 'https://medium.com/@cherokeedreemer/binary-what-is-it-good-for-318cd853b05',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/growingup'
    },
    {
        id: 8,
        title: "Redux Store",
        description: "React / Redux control flow.",
        link: 'https://medium.com/@cherokeedreemer/binary-what-is-it-good-for-318cd853b05',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/redux'
    },
    {
        id: 9,
        title: "AWS Gateway",
        description: "Amazons very own Gateway.",
        link: 'https://medium.com/@cherokeedreemer/amazon-api-gateway-2c37d7877c63',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/aws+gateway.jpg'
    },
    {
        id: 10,
        title: "AWS Machine Learning",
        description: "Machine Learning in AWS.",
        link: 'https://medium.com/@cherokeedreemer/amazons-analytics-and-machine-learning-d784ea05c568',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/awsmachinelearning.jpg'
    },
    {
        id: 11,
        title: "First Flatiron Mod",
        description: "My First Flatiron Bootcamp Mod.",
        link: 'https://medium.com/@cherokeedreemer/my-first-flatiron-mod-1e11b55184d5',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/flatiron.jpeg'
    },
    {
        id: 12,
        title: "GitHub Pages",
        description: "Deploying with GitHub Pages",
        link: 'https://medium.com/@cherokeedreemer/deploying-your-app-with-github-pages-how-to-2816a4d4331c',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/git.jpg'
    },
    {
        id: 13,
        title: "GitHub Security",
        description: "GitHub security resolution.",
        link: 'https://medium.com/@cherokeedreemer/github-security-alerts-1e8bf97b2324',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/githubsecurity.jpg'
    },
    {
        id: 14,
        title: "Hash Tables",
        description: "The Data Structure of Hash Tables",
        link: 'https://medium.com/@cherokeedreemer/data-structures-pt-3-hash-tables-4db7976093c6',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/hashtables.jpg'
    },
    {
        id: 15,
        title: "Linked Lists",
        description: "The Data Structure of Linked Lists",
        link: 'https://medium.com/@cherokeedreemer/data-structures-pt-4-linked-lists-ce3ea8f8781f',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/linkedlists.jpg'
    },
    {
        id: 16,
        title: "OOP in PHP",
        description: "Object Oriented Programming in PHP.",
        link: 'https://medium.com/@cherokeedreemer/oop-in-php-8a2f80b796bd',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/oopphp.jpg'
    },
    {
        id: 17,
        title: "Queues",
        description: "The Data Structure of Queues.",
        link: 'https://medium.com/@cherokeedreemer/data-structures-pt-1-queues-381bcf2727fc',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/queues.jpg'
    },
    {
        id: 18,
        title: "Software Testing",
        description: "Through the eyes of a Developer.",
        link: 'https://medium.com/@cherokeedreemer/intro-into-testing-5d1eb70578d9',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/softwaretesting.jpg'
    },
    {
        id: 19,
        title: "Stacks",
        description: "The Data Structure of Stacks.",
        link: 'https://medium.com/@cherokeedreemer/data-structures-pt-2-stacks-262a7505d184',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/stacks.jpg'
    },
    {
        id: 20,
        title: "Trees",
        description: "The Data Structure of Trees.",
        link: 'https://medium.com/@cherokeedreemer/data-structures-pt-5-trees-79530aa9fac2',
        image: 'https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Blogs/trees.jpg'
    }
]

export default BLOGS;