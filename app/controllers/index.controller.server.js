// index controller

export function helloWorld(req, res, next) {
  res.render("index.ejs", { title: "hello", page: "home" });
}

export function displayAbout(req, res, next) {
  res.render("index.ejs", { title: "about", page: "about" });
}

export function displayProjects(req, res, next) {
  res.render("index.ejs", { title: "projects", page: "projects" });
}

export function displayServices(req, res, next) {
  res.render("index.ejs", { title: "services", page: "services" });
}

export function displayContact(req, res, next) {
  res.render("index.ejs", { title: "contact", page: "contact" });
}
