function searchCourses() {
    // Get the search input value and convert it to lowercase
    let input = document.getElementById('searchBar').value.toLowerCase();

    // Get all course articles
    let courses = document.getElementsByClassName('course');

    // Loop through the courses and filter based on the input
    for (let i = 0; i < courses.length; i++) {
        let courseTitle = courses[i].getElementsByTagName("h2")[0].innerText.toLowerCase();

        // If the course title includes the search term, display it, otherwise hide it
        if (courseTitle.includes(input)) {
            courses[i].style.display = "";
        } else {
            courses[i].style.display = "none";
        }
    }
}
