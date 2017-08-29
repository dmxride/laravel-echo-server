"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require('axios');
var Actions = (function () {
    function Actions(_id) {
        this._id = _id;
        this.id = _id;
    }
    Actions.prototype.disconnected = function (payload) {
        axios({
            method: 'post',
            url: "http://api_mysql.tv4e.pt/api/socket/Disconnected/" + this.id,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: JSON.stringify(payload)
        })
            .then(function (response) {
            if (response.status != 200) {
                console.log('error');
                throw Error(response);
            }
        })
            .catch(function (error) {
            console.log('error', error);
        });
    };
    return Actions;
}());
exports.Actions = Actions;
