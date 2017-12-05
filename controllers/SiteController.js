function siteController(){

  Index(req, resp){

    resp.render("site/index")
  }
}

module.export =  siteController
