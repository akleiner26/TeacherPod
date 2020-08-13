import axios from "axios";

export default {
    // GET ROUTES
    // ==================================================
    // Gets all teachers based on grade taught and location (optional: default is "remote")
    getTeachers: function () {
        return axios.get("/api/users");
    },

    // Gets one teacher based on teacher's id
    getTeacher: function (id) {
        return axios.get("/api/users/teacher/" + id);
    },

    // Gets one parent based on parent's id and populates student's info
    getParent: function (id) {
        return axios.get("/api/users/parent/" + id);
    },

    // POST ROUTES
    // ==================================================
    // Creates a new parent account
    createParent: function () {
        return axios.post("/api/users", userData);
    },
    
    // Creates a new teacher account
    createTeacher: function () {
        return axios.post("/api/users/teacher", userData);
    },

    // Sends the user login information
    sendLoginInfo: function () {
        return axios.post("/api/users/login", loginData);
    },

    // PUT ROUTES
    // ==================================================
    // Updates a teacher's profile based on teacher's id
    updateTeacherProfile: function (id) {
        return axios.put("/api/users/teacher/" + id, teacherProfileData);
    }


    // DELETE ROUTES
    // ==================================================

};
