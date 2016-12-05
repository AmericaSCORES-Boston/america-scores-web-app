const root = "http://crossorigin.me/http://ec2-54-87-140-118.compute-1.amazonaws.com/api",
      rootNoProxy="http://ec2-54-87-140-118.compute-1.amazonaws.com/api",
      POST = "POST",
      PUT = "PUT";

// Build the REST endpoint
// (String) => String
function createEndpoint(path) {
    return root + path;
}

// Make a fetch request
// (String, OptionsObj) => Promise<JSON>
function request(path, options={}) {
    return fetch(path, options)
        .then(response => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch(error => error);
}

// Takes a method and request body data to make options
// (String, Obj) => OptionsObj
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

// Exposed obj api with all the functions
// See the Endpoints Google Doc for explanations
const Api = {
    fetchSites() {
        return request(createEndpoint('/sites'));
    },

    fetchPrograms(site_id) {
        return request(createEndpoint('/sites/' + site_id + '/programs'));
    },

    addProgram(site_id, program_name) {
        return request(createEndpoint('/sites/' + site_id + '/programs'), createRequestOptions(POST, { program_name }));
    },

    fetchStudents(program_id) {
        return request(createEndpoint('/programs/' + program_id + '/students'));
    },

    fetchStat(stat_id) {
        return request(createEndpoint('/stats/' + stat_id));
    },

    createStat(stat) {
        return request(createEndpoint('/stats'), createRequestOptions(POST, stat));
    },

    updateStat(stat) {
        const statId = stat.stat_id || -1;
        return request(createEndpoint('/stats/' + statId), createRequestOptions(PUT), stat);
    },

    fetchStats(program_id) {
        return request(createEndpoint('/programs/' + program_id + '/stats'));
    },

    getReportLink(program_id) {
      return rootNoProxy + '/programs/' + program_id + '/report';
    }
};

export default Api;