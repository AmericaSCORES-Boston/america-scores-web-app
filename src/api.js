import $ from 'jquery';
const root = "http://52.54.56.68/api/",
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
    fetchProgramsByStudent(studentId) {
        return request(createEndpoint('/students/' + studentId + '/programs'))
    },
    //not implemented yet actually
    fetchByAccountType(accountType) {
        console.log("running fetchByAccountType");
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

    addStudent(studentName, studentSite) {
        return request(createEndpoint('/students/'),
            createRequestOptions(POST, {student_name: studentName, student_site: studentSite}));
    },

    fetchStudents(program_id) {
        return request(createEndpoint('/programs/' + program_id + '/students'));
    },

    fetchStat(stat_id) {
        return request(createEndpoint('/stats/' + stat_id));
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