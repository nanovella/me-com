function loadBlogs() {
    let e1 = new blog("images/wheels_test_e.png", "This is a render of my current design (wheels not inlucded).", "slide1");
    e1.makeBlog();
    let e2 = new blog(
        "images/drawer_w_slides.png",
         "This render displays the first version with a two way drawer design. The drawer rails don't quite line up yet. Once I finish designing the draws I will begin ordering the materials and machining the parts to assemble it.", 
         "slide2"
    );
    e2.makeBlog();
}