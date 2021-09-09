function loadBlogs() {
    let e3 = new blog(
        ["$images/Dex/grippers1.JPEG", "images/Dex/gripperswblade1.JPEG", "$images/Dex/IMG_2535.JPEG"],
        "These are some images of the machine and the old grippers I was replacing, as well as one of the new sets of grippers, holding a blade.",
        "slide1"
    );
    e3.makeBlog();
    let e2 = new blog(
        ["images/Dex/bothwithflossers.JPEG", "images/Dex/flosserComb1.JPEG", "images/Dex/burnertop.JPEG"],
        "These images show the two fixtures I worked on for the flossers. In the first image both are shown with the flossers on. The thrid pixture shows just the burning fixture.",
        "slide2"
    );
    e2.makeBlog();
    let e1 = new blog(
        ["images/Dex/pulltestclose.JPEG", "images/Dex/pulltestknife.JPEG"],
        "These show the fixture I designed for the pull test machine, which is also in the pictures. It is a metal rectangle which holds the knife handle for testing the strength of the handle connection.",
        "slide3"
    );
    e1.makeBlog();
}