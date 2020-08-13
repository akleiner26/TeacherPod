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
    createParent: function (userData) {
        return axios.post("/api/users", userData);
    },
    
    // Creates a new teacher account
    createTeacher: function (userData) {
        return axios.post("/api/users/teacher", userData);
    },

    // Sends the user login information
    sendLoginInfo: function (loginData) {
        return axios.post("/api/users/login", loginData);
    },

    // Creates a pod based on teacher id
    createPod: function (id, podData) {
        return axios.post("/api/pods/", podData);
    },

    // PUT ROUTES
    // ==================================================
    // Updates a teacher's profile based on teacher's id
    updateTeacherProfile: function (id, teacherProfileData) {
        return axios.put("/api/users/teacher/" + id, teacherProfileData);
    },

    // Creates a student based on parent id
    createStudent: function (id, studentData) {
        return axios.put("/api/students/" + id, studentData);
    },

    // Adds a student to a pod based in pod id
    addStudentToPod: function (id, studentData) {
        return axios.put("/api/pods/" + id, studentData);
    },

    // DELETE ROUTES
    // ==================================================
    // Deletes a student from db based on parent id
    deleteStudentFromDB: function (id, idToDelete) {
        return axios.delete("/api/students/byparent/" + id, idToDelete);
    },

    // Deletes a student from a pod based on pod id, but leaves student in db under parent
    deleteStudentFromPod: function (id, idToDelete) {
        return axios.delete("/api/students/pod/" + id, idToDelete);
    },

    // Deletes a pod from db based on pod id
    deletePod: function (id, teacherId) {
        return axios.delete("/api/pods/" + id, teacherId);
    }
};
