function loadBlogs() {
    let e3 = new blog(
        ["$images/IMG_2536.JPEG", "$images/IMG_2537.JPEG", "$images/IMG_2535.JPEG"],
        "These are some images of the the machine and the old grippers I was replacing.",
        "slide1"
    );
    e3.makeBlog();
    let e2 = new blog(
        ["images/IMG_2547.JPEG", "images/IMG_2550.JPEG", "images/IMG_2552.JPEG"],
        "This is one of the flosser fixtures, along with the new grippers.",
        "slide2"
    );
    e2.makeBlog();
}