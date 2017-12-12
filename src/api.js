import $ from 'jquery';
const root= "http://ec2-54-164-220-164.compute-1.amazonaws.com/",
    POST = "POST",
    DELETE = "DELETE",
    GET="GET",
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

function auth(idToken) {
    return new Headers({ 'Authorization': 'Bearer '+idToken, 'Connection': 'web' });
}

function createRequestOptions(request_type, data,bearer_token = 0) {
    return {
        method: request_type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           // 'Origin': 'http://ec2-54-87-140-118.compute-1.amazonaws.com/'
           'Origin':'*',
            'Authorization':'Bearer '+bearer_token
        },
        body: JSON.stringify(data)
    };
}

const Api = {
    fetchSites(user) {
        return request(createEndpoint('/sites'), {headers: auth(localStorage.getItem('access_token'))});
    },
    fetchPrograms(site_id) {
        return request(createEndpoint('/sites/' + site_id + '/programs'), {headers: auth(localStorage.getItem('access_token'))});
    },
    fetchEvents() {
        return request(createEndpoint('/events'), {headers: auth(localStorage.getItem('access_token'))});
    },
    fetchSeasons() {
        return request(createEndpoint('/seasons'), {headers: auth(localStorage.getItem('access_token'))});
    },
    fetchCurrentSeasonData(year, semester) {
        return request(createEndpoint('/reports?season=' + semester +'&year=' + year), {headers: auth(localStorage.getItem('access_token'))});
    },
    fetchProgramsByStudent(studentId) {
        return request(createEndpoint('/students/' + studentId + '/programs'), {headers: auth(localStorage.getItem('access_token'))});
    },
    fetchAllPrograms() {
        return request(createEndpoint('/programs'), {headers: auth(localStorage.getItem('access_token'))});
    },
    //not implemented yet actually
    fetchByAccountType(accountType) {
        return request(createEndpoint('/accounts/?acct_type=' + accountType),{headers: auth(localStorage.getItem('access_token'))});
    },

    //added delete account bhupendra
    deleteAccount(AccountID) {
        return $.ajax({
            url: root + '/accounts/'+AccountID,
            type: DELETE,
            beforeSend: function(xhr){xhr.setRequestHeader('Authorization' , 'Bearer '+localStorage.getItem('access_token'));}
        });
    },
    addAccount(email,username,password,first_name,last_name,acct_type){
        return request(createEndpoint('/accounts'), createRequestOptions(POST, {email, username, password, first_name, last_name,acct_type},localStorage.getItem('access_token')));

    },

    addProgram(siteId, programName) {
      return request(createEndpoint('/sites/' + siteId +'/programs'),
      createRequestOptions(POST, {program_name: programName},localStorage.getItem('access_token')));
    },

    addSite(siteName, siteAddress) {
        return request(createEndpoint('/sites/'),
            createRequestOptions(POST, {site_name: siteName, site_address: siteAddress},localStorage.getItem('access_token')));
    },

    //added by bhupendra to add students
    addStudent(first_name,last_name,dob,program_id) {
        return request(createEndpoint('/programs/'+ program_id +'/students'),
            createRequestOptions(POST, {first_name, last_name, dob},localStorage.getItem('access_token')));
    },

    updateStudent(student_id,first_name,last_name,dob,programID){
        return request(createEndpoint('/students/'+student_id+'/programs/'+programID),
            createRequestOptions(PUT,{first_name,last_name,dob},localStorage.getItem('access_token')));
    },

    fetchStudents(program_id) {
        return request(createEndpoint('/programs/' + program_id + '/students'), {headers: auth(localStorage.getItem('access_token'))});
    },

    fetchStat(stat_id) {
        return request(createEndpoint('/stats/' + stat_id), {headers: auth(localStorage.getItem('access_token'))});
    },

    fetchAllStats() {
        return request(createEndpoint('/stats'), {headers: auth(localStorage.getItem('access_token'))});
    },

    fetchSingleSite(siteId) {
        return request(createEndpoint('/sites/' + siteId), {headers: auth(localStorage.getItem('access_token'))});
    },

    createStat(stat) {
        return request(createEndpoint('/stats'), createRequestOptions(POST, stat,localStorage.getItem('access_token')));
    },

    updateStat(stat) {
        const statId = stat.stat_id || -1;
        return request(createEndpoint('/stats/' + statId), createRequestOptions(PUT, stat,localStorage.getItem('access_token')));
    },

    fetchStats(program_id) {
        return request(createEndpoint('/programs/' + program_id + '/stats'), {headers: auth(localStorage.getItem('access_token'))});
    },

    getReportLink(program_id) {
      return root + '/programs/' + program_id + '/report';
    },

    getAllStudents() {
        return request(createEndpoint('/students'), {headers: auth(localStorage.getItem('access_token'))});
    },

    //Tried to use fetch here, but it was giving cors errors. This is also giving us those errors
    deleteSite(siteId) {
      return $.ajax({
            url: root + '/sites/' +siteId,
            type: DELETE,
            beforeSend: function(xhr){xhr.setRequestHeader('Authorization' , 'Bearer '+localStorage.getItem('access_token'));}
        });
    },

    deleteProgram(programId) {
      return $.ajax({
        url: root + '/programs/' + programId,
        type: DELETE,
          beforeSend: function(xhr){xhr.setRequestHeader('Authorization' , 'Bearer '+localStorage.getItem('access_token'));}
      });
    },

    deleteStudent(StudentID) {
        return $.ajax({
            url: root + '/students/'+StudentID,
            type: DELETE,
            beforeSend: function(xhr){xhr.setRequestHeader('Authorization' , 'Bearer '+localStorage.getItem('access_token'));}
        });
    }
};

export default Api;
