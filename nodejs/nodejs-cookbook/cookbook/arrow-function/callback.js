var getUser = (id, callback) => {
    var user = {
        id,
        name: 'Rodrigo',
    };
    callback(user);
};

getUser(31, (userObject) => {
    console.log(userObject);
});

var showUser = (userObject) => {
    console.log(userObject);
}
getUser(40, showUser);

function showUser2(userObject) {
    console.log(userObject);
}
getUser(50, showUser2);
