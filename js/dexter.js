function loadBlogs() {
    let e1 = new blog("images/mount.jpg", "Some Text");
    e1.makeBlog();
    let e2 = new blog(["images/IMG_2547.JPEG", "images/IMG_2550.JPEG", "images/IMG_2552.JPEG"], "These renders display the first version with a two way drawer design. The drawer rails don't quite line up yet.");
    e2.makeBlog();
}