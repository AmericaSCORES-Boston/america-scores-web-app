import $ from 'jquery';
const root= "http://localhost:8888",
//dev "http://localhost:8888",
// root = "http://ec2-54-224-133-79.compute-1.amazonaws.com",
    POST = "POST",
    DELETE = "DELETE",
    PUT = "PUT";

function createEndpoint(path) {
    return root + path;
}

function request(path, options={}) {
    return fetch(path, options)
        .then(response => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch(error => error);
}

function createRequestOptions(request_type, data) {
    return {
        method: request_type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           // 'Origin': 'http://ec2-54-87-140-118.compute-1.amazonaws.com/'
           'Origin':'*'
        },
        body: JSON.stringify(data)
    };
}

const Api = {
    fetchSites() {
        return request(createEndpoint('/sites'));
    },
    fetchPrograms(site_id) {
        return request(createEndpoint('/sites/' + site_id + '/programs'));
    },
    fetchEvents() {
        return request(createEndpoint('/events'));
    },
    fetchSeasons() {
        return request(createEndpoint('/seasons'));
    },
    fetchCurrentSeasonData(year, semester) {
        return request(createEndpoint('/reports?season=' + semester +'&year=' + year));
    },
    fetchProgramsByStudent(studentId) {
        return request(createEndpoint('/students/' + studentId + '/programs'));
    },
    fetchAllPrograms() {
        return request(createEndpoint('/programs'));
    },
    //not implemented yet actually
    fetchByAccountType(accountType) {
        console.log("running fetchByAccountType");
        return request(createEndpoint('/accounts/?acct_type=' + accountType));
    },

    //added delete account bhupendra
    deleteAccount(AccountID) {
        return $.ajax({
            url: root + '/accounts/'+AccountID,
            type: DELETE
        });
    },
    addAccount(email,username,password,first_name,last_name,acct_type){
        return request(createEndpoint('/accounts'), createRequestOptions(POST, {email, username, password, first_name, last_name,acct_type}));

    },

    addProgram(siteId, programName) {
      return request(createEndpoint('/sites/' + siteId +'/programs'),
      createRequestOptions(POST, {program_name: programName}));
    },

    addSite(siteName, siteAddress) {
        return request(createEndpoint('/sites/'),
            createRequestOptions(POST, {site_name: siteName, site_address: siteAddress}));
    },

    // addStudent(studentName, studentSite) {
    //     return request(createEndpoint('/students/'),
    //         createRequestOptions(POST, {student_name: studentName, student_site: studentSite}));
    // },

    //added by bhupendra to add students

    addStudent(first_name,last_name,dob,program_id) {
        return request(createEndpoint('/programs/'+ program_id +'/students'),
            createRequestOptions(POST, {first_name, last_name, dob}));
    },

    fetchStudents(program_id) {
        return request(createEndpoint('/programs/' + program_id + '/students'));
    },

    fetchStat(stat_id) {
        return request(createEndpoint('/stats/' + stat_id));
    },

    fetchAllStats() {
        return request(createEndpoint('/stats'));
    },

    fetchSingleSite(siteId) {
        return request(createEndpoint('/sites/' + siteId));
    },

    createStat(stat) {
        return request(createEndpoint('/stats'), createRequestOptions(POST, stat));
    },

    updateStat(stat) {
        const statId = stat.stat_id || -1;
        return request(createEndpoint('/stats/' + statId), createRequestOptions(PUT, stat));
    },

    fetchStats(program_id) {
        return request(createEndpoint('/programs/' + program_id + '/stats'));
    },

    getReportLink(program_id) {
      return root + '/programs/' + program_id + '/report';
    },

    getAllStudents() {
        return request(createEndpoint('/students'));
    },

    //Tried to use fetch here, but it was giving cors errors. This is also giving us those errors
    deleteSite(siteId) {
      return $.ajax({
            url: root + '/sites/' +siteId,
            type: DELETE
        });
    },

    deleteProgram(programId) {
      return $.ajax({
        url: root + '/programs/' + programId,
        type: DELETE
      });
    },

    deleteStudent(StudentID) {
        return $.ajax({
            url: root + '/students/'+StudentID,
            type: DELETE
        });
    }
};

export default Api;