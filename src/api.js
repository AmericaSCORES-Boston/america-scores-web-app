import $ from 'jquery';
const root = "http://52.54.56.68/api/",
    POST = "POST",
    DELETE = "DELETE",
    PUT = "PUT",
    GET = "GET";

function createEndpoint(path) {
    return root + path;
}

function request(path, options) {
    let authToken = "";
    if (options === undefined) {
        if (localStorage === undefined) {
            console.log("local storage for window not found");
        } else {
            authToken = localStorage.getItem('id_token');
            options = {method: GET, headers: {'Authorization': authToken}};
        }
    }
    return fetch(path, options)
        .then(response => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch(error => error);
}

function createRequestOptions(request_type, data) {
    let authToken = "";
    if (localStorage === undefined) {
        console.log("local storage for window not found");
    } else {
        authToken = localStorage.getItem('id_token');
    }

    return {
        method: request_type,
        headers: {
            'Authorization': authToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
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
        return request(createEndpoint('/accounts/?acct_type=' + accountType));
    },

    addProgram(siteId, programName) {
      return request(createEndpoint('/sites/' + siteId +'/programs'),
      createRequestOptions(POST, {program_name: programName}));
    },

    addSite(siteName, siteAddress) {
        return request(createEndpoint('/sites/'),
            createRequestOptions(POST, {site_name: siteName, site_address: siteAddress}));
    },

    addStudent(studentFname, studentLname, studentDOB, program_id) {
        return request(createEndpoint('programs/' + program_id + '/students'),
            createRequestOptions(POST, {first_name: studentFname, last_name: studentLname, dob:studentDOB}));
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
    }
};

export default Api;