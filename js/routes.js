const routes = [
    {
      path: '/benefits',
      template: `<h1>Benefits!</h1>`,
      //getTemplate: (params) => '<h3>Learn about the benefits!</h3>'
    },
    {
      path: '/rainwaterSystem',
      getTemplate: (params) => '<h1>Explore the rainwater system!</h1>',
    },
    {
      path: '/rainCycle',
      getTemplate: (params) => '<h1>Explore the rain cycle!</h1>',
    },
    {
        path: '/rainwaterGame',
        getTemptlate: (params) => '<h2>Play the rainwater game!</h2>'
    },
    {
      path: '/products/:productId',
      getTemplate: (params) => `<h1>Product ${params.productId}</h1>`,
    },
  ];