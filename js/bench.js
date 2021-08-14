function loadBlogs() {
    let e1 = new blog("images/wheels_test_e.png", "Some Text");
    e1.makeBlog();
    let e2 = new blog(["images/wheels_test_e.png", "images/wheels_test_e.png", "images/wheels_test_e.png"], "Some Text");
    e2.makeBlog();
}