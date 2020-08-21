// get 'home' controller
function getHome(req, res) {
  const title = "Welcome to ITMentor";
  const description = "This is a tutorial about NodeJS for Absolute Beginner.";
  const question = "What do you learn about this course?";
  const topics = [
    "What is NodeJS?",
    "Javascript basic with Node Enviroment.",
    "Express framework.",
    "NoSQL and MongoDB.",
    "Deploy with AWS (Amazon Web Services)."
  ];
  const active = 'Home';
  res.render('pages/index', {
    title,
    description,
    question,
    topics,
    active 
  })
}

// get 'about' controller
function getAbout(req, res) {
  const title = "About page";
  const description = "This is about page";
  const active = 'About';
  res.render('pages/about', {
    title,
    description,
    active
  })
}

// get 'country' controller
function getCountry(req, res) {
  console.log("The params is ", req.params);
  res.send(`The country is ${req.params.country} and city is ${req.params.city}`)
}

// get 'users' controller
function getUsers(req, res) {
  console.log("The query param is ", req.query);
  res.send(`name: ${req.query.name}, age: ${req.query.age}`);
}

// get 'workers' controller
function getWorkers(req, res) {
  res.send("Workers");
}

module.exports = {
  getHome,
  getAbout,
  getCountry,
  getUsers,
  getWorkers
}