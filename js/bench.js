function loadBlogs() {
    let e1 = new blog("images/wheels_test_e.png", "Some Text", "slideN1");
    e1.makeBlog();
    let e2 = new blog(
        ["images/wheels_test_e.png", "images/drawer_w_slides.png", "images/wheels_test_e.png"],
         "These renders display the first version with a two way drawer design. The drawer rails don't quite line up yet.", 
         "slide1"
    );
    e2.makeBlog();
}