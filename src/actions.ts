let axios = require('axios');

export class Actions {

    /**
     * Id string.
     *
     * @type {string}
     */
    id: string;

    /*****
     * Create a new instance.
     */
    constructor(private _id) {
        this.id = _id;
    }

    /**
     * On disconnected events.
     *
     * @param  {object} payload
     * @return {void}
     */
    disconnected(payload: any): void {
        axios({
            method:'post',
            url:`http://api_mysql.tv4e.pt/api/socket/Disconnected/${this.id}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept' : 'application/x-www-form-urlencoded',
                'X-Requested-With' : 'XMLHttpRequest'
            },
            data: JSON.stringify(payload)
        })
        .then((response) => {
            if (response.status != 200) {
                console.log('error');
                throw Error(response);
            }
        })
        .catch((error) => {
            console.log('error', error);
        });
    }
}
